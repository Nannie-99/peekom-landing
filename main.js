const { app, BrowserWindow, dialog, globalShortcut, ipcMain, Menu, nativeImage, screen, shell, Tray } = require("electron");
const fs = require("fs");
const os = require("os");
const path = require("path");
const license = require("./license");
const { initAutoUpdater } = require("./updater");
const { trayT, resolveTrayLang } = require("./assets/tray-i18n");

const PRELOAD_PATH = path.join(__dirname, "preload.js");
const IMAGE_EXTENSIONS = new Set(["png", "jpg", "jpeg", "gif", "webp", "bmp", "svg"]);
const EXTERNAL_URL_ALLOWLIST = [
  "peekom.com",
  "www.peekom.com",
  "lemonsqueezy.com",
  "peekom.lemonsqueezy.com"
];

let appUiLanguage = "ko";

function isTrustedRenderer(event) {
  const wc = event?.sender;
  if (!wc || (typeof wc.isDestroyed === "function" && wc.isDestroyed())) return false;
  if (mainWindow && !mainWindow.isDestroyed() && wc.id === mainWindow.webContents.id) return true;
  if (settingsWindow && !settingsWindow.isDestroyed() && wc.id === settingsWindow.webContents.id) return true;
  return false;
}

function requirePremiumAccess() {
  if (!license.isPremiumActive()) {
    return { ok: false, reason: "PREMIUM_REQUIRED" };
  }
  return null;
}

function isSafeExternalUrl(rawUrl) {
  try {
    const safe = /^(https?:|mailto:)/i.test(rawUrl) ? rawUrl : `https://${rawUrl}`;
    const parsed = new URL(safe);
    if (parsed.protocol === "mailto:") return safe;
    const host = parsed.hostname.toLowerCase();
    const allowed = EXTERNAL_URL_ALLOWLIST.some(
      (entry) => host === entry || host.endsWith(`.${entry}`)
    );
    return allowed ? safe : null;
  } catch {
    return null;
  }
}

function looksLikeImage(buf, ext) {
  if (!buf || buf.length < 4) return false;
  if (ext === "png" && buf[0] === 0x89 && buf[1] === 0x50) return true;
  if ((ext === "jpg" || ext === "jpeg") && buf[0] === 0xff && buf[1] === 0xd8) return true;
  if (ext === "gif" && buf[0] === 0x47 && buf[1] === 0x49) return true;
  if (ext === "webp" && buf[0] === 0x52 && buf[1] === 0x49) return true;
  if (ext === "bmp" && buf[0] === 0x42 && buf[1] === 0x4d) return true;
  if (ext === "svg") {
    const text = buf.toString("utf8", 0, Math.min(buf.length, 256)).trim();
    return text.includes("<svg") || text.startsWith("<?xml");
  }
  return false;
}

function isAllowedImagePath(filePath) {
  if (typeof filePath !== "string" || !filePath.trim()) return false;
  let resolved;
  try {
    resolved = path.resolve(filePath.trim());
  } catch {
    return false;
  }
  const ext = path.extname(resolved).slice(1).toLowerCase();
  if (!IMAGE_EXTENSIONS.has(ext)) return false;
  if (!fs.existsSync(resolved)) return false;
  const stat = fs.statSync(resolved);
  if (!stat.isFile() || stat.size > 15 * 1024 * 1024) return false;
  const header = fs.readFileSync(resolved).subarray(0, 32);
  return looksLikeImage(header, ext);
}

const MAX_STATE_JSON_BYTES = 20 * 1024 * 1024;

function isValidStatePayload(jsonPayload) {
  if (typeof jsonPayload !== "string" || jsonPayload.length === 0) return false;
  if (Buffer.byteLength(jsonPayload, "utf8") > MAX_STATE_JSON_BYTES) return false;
  try {
    const parsed = JSON.parse(jsonPayload);
    return Boolean(parsed && parsed.version === 5 && Array.isArray(parsed.slots));
  } catch {
    return false;
  }
}

const MIN_WINDOWS_MAJOR = 10;
const SHARED_STATE_KEY = "ppaekkom-plus-state-v5";
const SHARED_STATE_BACKUP_KEY = "ppaekkom-plus-state-v5-backup";
const MONITOR_PREFS_FILE = "monitor-prefs.json";
const APP_ID = "com.peekom.app";
const DOCS_HELP_URL = "https://www.peekom.com/#help";
const LEMON_BUY_URL =
  "https://peekom.lemonsqueezy.com/checkout/buy/b8f36320-f95e-4ce2-a49c-2c28e2d4c20d";

function resolveIconPath(isPremium) {
  return resolveShellIconPath(isPremium);
}

function resolveShellIconPath(isPremium) {
  const icoName = isPremium ? "plus.ico" : "icon.ico";
  const pngName = isPremium ? "plus.png" : "index.png";
  const candidates = app.isPackaged
    ? [
        path.join(process.resourcesPath, icoName),
        path.join(process.resourcesPath, "icon.ico"),
        path.join(process.resourcesPath, pngName)
      ]
  : [
      path.join(__dirname, "build", icoName),
      path.join(__dirname, "build", "icon.ico"),
      path.join(__dirname, "build", pngName)
    ];
  for (const p of candidates) {
    if (fs.existsSync(p)) return p;
  }
  return path.join(__dirname, "build", "icon.ico");
}

function loadAppIcon(isPremium) {
  const iconPath = resolveIconPath(isPremium);
  if (!fs.existsSync(iconPath)) return undefined;
  const image = nativeImage.createFromPath(iconPath);
  return image.isEmpty() ? undefined : image;
}

/** @type {import("electron").NativeImage | undefined} */
let APP_ICON;
let premiumActive = false;

function getAppDisplayName() {
  return premiumActive ? "Peekom Plus" : "Peekom";
}

function getMonitorPrefsPath() {
  return path.join(app.getPath("userData"), MONITOR_PREFS_FILE);
}

function loadMonitorPrefs() {
  try {
    const prefs = JSON.parse(fs.readFileSync(getMonitorPrefsPath(), "utf8"));
    if (prefs?.mode === "fixed" && typeof prefs.displayId === "number") {
      const display = getDisplayById(prefs.displayId);
      if (display) {
        followCursorMode = false;
        targetDisplayId = prefs.displayId;
        return;
      }
    }
  } catch {
    /* ignore */
  }
  followCursorMode = true;
  targetDisplayId = null;
}

function saveMonitorPrefs() {
  try {
    fs.writeFileSync(
      getMonitorPrefsPath(),
      JSON.stringify({
        mode: followCursorMode ? "auto" : "fixed",
        displayId: followCursorMode ? null : targetDisplayId
      }),
      "utf8"
    );
  } catch {
    /* ignore */
  }
}

function psEscape(value) {
  return String(value).replace(/'/g, "''");
}

function updateWindowsShellBranding(isPremium) {
  if (process.platform !== "win32" || !app.isPackaged) return;

  const label = isPremium ? "Peekom Plus" : "Peekom";
  const legacyLabel = isPremium ? "Peekom" : "Peekom Plus";
  const iconPath = resolveShellIconPath(isPremium);
  const exePath = process.execPath;
  const workDir = path.dirname(exePath);
  const desktop = app.getPath("desktop");
  const startMenu = path.join(app.getPath("appData"), "Microsoft", "Windows", "Start Menu", "Programs");
  const targets = [
    path.join(desktop, `${label}.lnk`),
    path.join(startMenu, `${label}.lnk`)
  ];
  const legacyTargets = [
    path.join(desktop, `${legacyLabel}.lnk`),
    path.join(startMenu, `${legacyLabel}.lnk`)
  ];

  const shortcutLines = targets
    .map((shortcutPath) => {
      return [
        `$s = $shell.CreateShortcut('${psEscape(shortcutPath)}')`,
        `$s.TargetPath = '${psEscape(exePath)}'`,
        `$s.WorkingDirectory = '${psEscape(workDir)}'`,
        `$s.IconLocation = '${psEscape(iconPath)},0'`,
        `$s.Description = '${psEscape(label)}'`,
        "$s.Save()"
      ].join("; ");
    })
    .join("; ");

  const removeLines = legacyTargets
    .filter((legacyPath) => !targets.includes(legacyPath))
    .map((legacyPath) => `if (Test-Path '${psEscape(legacyPath)}') { Remove-Item -LiteralPath '${psEscape(legacyPath)}' -Force }`)
    .join("; ");

  const script = `$shell = New-Object -ComObject WScript.Shell; ${shortcutLines}; ${removeLines}`;
  require("child_process").execFile(
    "powershell.exe",
    ["-NoProfile", "-ExecutionPolicy", "Bypass", "-Command", script],
    () => {}
  );
}

function applyBranding() {
  premiumActive = license.isPremiumActive();
  APP_ICON = loadAppIcon(premiumActive);
  const name = getAppDisplayName();
  app.setName(name);
  if (process.platform === "win32") {
    app.setAppUserModelId(APP_ID);
  }
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.setTitle(name);
    if (APP_ICON) mainWindow.setIcon(APP_ICON);
  }
  if (settingsWindow && !settingsWindow.isDestroyed()) {
    settingsWindow.setTitle(`${name} 설정`);
    if (APP_ICON) settingsWindow.setIcon(APP_ICON);
  }
  if (trayIcon && APP_ICON) {
    trayIcon.setImage(APP_ICON);
    trayIcon.setToolTip(name);
  }
  if (trayIcon) {
    trayIcon.setContextMenu(buildTrayMenu());
  }
  updateWindowsShellBranding(premiumActive);
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send("premium:changed", { isPremium: premiumActive });
  }
  if (settingsWindow && !settingsWindow.isDestroyed()) {
    settingsWindow.webContents.send("premium:changed", { isPremium: premiumActive });
  }
}

function broadcastPremiumChanged() {
  applyBranding();
}

const BASE_NOTE_HEIGHT = 460;
const MIN_NOTE_HEIGHT = 160;
/** 메모 가시 영역 폭 (사용자 인지상의 패널 폭) */
const PANEL_CONTENT_WIDTH = 420;
const COLLAPSED_WIDTH = 32;
/** 펼침 시 메인 창 폭: 메모 + 손잡이 */
const EXPANDED_PANEL_WIDTH = PANEL_CONTENT_WIDTH + COLLAPSED_WIDTH;
const WINDOW_VERTICAL_MARGIN = 18;
const SETTINGS_WINDOW_WIDTH = 520;
const SETTINGS_WINDOW_HEIGHT = 640;
/** 창 세로 드래그 시 setBounds 호출 최소 간격 (ms) */
const NUDGE_REFRESH_MS = 24;
const DEFAULT_SETTINGS = {
  anchor: "middle",
  lengthMode: "long",
  triggerMode: "hover",
  shortcut: "CommandOrControl+Shift+M",
  shortcutSlotPrev: "CommandOrControl+Shift+Up",
  shortcutSlotNext: "CommandOrControl+Shift+Down",
  manualYOffset: 0,
  panelEdge: "right"
};

/** @type {BrowserWindow | null} */
let mainWindow = null;
/** @type {BrowserWindow | null} */
let settingsWindow = null;
let settingsAllowClose = false;
let followCursorDisplayInterval = null;
let followCursorMode = true;
let targetDisplayId = null;
let lastAttachedSignature = null;
let panelExpanded = false;
let pointerOverPanel = false;
let mainWindowFocused = false;
let ignoreMouseEventsActive = false;
let currentAlwaysOnTopLevel = null;
let peekAutoCollapseEnabled = false;
let peekCollapseMonitorInterval = null;
/** 빼꼼 모드: 창 밖 커서는 OS가 이벤트를 안 주므로 화면 좌표로 폴링 */
const PEEK_COLLAPSE_POLL_MS = 50;
/** 창 확장 직후 잘못된 "커서 밖" 판정 방지용 유예 시간 (ms) */
const EXPAND_GRACE_MS = 350;
let panelExpandedAt = 0;
let isDraggingWindow = false;
let appSettings = { ...DEFAULT_SETTINGS };
let registeredShortcuts = [];
let lastNudgeRefreshAt = 0;
let pendingNudgeRefresh = null;
/** @type {Tray | null} */
let trayIcon = null;
let trayVisible = true;

function clamp(num, min, max) {
  return Math.max(min, Math.min(num, max));
}

/**
 * 배포(패키징) 빌드에서 개발자 도구를 여는 단축키를 차단한다.
 * (F12, Ctrl/Cmd+Shift+I/J/C, Ctrl+Shift+K 등)
 * 무료 사용자가 콘솔을 열어 화면측 유료 플래그를 조작하는 우회를 막기 위함.
 * @returns {boolean} 차단했으면 true
 */
function blockDevtoolsShortcut(input) {
  if (!app.isPackaged) return false;
  const key = String(input.key || "");
  if (key === "F12") return true;
  if ((input.control || input.meta) && input.shift) {
    const upper = key.toUpperCase();
    if (["I", "J", "C", "K"].includes(upper)) return true;
  }
  return false;
}

function isWindowsVersionSupported() {
  if (process.platform !== "win32") return true;
  const major = parseInt(String(os.release()).split(".")[0], 10);
  return Number.isFinite(major) && major >= MIN_WINDOWS_MAJOR;
}

function assertOsSupported() {
  if (isWindowsVersionSupported()) return true;
  dialog.showErrorBox(
    "지원되지 않는 Windows 버전",
    "이 앱은 Windows 10 및 Windows 11 (64-bit)에서만 실행됩니다.\n\nWindows 7 / 8 / 8.1은 지원되지 않습니다."
  );
  app.quit();
  return false;
}

function getStartupLoginOptions() {
  return process.platform === "darwin" ? {} : { path: process.execPath, args: [] };
}

function readStartupLoginState() {
  return app.getLoginItemSettings(getStartupLoginOptions());
}

function setStartupLoginState(openAtLogin) {
  if (process.platform === "darwin") {
    app.setLoginItemSettings({ openAtLogin: Boolean(openAtLogin) });
    return;
  }
  app.setLoginItemSettings({
    openAtLogin: Boolean(openAtLogin),
    path: process.execPath,
    args: []
  });
}

/** 제거 후 남는 고아 시작 항목 방지: 실행 파일이 없으면 등록 해제 */
function healOrphanedStartupRegistration() {
  if (process.platform !== "win32" || !app.isPackaged) return;
  try {
    if (!fs.existsSync(process.execPath)) {
      setStartupLoginState(false);
    }
  } catch {
    /* ignore */
  }
}

/** 부팅 시 Windows 시작 프로그램 레지스트리 값을 렌더러에 1회 전달 */
function pushStartupLoginSync(targetWindow) {
  if (!targetWindow || targetWindow.isDestroyed()) return;
  const wc = targetWindow.webContents;
  if (!wc || wc.isDestroyed()) return;
  try {
    const openAtLogin = Boolean(readStartupLoginState().openAtLogin);
    wc.send("startup:synced", { openAtLogin });
  } catch {
    /* ignore */
  }
}

/** Windows 레지스트리 시작 프로그램 상태를 렌더러에 1회 전달 */
function pushStartupLoginSync(targetWindow) {
  if (!targetWindow || targetWindow.isDestroyed()) return;
  const wc = targetWindow.webContents;
  if (!wc || wc.isDestroyed()) return;
  try {
    const openAtLogin = Boolean(readStartupLoginState().openAtLogin);
    wc.send("startup:synced", { openAtLogin });
  } catch {
    /* ignore */
  }
}

function normalizeSettings(partialSettings = {}) {
  const merged = { ...appSettings, ...partialSettings };

  const safeAnchor = ["top", "middle", "bottom", "custom"].includes(merged.anchor)
    ? merged.anchor
    : DEFAULT_SETTINGS.anchor;

  const safeLengthMode = ["short", "normal", "long"].includes(merged.lengthMode)
    ? merged.lengthMode
    : DEFAULT_SETTINGS.lengthMode;

  const safeTriggerMode = ["hover", "shortcut"].includes(merged.triggerMode)
    ? merged.triggerMode
    : DEFAULT_SETTINGS.triggerMode;

  const safeShortcut =
    typeof merged.shortcut === "string" && merged.shortcut.trim().length > 0
      ? merged.shortcut.trim()
      : DEFAULT_SETTINGS.shortcut;

  const safeShortcutSlotPrev =
    typeof merged.shortcutSlotPrev === "string" && merged.shortcutSlotPrev.trim().length > 0
      ? merged.shortcutSlotPrev.trim()
      : DEFAULT_SETTINGS.shortcutSlotPrev;

  const safeShortcutSlotNext =
    typeof merged.shortcutSlotNext === "string" && merged.shortcutSlotNext.trim().length > 0
      ? merged.shortcutSlotNext.trim()
      : DEFAULT_SETTINGS.shortcutSlotNext;

  const safeManualYOffset =
    typeof merged.manualYOffset === "number" && Number.isFinite(merged.manualYOffset)
      ? Math.round(merged.manualYOffset)
      : 0;

  const safePanelEdge = merged.panelEdge === "left" ? "left" : "right";

  return {
    anchor: safeAnchor,
    lengthMode: safeLengthMode,
    triggerMode: safeTriggerMode,
    shortcut: safeShortcut,
    shortcutSlotPrev: safeShortcutSlotPrev,
    shortcutSlotNext: safeShortcutSlotNext,
    manualYOffset: safeManualYOffset,
    panelEdge: safePanelEdge
  };
}

function unregisterAllShortcuts() {
  registeredShortcuts.forEach((accelerator) => {
    try {
      globalShortcut.unregister(accelerator);
    } catch {
      /* ignore */
    }
  });
  registeredShortcuts = [];
}

function updateShortcutRegistration() {
  unregisterAllShortcuts();

  if (appSettings.triggerMode !== "shortcut") {
    return { ok: true, registered: false };
  }

  const bindings = [
    { accelerator: appSettings.shortcut, channel: "shortcut:toggle-expand" },
    { accelerator: appSettings.shortcutSlotPrev, channel: "shortcut:slot-prev" },
    { accelerator: appSettings.shortcutSlotNext, channel: "shortcut:slot-next" }
  ];

  for (const { accelerator, channel } of bindings) {
    if (!accelerator) continue;
    const registered = globalShortcut.register(accelerator, () => {
      if (!mainWindow || mainWindow.isDestroyed()) return;
      mainWindow.webContents.send(channel);
    });
    if (!registered) {
      unregisterAllShortcuts();
      return {
        ok: false,
        registered: false,
        message: `단축키 등록 실패: ${accelerator}`
      };
    }
    registeredShortcuts.push(accelerator);
  }

  return { ok: true, registered: true };
}

function getDisplayInfos() {
  return screen.getAllDisplays().map((display) => ({
    id: display.id,
    label: display.label || `Display ${display.id}`,
    scaleFactor: display.scaleFactor,
    rotation: display.rotation,
    bounds: display.bounds,
    workArea: display.workArea,
    size: display.size
  }));
}

function getDisplayById(displayId) {
  return screen.getAllDisplays().find((display) => display.id === displayId) || null;
}

function getCursorDisplay() {
  const cursorPoint = screen.getCursorScreenPoint();
  return screen.getDisplayNearestPoint(cursorPoint);
}

function resolveTargetDisplay() {
  if (!followCursorMode && targetDisplayId !== null) {
    const fixedDisplay = getDisplayById(targetDisplayId);
    if (fixedDisplay) return fixedDisplay;
    followCursorMode = true;
    targetDisplayId = null;
  }

  return getCursorDisplay();
}

function getCurrentPanelWidth() {
  return EXPANDED_PANEL_WIDTH;
}

function applyAlwaysOnTopPolicy() {
  if (!mainWindow || mainWindow.isDestroyed()) return;

  // 손잡이 띠가 다른 창에 가려지지 않도록 항상 최상위 유지.
  // 펼쳐진 상태에서는 한 단계 더 높은 레벨을 사용해 메모 패널이 최전면에 오도록 한다.
  const desiredLevel = panelExpanded ? "screen-saver" : "floating";

  // 50ms 폴링(window:sync-interaction)마다 setAlwaysOnTop을 재호출하면
  // z-order가 계속 흔들려, 설정창의 네이티브 <select> 드롭다운이 심하게 깜빡인다.
  // 실제로 레벨이 바뀔 때만 호출하여 불필요한 z-order 변경을 막는다.
  if (desiredLevel === currentAlwaysOnTopLevel) return;
  currentAlwaysOnTopLevel = desiredLevel;
  mainWindow.setAlwaysOnTop(true, desiredLevel);
}

function isSettingsWindowOpen() {
  return Boolean(settingsWindow && !settingsWindow.isDestroyed());
}

function notifySettingsWindowState() {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  mainWindow.webContents.send("settings:window-state", {
    open: isSettingsWindowOpen()
  });
}

function applySettingsWindowLayerPolicy() {
  if (!isSettingsWindowOpen()) return;
  settingsWindow.setAlwaysOnTop(true, "screen-saver");
  // 설정창이 열려 있어도 메인(투명) 창의 빈 영역은 아래 앱으로 통과해야 한다.
  // 클릭 통과/차단은 렌더러 히트테스트(refreshPointerHitTest)가 전담하므로
  // 여기서 강제로 통과를 막지 않고, 폴링 모니터도 계속 유지한다.
  updatePeekCollapseMonitor();
}

function applyMouseIgnorePolicy(ignore) {
  if (!mainWindow || mainWindow.isDestroyed()) return;

  const nextIgnore = Boolean(ignore);
  if (nextIgnore === ignoreMouseEventsActive) return;

  ignoreMouseEventsActive = nextIgnore;
  if (nextIgnore) {
    mainWindow.setIgnoreMouseEvents(true, { forward: true });
  } else {
    mainWindow.setIgnoreMouseEvents(false);
  }
}

function stopPeekCollapseMonitor() {
  if (peekCollapseMonitorInterval) {
    clearInterval(peekCollapseMonitorInterval);
    peekCollapseMonitorInterval = null;
  }
}

function tickPeekCollapseMonitor() {
  if (!mainWindow || mainWindow.isDestroyed()) {
    stopPeekCollapseMonitor();
    return;
  }

  const cursor = screen.getCursorScreenPoint();
  const bounds = mainWindow.getBounds();
  const insideWindow =
    cursor.x >= bounds.x &&
    cursor.x < bounds.x + bounds.width &&
    cursor.y >= bounds.y &&
    cursor.y < bounds.y + bounds.height;

  if (!insideWindow) {
    mainWindow.webContents.send("peek:auto-collapse-poll", {
      outsideWindow: true,
      clientX: -1,
      clientY: -1
    });
    return;
  }

  mainWindow.webContents.send("peek:auto-collapse-poll", {
    outsideWindow: false,
    clientX: cursor.x - bounds.x,
    clientY: cursor.y - bounds.y
  });
}

function updatePeekCollapseMonitor() {
  if (!mainWindow || mainWindow.isDestroyed()) {
    stopPeekCollapseMonitor();
    return;
  }
  if (peekCollapseMonitorInterval) return;

  peekCollapseMonitorInterval = setInterval(tickPeekCollapseMonitor, PEEK_COLLAPSE_POLL_MS);
  tickPeekCollapseMonitor();
}

function setPanelExpandedState(expanded) {
  panelExpanded = Boolean(expanded);
  if (panelExpanded) {
    panelExpandedAt = Date.now();
  }
  // 클릭 통과는 렌더러 히트테스트가 담당. 펼침 시에도 기본값은 통과(true).
  applyMouseIgnorePolicy(true);
  applyAlwaysOnTopPolicy();
  updatePeekCollapseMonitor();
}

function getWindowDimensions(targetDisplay) {
  const width = getCurrentPanelWidth();
  const height = targetDisplay.bounds.height;
  return { width, height };
}

function computeAnchoredY(displayBounds) {
  return displayBounds.y;
}

function getAttachedBounds(targetDisplay) {
  const { bounds } = targetDisplay;
  const { width, height } = getWindowDimensions(targetDisplay);
  const edge = appSettings.panelEdge === "left" ? "left" : "right";
  const x = edge === "left" ? bounds.x : bounds.x + bounds.width - width;
  const y = computeAnchoredY(bounds);
  return { x, y, width, height };
}

function attachWindowToDisplay(display) {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  const { x, y, width, height } = getAttachedBounds(display);
  // 드래그 중에는 애니메이션 없이 즉시 이동 (macOS animate=true가 jitter 유발)
  mainWindow.setBounds({ x, y, width, height }, !isDraggingWindow);
}

function getAttachedSignature(display) {
  const { bounds } = display;
  const modeKey = followCursorMode ? "auto" : `fixed:${targetDisplayId}`;
  return [
    modeKey,
    display.id,
    bounds.x,
    bounds.y,
    bounds.width,
    bounds.height,
    appSettings.anchor,
    appSettings.lengthMode,
    appSettings.manualYOffset,
    appSettings.panelEdge
  ].join(":");
}

function refreshWindowPosition(force = false) {
  const targetDisplay = resolveTargetDisplay();
  if (!targetDisplay) return null;

  const nextSignature = getAttachedSignature(targetDisplay);
  if (force || lastAttachedSignature !== nextSignature) {
    attachWindowToDisplay(targetDisplay);
    lastAttachedSignature = nextSignature;
  }

  return targetDisplay;
}

function getWindowState() {
  const activeDisplay = resolveTargetDisplay();
  return {
    followCursorMode,
    targetDisplayId,
    activeDisplayId: activeDisplay?.id ?? null,
    panelExpanded,
    panelWidth: getCurrentPanelWidth(),
    settings: appSettings,
    isSettingsOpen: Boolean(settingsWindow && !settingsWindow.isDestroyed())
  };
}

function startFollowingCursorDisplay() {
  if (followCursorDisplayInterval) {
    clearInterval(followCursorDisplayInterval);
  }

  followCursorDisplayInterval = setInterval(() => {
    if (!mainWindow || mainWindow.isDestroyed()) return;
    refreshWindowPosition(false);
  }, 250);
}

function createMainWindow() {
  const initialDisplay = resolveTargetDisplay() || screen.getPrimaryDisplay();
  const initialBounds = getAttachedBounds(initialDisplay);

  mainWindow = new BrowserWindow({
    ...initialBounds,
    ...(APP_ICON ? { icon: APP_ICON } : {}),
    frame: false,
    transparent: true,
    backgroundColor: "#00000000",
    alwaysOnTop: false,
    skipTaskbar: false,
    hasShadow: false,
    resizable: false,
    maximizable: false,
    minimizable: true,
    fullscreenable: false,
    webPreferences: {
      preload: PRELOAD_PATH,
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false,
      devTools: !app.isPackaged
    }
  });

  mainWindow.webContents.setWindowOpenHandler(() => ({ action: "deny" }));
  mainWindow.webContents.on("will-navigate", (event) => {
    event.preventDefault();
  });

  mainWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
  mainWindow.setFullScreenable(false);
  mainWindow.loadFile(path.join(__dirname, "index.html"));

  mainWindow.on("focus", () => {
    mainWindowFocused = true;
    applyAlwaysOnTopPolicy();
  });

  mainWindow.on("blur", () => {
    mainWindowFocused = false;
    applyAlwaysOnTopPolicy();
  });

  mainWindow.webContents.on("did-finish-load", () => {
    applyAlwaysOnTopPolicy();
    applyMouseIgnorePolicy(true);
    updatePeekCollapseMonitor();
    mainWindow.webContents.setZoomFactor(1.0);
    pushStartupLoginSync(mainWindow);
  });

  // Ctrl/Cmd +/- 줌 키를 렌더러가 처리하기 전에 차단
  mainWindow.webContents.on("before-input-event", (event, input) => {
    if (blockDevtoolsShortcut(input)) {
      event.preventDefault();
      return;
    }
    if ((input.control || input.meta) &&
        (input.key === "=" || input.key === "+" || input.key === "-" ||
         input.key === "_" || input.key === "0")) {
      event.preventDefault();
    }
  });

  refreshWindowPosition(true);
  startFollowingCursorDisplay();

  mainWindow.on("closed", () => {
    stopPeekCollapseMonitor();
    mainWindow = null;
    mainWindowFocused = false;
    pointerOverPanel = false;
    ignoreMouseEventsActive = false;
    currentAlwaysOnTopLevel = null;
    peekAutoCollapseEnabled = false;
  });
}

function createSettingsWindow() {
  if (settingsWindow && !settingsWindow.isDestroyed()) {
    settingsWindow.focus();
    applySettingsWindowLayerPolicy();
    return;
  }

  const targetDisplay = resolveTargetDisplay() || screen.getPrimaryDisplay();
  const dispBounds = targetDisplay.bounds;
  const x = dispBounds.x + Math.round((dispBounds.width - SETTINGS_WINDOW_WIDTH) / 2);
  const y = dispBounds.y + Math.round((dispBounds.height - SETTINGS_WINDOW_HEIGHT) / 2);

  settingsWindow = new BrowserWindow({
    width: SETTINGS_WINDOW_WIDTH,
    height: SETTINGS_WINDOW_HEIGHT,
    x,
    y,
    ...(APP_ICON ? { icon: APP_ICON } : {}),
    title: `${getAppDisplayName()} 설정`,
    parent: mainWindow || undefined,
    modal: false,
    resizable: false,
    minimizable: false,
    maximizable: false,
    fullscreenable: false,
    skipTaskbar: false,
    autoHideMenuBar: true,
    webPreferences: {
      preload: PRELOAD_PATH,
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false,
      devTools: !app.isPackaged
    }
  });

  settingsWindow.webContents.setWindowOpenHandler(() => ({ action: "deny" }));
  settingsWindow.webContents.on("will-navigate", (event) => {
    event.preventDefault();
  });

  settingsWindow.setMenuBarVisibility(false);
  settingsWindow.setAlwaysOnTop(true, "screen-saver");
  settingsWindow.loadFile(path.join(__dirname, "settings.html"));

  settingsWindow.webContents.once("did-finish-load", () => {
    pushStartupLoginSync(settingsWindow);
    applySettingsWindowLayerPolicy();
    notifySettingsWindowState();
  });

  settingsWindow.webContents.on("before-input-event", (event, input) => {
    if (blockDevtoolsShortcut(input)) {
      event.preventDefault();
      return;
    }
    if ((input.control || input.meta) &&
        (input.key === "=" || input.key === "+" || input.key === "-" ||
         input.key === "_" || input.key === "0")) {
      event.preventDefault();
    }
  });

  settingsWindow.on("focus", () => {
    applySettingsWindowLayerPolicy();
  });

  settingsWindow.on("show", () => {
    applySettingsWindowLayerPolicy();
  });

  settingsWindow.on("close", (e) => {
    if (settingsAllowClose) {
      settingsAllowClose = false;
      return;
    }
    e.preventDefault();
    if (settingsWindow && !settingsWindow.isDestroyed()) {
      settingsWindow.webContents.send("settings:request-close");
    }
  });

  settingsWindow.on("closed", () => {
    settingsWindow = null;
    applyAlwaysOnTopPolicy();
    applyMouseIgnorePolicy(true);
    updatePeekCollapseMonitor();
    notifySettingsWindowState();
  });
}

function updateAppUiLanguageFromStateJson(stateJson) {
  if (typeof stateJson !== "string" || !stateJson) return;
  try {
    const parsed = JSON.parse(stateJson);
    const lang = parsed?.global?.language;
    if (typeof lang === "string" && lang.trim()) {
      appUiLanguage = resolveTrayLang(lang.trim());
      if (trayIcon) trayIcon.setContextMenu(buildTrayMenu());
    }
  } catch {
    /* ignore */
  }
}

function syncPanelEdgeFromStateJson(stateJson) {
  if (typeof stateJson !== "string" || !stateJson) return;
  try {
    const parsed = JSON.parse(stateJson);
    let edge = parsed?.global?.panelEdge === "left" ? "left" : "right";
    if (edge === "left" && !premiumActive) edge = "right";
    const prevEdge = appSettings.panelEdge;
    appSettings = normalizeSettings({ ...appSettings, panelEdge: edge });
    if (prevEdge !== appSettings.panelEdge) {
      lastAttachedSignature = null;
      refreshWindowPosition(true);
    }
  } catch {
    /* ignore */
  }
}

function syncAppStateFromStateJson(stateJson) {
  updateAppUiLanguageFromStateJson(stateJson);
  syncPanelEdgeFromStateJson(stateJson);
}

function broadcastStateChanged(options = {}) {
  const {
    skipSettingsReload = false,
    skipMainReload = false,
    stateJson = null,
    partial = false,
    fields = null
  } = options;

  if (typeof stateJson === "string" && stateJson.length > 0) {
    syncAppStateFromStateJson(stateJson);
  }

  if (!skipMainReload && mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send("settings:applied", {
      stateJson: typeof stateJson === "string" && stateJson.length > 0 ? stateJson : null
    });
  }

  if (!skipSettingsReload && settingsWindow && !settingsWindow.isDestroyed()) {
    if (partial) {
      settingsWindow.webContents.send("state:partial-changed", {
        fields: Array.isArray(fields) ? fields : ["slots"]
      });
    } else {
      settingsWindow.webContents.send("state:changed");
    }
  }
}

function broadcastSettingsApplied() {
  broadcastStateChanged();
}

function buildTrayMenu() {
  const lang = appUiLanguage || "ko";
  const shortcutLabel =
    appSettings.triggerMode === "shortcut" && appSettings.shortcut
      ? `\t${appSettings.shortcut.replace("CommandOrControl", "Ctrl")}`
      : "";
  const items = [
    {
      label: `${trayT("toggleMemo", lang)}${shortcutLabel}`,
      click: () => {
        if (mainWindow && !mainWindow.isDestroyed()) {
          mainWindow.webContents.send("shortcut:toggle-expand");
        }
      }
    },
    {
      label: trayT("addIndex", lang),
      click: () => {
        if (mainWindow && !mainWindow.isDestroyed()) {
          mainWindow.webContents.send("tray:add-index");
        }
      }
    },
    { type: "separator" },
    {
      label: trayT("settings", lang),
      click: () => createSettingsWindow()
    },
    {
      label: trayT("help", lang),
      click: () => shell.openExternal(DOCS_HELP_URL)
    }
  ];
  if (!premiumActive) {
    items.push({
      label: trayT("upgradePlus", lang),
      click: () => {
        if (settingsWindow && !settingsWindow.isDestroyed()) {
          settingsWindow.focus();
          settingsWindow.webContents.send("premium:show-modal");
        } else {
          createSettingsWindow();
          settingsWindow?.webContents.once("did-finish-load", () => {
            settingsWindow.webContents.send("premium:show-modal");
          });
        }
      }
    });
  }
  items.push(
    { type: "separator" },
    {
      label: trayT("restart", lang),
      click: () => {
        app.relaunch();
        app.exit(0);
      }
    },
    {
      label: trayT("quit", lang),
      click: () => app.quit()
    }
  );
  return Menu.buildFromTemplate(items);
}

function ensureTrayIcon() {
  if (trayIcon || !APP_ICON) return;
  trayIcon = new Tray(APP_ICON);
  trayIcon.setToolTip(getAppDisplayName());
  trayIcon.setContextMenu(buildTrayMenu());
  trayIcon.on("double-click", () => {
    createSettingsWindow();
  });
}

function setTrayVisibility(visible) {
  trayVisible = Boolean(visible);
  if (trayVisible) {
    ensureTrayIcon();
  } else if (trayIcon) {
    trayIcon.destroy();
    trayIcon = null;
  }
}

function focusRunningInstance() {
  if (settingsWindow && !settingsWindow.isDestroyed()) {
    if (settingsWindow.isMinimized()) settingsWindow.restore();
    settingsWindow.show();
    settingsWindow.focus();
    applySettingsWindowLayerPolicy();
    return;
  }
  if (mainWindow && !mainWindow.isDestroyed()) {
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.show();
    mainWindow.focus();
    return;
  }
  createSettingsWindow();
}

const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  app.quit();
} else {
  app.on("second-instance", (_event, commandLine) => {
    const shouldOpenSettings = Array.isArray(commandLine) && commandLine.includes("--open-settings");
    if (shouldOpenSettings) {
      createSettingsWindow();
      return;
    }
    focusRunningInstance();
  });

  app.whenReady().then(async () => {
  if (!assertOsSupported()) return;

  // 배포 빌드에서는 기본 애플리케이션 메뉴(개발자 도구 단축키 포함)를 제거한다.
  if (app.isPackaged) {
    Menu.setApplicationMenu(null);
  }

  loadMonitorPrefs();

  await license.verifyStoredLicense().catch(() => {});

  premiumActive = license.isPremiumActive();
  APP_ICON = loadAppIcon(premiumActive);
  applyBranding();
  healOrphanedStartupRegistration();

  appSettings = normalizeSettings();
  updateShortcutRegistration();
  ensureTrayIcon();

  ipcMain.handle("premium:get", () => ({
    ok: true,
    isPremium: license.isPremiumActive(),
    buyUrl: LEMON_BUY_URL,
    ...license.getLicenseDebugInfo()
  }));

  ipcMain.handle("premium:activate", async (_, licenseKey) => {
    const result = await license.activateLicenseKey(licenseKey);
    if (result.ok) {
      broadcastPremiumChanged();
    }
    return result;
  });

  ipcMain.handle("premium:open-buy", async () => {
    await shell.openExternal(LEMON_BUY_URL);
    return { ok: true };
  });

  function sanitizeFontFamilyName(name) {
    if (typeof name !== "string") return null;
    const trimmed = name.trim();
    if (!trimmed) return null;
    if (trimmed.includes("\uFFFD")) return null;
    if (/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/.test(trimmed)) return null;
    if (/^(Regular|Bold|Light|Medium|Semilight|Semibold|Black|Heavy|Thin|Italic)$/i.test(trimmed)) {
      return null;
    }
    const chars = Array.from(trimmed);
    if (chars.length < 1 || chars.length > 64) return null;
    return trimmed;
  }

  function normalizeFontList(fonts) {
    const seen = new Set();
    const out = [];
    for (const raw of fonts) {
      const name = sanitizeFontFamilyName(raw);
      if (!name) continue;
      const key = name.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      out.push(name);
    }
    return out.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
  }

  let cachedSystemFonts = null;

  ipcMain.handle("system:list-fonts", async () => {
    if (cachedSystemFonts) {
      return { ok: true, fonts: cachedSystemFonts };
    }
    try {
      const { execFile } = require("child_process");
      const { promisify } = require("util");
      const execFileAsync = promisify(execFile);
      if (process.platform === "win32") {
        const ps = [
          "[Console]::OutputEncoding = [System.Text.Encoding]::UTF8",
          "$OutputEncoding = [System.Text.Encoding]::UTF8",
          "[System.Reflection.Assembly]::LoadWithPartialName('System.Drawing') | Out-Null",
          "[System.Drawing.FontFamily]::Families | ForEach-Object { $_.Name }"
        ].join("; ");
        const { stdout } = await execFileAsync(
          "powershell.exe",
          ["-NoProfile", "-Command", ps],
          { encoding: "utf8", maxBuffer: 10 * 1024 * 1024 }
        );
        const fonts = normalizeFontList(
          stdout
            .split(/\r?\n/)
            .map((s) => s.trim())
            .filter(Boolean)
        );
        cachedSystemFonts = fonts.length
          ? fonts
          : ["Segoe UI", "Malgun Gothic", "Arial", "Consolas"];
        return { ok: true, fonts: cachedSystemFonts };
      }
      cachedSystemFonts = ["Segoe UI", "Malgun Gothic", "Arial", "Consolas"];
      return { ok: true, fonts: cachedSystemFonts };
    } catch (err) {
      return { ok: false, message: String(err?.message || err), fonts: [] };
    }
  });

  ipcMain.handle("display:list", () => {
    const cursorDisplay = getCursorDisplay();
    return {
      cursorDisplayId: cursorDisplay?.id ?? null,
      displays: getDisplayInfos(),
      windowState: getWindowState()
    };
  });

  ipcMain.handle("window:set-target-display", (_, displayIdOrNull) => {
    if (typeof displayIdOrNull === "number") {
      const selectedDisplay = getDisplayById(displayIdOrNull);
      if (!selectedDisplay) {
        return { ok: false, reason: "DISPLAY_NOT_FOUND", windowState: getWindowState() };
      }
      followCursorMode = false;
      targetDisplayId = selectedDisplay.id;
    } else {
      followCursorMode = true;
      targetDisplayId = null;
    }

    saveMonitorPrefs();
    lastAttachedSignature = null;
    const activeDisplay = refreshWindowPosition(true);
    return { ok: true, activeDisplayId: activeDisplay?.id ?? null, windowState: getWindowState() };
  });

  ipcMain.handle("window:set-panel-expanded", (_, expanded) => {
    setPanelExpandedState(expanded);
    return { ok: true, windowState: getWindowState() };
  });

  ipcMain.handle("window:sync-interaction", (_, payload = {}) => {
    if (typeof payload.pointerOver === "boolean") {
      pointerOverPanel = payload.pointerOver;
    }
    if (typeof payload.ignoreMouse === "boolean") {
      applyMouseIgnorePolicy(payload.ignoreMouse);
    }
    applyAlwaysOnTopPolicy();
    return { ok: true, windowState: getWindowState() };
  });

  ipcMain.handle("window:set-peek-auto-collapse", (_, enabled) => {
    peekAutoCollapseEnabled = Boolean(enabled);
    updatePeekCollapseMonitor();
    return { ok: true, windowState: getWindowState() };
  });

  // 드래그 위치 이동: fire-and-forget (응답 없음) → 왕복 대기 없이 즉시 반영
  ipcMain.on("window:drag-move", (_, deltaY) => {
    if (typeof deltaY !== "number" || Number.isNaN(deltaY) || deltaY === 0) return;
    isDraggingWindow = true;
    appSettings.anchor = "custom";
    appSettings.manualYOffset = clamp(appSettings.manualYOffset + deltaY, -2500, 2500);
    lastAttachedSignature = null;
    const display = resolveTargetDisplay();
    if (display) attachWindowToDisplay(display);
  });

  // 드래그 종료: 소수점 정리 후 설정 동기화
  ipcMain.handle("window:drag-end", () => {
    isDraggingWindow = false;
    appSettings.manualYOffset = clamp(Math.round(appSettings.manualYOffset), -2500, 2500);
    lastAttachedSignature = null;
    refreshWindowPosition(true);
    return { ok: true, windowState: getWindowState() };
  });

  ipcMain.handle("window:nudge-y", (_, deltaY) => {
    if (typeof deltaY !== "number" || Number.isNaN(deltaY)) {
      return { ok: false, reason: "INVALID_DELTA", windowState: getWindowState() };
    }

    appSettings.anchor = "custom";
    appSettings.manualYOffset = clamp(appSettings.manualYOffset + Math.round(deltaY), -2500, 2500);
    lastAttachedSignature = null;

    const now = Date.now();
    const elapsed = now - lastNudgeRefreshAt;
    if (elapsed >= NUDGE_REFRESH_MS) {
      lastNudgeRefreshAt = now;
      if (pendingNudgeRefresh) {
        clearTimeout(pendingNudgeRefresh);
        pendingNudgeRefresh = null;
      }
      refreshWindowPosition(true);
    } else if (!pendingNudgeRefresh) {
      pendingNudgeRefresh = setTimeout(() => {
        pendingNudgeRefresh = null;
        lastNudgeRefreshAt = Date.now();
        refreshWindowPosition(true);
      }, NUDGE_REFRESH_MS - elapsed);
    }

    return { ok: true, windowState: getWindowState() };
  });

  ipcMain.handle("settings:open-window", () => {
    createSettingsWindow();
    return { ok: true };
  });

  ipcMain.handle("settings:close-window", () => {
    if (settingsWindow && !settingsWindow.isDestroyed()) {
      settingsAllowClose = true;
      settingsWindow.close();
    }
    return { ok: true };
  });

  ipcMain.handle("settings:update", (_, partialSettings) => {
    appSettings = normalizeSettings(partialSettings);
    if (appSettings.anchor !== "custom") {
      appSettings.manualYOffset = 0;
    }

    const shortcutStatus = updateShortcutRegistration();
    if (trayIcon) {
      trayIcon.setContextMenu(buildTrayMenu());
    }
    lastAttachedSignature = null;
    refreshWindowPosition(true);

    return { ok: true, shortcutStatus, windowState: getWindowState() };
  });

      ipcMain.handle("memo:flush", async () => {
    if (!mainWindow || mainWindow.isDestroyed()) {
      return { ok: false, reason: "NO_MAIN_WINDOW" };
    }
    try {
      const flushed = await mainWindow.webContents.executeJavaScript(
        "typeof window.__peekomFlushAllMemos === 'function' ? window.__peekomFlushAllMemos() : (typeof window.__peekomFlushActiveMemo === 'function' ? window.__peekomFlushActiveMemo() : false)",
        true
      );
      return { ok: Boolean(flushed) };
    } catch (err) {
      return { ok: false, reason: String(err?.message || err) };
    }
  });

  ipcMain.handle("settings:notify-applied", (_, options = {}) => {
    if (typeof options.language === "string" && options.language.trim()) {
      appUiLanguage = resolveTrayLang(options.language.trim());
      if (trayIcon) trayIcon.setContextMenu(buildTrayMenu());
    }
    broadcastStateChanged({
      skipSettingsReload: Boolean(options.skipSettingsReload),
      skipMainReload: Boolean(options.skipMainReload),
      stateJson: typeof options.stateJson === "string" ? options.stateJson : null,
      partial: Boolean(options.partial),
      fields: Array.isArray(options.fields) ? options.fields : null
    });
    return { ok: true };
  });

  ipcMain.handle("settings:notify-changed", (_, options = {}) => {
    if (typeof options.language === "string" && options.language.trim()) {
      appUiLanguage = resolveTrayLang(options.language.trim());
      if (trayIcon) trayIcon.setContextMenu(buildTrayMenu());
    }
    broadcastStateChanged({
      skipSettingsReload: Boolean(options.skipSettingsReload),
      skipMainReload:
        options.skipMainReload !== undefined ? Boolean(options.skipMainReload) : true,
      stateJson: typeof options.stateJson === "string" ? options.stateJson : null,
      partial: Boolean(options.partial),
      fields: Array.isArray(options.fields) ? options.fields : null
    });
    return { ok: true };
  });

  ipcMain.handle("color:prepare-advanced-picker", () => {
    if (settingsWindow && !settingsWindow.isDestroyed()) {
      settingsWindow.setParentWindow(null);
    }
    return { ok: true };
  });

  ipcMain.handle("color:restore-advanced-picker", () => {
    if (!settingsWindow || settingsWindow.isDestroyed()) {
      return { ok: false };
    }
    if (mainWindow && !mainWindow.isDestroyed()) {
      settingsWindow.setParentWindow(mainWindow);
    }
    settingsWindow.focus();
    applyAlwaysOnTopPolicy();
    return { ok: true };
  });

  ipcMain.handle("shell:open-external", async (event, url) => {
    if (!isTrustedRenderer(event)) {
      return { ok: false, message: "UNTRUSTED_SENDER" };
    }
    if (typeof url !== "string" || url.length === 0) {
      return { ok: false, message: "INVALID_URL" };
    }
    try {
      const safe = isSafeExternalUrl(url);
      if (!safe) {
        return { ok: false, message: "BLOCKED_URL" };
      }
      await shell.openExternal(safe);
      return { ok: true };
    } catch (err) {
      return { ok: false, message: String(err?.message || err) };
    }
  });

  ipcMain.handle("settings:get", () => ({ ok: true, settings: appSettings }));

  function readSharedStateFromMain(timeoutMs = 5000) {
    return new Promise((resolve) => {
      if (!mainWindow || mainWindow.isDestroyed()) {
        resolve({ ok: false, reason: "NO_MAIN_WINDOW" });
        return;
      }
      const replyChannel = `shared-state:read-response:${Date.now()}:${Math.random()}`;
      const timer = setTimeout(() => {
        ipcMain.removeAllListeners(replyChannel);
        resolve({ ok: false, reason: "TIMEOUT" });
      }, timeoutMs);

      ipcMain.once(replyChannel, (_event, payload = {}) => {
        clearTimeout(timer);
        resolve({
          ok: true,
          raw: typeof payload.raw === "string" ? payload.raw : null,
          backup: typeof payload.backup === "string" ? payload.backup : null
        });
      });

      mainWindow.webContents.send("shared-state:read-request", replyChannel);
    });
  }

  function writeSharedStateToMain(jsonPayload, timeoutMs = 10000) {
    return new Promise((resolve) => {
      if (!mainWindow || mainWindow.isDestroyed()) {
        resolve({ ok: false, reason: "NO_MAIN_WINDOW" });
        return;
      }
      if (typeof jsonPayload !== "string" || jsonPayload.length === 0) {
        resolve({ ok: false, reason: "INVALID_PAYLOAD" });
        return;
      }
      const replyChannel = `shared-state:write-response:${Date.now()}:${Math.random()}`;
      const timer = setTimeout(() => {
        ipcMain.removeAllListeners(replyChannel);
        resolve({ ok: false, reason: "TIMEOUT" });
      }, timeoutMs);

      ipcMain.once(replyChannel, (_event, payload = {}) => {
        clearTimeout(timer);
        resolve(payload?.ok ? { ok: true } : { ok: false, reason: payload?.reason || "WRITE_FAILED" });
      });

      mainWindow.webContents.send("shared-state:write-request", {
        replyChannel,
        json: jsonPayload
      });
    });
  }

  ipcMain.handle("shared-state:get", async () => {
    const payload = await readSharedStateFromMain();
    if (!payload.ok) return payload;
    return { ok: true, raw: payload.raw, backup: payload.backup };
  });

  ipcMain.handle("shared-state:set", async (event, jsonPayload) => {
    if (!isTrustedRenderer(event)) {
      return { ok: false, reason: "UNTRUSTED_SENDER" };
    }
    if (!isValidStatePayload(jsonPayload)) {
      return { ok: false, reason: "INVALID_PAYLOAD" };
    }
    return writeSharedStateToMain(jsonPayload);
  });

  ipcMain.handle("tray:set-visible", (_, visible) => {
    setTrayVisibility(visible);
    return { ok: true, visible: trayVisible };
  });

  ipcMain.handle("export:save", async (event, payload = {}) => {
    if (!isTrustedRenderer(event)) {
      return { ok: false, message: "UNTRUSTED_SENDER" };
    }
    const premiumBlock = requirePremiumAccess();
    if (premiumBlock) return premiumBlock;

    const { format, content, defaultName } = payload;
    if (typeof content !== "string") {
      return { ok: false, message: "INVALID_CONTENT" };
    }

    const extMap = { txt: "txt", md: "md", json: "json" };
    const ext = extMap[format] || "txt";
    const baseName =
      typeof defaultName === "string" && defaultName.trim().length > 0
        ? defaultName.trim()
        : `ppaekkom-export.${ext}`;

    const { canceled, filePath } = await dialog.showSaveDialog({
      title: trayT("exportTitle", appUiLanguage),
      defaultPath: baseName.endsWith(`.${ext}`) ? baseName : `${baseName}.${ext}`,
      filters: [{ name: ext.toUpperCase(), extensions: [ext] }]
    });

    if (canceled || !filePath) {
      return { ok: false, canceled: true };
    }

    try {
      fs.writeFileSync(filePath, content, "utf8");
      return { ok: true, filePath };
    } catch (err) {
      return { ok: false, message: String(err?.message || err) };
    }
  });

  // 백업 파일 가져오기 (올리기)
  ipcMain.handle("import:load", async (event) => {
    if (!isTrustedRenderer(event)) {
      return { ok: false, message: "UNTRUSTED_SENDER" };
    }
    const premiumBlock = requirePremiumAccess();
    if (premiumBlock) return premiumBlock;

    const { canceled, filePaths } = await dialog.showOpenDialog({
      title: trayT("importTitle", appUiLanguage),
      filters: [{ name: "JSON 백업", extensions: ["json"] }],
      properties: ["openFile"]
    });
    if (canceled || !filePaths || filePaths.length === 0) {
      return { ok: false, canceled: true };
    }
    try {
      const raw = fs.readFileSync(filePaths[0], "utf8");
      if (Buffer.byteLength(raw, "utf8") > MAX_STATE_JSON_BYTES) {
        return { ok: false, message: "FILE_TOO_LARGE" };
      }
      const parsed = JSON.parse(raw);
      if (!parsed || parsed.version !== 5 || !Array.isArray(parsed.slots)) {
        return { ok: false, message: "INVALID_BACKUP" };
      }
      return { ok: true, data: parsed };
    } catch (err) {
      return { ok: false, message: String(err?.message || err) };
    }
  });

  ipcMain.handle("image:pick", async (event) => {
    if (!isTrustedRenderer(event)) {
      return { ok: false, message: "UNTRUSTED_SENDER" };
    }

    const { canceled, filePaths } = await dialog.showOpenDialog({
      title: trayT("imagePickTitle", appUiLanguage),
      filters: [
        {
          name: "Images",
          extensions: ["png", "jpg", "jpeg", "gif", "webp", "bmp", "svg"]
        }
      ],
      properties: ["openFile"]
    });
    if (canceled || !filePaths || filePaths.length === 0) {
      return { ok: false, canceled: true };
    }
    try {
      const filePath = filePaths[0];
      const buf = fs.readFileSync(filePath);
      const ext = path.extname(filePath).slice(1).toLowerCase();
      const mimeExt = ext === "jpg" ? "jpeg" : ext;
      const dataUrl = `data:image/${mimeExt};base64,${buf.toString("base64")}`;
      return { ok: true, dataUrl, filePath };
    } catch (err) {
      return { ok: false, message: String(err?.message || err) };
    }
  });

  ipcMain.handle("image:file-exists", async (event, filePath) => {
    if (!isTrustedRenderer(event)) {
      return { ok: false, exists: false, message: "UNTRUSTED_SENDER" };
    }
    const premiumBlock = requirePremiumAccess();
    if (premiumBlock) return { ok: false, exists: false, message: premiumBlock.reason };
    if (typeof filePath !== "string" || !filePath.trim()) {
      return { ok: false, exists: false };
    }
    try {
      return { ok: true, exists: fs.existsSync(filePath) };
    } catch (err) {
      return { ok: false, exists: false, message: String(err?.message || err) };
    }
  });

  ipcMain.handle("image:read-file", async (event, filePath) => {
    if (!isTrustedRenderer(event)) {
      return { ok: false, message: "UNTRUSTED_SENDER" };
    }
    const premiumBlock = requirePremiumAccess();
    if (premiumBlock) return premiumBlock;

    if (!isAllowedImagePath(filePath)) {
      return { ok: false, message: "INVALID_IMAGE_PATH" };
    }
    try {
      const resolved = path.resolve(filePath.trim());
      const buf = fs.readFileSync(resolved);
      const ext = path.extname(resolved).slice(1).toLowerCase();
      const mimeExt = ext === "jpg" ? "jpeg" : ext;
      const dataUrl = `data:image/${mimeExt};base64,${buf.toString("base64")}`;
      return { ok: true, dataUrl, filePath: resolved };
    } catch (err) {
      return { ok: false, message: String(err?.message || err) };
    }
  });

  ipcMain.handle("startup:get", () => {
    try {
      const login = readStartupLoginState();
      return { ok: true, openAtLogin: Boolean(login.openAtLogin) };
    } catch (err) {
      return { ok: false, openAtLogin: false, message: String(err?.message || err) };
    }
  });

  ipcMain.handle("startup:set", (_, enabled) => {
    try {
      const requested = Boolean(enabled);
      setStartupLoginState(requested);
      const login = readStartupLoginState();
      const actual = Boolean(login.openAtLogin);
      if (actual !== requested) {
        return {
          ok: false,
          openAtLogin: actual,
          message: "시작 프로그램 등록이 반영되지 않았습니다. 관리자 권한 또는 보안 프로그램을 확인해 주세요."
        };
      }
      return { ok: true, openAtLogin: actual };
    } catch (err) {
      return { ok: false, message: String(err?.message || err) };
    }
  });

  createMainWindow();
  initAutoUpdater();

  const shouldOpenSettings = process.argv.includes("--open-settings");

  // 첫 실행(v5 상태 없음)이거나 setupCompleted가 false면 설정창 자동 오픈
  mainWindow.webContents.once("did-finish-load", () => {
    try {
      mainWindow.webContents.executeJavaScript(`
        (function() {
          const v5 = localStorage.getItem("ppaekkom-plus-state-v5");
          if (!v5) return true;
          try { const s = JSON.parse(v5); return !s?.global?.setupCompleted; } catch(e) { return true; }
        })()
      `).then((isFirstRun) => {
        if (isFirstRun || shouldOpenSettings) {
          setTimeout(() => {
            createSettingsWindow();
          }, 400);
        }
      }).catch(() => {
        if (shouldOpenSettings) {
          setTimeout(() => createSettingsWindow(), 400);
        }
      });
    } catch (e) {
      if (shouldOpenSettings) {
        setTimeout(() => createSettingsWindow(), 400);
      }
    }
  });

  screen.on("display-added", () => refreshWindowPosition(true));
  screen.on("display-removed", () => refreshWindowPosition(true));
  screen.on("display-metrics-changed", () => refreshWindowPosition(true));

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMainWindow();
    }
  });
  });
}

app.on("window-all-closed", () => {
  stopPeekCollapseMonitor();
  if (followCursorDisplayInterval) {
    clearInterval(followCursorDisplayInterval);
    followCursorDisplayInterval = null;
  }

  if (process.platform !== "darwin") {
    app.quit();
  }
});

let quitFlushDone = false;

async function flushMainWindowMemo() {
  if (!mainWindow || mainWindow.isDestroyed()) return;
  try {
    await mainWindow.webContents.executeJavaScript(
      "typeof window.__peekomFlushAllMemos === 'function' ? window.__peekomFlushAllMemos() : (typeof window.__peekomFlushActiveMemo === 'function' ? window.__peekomFlushActiveMemo() : false)",
      true
    );
  } catch {
    /* ignore */
  }
}

app.on("before-quit", (event) => {
  if (quitFlushDone) return;
  event.preventDefault();
  quitFlushDone = true;
  flushMainWindowMemo().finally(() => {
    app.quit();
  });
});

app.on("will-quit", () => {
  if (trayIcon) {
    trayIcon.destroy();
    trayIcon = null;
  }
  globalShortcut.unregisterAll();
});

const { app, BrowserWindow, dialog, globalShortcut, ipcMain, nativeImage, screen, shell } = require("electron");
const fs = require("fs");
const path = require("path");

function resolveAppIcon() {
  const candidates = app.isPackaged
    ? [
        path.join(process.resourcesPath, "icon.ico"),
        path.join(process.resourcesPath, "plus.png"),
        path.join(process.resourcesPath, "build", "icon.ico"),
        path.join(process.resourcesPath, "build", "plus.png"),
        path.join(__dirname, "build", "icon.ico"),
        path.join(__dirname, "build", "plus.png")
      ]
    : [
        path.join(__dirname, "build", "icon.ico"),
        path.join(__dirname, "build", "plus.png")
      ];

  for (const iconPath of candidates) {
    if (!fs.existsSync(iconPath)) continue;
    const image = nativeImage.createFromPath(iconPath);
    if (!image.isEmpty()) return image;
  }
  return undefined;
}

/** @type {import("electron").NativeImage | undefined} */
let APP_ICON;

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
  manualYOffset: 0
};

/** @type {BrowserWindow | null} */
let mainWindow = null;
/** @type {BrowserWindow | null} */
let settingsWindow = null;
let followCursorDisplayInterval = null;
let followCursorMode = true;
let targetDisplayId = null;
let lastAttachedSignature = null;
let panelExpanded = false;
let pointerOverPanel = false;
let mainWindowFocused = false;
let ignoreMouseEventsActive = false;
let peekAutoCollapseEnabled = false;
let peekCollapseMonitorInterval = null;
/** 빼꼼 모드: 창 밖 커서는 OS가 이벤트를 안 주므로 화면 좌표로 폴링 */
const PEEK_COLLAPSE_POLL_MS = 50;
/** 창 확장 직후 잘못된 "커서 밖" 판정 방지용 유예 시간 (ms) */
const EXPAND_GRACE_MS = 350;
let panelExpandedAt = 0;
let isDraggingWindow = false;
let appSettings = { ...DEFAULT_SETTINGS };
let registeredShortcut = null;
let lastNudgeRefreshAt = 0;
let pendingNudgeRefresh = null;

function clamp(num, min, max) {
  return Math.max(min, Math.min(num, max));
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

  const safeManualYOffset =
    typeof merged.manualYOffset === "number" && Number.isFinite(merged.manualYOffset)
      ? Math.round(merged.manualYOffset)
      : 0;

  return {
    anchor: safeAnchor,
    lengthMode: safeLengthMode,
    triggerMode: safeTriggerMode,
    shortcut: safeShortcut,
    manualYOffset: safeManualYOffset
  };
}

function updateShortcutRegistration() {
  if (registeredShortcut) {
    globalShortcut.unregister(registeredShortcut);
    registeredShortcut = null;
  }

  if (appSettings.triggerMode !== "shortcut") {
    return { ok: true, registered: false };
  }

  const accelerator = appSettings.shortcut;
  const registered = globalShortcut.register(accelerator, () => {
    if (!mainWindow || mainWindow.isDestroyed()) return;
    mainWindow.webContents.send("shortcut:toggle-expand");
  });

  if (!registered) {
    return {
      ok: false,
      registered: false,
      message: `단축키 등록 실패: ${accelerator}`
    };
  }

  registeredShortcut = accelerator;
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
  return panelExpanded ? EXPANDED_PANEL_WIDTH : COLLAPSED_WIDTH;
}

function applyAlwaysOnTopPolicy() {
  if (!mainWindow || mainWindow.isDestroyed()) return;

  // 손잡이 띠가 다른 창에 가려지지 않도록 항상 최상위 유지.
  // 펼쳐진 상태에서는 한 단계 더 높은 레벨을 사용해 메모 패널이 최전면에 오도록 한다.
  if (panelExpanded) {
    mainWindow.setAlwaysOnTop(true, "screen-saver");
  } else {
    mainWindow.setAlwaysOnTop(true, "floating");
  }
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
  if (!mainWindow || mainWindow.isDestroyed() || !panelExpanded || !peekAutoCollapseEnabled) {
    stopPeekCollapseMonitor();
    return;
  }

  // 창 확장 직후에는 synthetic mouseleave·좌표 불일치로 인한
  // false-positive 접힘을 막기 위해 유예 시간 동안 폴링을 건너뜀
  if (Date.now() - panelExpandedAt < EXPAND_GRACE_MS) {
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
  stopPeekCollapseMonitor();
  if (!panelExpanded || !peekAutoCollapseEnabled || !mainWindow || mainWindow.isDestroyed()) {
    return;
  }

  peekCollapseMonitorInterval = setInterval(tickPeekCollapseMonitor, PEEK_COLLAPSE_POLL_MS);
  tickPeekCollapseMonitor();
}

function setPanelExpandedState(expanded) {
  panelExpanded = Boolean(expanded);
  if (panelExpanded) {
    panelExpandedAt = Date.now();
  }
  lastAttachedSignature = null;
  refreshWindowPosition(true);
  if (!panelExpanded) {
    applyMouseIgnorePolicy(true);
  }
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
  const x = bounds.x + bounds.width - width;
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
    panelExpanded ? "expanded" : "collapsed",
    appSettings.anchor,
    appSettings.lengthMode,
    appSettings.manualYOffset
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
      nodeIntegration: true,
      contextIsolation: false
    }
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
    mainWindow.webContents.setZoomFactor(1.0);
  });

  // Ctrl/Cmd +/- 줌 키를 렌더러가 처리하기 전에 차단
  mainWindow.webContents.on("before-input-event", (event, input) => {
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
    peekAutoCollapseEnabled = false;
  });
}

function createSettingsWindow() {
  if (settingsWindow && !settingsWindow.isDestroyed()) {
    settingsWindow.focus();
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
    title: "빼꼼 플러스 설정",
    parent: mainWindow || undefined,
    modal: false,
    resizable: false,
    minimizable: false,
    maximizable: false,
    fullscreenable: false,
    skipTaskbar: false,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  settingsWindow.setMenuBarVisibility(false);
  settingsWindow.loadFile(path.join(__dirname, "settings.html"));

  settingsWindow.webContents.on("before-input-event", (event, input) => {
    if ((input.control || input.meta) &&
        (input.key === "=" || input.key === "+" || input.key === "-" ||
         input.key === "_" || input.key === "0")) {
      event.preventDefault();
    }
  });

  settingsWindow.on("focus", () => {
    applyAlwaysOnTopPolicy();
  });

  settingsWindow.on("closed", () => {
    settingsWindow = null;
    applyAlwaysOnTopPolicy();
  });
}

function broadcastSettingsApplied() {
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send("settings:applied");
  }
}

app.whenReady().then(() => {
  APP_ICON = resolveAppIcon();

  if (process.platform === "win32") {
    app.setAppUserModelId("com.ppaekkom.plus");
  }

  appSettings = normalizeSettings();
  updateShortcutRegistration();

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
    lastAttachedSignature = null;
    refreshWindowPosition(true);

    return { ok: true, shortcutStatus, windowState: getWindowState() };
  });

  ipcMain.handle("settings:notify-applied", () => {
    broadcastSettingsApplied();
    return { ok: true };
  });

  ipcMain.handle("shell:open-external", async (_, url) => {
    if (typeof url !== "string" || url.length === 0) {
      return { ok: false, message: "INVALID_URL" };
    }
    try {
      const safe = /^(https?:|mailto:)/i.test(url) ? url : `https://${url}`;
      await shell.openExternal(safe);
      return { ok: true };
    } catch (err) {
      return { ok: false, message: String(err?.message || err) };
    }
  });

  ipcMain.handle("settings:get", () => ({ ok: true, settings: appSettings }));

  ipcMain.handle("export:save", async (_, payload = {}) => {
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
      title: "내보내기",
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
  ipcMain.handle("import:load", async () => {
    const { canceled, filePaths } = await dialog.showOpenDialog({
      title: "백업 파일 불러오기",
      filters: [{ name: "JSON 백업", extensions: ["json"] }],
      properties: ["openFile"]
    });
    if (canceled || !filePaths || filePaths.length === 0) {
      return { ok: false, canceled: true };
    }
    try {
      const raw = fs.readFileSync(filePaths[0], "utf8");
      const parsed = JSON.parse(raw);
      return { ok: true, data: parsed };
    } catch (err) {
      return { ok: false, message: String(err?.message || err) };
    }
  });

  ipcMain.handle("startup:get", () => {
    try {
      const opts = process.platform === "darwin" ? {} : { path: process.execPath, args: [] };
      const login = app.getLoginItemSettings(opts);
      return { ok: true, openAtLogin: Boolean(login.openAtLogin) };
    } catch (err) {
      return { ok: false, openAtLogin: false, message: String(err?.message || err) };
    }
  });

  ipcMain.handle("startup:set", (_, enabled) => {
    try {
      const openAtLogin = Boolean(enabled);
      if (process.platform === "darwin") {
        app.setLoginItemSettings({ openAtLogin });
      } else {
        app.setLoginItemSettings({
          openAtLogin,
          path: process.execPath,
          args: []
        });
      }
      return { ok: true };
    } catch (err) {
      return { ok: false, message: String(err?.message || err) };
    }
  });

  createMainWindow();

  // 첫 실행(v5 상태 없음)이거나 setupCompleted가 false면 설정창 자동 오픈
  mainWindow.webContents.once("did-finish-load", () => {
    try {
      const { session } = mainWindow.webContents;
      // localStorage는 렌더러에서만 접근 가능하므로 렌더러에 확인 요청
      mainWindow.webContents.executeJavaScript(`
        (function() {
          const v5 = localStorage.getItem("ppaekkom-plus-state-v5");
          if (!v5) return true;
          try { const s = JSON.parse(v5); return !s?.global?.setupCompleted; } catch(e) { return true; }
        })()
      `).then((isFirstRun) => {
        if (isFirstRun) {
          setTimeout(() => {
            createSettingsWindow();
          }, 400);
        }
      }).catch(() => {});
    } catch (e) {
      // ignore
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

app.on("will-quit", () => {
  globalShortcut.unregisterAll();
});

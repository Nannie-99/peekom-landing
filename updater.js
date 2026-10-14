const { app, dialog, session, BrowserWindow } = require("electron");
const { autoUpdater } = require("electron-updater");
const fs = require("fs");
const path = require("path");

function stateBackupDir() {
  return path.join(app.getPath("userData"), "backups");
}

function listStateBackups() {
  const dir = stateBackupDir();
  try {
    return fs
      .readdirSync(dir)
      .filter((name) => name.startsWith("state-v5-") && name.endsWith(".json"))
      .map((name) => ({
        name,
        mtime: fs.statSync(path.join(dir, name)).mtimeMs
      }))
      .sort((a, b) => b.mtime - a.mtime);
  } catch {
    return [];
  }
}

function readLatestStateBackup() {
  const list = listStateBackups();
  if (!list.length) return "";
  try {
    return fs.readFileSync(path.join(stateBackupDir(), list[0].name), "utf8");
  } catch {
    return "";
  }
}

function writeStateBackup(raw) {
  if (typeof raw !== "string" || raw.length < 2) return;
  const dir = stateBackupDir();
  fs.mkdirSync(dir, { recursive: true });
  const stamp = new Date().toISOString().replace(/[:.]/g, "-");
  const file = path.join(dir, `state-v5-${app.getVersion()}-${stamp}.json`);
  fs.writeFileSync(file, raw, "utf8");
  for (const extra of listStateBackups().slice(3)) {
    try {
      fs.rmSync(path.join(dir, extra.name), { force: true });
    } catch {
      /* ignore */
    }
  }
}

async function flushMemosAndBackup() {
  let raw = "";
  for (const win of BrowserWindow.getAllWindows()) {
    if (!win || win.isDestroyed()) continue;
    try {
      await win.webContents.executeJavaScript(
        "typeof window.__peekomFlushAllMemos === 'function' ? window.__peekomFlushAllMemos() : false",
        true
      );
    } catch {
      /* ignore */
    }
    try {
      const value = await win.webContents.executeJavaScript(
        'localStorage.getItem("ppaekkom-plus-state-v5")',
        true
      );
      if (typeof value === "string" && value.length > raw.length) raw = value;
    } catch {
      /* ignore */
    }
  }
  writeStateBackup(raw);
  await session.defaultSession.flushStorageData();
}

function logUpdate(message, detail) {
  const suffix = detail != null && detail !== "" ? ` ${detail}` : "";
  console.log(`[autoUpdater] ${message}${suffix}`);
}

function initAutoUpdater() {
  if (!app.isPackaged) {
    logUpdate("skip (development build)");
    return;
  }

  autoUpdater.autoDownload = true;
  autoUpdater.autoInstallOnAppQuit = false;

  autoUpdater.on("checking-for-update", () => {
    logUpdate("checking for update");
  });

  autoUpdater.on("update-available", (info) => {
    logUpdate("update available", info?.version || "");
  });

  autoUpdater.on("update-not-available", (info) => {
    logUpdate("update not available", info?.version || "");
  });

  autoUpdater.on("download-progress", (progress) => {
    const pct = Number.isFinite(progress?.percent) ? Math.round(progress.percent) : 0;
    logUpdate("download progress", `${pct}%`);
  });

  autoUpdater.on("update-downloaded", async (info) => {
    logUpdate("update downloaded", info?.version || "");
    try {
      const { response } = await dialog.showMessageBox({
        type: "info",
        title: "Peekom 업데이트",
        message: "새로운 버전이 준비되었습니다.",
        detail: "업데이트 후 앱을 재시작하시겠습니까?",
        buttons: ["예", "나중에"],
        defaultId: 0,
        cancelId: 1,
        noLink: true
      });
      if (response === 0) {
        try {
          await flushMemosAndBackup();
        } catch (flushErr) {
          logUpdate("flush before install failed", flushErr?.message || String(flushErr));
        }
        autoUpdater.quitAndInstall(false, true);
      }
    } catch (err) {
      logUpdate("dialog error", err?.message || String(err));
    }
  });

  autoUpdater.on("error", (err) => {
    logUpdate("error", err?.message || String(err));
  });

  autoUpdater.checkForUpdatesAndNotify().catch((err) => {
    logUpdate("check failed", err?.message || String(err));
  });
}

module.exports = { initAutoUpdater, readLatestStateBackup };

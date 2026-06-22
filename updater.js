const { app, dialog } = require("electron");
const { autoUpdater } = require("electron-updater");

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

module.exports = { initAutoUpdater };

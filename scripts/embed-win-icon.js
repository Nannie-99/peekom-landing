/**
 * Windows .exe에 아이콘을 삽입합니다.
 * signAndEditExecutable: false 일 때 electron-builder가 exe 아이콘을 넣지 않아 afterPack에서 처리합니다.
 */
const path = require("path");
const { execFile } = require("child_process");
const { promisify } = require("util");

const execFileAsync = promisify(execFile);

/** @param {import("app-builder-lib").AfterPackContext} context */
exports.default = async function embedWinIcon(context) {
  if (context.electronPlatformName !== "win32") return;

  const fs = require("fs");
  const projectDir = context.packager.projectDir;
  const iconPath = path.join(projectDir, "build", "icon.ico");
  const exePath = path.join(context.appOutDir, `${context.packager.appInfo.productFilename}.exe`);

  if (!fs.existsSync(iconPath)) {
    throw new Error(`[embed-win-icon] missing icon: ${iconPath}`);
  }
  if (!fs.existsSync(exePath)) {
    throw new Error(`[embed-win-icon] missing exe: ${exePath}`);
  }

  const rceditBin = path.join(
    projectDir,
    "node_modules",
    "rcedit",
    "bin",
    "rcedit-x64.exe"
  );
  if (!fs.existsSync(rceditBin)) {
    throw new Error(`[embed-win-icon] missing rcedit: ${rceditBin}`);
  }

  try {
    await execFileAsync(rceditBin, [exePath, "--set-icon", iconPath], {
      windowsHide: true
    });
  } catch (error) {
    const detail = error?.stderr || error?.message || String(error);
    throw new Error(`[embed-win-icon] rcedit failed for ${exePath}: ${detail}`);
  }

  console.log(`[embed-win-icon] ${path.basename(exePath)} ← build/icon.ico`);
};

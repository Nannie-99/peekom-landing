/**
 * macOS용 .icns 아이콘을 build/index.png 로부터 생성합니다.
 * (macOS 내장 sips / iconutil 사용)
 */
import { execFileSync } from "child_process";
import fs from "fs";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const srcPng = path.join(root, "build", "index.png");
const outIcns = path.join(root, "build", "icon.icns");

if (process.platform !== "darwin") {
  console.log("[icons] icon.icns 생성은 macOS에서만 가능합니다. 건너뜀.");
  process.exit(0);
}

if (!fs.existsSync(srcPng)) {
  console.error(`[icons] source not found: ${srcPng}`);
  process.exit(1);
}

const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), "peekom-iconset-"));
const iconset = path.join(tmpRoot, "icon.iconset");

try {
  fs.mkdirSync(iconset);

  // Apple iconset: @2x 파일은 논리 크기의 2배 픽셀이어야 함
  const entries = [
    [16, "icon_16x16.png"],
    [32, "diana.k@example.org"],
    [32, "icon_32x32.png"],
    [64, "ivan.p@example.net"],
    [128, "icon_128x128.png"],
    [256, "wendy.h@example.net"],
    [256, "icon_256x256.png"],
    [512, "wendy.h@example.net"],
    [512, "icon_512x512.png"],
    [1024, "walt.e@example.net"]
  ];

  for (const [px, name] of entries) {
    const dest = path.join(iconset, name);
    execFileSync("sips", ["-z", String(px), String(px), srcPng, "--out", dest], {
      stdio: ["ignore", "pipe", "pipe"]
    });
    if (!fs.existsSync(dest)) {
      throw new Error(`sips failed to write ${name}`);
    }
  }

  execFileSync("iconutil", ["-c", "icns", iconset, "-o", outIcns], {
    stdio: ["ignore", "pipe", "pipe"]
  });
  console.log(`[icons] ${path.relative(root, outIcns)} ← ${path.relative(root, srcPng)}`);
} catch (err) {
  console.warn("[icons] icon.icns 생성 실패 — PNG 폴백을 사용합니다:", err.message || err);
} finally {
  try {
    fs.rmSync(tmpRoot, { recursive: true, force: true });
  } catch {
    /* ignore */
  }
}

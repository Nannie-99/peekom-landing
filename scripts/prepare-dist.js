const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const unpackedDirs = [path.join(__dirname, "..", "dist", "win-unpacked")];

function sleep(ms) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}

function killPeekom() {
  try {
    execSync("taskkill /F /IM Peekom.exe", { stdio: "ignore" });
  } catch {
    /* not running */
  }
}

function tryRemoveDir(dir) {
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      fs.rmSync(dir, { recursive: true, force: true });
      return true;
    } catch {
      if (attempt < 4) sleep(1500);
    }
  }
  return false;
}

killPeekom();
sleep(1000);

for (const unpackedDir of unpackedDirs) {
  if (!fs.existsSync(unpackedDir)) {
    continue;
  }

  if (tryRemoveDir(unpackedDir)) {
    console.log(`[predist] ${path.relative(path.join(__dirname, ".."), unpackedDir)} 정리 완료`);
  }
}

const remaining = unpackedDirs.filter((dir) => fs.existsSync(dir));
if (remaining.length === 0) {
  process.exit(0);
}

const relPaths = remaining.map((dir) => path.relative(path.join(__dirname, ".."), dir));
console.error("");
console.error(`[predist] 다음 폴더가 다른 프로그램에 의해 잠겨 있어 삭제할 수 없습니다:`);
relPaths.forEach((p) => console.error(`  - ${p}`));
console.error("  1) 작업 관리자에서 Peekom.exe 종료");
console.error("  2) dist 관련 폴더를 닫기 (탐색기·Cursor)");
console.error("  3) 그래도 안 되면 PC 재시작");
console.error("");
console.error("지금 바로 빌드하려면: PC 재시작 후 npm run dist");
console.error("");
process.exit(1);

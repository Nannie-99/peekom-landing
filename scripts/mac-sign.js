/**
 * macOS 서명 커스텀 훅.
 * 기본 동작은 모든 파일(*.pak 등)에 --timestamp를 걸어 Apple 서버를 수천 번 호출하고,
 * 네트워크 지연 시 codesign이 장시간 멈춘 것처럼 보인다.
 * → Mach-O/번들만 보안 타임스탬프, 리소스는 timestamp=none.
 */
const path = require("path");
const { execSync } = require("child_process");
const { signAsync } = require("@electron/osx-sign");

const TIMESTAMP_URL =
  process.env.APPLE_TIMESTAMP_URL || "http://timestamp.apple.com/ts01";

const RESOURCE_EXT =
  /\.(pak|plist|json|png|icns|ico|jpg|jpeg|gif|webp|svg|txt|html|htm|css|js|mjs|cjs|map|asar|strings|nib|scf|metal|bin|dat|info|md|xml|yml|yaml|ts|tsx|node\.d\.ts)$/i;

function needsSecureTimestamp(filePath) {
  const normalized = filePath.replace(/\\/g, "/");
  const base = path.basename(normalized);

  if (
    normalized.endsWith(".app") ||
    normalized.endsWith(".framework") ||
    normalized.endsWith(".xpc") ||
    normalized.endsWith(".appex")
  ) {
    return true;
  }
  if (/\.(dylib|so|node)$/i.test(base)) return true;
  if (normalized.includes("/Contents/MacOS/")) return true;
  if (RESOURCE_EXT.test(base)) return false;
  // 확장자 없는 Helper/실행 파일
  if (!path.extname(base)) return true;
  return false;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function killStuckCodesign() {
  try {
    execSync('pkill -f "codesign --sign" 2>/dev/null || true', {
      stdio: "ignore"
    });
  } catch {
    /* ignore */
  }
}

/**
 * @param {import("@electron/osx-sign").SignOptions} opts
 * @param {import("app-builder-lib").MacPackager} _packager
 */
module.exports = async function customMacSign(opts, _packager) {
  const prevOptionsForFile = opts.optionsForFile;

  const nextOpts = {
    ...opts,
    optionsForFile: (filePath) => {
      const base =
        typeof prevOptionsForFile === "function"
          ? prevOptionsForFile(filePath) || {}
          : {};
      return {
        ...base,
        timestamp: needsSecureTimestamp(filePath) ? TIMESTAMP_URL : "none"
      };
    }
  };

  const attempts = Number(process.env.PEEKOM_SIGN_RETRIES || 3);
  const timeoutMs = Number(
    process.env.PEEKOM_SIGN_TIMEOUT_MS || 25 * 60 * 1000
  );

  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt++) {
    let timer;
    try {
      console.log(
        `[mac-sign] attempt ${attempt}/${attempts} (timeout ${Math.round(timeoutMs / 1000)}s, binary timestamp → ${TIMESTAMP_URL})`
      );
      const signPromise = signAsync(nextOpts);
      const timeoutPromise = new Promise((_, reject) => {
        timer = setTimeout(() => {
          killStuckCodesign();
          reject(
            new Error(
              `[mac-sign] signing timed out after ${Math.round(timeoutMs / 1000)}s (likely timestamp server hang)`
            )
          );
        }, timeoutMs);
      });
      await Promise.race([signPromise, timeoutPromise]);
      clearTimeout(timer);
      console.log("[mac-sign] signing finished");
      return;
    } catch (error) {
      clearTimeout(timer);
      lastError = error;
      const message = error?.message || String(error);
      console.warn(`[mac-sign] attempt ${attempt} failed: ${message}`);
      killStuckCodesign();
      if (attempt < attempts) {
        await sleep(2000 * attempt);
      }
    }
  }
  throw lastError;
};

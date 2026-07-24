#!/usr/bin/env bash
# 서명·공증된 Mac dmg(+zip) 빌드
# 사용: npm run dist:mac
#       ARCH=arm64 bash scripts/dist-mac.sh
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ -f "$ROOT/.env" ]]; then
  # shellcheck disable=SC1091
  set -a
  source "$ROOT/.env"
  set +a
fi

missing=0
for key in APPLE_ID APPLE_APP_SPECIFIC_PASSWORD APPLE_TEAM_ID; do
  if [[ -z "${!key:-}" ]]; then
    echo "Missing env: $key"
    missing=1
  fi
done
if [[ "$missing" -ne 0 ]]; then
  echo ""
  echo "Prepare credentials first:"
  echo "  1) cp .env.example .env"
  echo "  2) Edit .env with your Apple ID, app password, Team ID"
  echo "  3) npm run dist:mac"
  exit 1
fi

ARCH="${ARCH:-universal}"
# Desktop/iCloud 동기화로 codesign이 멈추는 경우를 피하려고 결과물은 홈 디렉터리에 둡니다.
OUT_DIR="${PEEKOM_DIST_DIR:-$HOME/peekom-dist}"
mkdir -p "$OUT_DIR"

# 이전 빌드에서 남은 codesign이 있으면 정리
pkill -f "codesign --sign" 2>/dev/null || true

TIMESTAMP_URL="${APPLE_TIMESTAMP_URL:-http://timestamp.apple.com/ts01}"
echo "Checking Apple timestamp server (${TIMESTAMP_URL})..."
if command -v curl >/dev/null 2>&1; then
  if ! curl -fsS --connect-timeout 8 --max-time 15 -o /dev/null "$TIMESTAMP_URL"; then
    echo "Warning: timestamp server did not respond quickly. Signing may retry/fail."
  else
    echo "Timestamp server reachable."
  fi
fi

# 로그인 키체인이 잠겨 있으면 서명 UI에서 멈출 수 있음 → 대화형 암호 입력은 피함
# (이미 "항상 허용"을 했다면 보통 추가 unlock이 필요 없음)

echo "Building signed + notarized Mac app (${ARCH} dmg + zip)..."
echo "Output directory: ${OUT_DIR}"
npm run predist:mac
npx electron-builder --mac dmg zip "--${ARCH}" \
  --config.directories.output="${OUT_DIR}"

echo ""
echo "Done. Artifacts:"
ls -lh "${OUT_DIR}"/Peekom-macOS.* 2>/dev/null || ls -lh "${OUT_DIR}" | head -30
echo ""
echo "Tip: copy to project with:  cp -R \"${OUT_DIR}\"/Peekom-macOS.* \"${ROOT}/dist/\""

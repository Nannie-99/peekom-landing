const fs = require("fs");
const path = require("path");
const { app } = require("electron");
const crypto = require("crypto");

const LICENSE_FILE = "peekom-license.json";
const LS_LICENSE_API = "https://api.lemonsqueezy.com/v1/licenses";

function getLicensePath() {
  return path.join(app.getPath("userData"), LICENSE_FILE);
}

function readLicenseRecord() {
  try {
    const raw = fs.readFileSync(getLicensePath(), "utf8");
    return JSON.parse(raw);
  } catch {
    return { isPremium: false, licenseKey: null, instanceId: null, lsInstanceId: null };
  }
}

function writeLicenseRecord(record) {
  fs.mkdirSync(path.dirname(getLicensePath()), { recursive: true });
  fs.writeFileSync(getLicensePath(), JSON.stringify(record, null, 2), "utf8");
}

function getLsApiKey() {
  return String(process.env.PEEKOM_LS_API_KEY || "").trim();
}

function isLsOnlineMode() {
  return Boolean(getLsApiKey());
}

function buildLicenseApiHeaders() {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded"
  };
  const apiKey = getLsApiKey();
  if (apiKey) {
    headers.Authorization = `Bearer ${apiKey}`;
  }
  return headers;
}

function isLsTestMode() {
  if (process.env.PEEKOM_LS_TEST_MODE === "false") return false;
  return isLsOnlineMode();
}

function getOrCreateInstanceId() {
  const rec = readLicenseRecord();
  if (rec.instanceId) return rec.instanceId;
  const instanceId = crypto.randomUUID();
  writeLicenseRecord({ ...rec, instanceId });
  return instanceId;
}

function formatLicenseError(message) {
  const text = String(message || "").trim();
  const codes = {
    EMPTY_KEY: "라이선스 키를 입력해 주세요.",
    ACTIVATION_FAILED: "라이선스 활성화에 실패했습니다. 키를 확인해 주세요.",
    VALIDATION_FAILED: "저장된 라이선스를 확인하지 못했습니다.",
    NEED_API_KEY:
      "온라인 라이선스 검증이 설정되지 않았습니다. PEEKOM_LS_API_KEY 환경 변수를 확인해 주세요.",
    NETWORK_ERROR: "Lemon Squeezy 서버에 연결하지 못했습니다. 인터넷 연결을 확인해 주세요."
  };
  if (codes[text]) return codes[text];

  const lower = text.toLowerCase();
  if (lower.includes("invalid") && lower.includes("license")) {
    return "유효하지 않은 라이선스 키입니다.";
  }
  if (lower.includes("activation limit")) {
    return "이 라이선스 키는 활성화 가능한 기기 수를 초과했습니다.";
  }
  if (lower.includes("expired")) {
    return "만료된 라이선스 키입니다.";
  }
  if (lower.includes("disabled")) {
    return "비활성화된 라이선스 키입니다.";
  }
  if (text) return text;
  return "인증에 실패했습니다. 라이선스 키를 확인해 주세요.";
}

async function callLicenseApi(endpoint, params) {
  const res = await fetch(`${LS_LICENSE_API}/${endpoint}`, {
    method: "POST",
    headers: buildLicenseApiHeaders(),
    body: new URLSearchParams(params)
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

function extractLicenseApiError(data, status) {
  if (data?.error) return String(data.error);
  if (status === 404) return "유효하지 않은 라이선스 키입니다.";
  if (status >= 400) return `Lemon Squeezy API 오류 (${status})`;
  return "ACTIVATION_FAILED";
}

function isLicenseStatusPremium(status) {
  return status === "active";
}

async function activateWithLemonSqueezy(key, instanceId) {
  const { ok, status, data } = await callLicenseApi("activate", {
    license_key: key,
    instance_name: instanceId
  });

  if (data?.activated === true) {
    const licenseStatus = data.license_key?.status || "active";
    const premium = isLicenseStatusPremium(licenseStatus);
    writeLicenseRecord({
      isPremium: premium,
      licenseKey: key,
      instanceId,
      lsInstanceId: data.instance?.id || null,
      licenseStatus,
      activatedAt: new Date().toISOString(),
      testMode: isLsTestMode()
    });
    if (!premium) {
      return {
        ok: false,
        message: formatLicenseError(licenseStatus || "VALIDATION_FAILED")
      };
    }
    return { ok: true, isPremium: true };
  }

  const errMsg = extractLicenseApiError(data, status);
  return { ok: false, message: formatLicenseError(errMsg) };
}

async function activateLicenseKey(licenseKey) {
  const key = String(licenseKey || "").trim();
  if (!key) {
    return { ok: false, message: formatLicenseError("EMPTY_KEY") };
  }

  const instanceId = getOrCreateInstanceId();

  if (isLsOnlineMode()) {
    try {
      return await activateWithLemonSqueezy(key, instanceId);
    } catch (err) {
      return { ok: false, message: formatLicenseError(String(err?.message || "NETWORK_ERROR")) };
    }
  }

  /* Dev / offline: only in unpackaged dev builds */
  if (!require("electron").app.isPackaged && /^[A-F0-9-]{20,}$/i.test(key)) {
    writeLicenseRecord({
      isPremium: true,
      licenseKey: key,
      instanceId,
      activatedAt: new Date().toISOString(),
      devMode: true
    });
    return { ok: true, isPremium: true, devMode: true };
  }

  return { ok: false, message: formatLicenseError("NEED_API_KEY") };
}

async function verifyStoredLicense() {
  const rec = readLicenseRecord();
  if (rec.devMode && require("electron").app.isPackaged) {
    writeLicenseRecord({
      isPremium: false,
      licenseKey: null,
      instanceId: rec.instanceId || null,
      lsInstanceId: null,
      devMode: false
    });
    return readLicenseRecord();
  }
  if (!rec.isPremium || rec.devMode) {
    return rec;
  }
  if (!rec.licenseKey) {
    writeLicenseRecord({
      isPremium: false,
      licenseKey: null,
      instanceId: rec.instanceId || null,
      lsInstanceId: null
    });
    return readLicenseRecord();
  }

  if (!isLsOnlineMode()) {
    return rec;
  }

  try {
    const params = { license_key: rec.licenseKey };
    if (rec.lsInstanceId) {
      params.instance_id = rec.lsInstanceId;
    }

    const { data } = await callLicenseApi("validate", params);
    const status = data?.license_key?.status;
    const valid = data?.valid === true && isLicenseStatusPremium(status);

    if (valid) {
      if (rec.lsInstanceId !== data?.instance?.id && data?.instance?.id) {
        writeLicenseRecord({
          ...rec,
          lsInstanceId: data.instance.id,
          licenseStatus: status
        });
      }
      return readLicenseRecord();
    }

    if (status === "expired" || status === "disabled" || data?.valid === false) {
      writeLicenseRecord({
        isPremium: false,
        licenseKey: null,
        instanceId: rec.instanceId || null,
        lsInstanceId: null,
        licenseStatus: status || null
      });
    }
  } catch {
    /* Keep cached premium if offline; user can retry later */
  }

  return readLicenseRecord();
}

function isPremiumActive() {
  return Boolean(readLicenseRecord().isPremium);
}

function deactivateLicense() {
  const rec = readLicenseRecord();
  writeLicenseRecord({
    ...rec,
    isPremium: false,
    licenseKey: null,
    lsInstanceId: null,
    licenseStatus: null
  });
  return { ok: true };
}

function getLicenseDebugInfo() {
  return {
    onlineMode: isLsOnlineMode(),
    testMode: isLsTestMode(),
    hasApiKey: Boolean(getLsApiKey()),
    hasStoreId: Boolean(String(process.env.PEEKOM_LS_STORE_ID || "").trim())
  };
}

module.exports = {
  readLicenseRecord,
  writeLicenseRecord,
  activateLicenseKey,
  verifyStoredLicense,
  isPremiumActive,
  deactivateLicense,
  getOrCreateInstanceId,
  getLicenseDebugInfo,
  formatLicenseError
};

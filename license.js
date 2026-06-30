const fs = require("fs");
const path = require("path");
const { app, net } = require("electron");
const crypto = require("crypto");

function isOnline() {
  try {
    if (net && typeof net.isOnline === "function") return net.isOnline();
  } catch {
    /* ignore */
  }
  return true;
}

const LICENSE_FILE = "peekom-license.json";
const LS_LICENSE_API = "https://api.lemonsqueezy.com/v1/licenses";
const LICENSE_FORMAT_VERSION = 1;
// app.setName()이 Peekom ↔ Peekom Plus로 바뀌어도 서명이 깨지지 않도록 고정 ID 사용
const LICENSE_HMAC_APP_ID = "com.peekom.app";

function hashHmacSalt(salt) {
  return crypto.createHash("sha256").update(`peekom-license-v1-${salt}`).digest();
}

function getHmacSecretCandidates() {
  const env = String(process.env.PEEKOM_LICENSE_HMAC_SECRET || "").trim();
  if (env) return [env];
  return [
    hashHmacSalt(LICENSE_HMAC_APP_ID),
    hashHmacSalt("Peekom"),
    hashHmacSalt("Peekom Plus")
  ];
}

function deriveHmacSecret() {
  return getHmacSecretCandidates()[0];
}

function signPayloadWithSecret(payload, secret) {
  return crypto
    .createHmac("sha256", secret)
    .update(canonicalJson(payload))
    .digest("base64url");
}

function signPayload(payload) {
  return signPayloadWithSecret(payload, deriveHmacSecret());
}

function verifySignedRecord(raw) {
  if (!raw || raw.v !== LICENSE_FORMAT_VERSION || !raw.payload || !raw.sig) {
    return false;
  }
  try {
    const sig = String(raw.sig);
    for (const secret of getHmacSecretCandidates()) {
      const expected = signPayloadWithSecret(raw.payload, secret);
      const a = Buffer.from(sig);
      const b = Buffer.from(expected);
      if (a.length === b.length && crypto.timingSafeEqual(a, b)) {
        return true;
      }
    }
    return false;
  } catch {
    return false;
  }
}

function shouldMigrateLicenseSignature(raw) {
  if (!raw?.payload || !raw.sig) return false;
  if (!verifySignedRecord(raw)) return false;
  return raw.sig !== signPayload(raw.payload);
}

function migrateLicenseSignature(raw) {
  if (!shouldMigrateLicenseSignature(raw)) return;
  const rec = flattenSignedRecord(raw);
  writeSignedLicense({
    licenseKey: rec.licenseKey,
    instanceId: rec.instanceId,
    lsInstanceId: rec.lsInstanceId,
    licenseStatus: rec.licenseStatus,
    activatedAt: rec.activatedAt,
    testMode: rec.testMode,
    devMode: rec.devMode,
    isPremium: rec.isPremium
  });
}

function getLicensePath() {
  return path.join(app.getPath("userData"), LICENSE_FILE);
}

function canonicalJson(obj) {
  const keys = Object.keys(obj).sort();
  const sorted = {};
  for (const k of keys) sorted[k] = obj[k];
  return JSON.stringify(sorted);
}

function hashLicenseKey(key) {
  if (!key) return null;
  return crypto.createHash("sha256").update(String(key).trim()).digest("hex");
}

function buildSignedPayload(fields) {
  return {
    licenseKeyHash: fields.licenseKeyHash || null,
    instanceId: fields.instanceId || null,
    lsInstanceId: fields.lsInstanceId || null,
    licenseStatus: fields.licenseStatus || null,
    activatedAt: fields.activatedAt || null,
    testMode: Boolean(fields.testMode),
    devMode: Boolean(fields.devMode)
  };
}

function isPayloadPremium(payload) {
  if (!payload) return false;
  if (payload.devMode && !app.isPackaged) return true;
  return payload.licenseStatus === "active";
}

function flattenSignedRecord(raw) {
  const payload = raw.payload;
  return {
    v: LICENSE_FORMAT_VERSION,
    payload,
    sig: raw.sig,
    isPremium: isPayloadPremium(payload),
    licenseKey: raw.licenseKey || null,
    licenseKeyHash: payload.licenseKeyHash || null,
    instanceId: payload.instanceId || null,
    lsInstanceId: payload.lsInstanceId || null,
    licenseStatus: payload.licenseStatus || null,
    activatedAt: payload.activatedAt || null,
    testMode: Boolean(payload.testMode),
    devMode: Boolean(payload.devMode)
  };
}

function writeSignedLicense(fields) {
  const payload = buildSignedPayload({
    licenseKeyHash: hashLicenseKey(fields.licenseKey),
    instanceId: fields.instanceId || null,
    lsInstanceId: fields.lsInstanceId || null,
    licenseStatus: fields.licenseStatus || (fields.isPremium ? "active" : null),
    activatedAt: fields.activatedAt || new Date().toISOString(),
    testMode: Boolean(fields.testMode),
    devMode: Boolean(fields.devMode)
  });
  const record = {
    v: LICENSE_FORMAT_VERSION,
    payload,
    sig: signPayload(payload),
    instanceId: payload.instanceId,
    isPremium: isPayloadPremium(payload),
    licenseKey: fields.licenseKey || null,
    lsInstanceId: payload.lsInstanceId,
    licenseStatus: payload.licenseStatus,
    activatedAt: payload.activatedAt,
    testMode: payload.testMode,
    devMode: payload.devMode
  };
  writeLicenseRecord(record);
  return record;
}

function readLicenseRecord() {
  const empty = {
    isPremium: false,
    licenseKey: null,
    instanceId: null,
    lsInstanceId: null
  };
  try {
    const raw = JSON.parse(fs.readFileSync(getLicensePath(), "utf8"));
    if (verifySignedRecord(raw)) {
      migrateLicenseSignature(raw);
      try {
        const updated = JSON.parse(fs.readFileSync(getLicensePath(), "utf8"));
        if (verifySignedRecord(updated)) {
          return flattenSignedRecord(updated);
        }
      } catch {
        /* fallthrough */
      }
      return flattenSignedRecord(raw);
    }
    if (raw && raw.isPremium && !raw.sig && app.isPackaged) {
      return { ...empty, instanceId: raw.instanceId || null, tampered: true };
    }
    if (raw && raw.isPremium && !raw.sig && !app.isPackaged) {
      return raw;
    }
    return empty;
  } catch {
    return empty;
  }
}

function writeLicenseRecord(record) {
  fs.mkdirSync(path.dirname(getLicensePath()), { recursive: true });
  fs.writeFileSync(getLicensePath(), JSON.stringify(record, null, 2), "utf8");
}

function buildLicenseApiHeaders() {
  return {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded"
  };
}

function readLsTestMode(data) {
  return Boolean(data?.meta?.test_mode);
}

function getOrCreateInstanceId() {
  const rec = readLicenseRecord();
  if (rec.instanceId) return rec.instanceId;
  const instanceId = crypto.randomUUID();
  writeSignedLicense({
    ...rec,
    instanceId,
    licenseStatus: rec.licenseStatus || null,
    isPremium: false
  });
  return instanceId;
}

function mapApiErrorToCode(message, status) {
  const lower = String(message || "").toLowerCase();
  if (lower.includes("invalid") && lower.includes("license")) return "INVALID_LICENSE";
  if (lower.includes("activation limit")) return "ACTIVATION_LIMIT";
  if (lower.includes("expired")) return "EXPIRED";
  if (lower.includes("disabled")) return "DISABLED";
  if (status === 404) return "INVALID_LICENSE";
  return "ACTIVATION_FAILED";
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
  if (data?.error) return mapApiErrorToCode(String(data.error), status);
  return mapApiErrorToCode("", status);
}

function isLicenseStatusPremium(status) {
  return status === "active";
}

function isDevKeyBypass(key) {
  return !app.isPackaged && /^[A-F0-9-]{20,}$/i.test(key);
}

function activateDevLicense(key, instanceId) {
  writeSignedLicense({
    isPremium: true,
    licenseKey: key,
    instanceId,
    licenseStatus: "active",
    activatedAt: new Date().toISOString(),
    devMode: true
  });
  return { ok: true, isPremium: true, devMode: true };
}

async function activateWithLemonSqueezy(key, instanceId) {
  const { ok, status, data } = await callLicenseApi("activate", {
    license_key: key,
    instance_name: instanceId
  });

  if (data?.activated === true) {
    const licenseStatus = data.license_key?.status || "active";
    const premium = isLicenseStatusPremium(licenseStatus);
    writeSignedLicense({
      isPremium: premium,
      licenseKey: key,
      instanceId,
      lsInstanceId: data.instance?.id || null,
      licenseStatus,
      activatedAt: new Date().toISOString(),
      testMode: readLsTestMode(data)
    });
    if (!premium) {
      return {
        ok: false,
        code: mapApiErrorToCode(licenseStatus || "", status)
      };
    }
    return { ok: true, isPremium: true };
  }

  return { ok: false, code: extractLicenseApiError(data, status) };
}

/**
 * 멱등 활성화: 이 기기에서 같은 키로 이미 활성화한 적이 있으면(=lsInstanceId 보유),
 * 활성화 횟수를 추가로 차감하는 /activate 대신 /validate로만 확인한다.
 */
async function tryReuseExistingActivation(key) {
  const rec = readLicenseRecord();
  if (!rec.lsInstanceId) return null;
  if (rec.licenseKeyHash && rec.licenseKeyHash !== hashLicenseKey(key)) return null;

  try {
    const { data } = await callLicenseApi("validate", {
      license_key: key,
      instance_id: rec.lsInstanceId
    });
    const status = data?.license_key?.status;
    if (data?.valid === true && isLicenseStatusPremium(status)) {
      writeSignedLicense({
        isPremium: true,
        licenseKey: key,
        instanceId: rec.instanceId,
        lsInstanceId: data?.instance?.id || rec.lsInstanceId,
        licenseStatus: status,
        activatedAt: rec.activatedAt || new Date().toISOString(),
        testMode: readLsTestMode(data) || Boolean(rec.testMode)
      });
      return { ok: true, isPremium: true, reused: true };
    }
  } catch {
    /* validate 실패 시 정상 activate 흐름으로 진행 */
  }
  return null;
}

async function activateLicenseKey(licenseKey) {
  const key = String(licenseKey || "").trim();
  if (!key) {
    return { ok: false, code: "EMPTY_KEY" };
  }

  const instanceId = getOrCreateInstanceId();

  if (!isOnline()) {
    if (isDevKeyBypass(key)) {
      return activateDevLicense(key, instanceId);
    }
    return { ok: false, code: "OFFLINE" };
  }

  try {
    const reused = await tryReuseExistingActivation(key);
    if (reused) return reused;
    return await activateWithLemonSqueezy(key, instanceId);
  } catch {
    return { ok: false, code: "NETWORK" };
  }
}

function invalidateLicense(instanceId) {
  writeSignedLicense({
    isPremium: false,
    licenseKey: null,
    instanceId: instanceId || null,
    lsInstanceId: null,
    licenseStatus: null,
    activatedAt: null,
    testMode: false,
    devMode: false
  });
}

async function verifyStoredLicense() {
  const rec = readLicenseRecord();
  if (rec.tampered) {
    invalidateLicense(rec.instanceId);
    return readLicenseRecord();
  }
  if (rec.devMode && app.isPackaged) {
    invalidateLicense(rec.instanceId);
    return readLicenseRecord();
  }
  if (!rec.isPremium || rec.devMode) {
    return rec;
  }
  if (!rec.licenseKey && !rec.licenseKeyHash) {
    invalidateLicense(rec.instanceId);
    return readLicenseRecord();
  }

  if (!isOnline()) {
    return rec;
  }

  try {
    const stored = JSON.parse(fs.readFileSync(getLicensePath(), "utf8"));
    const licenseKey = stored.licenseKey;
    if (!licenseKey) {
      return rec;
    }
    const params = { license_key: licenseKey };
    if (rec.lsInstanceId) {
      params.instance_id = rec.lsInstanceId;
    }

    const { ok, status: httpStatus, data } = await callLicenseApi("validate", params);
    const status = data?.license_key?.status;
    const isActive = data?.valid === true && isLicenseStatusPremium(status);

    if (isActive) {
      writeSignedLicense({
        isPremium: true,
        licenseKey,
        instanceId: rec.instanceId,
        lsInstanceId: data?.instance?.id || rec.lsInstanceId || null,
        licenseStatus: status,
        activatedAt: rec.activatedAt || new Date().toISOString(),
        testMode: readLsTestMode(data) || Boolean(rec.testMode)
      });
      return readLicenseRecord();
    }

    // 서버가 명시적으로 무효를 알리면 캐시된 Plus 권한을 해제한다.
    // valid:false, 키 상태가 active가 아님, HTTP 4xx 거절 모두 해당한다.
    // (네트워크 오류 등 불명확한 응답은 catch에서 잡혀 캐시된 Plus를 유지한다.)
    const explicitlyInvalid =
      data?.valid === false ||
      (typeof status === "string" && status.length > 0 && !isLicenseStatusPremium(status));
    const rejectedByHttp =
      !ok && (httpStatus === 400 || httpStatus === 404 || httpStatus === 422);

    if (explicitlyInvalid || rejectedByHttp) {
      invalidateLicense(rec.instanceId);
    }
  } catch {
    /* 오프라인/일시 오류 시 캐시된 Plus를 유지한다. */
  }

  return readLicenseRecord();
}

function isPremiumActive() {
  const rec = readLicenseRecord();
  if (rec.tampered) return false;
  if (rec.v === LICENSE_FORMAT_VERSION && rec.payload && rec.sig) {
    if (!verifySignedRecord(rec)) return false;
    return isPayloadPremium(rec.payload);
  }
  if (app.isPackaged) return false;
  return Boolean(rec.isPremium);
}

function deactivateLicense() {
  const rec = readLicenseRecord();
  invalidateLicense(rec.instanceId);
  return { ok: true };
}

function getLicenseDebugInfo() {
  const rec = readLicenseRecord();
  return {
    testMode: Boolean(rec.testMode),
    signedFormat: true
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
  getLicenseDebugInfo
};

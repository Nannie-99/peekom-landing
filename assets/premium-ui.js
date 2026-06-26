/**
 * Premium lock modal + gating helpers (settings + main window)
 */
(function () {
  const BUY_URL =
    "https://peekom.lemonsqueezy.com/checkout/buy/b8f36320-f95e-4ce2-a49c-2c28e2d4c20d";
  const PREMIUM_FEAT_KEYS = [
    "premiumFeat1",
    "premiumFeat2",
    "premiumFeat3",
    "premiumFeat4",
    "premiumFeat5",
    "premiumFeat6",
    "premiumFeat7",
    "premiumFeat8"
  ];

  function t(key, fallback) {
    if (typeof PeekomI18n !== "undefined" && PeekomI18n.t) {
      const v = PeekomI18n.t(key);
      if (v && v !== key) return v;
    }
    return fallback || key;
  }

  const PREMIUM_ERROR_I18N = {
    EMPTY_KEY: "premiumErrEmptyKey",
    ACTIVATION_FAILED: "premiumErrActivationFailed",
    VALIDATION_FAILED: "premiumErrActivationFailed",
    INVALID_LICENSE: "premiumErrInvalidLicense",
    ACTIVATION_LIMIT: "premiumErrActivationLimit",
    EXPIRED: "premiumErrExpired",
    DISABLED: "premiumErrDisabled",
    NETWORK: "premiumErrNetwork",
    NETWORK_ERROR: "premiumErrNetwork",
    OFFLINE: "premiumOfflineHint",
    TAMPERED: "premiumErrTampered"
  };

  function formatPremiumError(result) {
    const code = result && result.code;
    const key = code && PREMIUM_ERROR_I18N[code];
    if (key) return t(key, t("premiumActivateFail", "인증에 실패했습니다."));
    return t("premiumActivateFail", "인증에 실패했습니다.");
  }

  function ensurePremiumModalStyles() {
    let style = document.getElementById("peekom-premium-modal-styles");
    if (!style) {
      style = document.createElement("style");
      style.id = "peekom-premium-modal-styles";
      document.head.appendChild(style);
    }
    style.textContent = `
      .premium-modal-backdrop {
        position: fixed; inset: 0; z-index: 9999;
        background: rgba(0,0,0,0.45);
        display: flex; align-items: center; justify-content: center;
        padding: 16px;
      }
      .premium-modal-backdrop.hidden { display: none; }
      .premium-modal {
        background: #fff; border-radius: 10px; max-width: 540px; width: 100%;
        padding: 22px 24px; box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        font-family: "Segoe UI", system-ui, sans-serif;
        box-sizing: border-box;
      }
      .premium-modal__layout {
        display: flex; gap: 16px; align-items: flex-start;
      }
      .premium-modal__aside {
        flex-shrink: 0; width: 72px; padding-top: 2px;
      }
      .premium-modal__hero-img {
        width: 72px; height: 72px; object-fit: contain; display: block;
      }
      .premium-modal__main { flex: 1; min-width: 0; }
      .premium-modal h3 {
        margin: 0 0 6px; font-size: 17px; color: #202020; font-weight: 700;
      }
      .premium-modal__lead {
        margin: 0 0 12px; font-size: 12px; color: #616161; line-height: 1.5;
      }
      .premium-feature-card {
        font-size: 11px; line-height: 1.55; color: #3a3a3a;
        background: #f7f5fb; border: 1px solid #e8e0f0; border-radius: 6px;
        padding: 10px 12px; margin-bottom: 14px;
      }
      .premium-feature-list {
        margin: 0; padding: 0; list-style: none;
      }
      .premium-feature-list li {
        display: flex; align-items: flex-start; gap: 6px;
        margin-bottom: 4px;
      }
      .premium-feature-list li:last-child { margin-bottom: 0; }
      .premium-feature-list__check {
        flex-shrink: 0; color: #8e44ad; font-size: 11px; line-height: 1.55;
      }
      .premium-modal label {
        display: block; font-size: 12px; color: #616161; margin-bottom: 4px;
      }
      .premium-modal input[type="text"] {
        width: 100%; box-sizing: border-box; padding: 8px 10px;
        border: 1px solid #ccc; border-radius: 4px; font-size: 13px; margin-bottom: 10px;
      }
      .premium-modal__actions { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }
      .premium-modal__btn {
        padding: 8px 14px; border-radius: 4px; border: 1px solid #ccc;
        background: #f3f3f3; cursor: pointer; font-size: 13px;
      }
      .premium-modal__btn--primary {
        background: #8e44ad; color: #fff; border-color: #7d3c98;
      }
      .premium-modal__btn:hover { filter: brightness(0.97); }
      .premium-modal__btn:disabled { opacity: 0.5; cursor: not-allowed; filter: none; }
      .premium-modal__error { color: #c42b1c; font-size: 12px; min-height: 18px; margin-top: 6px; }
      .premium-modal__error--info { color: #8a6d00; }
      .premium-modal__footer {
        margin-top: 12px; padding-top: 10px; border-top: 1px solid #ededed;
        display: flex; align-items: center;
      }
      .premium-modal__netstatus {
        font-size: 11px; color: #8a8a8a;
        display: inline-flex; align-items: center; gap: 5px;
      }
      .premium-modal__netstatus::before {
        content: ""; width: 7px; height: 7px; border-radius: 50%;
        background: #c0392b; display: inline-block; flex-shrink: 0;
      }
      .premium-modal__netstatus.is-online::before { background: #27ae60; }
      .premium-modal--success {
        display: flex; flex-direction: column; align-items: center; text-align: center;
      }
      .premium-modal--success .premium-modal__hero-img {
        width: 84px; height: 84px; margin: 0 auto 14px;
      }
      .premium-modal--success h3 {
        margin: 0 0 10px; font-size: 17px; color: #202020; font-weight: 700;
      }
      .premium-modal__success-lead {
        margin: 0 0 16px; font-size: 13px; color: #3a3a3a; line-height: 1.6;
        white-space: pre-line;
      }
      .premium-modal--success .premium-feature-card {
        width: 100%; box-sizing: border-box; text-align: left; margin-bottom: 16px;
      }
      .premium-modal--success .premium-modal__actions {
        width: 100%; justify-content: center;
      }
      .premium-lock-wrap { position: relative; }
      .premium-lock-wrap.is-locked { opacity: 0.72; }
      .premium-lock-badge {
        display: inline-flex; align-items: center; gap: 4px;
        font-size: 11px; font-weight: 500; color: #fff; background: #8e44ad;
        margin-left: 6px; padding: 1px 6px; border-radius: 4px; line-height: 1.35;
        white-space: nowrap;
      }
    `;
  }

  function buildFeatureCardHtml() {
    const items = PREMIUM_FEAT_KEYS.map(
      (key) =>
        `<li><span class="premium-feature-list__check" aria-hidden="true">✔️</span><span data-i18n="${key}">${t(key, key)}</span></li>`
    ).join("");
    return `<div class="premium-feature-card"><ul class="premium-feature-list">${items}</ul></div>`;
  }

  function refreshPremiumModalI18n() {
    const backdrop = document.getElementById("peekomPremiumModal");
    if (backdrop?.dataset.view === "success") {
      const title = document.getElementById("premiumModalTitle");
      const lead = document.getElementById("premiumUpgradeSuccessLead");
      const btn = document.getElementById("premiumUpgradeSuccessBtn");
      if (title) title.textContent = t("premiumUpgradeSuccessTitle", "업그레이드 완료!");
      if (lead) {
        lead.textContent = t(
          "premiumUpgradeSuccessLead",
          "Peekom Plus를 구매해 주셔서 감사합니다. 이제 모든 Plus 기능을 바로 사용할 수 있습니다."
        );
      }
      if (btn) btn.textContent = t("premiumUpgradeSuccessBtn", "시작하기");
      PREMIUM_FEAT_KEYS.forEach((key) => {
        const el = document.querySelector(`#peekomPremiumModal [data-i18n="${key}"]`);
        if (el) el.textContent = t(key, el.textContent);
      });
      return;
    }
    const title = document.getElementById("premiumModalTitle");
    const lead = document.querySelector("#peekomPremiumModal .premium-modal__lead");
    const buyBtn = document.getElementById("premiumBuyBtn");
    const activateBtn = document.getElementById("premiumActivateBtn");
    const closeBtn = document.getElementById("premiumModalClose");
    const label = document.querySelector('label[for="premiumLicenseInput"]');
    if (title) title.textContent = t("premiumModalTitle", "PLUS 기능 잠금 해제");
    if (lead) lead.textContent = t("premiumModalLead", "Peekom Plus로 업그레이드하여 아래의 기능을 모두 누리세요.");
    if (buyBtn) buyBtn.textContent = t("premiumBuyBtn", "Peekom Plus 구매하기");
    if (activateBtn && !activateBtn.disabled) activateBtn.textContent = t("premiumActivateBtn", "인증");
    if (closeBtn) closeBtn.textContent = t("premiumCloseBtn", "닫기");
    if (label) label.textContent = t("premiumLicenseLabel", "라이선스 키");
    PREMIUM_FEAT_KEYS.forEach((key) => {
      const el = document.querySelector(`#peekomPremiumModal [data-i18n="${key}"]`);
      if (el) el.textContent = t(key, el.textContent);
    });
    if (document.getElementById("premiumNetStatus")) updateNetStatusUI();
  }

  function createPremiumModal() {
    ensurePremiumModalStyles();
    let backdrop = document.getElementById("peekomPremiumModal");
    if (backdrop) return backdrop;

    backdrop = document.createElement("div");
    backdrop.id = "peekomPremiumModal";
    backdrop.className = "premium-modal-backdrop hidden";
    backdrop.innerHTML = `
      <div class="premium-modal" role="dialog" aria-labelledby="premiumModalTitle">
        <div class="premium-modal__layout">
          <div class="premium-modal__aside">
            <img class="premium-modal__hero-img" src="build/plus.ico" alt="" width="72" height="72" />
          </div>
          <div class="premium-modal__main">
            <h3 id="premiumModalTitle"></h3>
            <p class="premium-modal__lead"></p>
            ${buildFeatureCardHtml()}
            <label for="premiumLicenseInput"></label>
            <input type="text" id="premiumLicenseInput" placeholder="XXXX-XXXX-XXXX-XXXX" autocomplete="off" />
            <div class="premium-modal__actions">
              <button type="button" class="premium-modal__btn premium-modal__btn--primary" id="premiumBuyBtn"></button>
              <button type="button" class="premium-modal__btn" id="premiumActivateBtn"></button>
              <button type="button" class="premium-modal__btn" id="premiumModalClose"></button>
            </div>
            <div class="premium-modal__error" id="premiumModalError"></div>
            <div class="premium-modal__footer">
              <span class="premium-modal__netstatus" id="premiumNetStatus"></span>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(backdrop);
    refreshPremiumModalI18n();
    updateNetStatusUI();
    ensureNetStatusListeners();

    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) hidePremiumModal();
    });
    document.getElementById("premiumModalClose").addEventListener("click", hidePremiumModal);
    document.getElementById("premiumBuyBtn").addEventListener("click", async () => {
      if (window.peekom) await window.peekom.invoke("premium:open-buy");
    });
    document.getElementById("premiumActivateBtn").addEventListener("click", activateFromModal);
    document.getElementById("premiumLicenseInput").addEventListener("keydown", (e) => {
      if (e.key === "Enter") activateFromModal();
    });
    return backdrop;
  }

  function showPremiumUpgradeSuccess() {
    const backdrop = document.getElementById("peekomPremiumModal");
    if (!backdrop) return;
    backdrop.dataset.view = "success";
    const dialog = backdrop.querySelector(".premium-modal");
    if (dialog) dialog.classList.add("premium-modal--success");
    backdrop.innerHTML = `
      <div class="premium-modal premium-modal--success" role="dialog" aria-labelledby="premiumModalTitle">
        <img class="premium-modal__hero-img" src="build/plus.png" alt="" width="84" height="84" />
        <h3 id="premiumModalTitle"></h3>
        <p class="premium-modal__success-lead" id="premiumUpgradeSuccessLead"></p>
        ${buildFeatureCardHtml()}
        <div class="premium-modal__actions">
          <button type="button" class="premium-modal__btn premium-modal__btn--primary" id="premiumUpgradeSuccessBtn"></button>
        </div>
      </div>
    `;
    refreshPremiumModalI18n();
    backdrop.classList.remove("hidden");
    document.getElementById("premiumUpgradeSuccessBtn")?.addEventListener("click", hidePremiumModal);
    if (typeof window.peekomSyncWindowInteraction === "function") {
      window.peekomSyncWindowInteraction({ ignoreMouse: false, pointerOver: true });
    }
    document.getElementById("premiumUpgradeSuccessBtn")?.focus();
  }

  function isOnline() {
    return typeof navigator === "undefined" ? true : navigator.onLine !== false;
  }

  let netStatusListenersBound = false;
  function ensureNetStatusListeners() {
    if (netStatusListenersBound || typeof window === "undefined") return;
    netStatusListenersBound = true;
    window.addEventListener("online", updateNetStatusUI);
    window.addEventListener("offline", updateNetStatusUI);
  }

  /**
   * 모달 푸터의 인터넷 연결 상태 텍스트를 갱신하고,
   * 오프라인일 때는 인증 버튼을 막아 라이선스 횟수가 낭비되지 않게 한다.
   */
  function updateNetStatusUI() {
    const statusEl = document.getElementById("premiumNetStatus");
    const btn = document.getElementById("premiumActivateBtn");
    const errEl = document.getElementById("premiumModalError");
    const online = isOnline();

    if (statusEl) {
      statusEl.classList.toggle("is-online", online);
      statusEl.textContent = online
        ? t("premiumNetOnline", "인터넷에 연결됨")
        : t("premiumNetOffline", "인터넷에 연결되어 있지 않음");
    }

    // 활성화 진행 중이 아닐 때만 버튼 상태를 제어한다.
    if (btn && !btn.dataset.activating) {
      btn.disabled = !online;
      btn.title = online ? "" : t("premiumOfflineHint", "");
    }

    if (errEl) {
      if (!online) {
        errEl.textContent = t(
          "premiumOfflineHint",
          "라이선스 인증은 인터넷에 연결된 상태에서만 가능합니다. 연결 후 다시 시도해 주세요."
        );
        errEl.classList.add("premium-modal__error--info");
      } else if (errEl.classList.contains("premium-modal__error--info")) {
        errEl.textContent = "";
        errEl.classList.remove("premium-modal__error--info");
      }
    }
  }

  async function activateFromModal() {
    const input = document.getElementById("premiumLicenseInput");
    const errEl = document.getElementById("premiumModalError");
    const btn = document.getElementById("premiumActivateBtn");

    // 오프라인이면 API를 호출하지 않고 막는다(라이선스 횟수 보호).
    if (!isOnline()) {
      updateNetStatusUI();
      return;
    }

    if (errEl) {
      errEl.textContent = "";
      errEl.classList.remove("premium-modal__error--info");
    }
    if (btn) {
      btn.dataset.activating = "1";
      btn.disabled = true;
      btn.textContent = t("premiumActivating", "확인 중…");
    }
    try {
      const result = await window.peekom.invoke("premium:activate", input.value.trim());
      if (result && result.ok) {
        // 활성화는 성공했는데 이후 화면 갱신에서 오류가 나도
        // "인증 실패"처럼 보이지 않도록 보호한다(서버 활성화는 이미 완료됨).
        try {
          if (typeof window.onPremiumActivated === "function") {
            await window.onPremiumActivated();
          }
        } catch (err) {
          console.error("onPremiumActivated failed:", err);
        }
        showPremiumUpgradeSuccess();
        return;
      }
      if (errEl) {
        errEl.textContent = formatPremiumError(result);
      }
    } catch (err) {
      console.error("premium:activate failed:", err);
      if (errEl) errEl.textContent = t("premiumActivateFail", "인증에 실패했습니다.");
    } finally {
      const liveBtn = document.getElementById("premiumActivateBtn");
      if (liveBtn) {
        delete liveBtn.dataset.activating;
        liveBtn.disabled = !isOnline();
        liveBtn.textContent = t("premiumActivateBtn", "인증");
      }
    }
  }

  function showPremiumModal() {
    const existing = document.getElementById("peekomPremiumModal");
    if (existing && (existing.dataset.view === "success" || !existing.querySelector(".premium-feature-list"))) {
      existing.remove();
    }
    createPremiumModal();
    const backdrop = document.getElementById("peekomPremiumModal");
    if (backdrop) backdrop.dataset.view = "purchase";
    refreshPremiumModalI18n();
    document.getElementById("premiumModalError").textContent = "";
    document.getElementById("peekomPremiumModal").classList.remove("hidden");
    ensureNetStatusListeners();
    updateNetStatusUI();
    document.getElementById("premiumLicenseInput").focus();
    if (typeof window.peekomSyncWindowInteraction === "function") {
      window.peekomSyncWindowInteraction({ ignoreMouse: false, pointerOver: true });
    }
  }

  function hidePremiumModal() {
    const el = document.getElementById("peekomPremiumModal");
    if (el) {
      el.classList.add("hidden");
      delete el.dataset.view;
    }
    if (typeof window.peekomRefreshPointerHitTest === "function") {
      window.peekomRefreshPointerHitTest({}, true);
    }
  }

  function requirePremium(isPremium, onAllowed) {
    if (isPremium) {
      onAllowed();
      return true;
    }
    showPremiumModal();
    return false;
  }

  function bindPremiumGate(el, isPremium, handler) {
    if (!el || el.dataset.premiumBound) return;
    el.dataset.premiumBound = "1";
    el.addEventListener("click", (e) => {
      if (isPremium()) return;
      e.preventDefault();
      e.stopPropagation();
      showPremiumModal();
    });
    if (el.tagName === "SELECT" || el.tagName === "INPUT") {
      el.addEventListener("mousedown", (e) => {
        if (isPremium()) return;
        e.preventDefault();
        showPremiumModal();
      });
    }
  }

  window.PeekomPremiumUI = {
    showPremiumModal,
    hidePremiumModal,
    refreshPremiumModalI18n,
    requirePremium,
    bindPremiumGate,
    BUY_URL
  };
})();

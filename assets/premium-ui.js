/**
 * Premium lock modal + gating helpers (settings + main window)
 */
(function () {
  const BUY_URL = "https://peekom.lemonsqueezy.com/buy";

  const PREMIUM_FEATURES = [
    "최대 10개의 독립 인덱스",
    "보내기 · JSON 백업",
    "메모당 최대 5개의 이미지 삽입",
    "이미지 크기 조절 · 비율 자르기",
    "글자 크기 조절",
    "메모 기본 불투명도 조절",
    "메모 배경색 / 글자 색 변경",
    "글꼴 변경"
  ];

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
        white-space: nowrap;
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
      .premium-modal__error { color: #c42b1c; font-size: 12px; min-height: 18px; margin-top: 6px; }
      .premium-lock-wrap { position: relative; }
      .premium-lock-wrap.is-locked { opacity: 0.72; }
      .premium-lock-badge {
        display: inline-flex; align-items: center; gap: 4px;
        font-size: 11px; color: #8e44ad; margin-left: 6px;
      }
    `;
  }

  function buildFeatureCardHtml() {
    const items = PREMIUM_FEATURES.map(
      (text) =>
        `<li><span class="premium-feature-list__check" aria-hidden="true">✔️</span><span>${text}</span></li>`
    ).join("");
    return `<div class="premium-feature-card" aria-label="Plus 기능 목록"><ul class="premium-feature-list">${items}</ul></div>`;
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
            <img class="premium-modal__hero-img" src="build/plus.png" alt="" width="72" height="72" />
          </div>
          <div class="premium-modal__main">
            <h3 id="premiumModalTitle">PLUS 기능 잠금 해제</h3>
            <p class="premium-modal__lead">Peekom Plus로 업그레이드하여 아래의 기능을 모두 누리세요.</p>
            ${buildFeatureCardHtml()}
            <label for="premiumLicenseInput">라이선스 키</label>
            <input type="text" id="premiumLicenseInput" placeholder="XXXX-XXXX-XXXX-XXXX" autocomplete="off" />
            <div class="premium-modal__actions">
              <button type="button" class="premium-modal__btn premium-modal__btn--primary" id="premiumBuyBtn">Peekom Plus 구매하기</button>
              <button type="button" class="premium-modal__btn" id="premiumActivateBtn">인증</button>
              <button type="button" class="premium-modal__btn" id="premiumModalClose">닫기</button>
            </div>
            <div class="premium-modal__error" id="premiumModalError"></div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(backdrop);

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

  async function activateFromModal() {
    const input = document.getElementById("premiumLicenseInput");
    const errEl = document.getElementById("premiumModalError");
    const btn = document.getElementById("premiumActivateBtn");
    errEl.textContent = "";
    if (btn) {
      btn.disabled = true;
      btn.textContent = "확인 중…";
    }
    try {
      const result = await window.peekom.invoke("premium:activate", input.value.trim());
      if (result.ok) {
        hidePremiumModal();
        if (typeof window.onPremiumActivated === "function") {
          window.onPremiumActivated();
        }
      } else {
        errEl.textContent = result.message || "인증에 실패했습니다.";
      }
    } finally {
      if (btn) {
        btn.disabled = false;
        btn.textContent = "인증";
      }
    }
  }

  function showPremiumModal() {
    const existing = document.getElementById("peekomPremiumModal");
    if (existing && !existing.querySelector(".premium-feature-list")) {
      existing.remove();
    }
    createPremiumModal();
    document.getElementById("premiumModalError").textContent = "";
    document.getElementById("peekomPremiumModal").classList.remove("hidden");
    document.getElementById("premiumLicenseInput").focus();
    if (typeof window.peekomSyncWindowInteraction === "function") {
      window.peekomSyncWindowInteraction({ ignoreMouse: false, pointerOver: true });
    }
  }

  function hidePremiumModal() {
    const el = document.getElementById("peekomPremiumModal");
    if (el) el.classList.add("hidden");
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
    requirePremium,
    bindPremiumGate,
    BUY_URL
  };
})();

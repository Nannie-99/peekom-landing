/* Peekom landing — shared site logic */
(function () {
"use strict";

/* ── Download URLs ── */
const LINKS = {
    win: "https://github.com/Nannie-99/peekom-landing/releases/latest/download/Peekom-Setup.exe",
    mac: "https://github.com/Nannie-99/peekom-landing/releases/latest",
    buy: "https://peekom.lemonsqueezy.com/checkout/buy/b8f36320-f95e-4ce2-a49c-2c28e2d4c20d",
    reviewForm: "https://forms.gle/RZVnm6pCL7CRd5AY7"
};

const WIN_SETUP_FILENAME = "Peekom-Setup.exe";

const PRICING = { list: 12.99, sale: 9.99, currency: 'USD' };

const CONTACT_EMAIL = "hello.peekom@gmail.com";

const RELEASE_HISTORY = [
    {
        version: "1.2.0",
        date: "2026/06/26",
        latest: true,
        winUrl: "https://github.com/Nannie-99/peekom-landing/releases/download/v1.2.0/Peekom-Setup.exe",
        macUrl: "https://github.com/Nannie-99/peekom-landing/releases/download/v1.2.0/Peekom-macOS.dmg"
    }
];

const CHANGELOG = {
    ko: [{
        version: "1.2.0",
        date: "2026.06.26",
        items: [
            "빼꼼 인덱스가 Peekom으로 돌아왔습니다",
            "가장자리 손잡이·얼음 모드·듀얼 모니터 지원",
            "서식바: 글자색·목록(점/네모/숫자) 드롭다운, 순서 개편",
            "무료 메모당 이미지 1장 · Plus 5장, 크기 조절·비율 자르기",
            "Peekom Plus: 10슬롯 독립 배치, 커스텀 테마·글꼴·불투명도, 왼쪽 패널, 보내기·JSON 백업"
        ]
    }],
    en: [{
        version: "1.2.0",
        date: "2026.06.26",
        items: [
            "Peekom rebrand from legacy edge memo app",
            "Edge handle, Ice mode, dual monitor support",
            "Toolbar: color & list dropdowns, reordered controls",
            "Free: 1 image per memo · Plus: 5, resize & aspect crop",
            "Peekom Plus: 10 slots, custom theme, left panel, export & JSON backup"
        ]
    }]
};

function getPromoDiscountPct() {
    return Math.round((1 - PRICING.sale / PRICING.list) * 100);
}

function buildPromoTagHtml(d, opts) {
    opts = opts || {};
    const variant = opts.variant || "default";
    const showHead = opts.showHead !== false;
    const pct = getPromoDiscountPct();
    const vat = d.promoVat || "(VAT 별도)";
    const label = (d.promoLaunchLabel || "출시 기념\n프로모션가\n적용 중").replace(/\\n/g, "\n");
    const note = opts.showNote === false ? "" : (d.promoNote || "");
    const noteInline = note && opts.noteInline !== false;
    const sectionTitle = d.promoSectionTitle || "Peekom Plus(유료)";
    const tagClass = variant === "compare" ? " promo-tag--compare" : "";
    const headHtml = showHead
        ? (
            '<div class="promo-section__head">' +
                '<span class="promo-section__line" aria-hidden="true"></span>' +
                '<span class="promo-section__title">' + sectionTitle + '</span>' +
                '<span class="promo-section__line" aria-hidden="true"></span>' +
            '</div>'
        )
        : "";
    const sectionClass = variant === "compare" ? "promo-section promo-section--compare" : "promo-section";
    const labelHtml = label
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\n/g, "<br>");
    const pctRowHtml =
        '<div class="promo-tag__pct-row">' +
            '<span class="promo-tag__pct">' + pct + '% OFF</span>' +
            (noteInline && note ? '<span class="promo-tag__note-inline' + (variant === "compare" ? " promo-tag__note-inline--alert" : "") + '">' + note + "</span>" : "") +
        "</div>";
    return (
        '<div class="' + sectionClass + '">' +
            headHtml +
            '<div class="promo-tag' + tagClass + '">' +
                '<div class="promo-tag__card">' +
                    '<div class="promo-tag__prices">' +
                        pctRowHtml +
                        '<div class="promo-tag__price-row">' +
                            '<span class="pricing-was">$' + PRICING.list.toFixed(2) + '</span>' +
                            '<span class="promo-tag__now">$' + PRICING.sale.toFixed(2) + '</span>' +
                        '</div>' +
                        '<span class="pricing-vat">' + vat + '</span>' +
                    '</div>' +
                    '<span class="promo-tag__label">' + labelHtml + '</span>' +
                '</div>' +
                (note && !noteInline ? '<p class="promo-tag__note">' + note + '</p>' : '') +
            '</div>' +
        '</div>'
    );
}

function buildGuidePlusHtml(d) {
    const buyLink = LINKS.buy;
    const cta = d.compareCta || "Peekom Plus 구입";
    return (
        '<div class="guide-plus-steps">' +
            "<p>" + (d.guidePlusStep1 || "1. 아래 버튼에서 Peekom Plus를 구매합니다.") + "</p>" +
            '<p class="guide-plus-cta"><a href="' + buyLink + '" class="btn btn--buy btn--plus" target="_blank" rel="noopener">' + cta + "</a></p>" +
            "<p>" + (d.guidePlusStep2 || "2. 이메일로 받은 라이선스 키를 확인합니다.") + "</p>" +
            "<p>" + (d.guidePlusStep3 || "3. Peekom을 실행한 뒤 <strong>설정창</strong> 또는 <strong>설정</strong>에서 키를 입력합니다.") + "</p>" +
            "<p>" + (d.guidePlusStep4 || "4. Peekom Plus 활성화가 완료됩니다.") + "</p>" +
        "</div>"
    );
}

function buildPromoSectionHeadHtml(title) {
    return (
        '<div class="promo-section__head">' +
            '<span class="promo-section__line" aria-hidden="true"></span>' +
            '<span class="promo-section__title">' + title + '</span>' +
            '<span class="promo-section__line" aria-hidden="true"></span>' +
        '</div>'
    );
}

function updateOfferCardSet(d, ids) {
    if (!document.getElementById(ids.plusBuy)) return;
    const pct = getPromoDiscountPct();
    const buyLabel = d.heroPlusBuyBtn || d.compareCta || "구입하기";
    const downloadLabel = d.heroFreeDownloadLabel || "다운로드";
    setText(ids.plusPct, pct + "% OFF");
    setText(ids.plusWas, "$" + PRICING.list.toFixed(2));
    setText(ids.plusNow, "$" + PRICING.sale.toFixed(2));
    setText(ids.plusTitle, d.heroPlusCardTitle || "Peekom Plus");
    setText(ids.plusBadge, d.heroPlusCardBadge || "PAID");
    setText(ids.plusOs, d.heroPlusCardOs || "Windows");
    setText(ids.plusMeta, d.heroPlusCardMeta || "1회 구매 · 최대 2대 기기 · 영구 사용");
    setText(ids.plusBuyLabel, buyLabel);
    const plusCard = document.getElementById(ids.plusBuy);
    if (plusCard) plusCard.setAttribute("aria-label", buyLabel);
    setText(ids.winTitle, d.heroFreeCardTitle || "Peekom");
    if (ids.winBadge) setText(ids.winBadge, d.heroFreeCardBadge || "FREE");
    setText(ids.winMeta, d.heroWinCardMeta || "Windows 10 · 11 (64-bit)");
    setText(ids.winBtnLabel, downloadLabel);
    const winCard = document.getElementById(ids.winBtn);
    if (winCard) winCard.setAttribute("aria-label", downloadLabel);
    setText(ids.macPlusTitle, d.heroMacPlusCardTitle || d.heroPlusCardTitle || "Peekom Plus");
    setText(ids.macPlusBadge, d.heroMacPlusCardBadge || d.heroPlusCardBadge || "PAID");
    setText(ids.macPlusOs, d.heroMacPlusCardOs || "macOS");
    setText(ids.macPlusMeta, d.heroMacPlusCardMeta || d.heroPlusCardMeta || "1회 구매 · 최대 2대 기기 · 영구 사용");
    setText(ids.macPlusPct, pct + "% OFF");
    setText(ids.macPlusWas, "$" + PRICING.list.toFixed(2));
    setText(ids.macPlusNow, "$" + PRICING.sale.toFixed(2));
    setText(ids.macPlusBuyLabel, buyLabel);
    const macPlusCard = document.getElementById(ids.macPlusBuy);
    if (macPlusCard) macPlusCard.setAttribute("aria-label", buyLabel);
    setText(ids.macFreeTitle, d.heroMacFreeCardTitle || d.heroFreeCardTitle || "Peekom");
    if (ids.macFreeBadge) setText(ids.macFreeBadge, d.heroMacFreeCardBadge || d.heroFreeCardBadge || "FREE");
    setText(ids.macFreeMeta, d.heroMacFreeCardMeta || "macOS");
    setText(ids.macBtnLabel, downloadLabel);
    const macFreeCard = document.getElementById(ids.macBtn);
    if (macFreeCard) macFreeCard.setAttribute("aria-label", downloadLabel);
}

function updateHeroOfferCards(d) {
    updateOfferCardSet(d, {
        plusBuy: "heroPlusBuyBtn",
        plusPct: "heroPlusPct",
        plusWas: "heroPlusWas",
        plusNow: "heroPlusNow",
        plusTitle: "heroPlusCardTitle",
        plusBadge: "heroPlusCardBadge",
        plusOs: "heroPlusCardOs",
        plusMeta: "heroPlusCardMeta",
        plusBuyLabel: "heroPlusBuyBtnLabel",
        winBtn: "heroWinBtn",
        winTitle: "heroWinCardTitle",
        winBadge: "heroFreeCardBadge",
        winMeta: "heroWinCardMeta",
        winBtnLabel: "heroWinBtnLabel",
        macPlusBuy: "heroMacPlusBuyBtn",
        macPlusTitle: "heroMacPlusCardTitle",
        macPlusBadge: "heroMacPlusCardBadge",
        macPlusOs: "heroMacPlusCardOs",
        macPlusMeta: "heroMacPlusCardMeta",
        macPlusPct: "heroMacPlusPct",
        macPlusWas: "heroMacPlusWas",
        macPlusNow: "heroMacPlusNow",
        macPlusBuyLabel: "heroMacPlusBuyBtnLabel",
        macBtn: "heroMacBtn",
        macFreeTitle: "heroMacFreeCardTitle",
        macFreeBadge: "heroMacFreeCardBadge",
        macFreeMeta: "heroMacFreeCardMeta",
        macBtnLabel: "heroMacBtnLabel"
    });
    updateOfferCardSet(d, {
        plusBuy: "dlPlusBuyBtn",
        plusPct: "dlPlusPct",
        plusWas: "dlPlusWas",
        plusNow: "dlPlusNow",
        plusTitle: "dlPlusCardTitle",
        plusBadge: "dlPlusCardBadge",
        plusOs: "dlPlusCardOs",
        plusMeta: "dlPlusCardMeta",
        plusBuyLabel: "dlPlusBuyBtnLabel",
        winBtn: "dlWinBtn",
        winTitle: "dlWinCardTitle",
        winBadge: "dlFreeCardBadge",
        winMeta: "dlWinCardMeta",
        winBtnLabel: "dlWinBtnLabel",
        macPlusBuy: "dlMacPlusBuyBtn",
        macPlusTitle: "dlMacPlusCardTitle",
        macPlusBadge: "dlMacPlusCardBadge",
        macPlusOs: "dlMacPlusCardOs",
        macPlusMeta: "dlMacPlusCardMeta",
        macPlusPct: "dlMacPlusPct",
        macPlusWas: "dlMacPlusWas",
        macPlusNow: "dlMacPlusNow",
        macPlusBuyLabel: "dlMacPlusBuyBtnLabel",
        macBtn: "dlMacBtn",
        macFreeTitle: "dlMacFreeCardTitle",
        macFreeBadge: "dlMacFreeCardBadge",
        macFreeMeta: "dlMacFreeCardMeta",
        macBtnLabel: "dlMacBtnLabel"
    });
    setText("heroFreeCardTitle", d.heroFreeCardTitle || "Peekom");
}

function buildComparePricingBoxHtml(d) {
    const buyLink = LINKS.buy;
    const cta = d.compareCta || "Get Peekom Plus";
    return (
        '<div class="compare-pricing-layout">' +
            '<div class="compare-pricing-layout__main">' +
                buildPromoTagHtml(d, { variant: "compare", showHead: false, showNote: true, noteInline: true }) +
                '<p class="compare-pricing-extra">' + (d.comparePricingExtra || "") + "</p>" +
            "</div>" +
            '<div class="compare-pricing-layout__cta">' +
                '<a href="' + buyLink + '" class="btn btn--buy btn--plus compare-pricing-buy-btn" target="_blank" rel="noopener">' + cta + "</a>" +
            "</div>" +
        "</div>"
    );
}

function renderVersionHistory(d) {
    const host = document.getElementById("versionHistoryHost");
    if (!host) return;
    const latestLabel = d.versionLatest || "Latest";
    const winLabel = d.versionWin || "Setup (x64)";
    const macLabel = d.versionMacSoon || "Coming soon";
    const rows = RELEASE_HISTORY.map(function (r) {
        const badge = r.latest ? ' <span class="badge-latest">' + latestLabel + '</span>' : "";
        return (
            "<tr>" +
                "<td><strong>v" + r.version + "</strong>" + badge + "</td>" +
                "<td>" + r.date + "</td>" +
                '<td><span class="os-icon">Win</span> <a href="' + r.winUrl + '" target="_blank" rel="noopener">' + winLabel + "</a></td>" +
                '<td><span class="version-na" title="' + macLabel + '" aria-label="' + macLabel + '">&#10007;</span></td>' +
            "</tr>"
        );
    }).join("");
    host.innerHTML =
        '<table class="version-table">' +
            "<thead><tr>" +
                "<th>" + (d.versionColVersion || "Version") + "</th>" +
                "<th>" + (d.versionColDate || "Release Date") + "</th>" +
                "<th>" + (d.versionColWin || "Windows") + "</th>" +
                "<th>" + (d.versionColMac || "macOS") + "</th>" +
            "</tr></thead>" +
            "<tbody>" + rows + "</tbody>" +
        "</table>";
}

function renderChangelog(d) {
    const host = document.getElementById("changelogHost");
    if (!host) return;
    const lang = resolveLang(currentLang);
    const entries = (CHANGELOG[lang] || CHANGELOG.en || []);
    host.innerHTML = entries.map(function (entry) {
        const items = entry.items.map(function (item) {
            return "<li>" + item + "</li>";
        }).join("");
        return (
            '<div class="changelog-entry">' +
                '<div class="changelog-entry__head">v' + entry.version + '<span>(' + entry.date + ")</span></div>" +
                "<ul>" + items + "</ul>" +
            "</div>"
        );
    }).join("");
}

const LANG_META = [
    { code: "ko", label: "한국어" },
    { code: "en", label: "English" },
    { code: "ja", label: "日本語" },
    { code: "zh-CN", label: "简体中文" },
    { code: "zh-TW", label: "繁體中文" },
    { code: "es", label: "Español" },
    { code: "fr", label: "Français" },
    { code: "de", label: "Deutsch" },
    { code: "pt", label: "Português" },
    { code: "it", label: "Italiano" },
    { code: "ru", label: "Русский" },
    { code: "vi", label: "Tiếng Việt" },
    { code: "th", label: "ไทย" },
    { code: "id", label: "Bahasa Indonesia" },
    { code: "hi", label: "हिन्दी" },
    { code: "ar", label: "العربية" }
];

const i18n = {
    ko: {
        navHome: "홈", navFeatures: "기능", navDownload: "다운로드", navFaq: "자주 묻는 질문", navHelp: "가이드", navContact: "연락",
        searchPlaceholder: "검색...",
        heroTitleMain: "Peekom",
        heroTagline: "빼꼼 인덱스가 <strong>Peekom</strong>으로 돌아왔습니다.<br>가볍고 빠르게—업무 흐름을 이어가세요.",
        heroPlusNote: '무료 앱 설치 후 설정에서 Peekom Plus로 업그레이드할 수 있습니다.<br><a href="features.html#compare">기능 표에서 무료·Plus 차이</a>를 확인하세요.',
        heroUpgradeNote: "무료 앱 설치 후 설정에서 Peekom Plus로 업그레이드할 수 있습니다.",
        heroFreeCompareNote: '<a href="features.html#compare">무료와 Plus 차이</a>를 확인하세요.',
        heroWinBtn: "Windows 다운로드", heroMacBtn: "macOS 다운로드",
        heroPlusBuyBtn: "구입하기",
        heroPlusCardTitle: "Peekom Plus",
        heroPlusCardBadge: "유료",
        heroPlusCardOs: "Windows",
        heroMacPlusCardTitle: "Peekom Plus",
        heroMacPlusCardBadge: "유료",
        heroPlusCardMeta: "1회 구매 · 최대 2대 기기 · 영구 사용",
        heroFreeCardTitle: "Peekom",
        heroFreeCardBadge: "무료",
        heroMacFreeCardBadge: "무료",
        heroWinCardMeta: "Windows 10 · 11 (64-bit)",
        heroMacFreeCardMeta: "macOS",
        heroFreeDownloadLabel: "다운로드",
        carouselCap1: "모니터 가장자리 손잡이",
        carouselCap2: "클릭·단축키로 메모 열기",
        carouselCap3: "얼음 모드 · 자동 접힘 딜레이",
        reviewBtnLabel: "후기 남기기",
        reviewEmpty: "첫 후기를 남겨주세요!",
        reviewAnonymous: "익명",
        detectWin: "현재 환경: <strong>Windows</strong> — Windows 버튼 권장",
        detectMac: "현재 환경: <strong>macOS</strong> — macOS 버튼 권장",
        detectGeneric: "운영체제를 자동으로 감지하지 못했습니다. 직접 선택해 주세요.",
        featuresTitle: "기능", featuresSub: "Peekom이 하는 일을 한눈에 확인할 수 있습니다.",
        compareTitle: "Peekom vs Peekom Plus", compareSub: "같은 앱 하나로 시작하고, Plus는 앱 안에서 잠금 해제합니다.",
        comparePricing: '<span class="pricing-was">$' + PRICING.list.toFixed(2) + '</span> <span class="pricing-now">$' + PRICING.sale.toFixed(2) + ' USD</span> <span class="pricing-vat">(VAT 별도)</span> · <span class="pricing-launch">출시 기념 가격</span> · 1회 구매 · 최대 2대 기기 · 소버전 업데이트 포함 · 30일 환불 (<a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>)',
        guidePlusP: "1) Lemon Squeezy에서 출시 기념 $9.99 구매 → 2) 이메일 라이선스 키 수신 → 3) Peekom 실행 → 잠금 UI 또는 설정에서 키 입력 → 4) Peekom Plus + plus.png로 전환. 30일 환불: <a href=\"mailto:" + CONTACT_EMAIL + "\">" + CONTACT_EMAIL + "</a>",
        dlSub: "Peekom 하나만 설치하시면 됩니다. Plus는 앱 안에서 업그레이드합니다.",
        purchaseSuccessTitle: "Peekom Plus 구매가 완료되었습니다!",
        purchaseSuccessLead: "아래 라이선스 키를 복사한 뒤, Peekom 앱에서 Plus를 활성화해 주세요.",
        purchaseSuccessKeyLabel: "라이선스 키",
        purchaseSuccessCopyBtn: "복사",
        purchaseSuccessCopied: "복사됨",
        purchaseSuccessStep1: "아래 <strong>Windows 다운로드</strong> 버튼으로 Peekom을 설치합니다.",
        purchaseSuccessStep2: "앱을 실행한 뒤 <strong>설정(⚙)</strong> 또는 Plus 잠금 화면에서 키를 붙여넣고 <strong>인증</strong>합니다.",
        purchaseSuccessStep3: "인증이 완료되면 앱 이름이 <strong>Peekom Plus</strong>로 바뀌고 유료 기능이 열립니다.",
        purchaseSuccessDownloadBtn: "Windows 앱 다운로드",
        purchaseSuccessEmailNote: "이 키는 구매 영수증 이메일에도 포함되어 있습니다.",
        dlWin: "Peekom Setup (Windows)", dlMac: "Peekom Setup (macOS)",
        dlPlusHint: 'Peekom Plus: 정가 <span class="pricing-was">$' + PRICING.list.toFixed(2) + '</span> → 출시 기념 <strong>$' + PRICING.sale.toFixed(2) + '</strong> (VAT 별도) · <a href="' + LINKS.buy + '" id="dlBuyLinkInner">Lemon Squeezy에서 구입</a> → 앱에서 라이선스 키 입력',
        featureGifPending: "데모 GIF 예정",
        compareNoLabel: "미지원",
        faqSub: "Peekom 사용 중 자주 묻는 내용입니다.",
        faqTitle: "자주 묻는 질문",
        refundPolicyTitle: "Peekom Plus 환불 정책",
        refundPolicyBody:
            "<p>Peekom Plus의 결제·환불은 공식 판매자(Merchant of Record)인 Lemon Squeezy를 통해 처리됩니다.</p>" +
            '<ul class="faq-refund-list">' +
            "<li><strong>신청 기간</strong> — 구입일로부터 <strong>30일 이내</strong>에 신청한 경우 검토합니다.</li>" +
            "<li><strong>환불 대상</strong> — 정상 작동 불가(앱이 정상적으로 실행·작동하지 않는 결함) 및 동일 주문의 중복 결제.</li>" +
            "<li><strong>환불 불가</strong> — 단순 변심.</li>" +
            "<li><strong>환불 시 라이선스</strong> — 환불이 완료되면 Peekom Plus 라이선스 키가 비활성화되며, 다음 온라인 실행 시 자동으로 무료 버전으로 전환됩니다.</li>" +
            '<li><strong>절차</strong> — <a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">문의 폼(또는 이메일)</a>으로 주문번호와 함께 신청 → 검토 → Lemon Squeezy 대시보드에서 환불 실행 → 카드사·결제수단에 따라 실제 반영까지 영업일이 소요될 수 있습니다.</li>' +
            "</ul>",
        faqR1q: "Peekom Plus 환불은 어떻게 신청하나요?",
        faqR1a: '<a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">문의 폼(또는 이메일)</a>으로 <strong>주문번호</strong>와 함께 신청해 주세요. 검토 후 Lemon Squeezy 대시보드에서 환불을 실행하며, 카드사·결제수단에 따라 실제 환불 반영까지 영업일이 소요될 수 있습니다.',
        faqR2q: "어떤 경우에 환불받을 수 있나요?",
        faqR2a: "구입일로부터 <strong>30일 이내</strong>라면 <strong>정상 작동 불가</strong>(앱이 정상적으로 실행·작동하지 않는 결함)와 동일 주문의 <strong>중복 결제</strong>에 대해 환불받을 수 있습니다. 단순 변심은 환불 대상이 아닙니다. 결제·환불은 공식 판매자인 Lemon Squeezy를 통해 처리됩니다.",
        faqR3q: "환불 후 라이선스는 어떻게 되나요?",
        faqR3a: "환불이 완료되면 Peekom Plus 라이선스 키가 <strong>비활성화</strong>됩니다. 다음에 온라인 상태로 앱을 실행하면 자동으로 무료 버전으로 전환되므로, 환불 신청 전에 Plus 사용 중단 여부를 확인해 주세요.",
        faq1q: "Peekom과 Peekom Plus의 차이는 무엇인가요?",
        faq1a: '무료는 3개 인덱스·묶음 이동·얼음 모드·자동 접힘 딜레이·모니터 선택·서식바·이미지 삽입을 포함합니다. Peekom Plus(출시 기념 $9.99, 정가 $12.99)는 10슬롯 독립 배치, 커스텀 색·글꼴·불투명도, 왼쪽 패널, 이미지 크기 조절, 보내기 등을 앱 안에서 잠금 해제합니다. <a href="features.html#compare">상세 비교표</a>를 참고하세요.',
        compareFreeName: "Peekom (무료)",
        comparePlusName: "Peekom Plus (유료)",
        compareCta: "Peekom Plus 구입",
        comparePromoBanner: "현재 출시 기념 · {pct}% 할인 중",
        faq2q: "듀얼 모니터에서 어떻게 동작하나요?",
        faq2a: "설정 → 표시 모니터에서 현재 마우스 모니터(자동) 또는 특정 모니터를 고정할 수 있습니다. 무료·Peekom Plus 모두 사용할 수 있습니다.",
        faq8q: "Peekom은 모니터 오른쪽 가장자리에서만 사용 가능한가요?",
        faq8a: "오른쪽 가장자리는 무료로, 왼쪽 가장자리는 Peekom Plus에서 사용할 수 있습니다. 위쪽·아래쪽 가장자리는 추후 업데이트를 통해 지원할 예정입니다.",
        faq9q: "실수로 Peekom Plus를 삭제하면 유료 기능은 어떻게 되나요?",
        faq9a:
            "<p>앱을 삭제해도 Lemon Squeezy에 등록된 라이선스는 그대로 남습니다. 아래 순서대로 진행하면 Peekom Plus와 모든 유료 기능을 다시 사용할 수 있습니다.</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>1. Peekom 재설치</strong> — <a href=\"download.html\">peekom.com</a>에서 무료 버전(<code>Peekom-Setup.exe</code>)을 다시 다운로드해 설치합니다.</li>" +
            "<li><strong>2. 라이선스 키 확인</strong> — 결제 당시 Lemon Squeezy에서 받은 영수증 이메일을 열어 <strong>[License Key]</strong>를 복사합니다. 이메일을 분실했다면 Lemon Squeezy 구매 확인(주문 내역) 페이지에서 동일 이메일로 로그인해 키를 다시 확인할 수 있습니다.</li>" +
            "<li><strong>3. 라이선스 재인증</strong> — 앱 우측 상단 톱니바퀴(설정)를 연 뒤 <strong>플러스 인증</strong>에 키를 붙여넣고 인증합니다. 즉시 앱 이름이 Peekom Plus로 바뀌고 10개 슬롯·커스텀 테마 등 유료 기능이 복구됩니다.</li>" +
            "</ul>" +
            "<p><strong>기기 수 제한(최대 2대)</strong> — 같은 PC에서 삭제 후 재설치하면 동일 기기로 인식되어 인증 횟수에 문제가 없습니다. 컴퓨터를 바꾼 경우에는 라이선스당 최대 2대까지 등록할 수 있으므로(예: 업무 PC 1대 + 개인 PC 1대) 새 PC에서도 정상적으로 인증됩니다.</p>",
        faq3q: "Peekom Plus 라이선스는 어떻게 인증하나요?",
        faq3a: "Lemon Squeezy를 통해 구매한 라이선스 키를 앱 최초 실행 시 입력하면 Peekom Plus가 활성화됩니다.",
        faq3bq: "한 라이선스 키로 여러 대의 PC에서 사용할 수 있나요?",
        faq3ba: "같은 16자리 라이선스 키를 업무 PC·개인 PC에 각각 한 번씩 입력해 Peekom Plus로 쓰는 것은 가능합니다. 라이선스당 최대 2대까지 등록됩니다.",
        faq4q: "Windows 설치 시 파란 경고창이 뜹니다.",
        faq4a: 'SmartScreen 경고는 서명되지 않은 앱에서 흔히 나타납니다. <a href="#" onclick="openModal(); return false;">설치 가이드</a>를 참고해 [추가 정보] → [실행] 순서로 진행하세요.',
        faq5q: "Windows 몇부터 사용할 수 있나요?",
        faq5a: "Windows 10 및 Windows 11 (64-bit)에서 사용할 수 있습니다. 설치 파일은 64-bit 전용이며, Windows 7 / 8 / 8.1은 지원하지 않습니다. (Electron 36 기준)",
        faq6q: "인덱스를 추가했는데 설정창에 안 보여요.",
        faq6a: "메인 화면과 설정창이 동시에 열려 있으면 목록이 잠시 어긋날 수 있습니다. 설정창을 다시 열거나 포커스를 주면 최신 인덱스 목록이 반영됩니다.",
        faq7q: "삭제 후에도 부팅할 때 이상한 글자가 남아요.",
        faq7a: "Windows 시작 프로그램에 등록된 항목이 남아 있으면, 삭제된 실행 파일을 찾다가 오류 창이 뜰 수 있습니다. 작업 관리자 → 시작 프로그램에서 빼꼼 관련 항목을 끄거나, 최신 버전으로 재설치 후 제거하세요. 최신 버전은 제거 시 자동으로 정리합니다.",
        helpTitle: "가이드", helpSub: "Peekom을 빠르게 시작하는 방법을 안내합니다.",
        guideStartBody:
            '<div class="guide-step">' +
                "<h3>1. 설치하기</h3>" +
                '<ul class="guide-step-list">' +
                    "<li><strong>다운로드 버튼</strong> — <a href=\"download.html\">다운로드</a> 페이지(또는 홈)에서 Windows·macOS용 설치 파일을 받습니다.</li>" +
                    "<li><strong>Peekom-Setup.exe 실행</strong> — 다운로드한 <code>Peekom-Setup.exe</code>를 더블클릭하고, 화면 안내에 따라 [다음]을 눌러 설치를 마칩니다.</li>" +
                    '<li><strong>SmartScreen 경고가 날 때</strong> — 파란색 “인식할 수 없는 앱” 창이 뜨면 <a href="#" onclick="openModal(); return false;">설치 가이드</a>를 열고 <strong>[추가 정보]</strong> → <strong>[실행]</strong> 순서로 진행하세요.</li>' +
                "</ul>" +
            "</div>" +
            '<div class="guide-step">' +
                "<h3>2. 공통 / 인덱스별 설정하기</h3>" +
                '<p class="guide-step-lead">작업 표시줄(트레이)의 Peekom 아이콘을 우클릭 → <strong>설정</strong>을 엽니다.</p>' +
                '<h4 class="guide-step-sub">공통 설정에서 할 수 있는 것</h4>' +
                '<ul class="guide-step-list">' +
                    "<li>메모가 나타날 <strong>모니터</strong> 선택 (자동·고정)</li>" +
                    "<li><strong>동작 방식</strong> — <strong>마우스 조작</strong> / <strong>단축키 조작</strong> 선택, 단축키 3종(열기·닫기·위/아래 인덱스) 변경</li>" +
                    "<li>손잡이 <strong>자동 접힘 딜레이</strong> (기본 0.3초, 설정에서 조절 가능)</li>" +
                "</ul>" +
                '<div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> 커스텀 글꼴, 메모 기본 불투명도, JSON 백업·복원, 보내기(.txt/.md/.json) 등은 Plus에서 이용할 수 있습니다.</div>' +
                '<h4 class="guide-step-sub">인덱스(슬롯) 설정에서 할 수 있는 것</h4>' +
                '<ul class="guide-step-list">' +
                    "<li>인덱스 <strong>추가·삭제</strong> (무료 3개)</li>" +
                    "<li>각 인덱스 <strong>제목·색상</strong> 지정</li>" +
                    "<li>메모 <strong>비율</strong> (1:1 / 3:4) 선택</li>" +
                "</ul>" +
                '<div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> 최대 10개 슬롯, 슬롯마다 손잡이 위치를 따로 저장할 수 있습니다.</div>' +
            "</div>" +
            '<div class="guide-step">' +
                "<h3>3. 메모하기</h3>" +
                '<ul class="guide-step-list">' +
                    "<li><strong>인덱스 위치 조절</strong> — 모니터 가장자리 손잡이를 드래그해 원하는 높이로 옮깁니다.</li>" +
                    "<li><strong>빼꼼 / 얼음 모드</strong> — 메모 상단 칩으로 전환합니다. <em>빼꼼</em>은 클릭·단축키로 열고, <em>얼음</em>은 항상 화면에 고정됩니다.</li>" +
                    '<li><strong>메모 텍스트 커스텀</strong> — 서식바·이미지로 꾸밀 수 있습니다. 아래 <a href="#guide-edit">편집</a> 섹션을 참고하세요.</li>' +
                "</ul>" +
            "</div>" +
            '<div class="guide-step guide-step--last">' +
                "<h3>4. Peekom Plus 업그레이드</h3>" +
                '<ul class="guide-step-list">' +
                    "<li>앱의 <strong>Plus 업그레이드</strong> 버튼(또는 처음 실행 시 설정창)에서 라이선스 키를 입력하면 업그레이드됩니다.</li>" +
                    '<li>자세한 순서는 아래 <a href="#guide-plus">Plus 활성화</a> 섹션을 확인하세요.</li>' +
                "</ul>" +
            "</div>",
        compareColFeature: "기능",
        contactTitle: "연락", contactSub: "문의와 피드백을 보내실 수 있습니다.",
        contactFeedbackTitle: "피드백 보내기",
        contactFeedbackDesc: "버그 신고, 기능 제안, 라이선스 문의",
        contactFeedbackBtn: "피드백 폼 열기",
        contactReviewTitle: "후기 남기기",
        contactReviewDesc: "사용 경험을 들려주세요. 홈페이지에 소개될 수 있어요.",
        contactReviewBtn: "후기 폼 열기",
        contactEmailTitle: "이메일 연락",
        contactEmailDesc: "직접 연락이 필요할 때",
        contactNote: "문의는 영업일 기준 10일 이내에 답변드리도록 노력하겠습니다. 이메일보다 구글 폼이 더 빠르게 전달되니 가능하면 폼을 이용해 주세요.",
        contactEmail: "hello.peekom@gmail.com",
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "개인정보 처리방침",
        guideTitle: "윈도우 SmartScreen 설치 가이드",
        step1: '다운로드 후 실행 시 <b>"인식할 수 없는 앱"</b>이라는 파란색 Windows SmartScreen 창이 뜰 수 있습니다.',
        step2: "화면 상단의 <b>[추가 정보]</b> 글자를 클릭해 주세요.",
        step3: "우측 하단에 나타나는 <b>[실행]</b> 버튼을 누르면 설치가 완료됩니다.",
        searchNoResults: "결과 없음",
        modalClose: "닫기",
        dlTitle: "다운로드",
        dlWinNote: "Windows 10 · 11 (64-bit)",
        dlWinLabel: "Windows x64 · Windows 10 · 11 (64-bit)",
        dlMacLabel: "macOS",
        winGuideBtn: "Windows 설치 시 파란 SmartScreen 경고가 보이나요?",
        promoNote: "프로모션 종료 후 가격 인상 예정",
        promoSectionTitle: "Peekom Plus(유료)",
        promoFreeTitle: "Peekom(무료)",
        promoVat: "(VAT 별도)",
        promoLaunchLabel: "출시 기념\n프로모션가\n적용 중",
        comparePricingExtra: " · 1회 구매 · 최대 2대 기기 · 소버전 업데이트 포함 · 30일 환불 (<a href=\"mailto:" + CONTACT_EMAIL + "\">" + CONTACT_EMAIL + "</a>)",
        dlPlusHintExtra: ' · <a href="' + LINKS.buy + '" id="dlBuyLinkInner">Lemon Squeezy에서 구입</a> → 앱에서 라이선스 키 입력',
        fz1Title: "테두리에서 빼꼼",
        fz1Items: [
            { text: "인덱스 클릭으로 빠르게 메모" },
            { text: "인덱스 드래그로 위치 조절" },
            { text: "메모 빼꼼 / 얼음 모드 스위치" },
            { text: "(빼꼼 모드 시) 자동 접힘 기능" }
        ],
        fz2Title: "효율적인 일처리",
        fz2Items: [
            { text: "단축키로 최근 메모 열기" },
            { text: "타겟 모니터 고정" },
            { text: "모드 전환 방식 선택" },
            { text: "이미지 삽입" }
        ],
        fz3Title: "나만의 커스텀 메모",
        fz3Items: [
            { text: "서식바 사용" },
            { text: "인덱스 제목 변경" },
            { text: "메모 비율 변경 (1:1, 3:4)" },
            { text: "메모 기본 배경 색상 지원" }
        ],
        fz4Title: "Plus로 더욱 강력하게",
        fz4Items: [
            { text: "최대 10개의 독립 인덱스", plus: true },
            { text: "보내기 · JSON 백업", plus: true },
            { text: "메모당 최대 5개의 이미지 삽입", plus: true },
            { text: "이미지 크기 조절 · 비율 자르기", plus: true },
            { text: "모니터 왼쪽 패널 지원", plus: true }
        ],
        fz5Title: "Plus만의 커스터마이즈",
        fz5Items: [
            { text: "글자 크기 조절", plus: true },
            { text: "메모 기본 불투명도 조절", plus: true },
            { text: "메모 배경색 / 글자 색 변경", plus: true },
            { text: "글꼴 변경", plus: true }
        ],
        footerLangLabel: "언어",
        themeLight: "Light",
        themeDark: "Dark",
        themeAuto: "Auto",
        themeLightLabel: "라이트 모드",
        themeDarkLabel: "다크 모드",
        themeAutoLabel: "시스템 설정 따르기",
        themeAriaLabel: "테마",
        pageCtaDownload: "다운로드",
        pageCtaCompare: "비교표 보기",
        featuresCtaTitle: "Peekom Plus로 확장하기",
        featuresCtaDesc: "10슬롯·커스텀 테마·보내기 등 Plus 기능을 앱 안에서 잠금 해제하세요.",
        helpCtaTitle: "바로 시작해 보세요",
        helpCtaDesc: "Peekom을 설치하고 가장자리 메모를 써 보세요.",
        faqCtaTitle: "더 궁금하신가요?",
        faqCtaDesc: "기능 비교표에서 무료와 Plus 차이를 확인하세요.",
        contactCtaTitle: "Peekom을 아직 안 써 보셨나요?",
        contactCtaDesc: "무료로 설치하고 바로 사용할 수 있습니다.",
        downloadCtaTitle: "Plus가 필요하신가요?",
        downloadCtaDesc: "같은 앱에서 라이선스 키만 입력하면 Plus가 활성화됩니다.",
        help4t: "4. 메모 작성", help4p: "패널에 텍스트를 입력하고, 설정에서 인덱스를 추가·제목·색상을 지정합니다.",
        help5t: "5. 얼음 모드", help5p: "메모 상단 <strong>빼꼼/얼음</strong> 칩을 클릭해 Pin 모드로 전환합니다. 호버 없이 고정 표시됩니다 (무료·Plus 공통).",
        help6t: "6. 설정 · Plus", help6p: "트레이 → 환경설정 → 공통 탭에서 동작 방식·단축키를 바꿀 수 있습니다. Plus 업그레이드 버튼에서 키를 입력하면 앱 이름·아이콘이 Peekom Plus로 바뀝니다.",
        guideKeysTitle: "단축키",
        guideKeysIntro: '설정 → 공통 → <strong>동작 방식</strong>에서 <strong>마우스 조작</strong> 또는 <strong>단축키 조작</strong>을 선택할 수 있습니다. macOS에서는 Ctrl 대신 ⌘(Command)를 사용합니다.',
        gkColAction: "동작", gkColKey: "기본", gkColNote: "비고",
        gk1a: "메모 열기/닫기", gk1k: "Ctrl+Shift+M",
        gk1n: "최근 메모 1개 토글. 단축키 조작 모드에서 동작. 설정 → 공통 → 동작 방식에서 변경 가능",
        gk2a: "위쪽 인덱스 메모 열기", gk2k: "Ctrl+Shift+↑",
        gk2n: "이전 인덱스를 열고 패널 표시. 단축키 조작 모드. 설정에서 변경 가능",
        gk3a: "아래쪽 인덱스 메모 열기", gk3k: "Ctrl+Shift+↓",
        gk3n: "다음 인덱스를 열고 패널 표시. 단축키 조작 모드. 설정에서 변경 가능",
        gk4a: "인덱스 전환", gk4k: "↑ / ↓",
        gk4n: "마우스 조작 모드. 패널이 열린 상태에서만",
        gk5a: "특정 인덱스로 이동", gk5k: "Ctrl+1 ~ 9 (Ctrl+0 = 10번)",
        gk5n: "해당 인덱스 메모를 바로 엽니다",
        gk6a: "글자 크기", gk6k: "Ctrl + 휠", gk6n: "메모 영역에서. Plus 전용",
        markdownGuideTitle: "마크다운으로 메모하기",
        markdownGuideBody:
            '<p class="guide-table-intro">코드를 외울 필요 없이, 평소 글처럼 입력한 뒤 <strong>Enter</strong>를 누르면 자동으로 서식이 바뀝니다.</p>' +
            '<table class="compare-table guide-table"><thead><tr><th>입력 형식</th><th>Enter 후 결과</th></tr></thead><tbody>' +
            '<tr><td><code># 회의 안건</code></td><td class="guide-md-result"><h1 class="guide-md-h1">회의 안건</h1></td></tr>' +
            '<tr><td><code>## 메모</code></td><td class="guide-md-result"><h2 class="guide-md-h2">메모</h2></td></tr>' +
            '<tr><td><code>### 참고</code></td><td class="guide-md-result"><h3 class="guide-md-h3">참고</h3></td></tr>' +
            '<tr><td><code>- 할 일</code></td><td class="guide-md-result"><ul class="guide-md-ul"><li>할 일</li></ul></td></tr>' +
            '<tr><td><code>- [ ] 할 일</code></td><td class="guide-md-result"><label class="guide-md-task"><input type="checkbox" disabled> 할 일</label></td></tr>' +
            '<tr><td><code>**중요**</code></td><td class="guide-md-result"><strong>중요</strong></td></tr>' +
            '<tr><td><code>*강조*</code></td><td class="guide-md-result"><em>강조</em></td></tr>' +
            "</tbody></table>",
        formatBarGuideTitle: "서식바로 메모하기",
        formatBarGuideBody:
            '<p class="guide-table-intro">메모 상단 서식바에서 마우스로 클릭만 하면 됩니다. 키보드 단축키를 외울 필요가 없어요.</p>' +
            '<table class="compare-table guide-table"><thead><tr><th>기능</th><th>설명</th></tr></thead><tbody>' +
            "<tr><td>글자 색 · 굵게 · 기울임 · 밑줄 · 취소선</td><td>텍스트를 드래그해 선택한 뒤 버튼을 클릭</td></tr>" +
            "<tr><td>줄 정렬 (왼쪽/가운데/오른쪽/양쪽)</td><td>단락 정렬을 한 번에 변경</td></tr>" +
            "<tr><td>목록 (점/네모/숫자/원래 텍스트)</td><td>목록 스타일을 드롭다운에서 선택</td></tr>" +
            "<tr><td>이미지 삽입</td><td>무료 1장 · Plus 5장 (Plus는 크기 조절·자르기 가능)</td></tr>" +
            "</tbody></table>",
        guidePlusTitle: "Plus 활성화",
        guidePlusStep1: "1. 아래 버튼에서 Peekom Plus를 구매합니다.",
        guidePlusStep2: "2. 이메일로 받은 라이선스 키를 확인합니다.",
        guidePlusStep3: "3. Peekom을 실행한 뒤 <strong>설정창</strong> 또는 <strong>설정</strong>에서 키를 입력합니다.",
        macComingSoonTitle: "macOS 안내",
        macComingSoonBody: "macOS 버전은 현재 개발 중입니다.<br><strong>2026년 7월</strong> 중 배포 예정입니다.",
        guidePlusStep4: "4. Peekom Plus 활성화가 완료됩니다.",
        guideNavStart: "시작하기", guideNavKeys: "단축키", guideNavEdit: "편집", guideNavPlus: "Plus 활성화",
        guideSectionEditTitle: "편집",
        versionHistoryTitle: "버전 기록",
        versionColVersion: "버전",
        versionColDate: "출시일",
        versionColWin: "Windows",
        versionColMac: "macOS",
        versionLatest: "최신",
        versionWin: "64-bit",
        versionMac: "macOS",
        versionMacSoon: "출시 예정",
        changelogTitle: "변경 기록",
        linkChangelog: "Changelog / Releases", linkPrev: "Previous Versions", linkSmartScreen: "SmartScreen Guide"
    },
    en: {
        navHome: "Home", navFeatures: "Features", navDownload: "Download", navFaq: "FAQ", navHelp: "Guide", navContact: "Contact",
        searchPlaceholder: "Search...",
        heroTitleMain: "Peekom",
        heroTagline: "The edge memo app is back as <strong>Peekom</strong>.<br>Light, fast notes at your screen edge—stay organized without breaking your work or presentation flow.",
        heroPlusNote: 'After installing the free app, upgrade to Peekom Plus in Settings.<br><a href="features.html#compare">See free vs Plus</a> in the comparison table.',
        heroUpgradeNote: "After installing the free app, upgrade to Peekom Plus in Settings.",
        heroFreeCompareNote: '<a href="features.html#compare">See free vs Plus</a>.',
        heroWinBtn: "Download for Windows", heroMacBtn: "Download for macOS",
        heroPlusBuyBtn: "Buy now",
        heroPlusCardTitle: "Peekom Plus",
        heroPlusCardBadge: "PAID",
        heroPlusCardOs: "Windows",
        heroMacPlusCardTitle: "Peekom Plus",
        heroMacPlusCardBadge: "PAID",
        heroPlusCardMeta: "One-time · up to 2 devices · lifetime",
        heroFreeCardTitle: "Peekom",
        heroFreeCardBadge: "FREE",
        heroMacFreeCardBadge: "FREE",
        heroWinCardMeta: "Windows 10 · 11 (64-bit)",
        heroMacFreeCardMeta: "macOS",
        heroFreeDownloadLabel: "Download",
        carouselCap1: "Edge handle on your monitor",
        carouselCap2: "Open memo via click or shortcut",
        carouselCap3: "Ice mode · auto-collapse delay",
        reviewBtnLabel: "Leave a Review",
        reviewEmpty: "Be the first to share your experience!",
        reviewAnonymous: "Anonymous",
        detectWin: "Detected: <strong>Windows</strong> — Windows recommended",
        detectMac: "Detected: <strong>macOS</strong> — macOS recommended",
        detectGeneric: "OS not detected — choose manually",
        featuresTitle: "Features", featuresSub: "What Peekom does at a glance.",
        compareTitle: "Peekom vs Peekom Plus", compareSub: "One app — Peekom Plus unlocks inside the app.",
        comparePricing: '<span class="pricing-was">$' + PRICING.list.toFixed(2) + '</span> <span class="pricing-now">$' + PRICING.sale.toFixed(2) + ' USD</span> <span class="pricing-vat">(excl. VAT)</span> · <span class="pricing-launch">Launch price</span> · one-time · up to 2 devices · minor updates included · 30-day refund (<a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>)',
        guidePlusP: "1) Buy at launch price $9.99 on Lemon Squeezy → 2) Receive license key by email → 3) Open Peekom → enter key in lock UI or Settings → 4) Peekom Plus activation complete. 30-day refund: <a href=\"mailto:" + CONTACT_EMAIL + "\">" + CONTACT_EMAIL + "</a>",
        dlSub: "Install Peekom once. Upgrade to Peekom Plus inside the app.",
        dlWin: "Peekom Setup (Windows)", dlMac: "Peekom Setup (macOS)",
        dlPlusHint: 'Peekom Plus: Was <span class="pricing-was">$' + PRICING.list.toFixed(2) + '</span> → Launch <strong>$' + PRICING.sale.toFixed(2) + '</strong> (excl. VAT) · <a href="' + LINKS.buy + '" id="dlBuyLinkInner">Buy on Lemon Squeezy</a> → enter license key in app',
        featureGifPending: "Demo GIF coming soon",
        compareNoLabel: "Not supported",
        faqSub: "Common questions about Peekom.",
        refundPolicyTitle: "Peekom Plus Refund Policy",
        refundPolicyBody:
            "<p>Payments and refunds for Peekom Plus are processed by Lemon Squeezy, our Merchant of Record.</p>" +
            '<ul class="faq-refund-list">' +
            "<li><strong>Window</strong> — Requests are accepted within <strong>30 days</strong> of purchase.</li>" +
            "<li><strong>Eligible</strong> — Product malfunction (the app fails to run or work correctly) and duplicate payments for the same order.</li>" +
            "<li><strong>Not eligible</strong> — Change of mind / buyer's remorse.</li>" +
            "<li><strong>License after refund</strong> — Once refunded, your Peekom Plus license key is disabled and the app reverts to the free version on its next online launch.</li>" +
            '<li><strong>Process</strong> — Submit a request via the <a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">contact form (or email)</a> with your order number → we review → we issue the refund from the Lemon Squeezy dashboard → the refund may take several business days depending on your card issuer.</li>' +
            "</ul>",
        faqR1q: "How do I request a Peekom Plus refund?",
        faqR1a: 'Send us your <strong>order number</strong> through the <a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">contact form (or email)</a>. After we review the request, we issue the refund from the Lemon Squeezy dashboard. The refund may take a few business days to appear, depending on your card issuer or payment method.',
        faqR2q: "What is eligible for a refund?",
        faqR2a: "Within <strong>30 days</strong> of purchase, refunds are available for <strong>product malfunction</strong> (the app fails to run or work correctly) and <strong>duplicate payments</strong> for the same order. Change of mind is not eligible. Payments and refunds are handled by Lemon Squeezy, our Merchant of Record.",
        faqR3q: "What happens to my license after a refund?",
        faqR3a: "Once a refund is completed, your Peekom Plus license key is <strong>disabled</strong>. The app automatically reverts to the free version the next time it launches while online, so make sure you intend to stop using Plus before requesting a refund.",
        faq1q: "What's the difference between free and Plus?",
        faq1a: 'Free includes 3 indexes, group handle move, Ice mode, hover delay, monitor selection, formatting toolbar, and image insert. Peekom Plus (launch $9.99, list $12.99) unlocks 10 slots, custom theme, fonts, opacity, left panel, image resize, and export in-app. See the <a href="features.html#compare">comparison table</a>.',
        compareFreeName: "Peekom (Free)",
        comparePlusName: "Peekom Plus",
        compareCta: "Get Peekom Plus",
        comparePromoBanner: "Launch promo · {pct}% off now",
        helpTitle: "Guide", helpSub: "Get started with Peekom.",
        guideStartBody:
            '<div class="guide-step">' +
                "<h3>1. Install</h3>" +
                '<ul class="guide-step-list">' +
                    '<li><strong>Download</strong> — Get the Windows or macOS installer from the <a href="download.html">Download</a> page (or home).</li>' +
                    "<li><strong>Run Peekom-Setup.exe</strong> — Double-click the installer and follow the prompts.</li>" +
                    '<li><strong>SmartScreen warning</strong> — If a blue window appears, open the <a href="#" onclick="openModal(); return false;">install guide</a> and choose <strong>More info</strong> → <strong>Run anyway</strong>.</li>' +
                "</ul>" +
            "</div>" +
            '<div class="guide-step">' +
                "<h3>2. Common &amp; per-index settings</h3>" +
                '<p class="guide-step-lead">Right-click the tray icon → <strong>Settings</strong>.</p>' +
                '<h4 class="guide-step-sub">Common settings</h4>' +
                '<ul class="guide-step-list">' +
                    "<li>Choose <strong>display monitor</strong> (auto or fixed)</li>" +
                    "<li><strong>Trigger mode</strong> — <strong>Mouse control</strong> / <strong>Shortcut control</strong>; customize three shortcuts (toggle, prev/next index)</li>" +
                    "<li>Handle <strong>auto-collapse delay</strong> (default 0.3s, adjustable in Settings)</li>" +
                "</ul>" +
                '<div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> Custom fonts, default opacity, JSON backup/restore, export (.txt/.md/.json), and more.</div>' +
                '<h4 class="guide-step-sub">Per-index settings</h4>' +
                '<ul class="guide-step-list">' +
                    "<li>Add/remove <strong>indexes</strong> (3 free)</li>" +
                    "<li>Set <strong>title and color</strong> per index</li>" +
                    "<li>Choose memo <strong>aspect ratio</strong> (1:1 / 3:4)</li>" +
                "</ul>" +
                '<div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> Up to 10 slots with independent handle positions.</div>' +
            "</div>" +
            '<div class="guide-step">' +
                "<h3>3. Write memos</h3>" +
                '<ul class="guide-step-list">' +
                    "<li><strong>Reposition</strong> — Drag the edge handle to your preferred height.</li>" +
                    "<li><strong>Peek / Ice</strong> — Toggle at the top of the memo. Peek opens via click or shortcut; Ice stays pinned.</li>" +
                    '<li><strong>Customize text</strong> — Use the formatting toolbar and images. See <a href="#guide-edit">Editing</a> below.</li>' +
                "</ul>" +
            "</div>" +
            '<div class="guide-step guide-step--last">' +
                "<h3>4. Upgrade to Peekom Plus</h3>" +
                '<ul class="guide-step-list">' +
                    "<li>Enter your license key via the in-app <strong>Upgrade to Plus</strong> button (or the <strong>Settings</strong> window on first launch).</li>" +
                    '<li>See <a href="#guide-plus">Activate Plus</a> for step-by-step instructions.</li>' +
                "</ul>" +
            "</div>",
        help1t: "1. Install", help1p: "Download and run Peekom Setup. SmartScreen may appear on Windows.",
        help2t: "2. Open a memo", help2p: "Click the handle or, in <strong>shortcut control</strong> mode, press <strong>Ctrl+Shift+M</strong> (default) to toggle the <strong>most recently opened</strong> memo.",
        help3t: "3. Switch memos", help3p: "In <strong>mouse control</strong> mode, press <strong>↑ / ↓</strong> while the panel is open. In <strong>shortcut control</strong> mode, use <strong>Ctrl+Shift+↑ / ↓</strong> (even when closed). <strong>Ctrl+1–9</strong> jumps to an index.",
        help4t: "4. Write", help4p: "Type in the panel; add indexes and titles in Settings.",
        help5t: "5. Ice mode", help5p: "Click the <strong>Peek / Ice</strong> chip to pin the memo without hover (free & Plus).",
        help6t: "6. Settings · Plus", help6p: "Tray → Settings → Common tab to change trigger mode and shortcuts. Use the Upgrade to Plus button to enter a license key and switch branding to Peekom Plus.",
        winGuideBtn: "See a blue SmartScreen warning when installing on Windows?",
        dlTitle: "Download", dlWinNote: "Windows 10 & 11 (64-bit)",
        dlWinLabel: "Windows x64 · Windows 10 & 11 (64-bit)",
        dlMacLabel: "macOS",
        linkChangelog: "Changelog / Releases", linkPrev: "Previous Versions", linkSmartScreen: "SmartScreen Guide",
        faqTitle: "FAQ",
        faq2q: "How does dual monitor support work?",
        faq2a: "In Settings → Display monitor, choose auto (follow mouse) or a fixed monitor. Available on Free and Plus.",
        faq8q: "Can Peekom only be used on the right edge of the monitor?",
        faq8a: "The right edge is available on the free plan; the left edge requires Peekom Plus. Top and bottom edges are planned for a future update.",
        faq9q: "I accidentally uninstalled Peekom Plus. What happens to my paid features?",
        faq9a:
            "<p>Uninstalling the app does not remove your Lemon Squeezy license. Follow these steps to restore Peekom Plus and all paid features.</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>1. Reinstall Peekom</strong> — Download the free version (<code>Peekom-Setup.exe</code>) from <a href=\"download.html\">peekom.com</a> and install it.</li>" +
            "<li><strong>2. Find your license key</strong> — Open the Lemon Squeezy receipt email from your purchase and copy the <strong>[License Key]</strong>. If you lost the email, sign in to your Lemon Squeezy order history with the same email to view the key again.</li>" +
            "<li><strong>3. Reactivate Plus</strong> — Open Settings (gear icon, top right), paste the key under <strong>Plus activation</strong>, and confirm. The app switches to Peekom Plus and restores 10 slots, custom themes, and other Plus features.</li>" +
            "</ul>" +
            "<p><strong>Device limit (up to 2)</strong> — Reinstalling on the same PC counts as the same device, so activation is unaffected. If you move to a new computer, each license allows up to two devices (e.g. work PC + personal PC).</p>",
        faq3q: "How is Plus activated?",
        faq3a: "Buy on Lemon Squeezy, then enter the license key in-app to unlock Peekom Plus (no reinstall).",
        faq3bq: "Can I use one license key on more than one PC?",
        faq3ba: "Yes. You can enter the same 16-character license key once on each of up to two PCs—for example, your work PC and personal PC—to use Peekom Plus on both.",
        faq4q: "A blue warning appears when installing on Windows.",
        faq4a: 'SmartScreen warnings are common for unsigned apps. See the <a href="#" onclick="openModal(); return false;">install guide</a>: [More Info] → [Run Anyway].',
        faq5q: "Which Windows versions are supported?",
        faq5a: "Peekom runs on Windows 10 and 11 (64-bit). The installer is 64-bit only. Windows 7, 8, and 8.1 are not supported (Electron 36).",
        faq6q: "I added an index but it doesn't show in Settings.",
        faq6a: "Reopen Settings to refresh the list; recent versions sync automatically.",
        faq7q: "Strange text at startup after uninstalling.",
        faq7a: "Disable leftover Peekom startup entries in Task Manager, or reinstall and uninstall again.",
        compareColFeature: "Feature",
        contactTitle: "Contact", contactSub: "Send us your feedback.",
        contactFeedbackTitle: "Send feedback",
        contactFeedbackDesc: "Bug reports, feature ideas, license inquiries",
        contactFeedbackBtn: "Open feedback form",
        contactReviewTitle: "Leave a review",
        contactReviewDesc: "Share your experience — it may be featured on our website.",
        contactReviewBtn: "Open review form",
        contactEmailTitle: "Email us",
        contactEmailDesc: "When you need to reach us directly",
        contactNote: "We aim to reply within about 10 business days. Google Forms are faster than email, so please use a form when you can.",
        contactEmail: "hello.peekom@gmail.com",
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "Privacy",
        guideTitle: "Windows SmartScreen Install Guide",
        step1: 'When running the installer, a blue SmartScreen window saying <b>"Unrecognized App"</b> may appear.',
        step2: "Click <b>[More Info]</b> at the top of the description.",
        step3: "Click <b>[Run Anyway]</b> at the bottom right to complete installation.",
        searchNoResults: "No results",
        modalClose: "Close",
        promoNote: "Price increase planned after promotion ends",
        promoSectionTitle: "Peekom Plus (Paid)",
        promoFreeTitle: "Peekom (Free)",
        promoVat: "(excl. VAT)",
        promoLaunchLabel: "Launch promo\nprice\napplied",
        comparePricingExtra: " · one-time · up to 2 devices · minor updates included · 30-day refund (<a href=\"mailto:" + CONTACT_EMAIL + "\">" + CONTACT_EMAIL + "</a>)",
        dlPlusHintExtra: ' · <a href="' + LINKS.buy + '" id="dlBuyLinkInner">Buy on Lemon Squeezy</a> → enter license key in app',
        markdownGuideTitle: "Notes with Markdown",
        markdownGuideBody:
            '<p class="guide-table-intro">Type naturally—press <strong>Enter</strong> and formatting applies automatically.</p>' +
            '<table class="compare-table guide-table"><thead><tr><th>Input format</th><th>After Enter</th></tr></thead><tbody>' +
            '<tr><td><code># Meeting agenda</code></td><td class="guide-md-result"><h1 class="guide-md-h1">Meeting agenda</h1></td></tr>' +
            '<tr><td><code>## Notes</code></td><td class="guide-md-result"><h2 class="guide-md-h2">Notes</h2></td></tr>' +
            '<tr><td><code>### Reference</code></td><td class="guide-md-result"><h3 class="guide-md-h3">Reference</h3></td></tr>' +
            '<tr><td><code>- To-do</code></td><td class="guide-md-result"><ul class="guide-md-ul"><li>To-do</li></ul></td></tr>' +
            '<tr><td><code>- [ ] To-do</code></td><td class="guide-md-result"><label class="guide-md-task"><input type="checkbox" disabled> To-do</label></td></tr>' +
            '<tr><td><code>**Important**</code></td><td class="guide-md-result"><strong>Important</strong></td></tr>' +
            '<tr><td><code>*Emphasis*</code></td><td class="guide-md-result"><em>Emphasis</em></td></tr>' +
            "</tbody></table>",
        formatBarGuideTitle: "Notes with toolbar",
        formatBarGuideBody:
            '<p class="guide-table-intro">Click buttons above the memo—no keyboard shortcuts required.</p>' +
            '<table class="compare-table guide-table"><thead><tr><th>Feature</th><th>How to use</th></tr></thead><tbody>' +
            "<tr><td>Color · bold · italic · underline · strikethrough</td><td>Select text, then click a button</td></tr>" +
            "<tr><td>Alignment (left/center/right/justify)</td><td>Change paragraph alignment</td></tr>" +
            "<tr><td>Lists (bullet/square/numbered/plain)</td><td>Pick a list style from the dropdown</td></tr>" +
            "<tr><td>Image insert</td><td>Free: 1 per memo · Plus: 5 (resize &amp; crop on Plus)</td></tr>" +
            "</tbody></table>",
        guideKeysTitle: "Shortcuts",
        guideKeysIntro: 'In Settings → Common → <strong>Trigger mode</strong>, choose <strong>Mouse control</strong> or <strong>Shortcut control</strong>. On macOS, use ⌘ (Command) instead of Ctrl.',
        gkColAction: "Action", gkColKey: "Default", gkColNote: "Note",
        gk1a: "Toggle memo open/close", gk1k: "Ctrl+Shift+M",
        gk1n: "Most recent memo. Shortcut control mode only. Customizable in Settings → Common → Trigger mode",
        gk2a: "Open previous index", gk2k: "Ctrl+Shift+↑",
        gk2n: "Opens previous index and shows panel. Shortcut control mode. Customizable in Settings",
        gk3a: "Open next index", gk3k: "Ctrl+Shift+↓",
        gk3n: "Opens next index and shows panel. Shortcut control mode. Customizable in Settings",
        gk4a: "Switch index", gk4k: "↑ / ↓",
        gk4n: "Mouse control mode only, panel must be open",
        gk5a: "Jump to index", gk5k: "Ctrl+1–9 (Ctrl+0 = index 10)",
        gk5n: "Opens that index memo directly",
        gk6a: "Font size", gk6k: "Ctrl + wheel", gk6n: "In memo area. Plus only",
        guidePlusTitle: "Activate Plus",
        guidePlusStep1: "1. Buy Peekom Plus using the button below.",
        guidePlusStep2: "2. Check your email for the license key.",
        guidePlusStep3: "3. Open Peekom and enter the key in the <strong>Settings</strong> window or in <strong>Settings</strong>.",
        macComingSoonTitle: "macOS",
        macComingSoonBody: "The macOS version is in development.<br>Expected release: <strong>July 2026</strong>.",
        guidePlusStep4: "4. Peekom Plus activation is complete.",
        guideNavStart: "Getting started", guideNavKeys: "Shortcuts", guideNavEdit: "Editing", guideNavPlus: "Activate Plus",
        guideSectionEditTitle: "Editing",
        versionHistoryTitle: "History Versions",
        versionColVersion: "Version", versionColDate: "Release Date", versionColWin: "Windows", versionColMac: "macOS",
        versionLatest: "Latest", versionWin: "64-bit", versionMac: "Universal", versionMacSoon: "Coming soon",
        changelogTitle: "Changelog",
        fz1Title: "Peek from the edge",
        fz1Items: [
            { text: "Click index to open memo quickly" },
            { text: "Drag index to reposition" },
            { text: "Peek / Ice mode switch" },
            { text: "Auto-collapse in peek mode" }
        ],
        fz2Title: "Work more efficiently",
        fz2Items: [
            { text: "Shortcut to open recent memo" },
            { text: "Target display pinning" },
            { text: "Peek / Ice toggle mode" },
            { text: "Image insert" }
        ],
        fz3Title: "Your custom memo",
        fz3Items: [
            { text: "Formatting toolbar" },
            { text: "Custom index titles" },
            { text: "Memo aspect (1:1, 3:4)" },
            { text: "Default background colors" }
        ],
        fz4Title: "Go further with Plus",
        fz4Items: [
            { text: "Up to 10 independent indexes", plus: true },
            { text: "Export · JSON backup", plus: true },
            { text: "Up to 5 images per memo", plus: true },
            { text: "Image resize · aspect crop", plus: true },
            { text: "Left-edge panel (Plus)", plus: true }
        ],
        fz5Title: "Plus-only customization",
        fz5Items: [
            { text: "Font size control", plus: true },
            { text: "Default memo opacity", plus: true },
            { text: "Custom background & text colors", plus: true },
            { text: "Custom fonts", plus: true }
        ],
        footerLangLabel: "Language",
        themeLight: "Light",
        themeDark: "Dark",
        themeAuto: "Auto",
        themeLightLabel: "Light mode",
        themeDarkLabel: "Dark mode",
        themeAutoLabel: "Follow system",
        themeAriaLabel: "Theme",
        pageCtaDownload: "Download",
        pageCtaCompare: "View comparison",
        featuresCtaTitle: "Expand with Peekom Plus",
        featuresCtaDesc: "Unlock 10 slots, custom themes, export, and more inside the app.",
        helpCtaTitle: "Get started now",
        helpCtaDesc: "Install Peekom and try edge memos on your monitor.",
        faqCtaTitle: "Still have questions?",
        faqCtaDesc: "See the feature comparison for free vs Plus.",
        contactCtaTitle: "Haven't tried Peekom yet?",
        contactCtaDesc: "Install for free and start right away.",
        downloadCtaTitle: "Need Plus?",
        downloadCtaDesc: "Enter your license key in the same app to activate Plus.",
        purchaseSuccessTitle: "Thank you for purchasing Peekom Plus!",
        purchaseSuccessLead: "Copy your license key below and activate Plus inside the Peekom app.",
        purchaseSuccessKeyLabel: "License key",
        purchaseSuccessCopyBtn: "Copy",
        purchaseSuccessCopied: "Copied",
        purchaseSuccessStep1: "Install Peekom using the <strong>Windows download</strong> button below.",
        purchaseSuccessStep2: "Open the app, go to <strong>Settings (⚙)</strong> or the Plus lock screen, paste your key, and tap <strong>Activate</strong>.",
        purchaseSuccessStep3: "Once verified, the app becomes <strong>Peekom Plus</strong> and premium features unlock.",
        purchaseSuccessDownloadBtn: "Download for Windows",
        purchaseSuccessEmailNote: "This key is also included in your Lemon Squeezy receipt email."
    }
};
if (window.PeekomI18nLocales) Object.assign(i18n, window.PeekomI18nLocales);



let currentLang = 'ko';
let userOS = 'generic';

function resolveLang(lang) {
    if (lang && i18n[lang]) return lang;
    if (lang) {
        const short = lang.split('-')[0];
        if (i18n[short]) return short;
        if (short === 'zh') {
            const lower = lang.toLowerCase();
            if (lower.includes('tw') || lower.includes('hk') || lower.includes('hant')) return 'zh-TW';
            return 'zh-CN';
        }
    }
    return 'en';
}

const SITE_OFFER_BADGES = {
    ko: { paid: "유료", free: "무료" },
    en: { paid: "PAID", free: "FREE" },
    ja: { paid: "有料", free: "無料" },
    "zh-CN": { paid: "付费", free: "免费" },
    "zh-TW": { paid: "付費", free: "免費" },
    es: { paid: "DE PAGO", free: "GRATIS" },
    fr: { paid: "PAYANT", free: "GRATUIT" },
    de: { paid: "KOSTENPFL.", free: "GRATIS" },
    pt: { paid: "PAGO", free: "GRÁTIS" },
    it: { paid: "A PAGAMENTO", free: "GRATIS" },
    ru: { paid: "ПЛАТНО", free: "БЕСПЛ." },
    vi: { paid: "TRẢ PHÍ", free: "MIỄN PHÍ" },
    th: { paid: "เสียเงิน", free: "ฟรี" },
    id: { paid: "BERBAYAR", free: "GRATIS" },
    hi: { paid: "सशुल्क", free: "मुफ़्त" },
    ar: { paid: "مدفوع", free: "مجاني" }
};

function enrichLocaleData(data, lang) {
    const isKo = lang === "ko";
    const ref = isKo ? i18n.ko : i18n.en;
    const en = i18n.en;
    const next = Object.assign({}, ref, data);

    Object.keys(en).forEach(function (key) {
        const val = next[key];
        if (val === undefined || val === null || val === "") {
            const enVal = en[key];
            if (enVal !== undefined && enVal !== null && enVal !== "") {
                next[key] = enVal;
            }
        }
    });

    next.compareFreeName = next.compareFreeName || en.compareFreeName || "Peekom (Free)";
    next.comparePlusName = next.comparePlusName || en.comparePlusName || "Peekom Plus";
    next.compareColFeature = next.compareColFeature || en.compareColFeature;
    if (!next.compareRows || next.compareRows.length < 15) {
        next.compareRows = en.compareRows || ref.compareRows;
    }
    next.compareCta = next.compareCta || en.compareCta;
    next.navFeatures = next.navFeatures || en.navFeatures;
    next.navGuide = next.navGuide || en.navGuide || en.navHelp;
    next.heroUpgradeNote = next.heroUpgradeNote || en.heroUpgradeNote;
    next.heroFreeCompareNote = next.heroFreeCompareNote || en.heroFreeCompareNote;
    next.comparePricing = next.comparePricing || en.comparePricing;
    next.compareNoLabel = next.compareNoLabel || en.compareNoLabel;
    next.featureGifPending = next.featureGifPending || en.featureGifPending;
    next.guidePlusP = next.guidePlusP || en.guidePlusP;
    next.guideStartBody = next.guideStartBody || en.guideStartBody;
    next.guidePlusStep1 = next.guidePlusStep1 || en.guidePlusStep1;
    next.guidePlusStep2 = next.guidePlusStep2 || en.guidePlusStep2;
    next.guidePlusStep3 = next.guidePlusStep3 || en.guidePlusStep3;
    next.guidePlusStep4 = next.guidePlusStep4 || en.guidePlusStep4;
    next.versionMacSoon = next.versionMacSoon || en.versionMacSoon;
    next.macComingSoonTitle = next.macComingSoonTitle || en.macComingSoonTitle;
    next.macComingSoonBody = next.macComingSoonBody || en.macComingSoonBody;
    next.featuresTitle = next.featuresTitle || en.featuresTitle;
    next.featuresSub = next.featuresSub || en.featuresSub;
    next.compareTitle = next.compareTitle || en.compareTitle;
    next.compareSub = next.compareSub || en.compareSub;
    next.faq1a = next.faq1a || en.faq1a;
    next.contactEmail = CONTACT_EMAIL;
    next.contactFeedbackTitle = next.contactFeedbackTitle || en.contactFeedbackTitle;
    next.contactFeedbackDesc = next.contactFeedbackDesc || en.contactFeedbackDesc;
    next.contactFeedbackBtn = next.contactFeedbackBtn || en.contactFeedbackBtn;
    next.contactReviewTitle = next.contactReviewTitle || en.contactReviewTitle;
    next.contactReviewDesc = next.contactReviewDesc || en.contactReviewDesc;
    next.contactReviewBtn = next.contactReviewBtn || en.contactReviewBtn;
    next.contactEmailTitle = next.contactEmailTitle || en.contactEmailTitle;
    next.contactEmailDesc = next.contactEmailDesc || en.contactEmailDesc;
    next.contactNote = next.contactNote || en.contactNote;
    next.footerCopy = next.footerCopy || "© 2026. Peekom All rights reserved.";
    next.dlWinNote = next.dlWinNote || en.dlWinNote;
    next.faq5q = next.faq5q || en.faq5q;
    next.faq5a = next.faq5a || en.faq5a;
    next.faq6q = next.faq6q || en.faq6q;
    next.faq6a = next.faq6a || en.faq6a;
    next.faq7q = next.faq7q || en.faq7q;
    next.faq7a = next.faq7a || en.faq7a;
    next.faq8q = next.faq8q || en.faq8q;
    next.faq8a = next.faq8a || en.faq8a;
    next.faq9q = next.faq9q || en.faq9q;
    next.faq9a = next.faq9a || en.faq9a;
    next.heroTitleMain = next.heroTitleMain || en.heroTitleMain || "Peekom";
    next.heroWinBtn = next.heroWinBtn || en.heroWinBtn;
    next.heroMacBtn = next.heroMacBtn || en.heroMacBtn;
    next.heroPlusBuyBtn = next.heroPlusBuyBtn || en.heroPlusBuyBtn;
    next.heroPlusCardTitle = next.heroPlusCardTitle || en.heroPlusCardTitle;
    next.heroPlusCardBadge = next.heroPlusCardBadge || en.heroPlusCardBadge;
    next.heroMacPlusCardTitle = next.heroMacPlusCardTitle || en.heroMacPlusCardTitle;
    next.heroMacPlusCardBadge = next.heroMacPlusCardBadge || en.heroMacPlusCardBadge;
    next.heroPlusCardOs = next.heroPlusCardOs || en.heroPlusCardOs;
    next.heroPlusCardMeta = next.heroPlusCardMeta || en.heroPlusCardMeta;
    next.heroFreeCardTitle = next.heroFreeCardTitle || en.heroFreeCardTitle;
    next.heroFreeCardBadge = next.heroFreeCardBadge || en.heroFreeCardBadge;
    next.heroMacFreeCardBadge = next.heroMacFreeCardBadge || en.heroMacFreeCardBadge;
    next.heroWinCardMeta = next.heroWinCardMeta || en.heroWinCardMeta;
    next.heroMacFreeCardMeta = next.heroMacFreeCardMeta || en.heroMacFreeCardMeta;
    next.heroFreeDownloadLabel = next.heroFreeDownloadLabel || en.heroFreeDownloadLabel;
    next.dlWin = next.dlWin || en.dlWin;
    next.dlMac = next.dlMac || en.dlMac;
    next.dlPlusHint = next.dlPlusHint || en.dlPlusHint;
    next.dlTitle = next.dlTitle || en.dlTitle;
    next.dlSub = next.dlSub || en.dlSub;
    next.purchaseSuccessTitle = next.purchaseSuccessTitle || en.purchaseSuccessTitle;
    next.purchaseSuccessLead = next.purchaseSuccessLead || en.purchaseSuccessLead;
    next.purchaseSuccessKeyLabel = next.purchaseSuccessKeyLabel || en.purchaseSuccessKeyLabel;
    next.purchaseSuccessCopyBtn = next.purchaseSuccessCopyBtn || en.purchaseSuccessCopyBtn;
    next.purchaseSuccessCopied = next.purchaseSuccessCopied || en.purchaseSuccessCopied;
    next.purchaseSuccessStep1 = next.purchaseSuccessStep1 || en.purchaseSuccessStep1;
    next.purchaseSuccessStep2 = next.purchaseSuccessStep2 || en.purchaseSuccessStep2;
    next.purchaseSuccessStep3 = next.purchaseSuccessStep3 || en.purchaseSuccessStep3;
    next.purchaseSuccessDownloadBtn = next.purchaseSuccessDownloadBtn || en.purchaseSuccessDownloadBtn;
    next.purchaseSuccessEmailNote = next.purchaseSuccessEmailNote || en.purchaseSuccessEmailNote;
    next.faqTitle = next.faqTitle || en.faqTitle;
    next.faqSub = next.faqSub || en.faqSub;
    next.faq1q = next.faq1q || en.faq1q;
    next.winGuideBtn = next.winGuideBtn || en.winGuideBtn;
    next.linkChangelog = next.linkChangelog || en.linkChangelog;
    next.linkPrev = next.linkPrev || en.linkPrev;
    next.linkSmartScreen = next.linkSmartScreen || en.linkSmartScreen;
    next.helpTitle = next.helpTitle || en.helpTitle || en.navHelp;
    next.helpSub = next.helpSub || en.helpSub;
    next.promoNote = next.promoNote || en.promoNote;
    next.promoSectionTitle = next.promoSectionTitle || en.promoSectionTitle;
    next.promoFreeTitle = next.promoFreeTitle || en.promoFreeTitle;
    next.promoVat = next.promoVat || en.promoVat;
    next.promoLaunchLabel = next.promoLaunchLabel || en.promoLaunchLabel;
    next.comparePromoBanner = next.comparePromoBanner || en.comparePromoBanner;
    next.comparePricingExtra = next.comparePricingExtra || en.comparePricingExtra;
    next.dlPlusHintExtra = next.dlPlusHintExtra || en.dlPlusHintExtra;
    next.markdownGuideTitle = next.markdownGuideTitle || en.markdownGuideTitle;
    next.markdownGuideBody = next.markdownGuideBody || en.markdownGuideBody;
    next.formatBarGuideTitle = next.formatBarGuideTitle || en.formatBarGuideTitle;
    next.formatBarGuideBody = next.formatBarGuideBody || en.formatBarGuideBody;
    next.versionHistoryTitle = next.versionHistoryTitle || en.versionHistoryTitle;
    next.versionColVersion = next.versionColVersion || en.versionColVersion;
    next.versionColDate = next.versionColDate || en.versionColDate;
    next.versionColWin = next.versionColWin || en.versionColWin;
    next.versionColMac = next.versionColMac || en.versionColMac;
    next.versionLatest = next.versionLatest || en.versionLatest;
    next.versionWin = next.versionWin || en.versionWin;
    next.versionMac = next.versionMac || en.versionMac;
    next.changelogTitle = next.changelogTitle || en.changelogTitle;
    next.guideKeysTitle = next.guideKeysTitle || en.guideKeysTitle;
    next.guideKeysIntro = next.guideKeysIntro || en.guideKeysIntro;
    next.gkColAction = next.gkColAction || en.gkColAction;
    next.gkColKey = next.gkColKey || en.gkColKey;
    next.gkColNote = next.gkColNote || en.gkColNote;
    for (let gi = 1; gi <= 6; gi++) {
        next["gk" + gi + "a"] = next["gk" + gi + "a"] || en["gk" + gi + "a"];
        next["gk" + gi + "k"] = next["gk" + gi + "k"] || en["gk" + gi + "k"];
        next["gk" + gi + "n"] = next["gk" + gi + "n"] || en["gk" + gi + "n"];
    }
    next.guidePlusTitle = next.guidePlusTitle || en.guidePlusTitle;
    next.guideNavStart = next.guideNavStart || en.guideNavStart;
    next.guideNavKeys = next.guideNavKeys || en.guideNavKeys;
    next.guideNavEdit = next.guideNavEdit || en.guideNavEdit;
    next.guideNavPlus = next.guideNavPlus || en.guideNavPlus;
    next.guideSectionEditTitle = next.guideSectionEditTitle || en.guideSectionEditTitle;
    next.fz3Title = next.fz3Title || en.fz3Title;
    for (let n = 1; n <= 5; n++) {
        const key = "fz" + n + "Items";
        if (!next[key] || !next[key].length) next[key] = en[key];
        next["fz" + n + "Title"] = next["fz" + n + "Title"] || en["fz" + n + "Title"];
    }
    next.dlWinLabel = next.dlWinLabel || en.dlWinLabel;
    next.dlMacLabel = next.dlMacLabel || en.dlMacLabel;
    next.footerLangLabel = next.footerLangLabel || en.footerLangLabel;
    next.themeLight = next.themeLight || en.themeLight;
    next.themeDark = next.themeDark || en.themeDark;
    next.themeAuto = next.themeAuto || en.themeAuto;
    next.themeLightLabel = next.themeLightLabel || en.themeLightLabel;
    next.themeDarkLabel = next.themeDarkLabel || en.themeDarkLabel;
    next.themeAutoLabel = next.themeAutoLabel || en.themeAutoLabel;
    next.themeAriaLabel = next.themeAriaLabel || en.themeAriaLabel;
    next.pageCtaDownload = next.pageCtaDownload || en.pageCtaDownload;
    next.pageCtaCompare = next.pageCtaCompare || en.pageCtaCompare;
    ["features", "help", "faq", "contact", "download"].forEach(function (p) {
        const tKey = p + "CtaTitle";
        const dKey = p + "CtaDesc";
        next[tKey] = next[tKey] || en[tKey];
        next[dKey] = next[dKey] || en[dKey];
    });
    if (!next.compareSections || !next.compareSections.length) {
        const cmp = window.PeekomCompare || {};
        next.compareSections = (cmp.getCompareSections && cmp.getCompareSections(lang)) || cmp.SECTIONS_EN;
    }
    if (lang !== "ko" && !isKo) {
        next.privacyTitle = next.privacyTitle || en.privacyTitle;
        next.privacyUpdated = next.privacyUpdated || en.privacyUpdated;
        next.privacyBody = next.privacyBody || en.privacyBody;
        next.privacyBackLink = next.privacyBackLink || en.privacyBackLink;
    }
    for (let i = 1; i <= 6; i++) {
        next["help" + i + "t"] = next["help" + i + "t"] || en["help" + i + "t"];
        next["help" + i + "p"] = next["help" + i + "p"] || en["help" + i + "p"];
    }

    return next;
}

function getLocaleData() {
    const lang = resolveLang(currentLang);
    let raw;
    if (lang === "ko") {
        raw = i18n.ko;
    } else if (lang === "en") {
        raw = Object.assign({}, i18n.ko, i18n.en);
    } else {
        const badge = SITE_OFFER_BADGES[lang] || SITE_OFFER_BADGES.en;
        raw = Object.assign({}, i18n.en, i18n[lang] || {}, {
            heroPlusCardBadge: badge.paid,
            heroMacPlusCardBadge: badge.paid,
            heroFreeCardBadge: badge.free,
            heroMacFreeCardBadge: badge.free
        });
    }
    const base = enrichLocaleData(raw, lang);
    const privacyPack = window.PeekomPrivacyI18n || {};
    const privacyLang = lang === "ko" ? "ko" : "en";
    const privacyData = privacyPack[privacyLang] || privacyPack.en || {};
    Object.assign(base, privacyData);
    const cmp = window.PeekomCompare || {};
    const sections = (cmp.getCompareSections && cmp.getCompareSections(lang)) || cmp.SECTIONS_EN;
    base.compareSections = sections;
    base.compareRows = cmp.flattenCompareRows
        ? cmp.flattenCompareRows(sections)
        : [];
    return base;
}

function getSearchSections(d) {
    return [
        { label: d.navHome, href: 'index.html', keywords: 'home peekom 홈' },
        { label: d.navFeatures || 'Features', href: 'features.html', keywords: 'features function compare plus free 비교 peekom plus' },
        { label: d.navDownload, href: 'download.html', keywords: 'download windows mac setup 다운로드' },
        { label: d.navFaq, href: 'faq.html', keywords: 'faq license smartscreen 자주 묻는 질문' },
        { label: d.navHelp, href: 'help.html', keywords: 'guide help install shortcut 마크다운 서식바' },
        { label: d.navContact, href: 'contact.html', keywords: 'contact email support 연락' }
    ];
}

function populateLangSelect() {
    const sel = document.getElementById('langSelect');
    if (!sel) return;
    sel.innerHTML = LANG_META.map(function(m) {
        return '<option value="' + m.code + '">' + m.label + '</option>';
    }).join('');
}

function detectBrowserLanguage() {
    try {
        const saved = localStorage.getItem('ppaekkom-lang');
        if (saved) return resolveLang(saved);
    } catch (e) {}
    const langs = navigator.languages || [navigator.language || 'en'];
    for (let i = 0; i < langs.length; i++) {
        const resolved = resolveLang(langs[i]);
        if (i18n[resolved]) return resolved;
    }
    return 'en';
}

function detectOS() {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('win') !== -1) return 'win';
    if (ua.indexOf('mac') !== -1) return 'mac';
    return 'generic';
}

function setLanguage(lang) {
    currentLang = resolveLang(lang);
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    try { localStorage.setItem('ppaekkom-lang', currentLang); } catch (e) {}
    updateUI();
}

function applyLinks() {
    const winDownloadIds = ["heroWinBtn", "dlWinBtn"];
    winDownloadIds.forEach(function (id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.href = LINKS.win;
        el.setAttribute("download", WIN_SETUP_FILENAME);
        el.removeAttribute("target");
    });

    const macBlockedIds = ["heroMacBtn", "heroMacPlusBuyBtn", "dlMacBtn", "dlMacPlusBuyBtn"];
    macBlockedIds.forEach(function (id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.href = "#";
        el.removeAttribute("target");
    });

    const winPlusBuyIds = ["heroPlusBuyBtn", "dlPlusBuyBtn"];
    winPlusBuyIds.forEach(function (id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.href = LINKS.buy;
        el.target = "_blank";
        el.rel = "noopener noreferrer";
        el.removeAttribute("download");
    });

    const buyOnlyIds = ["dlBuyLink"];
    buyOnlyIds.forEach(function (id) {
        const el = document.getElementById(id);
        if (el) el.href = LINKS.buy;
    });

    const reviewBtn = document.getElementById("reviewFormBtn");
    if (reviewBtn && LINKS.reviewForm) {
        reviewBtn.href = LINKS.reviewForm;
        reviewBtn.target = "_blank";
        reviewBtn.rel = "noopener noreferrer";
    }
}

function triggerWinSetupDownload() {
    const a = document.createElement("a");
    a.href = LINKS.win;
    a.download = WIN_SETUP_FILENAME;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
}

let purchaseSuccessLicenseKey = "";

function sanitizePurchaseLicenseKey(raw) {
    const text = String(raw || "").trim();
    if (!text) return "";
    if (/^\[license_key\]$/i.test(text)) return "";
    if (text.length < 8 || text.length > 80) return "";
    if (!/^[A-Za-z0-9-]+$/.test(text)) return "";
    return text;
}

function parsePurchaseLicenseKeyFromUrl() {
    try {
        const params = new URLSearchParams(window.location.search);
        return sanitizePurchaseLicenseKey(params.get("key"));
    } catch (e) {
        return "";
    }
}

function stripPurchaseKeyFromUrl() {
    try {
        const url = new URL(window.location.href);
        if (!url.searchParams.has("key")) return;
        url.searchParams.delete("key");
        const next = url.pathname + (url.searchParams.toString() ? "?" + url.searchParams.toString() : "") + url.hash;
        window.history.replaceState({}, "", next);
    } catch (e) {
        /* ignore */
    }
}

function renderPurchaseSuccessBanner(d, licenseKey) {
    const host = document.getElementById("purchaseSuccessHost");
    if (!host || !licenseKey) {
        if (host) {
            host.hidden = true;
            host.innerHTML = "";
        }
        return;
    }

    const esc = function (s) {
        return String(s)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    };

    host.hidden = false;
    host.innerHTML =
        '<section class="purchase-success" id="purchaseSuccessPanel">' +
            '<div class="purchase-success__aurora" aria-hidden="true"></div>' +
            '<div class="purchase-success__card">' +
                '<div class="purchase-success__hero">' +
                    '<img class="purchase-success__icon" src="images/plus.png" alt="" width="72" height="72">' +
                    '<span class="purchase-success__badge" aria-hidden="true">' +
                        '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>' +
                    "</span>" +
                "</div>" +
                '<h2 class="purchase-success__title">' + esc(d.purchaseSuccessTitle) + "</h2>" +
                '<p class="purchase-success__lead">' + esc(d.purchaseSuccessLead) + "</p>" +
                '<div class="purchase-success__key-wrap">' +
                    '<label class="purchase-success__key-label" for="purchaseLicenseKeyValue">' + esc(d.purchaseSuccessKeyLabel) + "</label>" +
                    '<div class="purchase-success__key-row">' +
                        '<code class="purchase-success__key" id="purchaseLicenseKeyValue">' + esc(licenseKey) + "</code>" +
                        '<button type="button" class="purchase-success__copy" id="purchaseLicenseCopyBtn">' + esc(d.purchaseSuccessCopyBtn) + "</button>" +
                    "</div>" +
                "</div>" +
                '<ol class="purchase-success__steps">' +
                    "<li>" + (d.purchaseSuccessStep1 || "") + "</li>" +
                    "<li>" + (d.purchaseSuccessStep2 || "") + "</li>" +
                    "<li>" + (d.purchaseSuccessStep3 || "") + "</li>" +
                "</ol>" +
                '<p class="purchase-success__email-note">' + esc(d.purchaseSuccessEmailNote) + "</p>" +
                '<div class="purchase-success__actions">' +
                    '<a href="' + LINKS.win + '" class="btn btn--buy btn--plus purchase-success__dl" download="' + WIN_SETUP_FILENAME + '">' + esc(d.purchaseSuccessDownloadBtn) + "</a>" +
                "</div>" +
            "</div>" +
        "</section>";

    const copyBtn = document.getElementById("purchaseLicenseCopyBtn");
    const keyEl = document.getElementById("purchaseLicenseKeyValue");
    if (copyBtn && keyEl) {
        copyBtn.addEventListener("click", function () {
            const keyText = keyEl.textContent || "";
            const copiedLabel = d.purchaseSuccessCopied || "Copied";
            const defaultLabel = d.purchaseSuccessCopyBtn || "Copy";
            function markCopied() {
                copyBtn.textContent = copiedLabel;
                copyBtn.classList.add("purchase-success__copy--done");
                setTimeout(function () {
                    copyBtn.textContent = defaultLabel;
                    copyBtn.classList.remove("purchase-success__copy--done");
                }, 2000);
            }
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(keyText).then(markCopied).catch(function () {
                    window.prompt(d.purchaseSuccessKeyLabel || "License key", keyText);
                });
            } else {
                window.prompt(d.purchaseSuccessKeyLabel || "License key", keyText);
                markCopied();
            }
        });
    }

    const panel = document.getElementById("purchaseSuccessPanel");
    if (panel && panel.scrollIntoView) {
        requestAnimationFrame(function () {
            panel.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }
}

function initPurchaseSuccess(d) {
    if (document.body.getAttribute("data-page") !== "download") return;
    if (!purchaseSuccessLicenseKey) {
        purchaseSuccessLicenseKey = parsePurchaseLicenseKeyFromUrl();
        if (purchaseSuccessLicenseKey) stripPurchaseKeyFromUrl();
    }
    renderPurchaseSuccessBanner(d, purchaseSuccessLicenseKey);
}

function restoreModalGuideView() {
    const overlay = document.getElementById("modalOverlay");
    if (!overlay) return;
    const list = overlay.querySelector(".guide-list");
    const infoEl = document.getElementById("modalInfoBody");
    if (list) list.hidden = false;
    if (infoEl) infoEl.hidden = true;
    const d = getLocaleData();
    const guideTitleEl = document.getElementById("guideTitle");
    if (guideTitleEl && d.guideTitle) guideTitleEl.textContent = d.guideTitle;
}

function showMacComingSoon(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    const d = getLocaleData();
    const overlay = document.getElementById("modalOverlay");
    if (!overlay) return;
    const titleEl = document.getElementById("guideTitle");
    const list = overlay.querySelector(".guide-list");
    let infoEl = document.getElementById("modalInfoBody");
    if (!infoEl) {
        infoEl = document.createElement("p");
        infoEl.id = "modalInfoBody";
        infoEl.className = "modal-info-body";
        if (list) list.parentNode.insertBefore(infoEl, list);
        else overlay.querySelector(".modal")?.appendChild(infoEl);
    }
    if (titleEl) titleEl.textContent = d.macComingSoonTitle || "macOS";
    infoEl.innerHTML = d.macComingSoonBody || "macOS version is in development.";
    infoEl.hidden = false;
    if (list) list.hidden = true;
    openModal({ mode: "info" });
}

var heroOfferActionsBound = false;

function initHeroOfferActions() {
    if (heroOfferActionsBound) return;
    heroOfferActionsBound = true;

    ["heroMacBtn", "heroMacPlusBuyBtn", "dlMacBtn", "dlMacPlusBuyBtn"].forEach(function (id) {
        const el = document.getElementById(id);
        if (el) el.addEventListener("click", showMacComingSoon);
    });
}

function setThemeBtnA11y(id, label) {
    const el = document.getElementById(id);
    if (!el || !label) return;
    el.setAttribute("aria-label", label);
    el.setAttribute("title", label);
}

function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value != null) {
        if (id === 'heroFreeCompareNote' || id === 'dlFreeCompareNote' || id === 'faq1a' || id === 'dlPlusHint' || id === 'faq2a' || id === 'faq3a' || id === 'faq9a' || id === 'refundPolicyBody' || id === 'faqR1a' || id === 'faqR2a' || id === 'faqR3a') {
            el.innerHTML = value;
        } else {
            el.textContent = value;
        }
    }
}

function renderFeatureListItems(items) {
    return (items || []).map(function (item) {
        const badge = item.plus ? ' <span class="plus-badge-inline">Plus</span>' : "";
        return "<li>" + item.text + badge + "</li>";
    }).join("");
}

function renderFeatureBlocks(d) {
    for (let n = 1; n <= 5; n++) {
        const titleEl = document.getElementById("fz" + n + "Title");
        const listEl = document.getElementById("fz" + n + "List");
        const titleKey = "fz" + n + "Title";
        const itemsKey = "fz" + n + "Items";
        if (titleEl && d[titleKey]) titleEl.textContent = d[titleKey];
        if (listEl && d[itemsKey]) listEl.innerHTML = renderFeatureListItems(d[itemsKey]);
    }
}

var faqAccordionBound = false;

function setFaqAccordionOpen(item, open) {
    if (!item) return;
    const trigger = item.querySelector(".faq-accordion__trigger");
    const panel = item.querySelector(".faq-accordion__panel");
    if (!trigger || !panel) return;
    item.classList.toggle("is-open", open);
    trigger.setAttribute("aria-expanded", open ? "true" : "false");
    panel.hidden = !open;
}

function initFaqAccordion() {
    const items = document.querySelectorAll(".faq-accordion");
    if (!items.length) return;
    if (!faqAccordionBound) {
        faqAccordionBound = true;
        items.forEach(function (item) {
            const trigger = item.querySelector(".faq-accordion__trigger");
            if (!trigger) return;
            trigger.addEventListener("click", function () {
                const willOpen = !item.classList.contains("is-open");
                items.forEach(function (other) {
                    setFaqAccordionOpen(other, other === item && willOpen);
                });
            });
        });
    }
}

function renderPageCtaStrip(d) {
    const host = document.getElementById("pageCtaStrip");
    if (!host) return;
    const page = document.body.getAttribute("data-page") || "";
    if (page === "features") {
        host.innerHTML = "";
        host.style.display = "none";
        return;
    }
    const titleKey = page + "CtaTitle";
    const descKey = page + "CtaDesc";
    const title = d[titleKey];
    const desc = d[descKey];
    if (!title) {
        host.innerHTML = "";
        host.style.display = "none";
        return;
    }
    host.style.display = "";
    let actions = "";
    if (page === "features" || page === "faq" || page === "download") {
        actions += '<a href="' + LINKS.buy + '" class="btn btn--buy btn--plus" target="_blank" rel="noopener">' + d.compareCta + "</a>";
    }
    if (page === "features" || page === "faq" || page === "help" || page === "download") {
        actions += '<a href="features.html#compare" class="btn">' + d.pageCtaCompare + "</a>";
    }
    if (page !== "download") {
        actions += '<a href="download.html" class="btn">' + d.pageCtaDownload + "</a>";
    }
    host.innerHTML =
        '<div class="page-cta-strip__text">' +
            '<div class="page-cta-strip__title">' + title + "</div>" +
            '<div class="page-cta-strip__desc">' + desc + "</div>" +
        "</div>" +
        '<div class="page-cta-strip__actions">' + actions + "</div>";
}

function renderPrivacyPage(d) {
    if (document.body.getAttribute("data-page") !== "privacy") return;
    setText("privacyTitle", d.privacyTitle);
    setText("privacyUpdated", d.privacyUpdated);
    const bodyEl = document.getElementById("privacyBody");
    if (bodyEl && d.privacyBody) bodyEl.innerHTML = d.privacyBody;
    const backEl = document.getElementById("privacyBackLink");
    if (backEl && d.privacyBackLink) {
        backEl.textContent = d.privacyBackLink;
        backEl.href = "index.html";
    }
}

function updateUI() {
    const d = getLocaleData();
    const en = i18n.en;

    setText('navHome', d.navHome);
    setText('navFeatures', d.navFeatures);
    setText('navDownload', d.navDownload);
    setText('navFaq', d.navFaq);
    setText('navHelp', d.navHelp || d.navGuide);
    setText('navContact', d.navContact);
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.value = currentLang;
        langSelect.setAttribute('aria-label', d.footerLangLabel || 'Language');
    }
    setThemeBtnA11y('themeLightBtn', d.themeLightLabel);
    setThemeBtnA11y('themeDarkBtn', d.themeDarkLabel);
    setThemeBtnA11y('themeAutoBtn', d.themeAutoLabel);
    const themeSwitch = document.getElementById('themeSwitch');
    if (themeSwitch) themeSwitch.setAttribute('aria-label', d.themeAriaLabel);
    if (window.PeekomTheme) window.PeekomTheme.init();

    const heroTitleEl = document.getElementById('heroTitle');
    if (heroTitleEl) {
        heroTitleEl.innerHTML =
            '<img class="hero__title-icon" src="images/index.png" alt="Peekom" id="heroIcon">' +
            '<span class="hero__title-text"><span class="purple">' + (d.heroTitleMain || 'Peekom') + '</span></span>';
    }

    const heroTaglineEl = document.getElementById('heroTagline');
    if (heroTaglineEl) heroTaglineEl.innerHTML = d.heroTagline;
    updateHeroOfferCards(d);
    setText('heroPlusHeadTitle', d.promoSectionTitle || "Peekom Plus(유료)");
    setText('heroFreeTitle', d.promoFreeTitle || "Peekom(무료)");
    setText('heroFreeCompareNote', d.heroFreeCompareNote);
    setText('heroUpgradeNote', d.heroUpgradeNote);

    setText('carouselCap1', d.carouselCap1);
    setText('reviewBtnLabel', d.reviewBtnLabel);

    if (window.PeekomReviews) {
        window.PeekomReviews.refresh({
            reviewEmpty: d.reviewEmpty,
            reviewAnonymous: d.reviewAnonymous
        });
    }

    const detectedOsEl = document.getElementById('detectedOs');
    const winGuideBtnEl = document.getElementById('winGuideBtn');
    const winGuideFooterEl = document.getElementById('winGuideFooter');
    if (detectedOsEl) {
        if (userOS === 'win') {
            detectedOsEl.innerHTML = d.detectWin;
            if (winGuideBtnEl) winGuideBtnEl.style.display = 'inline-block';
            if (winGuideFooterEl) winGuideFooterEl.style.display = 'block';
        } else if (userOS === 'mac') {
            detectedOsEl.innerHTML = d.detectMac;
            if (winGuideBtnEl) winGuideBtnEl.style.display = 'none';
            if (winGuideFooterEl) winGuideFooterEl.style.display = 'none';
        } else {
            detectedOsEl.textContent = d.detectGeneric.replace(/<[^>]+>/g, '');
            if (winGuideBtnEl) winGuideBtnEl.style.display = 'none';
            if (winGuideFooterEl) winGuideFooterEl.style.display = 'none';
        }
    }

    setText('featuresTitle', d.featuresTitle);
    setText('featuresSub', d.featuresSub);
    setText('compareTitle', d.compareTitle);
    setText('compareSub', d.compareSub);
    const compareHost = document.getElementById('compareTableHost');
    if (compareHost && window.PeekomCompare) {
        compareHost.innerHTML = window.PeekomCompare.buildCompareTable(d);
    }

    setText('winGuideBtn', d.winGuideBtn);
    setText('dlTitle', d.dlTitle);
    setText('dlSub', d.dlSub);
    setText('dlPlusHeadTitle', d.promoSectionTitle || "Peekom Plus(유료)");
    setText('dlFreeTitle', d.promoFreeTitle || "Peekom(무료)");
    setText('dlFreeCompareNote', d.heroFreeCompareNote);
    setText('linkChangelog', d.linkChangelog);
    setText('linkPrev', d.linkPrev);
    setText('linkSmartScreen', d.linkSmartScreen);

    setText('faqTitle', d.faqTitle);
    setText('faqSub', d.faqSub);
    setText('refundPolicyTitle', d.refundPolicyTitle);
    setText('refundPolicyBody', d.refundPolicyBody);
    setText('faqR1q', d.faqR1q);
    setText('faqR1a', d.faqR1a);
    setText('faqR2q', d.faqR2q);
    setText('faqR2a', d.faqR2a);
    setText('faqR3q', d.faqR3q);
    setText('faqR3a', d.faqR3a);
    setText('faq1q', d.faq1q);
    setText('faq1a', d.faq1a);
    setText('faq2q', d.faq2q);
    setText('faq2a', d.faq2a);
    setText('faq8q', d.faq8q);
    setText('faq8a', d.faq8a);
    setText('faq9q', d.faq9q);
    setText('faq9a', d.faq9a);
    setText('faq3q', d.faq3q);
    setText('faq3a', d.faq3a);
    setText('faq3bq', d.faq3bq);
    setText('faq3ba', d.faq3ba);
    setText('faq4q', d.faq4q);
    const faq4aEl = document.getElementById('faq4a');
    if (faq4aEl) faq4aEl.innerHTML = d.faq4a;
    setText('faq5q', d.faq5q);
    setText('faq5a', d.faq5a);
    if (d.faq6q) {
        setText('faq6q', d.faq6q);
        setText('faq6a', d.faq6a);
        setText('faq7q', d.faq7q);
        setText('faq7a', d.faq7a);
    }

    setText('helpTitle', d.helpTitle || d.navGuide);
    setText('helpSub', d.helpSub);
    const guideStartEl = document.getElementById('guideStartBody');
    if (guideStartEl && d.guideStartBody) guideStartEl.innerHTML = d.guideStartBody;

    const guideKeysIntroEl = document.getElementById('guideKeysIntro');
    if (guideKeysIntroEl && d.guideKeysIntro) guideKeysIntroEl.innerHTML = d.guideKeysIntro;

    const gkTextIds = ['gkColAction', 'gkColKey', 'gkColNote'];
    for (let gi = 1; gi <= 6; gi++) {
        gkTextIds.push('gk' + gi + 'a', 'gk' + gi + 'k', 'gk' + gi + 'n');
    }
    gkTextIds.forEach(function(id) {
        setText(id, d[id]);
    });
    setText('formatBarGuideTitle', d.formatBarGuideTitle);
    const formatBarGuideBody = document.getElementById('formatBarGuideBody');
    if (formatBarGuideBody && d.formatBarGuideBody) formatBarGuideBody.innerHTML = d.formatBarGuideBody;
    const markdownGuideTitle = document.getElementById('markdownGuideTitle');
    const markdownGuideBody = document.getElementById('markdownGuideBody');
    if (markdownGuideTitle) markdownGuideTitle.hidden = true;
    if (markdownGuideBody) { markdownGuideBody.hidden = true; markdownGuideBody.innerHTML = ''; }
    const guidePlusEl = document.getElementById('guidePlusBody');
    if (guidePlusEl) guidePlusEl.innerHTML = buildGuidePlusHtml(d);
    ['guidePlusTitle','guideNavStart','guideNavKeys','guideNavEdit','guideNavPlus'].forEach(function(id) {
        setText(id, d[id]);
    });
    setText('guideSectionStartTitle', d.guideNavStart);
    setText('guideSectionKeysTitle', d.guideKeysTitle || d.guideNavKeys);
    setText('guideSectionEditTitle', d.guideSectionEditTitle);
    setText('guideSectionPlusTitle', d.guidePlusTitle || d.guideNavPlus);
    ['versionHistoryTitle','changelogTitle'].forEach(function(id) { setText(id, d[id]); });
    renderVersionHistory(d);
    renderChangelog(d);
    renderFeatureBlocks(d);
    renderPageCtaStrip(d);
    initPurchaseSuccess(d);
    initFaqAccordion();

    setText('contactTitle', d.contactTitle);
    setText('contactSub', d.contactSub);
    setText('contactFeedbackTitle', d.contactFeedbackTitle);
    setText('contactFeedbackDesc', d.contactFeedbackDesc);
    setText('contactFeedbackBtn', d.contactFeedbackBtn);
    setText('contactReviewTitle', d.contactReviewTitle);
    setText('contactReviewDesc', d.contactReviewDesc);
    setText('contactReviewBtn', d.contactReviewBtn);
    setText('contactEmailTitle', d.contactEmailTitle);
    setText('contactEmailDesc', d.contactEmailDesc);
    setText('contactNote', d.contactNote);
    const emailEl = document.getElementById('contactEmail');
    if (emailEl) {
        emailEl.textContent = d.contactEmail;
        emailEl.href = 'mailto:' + d.contactEmail;
    }
    setText('footerCopy', d.footerCopy);
    setText('footerPrivacy', d.footerPrivacy);

    const guideTitleEl = document.getElementById('guideTitle');
    if (guideTitleEl) guideTitleEl.textContent = d.guideTitle;
    const step1El = document.getElementById('step1');
    if (step1El) step1El.innerHTML = d.step1;
    const step2El = document.getElementById('step2');
    if (step2El) step2El.innerHTML = d.step2;
    const step3El = document.getElementById('step3');
    if (step3El) step3El.innerHTML = d.step3;
    const modalCloseBtn = document.querySelector('.modal__close');
    if (modalCloseBtn) modalCloseBtn.setAttribute('aria-label', d.modalClose);

    const brandIcon = document.getElementById('brandIcon');
    if (brandIcon) brandIcon.alt = 'Peekom';
    applyLinks();
    highlightOSButtons();
    renderPrivacyPage(d);
    syncHeroHeights();
}

function syncHeroHeights() {
    const textCol = document.getElementById('heroTextCol');
    const carousel = document.getElementById('heroCarousel');
    const viewport = carousel && carousel.querySelector('.hero-carousel__viewport');
    if (!textCol || !carousel || !viewport) return;

    const CAROUSEL_SCALE = 0.8;

    if (window.innerWidth <= 700) {
        carousel.style.width = '';
        viewport.style.height = '';
        viewport.style.width = '';
        const footerEl = document.getElementById('winGuideFooter');
        if (footerEl) footerEl.style.width = '';
        return;
    }

    const h = textCol.offsetHeight;
    const dotsEl = carousel.querySelector('.hero-carousel__dots');
    let chromeH = 8;
    if (dotsEl) chromeH += dotsEl.offsetHeight;
    const viewportH = Math.max(200, Math.round((h - chromeH) * CAROUSEL_SCALE));
    const viewportW = Math.round(viewportH * 4 / 3);
    viewport.style.height = viewportH + 'px';
    viewport.style.width = viewportW + 'px';
    carousel.style.width = viewportW + 'px';
    const footerEl = document.getElementById('winGuideFooter');
    if (footerEl) footerEl.style.width = viewportW + 'px';
}

window.addEventListener('resize', syncHeroHeights);

function highlightOSButtons() {
    document.querySelectorAll('[data-os]').forEach(function(btn) {
        btn.classList.remove('btn--recommended');
    });
    if (userOS === 'win' || userOS === 'mac') {
        document.querySelectorAll('[data-os="' + userOS + '"]').forEach(function(btn) {
            btn.classList.add('btn--recommended');
        });
    }
}

/* ── Search ── */
function runSearch(query) {
    const resultsEl = document.getElementById('searchResults');
    if (!query.trim()) {
        resultsEl.classList.remove('open');
        resultsEl.innerHTML = '';
        return;
    }

    const q = query.toLowerCase();
    const d = getLocaleData();
    const hits = [];

    getSearchSections(d).forEach(function(s) {
        if (s.label.toLowerCase().includes(q) || s.keywords.includes(q)) {
            hits.push({ label: s.label, href: s.href });
        }
    });

    document.querySelectorAll('.faq-accordion').forEach(function(item) {
        const text = item.textContent.toLowerCase();
        const kw = (item.getAttribute('data-search') || '') + ' ' + text;
        if (kw.includes(q)) {
            const qEl = item.querySelector('[id^="faq"][id$="q"]');
            hits.push({ label: qEl ? qEl.textContent : text.slice(0, 60), href: 'faq.html' });
            setFaqAccordionOpen(item, true);
        }
    });

    if (hits.length === 0) {
        resultsEl.innerHTML = '<a href="#">' + d.searchNoResults + '</a>';
    } else {
        const seen = new Set();
        resultsEl.innerHTML = hits.filter(function(h) {
            const key = h.label + h.href;
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        }).slice(0, 6).map(function(h) {
            return '<a href="' + h.href + '" onclick="closeSearch()">' + h.label + '</a>';
        }).join('');
    }
    resultsEl.classList.add('open');
}

function closeSearch() {
    document.getElementById('searchResults').classList.remove('open');
}

document.getElementById('searchInput')?.addEventListener('input', function(e) {
    runSearch(e.target.value);
});

document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-wrap')) closeSearch();
});

/* ── Modal ── */
function openModal(options) {
    options = options || {};
    if (options.mode !== "info") {
        restoreModalGuideView();
    }
    document.getElementById("modalOverlay").classList.add("active");
}

function closeModal() {
    document.getElementById("modalOverlay").classList.remove("active");
    restoreModalGuideView();
}

function closeModalOnBackdrop(e) {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeModal();
});

function updateActiveNav() {
    const page = document.body.getAttribute("data-page") || "home";
    document.querySelectorAll(".navbar__links a").forEach(function (a) {
        a.classList.toggle("active", a.getAttribute("data-nav") === page);
    });
}

window.onload = function() {
    userOS = detectOS();
    populateLangSelect();
    currentLang = detectBrowserLanguage();
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    applyLinks();
    updateUI();
    updateActiveNav();
    initFaqAccordion();
    initHeroOfferActions();
    if (window.PeekomCarousel) window.PeekomCarousel.init();
    if (window.PeekomReviews) {
        const d = enrichLocaleData(i18n[currentLang] || i18n.en, currentLang);
        window.PeekomReviews.init({
            reviewEmpty: d.reviewEmpty,
            reviewAnonymous: d.reviewAnonymous
        });
    }
};
    window.PeekomSite = {
        LINKS: LINKS,
        PRICING: PRICING,
        setLanguage: setLanguage,
        openModal: openModal,
        closeModal: closeModal,
        closeModalOnBackdrop: closeModalOnBackdrop,
        closeSearch: closeSearch,
        showMacComingSoon: showMacComingSoon
    };
    window.setLanguage = setLanguage;
    window.openModal = openModal;
    window.closeModal = closeModal;
    window.closeModalOnBackdrop = closeModalOnBackdrop;
    window.closeSearch = closeSearch;
})();

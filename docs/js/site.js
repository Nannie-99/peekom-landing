/* Peekom landing — shared site logic */
(function () {
"use strict";

/* ── Download URLs ── */
const LINKS = {
    win: "https://github.com/peekom/peekom/releases/latest/download/Peekom-Setup.exe",
    mac: "https://github.com/peekom/peekom/releases/latest",
    buy: "https://peekom.lemonsqueezy.com/buy"
};

const WIN_SETUP_FILENAME = "Peekom-Setup.exe";

const PRICING = { list: 12.99, sale: 9.99, currency: 'USD' };

const CONTACT_EMAIL = "hello.peekom@gmail.com";

const RELEASE_HISTORY = [
    {
        version: "1.2.0",
        date: "2026/06/19",
        latest: true,
        winUrl: "https://github.com/peekom/peekom/releases/download/v1.2.0/Peekom-Setup.exe",
        macUrl: "https://github.com/peekom/peekom/releases/download/v1.2.0/Peekom-macOS.dmg"
    }
];

const CHANGELOG = {
    ko: [{
        version: "1.2.0",
        date: "2026.06.19",
        items: [
            "빼꼼 인덱스가 Peekom으로 돌아왔습니다",
            "가장자리 손잡이·얼음 모드·듀얼 모니터 지원",
            "마크다운 입력·서식바·이미지 삽입 (무료·Plus 공통)",
            "마크다운 체크박스 (- [ ] / - [x]) 클릭으로 완료 on/off",
            "서식바: 글자색·목록(점/네모/숫자) 드롭다운, 순서 개편",
            "무료 메모당 이미지 1장 · Plus 5장, 크기 조절·비율 자르기",
            "Peekom Plus: 10슬롯 독립 배치, 커스텀 테마·글꼴·불투명도, 보내기·JSON 백업"
        ]
    }],
    en: [{
        version: "1.2.0",
        date: "2026.06.19",
        items: [
            "Peekom rebrand from legacy edge memo app",
            "Edge handle, Ice mode, dual monitor support",
            "Markdown, formatting toolbar, image insert (free & Plus)",
            "Markdown checkboxes (- [ ] / - [x]) with click toggle",
            "Toolbar: color & list dropdowns, reordered controls",
            "Free: 1 image per memo · Plus: 5, resize & aspect crop",
            "Peekom Plus: 10 slots, custom theme, export & JSON backup"
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
    const macLabel = d.versionMac || "macOS";
    const rows = RELEASE_HISTORY.map(function (r) {
        const badge = r.latest ? ' <span class="badge-latest">' + latestLabel + '</span>' : "";
        return (
            "<tr>" +
                "<td><strong>v" + r.version + "</strong>" + badge + "</td>" +
                "<td>" + r.date + "</td>" +
                '<td><span class="os-icon">Win</span> <a href="' + r.winUrl + '" target="_blank" rel="noopener">' + winLabel + "</a></td>" +
                '<td><span class="os-icon">Mac</span> <a href="' + r.macUrl + '" target="_blank" rel="noopener">' + macLabel + "</a></td>" +
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
        detectWin: "현재 환경: <strong>Windows</strong> — Windows 버튼 권장",
        detectMac: "현재 환경: <strong>macOS</strong> — macOS 버튼 권장",
        detectGeneric: "운영체제를 자동으로 감지하지 못했습니다. 직접 선택해 주세요.",
        featuresTitle: "기능", featuresSub: "Peekom이 하는 일을 한눈에 확인할 수 있습니다.",
        compareTitle: "Peekom vs Peekom Plus", compareSub: "같은 앱 하나로 시작하고, Plus는 앱 안에서 잠금 해제합니다.",
        comparePricing: '<span class="pricing-was">$' + PRICING.list.toFixed(2) + '</span> <span class="pricing-now">$' + PRICING.sale.toFixed(2) + ' USD</span> <span class="pricing-vat">(VAT 별도)</span> · <span class="pricing-launch">출시 기념 가격</span> · 1회 구매 · 최대 2대 기기 · 소버전 업데이트 포함 · 7일 환불 (<a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>)',
        guidePlusP: "1) Lemon Squeezy에서 출시 기념 $9.99 구매 → 2) 이메일 라이선스 키 수신 → 3) Peekom 실행 → 잠금 UI 또는 설정에서 키 입력 → 4) Peekom Plus + plus.png로 전환. 7일 환불: <a href=\"mailto:" + CONTACT_EMAIL + "\">" + CONTACT_EMAIL + "</a>",
        dlSub: "Peekom 하나만 설치하시면 됩니다. Plus는 앱 안에서 업그레이드합니다.",
        dlWin: "Peekom Setup (Windows)", dlMac: "Peekom Setup (macOS)",
        dlPlusHint: 'Peekom Plus: 정가 <span class="pricing-was">$' + PRICING.list.toFixed(2) + '</span> → 출시 기념 <strong>$' + PRICING.sale.toFixed(2) + '</strong> (VAT 별도) · <a href="' + LINKS.buy + '" id="dlBuyLinkInner">Lemon Squeezy에서 구입</a> → 앱에서 라이선스 키 입력',
        featureGifPending: "데모 GIF 예정",
        compareNoLabel: "미지원",
        faqSub: "Peekom 사용 중 자주 묻는 내용입니다.",
        faqTitle: "자주 묻는 질문",
        faq1q: "Peekom과 Peekom Plus의 차이는 무엇인가요?",
        faq1a: '무료는 3개 인덱스·묶음 이동·얼음 모드·자동 접힘 딜레이·모니터 선택·마크다운·서식바·이미지 삽입을 포함합니다. Peekom Plus(출시 기념 $9.99, 정가 $12.99)는 10슬롯 독립 배치, 커스텀 색·글꼴·불투명도, 이미지 크기 조절, 보내기 등을 앱 안에서 잠금 해제합니다. <a href="features.html#compare">상세 비교표</a>를 참고하세요.',
        compareFreeName: "Peekom (무료)",
        comparePlusName: "Peekom Plus (유료)",
        compareCta: "Peekom Plus 구입",
        comparePromoBanner: "현재 출시 기념 · {pct}% 할인 중",
        faq2q: "듀얼 모니터에서 어떻게 동작하나요?",
        faq2a: "설정 → 표시 모니터에서 현재 마우스 모니터(자동) 또는 특정 모니터를 고정할 수 있습니다. 무료·Peekom Plus 모두 사용할 수 있습니다.",
        faq8q: "Peekom은 모니터 오른쪽 가장자리에서만 사용 가능한가요?",
        faq8a: "현재는 모니터 오른쪽 가장자리에서만 사용할 수 있습니다. 추후 업데이트를 통해 왼쪽, 위쪽, 아래쪽 가장자리도 지원할 예정입니다.",
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
                    '<li><strong>메모 텍스트 커스텀</strong> — 마크다운·서식바·이미지로 꾸밀 수 있습니다. 아래 <a href="#guide-edit">편집</a> 섹션을 참고하세요.</li>' +
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
        contactBody: "버그 리포트, 기능 제안, 라이선스 문의는 아래 이메일로 연락해 주세요.",
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
        comparePricingExtra: " · 1회 구매 · 최대 2대 기기 · 소버전 업데이트 포함 · 7일 환불 (<a href=\"mailto:" + CONTACT_EMAIL + "\">" + CONTACT_EMAIL + "</a>)",
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
            { text: "마크다운 문법 인식" },
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
            { text: "이미지 크기 조절 · 비율 자르기", plus: true }
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
        detectWin: "Detected: <strong>Windows</strong> — Windows buttons below are recommended.",
        detectMac: "Detected: <strong>macOS</strong> — macOS buttons below are recommended.",
        detectGeneric: "Could not detect your OS. Please choose manually.",
        featuresTitle: "Features", featuresSub: "What Peekom does at a glance.",
        compareTitle: "Peekom vs Peekom Plus", compareSub: "One app — Peekom Plus unlocks inside the app.",
        comparePricing: '<span class="pricing-was">$' + PRICING.list.toFixed(2) + '</span> <span class="pricing-now">$' + PRICING.sale.toFixed(2) + ' USD</span> <span class="pricing-vat">(excl. VAT)</span> · <span class="pricing-launch">Launch price</span> · one-time · up to 2 devices · minor updates included · 7-day refund (<a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>)',
        guidePlusP: "1) Buy at launch price $9.99 on Lemon Squeezy → 2) Receive license key by email → 3) Open Peekom → enter key in lock UI or Settings → 4) Peekom Plus activation complete. 7-day refund: <a href=\"mailto:" + CONTACT_EMAIL + "\">" + CONTACT_EMAIL + "</a>",
        dlSub: "Install Peekom once. Upgrade to Peekom Plus inside the app.",
        dlWin: "Peekom Setup (Windows)", dlMac: "Peekom Setup (macOS)",
        dlPlusHint: 'Peekom Plus: Was <span class="pricing-was">$' + PRICING.list.toFixed(2) + '</span> → Launch <strong>$' + PRICING.sale.toFixed(2) + '</strong> (excl. VAT) · <a href="' + LINKS.buy + '" id="dlBuyLinkInner">Buy on Lemon Squeezy</a> → enter license key in app',
        featureGifPending: "Demo GIF coming soon",
        compareNoLabel: "Not supported",
        faqSub: "Common questions about Peekom.",
        faq1q: "What's the difference between free and Plus?",
        faq1a: 'Free includes 3 indexes, group handle move, Ice mode, hover delay, monitor selection, Markdown, formatting toolbar, and image insert. Peekom Plus (launch $9.99, list $12.99) unlocks 10 slots, custom theme, fonts, opacity, image resize, and export in-app. See the <a href="features.html#compare">comparison table</a>.',
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
                    '<li><strong>Customize text</strong> — Use Markdown, the toolbar, and images. See <a href="#guide-edit">Editing</a> below.</li>' +
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
        faq8a: "Currently, Peekom works on the right edge only. We plan to add support for the left, top, and bottom edges in a future update.",
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
        contactBody: "For bug reports, feature requests, or license inquiries, email us below.",
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
        comparePricingExtra: " · one-time · up to 2 devices · minor updates included · 7-day refund (<a href=\"mailto:" + CONTACT_EMAIL + "\">" + CONTACT_EMAIL + "</a>)",
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
        versionLatest: "Latest", versionWin: "64-bit", versionMac: "Universal",
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
            { text: "Markdown syntax support" },
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
            { text: "Image resize · aspect crop", plus: true }
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
        downloadCtaDesc: "Enter your license key in the same app to activate Plus."
    },
    ja: {
        navHome: "ホーム", navDownload: "ダウンロード", navFaq: "よくある質問", navHelp: "ヘルプ", navContact: "お問い合わせ",
        searchPlaceholder: "検索...",
        heroTitlePurple: "ピーコム", heroTitleYellow: "プラス",
        heroTagline: "モニター縁にびっしり貼った付箋は、もう画面の中へ。<br>仕事の流れそのまま—端からひょっこり現れるエッジメモ。",
        carouselCap1: "モニター端のハンドル",
        carouselCap2: "クリック・ショートカットでメモを開く",
        carouselCap3: "デュアルモニター · Pin",
        detectWin: "検出環境: <strong>Windows</strong> — 下の Windows ボタンを推奨します。",
        detectMac: "検出環境: <strong>macOS</strong> — 下の macOS ボタンを推奨します。",
        detectGeneric: "OS を自動検出できませんでした。手動で選択してください。",
        feat1: "Lemon Squeezy ライセンス認証",
        feat2: "デュアルモニター完全対応 — 表示モニターを選択可能",
        feat3: "誤作動防止ホバー遅延(0.3s) & Pin 固定モード",
        feat4: "テキスト・カラーのカスタム UI & ローカル保存",
        lblFree: "ピーコムインデックス", lblPlus: "ピーコムプラス",
        indexName: "ピーコムインデックス", indexBadge: "Free",
        indexDesc: "発表や授業中に、モニター端から目次やメモをこっそり確認できる無料版です。",
        plusName: "ピーコムプラス", plusBadge: "Plus",
        plusDesc: "デュアルモニター、Pin モード、カスタムテーマなどプレミアム機能付きの有料版です。",
        btnWin: "Windows", btnMac: "macOS",
        winGuideBtn: "Windows インストール時に青い警告が表示されますか？",
        dlTitle: "ダウンロード", dlSub: "お使いの OS に合ったインストーラーを選んでください。",
        dlWinNote: "Windows 10 · 11（64-bit）",
        dlIndexHeading: "ピーコムインデックス", dlPlusHeading: "ピーコムプラス",
        dlIndexWin: "Setup (Windows)", dlIndexMac: "Setup (macOS)",
        dlPlusWin: "購入 / ダウンロード (Windows)", dlPlusMac: "購入 / ダウンロード (macOS)",
        linkChangelog: "変更履歴", linkPrev: "旧バージョン", linkSmartScreen: "SmartScreen ガイド",
        faqTitle: "よくある質問", faqSub: "ピーコムインデックスとピーコムプラスについてのよくある質問です。",
        faq1q: "ピーコムインデックスとピーコムプラスの違いは何ですか？",
        compareColFeature: "機能",
        compareFreeName: "ピーコムインデックス",
        comparePlusName: "ピーコムプラス",
        compareRows: [
            { feature: "端のハンドル・メモインデックス", free: "✓", plus: "✓" },
            { feature: "発表・授業用クイックメモ", free: "✓", plus: "✓" },
            { feature: "デュアルモニター · 表示モニター選択", free: "—", plus: "✓" },
            { feature: "Pin モード（クリック固定）", free: "—", plus: "✓" },
            { feature: "カスタムテーマ・色", free: "—", plus: "✓" },
            { feature: "ホバー遅延（誤作動防止）", free: "—", plus: "✓" },
            { feature: "価格", free: "無料", plus: "有料" }
        ],
        compareCta: "ピーコムプラスを購入 · ダウンロード",
        faq2q: "デュアルモニターではどう動作しますか？",
        faq2a: "ピーコムプラスでは設定からヒントノートを表示するモニター（ターゲットモニター）を直接選択できます。",
        faq3q: "ピーコムプラスのライセンスはどう認証しますか？",
        faq3a: "Lemon Squeezy で購入したライセンスキーを初回起動時に入力すると認証されます。",
        faq3bq: "1つのライセンスキーで複数のPCで使えますか？",
        faq3ba: "はい。同じ16桁のライセンスキーを、仕事用PCと個人用PCなど最大2台にそれぞれ1回ずつ入力してピーコムプラスを使えます。",
        faq4q: "Windows インストール時に青い警告が表示されます。",
        faq4a: 'SmartScreen 警告は未署名アプリでよく見られます。<a href="#" onclick="openModal(); return false;">インストールガイド</a>を参照し、[詳細情報] → [実行] の順に進めてください。',
        faq5q: "対応している Windows バージョンは？",
        faq5a: "Windows 10 および Windows 11（64-bit）でご利用いただけます。インストーラーは 64-bit 専用です。Windows 7 / 8 / 8.1 はサポート対象外です（Electron 36）。",
        helpTitle: "ヘルプ", helpSub: "すぐに始める方法です。",
        help1t: "1. インストール", help1p: "OS に合ったインストーラーをダウンロードして実行します。Windows では SmartScreen 警告が出る場合があります。",
        help2t: "2. ハンドル位置の調整", help2p: "右端のハンドルをクリックまたはショートカットでメモを開き、ドラッグで高さを調整できます。",
        help3t: "3. ピーク / アイス", help3p: "メモ上部の<strong>ピーク / アイス</strong>チップで切り替え。アイスは常に固定表示されます（無料・Plus共通）。",
        contactTitle: "お問い合わせ", contactSub: "ご意見・ご感想をお送りください。",
        contactBody: "バグ報告、機能提案、ライセンスに関するお問い合わせは下記メールまでご連絡ください。",
        contactEmail: "hello.peekom@gmail.com",
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "プライバシー",
        guideTitle: "Windows SmartScreen インストールガイド",
        step1: 'インストーラー実行時、<b>「認識されないアプリ」</b>と表示される青い SmartScreen ウィンドウが出る場合があります。',
        step2: "画面上部の <b>[詳細情報]</b> をクリックしてください。",
        step3: "右下に表示される <b>[実行]</b> ボタンを押すとインストールが完了します。",
        searchNoResults: "結果なし",
        modalClose: "閉じる"
    },
    "zh-CN": {
        navHome: "首页", navDownload: "下载", navFaq: "常见问题", navHelp: "帮助", navContact: "联系",
        searchPlaceholder: "搜索...",
        heroTitlePurple: "皮科姆", heroTitleYellow: "Plus",
        heroTagline: "贴满显示器边框的便利贴，搬进屏幕里了。<br>工作节奏不打断——从边缘悄悄探出的专属备忘。",
        carouselCap1: "显示器边缘手柄",
        carouselCap2: "点击或快捷键打开备忘",
        carouselCap3: "双显示器 · 固定模式",
        detectWin: "当前环境：<strong>Windows</strong> — 建议使用下方 Windows 按钮。",
        detectMac: "当前环境：<strong>macOS</strong> — 建议使用下方 macOS 按钮。",
        detectGeneric: "无法自动检测操作系统，请手动选择。",
        feat1: "Lemon Squeezy 许可证认证",
        feat2: "完美支持双显示器 — 可选择目标显示器",
        feat3: "防误触悬停延迟(0.3s) & 点击固定(Pin)模式",
        feat4: "自定义文字与颜色 UI & 本地存储",
        lblFree: "皮科姆索引", lblPlus: "皮科姆Plus",
        indexName: "皮科姆索引", indexBadge: "Free",
        indexDesc: "在演讲或上课期间，从显示器边缘悄悄查看目录和备忘录的免费版。",
        plusName: "皮科姆Plus", plusBadge: "Plus",
        plusDesc: "包含双显示器、Pin 模式、自定义主题等高级功能的付费版。",
        btnWin: "Windows", btnMac: "macOS",
        winGuideBtn: "Windows 安装时出现蓝色警告窗口？",
        dlTitle: "下载", dlSub: "请选择适合您操作系统的安装文件。",
        dlWinNote: "Windows 10 · 11（64 位）",
        dlIndexHeading: "皮科姆索引", dlPlusHeading: "皮科姆Plus",
        dlIndexWin: "Setup (Windows)", dlIndexMac: "Setup (macOS)",
        dlPlusWin: "购买 / 下载 (Windows)", dlPlusMac: "购买 / 下载 (macOS)",
        linkChangelog: "更新日志", linkPrev: "旧版本", linkSmartScreen: "SmartScreen 指南",
        faqTitle: "常见问题", faqSub: "关于皮科姆索引和皮科姆Plus的常见问题。",
        faq1q: "皮科姆索引和皮科姆Plus有什么区别？",
        compareColFeature: "功能",
        compareFreeName: "皮科姆索引",
        comparePlusName: "皮科姆Plus",
        compareRows: [
            { feature: "边缘手柄·备忘索引", free: "✓", plus: "✓" },
            { feature: "演讲·课堂快速备忘", free: "✓", plus: "✓" },
            { feature: "双显示器 · 目标显示器选择", free: "—", plus: "✓" },
            { feature: "Pin 模式（点击固定）", free: "—", plus: "✓" },
            { feature: "自定义主题·颜色", free: "—", plus: "✓" },
            { feature: "悬停延迟（防误触）", free: "—", plus: "✓" },
            { feature: "价格", free: "免费", plus: "付费" }
        ],
        compareCta: "购买 · 下载皮科姆Plus",
        faq2q: "双显示器如何工作？",
        faq2a: "皮科姆Plus可在设置中直接选择显示提示笔记的显示器（目标显示器）。",
        faq3q: "皮科姆Plus许可证如何激活？",
        faq3a: "首次启动时输入通过 Lemon Squeezy 购买的许可证密钥即可激活。",
        faq3bq: "一个许可证密钥可以在多台电脑上使用吗？",
        faq3ba: "可以。同一组16位许可证密钥可在最多两台电脑（例如工作电脑和个人电脑）上各输入一次，以使用皮科姆Plus。",
        faq4q: "Windows 安装时出现蓝色警告窗口。",
        faq4a: 'SmartScreen 警告在未签名应用中很常见。请参考<a href="#" onclick="openModal(); return false;">安装指南</a>，依次点击 [更多信息] → [仍要运行]。',
        faq5q: "支持哪些 Windows 版本？",
        faq5a: "适用于 Windows 10 和 Windows 11（64 位）。安装包为 64 位专用，不支持 Windows 7 / 8 / 8.1（Electron 36）。",
        helpTitle: "帮助", helpSub: "快速入门指南。",
        help1t: "1. 安装", help1p: "下载适合您操作系统的安装文件并运行。Windows 上可能出现 SmartScreen 警告。",
        help2t: "2. 调整手柄位置", help2p: "拖动显示器右边缘的手柄到所需高度。悬停时提示笔记会滑出。",
        help3t: "3. 皮科姆Plus专属 — Pin 模式", help3p: "点击手柄可固定(Pin)笔记，无需悬停即可持续显示。0.3 秒悬停延迟防止误触。",
        contactTitle: "联系", contactSub: "欢迎发送反馈。",
        contactBody: "如有错误报告、功能建议或许可证咨询，请通过以下邮箱联系我们。",
        contactEmail: "hello.peekom@gmail.com",
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "隐私政策",
        guideTitle: "Windows SmartScreen 安装指南",
        step1: '运行安装程序时，可能会出现显示<b>「无法识别的应用」</b>的蓝色 SmartScreen 窗口。',
        step2: "请点击屏幕上方的 <b>[更多信息]</b>。",
        step3: "点击右下方出现的 <b>[仍要运行]</b> 按钮即可完成安装。",
        searchNoResults: "无结果",
        modalClose: "关闭"
    },
    "zh-TW": {
        navHome: "首頁", navDownload: "下載", navFaq: "常見問題", navHelp: "說明", navContact: "聯絡",
        searchPlaceholder: "搜尋...",
        heroTitlePurple: "皮科姆", heroTitleYellow: "Plus",
        heroTagline: "貼滿螢幕邊框的便利貼，搬進畫面裡了。<br>工作節奏不打斷——從邊緣悄悄探出的專屬備忘。",
        carouselCap1: "螢幕邊緣手柄",
        carouselCap2: "點擊或快捷鍵開啟備忘",
        carouselCap3: "雙螢幕 · 固定模式",
        detectWin: "目前環境：<strong>Windows</strong> — 建議使用下方 Windows 按鈕。",
        detectMac: "目前環境：<strong>macOS</strong> — 建議使用下方 macOS 按鈕。",
        detectGeneric: "無法自動偵測作業系統，請手動選擇。",
        feat1: "Lemon Squeezy 授權認證",
        feat2: "完美支援雙螢幕 — 可選擇目標螢幕",
        feat3: "防誤觸懸停延遲(0.3s) & 點擊固定(Pin)模式",
        feat4: "自訂文字與色彩 UI & 本機儲存",
        lblFree: "皮科姆索引", lblPlus: "皮科姆Plus",
        indexName: "皮科姆索引", indexBadge: "Free",
        indexDesc: "在簡報或上課期間，從螢幕邊緣悄悄查看目錄和備忘的免費版。",
        plusName: "皮科姆Plus", plusBadge: "Plus",
        plusDesc: "包含雙螢幕、Pin 模式、自訂主題等進階功能的付費版。",
        btnWin: "Windows", btnMac: "macOS",
        winGuideBtn: "Windows 安裝時出現藍色警告視窗？",
        dlTitle: "下載", dlSub: "請選擇適合您作業系統的安裝檔。",
        dlWinNote: "Windows 10 · 11（64 位元）",
        dlIndexHeading: "皮科姆索引", dlPlusHeading: "皮科姆Plus",
        dlIndexWin: "Setup (Windows)", dlIndexMac: "Setup (macOS)",
        dlPlusWin: "購買 / 下載 (Windows)", dlPlusMac: "購買 / 下載 (macOS)",
        linkChangelog: "更新紀錄", linkPrev: "舊版本", linkSmartScreen: "SmartScreen 指南",
        faqTitle: "常見問題", faqSub: "關於皮科姆索引和皮科姆Plus的常見問題。",
        faq1q: "皮科姆索引和皮科姆Plus有什麼不同？",
        compareColFeature: "功能",
        compareFreeName: "皮科姆索引",
        comparePlusName: "皮科姆Plus",
        compareRows: [
            { feature: "邊緣手柄·備忘索引", free: "✓", plus: "✓" },
            { feature: "簡報·課堂快速備忘", free: "✓", plus: "✓" },
            { feature: "雙螢幕 · 目標螢幕選擇", free: "—", plus: "✓" },
            { feature: "Pin 模式（點擊固定）", free: "—", plus: "✓" },
            { feature: "自訂主題·色彩", free: "—", plus: "✓" },
            { feature: "懸停延遲（防誤觸）", free: "—", plus: "✓" },
            { feature: "價格", free: "免費", plus: "付費" }
        ],
        compareCta: "購買 · 下載皮科姆Plus",
        faq2q: "雙螢幕如何運作？",
        faq2a: "皮科姆Plus可在設定中直接選擇顯示提示筆記的螢幕（目標螢幕）。",
        faq3q: "皮科姆Plus授權如何啟用？",
        faq3a: "首次啟動時輸入透過 Lemon Squeezy 購買的授權金鑰即可啟用。",
        faq3bq: "一組授權金鑰可以在多台電腦上使用嗎？",
        faq3ba: "可以。同一組16位授權金鑰可在最多兩台電腦（例如工作電腦與個人電腦）上各輸入一次，以使用皮科姆Plus。",
        faq4q: "Windows 安裝時出現藍色警告視窗。",
        faq4a: 'SmartScreen 警告在未簽署應用程式中很常見。請參考<a href="#" onclick="openModal(); return false;">安裝指南</a>，依序點選 [詳細資訊] → [仍要執行]。',
        faq5q: "支援哪些 Windows 版本？",
        faq5a: "適用於 Windows 10 與 Windows 11（64 位元）。安裝檔為 64 位元專用，不支援 Windows 7 / 8 / 8.1（Electron 36）。",
        helpTitle: "說明", helpSub: "快速入門指南。",
        help1t: "1. 安裝", help1p: "下載適合您作業系統的安裝檔並執行。Windows 上可能出現 SmartScreen 警告。",
        help2t: "2. 調整手柄位置", help2p: "拖曳螢幕右緣的手柄到所需高度。懸停時提示筆記會滑出。",
        help3t: "3. 皮科姆Plus專屬 — Pin 模式", help3p: "點擊手柄可固定(Pin)筆記，無需懸停即可持續顯示。0.3 秒懸停延遲防止誤觸。",
        contactTitle: "聯絡", contactSub: "歡迎提供意見回饋。",
        contactBody: "如有錯誤回報、功能建議或授權諮詢，請透過以下電子郵件聯絡我們。",
        contactEmail: "hello.peekom@gmail.com",
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "隱私權政策",
        guideTitle: "Windows SmartScreen 安裝指南",
        step1: '執行安裝程式時，可能會出現顯示<b>「無法識別的應用程式」</b>的藍色 SmartScreen 視窗。',
        step2: "請點選畫面上方的 <b>[詳細資訊]</b>。",
        step3: "點選右下方出現的 <b>[仍要執行]</b> 按鈕即可完成安裝。",
        searchNoResults: "無結果",
        modalClose: "關閉"
    },
    es: {
        navHome: "Inicio", navDownload: "Descargar", navFaq: "Preguntas", navHelp: "Ayuda", navContact: "Contacto",
        searchPlaceholder: "Buscar...",
        heroTitlePurple: "Peekom", heroTitleYellow: "Plus",
        heroTagline: "¿Post-its apiñados en el borde del monitor? Ahora viven dentro de la pantalla.<br>Asoman desde el borde—tu escritorio limpio, tus notas a un hover.",
        carouselCap1: "Mango en el borde del monitor",
        carouselCap2: "Abrir nota con clic o atajo",
        carouselCap3: "Dual monitor · Modo Pin",
        detectWin: "Entorno detectado: <strong>Windows</strong> — se recomiendan los botones de Windows abajo.",
        detectMac: "Entorno detectado: <strong>macOS</strong> — se recomiendan los botones de macOS abajo.",
        detectGeneric: "No se pudo detectar el sistema operativo. Elija manualmente.",
        feat1: "Autenticación de licencia Lemon Squeezy",
        feat2: "Soporte dual monitor — selección de pantalla objetivo",
        feat3: "Retardo hover anti-accidente (0.3s) y modo Pin",
        feat4: "UI personalizable de texto y color con almacenamiento local",
        lblFree: "Peekom Index", lblPlus: "Peekom Plus",
        indexName: "Peekom Index", indexBadge: "Free",
        indexDesc: "Versión básica gratuita para consultar índices y notas desde el borde del monitor durante presentaciones.",
        plusName: "Peekom Plus", plusBadge: "Plus",
        plusDesc: "Versión de pago con dual monitor, modo Pin, temas personalizados y más.",
        btnWin: "Windows", btnMac: "macOS",
        winGuideBtn: "¿Aparece una advertencia azul al instalar en Windows?",
        dlTitle: "Descargar", dlSub: "Elija el instalador para su sistema operativo.",
        dlIndexHeading: "Peekom Index", dlPlusHeading: "Peekom Plus",
        dlIndexWin: "Setup (Windows)", dlIndexMac: "Setup (macOS)",
        dlPlusWin: "Comprar / Descargar (Windows)", dlPlusMac: "Comprar / Descargar (macOS)",
        linkChangelog: "Registro de cambios", linkPrev: "Versiones anteriores", linkSmartScreen: "Guía SmartScreen",
        faqTitle: "Preguntas frecuentes", faqSub: "Preguntas comunes sobre Peekom Index y Peekom Plus.",
        faq1q: "¿Cuál es la diferencia entre Peekom Index y Peekom Plus?",
        faq1a: "Index es la versión básica gratuita. Plus añade funciones premium: selección de monitor, modo Pin, UI personalizada y licencia Lemon Squeezy.",
        faq2q: "¿Cómo funciona el soporte dual monitor?",
        faq2a: "En Plus, puede elegir qué monitor muestra la nota de pistas en Configuración.",
        faq3q: "¿Cómo se activa la licencia Plus?",
        faq3a: "Introduzca su clave de licencia de Lemon Squeezy en el primer inicio para activar.",
        faq3bq: "¿Puedo usar una clave de licencia en más de un PC?",
        faq3ba: "Sí. Puede introducir la misma clave de 16 caracteres una vez en cada uno de hasta dos PC (por ejemplo, trabajo y personal) para usar Peekom Plus en ambos.",
        faq4q: "Aparece una advertencia azul al instalar en Windows.",
        faq4a: 'Las advertencias SmartScreen son comunes en apps sin firmar. Consulte la <a href="#" onclick="openModal(); return false;">guía de instalación</a>: [Más información] → [Ejecutar de todos modos].',
        helpTitle: "Ayuda", helpSub: "Guía de inicio rápido.",
        help1t: "1. Instalar", help1p: "Descargue el instalador para su SO y ejecútelo. SmartScreen puede aparecer en Windows.",
        help2t: "2. Ajustar posición del mango", help2p: "Arrastre el mango del borde derecho a la altura deseada. Pase el cursor para deslizar la nota.",
        help3t: "3. Solo Plus — Modo Pin", help3p: "Haga clic en el mango para fijar la nota. Un retardo de 0.3s evita activaciones accidentales.",
        contactTitle: "Contacto", contactSub: "Envíenos sus comentarios.",
        contactBody: "Para informes de errores, sugerencias o consultas de licencia, escríbanos al correo abajo.",
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "Privacidad",
        guideTitle: "Guía de instalación SmartScreen para Windows",
        step1: 'Al ejecutar el instalador, puede aparecer una ventana azul de SmartScreen que dice <b>"Aplicación no reconocida"</b>.',
        step2: "Haga clic en <b>[Más información]</b> en la parte superior.",
        step3: "Haga clic en <b>[Ejecutar de todos modos]</b> abajo a la derecha para completar la instalación.",
        searchNoResults: "Sin resultados",
        modalClose: "Cerrar"
    },
    fr: {
        navHome: "Accueil", navDownload: "Télécharger", navFaq: "FAQ", navHelp: "Aide", navContact: "Contact",
        searchPlaceholder: "Rechercher...",
        heroTitlePurple: "Peekom", heroTitleYellow: "Plus",
        heroTagline: "Des post-its sur tout le bord de l'écran ? Ils vivent désormais à l'intérieur.<br>Depuis le bord—bureau propre, notes à un simple survol.",
        carouselCap1: "Poignée au bord de l'écran",
        carouselCap2: "Ouvrir la note par clic ou raccourci",
        carouselCap3: "Double écran · Mode Pin",
        detectWin: "Environnement détecté : <strong>Windows</strong> — boutons Windows recommandés ci-dessous.",
        detectMac: "Environnement détecté : <strong>macOS</strong> — boutons macOS recommandés ci-dessous.",
        detectGeneric: "Impossible de détecter le système. Veuillez choisir manuellement.",
        feat1: "Authentification de licence Lemon Squeezy",
        feat2: "Support double écran — sélection de l'écran cible",
        feat3: "Délai de survol anti-accident (0.3s) et mode Pin",
        feat4: "UI texte et couleur personnalisée avec stockage local",
        lblFree: "Peekom Index", lblPlus: "Peekom Plus",
        indexName: "Peekom Index", indexBadge: "Free",
        indexDesc: "Version de base gratuite pour consulter index et notes depuis le bord de l'écran pendant les présentations.",
        plusName: "Peekom Plus", plusBadge: "Plus",
        plusDesc: "Version payante avec double écran, mode Pin, thèmes personnalisés et plus encore.",
        btnWin: "Windows", btnMac: "macOS",
        winGuideBtn: "Une alerte bleue apparaît lors de l'installation sur Windows ?",
        dlTitle: "Télécharger", dlSub: "Choisissez l'installateur pour votre système d'exploitation.",
        dlIndexHeading: "Peekom Index", dlPlusHeading: "Peekom Plus",
        dlIndexWin: "Setup (Windows)", dlIndexMac: "Setup (macOS)",
        dlPlusWin: "Acheter / Télécharger (Windows)", dlPlusMac: "Acheter / Télécharger (macOS)",
        linkChangelog: "Journal des modifications", linkPrev: "Versions précédentes", linkSmartScreen: "Guide SmartScreen",
        faqTitle: "FAQ", faqSub: "Questions fréquentes sur Peekom Index et Peekom Plus.",
        faq1q: "Quelle est la différence entre Peekom Index et Peekom Plus ?",
        faq1a: "Index est la version de base gratuite. Plus ajoute des fonctions premium : sélection d'écran, mode Pin, UI personnalisée et licence Lemon Squeezy.",
        faq2q: "Comment fonctionne le double écran ?",
        faq2a: "Dans Plus, vous pouvez choisir l'écran qui affiche la note dans les Paramètres.",
        faq3q: "Comment activer la licence Plus ?",
        faq3a: "Entrez votre clé de licence Lemon Squeezy au premier lancement pour activer.",
        faq3bq: "Puis-je utiliser une clé de licence sur plusieurs PC ?",
        faq3ba: "Oui. Vous pouvez saisir la même clé à 16 caractères une fois sur chacun de deux PC au maximum (par ex. professionnel et personnel) pour utiliser Peekom Plus sur les deux.",
        faq4q: "Une alerte bleue apparaît lors de l'installation sur Windows.",
        faq4a: 'Les alertes SmartScreen sont courantes pour les apps non signées. Consultez le <a href="#" onclick="openModal(); return false;">guide d\'installation</a> : [Informations complémentaires] → [Exécuter quand même].',
        helpTitle: "Aide", helpSub: "Guide de démarrage rapide.",
        help1t: "1. Installer", help1p: "Téléchargez l'installateur pour votre OS et exécutez-le. SmartScreen peut apparaître sur Windows.",
        help2t: "2. Ajuster la poignée", help2p: "Faites glisser la poignée du bord droit à la hauteur souhaitée. Survolez pour afficher la note.",
        help3t: "3. Plus uniquement — Mode Pin", help3p: "Cliquez sur la poignée pour épingler la note. Un délai de 0.3s évite les déclenchements accidentels.",
        contactTitle: "Contact", contactSub: "Envoyez-nous vos retours.",
        contactBody: "Pour les rapports de bugs, suggestions ou questions de licence, contactez-nous par e-mail ci-dessous.",
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "Confidentialité",
        guideTitle: "Guide d'installation SmartScreen pour Windows",
        step1: 'Lors de l\'exécution de l\'installateur, une fenêtre SmartScreen bleue indiquant <b>« Application non reconnue »</b> peut apparaître.',
        step2: "Cliquez sur <b>[Informations complémentaires]</b> en haut.",
        step3: "Cliquez sur <b>[Exécuter quand même]</b> en bas à droite pour terminer l'installation.",
        searchNoResults: "Aucun résultat",
        modalClose: "Fermer"
    },
    de: {
        navHome: "Start", navDownload: "Download", navFaq: "FAQ", navHelp: "Hilfe", navContact: "Kontakt",
        searchPlaceholder: "Suchen...",
        heroTitlePurple: "Peekom", heroTitleYellow: "Plus",
        heroTagline: "Post-its am Monitorrand? Sie sind jetzt im Bildschirm.<br>Schauen am Rand hervor—Schreibtisch sauber, Notizen einen Hover entfernt.",
        carouselCap1: "Griff am Monitorrand",
        carouselCap2: "Notiz per Klick oder Tastenkürzel öffnen",
        carouselCap3: "Dual-Monitor · Pin-Modus",
        detectWin: "Erkanntes System: <strong>Windows</strong> — Windows-Schaltflächen unten empfohlen.",
        detectMac: "Erkanntes System: <strong>macOS</strong> — macOS-Schaltflächen unten empfohlen.",
        detectGeneric: "Betriebssystem konnte nicht erkannt werden. Bitte manuell wählen.",
        feat1: "Lemon Squeezy Lizenz-Authentifizierung",
        feat2: "Dual-Monitor-Unterstützung — Zielmonitor wählbar",
        feat3: "Anti-Unfall-Hover-Verzögerung (0.3s) & Pin-Modus",
        feat4: "Anpassbare Text- & Farb-UI mit lokalem Speicher",
        lblFree: "Peekom Index", lblPlus: "Peekom Plus",
        indexName: "Peekom Index", indexBadge: "Free",
        indexDesc: "Kostenlose Basisversion — Inhaltsverzeichnis und Notizen am Bildschirmrand während Präsentationen einsehen.",
        plusName: "Peekom Plus", plusBadge: "Plus",
        plusDesc: "Kostenpflichtige Version mit Dual-Monitor, Pin-Modus, benutzerdefinierten Themes und mehr.",
        btnWin: "Windows", btnMac: "macOS",
        winGuideBtn: "Erscheint eine blaue Warnung bei der Windows-Installation?",
        dlTitle: "Download", dlSub: "Wählen Sie das Installationsprogramm für Ihr Betriebssystem.",
        dlIndexHeading: "Peekom Index", dlPlusHeading: "Peekom Plus",
        dlIndexWin: "Setup (Windows)", dlIndexMac: "Setup (macOS)",
        dlPlusWin: "Kaufen / Download (Windows)", dlPlusMac: "Kaufen / Download (macOS)",
        linkChangelog: "Änderungsprotokoll", linkPrev: "Frühere Versionen", linkSmartScreen: "SmartScreen-Anleitung",
        faqTitle: "FAQ", faqSub: "Häufige Fragen zu Peekom Index und Peekom Plus.",
        faq1q: "Was ist der Unterschied zwischen Peekom Index und Peekom Plus?",
        faq1a: "Index ist die kostenlose Basisversion. Plus bietet Premium-Funktionen: Monitorauswahl, Pin-Modus, angepasste UI und Lemon Squeezy-Lizenz.",
        faq2q: "Wie funktioniert die Dual-Monitor-Unterstützung?",
        faq2a: "In Plus können Sie in den Einstellungen den Monitor für die Hinweis-Notiz wählen.",
        faq3q: "Wie wird die Plus-Lizenz aktiviert?",
        faq3a: "Geben Sie beim ersten Start Ihren Lemon Squeezy-Lizenzschlüssel ein.",
        faq3bq: "Kann ich einen Lizenzschlüssel auf mehreren PCs nutzen?",
        faq3ba: "Ja. Derselbe 16-stellige Lizenzschlüssel kann einmal auf bis zu zwei PCs (z. B. Arbeits- und Privat-PC) eingegeben werden, um Peekom Plus auf beiden zu nutzen.",
        faq4q: "Bei der Windows-Installation erscheint eine blaue Warnung.",
        faq4a: 'SmartScreen-Warnungen sind bei unsignierten Apps üblich. Siehe <a href="#" onclick="openModal(); return false;">Installationsanleitung</a>: [Weitere Informationen] → [Trotzdem ausführen].',
        helpTitle: "Hilfe", helpSub: "Schnellstart-Anleitung.",
        help1t: "1. Installation", help1p: "Laden Sie das Installationsprogramm für Ihr OS herunter und führen Sie es aus. SmartScreen kann unter Windows erscheinen.",
        help2t: "2. Griffposition anpassen", help2p: "Ziehen Sie den Griff am rechten Rand auf die gewünschte Höhe. Beim Hover gleitet die Notiz heraus.",
        help3t: "3. Nur Plus — Pin-Modus", help3p: "Klicken Sie auf den Griff, um die Notiz zu fixieren. Eine 0.3s-Verzögerung verhindert Fehlaktivierungen.",
        contactTitle: "Kontakt", contactSub: "Senden Sie uns Ihr Feedback.",
        contactBody: "Für Fehlerberichte, Vorschläge oder Lizenzfragen kontaktieren Sie uns per E-Mail unten.",
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "Datenschutz",
        guideTitle: "Windows SmartScreen Installationsanleitung",
        step1: 'Beim Ausführen des Installers kann ein blaues SmartScreen-Fenster mit <b>„Unbekannte App"</b> erscheinen.',
        step2: "Klicken Sie oben auf <b>[Weitere Informationen]</b>.",
        step3: "Klicken Sie unten rechts auf <b>[Trotzdem ausführen]</b>, um die Installation abzuschließen.",
        searchNoResults: "Keine Ergebnisse",
        modalClose: "Schließen"
    },
    pt: {
        navHome: "Início", navDownload: "Download", navFaq: "Perguntas", navHelp: "Ajuda", navContact: "Contato",
        searchPlaceholder: "Pesquisar...",
        heroTitlePurple: "Peekom", heroTitleYellow: "Plus",
        heroTagline: "Post-its colados na borda do monitor? Agora ficam dentro da tela.<br>Espreitam da borda—mesa limpa, notas a um hover de distância.",
        carouselCap1: "Alça na borda do monitor",
        carouselCap2: "Abrir nota por clique ou atalho",
        carouselCap3: "Dual monitor · Modo Pin",
        detectWin: "Ambiente detectado: <strong>Windows</strong> — botões Windows recomendados abaixo.",
        detectMac: "Ambiente detectado: <strong>macOS</strong> — botões macOS recomendados abaixo.",
        detectGeneric: "Não foi possível detectar o sistema operacional. Escolha manualmente.",
        feat1: "Autenticação de licença Lemon Squeezy",
        feat2: "Suporte a dual monitor — seleção de monitor alvo",
        feat3: "Atraso de hover anti-acidente (0.3s) e modo Pin",
        feat4: "UI personalizada de texto e cor com armazenamento local",
        lblFree: "Peekom Index", lblPlus: "Peekom Plus",
        indexName: "Peekom Index", indexBadge: "Free",
        indexDesc: "Versão básica gratuita para consultar índices e notas na borda do monitor durante apresentações.",
        plusName: "Peekom Plus", plusBadge: "Plus",
        plusDesc: "Versão paga com dual monitor, modo Pin, temas personalizados e muito mais.",
        btnWin: "Windows", btnMac: "macOS",
        winGuideBtn: "Aparece um aviso azul ao instalar no Windows?",
        dlTitle: "Download", dlSub: "Escolha o instalador para o seu sistema operacional.",
        dlIndexHeading: "Peekom Index", dlPlusHeading: "Peekom Plus",
        dlIndexWin: "Setup (Windows)", dlIndexMac: "Setup (macOS)",
        dlPlusWin: "Comprar / Baixar (Windows)", dlPlusMac: "Comprar / Baixar (macOS)",
        linkChangelog: "Registro de alterações", linkPrev: "Versões anteriores", linkSmartScreen: "Guia SmartScreen",
        faqTitle: "Perguntas frequentes", faqSub: "Perguntas comuns sobre Peekom Index e Peekom Plus.",
        faq1q: "Qual é a diferença entre Peekom Index e Peekom Plus?",
        faq1a: "Index é a versão básica gratuita. Plus adiciona recursos premium: seleção de monitor, modo Pin, UI personalizada e licença Lemon Squeezy.",
        faq2q: "Como funciona o suporte a dual monitor?",
        faq2a: "No Plus, você pode escolher qual monitor exibe a nota de dicas nas Configurações.",
        faq3q: "Como ativar a licença Plus?",
        faq3a: "Insira sua chave de licença Lemon Squeezy na primeira execução para ativar.",
        faq3bq: "Posso usar uma chave de licença em mais de um PC?",
        faq3ba: "Sim. Você pode inserir a mesma chave de 16 caracteres uma vez em cada um de até dois PCs (por exemplo, trabalho e pessoal) para usar o Peekom Plus em ambos.",
        faq4q: "Um aviso azul aparece ao instalar no Windows.",
        faq4a: 'Avisos SmartScreen são comuns em apps não assinados. Consulte o <a href="#" onclick="openModal(); return false;">guia de instalação</a>: [Mais informações] → [Executar mesmo assim].',
        helpTitle: "Ajuda", helpSub: "Guia de início rápido.",
        help1t: "1. Instalar", help1p: "Baixe o instalador para seu SO e execute. SmartScreen pode aparecer no Windows.",
        help2t: "2. Ajustar posição da alça", help2p: "Arraste a alça na borda direita para a altura desejada. Passe o mouse para deslizar a nota.",
        help3t: "3. Somente Plus — Modo Pin", help3p: "Clique na alça para fixar a nota. Um atraso de 0.3s evita acionamentos acidentais.",
        contactTitle: "Contato", contactSub: "Envie seu feedback.",
        contactBody: "Para relatórios de bugs, sugestões ou dúvidas de licença, entre em contato pelo e-mail abaixo.",
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "Privacidade",
        guideTitle: "Guia de instalação SmartScreen para Windows",
        step1: 'Ao executar o instalador, pode aparecer uma janela azul do SmartScreen dizendo <b>"Aplicativo não reconhecido"</b>.',
        step2: "Clique em <b>[Mais informações]</b> na parte superior.",
        step3: "Clique em <b>[Executar mesmo assim]</b> no canto inferior direito para concluir a instalação.",
        searchNoResults: "Nenhum resultado",
        modalClose: "Fechar"
    },
    it: {
        navHome: "Home", navDownload: "Download", navFaq: "FAQ", navHelp: "Aiuto", navContact: "Contatti",
        searchPlaceholder: "Cerca...",
        heroTitlePurple: "Peekom", heroTitleYellow: "Plus",
        heroTagline: "Post-it affollati sul bordo del monitor? Ora vivono dentro lo schermo.<br>Spuntano dal bordo—scrivania pulita, note a un hover di distanza.",
        carouselCap1: "Maniglia sul bordo del monitor",
        carouselCap2: "Apri nota con clic o scorciatoia",
        carouselCap3: "Dual monitor · Modalità Pin",
        detectWin: "Ambiente rilevato: <strong>Windows</strong> — pulsanti Windows consigliati sotto.",
        detectMac: "Ambiente rilevato: <strong>macOS</strong> — pulsanti macOS consigliati sotto.",
        detectGeneric: "Impossibile rilevare il sistema operativo. Scegli manualmente.",
        feat1: "Autenticazione licenza Lemon Squeezy",
        feat2: "Supporto dual monitor — selezione monitor di destinazione",
        feat3: "Ritardo hover anti-errore (0.3s) e modalità Pin",
        feat4: "UI personalizzata testo e colore con archivio locale",
        lblFree: "Peekom Index", lblPlus: "Peekom Plus",
        indexName: "Peekom Index", indexBadge: "Free",
        indexDesc: "Versione base gratuita per consultare indici e note dal bordo del monitor durante le presentazioni.",
        plusName: "Peekom Plus", plusBadge: "Plus",
        plusDesc: "Versione a pagamento con dual monitor, modalità Pin, temi personalizzati e altro.",
        btnWin: "Windows", btnMac: "macOS",
        winGuideBtn: "Compare un avviso blu durante l'installazione su Windows?",
        dlTitle: "Download", dlSub: "Scegli l'installer per il tuo sistema operativo.",
        dlIndexHeading: "Peekom Index", dlPlusHeading: "Peekom Plus",
        dlIndexWin: "Setup (Windows)", dlIndexMac: "Setup (macOS)",
        dlPlusWin: "Acquista / Scarica (Windows)", dlPlusMac: "Acquista / Scarica (macOS)",
        linkChangelog: "Registro modifiche", linkPrev: "Versioni precedenti", linkSmartScreen: "Guida SmartScreen",
        faqTitle: "FAQ", faqSub: "Domande frequenti su Peekom Index e Peekom Plus.",
        faq1q: "Qual è la differenza tra Peekom Index e Peekom Plus?",
        faq1a: "Index è la versione base gratuita. Plus aggiunge funzioni premium: selezione monitor, modalità Pin, UI personalizzata e licenza Lemon Squeezy.",
        faq2q: "Come funziona il supporto dual monitor?",
        faq2a: "In Plus, puoi scegliere quale monitor mostra la nota nelle Impostazioni.",
        faq3q: "Come si attiva la licenza Plus?",
        faq3a: "Inserisci la chiave di licenza Lemon Squeezy al primo avvio per attivare.",
        faq3bq: "Posso usare una chiave di licenza su più PC?",
        faq3ba: "Sì. Puoi inserire la stessa chiave a 16 caratteri una volta su ciascuno di massimo due PC (ad es. lavoro e personale) per usare Peekom Plus su entrambi.",
        faq4q: "Compare un avviso blu durante l'installazione su Windows.",
        faq4a: 'Gli avvisi SmartScreen sono comuni per app non firmate. Consulta la <a href="#" onclick="openModal(); return false;">guida all\'installazione</a>: [Ulteriori informazioni] → [Esegui comunque].',
        helpTitle: "Aiuto", helpSub: "Guida rapida.",
        help1t: "1. Installazione", help1p: "Scarica l'installer per il tuo SO ed eseguilo. SmartScreen può apparire su Windows.",
        help2t: "2. Regola posizione della maniglia", help2p: "Trascina la maniglia sul bordo destro all'altezza desiderata. Passa il mouse per far scorrere la nota.",
        help3t: "3. Solo Plus — Modalità Pin", help3p: "Clicca la maniglia per fissare la nota. Un ritardo di 0.3s evita attivazioni accidentali.",
        contactTitle: "Contatti", contactSub: "Inviaci il tuo feedback.",
        contactBody: "Per segnalazioni bug, suggerimenti o domande sulla licenza, contattaci via e-mail sotto.",
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "Privacy",
        guideTitle: "Guida installazione SmartScreen per Windows",
        step1: 'Eseguendo l\'installer, può apparire una finestra SmartScreen blu con <b>"App non riconosciuta"</b>.',
        step2: "Clicca su <b>[Ulteriori informazioni]</b> in alto.",
        step3: "Clicca su <b>[Esegui comunque]</b> in basso a destra per completare l'installazione.",
        searchNoResults: "Nessun risultato",
        modalClose: "Chiudi"
    },
    ru: {
        navHome: "Главная", navDownload: "Загрузка", navFaq: "Вопросы", navHelp: "Справка", navContact: "Контакты",
        searchPlaceholder: "Поиск...",
        heroTitlePurple: "Peekom", heroTitleYellow: "Plus",
        heroTagline: "Стикеры на рамке монитора? Теперь они внутри экрана.<br>Выглядывают с края—стол чист, заметки на расстоянии наведения.",
        carouselCap1: "Ручка у края монитора",
        carouselCap2: "Открыть заметку кликом или сочетанием клавиш",
        carouselCap3: "Два монитора · Режим Pin",
        detectWin: "Обнаружена система: <strong>Windows</strong> — рекомендуются кнопки Windows ниже.",
        detectMac: "Обнаружена система: <strong>macOS</strong> — рекомендуются кнопки macOS ниже.",
        detectGeneric: "Не удалось определить ОС. Выберите вручную.",
        feat1: "Аутентификация лицензии Lemon Squeezy",
        feat2: "Поддержка двух мониторов — выбор целевого монитора",
        feat3: "Задержка наведения 0.3с против случайных срабатываний и режим Pin",
        feat4: "Настраиваемый текст и цвет UI с локальным хранилищем",
        lblFree: "Peekom Index", lblPlus: "Peekom Plus",
        indexName: "Peekom Index", indexBadge: "Free",
        indexDesc: "Бесплатная базовая версия — просмотр оглавления и заметок с края монитора во время презентаций.",
        plusName: "Peekom Plus", plusBadge: "Plus",
        plusDesc: "Платная версия с двумя мониторами, режимом Pin, пользовательскими темами и другим.",
        btnWin: "Windows", btnMac: "macOS",
        winGuideBtn: "Появляется синее предупреждение при установке в Windows?",
        dlTitle: "Загрузка", dlSub: "Выберите установщик для вашей операционной системы.",
        dlIndexHeading: "Peekom Index", dlPlusHeading: "Peekom Plus",
        dlIndexWin: "Setup (Windows)", dlIndexMac: "Setup (macOS)",
        dlPlusWin: "Купить / Скачать (Windows)", dlPlusMac: "Купить / Скачать (macOS)",
        linkChangelog: "История изменений", linkPrev: "Предыдущие версии", linkSmartScreen: "Руководство SmartScreen",
        faqTitle: "Частые вопросы", faqSub: "Частые вопросы о Peekom Index и Peekom Plus.",
        faq1q: "В чём разница между Peekom Index и Peekom Plus?",
        faq1a: "Index — бесплатная базовая версия. Plus добавляет премиум-функции: выбор монитора, режим Pin, настраиваемый UI и лицензию Lemon Squeezy.",
        faq2q: "Как работает поддержка двух мониторов?",
        faq2a: "В Plus можно выбрать монитор для отображения подсказки в настройках.",
        faq3q: "Как активировать лицензию Plus?",
        faq3a: "Введите ключ лицензии Lemon Squeezy при первом запуске.",
        faq3bq: "Можно ли использовать один ключ лицензии на нескольких ПК?",
        faq3ba: "Да. Один и тот же 16-значный ключ можно ввести по одному разу на каждом из двух ПК (например, рабочем и личном) для использования Peekom Plus на обоих.",
        faq4q: "При установке в Windows появляется синее предупреждение.",
        faq4a: 'Предупреждения SmartScreen часты для неподписанных приложений. См. <a href="#" onclick="openModal(); return false;">руководство по установке</a>: [Подробнее] → [Выполнить в любом случае].',
        helpTitle: "Справка", helpSub: "Краткое руководство.",
        help1t: "1. Установка", help1p: "Скачайте установщик для вашей ОС и запустите. В Windows может появиться SmartScreen.",
        help2t: "2. Настройка положения ручки", help2p: "Перетащите ручку на правом краю на нужную высоту. При наведении заметка выезжает.",
        help3t: "3. Только Plus — Режим Pin", help3p: "Нажмите на ручку, чтобы закрепить заметку. Задержка 0.3с предотвращает случайные срабатывания.",
        contactTitle: "Контакты", contactSub: "Отправьте нам отзыв.",
        contactBody: "По ошибкам, предложениям или вопросам лицензии пишите на e-mail ниже.",
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "Конфиденциальность",
        guideTitle: "Руководство по установке SmartScreen для Windows",
        step1: 'При запуске установщика может появиться синее окно SmartScreen с текстом <b>«Непроверенное приложение»</b>.',
        step2: "Нажмите <b>[Дополнительные сведения]</b> вверху.",
        step3: "Нажмите <b>[Выполнить в любом случае]</b> внизу справа для завершения установки.",
        searchNoResults: "Нет результатов",
        modalClose: "Закрыть"
    },
    vi: {
        navHome: "Trang chủ", navDownload: "Tải xuống", navFaq: "Hỏi đáp", navHelp: "Trợ giúp", navContact: "Liên hệ",
        searchPlaceholder: "Tìm kiếm...",
        heroTitlePurple: "Peekom", heroTitleYellow: "Plus",
        heroTagline: "Giấy nhớ dán kín mép màn hình? Giờ chúng ở trong màn hình.<br>Nhô từ mép—bàn gọn gàng, ghi chú chỉ cách một hover.",
        carouselCap1: "Tay cầm ở mép màn hình",
        carouselCap2: "Mở ghi chú bằng nhấp hoặc phím tắt",
        carouselCap3: "Hai màn hình · Chế độ Pin",
        detectWin: "Môi trường phát hiện: <strong>Windows</strong> — nên dùng nút Windows bên dưới.",
        detectMac: "Môi trường phát hiện: <strong>macOS</strong> — nên dùng nút macOS bên dưới.",
        detectGeneric: "Không thể tự động phát hiện hệ điều hành. Vui lòng chọn thủ công.",
        feat1: "Xác thực giấy phép Lemon Squeezy",
        feat2: "Hỗ trợ hai màn hình — chọn màn hình đích",
        feat3: "Độ trễ hover chống nhầm (0.3s) & chế độ Pin",
        feat4: "Giao diện tùy chỉnh văn bản & màu với lưu trữ cục bộ",
        lblFree: "Peekom Index", lblPlus: "Peekom Plus",
        indexName: "Peekom Index", indexBadge: "Free",
        indexDesc: "Phiên bản cơ bản miễn phí — xem mục lục và ghi chú từ cạnh màn hình khi thuyết trình.",
        plusName: "Peekom Plus", plusBadge: "Plus",
        plusDesc: "Phiên bản trả phí với hai màn hình, chế độ Pin, giao diện tùy chỉnh và hơn thế nữa.",
        btnWin: "Windows", btnMac: "macOS",
        winGuideBtn: "Có cảnh báo xanh khi cài trên Windows?",
        dlTitle: "Tải xuống", dlSub: "Chọn trình cài đặt phù hợp với hệ điều hành của bạn.",
        dlIndexHeading: "Peekom Index", dlPlusHeading: "Peekom Plus",
        dlIndexWin: "Setup (Windows)", dlIndexMac: "Setup (macOS)",
        dlPlusWin: "Mua / Tải (Windows)", dlPlusMac: "Mua / Tải (macOS)",
        linkChangelog: "Nhật ký thay đổi", linkPrev: "Phiên bản cũ", linkSmartScreen: "Hướng dẫn SmartScreen",
        faqTitle: "Hỏi đáp", faqSub: "Câu hỏi thường gặp về Peekom Index và Peekom Plus.",
        faq1q: "Peekom Index và Peekom Plus khác nhau thế nào?",
        faq1a: "Index là phiên bản cơ bản miễn phí. Plus thêm tính năng cao cấp: chọn màn hình, chế độ Pin, giao diện tùy chỉnh và giấy phép Lemon Squeezy.",
        faq2q: "Hỗ trợ hai màn hình hoạt động ra sao?",
        faq2a: "Trong Plus, bạn có thể chọn màn hình hiển thị ghi chú gợi ý trong Cài đặt.",
        faq3q: "Làm sao kích hoạt giấy phép Plus?",
        faq3a: "Nhập khóa giấy phép Lemon Squeezy khi khởi chạy lần đầu để kích hoạt.",
        faq3bq: "Tôi có thể dùng một khóa giấy phép trên nhiều PC không?",
        faq3ba: "Có. Bạn có thể nhập cùng một khóa 16 ký tự một lần trên mỗi PC, tối đa hai máy (ví dụ PC công việc và PC cá nhân), để dùng Peekom Plus trên cả hai.",
        faq4q: "Cảnh báo xanh xuất hiện khi cài trên Windows.",
        faq4a: 'Cảnh báo SmartScreen thường gặp với ứng dụng chưa ký. Xem <a href="#" onclick="openModal(); return false;">hướng dẫn cài đặt</a>: [Thông tin thêm] → [Vẫn chạy].',
        helpTitle: "Trợ giúp", helpSub: "Hướng dẫn bắt đầu nhanh.",
        help1t: "1. Cài đặt", help1p: "Tải trình cài đặt cho hệ điều hành và chạy. SmartScreen có thể xuất hiện trên Windows.",
        help2t: "2. Điều chỉnh vị trí tay cầm", help2p: "Kéo tay cầm ở cạnh phải đến chiều cao mong muốn. Di chuột để trượt ghi chú ra.",
        help3t: "3. Chỉ Plus — Chế độ Pin", help3p: "Nhấp tay cầm để ghim ghi chú. Độ trễ 0.3s tránh kích hoạt nhầm.",
        contactTitle: "Liên hệ", contactSub: "Gửi phản hồi cho chúng tôi.",
        contactBody: "Báo lỗi, đề xuất tính năng hoặc hỏi giấy phép qua email bên dưới.",
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "Quyền riêng tư",
        guideTitle: "Hướng dẫn cài SmartScreen trên Windows",
        step1: 'Khi chạy trình cài, có thể xuất hiện cửa sổ SmartScreen xanh với <b>"Ứng dụng không nhận dạng"</b>.',
        step2: "Nhấp <b>[Thông tin thêm]</b> ở phía trên.",
        step3: "Nhấp <b>[Vẫn chạy]</b> ở góc dưới phải để hoàn tất cài đặt.",
        searchNoResults: "Không có kết quả",
        modalClose: "Đóng"
    },
    th: {
        navHome: "หน้าแรก", navDownload: "ดาวน์โหลด", navFaq: "คำถาม", navHelp: "ความช่วยเหลือ", navContact: "ติดต่อ",
        searchPlaceholder: "ค้นหา...",
        heroTitlePurple: "Peekom", heroTitleYellow: "Plus",
        heroTagline: "โพสต์อิตเต็มขอบจอ? ย้ายเข้าไปในหน้าจอแล้ว<br>โผล่จากขอบ—โต๊ะสะอาด โน้ตอยู่แค่โฮเวอร์เดียว",
        carouselCap1: "ที่จับที่ขอบจอ",
        carouselCap2: "เปิดบันทึกด้วยคลิกหรือปุ่มลัด",
        carouselCap3: "จอคู่ · โหมด Pin",
        detectWin: "ตรวจพบ: <strong>Windows</strong> — แนะนำปุ่ม Windows ด้านล่าง",
        detectMac: "ตรวจพบ: <strong>macOS</strong> — แนะนำปุ่ม macOS ด้านล่าง",
        detectGeneric: "ไม่สามารถตรวจจับระบบปฏิบัติการได้ กรุณาเลือกเอง",
        feat1: "การยืนยันใบอนุญาต Lemon Squeezy",
        feat2: "รองรับ dual monitor — เลือกจอเป้าหมายได้",
        feat3: "หน่วง hover ป้องกันการกดผิด (0.3s) & โหมด Pin",
        feat4: "UI ปรับข้อความและสี & เก็บข้อมูลในเครื่อง",
        lblFree: "Peekom Index", lblPlus: "Peekom Plus",
        indexName: "Peekom Index", indexBadge: "Free",
        indexDesc: "เวอร์ชันพื้นฐานฟรี — ดูสารบัญและบันทึกจากขอบจอระหว่างนำเสนอ",
        plusName: "Peekom Plus", plusBadge: "Plus",
        plusDesc: "เวอร์ชันเสียเงินพร้อม dual monitor โหมด Pin ธีมกำหนดเอง และอื่นๆ",
        btnWin: "Windows", btnMac: "macOS",
        winGuideBtn: "มีหน้าต่างเตือนสีฟ้าเมื่อติดตั้งบน Windows?",
        dlTitle: "ดาวน์โหลด", dlSub: "เลือกตัวติดตั้งสำหรับระบบปฏิบัติการของคุณ",
        dlIndexHeading: "Peekom Index", dlPlusHeading: "Peekom Plus",
        dlIndexWin: "Setup (Windows)", dlIndexMac: "Setup (macOS)",
        dlPlusWin: "ซื้อ / ดาวน์โหลด (Windows)", dlPlusMac: "ซื้อ / ดาวน์โหลด (macOS)",
        linkChangelog: "บันทึกการเปลี่ยนแปลง", linkPrev: "เวอร์ชันก่อนหน้า", linkSmartScreen: "คู่มือ SmartScreen",
        faqTitle: "คำถามที่พบบ่อย", faqSub: "คำถามเกี่ยวกับ Peekom Index และ Peekom Plus",
        faq1q: "Peekom Index กับ Peekom Plus ต่างกันอย่างไร?",
        faq1a: "Index เป็นเวอร์ชันพื้นฐานฟรี Plus เพิ่มฟีเจอร์พรีเมียม: เลือกจอ โหมด Pin UI กำหนดเอง และใบอนุญาต Lemon Squeezy",
        faq2q: "dual monitor ทำงานอย่างไร?",
        faq2a: "ใน Plus คุณเลือกจอที่แสดงบันทึกคำใบ้ได้ในการตั้งค่า",
        faq3q: "เปิดใช้ใบอนุญาต Plus อย่างไร?",
        faq3a: "ใส่คีย์ใบอนุญาต Lemon Squeezy เมื่อเปิดใช้ครั้งแรก",
        faq3bq: "ใช้คีย์ใบอนุญาตเดียวกันบนหลายเครื่องได้ไหม?",
        faq3ba: "ได้ คุณสามารถใส่คีย์ 16 หลักเดียวกันครั้งละหนึ่งครั้งบนแต่ละเครื่อง สูงสุด 2 เครื่อง (เช่น PC ที่ทำงานและ PC ส่วนตัว) เพื่อใช้ Peekom Plus บนทั้งสองเครื่อง",
        faq4q: "มีหน้าต่างเตือนสีฟ้าเมื่อติดตั้งบน Windows",
        faq4a: 'คำเตือน SmartScreen พบได้บ่อยในแอปที่ไม่ได้ลงนาม ดู<a href="#" onclick="openModal(); return false;">คู่มือติดตั้ง</a>: [ข้อมูลเพิ่มเติม] → [เรียกใช้อยู่ดี]',
        helpTitle: "ความช่วยเหลือ", helpSub: "คู่มือเริ่มต้นอย่างรวดเร็ว",
        help1t: "1. ติดตั้ง", help1p: "ดาวน์โหลดตัวติดตั้งสำหรับ OS ของคุณและรัน SmartScreen อาจปรากฏบน Windows",
        help2t: "2. ปรับตำแหน่งที่จับ", help2p: "ลากที่จับที่ขอบขวาไปยังความสูงที่ต้องการ โฮเวอร์เพื่อเลื่อนบันทึกออก",
        help3t: "3. Plus เท่านั้น — โหมด Pin", help3p: "คลิกที่จับเพื่อปักหมุดบันทึก หน่วง 0.3 วินาทีป้องกันการกดผิด",
        contactTitle: "ติดต่อ", contactSub: "ส่งความคิดเห็นถึงเรา",
        contactBody: "รายงานข้อผิดพลาด ข้อเสนอแนะ หรือสอบถามใบอนุญาตทางอีเมลด้านล่าง",
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "ความเป็นส่วนตัว",
        guideTitle: "คู่มือติดตั้ง SmartScreen บน Windows",
        step1: 'เมื่อรันตัวติดตั้ง อาจมีหน้าต่าง SmartScreen สีฟ้าที่ระบุ <b>"แอปที่ไม่รู้จัก"</b>',
        step2: "คลิก <b>[ข้อมูลเพิ่มเติม]</b> ด้านบน",
        step3: "คลิก <b>[เรียกใช้อยู่ดี]</b> มุมล่างขวาเพื่อติดตั้งให้เสร็จ",
        searchNoResults: "ไม่พบผลลัพธ์",
        modalClose: "ปิด"
    },
    id: {
        navHome: "Beranda", navDownload: "Unduh", navFaq: "FAQ", navHelp: "Bantuan", navContact: "Kontak",
        searchPlaceholder: "Cari...",
        heroTitlePurple: "Peekom", heroTitleYellow: "Plus",
        heroTagline: "Post-it di tepi monitor? Sekarang ada di dalam layar.<br>Mengintip dari tepi—meja rapi, catatan sejauh satu hover.",
        carouselCap1: "Pegangan di tepi monitor",
        carouselCap2: "Buka catatan lewat klik atau pintasan",
        carouselCap3: "Dual monitor · Mode Pin",
        detectWin: "Terdeteksi: <strong>Windows</strong> — tombol Windows di bawah direkomendasikan.",
        detectMac: "Terdeteksi: <strong>macOS</strong> — tombol macOS di bawah direkomendasikan.",
        detectGeneric: "Tidak dapat mendeteksi OS. Silakan pilih manual.",
        feat1: "Autentikasi lisensi Lemon Squeezy",
        feat2: "Dukungan dual monitor — pilih monitor target",
        feat3: "Penundaan hover anti-salah (0.3s) & mode Pin",
        feat4: "UI teks & warna kustom dengan penyimpanan lokal",
        lblFree: "Peekom Index", lblPlus: "Peekom Plus",
        indexName: "Peekom Index", indexBadge: "Free",
        indexDesc: "Versi dasar gratis — lihat indeks dan catatan dari tepi monitor saat presentasi.",
        plusName: "Peekom Plus", plusBadge: "Plus",
        plusDesc: "Versi berbayar dengan dual monitor, mode Pin, tema kustom, dan lainnya.",
        btnWin: "Windows", btnMac: "macOS",
        winGuideBtn: "Muncul peringatan biru saat instal di Windows?",
        dlTitle: "Unduh", dlSub: "Pilih installer untuk sistem operasi Anda.",
        dlIndexHeading: "Peekom Index", dlPlusHeading: "Peekom Plus",
        dlIndexWin: "Setup (Windows)", dlIndexMac: "Setup (macOS)",
        dlPlusWin: "Beli / Unduh (Windows)", dlPlusMac: "Beli / Unduh (macOS)",
        linkChangelog: "Catatan perubahan", linkPrev: "Versi sebelumnya", linkSmartScreen: "Panduan SmartScreen",
        faqTitle: "FAQ", faqSub: "Pertanyaan umum tentang Peekom Index dan Peekom Plus.",
        faq1q: "Apa beda Peekom Index dan Peekom Plus?",
        faq1a: "Index adalah versi dasar gratis. Plus menambah fitur premium: pilihan monitor, mode Pin, UI kustom, dan lisensi Lemon Squeezy.",
        faq2q: "Bagaimana dukungan dual monitor bekerja?",
        faq2a: "Di Plus, Anda bisa memilih monitor yang menampilkan catatan petunjuk di Pengaturan.",
        faq3q: "Bagaimana mengaktifkan lisensi Plus?",
        faq3a: "Masukkan kunci lisensi Lemon Squeezy saat pertama kali dijalankan.",
        faq3bq: "Bisakah satu kunci lisensi dipakai di lebih dari satu PC?",
        faq3ba: "Ya. Kunci 16 karakter yang sama dapat dimasukkan sekali di masing-masing hingga dua PC (misalnya PC kantor dan pribadi) untuk menggunakan Peekom Plus di keduanya.",
        faq4q: "Peringatan biru muncul saat instal di Windows.",
        faq4a: 'Peringatan SmartScreen umum pada aplikasi tanpa tanda tangan. Lihat <a href="#" onclick="openModal(); return false;">panduan instal</a>: [Info lebih lanjut] → [Jalankan tetap].',
        helpTitle: "Bantuan", helpSub: "Panduan memulai cepat.",
        help1t: "1. Instal", help1p: "Unduh installer untuk OS Anda dan jalankan. SmartScreen mungkin muncul di Windows.",
        help2t: "2. Atur posisi pegangan", help2p: "Seret pegangan di tepi kanan ke ketinggian yang diinginkan. Hover untuk menampilkan catatan.",
        help3t: "3. Plus saja — Mode Pin", help3p: "Klik pegangan untuk pin catatan. Penundaan 0.3s mencegah pemicu tidak sengaja.",
        contactTitle: "Kontak", contactSub: "Kirim masukan Anda.",
        contactBody: "Untuk laporan bug, saran, atau pertanyaan lisensi, hubungi kami via email di bawah.",
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "Privasi",
        guideTitle: "Panduan instal SmartScreen Windows",
        step1: 'Saat menjalankan installer, jendela SmartScreen biru dengan <b>"Aplikasi tidak dikenal"</b> mungkin muncul.',
        step2: "Klik <b>[Info lebih lanjut]</b> di bagian atas.",
        step3: "Klik <b>[Jalankan tetap]</b> di kanan bawah untuk menyelesaikan instalasi.",
        searchNoResults: "Tidak ada hasil",
        modalClose: "Tutup"
    },
    hi: {
        navHome: "होम", navDownload: "डाउनलोड", navFaq: "सामान्य प्रश्न", navHelp: "सहायता", navContact: "संपर्क",
        searchPlaceholder: "खोजें...",
        heroTitlePurple: "Peekom", heroTitleYellow: "Plus",
        heroTagline: "मॉनिटर किनारे चिपके पोस्ट-इट? अब वे स्क्रीन के अंदर हैं।<br>किनारे से झाँकती नोट—मेज साफ, काम की लय बनी रहे।",
        carouselCap1: "मॉनिटर किनारे पर हैंडल",
        carouselCap2: "क्लिक या शॉर्टकट से नोट खोलें",
        carouselCap3: "डुअल मॉनिटर · Pin मोड",
        detectWin: "पता चला: <strong>Windows</strong> — नीचे Windows बटन अनुशंसित।",
        detectMac: "पता चला: <strong>macOS</strong> — नीचे macOS बटन अनुशंसित।",
        detectGeneric: "OS का पता नहीं लगाया जा सका। कृपया मैन्युअल चुनें।",
        feat1: "Lemon Squeezy लाइसेंस प्रमाणीकरण",
        feat2: "डुअल मॉनिटर समर्थन — लक्ष्य मॉनिटर चुनें",
        feat3: "गलती-रोधी होवर विलंब (0.3s) और Pin मोड",
        feat4: "कस्टम टेक्स्ट और रंग UI व स्थानीय संग्रहण",
        lblFree: "Peekom Index", lblPlus: "Peekom Plus",
        indexName: "Peekom Index", indexBadge: "Free",
        indexDesc: "मुफ़्त बुनियादी संस्करण — प्रस्तुति के दौरान मॉनिटर किनारे से अनुक्रमणिका और नोट देखें।",
        plusName: "Peekom Plus", plusBadge: "Plus",
        plusDesc: "डुअल मॉनिटर, Pin मोड, कस्टम थीम आदि के साथ सशुल्क संस्करण।",
        btnWin: "Windows", btnMac: "macOS",
        winGuideBtn: "Windows पर इंस्टॉल करते समय नीली चेतावनी दिखती है?",
        dlTitle: "डाउनलोड", dlSub: "अपने OS के लिए इंस्टॉलर चुनें।",
        dlIndexHeading: "Peekom Index", dlPlusHeading: "Peekom Plus",
        dlIndexWin: "Setup (Windows)", dlIndexMac: "Setup (macOS)",
        dlPlusWin: "खरीदें / डाउनलोड (Windows)", dlPlusMac: "खरीदें / डाउनलोड (macOS)",
        linkChangelog: "परिवर्तन लॉग", linkPrev: "पिछले संस्करण", linkSmartScreen: "SmartScreen गाइड",
        faqTitle: "सामान्य प्रश्न", faqSub: "Peekom Index और Peekom Plus के बारे में सामान्य प्रश्न।",
        faq1q: "Peekom Index और Peekom Plus में क्या अंतर है?",
        faq1a: "Index मुफ़्त बुनियादी संस्करण है। Plus में प्रीमियम सुविधाएँ: मॉनिटर चयन, Pin मोड, कस्टम UI और Lemon Squeezy लाइसेंस।",
        faq2q: "डुअल मॉनिटर कैसे काम करता है?",
        faq2a: "Plus में सेटिंग्स से संकेत नोट दिखाने वाला मॉनिटर चुन सकते हैं।",
        faq3q: "Plus लाइसेंस कैसे सक्रिय करें?",
        faq3a: "पहली बार चलाते समय Lemon Squeezy लाइसेंस कुंजी दर्ज करें।",
        faq3bq: "क्या एक लाइसेंस कुंजी कई PC पर उपयोग की जा सकती है?",
        faq3ba: "हाँ। एक ही 16-अक्षर की कुंजी अधिकतम दो PC (जैसे कार्य और व्यक्तिगत) पर एक-एक बार दर्ज करके दोनों पर Peekom Plus उपयोग कर सकते हैं।",
        faq4q: "Windows पर इंस्टॉल करते समय नीली चेतावनी आती है।",
        faq4a: 'SmartScreen चेतावनियाँ अहस्ताक्षरित ऐप में सामान्य हैं। <a href="#" onclick="openModal(); return false;">इंस्टॉल गाइड</a> देखें: [अधिक जानकारी] → [फिर भी चलाएँ]।',
        helpTitle: "सहायता", helpSub: "त्वरित प्रारंभ गाइड।",
        help1t: "1. इंस्टॉल", help1p: "अपने OS के लिए इंस्टॉलर डाउनलोड करें और चलाएँ। Windows पर SmartScreen दिख सकता है।",
        help2t: "2. हैंडल स्थिति समायोजित करें", help2p: "दाएँ किनारे के हैंडल को वांछित ऊँचाई पर खींचें। होवर करने पर नोट स्लाइड होती है।",
        help3t: "3. केवल Plus — Pin मोड", help3p: "नोट पिन करने के लिए हैंडल पर क्लिक करें। 0.3s विलंब गलती से ट्रिगर रोकता है।",
        contactTitle: "संपर्क", contactSub: "अपनी प्रतिक्रिया भेजें।",
        contactBody: "बग रिपोर्ट, सुझाव या लाइसेंस प्रश्नों के लिए नीचे ईमेल करें।",
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "गोपनीयता",
        guideTitle: "Windows SmartScreen इंस्टॉल गाइड",
        step1: 'इंस्टॉलर चलाते समय <b>"अपरिचित ऐप"</b> वाली नीली SmartScreen विंडो दिख सकती है।',
        step2: "ऊपर <b>[अधिक जानकारी]</b> पर क्लिक करें।",
        step3: "इंस्टॉल पूरा करने के लिए नीचे दाएँ <b>[फिर भी चलाएँ]</b> पर क्लिक करें।",
        searchNoResults: "कोई परिणाम नहीं",
        modalClose: "बंद करें"
    },
    ar: {
        navHome: "الرئيسية", navDownload: "تنزيل", navFaq: "الأسئلة", navHelp: "المساعدة", navContact: "اتصل",
        searchPlaceholder: "بحث...",
        heroTitlePurple: "Peekom", heroTitleYellow: "Plus",
        heroTagline: "ملاحظات ملصقة على حافة الشاشة؟ انتقلت إلى داخلها.<br>تطل من الحافة—مكتبك نظيف، وملاحظاتك على بعد تمرير واحد.",
        carouselCap1: "مقبض على حافة الشاشة",
        carouselCap2: "افتح الملاحظة بالنقر أو الاختصار",
        carouselCap3: "شاشتان · وضع Pin",
        detectWin: "البيئة المكتشفة: <strong>Windows</strong> — يُنصح بأزرار Windows أدناه.",
        detectMac: "البيئة المكتشفة: <strong>macOS</strong> — يُنصح بأزرار macOS أدناه.",
        detectGeneric: "تعذّر اكتشاف نظام التشغيل. يرجى الاختيار يدوياً.",
        feat1: "مصادقة ترخيص Lemon Squeezy",
        feat2: "دعم الشاشتين — اختيار الشاشة المستهدفة",
        feat3: "تأخير التمرير 0.3 ثانية ووضع التثبيت Pin",
        feat4: "واجهة نص ولون مخصصة مع تخزين محلي",
        lblFree: "Peekom Index", lblPlus: "Peekom Plus",
        indexName: "Peekom Index", indexBadge: "Free",
        indexDesc: "الإصدار الأساسي المجاني — اطلع على الفهرس والملاحظات من حافة الشاشة أثناء العروض.",
        plusName: "Peekom Plus", plusBadge: "Plus",
        plusDesc: "إصدار مدفوع مع الشاشتين ووضع Pin والسمات المخصصة والمزيد.",
        btnWin: "Windows", btnMac: "macOS",
        winGuideBtn: "هل تظهر تحذير أزرق عند التثبيت على Windows؟",
        dlTitle: "تنزيل", dlSub: "اختر المثبّت لنظام التشغيل الخاص بك.",
        dlIndexHeading: "Peekom Index", dlPlusHeading: "Peekom Plus",
        dlIndexWin: "Setup (Windows)", dlIndexMac: "Setup (macOS)",
        dlPlusWin: "شراء / تنزيل (Windows)", dlPlusMac: "شراء / تنزيل (macOS)",
        linkChangelog: "سجل التغييرات", linkPrev: "الإصدارات السابقة", linkSmartScreen: "دليل SmartScreen",
        faqTitle: "الأسئلة الشائعة", faqSub: "أسئلة شائعة حول Peekom Index و Peekom Plus.",
        faq1q: "ما الفرق بين Peekom Index و Peekom Plus؟",
        faq1a: "Index هو الإصدار الأساسي المجاني. Plus يضيف ميزات premium: اختيار الشاشة ووضع Pin وواجهة مخصصة وترخيص Lemon Squeezy.",
        faq2q: "كيف يعمل دعم الشاشتين؟",
        faq2a: "في Plus يمكنك اختيار الشاشة التي تعرض ملاحظة التلميح من الإعدادات.",
        faq3q: "كيف يتم تفعيل ترخيص Plus؟",
        faq3a: "أدخل مفتاح ترخيص Lemon Squeezy عند أول تشغيل للتفعيل.",
        faq3bq: "هل يمكن استخدام مفتاح ترخيص واحد على أكثر من جهاز كمبيوتر؟",
        faq3ba: "نعم. يمكنك إدخال نفس المفتاح المكوّن من 16 حرفًا مرة واحدة على كل جهاز، بحد أقصى جهازين (مثل جهاز العمل والشخصي)، لاستخدام Peekom Plus على كليهما.",
        faq4q: "يظهر تحذير أزرق عند التثبيت على Windows.",
        faq4a: 'تحذيرات SmartScreen شائعة للتطبيقات غير الموقّعة. راجع <a href="#" onclick="openModal(); return false;">دليل التثبيت</a>: [مزيد من المعلومات] → [تشغيل على أي حال].',
        helpTitle: "المساعدة", helpSub: "دليل البدء السريع.",
        help1t: "1. التثبيت", help1p: "نزّل المثبّت لنظامك وشغّله. قد يظهر SmartScreen على Windows.",
        help2t: "2. ضبط موضع المقبض", help2p: "اسحب المقبض على الحافة اليمنى إلى الارتفاع المطلوب. مرّر الماوس لإظهار الملاحظة.",
        help3t: "3. Plus فقط — وضع Pin", help3p: "انقر المقبض لتثبيت الملاحظة. تأخير 0.3 ثانية يمنع التفعيل بالخطأ.",
        contactTitle: "اتصل", contactSub: "أرسل ملاحظاتك.",
        contactBody: "لتقارير الأخطاء أو الاقتراحات أو استفسارات الترخيص، راسلنا عبر البريد أدناه.",
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "الخصوصية",
        guideTitle: "دليل تثبيت SmartScreen على Windows",
        step1: 'عند تشغيل المثبّت، قد تظهر نافذة SmartScreen زرقاء تقول <b>"تطبيق غير معروف"</b>.',
        step2: "انقر <b>[مزيد من المعلومات]</b> في الأعلى.",
        step3: "انقر <b>[تشغيل على أي حال]</b> أسفل اليمين لإكمال التثبيت.",
        searchNoResults: "لا توجد نتائج",
        modalClose: "إغلاق"
    }
};

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

function enrichLocaleData(data) {
    const ref = i18n.ko;
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
        next.compareRows = ref.compareRows || en.compareRows;
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
    next.macComingSoonTitle = next.macComingSoonTitle || en.macComingSoonTitle;
    next.macComingSoonBody = next.macComingSoonBody || en.macComingSoonBody;
    next.featuresTitle = next.featuresTitle || en.featuresTitle;
    next.featuresSub = next.featuresSub || en.featuresSub;
    next.compareTitle = next.compareTitle || en.compareTitle;
    next.compareSub = next.compareSub || en.compareSub;
    next.faq1a = next.faq1a || en.faq1a;
    next.contactEmail = CONTACT_EMAIL;
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
        next.compareSections = cmp.SECTIONS_EN;
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
        raw = Object.assign({}, i18n.ko, i18n[lang] || {}, {
            heroPlusCardBadge: badge.paid,
            heroMacPlusCardBadge: badge.paid,
            heroFreeCardBadge: badge.free,
            heroMacFreeCardBadge: badge.free
        });
    }
    const base = enrichLocaleData(raw);
    const cmp = window.PeekomCompare || {};
    const sections = lang === "ko" ? cmp.SECTIONS_KO : cmp.SECTIONS_EN;
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
        el.href = "#";
        el.removeAttribute("target");
    });

    const buyOnlyIds = ["dlBuyLink"];
    buyOnlyIds.forEach(function (id) {
        const el = document.getElementById(id);
        if (el) el.href = LINKS.buy;
    });
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

function handleWinPlusBuyClick(event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    triggerWinSetupDownload();
    window.open(LINKS.buy, "_blank", "noopener,noreferrer");
}

var heroOfferActionsBound = false;

function initHeroOfferActions() {
    if (heroOfferActionsBound) return;
    heroOfferActionsBound = true;

    ["heroMacBtn", "heroMacPlusBuyBtn", "dlMacBtn", "dlMacPlusBuyBtn"].forEach(function (id) {
        const el = document.getElementById(id);
        if (el) el.addEventListener("click", showMacComingSoon);
    });

    ["heroPlusBuyBtn", "dlPlusBuyBtn"].forEach(function (id) {
        const el = document.getElementById(id);
        if (el) el.addEventListener("click", handleWinPlusBuyClick);
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
        if (id === 'heroFreeCompareNote' || id === 'dlFreeCompareNote' || id === 'faq1a' || id === 'dlPlusHint' || id === 'faq2a' || id === 'faq3a') {
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

function updateUI() {
    const d = getLocaleData();
    const en = i18n.en;

    setText('navHome', d.navHome);
    setText('navFeatures', d.navFeatures);
    setText('navDownload', d.navDownload);
    setText('navFaq', d.navFaq);
    setText('navHelp', d.navHelp || d.navGuide);
    setText('navContact', d.navContact);
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = d.searchPlaceholder;
    const langSelect = document.getElementById('langSelect');
    if (langSelect) langSelect.value = currentLang;
    setText('footerLangLabel', d.footerLangLabel);
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
    setText('carouselCap2', d.carouselCap2);
    setText('carouselCap3', d.carouselCap3);

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
    setText('faq1q', d.faq1q);
    setText('faq1a', d.faq1a);
    setText('faq2q', d.faq2q);
    setText('faq2a', d.faq2a);
    setText('faq8q', d.faq8q);
    setText('faq8a', d.faq8a);
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
    ['markdownGuideTitle','formatBarGuideTitle'].forEach(function(id) { setText(id, d[id]); });
    ['markdownGuideBody','formatBarGuideBody'].forEach(function(id) {
        const el = document.getElementById(id);
        if (el && d[id]) el.innerHTML = d[id];
    });
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
    initFaqAccordion();

    setText('contactTitle', d.contactTitle);
    setText('contactSub', d.contactSub);
    setText('contactBody', d.contactBody);
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
    ['fz1GifLabel', 'fz2GifLabel', 'fz3GifLabel', 'fz4GifLabel', 'fz5GifLabel'].forEach(function(id) {
        setText(id, d.featureGifPending);
    });
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
};
    window.PeekomSite = {
        LINKS: LINKS,
        PRICING: PRICING,
        setLanguage: setLanguage,
        openModal: openModal,
        closeModal: closeModal,
        closeModalOnBackdrop: closeModalOnBackdrop,
        closeSearch: closeSearch,
        showMacComingSoon: showMacComingSoon,
        handleWinPlusBuyClick: handleWinPlusBuyClick
    };
    window.setLanguage = setLanguage;
    window.openModal = openModal;
    window.closeModal = closeModal;
    window.closeModalOnBackdrop = closeModalOnBackdrop;
    window.closeSearch = closeSearch;
})();

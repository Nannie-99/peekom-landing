(function () {
"use strict";
window.PeekomI18nLocales = window.PeekomI18nLocales || {};

window.PeekomI18nLocales.ja = {
    navHome: "ホーム", navFeatures: "機能", navDownload: "ダウンロード", navFaq: "よくある質問", navHelp: "ガイド", navContact: "お問い合わせ",
    searchPlaceholder: "検索...",
    heroTitleMain: "Peekom",
    heroTagline: "エッジメモアプリが <strong>Peekom</strong> として戻りました。<br>軽くて速い—作業や発表の流れを邪魔しません。",
    heroPlusNote: '無料アプリをインストール後、設定から Peekom Plus にアップグレードできます。<br><a href="features.html#compare">機能比較表で無料と Plus の違い</a>をご確認ください。',
    heroUpgradeNote: "無料アプリをインストール後、設定から Peekom Plus にアップグレードできます。",
    heroFreeCompareNote: '<a href="features.html#compare">無料と Plus の違い</a>をご確認ください。',
    heroWinBtn: "Windows 版をダウンロード", heroMacBtn: "macOS 版をダウンロード",
    heroPlusBuyBtn: "購入する",
    heroPlusCardTitle: "Peekom Plus",
    heroPlusCardBadge: "有料",
    heroPlusCardOs: "Windows",
    heroMacPlusCardTitle: "Peekom Plus",
    heroMacPlusCardBadge: "有料",
    heroPlusCardMeta: "買い切り · 最大2台 · 永久利用",
    heroFreeCardTitle: "Peekom",
    heroFreeCardBadge: "無料",
    heroMacFreeCardBadge: "無料",
    heroWinCardMeta: "Windows 10 · 11 (64-bit)",
    heroMacFreeCardMeta: "macOS",
    heroFreeDownloadLabel: "ダウンロード",
    carouselCap1: "モニター端のハンドル",
    carouselCap2: "クリック・ショートカットでメモを開く",
    carouselCap3: "ICE モード · 自動折りたたみ遅延",
    reviewBtnLabel: "レビューを書く",
    reviewEmpty: "最初のレビューを投稿してください！",
    reviewAnonymous: "匿名",
    detectWin: "検出: <strong>Windows</strong> — Windows 推奨",
    detectMac: "検出: <strong>macOS</strong> — macOS 推奨",
    detectGeneric: "OS を検出できません — 手動で選択してください",
    featuresTitle: "機能", featuresSub: "Peekom の機能をひと目で確認できます。",
    compareTitle: "Peekom vs Peekom Plus", compareSub: "同じアプリひとつ—Plus はアプリ内でアンロックします。",
    comparePricing: '<span class="pricing-was">$12.99</span> <span class="pricing-now">$9.99 USD</span> <span class="pricing-vat">(税別)</span> · <span class="pricing-launch">発売記念価格</span> · 買い切り · 最大2台 · マイナーアップデート込み · 30日間返金 (<a href="mailto:hello.peekom@gmail.com">hello.peekom@gmail.com</a>)',
    guidePlusP: '1) Lemon Squeezy で発売記念 $9.99 を購入 → 2) メールでライセンスキーを受信 → 3) Peekom を起動 → ロック画面または設定でキーを入力 → 4) Peekom Plus の有効化が完了。30日間返金: <a href="mailto:hello.peekom@gmail.com">hello.peekom@gmail.com</a>',
    dlSub: "Peekom を一度インストールするだけ。Plus はアプリ内でアップグレードします。",
    dlWin: "Peekom Setup (Windows)", dlMac: "Peekom Setup (macOS)",
    dlPlusHint: 'Peekom Plus: 通常 <span class="pricing-was">$12.99</span> → 発売記念 <strong>$9.99</strong> (税別) · <a href="https://peekom.lemonsqueezy.com/checkout/buy/97457035-6963-4cc0-9348-63dbb738e6a8" id="dlBuyLinkInner">Lemon Squeezy で購入</a> → アプリでライセンスキーを入力',
    featureGifPending: "デモ GIF 準備中",
    compareNoLabel: "非対応",
    faqSub: "Peekom に関するよくある質問です。",
    refundPolicyTitle: "Peekom Plus 返金ポリシー",
    refundPolicyBody:
        "<p>Peekom Plus の決済・返金は、記録上の販売者（Merchant of Record）である Lemon Squeezy を通じて処理されます。</p>" +
        '<ul class="faq-refund-list">' +
        "<li><strong>申請期間</strong> — 購入日から<strong>30日以内</strong>の申請を受け付けます。</li>" +
        "<li><strong>返金対象</strong> — 正常に動作しない不具合（アプリが起動・動作しない）および同一注文の重複決済。</li>" +
        "<li><strong>対象外</strong> — 単なる気変わり。</li>" +
        "<li><strong>返金後のライセンス</strong> — 返金が完了すると Peekom Plus ライセンスキーは無効化され、次回オンライン起動時に自動的に無料版へ戻ります。</li>" +
        '<li><strong>手順</strong> — <a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">お問い合わせフォーム（またはメール）</a>から注文番号を添えて申請 → 確認 → Lemon Squeezy ダッシュボードで返金を実行 → カード会社・決済手段により反映まで数営業日かかる場合があります。</li>' +
        "</ul>",
    faqR1q: "Peekom Plus の返金はどう申請しますか？",
    faqR1a: '<a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">お問い合わせフォーム（またはメール）</a>から<strong>注文番号</strong>を添えて申請してください。確認後、Lemon Squeezy ダッシュボードで返金を実行します。カード会社・決済手段により、実際の返金反映まで数営業日かかる場合があります。',
    faqR2q: "どんな場合に返金できますか？",
    faqR2a: "購入日から<strong>30日以内</strong>であれば、<strong>正常に動作しない不具合</strong>（アプリが起動・動作しない）と同一注文の<strong>重複決済</strong>について返金できます。単なる気変わりは対象外です。決済・返金は記録上の販売者である Lemon Squeezy を通じて処理されます。",
    faqR3q: "返金後、ライセンスはどうなりますか？",
    faqR3a: "返金が完了すると Peekom Plus ライセンスキーは<strong>無効化</strong>されます。次回オンラインでアプリを起動すると自動的に無料版へ戻るため、返金を申請する前に Plus の利用を停止してよいかご確認ください。",
    faq1q: "無料版と Peekom Plus の違いは何ですか？",
    faq1a: '無料版には3インデックス、グループ移動、ICE モード、ホバー遅延、モニター選択、Markdown、書式バー、画像挿入が含まれます。Peekom Plus（発売記念 $9.99、通常 $12.99）は10スロット、カスタムテーマ、フォント、不透明度、画像リサイズ、エクスポートをアプリ内でアンロックします。<a href="features.html#compare">比較表</a>をご覧ください。',
    compareFreeName: "Peekom (無料)",
    comparePlusName: "Peekom Plus",
    compareCta: "Peekom Plus を入手",
    comparePromoBanner: "発売記念 · 現在 {pct}% OFF",
    helpTitle: "ガイド", helpSub: "Peekom をすぐに始めましょう。",
    guideStartBody:
        '<div class="guide-step">' +
            "<h3>1. インストール</h3>" +
            '<ul class="guide-step-list">' +
                '<li><strong>ダウンロード</strong> — <a href="download.html">ダウンロード</a>ページ（またはホーム）から Windows・macOS 用インストーラーを取得します。</li>' +
                "<li><strong>Peekom-Setup.exe を実行</strong> — インストーラーをダブルクリックし、画面の案内に従ってインストールを完了します。</li>" +
                '<li><strong>SmartScreen 警告が出る場合</strong> — 青いウィンドウが表示されたら、<a href="#" onclick="openModal(); return false;">インストールガイド</a>を開き、<strong>[詳細情報]</strong> → <strong>[実行]</strong> の順に進めてください。</li>' +
            "</ul>" +
        "</div>" +
        '<div class="guide-step">' +
            "<h3>2. 共通・インデックス別の設定</h3>" +
            '<p class="guide-step-lead">トレイアイコンを右クリック → <strong>設定</strong>を開きます。</p>' +
            '<h4 class="guide-step-sub">共通設定</h4>' +
            '<ul class="guide-step-list">' +
                "<li>メモを表示する <strong>モニター</strong>を選択（自動または固定）</li>" +
                "<li><strong>操作モード</strong> — <strong>マウス操作</strong> / <strong>ショートカット操作</strong>、3種のショートカット（開閉・前後インデックス）を変更</li>" +
                "<li>ハンドルの <strong>自動折りたたみ遅延</strong>（デフォルト 0.3秒、設定で調整可能）</li>" +
            "</ul>" +
            '<div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> カスタムフォント、デフォルト不透明度、JSON バックアップ・復元、エクスポート (.txt/.md/.json) など。</div>' +
            '<h4 class="guide-step-sub">インデックス別の設定</h4>' +
            '<ul class="guide-step-list">' +
                "<li><strong>インデックス</strong>の追加・削除（無料3個）</li>" +
                "<li>各インデックスの <strong>タイトルと色</strong>を設定</li>" +
                "<li>メモの <strong>アスペクト比</strong>を選択（1:1 / 3:4）</li>" +
            "</ul>" +
            '<div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> 最大10スロット、スロットごとにハンドル位置を個別保存できます。</div>' +
        "</div>" +
        '<div class="guide-step">' +
            "<h3>3. メモを書く</h3>" +
            '<ul class="guide-step-list">' +
                "<li><strong>位置調整</strong> — 端のハンドルをドラッグして好みの高さに移動します。</li>" +
                "<li><strong>Peek / ICE</strong> — メモ上部のチップで切り替え。Peek はクリック・ショートカットで開き、ICE は常に固定表示されます。</li>" +
                '<li><strong>テキストのカスタマイズ</strong> — Markdown、書式バー、画像を使えます。下の<a href="#guide-edit">編集</a>セクションをご覧ください。</li>' +
            "</ul>" +
        "</div>" +
        '<div class="guide-step guide-step--last">' +
            "<h3>4. Peekom Plus にアップグレード</h3>" +
            '<ul class="guide-step-list">' +
                "<li>アプリ内の <strong>Plus にアップグレード</strong>ボタン（または初回起動時の設定画面）でライセンスキーを入力します。</li>" +
                '<li>手順の詳細は下の<a href="#guide-plus">Plus 有効化</a>セクションをご覧ください。</li>' +
            "</ul>" +
        "</div>",
    help1t: "1. インストール", help1p: "Peekom Setup をダウンロードして実行します。Windows では SmartScreen が表示される場合があります。",
    help2t: "2. メモを開く", help2p: "ハンドルをクリックするか、<strong>ショートカット操作</strong>モードでは <strong>Ctrl+Shift+M</strong>（デフォルト）で<strong>直近に開いた</strong>メモを切り替えます。",
    help3t: "3. メモを切り替え", help3p: "<strong>マウス操作</strong>モードではパネル表示中に <strong>↑ / ↓</strong>。<strong>ショートカット操作</strong>モードでは <strong>Ctrl+Shift+↑ / ↓</strong>（閉じていても可）。<strong>Ctrl+1–9</strong>でインデックスにジャンプ。",
    help4t: "4. 入力", help4p: "パネルにテキストを入力し、設定でインデックスの追加・タイトルを設定します。",
    help5t: "5. ICE モード", help5p: "<strong>Peek / ICE</strong>チップをクリックしてホバーなしでメモを固定表示します（無料・Plus 共通）。",
    help6t: "6. 設定 · Plus", help6p: "トレイ → 設定 → 共通タブで操作モードとショートカットを変更できます。Plus アップグレードボタンでキーを入力すると Peekom Plus に切り替わります。",
    winGuideBtn: "Windows インストール時に青い SmartScreen 警告が表示されますか？",
    dlTitle: "ダウンロード", dlWinNote: "Windows 10 · 11 (64-bit)",
    dlWinLabel: "Windows x64 · Windows 10 · 11 (64-bit)",
    dlMacLabel: "macOS",
    linkChangelog: "Changelog / Releases", linkPrev: "Previous Versions", linkSmartScreen: "SmartScreen Guide",
    faqTitle: "よくある質問",
    faqGroupProductLabel: "製品・機能",
    faqGroupLicenseLabel: "ライセンス",
    faqGroupInstallLabel: "インストール",
    faqGroupTroubleshootLabel: "トラブルシューティング",
    faq2q: "デュアルモニターではどう動作しますか？",
    faq2a: "設定 → 表示モニターで、マウス追従（自動）または特定モニターを固定できます。無料・Plus どちらでも利用可能です。",
    faq8q: "Peekom はモニター右端でのみ使えますか？",
    faq8a: "現在はモニター右端のみ対応しています。今後のアップデートで左・上・下端にも対応予定です。",
    faq9q: "誤って Peekom Plus を削除した場合、有料機能はどうなりますか？",
    faq9a:
        "<p>アプリを削除しても Lemon Squeezy に登録されたライセンスは残ります。次の手順で Peekom Plus とすべての有料機能を復元できます。</p>" +
        '<ul class="guide-step-list">' +
        "<li><strong>1. Peekom を再インストール</strong> — <a href=\"download.html\">peekom.com</a> から無料版（<code>Peekom-Setup.exe</code>）をダウンロードしてインストールします。</li>" +
        "<li><strong>2. ライセンスキーを確認</strong> — 購入時に Lemon Squeezy から届いた領収メールを開き、<strong>[License Key]</strong> をコピーします。メールを紛失した場合は、Lemon Squeezy の注文履歴に同じメールでログインしてキーを再確認できます。</li>" +
        "<li><strong>3. ライセンスを再認証</strong> — アプリ右上の歯車（設定）を開き、<strong>Plus 認証</strong>にキーを貼り付けて認証します。すぐにアプリ名が Peekom Plus に変わり、10 スロット・カスタムテーマなど有料機能が復元されます。</li>" +
        "</ul>" +
        "<p><strong>端末数の制限（最大 2 台）</strong> — 同じ PC で削除後に再インストールしても同一端末として扱われ、認証回数に問題はありません。PC を変更する場合は、ライセンスあたり最大 2 台まで登録できます（例：仕事用 PC 1 台＋個人用 PC 1 台）。</p>",
    faq3q: "Peekom Plus はどう有効化しますか？",
    faq3a: "Lemon Squeezy で購入後、アプリ内でライセンスキーを入力すると Peekom Plus がアンロックされます（再インストール不要）。",
    faq3bq: "1つのライセンスキーで複数の PC で使えますか？",
    faq3ba: "はい。同じ16桁のライセンスキーを最大2台（例：仕事用 PC と個人用 PC）にそれぞれ1回ずつ入力して Peekom Plus を使えます。",
    faq3cq: "仕事用 PC を変更したり転職した場合も使い続けられますか？",
    faq3ca: "Peekom Plus ライセンスは基本的に最大2台の端末で使用できます。同じ端末での削除後の再インストールは可能です。新しい端末への変更が必要な場合は、お問い合わせにて確認のうえサポートいたします。状況により、既存の有効化端末を初期化したうえで、新しい端末での再認証をご案内する場合があります。",
    faq3dq: "端末変更が必要なときは何を送ればよいですか？",
    faq3da: "迅速な確認のため、購入時のメールアドレス、注文番号、ライセンスキー、および端末変更の理由をお送りください。すでに2台とも有効化されている場合は、既存の有効端末を初期化してから再認証をご案内する場合がありますので、必要な内容は事前にバックアップしてからお問い合わせください。",
    faq4q: "Windows インストール時に青い警告が表示されます。",
    faq4a: '未署名アプリでは SmartScreen 警告がよく出ます。<a href="#" onclick="openModal(); return false;">インストールガイド</a>を参照：[詳細情報] → [実行]。',
    faq5q: "対応している Windows バージョンは？",
    faq5a: "Windows 10 および Windows 11 (64-bit) で動作します。インストーラーは 64-bit 専用です。Windows 7、8、8.1 は非対応です（Electron 36）。",
    faq6q: "インデックスを追加したのに設定に表示されません。",
    faq6a: "設定を開き直すと一覧が更新されます。最新版では自動同期されます。",
    faq7q: "アンインストール後も起動時に変な文字が表示されます。",
    faq7a: "タスクマネージャーで Peekom のスタートアップ項目を無効にするか、再インストール後にアンインストールしてください。",
    compareColFeature: "機能",
    contactTitle: "お問い合わせ", contactSub: "フィードバックをお送りください。",
    contactFeedbackTitle: "フィードバックを送る",
    contactFeedbackDesc: "バグ報告、機能提案、ライセンスのお問い合わせ",
    contactFeedbackBtn: "フィードバックフォームを開く",
    contactReviewTitle: "レビューを残す",
    contactReviewDesc: "ご利用体験をお聞かせください。サイトに掲載される場合があります。",
    contactReviewBtn: "レビューフォームを開く",
    contactEmailTitle: "メールで連絡",
    contactEmailDesc: "直接連絡が必要な場合",
    contactNote: "お問い合わせには営業日10日以内の返信を目指します。メールより Google フォームの方が早く届くため、可能であればフォームのご利用をお願いします。",
    contactEmail: "hello.peekom@gmail.com",
    footerCopy: "© 2026. Peekom All rights reserved.",
    footerPrivacy: "プライバシー",
    guideTitle: "Windows SmartScreen インストールガイド",
    step1: 'インストーラー実行時、<b>「認識されないアプリ」</b>と表示される青い SmartScreen ウィンドウが出る場合があります。',
    step2: "画面上部の <b>[詳細情報]</b> をクリックしてください。",
    step3: "右下に表示される <b>[実行]</b> ボタンを押すとインストールが完了します。",
    searchNoResults: "結果なし",
    modalClose: "閉じる",
    promoNote: "プロモーション終了後に値上げ予定",
    promoSectionTitle: "Peekom Plus (有料)",
    promoFreeTitle: "Peekom (無料)",
    promoVat: "(税別)",
    promoLaunchLabel: "発売記念\n価格\n適用中",
    comparePricingExtra: ' · 買い切り · 最大2台 · マイナーアップデート込み · 30日間返金 (<a href="mailto:hello.peekom@gmail.com">hello.peekom@gmail.com</a>)',
    dlPlusHintExtra: ' · <a href="https://peekom.lemonsqueezy.com/checkout/buy/97457035-6963-4cc0-9348-63dbb738e6a8" id="dlBuyLinkInner">Lemon Squeezy で購入</a> → アプリでライセンスキーを入力',
    markdownGuideTitle: "Markdown でメモする",
    markdownGuideBody:
        '<p class="guide-table-intro">コードを覚える必要はありません。普通に入力して <strong>Enter</strong> を押すと自動で書式が適用されます。</p>' +
        '<table class="compare-table guide-table"><thead><tr><th>入力形式</th><th>Enter 後</th></tr></thead><tbody>' +
        '<tr><td><code># 会議議題</code></td><td class="guide-md-result"><h1 class="guide-md-h1">会議議題</h1></td></tr>' +
        '<tr><td><code>## メモ</code></td><td class="guide-md-result"><h2 class="guide-md-h2">メモ</h2></td></tr>' +
        '<tr><td><code>### 参考</code></td><td class="guide-md-result"><h3 class="guide-md-h3">参考</h3></td></tr>' +
        '<tr><td><code>- やること</code></td><td class="guide-md-result"><ul class="guide-md-ul"><li>やること</li></ul></td></tr>' +
        '<tr><td><code>- [ ] やること</code></td><td class="guide-md-result"><label class="guide-md-task"><input type="checkbox" disabled> やること</label></td></tr>' +
        '<tr><td><code>**重要**</code></td><td class="guide-md-result"><strong>重要</strong></td></tr>' +
        '<tr><td><code>*強調*</code></td><td class="guide-md-result"><em>強調</em></td></tr>' +
        "</tbody></table>",
    formatBarGuideTitle: "書式バーでメモする",
    formatBarGuideBody:
        '<p class="guide-table-intro">メモ上部の書式バーをクリックするだけ。キーボードショートカットは不要です。</p>' +
        '<table class="compare-table guide-table"><thead><tr><th>機能</th><th>使い方</th></tr></thead><tbody>' +
        "<tr><td>文字色 · 太字 · 斜体 · 下線 · 取り消し線</td><td>テキストを選択してからボタンをクリック</td></tr>" +
        "<tr><td>行揃え（左/中央/右/両端）</td><td>段落の揃えを一括変更</td></tr>" +
        "<tr><td>リスト（点/四角/番号/プレーン）</td><td>ドロップダウンからリストスタイルを選択</td></tr>" +
        "<tr><td>画像挿入</td><td>無料 1枚 · Plus 5枚（Plus はリサイズ・切り抜き可）</td></tr>" +
        "</tbody></table>",
    guideKeysTitle: "ショートカット",
    guideKeysIntro: '設定 → 共通 → <strong>操作モード</strong>で <strong>マウス操作</strong>または <strong>ショートカット操作</strong>を選択。macOS では Ctrl の代わりに ⌘ (Command) を使用します。',
    gkColAction: "操作", gkColKey: "デフォルト", gkColNote: "備考",
    gk1a: "メモの開閉", gk1k: "Ctrl+Shift+M",
    gk1n: "直近のメモ。ショートカット操作モードのみ。設定 → 共通 → 操作モードで変更可能",
    gk2a: "前のインデックスを開く", gk2k: "Ctrl+Shift+↑",
    gk2n: "前のインデックスを開いてパネルを表示。ショートカット操作モード。設定で変更可能",
    gk3a: "次のインデックスを開く", gk3k: "Ctrl+Shift+↓",
    gk3n: "次のインデックスを開いてパネルを表示。ショートカット操作モード。設定で変更可能",
    gk4a: "インデックス切り替え", gk4k: "↑ / ↓",
    gk4n: "マウス操作モードのみ、パネル表示中",
    gk5a: "インデックスにジャンプ", gk5k: "Ctrl+1–9 (Ctrl+0 = 10番目)",
    gk5n: "そのインデックスのメモを直接開きます",
    gk6a: "文字サイズ", gk6k: "Ctrl + ホイール", gk6n: "メモ領域内。Plus 専用",
    guidePlusTitle: "Plus を有効化",
    guidePlusStep1: "1. 下のボタンから Peekom Plus を購入します。",
    guidePlusStep2: "2. メールで届いたライセンスキーを確認します。",
    guidePlusStep3: "3. Peekom を起動し、<strong>設定</strong>画面または <strong>設定</strong>でキーを入力します。",
    macComingSoonTitle: "macOS",
    macComingSoonBody: "macOS 版は現在開発中です。<br>配信予定: <strong>2026年7月</strong>。",
    guidePlusStep4: "4. Peekom Plus の有効化が完了します。",
    guideNavStart: "はじめに", guideNavKeys: "ショートカット", guideNavEdit: "編集", guideNavPlus: "Plus 有効化",
    guideSectionEditTitle: "編集",
    versionHistoryTitle: "バージョン履歴",
    versionColVersion: "バージョン", versionColDate: "リリース日", versionColWin: "Windows", versionColMac: "macOS",
    versionLatest: "最新", versionWin: "64-bit", versionMac: "Universal", versionMacSoon: "リリース予定",
    changelogTitle: "変更履歴",
    fz1Title: "端から Peek",
    fz1Items: [
        { text: "インデックスをクリックして素早くメモを開く" },
        { text: "インデックスをドラッグして位置調整" },
        { text: "Peek / ICE モード切り替え" },
        { text: "Peek モード時の自動折りたたみ" }
    ],
    fz2Title: "効率的に作業",
    fz2Items: [
        { text: "ショートカットで直近メモを開く" },
        { text: "表示モニターの固定" },
        { text: "Markdown 記法対応" },
        { text: "画像挿入" }
    ],
    fz3Title: "自分だけのメモ",
    fz3Items: [
        { text: "書式バー" },
        { text: "インデックスタイトルの変更" },
        { text: "メモ比率 (1:1, 3:4)" },
        { text: "デフォルト背景色" }
    ],
    fz4Title: "Plus でさらに強力に",
    fz4Items: [
        { text: "最大10個の独立インデックス", plus: true },
        { text: "エクスポート · JSON バックアップ", plus: true },
        { text: "メモあたり最大5枚の画像", plus: true },
        { text: "画像リサイズ · 比率切り抜き", plus: true }
    ],
    fz5Title: "Plus 限定カスタマイズ",
    fz5Items: [
        { text: "文字サイズ調整", plus: true },
        { text: "メモのデフォルト不透明度", plus: true },
        { text: "背景色・文字色の変更", plus: true },
        { text: "カスタムフォント", plus: true }
    ],
    footerLangLabel: "言語",
    themeLight: "Light",
    themeDark: "Dark",
    themeAuto: "Auto",
    themeLightLabel: "ライトモード",
    themeDarkLabel: "ダークモード",
    themeAutoLabel: "システムに合わせる",
    themeAriaLabel: "テーマ",
    pageCtaDownload: "ダウンロード",
    pageCtaCompare: "比較表を見る",
    featuresCtaTitle: "Peekom Plus で拡張",
    featuresCtaDesc: "10スロット、カスタムテーマ、エクスポートなどをアプリ内でアンロック。",
    helpCtaTitle: "今すぐ始める",
    helpCtaDesc: "Peekom をインストールして、端のメモを試してみましょう。",
    faqCtaTitle: "まだ疑問がありますか？",
    faqCtaDesc: "機能比較表で無料と Plus の違いをご確認ください。",
    contactCtaTitle: "まだ Peekom を試していませんか？",
    contactCtaDesc: "無料でインストールして、すぐに使い始められます。",
    downloadCtaTitle: "Plus が必要ですか？",
    downloadCtaDesc: "同じアプリでライセンスキーを入力するだけで Plus が有効化されます。"
};

window.PeekomI18nLocales["zh-CN"] = {
    navHome: "首页", navFeatures: "功能", navDownload: "下载", navFaq: "常见问题", navHelp: "指南", navContact: "联系",
    searchPlaceholder: "搜索...",
    heroTitleMain: "Peekom",
    heroTagline: "边缘备忘应用以 <strong>Peekom</strong> 回归。<br>轻量快速——不打断您的工作或演示节奏。",
    heroPlusNote: '安装免费应用后，可在设置中升级到 Peekom Plus。<br>在<a href="features.html#compare">功能对比表</a>中查看免费版与 Plus 的区别。',
    heroUpgradeNote: "安装免费应用后，可在设置中升级到 Peekom Plus。",
    heroFreeCompareNote: '<a href="features.html#compare">查看免费版与 Plus 的区别</a>。',
    heroWinBtn: "下载 Windows 版", heroMacBtn: "下载 macOS 版",
    heroPlusBuyBtn: "立即购买",
    heroPlusCardTitle: "Peekom Plus",
    heroPlusCardBadge: "付费",
    heroPlusCardOs: "Windows",
    heroMacPlusCardTitle: "Peekom Plus",
    heroMacPlusCardBadge: "付费",
    heroPlusCardMeta: "一次性购买 · 最多2台设备 · 永久使用",
    heroFreeCardTitle: "Peekom",
    heroFreeCardBadge: "免费",
    heroMacFreeCardBadge: "免费",
    heroWinCardMeta: "Windows 10 · 11 (64-bit)",
    heroMacFreeCardMeta: "macOS",
    heroFreeDownloadLabel: "下载",
    carouselCap1: "显示器边缘手柄",
    carouselCap2: "点击或快捷键打开备忘",
    carouselCap3: "ICE 模式 · 自动收起延迟",
    reviewBtnLabel: "写评价",
    reviewEmpty: "成为第一个分享体验的人！",
    reviewAnonymous: "匿名",
    detectWin: "检测: <strong>Windows</strong> — 推荐 Windows",
    detectMac: "检测: <strong>macOS</strong> — 推荐 macOS",
    detectGeneric: "未能检测操作系统 — 请手动选择",
    featuresTitle: "功能", featuresSub: "一览 Peekom 能做什么。",
    compareTitle: "Peekom vs Peekom Plus", compareSub: "同一个应用——Plus 在应用内解锁。",
    comparePricing: '<span class="pricing-was">$12.99</span> <span class="pricing-now">$9.99 USD</span> <span class="pricing-vat">(不含增值税)</span> · <span class="pricing-launch">首发优惠价</span> · 一次性购买 · 最多2台设备 · 含小版本更新 · 30天退款 (<a href="mailto:hello.peekom@gmail.com">hello.peekom@gmail.com</a>)',
    guidePlusP: '1) 在 Lemon Squeezy 以首发价 $9.99 购买 → 2) 通过邮件收到许可证密钥 → 3) 打开 Peekom → 在锁定界面或设置中输入密钥 → 4) Peekom Plus 激活完成。30天退款: <a href="mailto:hello.peekom@gmail.com">hello.peekom@gmail.com</a>',
    dlSub: "只需安装一次 Peekom。Plus 在应用内升级。",
    dlWin: "Peekom Setup (Windows)", dlMac: "Peekom Setup (macOS)",
    dlPlusHint: 'Peekom Plus: 原价 <span class="pricing-was">$12.99</span> → 首发 <strong>$9.99</strong> (不含增值税) · <a href="https://peekom.lemonsqueezy.com/checkout/buy/97457035-6963-4cc0-9348-63dbb738e6a8" id="dlBuyLinkInner">在 Lemon Squeezy 购买</a> → 在应用中输入许可证密钥',
    featureGifPending: "演示 GIF 即将推出",
    compareNoLabel: "不支持",
    faqSub: "关于 Peekom 的常见问题。",
    refundPolicyTitle: "Peekom Plus 退款政策",
    refundPolicyBody:
        "<p>Peekom Plus 的付款与退款由我们的销售记录商（Merchant of Record）Lemon Squeezy 处理。</p>" +
        '<ul class="faq-refund-list">' +
        "<li><strong>申请期限</strong> — 自购买之日起<strong>30天内</strong>提交的申请方予受理。</li>" +
        "<li><strong>可退款情形</strong> — 产品无法正常运行（应用无法启动或正常工作）以及同一订单的重复付款。</li>" +
        "<li><strong>不可退款</strong> — 单纯改变主意。</li>" +
        "<li><strong>退款后的许可证</strong> — 退款完成后，您的 Peekom Plus 许可证密钥将被停用，应用在下次联网启动时自动恢复为免费版。</li>" +
        '<li><strong>流程</strong> — 通过<a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">联系表单（或邮件）</a>附上订单号提交申请 → 我们审核 → 在 Lemon Squeezy 后台执行退款 → 实际到账时间视发卡行/支付方式而定，可能需要数个工作日。</li>' +
        "</ul>",
    faqR1q: "如何申请 Peekom Plus 退款？",
    faqR1a: '请通过<a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">联系表单（或邮件）</a>附上<strong>订单号</strong>提交申请。我们审核后会在 Lemon Squeezy 后台执行退款；实际到账时间视发卡行或支付方式而定，可能需要数个工作日。',
    faqR2q: "哪些情况可以退款？",
    faqR2a: "自购买之日起<strong>30天内</strong>，可对<strong>产品无法正常运行</strong>（应用无法启动或正常工作）以及同一订单的<strong>重复付款</strong>申请退款。单纯改变主意不予退款。付款与退款由销售记录商 Lemon Squeezy 处理。",
    faqR3q: "退款后许可证会怎样？",
    faqR3a: "退款完成后，您的 Peekom Plus 许可证密钥将被<strong>停用</strong>。应用在下次联网启动时会自动恢复为免费版，因此在申请退款前请确认您确实要停止使用 Plus。",
    faq1q: "免费版与 Peekom Plus 有什么区别？",
    faq1a: '免费版包含3个索引、分组移动、ICE 模式、悬停延迟、显示器选择、Markdown、格式工具栏和图片插入。Peekom Plus（首发 $9.99，原价 $12.99）在应用内解锁10个槽位、自定义主题、字体、透明度、图片缩放和导出。请参阅<a href="features.html#compare">对比表</a>。',
    compareFreeName: "Peekom (免费)",
    comparePlusName: "Peekom Plus",
    compareCta: "获取 Peekom Plus",
    comparePromoBanner: "首发优惠 · 当前 {pct}% 折扣",
    helpTitle: "指南", helpSub: "快速上手 Peekom。",
    guideStartBody:
        '<div class="guide-step">' +
            "<h3>1. 安装</h3>" +
            '<ul class="guide-step-list">' +
                '<li><strong>下载</strong> — 从<a href="download.html">下载</a>页面（或首页）获取 Windows 或 macOS 安装包。</li>' +
                "<li><strong>运行 Peekom-Setup.exe</strong> — 双击安装程序并按提示完成安装。</li>" +
                '<li><strong>SmartScreen 警告</strong> — 如出现蓝色窗口，请打开<a href="#" onclick="openModal(); return false;">安装指南</a>，依次选择 <strong>[更多信息]</strong> → <strong>[仍要运行]</strong>。</li>' +
            "</ul>" +
        "</div>" +
        '<div class="guide-step">' +
            "<h3>2. 通用与按索引设置</h3>" +
            '<p class="guide-step-lead">右键点击托盘图标 → <strong>设置</strong>。</p>' +
            '<h4 class="guide-step-sub">通用设置</h4>' +
            '<ul class="guide-step-list">' +
                "<li>选择 <strong>显示显示器</strong>（自动或固定）</li>" +
                "<li><strong>触发模式</strong> — <strong>鼠标控制</strong> / <strong>快捷键控制</strong>；可自定义三个快捷键（开关、上/下索引）</li>" +
                "<li>手柄 <strong>自动收起延迟</strong>（默认 0.3 秒，可在设置中调整）</li>" +
            "</ul>" +
            '<div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> 自定义字体、默认透明度、JSON 备份/恢复、导出 (.txt/.md/.json) 等。</div>' +
            '<h4 class="guide-step-sub">按索引设置</h4>' +
            '<ul class="guide-step-list">' +
                "<li>添加/删除 <strong>索引</strong>（免费3个）</li>" +
                "<li>为每个索引设置 <strong>标题和颜色</strong></li>" +
                "<li>选择备忘 <strong>宽高比</strong>（1:1 / 3:4）</li>" +
            "</ul>" +
            '<div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> 最多10个槽位，每个槽位可独立保存手柄位置。</div>' +
        "</div>" +
        '<div class="guide-step">' +
            "<h3>3. 编写备忘</h3>" +
            '<ul class="guide-step-list">' +
                "<li><strong>调整位置</strong> — 拖动边缘手柄到合适高度。</li>" +
                "<li><strong>Peek / ICE</strong> — 在备忘顶部切换。Peek 通过点击或快捷键打开；ICE 始终固定显示。</li>" +
                '<li><strong>自定义文本</strong> — 使用 Markdown、工具栏和图片。请参阅下方的<a href="#guide-edit">编辑</a>部分。</li>' +
            "</ul>" +
        "</div>" +
        '<div class="guide-step guide-step--last">' +
            "<h3>4. 升级到 Peekom Plus</h3>" +
            '<ul class="guide-step-list">' +
                "<li>通过应用内的 <strong>升级到 Plus</strong> 按钮（或首次启动时的设置窗口）输入许可证密钥。</li>" +
                '<li>详细步骤请参阅<a href="#guide-plus">激活 Plus</a>。</li>' +
            "</ul>" +
        "</div>",
    help1t: "1. 安装", help1p: "下载并运行 Peekom Setup。Windows 上可能出现 SmartScreen。",
    help2t: "2. 打开备忘", help2p: "点击手柄，或在 <strong>快捷键控制</strong>模式下按 <strong>Ctrl+Shift+M</strong>（默认）切换<strong>最近打开的</strong>备忘。",
    help3t: "3. 切换备忘", help3p: "在 <strong>鼠标控制</strong>模式下，面板打开时按 <strong>↑ / ↓</strong>。在 <strong>快捷键控制</strong>模式下使用 <strong>Ctrl+Shift+↑ / ↓</strong>（即使关闭也可）。<strong>Ctrl+1–9</strong>跳转到索引。",
    help4t: "4. 编写", help4p: "在面板中输入文字；在设置中添加索引和标题。",
    help5t: "5. ICE 模式", help5p: "点击 <strong>Peek / ICE</strong> 芯片即可固定备忘，无需悬停（免费与 Plus 均可用）。",
    help6t: "6. 设置 · Plus", help6p: "托盘 → 设置 → 通用选项卡可更改触发模式和快捷键。通过升级到 Plus 按钮输入密钥后，品牌将切换为 Peekom Plus。",
    winGuideBtn: "Windows 安装时出现蓝色 SmartScreen 警告？",
    dlTitle: "下载", dlWinNote: "Windows 10 · 11 (64-bit)",
    dlWinLabel: "Windows x64 · Windows 10 · 11 (64-bit)",
    dlMacLabel: "macOS",
    linkChangelog: "Changelog / Releases", linkPrev: "Previous Versions", linkSmartScreen: "SmartScreen Guide",
    faqTitle: "常见问题",
    faqGroupProductLabel: "产品与功能",
    faqGroupLicenseLabel: "许可证",
    faqGroupInstallLabel: "安装",
    faqGroupTroubleshootLabel: "故障排除",
    faq2q: "双显示器如何工作？",
    faq2a: "在 设置 → 显示显示器 中，可选择自动（跟随鼠标）或固定显示器。免费版与 Plus 均可用。",
    faq8q: "Peekom 只能在显示器右边缘使用吗？",
    faq8a: "目前仅支持显示器右边缘。我们计划在后续更新中支持左、上、下边缘。",
    faq9q: "误删了 Peekom Plus，付费功能会怎样？",
    faq9a:
        "<p>卸载应用不会取消您在 Lemon Squeezy 的许可证。按以下步骤可恢复 Peekom Plus 及所有付费功能。</p>" +
        '<ul class="guide-step-list">' +
        "<li><strong>1. 重新安装 Peekom</strong> — 从 <a href=\"download.html\">peekom.com</a> 下载免费版（<code>Peekom-Setup.exe</code>）并安装。</li>" +
        "<li><strong>2. 查找许可证密钥</strong> — 打开购买时 Lemon Squeezy 发送的收据邮件，复制 <strong>[License Key]</strong>。若邮件丢失，可用同一邮箱登录 Lemon Squeezy 订单记录页面重新查看。</li>" +
        "<li><strong>3. 重新认证</strong> — 点击应用右上角的齿轮（设置），在 <strong>Plus 认证</strong> 中粘贴密钥并确认。应用将立即变为 Peekom Plus，恢复 10 个槽位、自定义主题等付费功能。</li>" +
        "</ul>" +
        "<p><strong>设备数量限制（最多 2 台）</strong> — 在同一台电脑上卸载后重装视为同一设备，不影响认证次数。更换电脑时，每个许可证最多可注册 2 台设备（例如工作电脑 1 台 + 个人电脑 1 台）。</p>",
    faq3q: "如何激活 Plus？",
    faq3a: "在 Lemon Squeezy 购买后，在应用内输入许可证密钥即可解锁 Peekom Plus（无需重新安装）。",
    faq3bq: "一个许可证密钥可以在多台电脑上使用吗？",
    faq3ba: "可以。同一组16位许可证密钥最多可在两台电脑（例如工作电脑和个人电脑）上各输入一次，以使用 Peekom Plus。",
    faq3cq: "更换公司电脑或跳槽后还能继续使用吗？",
    faq3ca: "Peekom Plus 许可证基本上可在最多 2 台设备上使用。在同一设备上删除后重新安装是可以的。如需更换到新设备，请通过联系我们确认后获得支持。视情况可能需要先重置已激活的设备，再在新设备上重新认证。",
    faq3dq: "需要更换设备时应发送哪些信息？",
    faq3da: "为加快确认，请一并发送购买时使用的电子邮箱、订单号、许可证密钥以及更换设备的原因。若两台设备均已激活，我们可能会先重置现有激活设备再指导重新认证，因此请先备份所需内容后再联系我们。",
    faq4q: "Windows 安装时出现蓝色警告。",
    faq4a: '未签名应用常见 SmartScreen 警告。请参阅<a href="#" onclick="openModal(); return false;">安装指南</a>：[更多信息] → [仍要运行]。',
    faq5q: "支持哪些 Windows 版本？",
    faq5a: "Peekom 运行于 Windows 10 和 11 (64-bit)。安装包仅支持 64 位。不支持 Windows 7、8 和 8.1（Electron 36）。",
    faq6q: "添加了索引但设置中不显示。",
    faq6a: "重新打开设置以刷新列表；最新版本会自动同步。",
    faq7q: "卸载后启动时仍出现奇怪文字。",
    faq7a: "在任务管理器中禁用残留的 Peekom 启动项，或重新安装后再卸载。",
    compareColFeature: "功能",
    contactTitle: "联系", contactSub: "欢迎发送反馈。",
    contactFeedbackTitle: "发送反馈",
    contactFeedbackDesc: "错误报告、功能建议、许可证咨询",
    contactFeedbackBtn: "打开反馈表单",
    contactReviewTitle: "留下评价",
    contactReviewDesc: "分享您的使用体验，可能会展示在网站上。",
    contactReviewBtn: "打开评价表单",
    contactEmailTitle: "邮件联系",
    contactEmailDesc: "需要直接联系时",
    contactNote: "我们会在约10个工作日内回复。Google 表单比邮件更快送达，请尽量使用表单提交。",
    contactEmail: "hello.peekom@gmail.com",
    footerCopy: "© 2026. Peekom All rights reserved.",
    footerPrivacy: "隐私政策",
    guideTitle: "Windows SmartScreen 安装指南",
    step1: '运行安装程序时，可能会出现显示 <b>「无法识别的应用」</b> 的蓝色 SmartScreen 窗口。',
    step2: "请点击屏幕上方的 <b>[更多信息]</b>。",
    step3: "点击右下方出现的 <b>[仍要运行]</b> 按钮即可完成安装。",
    searchNoResults: "无结果",
    modalClose: "关闭",
    promoNote: "促销结束后计划涨价",
    promoSectionTitle: "Peekom Plus (付费)",
    promoFreeTitle: "Peekom (免费)",
    promoVat: "(不含增值税)",
    promoLaunchLabel: "首发优惠\n价格\n已生效",
    comparePricingExtra: ' · 一次性购买 · 最多2台设备 · 含小版本更新 · 30天退款 (<a href="mailto:hello.peekom@gmail.com">hello.peekom@gmail.com</a>)',
    dlPlusHintExtra: ' · <a href="https://peekom.lemonsqueezy.com/checkout/buy/97457035-6963-4cc0-9348-63dbb738e6a8" id="dlBuyLinkInner">在 Lemon Squeezy 购买</a> → 在应用中输入许可证密钥',
    markdownGuideTitle: "用 Markdown 编写备忘",
    markdownGuideBody:
        '<p class="guide-table-intro">像平时一样输入——按 <strong>Enter</strong> 后自动应用格式。</p>' +
        '<table class="compare-table guide-table"><thead><tr><th>输入格式</th><th>按 Enter 后</th></tr></thead><tbody>' +
        '<tr><td><code># 会议议程</code></td><td class="guide-md-result"><h1 class="guide-md-h1">会议议程</h1></td></tr>' +
        '<tr><td><code>## 备忘</code></td><td class="guide-md-result"><h2 class="guide-md-h2">备忘</h2></td></tr>' +
        '<tr><td><code>### 参考</code></td><td class="guide-md-result"><h3 class="guide-md-h3">参考</h3></td></tr>' +
        '<tr><td><code>- 待办</code></td><td class="guide-md-result"><ul class="guide-md-ul"><li>待办</li></ul></td></tr>' +
        '<tr><td><code>- [ ] 待办</code></td><td class="guide-md-result"><label class="guide-md-task"><input type="checkbox" disabled> 待办</label></td></tr>' +
        '<tr><td><code>**重要**</code></td><td class="guide-md-result"><strong>重要</strong></td></tr>' +
        '<tr><td><code>*强调*</code></td><td class="guide-md-result"><em>强调</em></td></tr>' +
        "</tbody></table>",
    formatBarGuideTitle: "用工具栏编写备忘",
    formatBarGuideBody:
        '<p class="guide-table-intro">点击备忘上方的工具栏按钮即可，无需记忆键盘快捷键。</p>' +
        '<table class="compare-table guide-table"><thead><tr><th>功能</th><th>使用方法</th></tr></thead><tbody>' +
        "<tr><td>颜色 · 粗体 · 斜体 · 下划线 · 删除线</td><td>选中文字后点击按钮</td></tr>" +
        "<tr><td>对齐（左/居中/右/两端）</td><td>更改段落对齐方式</td></tr>" +
        "<tr><td>列表（圆点/方块/编号/纯文本）</td><td>从下拉菜单选择列表样式</td></tr>" +
        "<tr><td>插入图片</td><td>免费 1张 · Plus 5张（Plus 可缩放和裁剪）</td></tr>" +
        "</tbody></table>",
    guideKeysTitle: "快捷键",
    guideKeysIntro: '在 设置 → 通用 → <strong>触发模式</strong>中选择 <strong>鼠标控制</strong>或 <strong>快捷键控制</strong>。macOS 上使用 ⌘ (Command) 代替 Ctrl。',
    gkColAction: "操作", gkColKey: "默认", gkColNote: "说明",
    gk1a: "开关备忘", gk1k: "Ctrl+Shift+M",
    gk1n: "最近的备忘。仅快捷键控制模式。可在 设置 → 通用 → 触发模式 中自定义",
    gk2a: "打开上一个索引", gk2k: "Ctrl+Shift+↑",
    gk2n: "打开上一个索引并显示面板。快捷键控制模式。可在设置中自定义",
    gk3a: "打开下一个索引", gk3k: "Ctrl+Shift+↓",
    gk3n: "打开下一个索引并显示面板。快捷键控制模式。可在设置中自定义",
    gk4a: "切换索引", gk4k: "↑ / ↓",
    gk4n: "仅鼠标控制模式，面板须已打开",
    gk5a: "跳转到索引", gk5k: "Ctrl+1–9 (Ctrl+0 = 第10个)",
    gk5n: "直接打开该索引的备忘",
    gk6a: "字体大小", gk6k: "Ctrl + 滚轮", gk6n: "在备忘区域内。仅 Plus",
    guidePlusTitle: "激活 Plus",
    guidePlusStep1: "1. 使用下方按钮购买 Peekom Plus。",
    guidePlusStep2: "2. 查收邮件中的许可证密钥。",
    guidePlusStep3: "3. 打开 Peekom，在 <strong>设置</strong>窗口或 <strong>设置</strong>中输入密钥。",
    macComingSoonTitle: "macOS",
    macComingSoonBody: "macOS 版本正在开发中。<br>预计发布：<strong>2026年7月</strong>。",
    guidePlusStep4: "4. Peekom Plus 激活完成。",
    guideNavStart: "入门", guideNavKeys: "快捷键", guideNavEdit: "编辑", guideNavPlus: "激活 Plus",
    guideSectionEditTitle: "编辑",
    versionHistoryTitle: "版本历史",
    versionColVersion: "版本", versionColDate: "发布日期", versionColWin: "Windows", versionColMac: "macOS",
    versionLatest: "最新", versionWin: "64-bit", versionMac: "Universal", versionMacSoon: "即将推出",
    changelogTitle: "更新日志",
    fz1Title: "从边缘 Peek",
    fz1Items: [
        { text: "点击索引快速打开备忘" },
        { text: "拖动索引调整位置" },
        { text: "Peek / ICE 模式切换" },
        { text: "Peek 模式下自动收起" }
    ],
    fz2Title: "更高效地工作",
    fz2Items: [
        { text: "快捷键打开最近备忘" },
        { text: "固定目标显示器" },
        { text: "Markdown 语法支持" },
        { text: "插入图片" }
    ],
    fz3Title: "专属自定义备忘",
    fz3Items: [
        { text: "格式工具栏" },
        { text: "自定义索引标题" },
        { text: "备忘宽高比 (1:1, 3:4)" },
        { text: "默认背景色" }
    ],
    fz4Title: "Plus 更进一步",
    fz4Items: [
        { text: "最多10个独立索引", plus: true },
        { text: "导出 · JSON 备份", plus: true },
        { text: "每条备忘最多5张图片", plus: true },
        { text: "图片缩放 · 比例裁剪", plus: true }
    ],
    fz5Title: "Plus 专属自定义",
    fz5Items: [
        { text: "字体大小控制", plus: true },
        { text: "备忘默认透明度", plus: true },
        { text: "自定义背景和文字颜色", plus: true },
        { text: "自定义字体", plus: true }
    ],
    footerLangLabel: "语言",
    themeLight: "Light",
    themeDark: "Dark",
    themeAuto: "Auto",
    themeLightLabel: "浅色模式",
    themeDarkLabel: "深色模式",
    themeAutoLabel: "跟随系统",
    themeAriaLabel: "主题",
    pageCtaDownload: "下载",
    pageCtaCompare: "查看对比表",
    featuresCtaTitle: "用 Peekom Plus 扩展",
    featuresCtaDesc: "在应用内解锁10个槽位、自定义主题、导出等功能。",
    helpCtaTitle: "立即开始",
    helpCtaDesc: "安装 Peekom，在显示器边缘试用备忘。",
    faqCtaTitle: "还有疑问？",
    faqCtaDesc: "请参阅功能对比表了解免费版与 Plus 的区别。",
    contactCtaTitle: "还没试过 Peekom？",
    contactCtaDesc: "免费安装，马上开始使用。",
    downloadCtaTitle: "需要 Plus？",
    downloadCtaDesc: "在同一应用中输入许可证密钥即可激活 Plus。"
};

window.PeekomI18nLocales["zh-TW"] = {
    navHome: "首頁", navFeatures: "功能", navDownload: "下載", navFaq: "常見問題", navHelp: "指南", navContact: "聯絡",
    searchPlaceholder: "搜尋...",
    heroTitleMain: "Peekom",
    heroTagline: "邊緣備忘應用程式以 <strong>Peekom</strong> 回歸。<br>輕量快速——不打斷您的工作或簡報節奏。",
    heroPlusNote: '安裝免費應用程式後，可在設定中升級到 Peekom Plus。<br>在<a href="features.html#compare">功能比較表</a>中查看免費版與 Plus 的差異。',
    heroUpgradeNote: "安裝免費應用程式後，可在設定中升級到 Peekom Plus。",
    heroFreeCompareNote: '<a href="features.html#compare">查看免費版與 Plus 的差異</a>。',
    heroWinBtn: "下載 Windows 版", heroMacBtn: "下載 macOS 版",
    heroPlusBuyBtn: "立即購買",
    heroPlusCardTitle: "Peekom Plus",
    heroPlusCardBadge: "付費",
    heroPlusCardOs: "Windows",
    heroMacPlusCardTitle: "Peekom Plus",
    heroMacPlusCardBadge: "付費",
    heroPlusCardMeta: "一次性購買 · 最多2台裝置 · 永久使用",
    heroFreeCardTitle: "Peekom",
    heroFreeCardBadge: "免費",
    heroMacFreeCardBadge: "免費",
    heroWinCardMeta: "Windows 10 · 11 (64-bit)",
    heroMacFreeCardMeta: "macOS",
    heroFreeDownloadLabel: "下載",
    carouselCap1: "螢幕邊緣手柄",
    carouselCap2: "點擊或快捷鍵開啟備忘",
    carouselCap3: "ICE 模式 · 自動收起延遲",
    reviewBtnLabel: "撰寫評論",
    reviewEmpty: "成為第一個分享體驗的人！",
    reviewAnonymous: "匿名",
    detectWin: "偵測: <strong>Windows</strong> — 建議 Windows",
    detectMac: "偵測: <strong>macOS</strong> — 建議 macOS",
    detectGeneric: "無法偵測作業系統 — 請手動選擇",
    featuresTitle: "功能", featuresSub: "一覽 Peekom 能做什麼。",
    compareTitle: "Peekom vs Peekom Plus", compareSub: "同一個應用程式——Plus 在應用程式內解鎖。",
    comparePricing: '<span class="pricing-was">$12.99</span> <span class="pricing-now">$9.99 USD</span> <span class="pricing-vat">(不含增值稅)</span> · <span class="pricing-launch">首發優惠價</span> · 一次性購買 · 最多2台裝置 · 含小版本更新 · 30天退款 (<a href="mailto:hello.peekom@gmail.com">hello.peekom@gmail.com</a>)',
    guidePlusP: '1) 在 Lemon Squeezy 以首發價 $9.99 購買 → 2) 透過電子郵件收到授權金鑰 → 3) 開啟 Peekom → 在鎖定畫面或設定中輸入金鑰 → 4) Peekom Plus 啟用完成。30天退款: <a href="mailto:hello.peekom@gmail.com">hello.peekom@gmail.com</a>',
    dlSub: "只需安裝一次 Peekom。Plus 在應用程式內升級。",
    dlWin: "Peekom Setup (Windows)", dlMac: "Peekom Setup (macOS)",
    dlPlusHint: 'Peekom Plus: 原價 <span class="pricing-was">$12.99</span> → 首發 <strong>$9.99</strong> (不含增值稅) · <a href="https://peekom.lemonsqueezy.com/checkout/buy/97457035-6963-4cc0-9348-63dbb738e6a8" id="dlBuyLinkInner">在 Lemon Squeezy 購買</a> → 在應用程式中輸入授權金鑰',
    featureGifPending: "示範 GIF 即將推出",
    compareNoLabel: "不支援",
    faqSub: "關於 Peekom 的常見問題。",
    refundPolicyTitle: "Peekom Plus 退款政策",
    refundPolicyBody:
        "<p>Peekom Plus 的付款與退款由我們的銷售記錄商（Merchant of Record）Lemon Squeezy 處理。</p>" +
        '<ul class="faq-refund-list">' +
        "<li><strong>申請期限</strong> — 自購買之日起<strong>30天內</strong>提交的申請方予受理。</li>" +
        "<li><strong>可退款情形</strong> — 產品無法正常運作（應用程式無法啟動或正常運作）以及同一訂單的重複付款。</li>" +
        "<li><strong>不可退款</strong> — 單純改變心意。</li>" +
        "<li><strong>退款後的授權</strong> — 退款完成後，您的 Peekom Plus 授權金鑰將被停用，應用程式在下次連線啟動時自動還原為免費版。</li>" +
        '<li><strong>流程</strong> — 透過<a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">聯絡表單（或電子郵件）</a>附上訂單編號提交申請 → 我們審核 → 在 Lemon Squeezy 後台執行退款 → 實際入帳時間視發卡行/付款方式而定，可能需要數個工作日。</li>' +
        "</ul>",
    faqR1q: "如何申請 Peekom Plus 退款？",
    faqR1a: '請透過<a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">聯絡表單（或電子郵件）</a>附上<strong>訂單編號</strong>提交申請。我們審核後會在 Lemon Squeezy 後台執行退款；實際入帳時間視發卡行或付款方式而定，可能需要數個工作日。',
    faqR2q: "哪些情況可以退款？",
    faqR2a: "自購買之日起<strong>30天內</strong>，可針對<strong>產品無法正常運作</strong>（應用程式無法啟動或正常運作）以及同一訂單的<strong>重複付款</strong>申請退款。單純改變心意不予退款。付款與退款由銷售記錄商 Lemon Squeezy 處理。",
    faqR3q: "退款後授權會如何？",
    faqR3a: "退款完成後，您的 Peekom Plus 授權金鑰將被<strong>停用</strong>。應用程式在下次連線啟動時會自動還原為免費版，因此在申請退款前請確認您確實要停止使用 Plus。",
    faq1q: "免費版與 Peekom Plus 有什麼不同？",
    faq1a: '免費版包含3個索引、群組移動、ICE 模式、懸停延遲、螢幕選擇、Markdown、格式工具列和圖片插入。Peekom Plus（首發 $9.99，原價 $12.99）在應用程式內解鎖10個槽位、自訂主題、字型、透明度、圖片縮放和匯出。請參閱<a href="features.html#compare">比較表</a>。',
    compareFreeName: "Peekom (免費)",
    comparePlusName: "Peekom Plus",
    compareCta: "取得 Peekom Plus",
    comparePromoBanner: "首發優惠 · 目前 {pct}% 折扣",
    helpTitle: "指南", helpSub: "快速上手 Peekom。",
    guideStartBody:
        '<div class="guide-step">' +
            "<h3>1. 安裝</h3>" +
            '<ul class="guide-step-list">' +
                '<li><strong>下載</strong> — 從<a href="download.html">下載</a>頁面（或首頁）取得 Windows 或 macOS 安裝檔。</li>' +
                "<li><strong>執行 Peekom-Setup.exe</strong> — 雙擊安裝程式並依提示完成安裝。</li>" +
                '<li><strong>SmartScreen 警告</strong> — 如出現藍色視窗，請開啟<a href="#" onclick="openModal(); return false;">安裝指南</a>，依序選擇 <strong>[詳細資訊]</strong> → <strong>[仍要執行]</strong>。</li>' +
            "</ul>" +
        "</div>" +
        '<div class="guide-step">' +
            "<h3>2. 通用與按索引設定</h3>" +
            '<p class="guide-step-lead">右鍵點擊系統匣圖示 → <strong>設定</strong>。</p>' +
            '<h4 class="guide-step-sub">通用設定</h4>' +
            '<ul class="guide-step-list">' +
                "<li>選擇 <strong>顯示螢幕</strong>（自動或固定）</li>" +
                "<li><strong>觸發模式</strong> — <strong>滑鼠控制</strong> / <strong>快捷鍵控制</strong>；可自訂三個快捷鍵（開關、上/下索引）</li>" +
                "<li>手柄 <strong>自動收起延遲</strong>（預設 0.3 秒，可在設定中調整）</li>" +
            "</ul>" +
            '<div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> 自訂字型、預設透明度、JSON 備份/還原、匯出 (.txt/.md/.json) 等。</div>' +
            '<h4 class="guide-step-sub">按索引設定</h4>' +
            '<ul class="guide-step-list">' +
                "<li>新增/刪除 <strong>索引</strong>（免費3個）</li>" +
                "<li>為每個索引設定 <strong>標題和顏色</strong></li>" +
                "<li>選擇備忘 <strong>寬高比</strong>（1:1 / 3:4）</li>" +
            "</ul>" +
            '<div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> 最多10個槽位，每個槽位可獨立儲存手柄位置。</div>' +
        "</div>" +
        '<div class="guide-step">' +
            "<h3>3. 撰寫備忘</h3>" +
            '<ul class="guide-step-list">' +
                "<li><strong>調整位置</strong> — 拖曳邊緣手柄到合適高度。</li>" +
                "<li><strong>Peek / ICE</strong> — 在備忘頂部切換。Peek 透過點擊或快捷鍵開啟；ICE 始終固定顯示。</li>" +
                '<li><strong>自訂文字</strong> — 使用 Markdown、工具列和圖片。請參閱下方的<a href="#guide-edit">編輯</a>部分。</li>' +
            "</ul>" +
        "</div>" +
        '<div class="guide-step guide-step--last">' +
            "<h3>4. 升級到 Peekom Plus</h3>" +
            '<ul class="guide-step-list">' +
                "<li>透過應用程式內的 <strong>升級到 Plus</strong> 按鈕（或首次啟動時的設定視窗）輸入授權金鑰。</li>" +
                '<li>詳細步驟請參閱<a href="#guide-plus">啟用 Plus</a>。</li>' +
            "</ul>" +
        "</div>",
    help1t: "1. 安裝", help1p: "下載並執行 Peekom Setup。Windows 上可能出現 SmartScreen。",
    help2t: "2. 開啟備忘", help2p: "點擊手柄，或在 <strong>快捷鍵控制</strong>模式下按 <strong>Ctrl+Shift+M</strong>（預設）切換<strong>最近開啟的</strong>備忘。",
    help3t: "3. 切換備忘", help3p: "在 <strong>滑鼠控制</strong>模式下，面板開啟時按 <strong>↑ / ↓</strong>。在 <strong>快捷鍵控制</strong>模式下使用 <strong>Ctrl+Shift+↑ / ↓</strong>（即使關閉也可）。<strong>Ctrl+1–9</strong>跳轉到索引。",
    help4t: "4. 撰寫", help4p: "在面板中輸入文字；在設定中新增索引和標題。",
    help5t: "5. ICE 模式", help5p: "點擊 <strong>Peek / ICE</strong> 晶片即可固定備忘，無需懸停（免費與 Plus 均可用）。",
    help6t: "6. 設定 · Plus", help6p: "系統匣 → 設定 → 通用分頁可變更觸發模式和快捷鍵。透過升級到 Plus 按鈕輸入金鑰後，品牌將切換為 Peekom Plus。",
    winGuideBtn: "Windows 安裝時出現藍色 SmartScreen 警告？",
    dlTitle: "下載", dlWinNote: "Windows 10 · 11 (64-bit)",
    dlWinLabel: "Windows x64 · Windows 10 · 11 (64-bit)",
    dlMacLabel: "macOS",
    linkChangelog: "Changelog / Releases", linkPrev: "Previous Versions", linkSmartScreen: "SmartScreen Guide",
    faqTitle: "常見問題",
    faqGroupProductLabel: "產品與功能",
    faqGroupLicenseLabel: "授權",
    faqGroupInstallLabel: "安裝",
    faqGroupTroubleshootLabel: "疑難排解",
    faq2q: "雙螢幕如何運作？",
    faq2a: "在 設定 → 顯示螢幕 中，可選擇自動（跟隨滑鼠）或固定螢幕。免費版與 Plus 均可用。",
    faq8q: "Peekom 只能在螢幕右邊緣使用嗎？",
    faq8a: "目前僅支援螢幕右邊緣。我們計劃在後續更新中支援左、上、下邊緣。",
    faq9q: "誤刪了 Peekom Plus，付費功能會怎樣？",
    faq9a:
        "<p>解除安裝應用程式不會取消您在 Lemon Squeezy 的授權。依下列步驟可恢復 Peekom Plus 與所有付費功能。</p>" +
        '<ul class="guide-step-list">' +
        "<li><strong>1. 重新安裝 Peekom</strong> — 從 <a href=\"download.html\">peekom.com</a> 下載免費版（<code>Peekom-Setup.exe</code>）並安裝。</li>" +
        "<li><strong>2. 查詢授權金鑰</strong> — 開啟購買時 Lemon Squeezy 寄送的收據郵件，複製 <strong>[License Key]</strong>。若郵件遺失，可用相同電子郵件登入 Lemon Squeezy 訂單紀錄頁面重新查看。</li>" +
        "<li><strong>3. 重新認證</strong> — 點選應用程式右上角的齒輪（設定），在 <strong>Plus 認證</strong> 貼上金鑰並確認。應用程式將立即變為 Peekom Plus，恢復 10 個槽位、自訂主題等付費功能。</li>" +
        "</ul>" +
        "<p><strong>裝置數量限制（最多 2 台）</strong> — 在同一台電腦上解除安裝後重装視為同一裝置，不影響認證次數。更換電腦時，每組授權最多可註冊 2 台裝置（例如工作電腦 1 台 + 個人電腦 1 台）。</p>",
    faq3q: "如何啟用 Plus？",
    faq3a: "在 Lemon Squeezy 購買後，在應用程式內輸入授權金鑰即可解鎖 Peekom Plus（無需重新安裝）。",
    faq3bq: "一組授權金鑰可以在多台電腦上使用嗎？",
    faq3ba: "可以。同一組16位授權金鑰最多可在兩台電腦（例如工作電腦與個人電腦）上各輸入一次，以使用 Peekom Plus。",
    faq3cq: "更換公司電腦或跳槽後還能繼續使用嗎？",
    faq3ca: "Peekom Plus 授權基本上可在最多 2 台裝置上使用。在同一裝置上刪除後重新安裝是可以的。若需更換到新裝置，請透過聯絡我們確認後獲得支援。視情況可能需要先重設已啟用的裝置，再於新裝置上重新認證。",
    faq3dq: "需要更換裝置時應傳送哪些資訊？",
    faq3da: "為加快確認，請一併傳送購買時使用的電子郵件、訂單編號、授權金鑰以及更換裝置的原因。若兩台裝置均已啟用，我們可能會先重設現有啟用裝置再指導重新認證，因此請先備份所需內容後再聯絡我們。",
    faq4q: "Windows 安裝時出現藍色警告。",
    faq4a: '未簽署應用程式常見 SmartScreen 警告。請參閱<a href="#" onclick="openModal(); return false;">安裝指南</a>：[詳細資訊] → [仍要執行]。',
    faq5q: "支援哪些 Windows 版本？",
    faq5a: "Peekom 運行於 Windows 10 和 11 (64-bit)。安裝檔僅支援 64 位元。不支援 Windows 7、8 和 8.1（Electron 36）。",
    faq6q: "新增了索引但設定中不顯示。",
    faq6a: "重新開啟設定以重新整理清單；最新版本會自動同步。",
    faq7q: "解除安裝後啟動時仍出現奇怪文字。",
    faq7a: "在工作管理員中停用殘留的 Peekom 啟動項目，或重新安裝後再解除安裝。",
    compareColFeature: "功能",
    contactTitle: "聯絡", contactSub: "歡迎提供意見回饋。",
    contactFeedbackTitle: "傳送意見回饋",
    contactFeedbackDesc: "錯誤回報、功能建議、授權諮詢",
    contactFeedbackBtn: "開啟意見表單",
    contactReviewTitle: "留下評價",
    contactReviewDesc: "分享您的使用體驗，可能會展示在網站上。",
    contactReviewBtn: "開啟評價表單",
    contactEmailTitle: "電子郵件聯絡",
    contactEmailDesc: "需要直接聯絡時",
    contactNote: "我們會在約10個工作天內回覆。Google 表單比電子郵件更快送達，請盡量使用表單提交。",
    contactEmail: "hello.peekom@gmail.com",
    footerCopy: "© 2026. Peekom All rights reserved.",
    footerPrivacy: "隱私權政策",
    guideTitle: "Windows SmartScreen 安裝指南",
    step1: '執行安裝程式時，可能會出現顯示 <b>「無法識別的應用程式」</b> 的藍色 SmartScreen 視窗。',
    step2: "請點選畫面上方的 <b>[詳細資訊]</b>。",
    step3: "點選右下方出現的 <b>[仍要執行]</b> 按鈕即可完成安裝。",
    searchNoResults: "無結果",
    modalClose: "關閉",
    promoNote: "促銷結束後計劃漲價",
    promoSectionTitle: "Peekom Plus (付費)",
    promoFreeTitle: "Peekom (免費)",
    promoVat: "(不含增值稅)",
    promoLaunchLabel: "首發優惠\n價格\n已生效",
    comparePricingExtra: ' · 一次性購買 · 最多2台裝置 · 含小版本更新 · 30天退款 (<a href="mailto:hello.peekom@gmail.com">hello.peekom@gmail.com</a>)',
    dlPlusHintExtra: ' · <a href="https://peekom.lemonsqueezy.com/checkout/buy/97457035-6963-4cc0-9348-63dbb738e6a8" id="dlBuyLinkInner">在 Lemon Squeezy 購買</a> → 在應用程式中輸入授權金鑰',
    markdownGuideTitle: "用 Markdown 撰寫備忘",
    markdownGuideBody:
        '<p class="guide-table-intro">像平時一樣輸入——按 <strong>Enter</strong> 後自動套用格式。</p>' +
        '<table class="compare-table guide-table"><thead><tr><th>輸入格式</th><th>按 Enter 後</th></tr></thead><tbody>' +
        '<tr><td><code># 會議議程</code></td><td class="guide-md-result"><h1 class="guide-md-h1">會議議程</h1></td></tr>' +
        '<tr><td><code>## 備忘</code></td><td class="guide-md-result"><h2 class="guide-md-h2">備忘</h2></td></tr>' +
        '<tr><td><code>### 參考</code></td><td class="guide-md-result"><h3 class="guide-md-h3">參考</h3></td></tr>' +
        '<tr><td><code>- 待辦</code></td><td class="guide-md-result"><ul class="guide-md-ul"><li>待辦</li></ul></td></tr>' +
        '<tr><td><code>- [ ] 待辦</code></td><td class="guide-md-result"><label class="guide-md-task"><input type="checkbox" disabled> 待辦</label></td></tr>' +
        '<tr><td><code>**重要**</code></td><td class="guide-md-result"><strong>重要</strong></td></tr>' +
        '<tr><td><code>*強調*</code></td><td class="guide-md-result"><em>強調</em></td></tr>' +
        "</tbody></table>",
    formatBarGuideTitle: "用工具列撰寫備忘",
    formatBarGuideBody:
        '<p class="guide-table-intro">點擊備忘上方的工具列按鈕即可，無需記憶鍵盤快捷鍵。</p>' +
        '<table class="compare-table guide-table"><thead><tr><th>功能</th><th>使用方法</th></tr></thead><tbody>' +
        "<tr><td>顏色 · 粗體 · 斜體 · 底線 · 刪除線</td><td>選取文字後點擊按鈕</td></tr>" +
        "<tr><td>對齊（左/置中/右/左右對齊）</td><td>變更段落對齊方式</td></tr>" +
        "<tr><td>清單（圓點/方塊/編號/純文字）</td><td>從下拉選單選擇清單樣式</td></tr>" +
        "<tr><td>插入圖片</td><td>免費 1張 · Plus 5張（Plus 可縮放和裁剪）</td></tr>" +
        "</tbody></table>",
    guideKeysTitle: "快捷鍵",
    guideKeysIntro: '在 設定 → 通用 → <strong>觸發模式</strong>中選擇 <strong>滑鼠控制</strong>或 <strong>快捷鍵控制</strong>。macOS 上使用 ⌘ (Command) 代替 Ctrl。',
    gkColAction: "操作", gkColKey: "預設", gkColNote: "說明",
    gk1a: "開關備忘", gk1k: "Ctrl+Shift+M",
    gk1n: "最近的備忘。僅快捷鍵控制模式。可在 設定 → 通用 → 觸發模式 中自訂",
    gk2a: "開啟上一個索引", gk2k: "Ctrl+Shift+↑",
    gk2n: "開啟上一個索引並顯示面板。快捷鍵控制模式。可在設定中自訂",
    gk3a: "開啟下一個索引", gk3k: "Ctrl+Shift+↓",
    gk3n: "開啟下一個索引並顯示面板。快捷鍵控制模式。可在設定中自訂",
    gk4a: "切換索引", gk4k: "↑ / ↓",
    gk4n: "僅滑鼠控制模式，面板須已開啟",
    gk5a: "跳轉到索引", gk5k: "Ctrl+1–9 (Ctrl+0 = 第10個)",
    gk5n: "直接開啟該索引的備忘",
    gk6a: "字型大小", gk6k: "Ctrl + 滾輪", gk6n: "在備忘區域內。僅 Plus",
    guidePlusTitle: "啟用 Plus",
    guidePlusStep1: "1. 使用下方按鈕購買 Peekom Plus。",
    guidePlusStep2: "2. 查收電子郵件中的授權金鑰。",
    guidePlusStep3: "3. 開啟 Peekom，在 <strong>設定</strong>視窗或 <strong>設定</strong>中輸入金鑰。",
    macComingSoonTitle: "macOS",
    macComingSoonBody: "macOS 版本正在開發中。<br>預計發布：<strong>2026年7月</strong>。",
    guidePlusStep4: "4. Peekom Plus 啟用完成。",
    guideNavStart: "入門", guideNavKeys: "快捷鍵", guideNavEdit: "編輯", guideNavPlus: "啟用 Plus",
    guideSectionEditTitle: "編輯",
    versionHistoryTitle: "版本歷史",
    versionColVersion: "版本", versionColDate: "發布日期", versionColWin: "Windows", versionColMac: "macOS",
    versionLatest: "最新", versionWin: "64-bit", versionMac: "Universal", versionMacSoon: "即將推出",
    changelogTitle: "更新紀錄",
    fz1Title: "從邊緣 Peek",
    fz1Items: [
        { text: "點擊索引快速開啟備忘" },
        { text: "拖曳索引調整位置" },
        { text: "Peek / ICE 模式切換" },
        { text: "Peek 模式下自動收起" }
    ],
    fz2Title: "更高效地工作",
    fz2Items: [
        { text: "快捷鍵開啟最近備忘" },
        { text: "固定目標螢幕" },
        { text: "Markdown 語法支援" },
        { text: "插入圖片" }
    ],
    fz3Title: "專屬自訂備忘",
    fz3Items: [
        { text: "格式工具列" },
        { text: "自訂索引標題" },
        { text: "備忘寬高比 (1:1, 3:4)" },
        { text: "預設背景色" }
    ],
    fz4Title: "Plus 更進一步",
    fz4Items: [
        { text: "最多10個獨立索引", plus: true },
        { text: "匯出 · JSON 備份", plus: true },
        { text: "每則備忘最多5張圖片", plus: true },
        { text: "圖片縮放 · 比例裁剪", plus: true }
    ],
    fz5Title: "Plus 專屬自訂",
    fz5Items: [
        { text: "字型大小控制", plus: true },
        { text: "備忘預設透明度", plus: true },
        { text: "自訂背景和文字顏色", plus: true },
        { text: "自訂字型", plus: true }
    ],
    footerLangLabel: "語言",
    themeLight: "Light",
    themeDark: "Dark",
    themeAuto: "Auto",
    themeLightLabel: "淺色模式",
    themeDarkLabel: "深色模式",
    themeAutoLabel: "跟隨系統",
    themeAriaLabel: "主題",
    pageCtaDownload: "下載",
    pageCtaCompare: "查看比較表",
    featuresCtaTitle: "用 Peekom Plus 擴展",
    featuresCtaDesc: "在應用程式內解鎖10個槽位、自訂主題、匯出等功能。",
    helpCtaTitle: "立即開始",
    helpCtaDesc: "安裝 Peekom，在螢幕邊緣試用備忘。",
    faqCtaTitle: "還有疑問？",
    faqCtaDesc: "請參閱功能比較表了解免費版與 Plus 的差異。",
    contactCtaTitle: "還沒試過 Peekom？",
    contactCtaDesc: "免費安裝，馬上開始使用。",
    downloadCtaTitle: "需要 Plus？",
    downloadCtaDesc: "在同一應用程式中輸入授權金鑰即可啟用 Plus。"
};

})();

(function () {
"use strict";
var BUY_S = "https://peekom.lemonsqueezy.com/checkout/buy/8b4a9b92-e815-43b9-916d-8072cff6c35a";
var BUY_D = "https://peekom.lemonsqueezy.com/checkout/buy/97457035-6963-4cc0-9348-63dbb738e6a8";
var BUY_F = "https://peekom.lemonsqueezy.com/checkout/buy/55e7b539-687f-4af0-b6bc-65196fcf9d18";
var ORDER = "https://app.lemonsqueezy.com/my-orders";
var EMAIL = "hello.peekom@gmail.com";

var PATCH = {
    ja: {
        heroPlusSingleCardTitle: "Peekom Plus - Single",
        heroPlusDoubleCardTitle: "Peekom Plus - Double",
        heroPlusFamilyCardTitle: "Peekom Plus - Family",
        heroPlusCardOsCompat: "Windows / Mac 対応",
        heroPlusSingleCardMeta: "買い切り · 1台 · 永久利用",
        heroPlusDoubleCardMeta: "買い切り · 2台 · 永久利用",
        heroPlusFamilyCardMeta: "買い切り · 5台 · 永久利用",
        comparePricing: '<span class="pricing-was">$5.99–$19.99</span> <span class="pricing-vat">(税別)</span> · <span class="pricing-launch">発売記念価格</span> · 買い切り · 1～5台（プラン別） · マイナーアップデート · 30日返金 (<a href="mailto:' + EMAIL + '">' + EMAIL + '</a>)',
        guidePlusP: "1) Lemon Squeezy でプランを選んで購入 → 2) メールでライセンスキーを受信 → 3) Peekom を起動 → ロック画面または設定でキーを入力 → 4) Peekom Plus の有効化完了。30日返金: <a href=\"mailto:" + EMAIL + "\">" + EMAIL + "</a>",
        dlPlusHint: 'Peekom Plus: Single <strong>$5.99</strong> · Double <strong>$9.99</strong> · Family <strong>$19.99</strong> (税別) · <a href="' + BUY_D + '">Lemon Squeezy で購入</a> → アプリでキーを入力',
        faq1a:
            "<p>無料版には3インデックス、グループ移動、ICE モード、ホバー遅延、モニター選択、書式バー、画像挿入が含まれます。</p>" +
            "<p>Peekom Plus（Single $5.99 · Double $9.99 · Family $19.99）は10スロット、カスタムテーマ、フォント、不透明度、左パネル、画像リサイズ、書き出しをアプリ内でアンロックします。</p>" +
            '<p><a href="/features/#compare">比較表</a>をご覧ください。</p>',
        faq3bq: "1つのライセンスキーを複数の PC で使えますか？",
        faq3ba:
            "<p>会社の Windows PC と自宅の MacBook など、<strong>OS が異なる端末</strong>でも Plus は <strong>1回の購入</strong>で足ります。</p>" +
            "<p>インストールファイルは OS ごとに異なりますが、各端末の設定で <strong>同じライセンスキー</strong>を入力してください。</p>" +
            "<p>同時に使える台数はプランにより異なります。</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Single</strong> — 1台</li>" +
            "<li><strong>Double</strong> — 2台（例: 会社 Windows PC + 自宅 MacBook）</li>" +
            "<li><strong>Family</strong> — 5台</li>" +
            "</ul>" +
            "<p>Double の例: 会社 PC に Peekom をインストールし設定で Plus キーを入力 → MacBook には macOS 版を入れ、<strong>同じキー</strong>を入力します。</p>",
        faq3cq: "会社 PC を替えたり転職した場合も Peekom を使い続けられますか？",
        faq3ca:
            "<p>Peekom Plus はプランにより 1台（Single）、2台（Double）、5台（Family）まで利用できます。</p>" +
            "<p>同じ端末での削除後の再インストールは可能です。</p>" +
            "<p>新しい端末への移行が必要な場合はお問い合わせください。状況を確認のうえサポートします。</p>" +
            "<p>状況により、既存の有効化端末をリセットしたうえで新端末での再認証をご案内する場合があります。</p>",
        faq3dq: "端末変更が必要なとき、何を送ればよいですか？",
        faq3da:
            "<p>迅速な確認のため、購入メールアドレス、注文番号、ライセンスキー、端末変更の理由をお送りください。</p>" +
            "<p>プランの上限（Single 1台 · Double 2台 · Family 5台）をすべて使用している場合、再認証前に既存端末のリセットが必要になることがあります。必要なデータは事前にバックアップしてからご連絡ください。</p>",
        faq4q: 'Microsoft Edge で「このファイルは一般的にダウンロードされていません」と表示されます。',
        faq4a:
            '<p><strong>Microsoft Edge</strong> でインストーラーをダウンロードするとき、<strong>「このファイルは一般的にダウンロードされていません」</strong>と表示されることがあります。</p>' +
            "<p>新しく配布されたアプリではよくある表示です。</p>" +
            '<ol class="guide-step-list">' +
            "<li><kbd>Ctrl</kbd> + <kbd>J</kbd> で <strong>ダウンロード</strong>を開きます。</li>" +
            "<li>ブロックされた <code>Peekom-Setup.exe</code> の横の <strong>三点リーダー (…)</strong> → <strong>保持</strong> を選びます。</li>" +
            "<li>警告ダイアログで <strong>とにかく保持</strong> をクリックしてインストーラーを実行します。</li>" +
            "</ol>" +
            '<p>同じ表示が続く場合は <strong>Google Chrome</strong> で再度ダウンロードしてみてください。</p>' +
            '<p>詳しくは <a href="#" onclick="openModal(); return false;">インストールガイド</a>をご覧ください。</p>',
        faq7q: "旧版アプリ「빼꼼 인덱스」を削除した後、起動時に文字化けやエラーが出ます。どうすればいいですか？",
        faq7a:
            "<p>旧版（빼꼼 인덱스）を削除したとき、<strong>ログイン時の自動起動がオン</strong>のままだと、スタートアップ登録・タスクバーのピン・残存フォルダが削除済みファイルを探し、起動時に <strong>文字化けやエラー</strong>が表示されることがあります。</p>" +
            "<p>以下の手順を一度だけ実行して整理してください。</p>" +
            "<p><strong>1. 実行中のアプリを完全に終了</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> → タスクマネージャー → Peekom / 빼꼼 関連プロセスを終了</li>" +
            "<li>タスクバーアイコンを右クリック → <strong>タスクバーからピン留めを外す</strong></li>" +
            "</ul>" +
            "<p><strong>2. スタートアップをオフ</strong>（名称は異なる場合があります）</p>" +
            "<p><strong>Windows 11</strong> — 設定 → アプリ → スタートアップ</p>" +
            "<p><strong>Windows 10</strong> — タスクマネージャー → スタートアップ タブ</p>" +
            '<ul class="guide-step-list">' +
            "<li>あれば無効にする: Peekom、Peekom Plus、빼꼼 인덱스、com.peekom.app、文字化けした名前</li>" +
            "<li>「インストール済みのアプリ」になくてもスタートアップに残っていることがあります。</li>" +
            "</ul>" +
            "<p><strong>3. 残存フォルダを削除</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>エクスプローラーで <code>%LocalAppData%\\Programs</code> を開き、<strong>빼꼼</strong> フォルダがあれば削除</li>" +
            "<li><code>%AppData%\\빼꼼</code> → フォルダごと削除（メモ・設定あり。再使用しない場合のみ）</li>" +
            "<li><code>%LocalAppData%</code> → 名前に <strong>빼꼼</strong> を含むフォルダがあれば削除</li>" +
            "</ol>" +
            "<p>削除できない場合は手順1でタスクを終了してから再試行してください。</p>" +
            "<p><strong>4. 再起動して確認</strong> — PC を再起動します。</p>" +
            "<p>エラーが出ずタスクバーに 빼꼼 がなければ完了です。</p>" +
            "<p>その後 <a href=\"/download/\">Peekom（無料）</a>を新規インストールしてください。</p>" +
            '<p class="privacy-doc__note">旧版のメモは Peekom と<strong>保存場所が異なるため自動移行されません。</strong></p>' +
            '<p class="privacy-doc__note">必要な内容は事前にコピーしてください。</p>',
        faq9a:
            "<p>アプリをアンインストールしても Lemon Squeezy のライセンスは残ります。</p>" +
            "<p>次の手順で Peekom Plus と有料機能を復元できます。</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>1. Peekom を再インストール</strong> — <a href=\"/download/\">peekom.com</a> から無料版（<code>Peekom-Setup.exe</code>）をダウンロードしてインストール</li>" +
            "<li><strong>2. ライセンスキーを確認</strong> — Lemon Squeezy の購入確認メールから <strong>[License Key]</strong> をコピー。メールを紛失した場合は <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Lemon Squeezy 注文履歴</a>で同じメールアドレスから再確認</li>" +
            "<li><strong>3. Plus を再有効化</strong> — 設定（歯車）を開き <strong>Plus 認証</strong>にキーを貼り付けて確定。10スロット・カスタムテーマなどが復元されます</li>" +
            "</ul>" +
            "<p><strong>端末上限（プラン別）</strong> — 同じ PC への再インストールは同一端末として扱われます。</p>" +
            "<p>Single 1台 · Double 2台 · Family 5台（例: Double — 仕事用 PC + 自宅 PC）。</p>",
        faq12a:
            "<p>PC がオンラインでも Plus 認証は <strong>Lemon Squeezy（<code>api.lemonsqueezy.com</code>）</strong>への接続が必要です。</p>" +
            "<p>社内の <strong>ファイアウォール・セキュリティソフト・VPN・プロキシ</strong>がこのサーバーだけをブロックしている場合があります。</p>" +
            "<p><strong>お試しください</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>自宅 Wi‑Fi やモバイルホットスポットなど別ネットワークで一度有効化</li>" +
            "<li>IT に <strong><code>https://api.lemonsqueezy.com</code> の HTTPS（443）許可</strong>を依頼</li>" +
            "<li>社内 VPN をオフにするか、許可された VPN で再試行</li>" +
            "</ul>" +
            "<p><strong>有効化上限（プラン別）</strong>のメッセージが出た場合は <a href=\"/contact/\">お問い合わせ</a>で購入メール・注文番号・ライセンスキーをお送りください。端末リセットをお手伝いします。</p>" +
            "<p>インストーラーを再ダウンロードしても、サーバーがブロックされていれば同じエラーになります。</p>",
        winGuideBtn: 'Edge で「このファイルは一般的にダウンロードされていません」と表示されますか？',
        guideTitle: "Edge ダウンロード解除ガイド",
        step1: '<strong>Microsoft Edge</strong> でダウンロードするとき、<b>「このファイルは一般的にダウンロードされていません」</b>と表示されることがあります。新しく配布されたアプリではよくあります。',
        step2: "<kbd>Ctrl</kbd> + <kbd>J</kbd> で <b>ダウンロード</b>を開き、ブロックされた <code>Peekom-Setup.exe</code> の横の <b>三点リーダー (…)</b> → <b>保持</b> を選びます。",
        step3: "警告で <b>とにかく保持</b> をクリックしてインストーラーを実行します。繰り返す場合は <b>Google Chrome</b> で再ダウンロードしてください。",
        help1p: "Peekom Setup をダウンロードして実行します。Edge では「このファイルは一般的にダウンロードされていません」と表示されることがあります。",
        guideInstallEdgeLi: '<li><strong>Edge でダウンロードがブロック</strong> — 「このファイルは一般的にダウンロードされていません」と出た場合は <a href="#" onclick="openModal(); return false;">インストールガイド</a>を開き、ダウンロード（<kbd>Ctrl</kbd>+<kbd>J</kbd>）→ <strong>保持</strong> → <strong>とにかく保持</strong>。Chrome でも再試行できます。</li>',
        dlFreeFreewareNote: "無料版 Peekom はフリーウェアです。Plus は任意です。"
    },
    "zh-CN": {
        heroPlusSingleCardTitle: "Peekom Plus - Single",
        heroPlusDoubleCardTitle: "Peekom Plus - Double",
        heroPlusFamilyCardTitle: "Peekom Plus - Family",
        heroPlusCardOsCompat: "兼容 Windows / Mac",
        heroPlusSingleCardMeta: "一次性 · 1 台设备 · 永久使用",
        heroPlusDoubleCardMeta: "一次性 · 2 台设备 · 永久使用",
        heroPlusFamilyCardMeta: "一次性 · 5 台设备 · 永久使用",
        comparePricing: '<span class="pricing-was">$5.99–$19.99</span> <span class="pricing-vat">(不含增值税)</span> · <span class="pricing-launch">首发价</span> · 一次性 · 1–5 台设备（按套餐） · 小版本更新 · 30 天退款 (<a href="mailto:' + EMAIL + '">' + EMAIL + '</a>)',
        guidePlusP: "1) 在 Lemon Squeezy 选择套餐并购买 → 2) 通过邮件收到许可证密钥 → 3) 打开 Peekom → 在锁定界面或设置中输入密钥 → 4) Peekom Plus 激活完成。30 天退款：<a href=\"mailto:" + EMAIL + "\">" + EMAIL + "</a>",
        dlPlusHint: 'Peekom Plus: Single <strong>$5.99</strong> · Double <strong>$9.99</strong> · Family <strong>$19.99</strong> (不含增值税) · <a href="' + BUY_D + '">在 Lemon Squeezy 购买</a> → 在应用中输入密钥',
        faq1a:
            "<p>免费版包含 3 个索引、分组移动、ICE 模式、悬停延迟、显示器选择、格式工具栏和图片插入。</p>" +
            "<p>Peekom Plus（Single $5.99 · Double $9.99 · Family $19.99）在应用内解锁 10 个槽位、自定义主题、字体、透明度、左侧面板、图片缩放和导出。</p>" +
            '<p>请参阅 <a href="/features/#compare">对比表</a>。</p>',
        faq3bq: "一个许可证密钥可以在多台 PC 上使用吗？",
        faq3ba:
            "<p>即使您使用不同的操作系统——例如公司 Windows PC 和家里 MacBook——也只需 <strong>购买一次 Plus</strong>。</p>" +
            "<p>各系统的安装文件不同，但在每台设备的设置中输入 <strong>相同的许可证密钥</strong>即可。</p>" +
            "<p>可同时使用的设备数量取决于您的套餐：</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Single</strong> — 1 台设备</li>" +
            "<li><strong>Double</strong> — 2 台设备（例如公司 Windows PC + 家里 MacBook）</li>" +
            "<li><strong>Family</strong> — 5 台设备</li>" +
            "</ul>" +
            "<p>Double 示例：在公司 Windows PC 上安装 Peekom 并在设置中输入 Plus 密钥 → 在 MacBook 上安装 macOS 版并输入 <strong>相同密钥</strong>。</p>",
        faq3cq: "更换公司 PC 或跳槽后还能继续使用 Peekom 吗？",
        faq3ca:
            "<p>Peekom Plus 按套餐可在 1 台（Single）、2 台（Double）或 5 台（Family）设备上使用。</p>" +
            "<p>在同一设备上卸载后重新安装是允许的。</p>" +
            "<p>如需迁移到新设备，请联系我们，我们会审核并协助您。</p>" +
            "<p>视情况，我们可能在重置已激活设备后指导您在新设备上重新激活。</p>",
        faq3dq: "需要更换设备时应发送哪些信息？",
        faq3da:
            "<p>为加快审核，请发送购买邮箱、订单号、许可证密钥以及更换设备的原因。</p>" +
            "<p>若已用满套餐名额（Single 1 台 · Double 2 台 · Family 5 台），我们可能需先重置已激活设备再重新激活，请先备份所需内容后再联系我们。</p>",
        faq4q: 'Microsoft Edge 提示文件「并不常见下载」。',
        faq4a:
            '<p>在 <strong>Microsoft Edge</strong> 中下载安装程序时，可能会看到 <strong>「此文件并不常见，因此 Windows 可能无法保护你的电脑」</strong>或类似提示（「并不常见下载」）。</p>' +
            "<p>新发布的应用经常出现此提示。</p>" +
            '<ol class="guide-step-list">' +
            "<li>按 <kbd>Ctrl</kbd> + <kbd>J</kbd> 打开 <strong>下载</strong>。</li>" +
            "<li>在被拦截的 <code>Peekom-Setup.exe</code> 旁点击 <strong>三点菜单 (…)</strong>，选择 <strong>保留</strong>。</li>" +
            "<li>在警告对话框中点击 <strong>仍要保留</strong> 以运行安装程序。</li>" +
            "</ol>" +
            '<p>若提示反复出现，请尝试在 <strong>Google Chrome</strong> 中重新下载。</p>' +
            '<p>详见 <a href="#" onclick="openModal(); return false;">安装指南</a>。</p>',
        faq7q: "卸载旧版应用「빼꼼 인덱스」后，开机出现乱码或错误，怎么办？",
        faq7a:
            "<p>若在 <strong>开机自启动仍开启</strong> 时删除了旧版（빼꼼 인덱스），残留的启动项、任务栏固定或文件夹可能在开机时尝试运行已删除文件，从而出现 <strong>乱码或错误窗口</strong>。</p>" +
            "<p>请按以下步骤清理一次。</p>" +
            "<p><strong>1. 完全退出正在运行的实例</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> → 任务管理器 → 结束 Peekom / 빼꼼 相关进程</li>" +
            "<li>右键任务栏图标 → <strong>从任务栏取消固定</strong></li>" +
            "</ul>" +
            "<p><strong>2. 关闭启动项</strong>（名称可能不同）</p>" +
            "<p><strong>Windows 11</strong> — 设置 → 应用 → 启动</p>" +
            "<p><strong>Windows 10</strong> — 任务管理器 → 启动选项卡</p>" +
            '<ul class="guide-step-list">' +
            "<li>如有则禁用：Peekom、Peekom Plus、빼꼼 인덱스、com.peekom.app 或乱码名称</li>" +
            "<li>即使「已安装的应用」中已没有，启动项中可能仍保留条目。</li>" +
            "</ul>" +
            "<p><strong>3. 删除残留文件夹</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>在文件资源管理器中打开 <code>%LocalAppData%\\Programs</code> → 删除任何 <strong>빼꼼</strong> 文件夹</li>" +
            "<li>打开 <code>%AppData%\\빼꼼</code> → 删除整个文件夹（含备忘录/设置；仅在不需再用时删除）</li>" +
            "<li>打开 <code>%LocalAppData%</code> → 删除名称含 <strong>빼꼼</strong> 的文件夹</li>" +
            "</ol>" +
            "<p>若无法删除，请先完成步骤 1 结束任务后重试。</p>" +
            "<p><strong>4. 重启并确认</strong> — 重启电脑。</p>" +
            "<p>若无错误窗口且任务栏无 빼꼼，则清理成功。</p>" +
            "<p>然后可全新安装 <a href=\"/download/\">Peekom（免费版）</a>。</p>" +
            '<p class="privacy-doc__note">旧版备忘录<strong>不会自动迁移</strong>，因为 Peekom 使用不同的存储位置。</p>' +
            '<p class="privacy-doc__note">删除前请复制所需内容。</p>',
        faq9a:
            "<p>卸载应用不会删除您在 Lemon Squeezy 的许可证。</p>" +
            "<p>按以下步骤恢复 Peekom Plus 及所有付费功能。</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>1. 重新安装 Peekom</strong> — 从 <a href=\"/download/\">peekom.com</a> 下载免费版（<code>Peekom-Setup.exe</code>）并安装。</li>" +
            "<li><strong>2. 查找许可证密钥</strong> — 打开 Lemon Squeezy 购买确认邮件，复制 <strong>[License Key]</strong>。若邮件丢失，请用相同邮箱登录 <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Lemon Squeezy 订单历史</a>查看。</li>" +
            "<li><strong>3. 重新激活 Plus</strong> — 打开设置（齿轮图标），在 <strong>Plus 激活</strong>中粘贴密钥并确认。应用将恢复 10 槽位、自定义主题等 Plus 功能。</li>" +
            "</ul>" +
            "<p><strong>设备上限（按套餐）</strong> — 在同一 PC 上重新安装计为同一设备。</p>" +
            "<p>Single 1 台 · Double 2 台 · Family 5 台（例如 Double — 工作 PC + 个人 PC）。</p>",
        faq12a:
            "<p>即使电脑已联网，Plus 激活仍需连接 <strong>Lemon Squeezy（<code>api.lemonsqueezy.com</code>）</strong>。</p>" +
            "<p>公司 <strong>防火墙、安全软件、VPN 或代理</strong>可能仅拦截该服务器。</p>" +
            "<p><strong>请尝试</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>在家庭 Wi‑Fi、手机热点等其他网络激活一次</li>" +
            "<li>请 IT 允许 <strong><code>https://api.lemonsqueezy.com</code> 的 HTTPS（443）</strong></li>" +
            "<li>关闭公司 VPN，或使用允许的 VPN 重试</li>" +
            "</ul>" +
            "<p>若出现 <strong>激活上限（按套餐）</strong> 提示，请 <a href=\"/contact/\">联系我们</a>并提供购买邮箱、订单号和许可证密钥——我们可协助重置设备。</p>" +
            "<p>若服务器仍被拦截，重新下载安装程序<strong>无法</strong>解决此问题。</p>",
        winGuideBtn: 'Edge 是否提示文件「并不常见下载」？',
        guideTitle: "Edge 下载解除拦截指南",
        step1: '在 <b>Microsoft Edge</b> 中下载时，可能看到 <b>「此文件并不常见下载」</b> 类提示。新发布的应用很常见。',
        step2: "按 <kbd>Ctrl</kbd> + <kbd>J</kbd> 打开 <b>下载</b>，在被拦截的 <code>Peekom-Setup.exe</code> 旁点击 <b>三点菜单 (…)</b>，选择 <b>保留</b>。",
        step3: "在警告对话框中点击 <b>仍要保留</b> 运行安装程序。若反复出现，请在 <b>Google Chrome</b> 中重新下载。",
        help1p: "下载并运行 Peekom Setup。在 Edge 中可能看到「并不常见下载」类提示。",
        guideInstallEdgeLi: '<li><strong>Edge 下载被拦截</strong> — 若看到「并不常见下载」提示，请打开 <a href="#" onclick="openModal(); return false;">安装指南</a>，使用下载（<kbd>Ctrl</kbd>+<kbd>J</kbd>）→ <strong>保留</strong> → <strong>仍要保留</strong>。也可在 Chrome 中重试。</li>',
        dlFreeFreewareNote: "Peekom（免费版）为免费软件（Freeware）；Plus 为可选升级。"
    },
    "zh-TW": {
        heroPlusSingleCardTitle: "Peekom Plus - Single",
        heroPlusDoubleCardTitle: "Peekom Plus - Double",
        heroPlusFamilyCardTitle: "Peekom Plus - Family",
        heroPlusCardOsCompat: "相容 Windows / Mac",
        heroPlusSingleCardMeta: "一次性 · 1 台裝置 · 永久使用",
        heroPlusDoubleCardMeta: "一次性 · 2 台裝置 · 永久使用",
        heroPlusFamilyCardMeta: "一次性 · 5 台裝置 · 永久使用",
        comparePricing: '<span class="pricing-was">$5.99–$19.99</span> <span class="pricing-vat">(不含增值稅)</span> · <span class="pricing-launch">首發價</span> · 一次性 · 1–5 台裝置（依方案） · 小版本更新 · 30 天退款 (<a href="mailto:' + EMAIL + '">' + EMAIL + '</a>)',
        guidePlusP: "1) 在 Lemon Squeezy 選擇方案並購買 → 2) 透過電子郵件收到授權金鑰 → 3) 開啟 Peekom → 在鎖定畫面或設定中輸入金鑰 → 4) Peekom Plus 啟用完成。30 天退款：<a href=\"mailto:" + EMAIL + "\">" + EMAIL + "</a>",
        dlPlusHint: 'Peekom Plus: Single <strong>$5.99</strong> · Double <strong>$9.99</strong> · Family <strong>$19.99</strong> (不含增值稅) · <a href="' + BUY_D + '">在 Lemon Squeezy 購買</a> → 在應用程式中輸入金鑰',
        faq1a:
            "<p>免費版包含 3 個索引、群組移動、ICE 模式、懸停延遲、螢幕選擇、格式工具列和圖片插入。</p>" +
            "<p>Peekom Plus（Single $5.99 · Double $9.99 · Family $19.99）在應用程式內解鎖 10 個槽位、自訂主題、字型、透明度、左側面板、圖片縮放和匯出。</p>" +
            '<p>請參閱 <a href="/features/#compare">比較表</a>。</p>',
        faq3bq: "一組授權金鑰可以在多台 PC 上使用嗎？",
        faq3ba:
            "<p>即使您使用不同的作業系統——例如公司 Windows PC 和家裡 MacBook——也只需 <strong>購買一次 Plus</strong>。</p>" +
            "<p>各系統的安裝檔不同，但在每台裝置的設定中輸入 <strong>相同的授權金鑰</strong>即可。</p>" +
            "<p>可同時使用的裝置數量取決於您的方案：</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Single</strong> — 1 台裝置</li>" +
            "<li><strong>Double</strong> — 2 台裝置（例如公司 Windows PC + 家裡 MacBook）</li>" +
            "<li><strong>Family</strong> — 5 台裝置</li>" +
            "</ul>" +
            "<p>Double 範例：在公司 Windows PC 上安裝 Peekom 並在設定中輸入 Plus 金鑰 → 在 MacBook 上安裝 macOS 版並輸入 <strong>相同金鑰</strong>。</p>",
        faq3cq: "更換公司 PC 或跳槽後還能繼續使用 Peekom 嗎？",
        faq3ca:
            "<p>Peekom Plus 依方案可在 1 台（Single）、2 台（Double）或 5 台（Family）裝置上使用。</p>" +
            "<p>在同一裝置上解除安裝後重新安裝是允許的。</p>" +
            "<p>如需遷移至新裝置，請聯絡我們，我們會審核並協助您。</p>" +
            "<p>視情況，我們可能在重設已啟用裝置後指導您在新裝置上重新啟用。</p>",
        faq3dq: "需要更換裝置時應傳送哪些資訊？",
        faq3da:
            "<p>為加快審核，請傳送購買電子郵件、訂單編號、授權金鑰以及更換裝置的原因。</p>" +
            "<p>若已用滿方案名額（Single 1 台 · Double 2 台 · Family 5 台），我們可能需先重設已啟用裝置再重新啟用，請先備份所需內容後再聯絡我們。</p>",
        faq4q: 'Microsoft Edge 提示檔案「並不常見下載」。',
        faq4a:
            '<p>在 <strong>Microsoft Edge</strong> 中下載安裝程式時，可能會看到 <strong>「此檔案並不常見下載」</strong> 等提示。</p>' +
            "<p>新發布的應用程式經常出現此提示。</p>" +
            '<ol class="guide-step-list">' +
            "<li>按 <kbd>Ctrl</kbd> + <kbd>J</kbd> 開啟 <strong>下載</strong>。</li>" +
            "<li>在被封鎖的 <code>Peekom-Setup.exe</code> 旁按 <strong>三點選單 (…)</strong>，選擇 <strong>保留</strong>。</li>" +
            "<li>在警告對話方塊中按 <strong>仍要保留</strong> 以執行安裝程式。</li>" +
            "</ol>" +
            '<p>若提示反覆出現，請嘗試在 <strong>Google Chrome</strong> 中重新下載。</p>' +
            '<p>詳見 <a href="#" onclick="openModal(); return false;">安裝指南</a>。</p>',
        faq7q: "移除舊版應用程式「빼꼼 인덱스」後，開機出現亂碼或錯誤，怎麼辦？",
        faq7a:
            "<p>若在 <strong>登入時自動啟動仍開啟</strong> 時移除了舊版（빼꼼 인덱스），殘留的啟動項目、工作列釘選或資料夾可能在開機時嘗試執行已刪除檔案，從而出現 <strong>亂碼或錯誤視窗</strong>。</p>" +
            "<p>請依下列步驟清理一次。</p>" +
            "<p><strong>1. 完全結束正在執行的執行個體</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> → 工作管理員 → 結束 Peekom / 빼꼼 相關程序</li>" +
            "<li>在工作列圖示上按右鍵 → <strong>從工作列取消釘選</strong></li>" +
            "</ul>" +
            "<p><strong>2. 關閉啟動項目</strong>（名稱可能不同）</p>" +
            "<p><strong>Windows 11</strong> — 設定 → 應用程式 → 啟動</p>" +
            "<p><strong>Windows 10</strong> — 工作管理員 → 啟動索引標籤</p>" +
            '<ul class="guide-step-list">' +
            "<li>如有則停用：Peekom、Peekom Plus、빼꼼 인덱스、com.peekom.app 或亂碼名稱</li>" +
            "<li>即使「已安裝的應用程式」中已沒有，啟動項目中可能仍保留。</li>" +
            "</ul>" +
            "<p><strong>3. 刪除殘留資料夾</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>在檔案總管中開啟 <code>%LocalAppData%\\Programs</code> → 刪除任何 <strong>빼꼼</strong> 資料夾</li>" +
            "<li>開啟 <code>%AppData%\\빼꼼</code> → 刪除整個資料夾（含備忘錄/設定；僅在不再使用時刪除）</li>" +
            "<li>開啟 <code>%LocalAppData%</code> → 刪除名稱含 <strong>빼꼼</strong> 的資料夾</li>" +
            "</ol>" +
            "<p>若無法刪除，請先完成步驟 1 結束工作後重試。</p>" +
            "<p><strong>4. 重新啟動並確認</strong> — 重新開機。</p>" +
            "<p>若無錯誤視窗且工作列無 빼꼼，則清理成功。</p>" +
            "<p>然後可全新安裝 <a href=\"/download/\">Peekom（免費版）</a>。</p>" +
            '<p class="privacy-doc__note">舊版備忘錄<strong>不會自動移轉</strong>，因為 Peekom 使用不同的儲存位置。</p>' +
            '<p class="privacy-doc__note">移除前請複製所需內容。</p>',
        faq9a:
            "<p>解除安裝應用程式不會刪除您在 Lemon Squeezy 的授權。</p>" +
            "<p>依下列步驟還原 Peekom Plus 及所有付費功能。</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>1. 重新安裝 Peekom</strong> — 從 <a href=\"/download/\">peekom.com</a> 下載免費版（<code>Peekom-Setup.exe</code>）並安裝。</li>" +
            "<li><strong>2. 查找授權金鑰</strong> — 開啟 Lemon Squeezy 購買確認郵件，複製 <strong>[License Key]</strong>。若郵件遺失，請用相同電子郵件登入 <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Lemon Squeezy 訂單紀錄</a>查看。</li>" +
            "<li><strong>3. 重新啟用 Plus</strong> — 開啟設定（齒輪圖示），在 <strong>Plus 啟用</strong>中貼上金鑰並確認。應用程式將還原 10 槽位、自訂主題等 Plus 功能。</li>" +
            "</ul>" +
            "<p><strong>裝置上限（依方案）</strong> — 在同一 PC 上重新安裝計為同一裝置。</p>" +
            "<p>Single 1 台 · Double 2 台 · Family 5 台（例如 Double — 工作 PC + 個人 PC）。</p>",
        faq12a:
            "<p>即使電腦已連線，Plus 啟用仍需連線 <strong>Lemon Squeezy（<code>api.lemonsqueezy.com</code>）</strong>。</p>" +
            "<p>公司 <strong>防火牆、安全軟體、VPN 或 Proxy</strong>可能僅封鎖該伺服器。</p>" +
            "<p><strong>請嘗試</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>在家庭 Wi‑Fi、手機熱點等其他網路啟用一次</li>" +
            "<li>請 IT 允許 <strong><code>https://api.lemonsqueezy.com</code> 的 HTTPS（443）</strong></li>" +
            "<li>關閉公司 VPN，或使用允許的 VPN 重試</li>" +
            "</ul>" +
            "<p>若出現 <strong>啟用上限（依方案）</strong> 提示，請 <a href=\"/contact/\">聯絡我們</a>並提供購買電子郵件、訂單編號和授權金鑰——我們可協助重設裝置。</p>" +
            "<p>若伺服器仍被封鎖，重新下載安裝程式<strong>無法</strong>解決此問題。</p>",
        winGuideBtn: 'Edge 是否提示檔案「並不常見下載」？',
        guideTitle: "Edge 下載解除封鎖指南",
        step1: '在 <b>Microsoft Edge</b> 中下載時，可能看到 <b>「此檔案並不常見下載」</b> 提示。新發布的應用程式很常見。',
        step2: "按 <kbd>Ctrl</kbd> + <kbd>J</kbd> 開啟 <b>下載</b>，在被封鎖的 <code>Peekom-Setup.exe</code> 旁按 <b>三點選單 (…)</b>，選擇 <b>保留</b>。",
        step3: "在警告對話方塊中按 <b>仍要保留</b> 執行安裝程式。若反覆出現，請在 <b>Google Chrome</b> 中重新下載。",
        help1p: "下載並執行 Peekom Setup。在 Edge 中可能看到「並不常見下載」類提示。",
        guideInstallEdgeLi: '<li><strong>Edge 下載被封鎖</strong> — 若看到「並不常見下載」提示，請開啟 <a href="#" onclick="openModal(); return false;">安裝指南</a>，使用下載（<kbd>Ctrl</kbd>+<kbd>J</kbd>）→ <strong>保留</strong> → <strong>仍要保留</strong>。也可在 Chrome 中重試。</li>',
        dlFreeFreewareNote: "Peekom（免費版）為免費軟體（Freeware）；Plus 為選購升級。"
    },
    es: {
        heroPlusSingleCardTitle: "Peekom Plus - Single",
        heroPlusDoubleCardTitle: "Peekom Plus - Double",
        heroPlusFamilyCardTitle: "Peekom Plus - Family",
        heroPlusCardOsCompat: "Compatible con Windows / Mac",
        heroPlusSingleCardMeta: "Pago único · 1 dispositivo · de por vida",
        heroPlusDoubleCardMeta: "Pago único · 2 dispositivos · de por vida",
        heroPlusFamilyCardMeta: "Pago único · 5 dispositivos · de por vida",
        comparePricing: '<span class="pricing-was">$5.99–$19.99</span> <span class="pricing-vat">(IVA no incl.)</span> · <span class="pricing-launch">Precio de lanzamiento</span> · pago único · 1–5 dispositivos (según plan) · actualizaciones menores · reembolso 30 días (<a href="mailto:' + EMAIL + '">' + EMAIL + '</a>)',
        guidePlusP: "1) Elige un plan en Lemon Squeezy y compra → 2) Recibe la clave de licencia por correo → 3) Abre Peekom → introduce la clave en la pantalla de bloqueo o Ajustes → 4) Activación de Peekom Plus completada. Reembolso 30 días: <a href=\"mailto:" + EMAIL + "\">" + EMAIL + "</a>",
        dlPlusHint: 'Peekom Plus: Single <strong>$5.99</strong> · Double <strong>$9.99</strong> · Family <strong>$19.99</strong> (IVA no incl.) · <a href="' + BUY_D + '">Comprar en Lemon Squeezy</a> → introduce la clave en la app',
        faq1a:
            "<p>La versión gratuita incluye 3 índices, movimiento de grupo, modo ICE, retardo al pasar el cursor, selección de monitor, barra de formato e inserción de imágenes.</p>" +
            "<p>Peekom Plus (Single $5.99 · Double $9.99 · Family $19.99) desbloquea 10 ranuras, tema personalizado, fuentes, opacidad, panel izquierdo, redimensionado de imágenes y exportación en la app.</p>" +
            '<p>Consulta la <a href="/features/#compare">tabla comparativa</a>.</p>',
        faq3bq: "¿Puedo usar una clave de licencia en más de un PC?",
        faq3ba:
            "<p>Aunque uses sistemas distintos —por ejemplo, un PC Windows del trabajo y un MacBook en casa— solo necesitas <strong>comprar Plus una vez</strong>.</p>" +
            "<p>Los instaladores difieren según el SO, pero introduce la <strong>misma clave de licencia</strong> en Ajustes de cada dispositivo.</p>" +
            "<p>Cuántos dispositivos puedes usar a la vez depende de tu plan:</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Single</strong> — 1 dispositivo</li>" +
            "<li><strong>Double</strong> — 2 dispositivos (p. ej., PC Windows del trabajo + MacBook en casa)</li>" +
            "<li><strong>Family</strong> — 5 dispositivos</li>" +
            "</ul>" +
            "<p>Ejemplo con Double: instala Peekom en tu PC Windows del trabajo e introduce la clave Plus en Ajustes → instala la versión macOS en tu MacBook e introduce la <strong>misma clave</strong>.</p>",
        faq3cq: "¿Puedo seguir usando Peekom si cambio de PC del trabajo o de empleo?",
        faq3ca:
            "<p>Peekom Plus permite 1 dispositivo (Single), 2 (Double) o 5 (Family) según el plan.</p>" +
            "<p>Reinstalar en el mismo dispositivo está permitido.</p>" +
            "<p>Si necesitas mover la licencia a un dispositivo nuevo, contáctanos y te ayudaremos tras revisar tu caso.</p>" +
            "<p>Según la situación, podemos guiarte para reactivar en el nuevo dispositivo tras restablecer los activados anteriormente.</p>",
        faq3dq: "¿Qué información debo enviar si necesito cambiar de dispositivo?",
        faq3da:
            "<p>Para una revisión más rápida, envía el correo de compra, número de pedido, clave de licencia y motivo del cambio.</p>" +
            "<p>Si ya usaste todas las plazas de tu plan (Single 1 · Double 2 · Family 5), puede que debamos restablecer dispositivos activados antes de reactivar; haz copia de seguridad de lo necesario antes de contactarnos.</p>",
        faq4q: 'Microsoft Edge dice que el archivo «no se descarga habitualmente».',
        faq4a:
            '<p>Al descargar el instalador en <strong>Microsoft Edge</strong>, puede aparecer <strong>«Este archivo no se descarga habitualmente»</strong>.</p>' +
            "<p>Es habitual en apps recién distribuidas.</p>" +
            '<ol class="guide-step-list">' +
            "<li>Pulsa <kbd>Ctrl</kbd> + <kbd>J</kbd> para abrir <strong>Descargas</strong>.</li>" +
            "<li>Junto a <code>Peekom-Setup.exe</code> bloqueado, pulsa los <strong>tres puntos (…)</strong> y elige <strong>Conservar</strong>.</li>" +
            "<li>En el aviso, pulsa <strong>Conservar de todos modos</strong> para ejecutar el instalador.</li>" +
            "</ol>" +
            '<p>Si el mensaje persiste, prueba a descargar de nuevo en <strong>Google Chrome</strong>.</p>' +
            '<p>Consulta la <a href="#" onclick="openModal(); return false;">guía de instalación</a> para más detalles.</p>',
        faq7q: "Tras eliminar la app antigua 빼꼼 인덱스, aparecen textos extraños o errores al iniciar. ¿Qué hago?",
        faq7a:
            "<p>Si eliminaste la app antigua (빼꼼 인덱스) con el <strong>inicio automático aún activado</strong>, entradas de inicio, anclajes en la barra de tareas o carpetas restantes pueden intentar ejecutar archivos borrados y mostrar <strong>texto corrupto o errores</strong>.</p>" +
            "<p>Sigue estos pasos una vez para limpiar.</p>" +
            "<p><strong>1. Cierra por completo cualquier instancia en ejecución</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> → Administrador de tareas → finaliza procesos de Peekom / 빼꼼</li>" +
            "<li>Clic derecho en el icono de la barra → <strong>Desanclar de la barra de tareas</strong></li>" +
            "</ul>" +
            "<p><strong>2. Desactiva entradas de inicio</strong> (los nombres pueden variar)</p>" +
            "<p><strong>Windows 11</strong> — Configuración → Aplicaciones → Inicio</p>" +
            "<p><strong>Windows 10</strong> — Administrador de tareas → pestaña Inicio</p>" +
            '<ul class="guide-step-list">' +
            "<li>Desactiva si aparecen: Peekom, Peekom Plus, 빼꼼 인덱스, com.peekom.app o nombres ilegibles</li>" +
            "<li>Una entrada puede quedar en Inicio aunque ya no figure en Aplicaciones instaladas.</li>" +
            "</ul>" +
            "<p><strong>3. Elimina carpetas restantes</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>En el Explorador, abre <code>%LocalAppData%\\Programs</code> → elimina cualquier carpeta <strong>빼꼼</strong></li>" +
            "<li>Abre <code>%AppData%\\빼꼼</code> → elimina la carpeta (contiene notas/ajustes; solo si no la usarás de nuevo)</li>" +
            "<li>Abre <code>%LocalAppData%</code> → elimina carpetas con <strong>빼꼼</strong> en el nombre</li>" +
            "</ol>" +
            "<p>Si no puedes eliminar, finaliza tareas del paso 1 e inténtalo de nuevo.</p>" +
            "<p><strong>4. Reinicia y comprueba</strong> — Reinicia el PC.</p>" +
            "<p>Si no hay ventanas de error y 빼꼼 no está en la barra, la limpieza fue correcta.</p>" +
            "<p>Luego instala <a href=\"/download/\">Peekom (gratis)</a> de nuevo.</p>" +
            '<p class="privacy-doc__note">El contenido de la app antigua <strong>no se migra automáticamente</strong> porque Peekom guarda los datos en otra ubicación.</p>' +
            '<p class="privacy-doc__note">Copia lo que necesites antes de eliminar la app antigua.</p>',
        faq9a:
            "<p>Desinstalar la app no elimina tu licencia de Lemon Squeezy.</p>" +
            "<p>Sigue estos pasos para restaurar Peekom Plus y todas las funciones de pago.</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>1. Reinstala Peekom</strong> — Descarga la versión gratuita (<code>Peekom-Setup.exe</code>) en <a href=\"/download/\">peekom.com</a> e instálala.</li>" +
            "<li><strong>2. Encuentra tu clave</strong> — Abre el correo de Lemon Squeezy y copia <strong>[License Key]</strong>. Si perdiste el correo, inicia sesión en <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Mis pedidos de Lemon Squeezy</a> con el mismo email.</li>" +
            "<li><strong>3. Reactiva Plus</strong> — Abre Ajustes (icono de engranaje), pega la clave en <strong>Activación Plus</strong> y confirma. Se restauran 10 ranuras, temas personalizados y demás funciones Plus.</li>" +
            "</ul>" +
            "<p><strong>Límite de dispositivos (según plan)</strong> — Reinstalar en el mismo PC cuenta como el mismo dispositivo.</p>" +
            "<p>Single 1 · Double 2 · Family 5 (p. ej., Double — PC del trabajo + PC personal).</p>",
        faq12a:
            "<p>Aunque tu PC esté en línea, la activación Plus debe alcanzar <strong>Lemon Squeezy (<code>api.lemonsqueezy.com</code>)</strong>.</p>" +
            "<p><strong>Cortafuegos, antivirus, VPN o proxy</strong> corporativos pueden bloquear solo ese servidor.</p>" +
            "<p><strong>Prueba esto</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>Activa una vez en otra red (Wi‑Fi doméstico, hotspot móvil)</li>" +
            "<li>Pide a IT permitir <strong><code>https://api.lemonsqueezy.com</code> por HTTPS (443)</strong></li>" +
            "<li>Desactiva la VPN corporativa o prueba una VPN permitida</li>" +
            "</ul>" +
            "<p>Si ves un mensaje de <strong>límite de activación (según plan)</strong>, <a href=\"/contact/\">contáctanos</a> con email de compra, número de pedido y clave — podemos ayudarte a restablecer dispositivos.</p>" +
            "<p>Volver a descargar el instalador <strong>no</strong> soluciona el problema si el servidor sigue bloqueado.</p>",
        winGuideBtn: '¿Edge dice que el archivo «no se descarga habitualmente»?',
        guideTitle: "Guía para desbloquear descargas en Edge",
        step1: 'Al descargar en <b>Microsoft Edge</b>, puede aparecer <b>«Este archivo no se descarga habitualmente»</b>. Es habitual en apps recién distribuidas.',
        step2: "Pulsa <kbd>Ctrl</kbd> + <kbd>J</kbd> para abrir <b>Descargas</b>, pulsa los <b>tres puntos (…)</b> junto a <code>Peekom-Setup.exe</code> bloqueado y elige <b>Conservar</b>.",
        step3: "Pulsa <b>Conservar de todos modos</b> en el aviso para ejecutar el instalador. Si se repite, descarga de nuevo en <b>Google Chrome</b>.",
        help1p: "Descarga y ejecuta Peekom Setup. En Edge puede aparecer el aviso de que el archivo «no se descarga habitualmente».",
        guideInstallEdgeLi: '<li><strong>Descarga bloqueada en Edge</strong> — Si ves «Este archivo no se descarga habitualmente», abre la <a href="#" onclick="openModal(); return false;">guía de instalación</a> y usa Descargas (<kbd>Ctrl</kbd>+<kbd>J</kbd>) → <strong>Conservar</strong> → <strong>Conservar de todos modos</strong>. También puedes reintentar en Chrome.</li>',
        dlFreeFreewareNote: "Peekom (gratis) es freeware; Plus es opcional."
    },
    fr: {
        heroPlusSingleCardTitle: "Peekom Plus - Single",
        heroPlusDoubleCardTitle: "Peekom Plus - Double",
        heroPlusFamilyCardTitle: "Peekom Plus - Family",
        heroPlusCardOsCompat: "Compatible Windows / Mac",
        heroPlusSingleCardMeta: "Paiement unique · 1 appareil · à vie",
        heroPlusDoubleCardMeta: "Paiement unique · 2 appareils · à vie",
        heroPlusFamilyCardMeta: "Paiement unique · 5 appareils · à vie",
        comparePricing: '<span class="pricing-was">$5.99–$19.99</span> <span class="pricing-vat">(hors TVA)</span> · <span class="pricing-launch">Prix de lancement</span> · paiement unique · 1–5 appareils (selon l\'offre) · mises à jour mineures · remboursement 30 jours (<a href="mailto:' + EMAIL + '">' + EMAIL + '</a>)',
        guidePlusP: "1) Choisissez une offre sur Lemon Squeezy et achetez → 2) Recevez la clé de licence par e-mail → 3) Ouvrez Peekom → saisissez la clé dans l'écran de verrouillage ou Réglages → 4) Activation Peekom Plus terminée. Remboursement 30 jours : <a href=\"mailto:" + EMAIL + "\">" + EMAIL + "</a>",
        dlPlusHint: 'Peekom Plus : Single <strong>5,99 $</strong> · Double <strong>9,99 $</strong> · Family <strong>19,99 $</strong> (hors TVA) · <a href="' + BUY_D + '">Acheter sur Lemon Squeezy</a> → saisissez la clé dans l\'app',
        faq1a:
            "<p>La version gratuite inclut 3 index, déplacement groupé, mode ICE, délai au survol, sélection d'écran, barre de formatage et insertion d'images.</p>" +
            "<p>Peekom Plus (Single 5,99 $ · Double 9,99 $ · Family 19,99 $) débloque 10 emplacements, thème personnalisé, polices, opacité, panneau gauche, redimensionnement d'images et export dans l'app.</p>" +
            '<p>Consultez le <a href="/features/#compare">tableau comparatif</a>.</p>',
        faq3bq: "Puis-je utiliser une clé de licence sur plusieurs PC ?",
        faq3ba:
            "<p>Même avec des systèmes différents — par ex. un PC Windows pro et un MacBook perso — vous n'avez besoin d'<strong>acheter Plus qu'une seule fois</strong>.</p>" +
            "<p>Les installateurs diffèrent selon l'OS, mais saisissez la <strong>même clé de licence</strong> dans Réglages sur chaque appareil.</p>" +
            "<p>Le nombre d'appareils simultanés dépend de votre offre :</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Single</strong> — 1 appareil</li>" +
            "<li><strong>Double</strong> — 2 appareils (p. ex. PC Windows pro + MacBook perso)</li>" +
            "<li><strong>Family</strong> — 5 appareils</li>" +
            "</ul>" +
            "<p>Exemple Double : installez Peekom sur votre PC Windows pro et saisissez la clé Plus dans Réglages → installez la version macOS sur votre MacBook et saisissez la <strong>même clé</strong>.</p>",
        faq3cq: "Puis-je continuer à utiliser Peekom si je change de PC pro ou d'emploi ?",
        faq3ca:
            "<p>Peekom Plus permet 1 appareil (Single), 2 (Double) ou 5 (Family) selon l'offre.</p>" +
            "<p>La réinstallation sur le même appareil est autorisée.</p>" +
            "<p>Pour migrer vers un nouvel appareil, contactez-nous ; nous examinerons votre demande.</p>" +
            "<p>Selon le cas, nous pouvons vous guider pour réactiver sur le nouvel appareil après réinitialisation des appareils activés.</p>",
        faq3dq: "Quelles informations envoyer pour un changement d'appareil ?",
        faq3da:
            "<p>Pour accélérer l'examen, envoyez l'e-mail d'achat, le numéro de commande, la clé de licence et la raison du changement.</p>" +
            "<p>Si vous avez utilisé toutes les places de votre offre (Single 1 · Double 2 · Family 5), nous devrons peut-être réinitialiser les appareils activés avant réactivation ; sauvegardez vos données avant de nous contacter.</p>",
        faq4q: 'Microsoft Edge indique que le fichier « n\'est pas couramment téléchargé ».',
        faq4a:
            '<p>Lors du téléchargement de l\'installateur dans <strong>Microsoft Edge</strong>, vous pouvez voir <strong>« Ce fichier n\'est pas couramment téléchargé »</strong>.</p>' +
            "<p>C'est fréquent pour les apps récemment distribuées.</p>" +
            '<ol class="guide-step-list">' +
            "<li>Appuyez sur <kbd>Ctrl</kbd> + <kbd>J</kbd> pour ouvrir <strong>Téléchargements</strong>.</li>" +
            "<li>À côté de <code>Peekom-Setup.exe</code> bloqué, cliquez sur les <strong>trois points (…)</strong> et choisissez <strong>Conserver</strong>.</li>" +
            "<li>Dans l'avertissement, cliquez sur <strong>Conserver quand même</strong> pour lancer l'installateur.</li>" +
            "</ol>" +
            '<p>Si le message persiste, retéléchargez dans <strong>Google Chrome</strong>.</p>' +
            '<p>Voir le <a href="#" onclick="openModal(); return false;">guide d\'installation</a> pour plus de détails.</p>',
        faq7q: "Après avoir supprimé l'ancienne app 빼꼼 인덱스, des caractères bizarres ou des erreurs apparaissent au démarrage. Que faire ?",
        faq7a:
            "<p>Si vous avez supprimé l'ancienne app (빼꼼 인덱스) alors que le <strong>démarrage à la connexion était encore activé</strong>, des entrées de démarrage, épingles dans la barre des tâches ou dossiers restants peuvent tenter d'exécuter des fichiers supprimés et afficher du <strong>texte illisible ou des erreurs</strong>.</p>" +
            "<p>Suivez ces étapes une fois pour nettoyer.</p>" +
            "<p><strong>1. Quittez complètement toute instance en cours</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> → Gestionnaire des tâches → terminez les processus Peekom / 빼꼼</li>" +
            "<li>Clic droit sur l'icône de la barre → <strong>Désépingler de la barre des tâches</strong></li>" +
            "</ul>" +
            "<p><strong>2. Désactivez les entrées de démarrage</strong> (noms variables)</p>" +
            "<p><strong>Windows 11</strong> — Paramètres → Applications → Démarrage</p>" +
            "<p><strong>Windows 10</strong> — Gestionnaire des tâches → onglet Démarrage</p>" +
            '<ul class="guide-step-list">' +
            "<li>Désactivez si présents : Peekom, Peekom Plus, 빼꼼 인덱스, com.peekom.app ou noms illisibles</li>" +
            "<li>Une entrée peut rester au démarrage même absente des apps installées.</li>" +
            "</ul>" +
            "<p><strong>3. Supprimez les dossiers restants</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>Dans l'Explorateur, ouvrez <code>%LocalAppData%\\Programs</code> → supprimez tout dossier <strong>빼꼼</strong></li>" +
            "<li>Ouvrez <code>%AppData%\\빼꼼</code> → supprimez le dossier (notes/réglages ; seulement si vous ne le réutiliserez pas)</li>" +
            "<li>Ouvrez <code>%LocalAppData%</code> → supprimez les dossiers contenant <strong>빼꼼</strong> dans le nom</li>" +
            "</ol>" +
            "<p>Si la suppression échoue, terminez les tâches à l'étape 1 et réessayez.</p>" +
            "<p><strong>4. Redémarrez et vérifiez</strong> — Redémarrez le PC.</p>" +
            "<p>Sans fenêtres d'erreur et sans 빼꼼 dans la barre, le nettoyage est réussi.</p>" +
            "<p>Installez ensuite <a href=\"/download/\">Peekom (gratuit)</a> à neuf.</p>" +
            '<p class="privacy-doc__note">Le contenu de l\'ancienne app <strong>n\'est pas migré automatiquement</strong> car Peekom stocke les données ailleurs.</p>' +
            '<p class="privacy-doc__note">Copiez ce dont vous avez besoin avant de supprimer l\'ancienne app.</p>',
        faq9a:
            "<p>Désinstaller l'app ne supprime pas votre licence Lemon Squeezy.</p>" +
            "<p>Suivez ces étapes pour restaurer Peekom Plus et toutes les fonctions payantes.</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>1. Réinstallez Peekom</strong> — Téléchargez la version gratuite (<code>Peekom-Setup.exe</code>) sur <a href=\"/download/\">peekom.com</a> et installez-la.</li>" +
            "<li><strong>2. Retrouvez votre clé</strong> — Ouvrez l'e-mail Lemon Squeezy et copiez <strong>[License Key]</strong>. E-mail perdu ? Connectez-vous à <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Mes commandes Lemon Squeezy</a> avec le même e-mail.</li>" +
            "<li><strong>3. Réactivez Plus</strong> — Ouvrez Réglages (icône engrenage), collez la clé sous <strong>Activation Plus</strong> et confirmez. 10 emplacements, thèmes personnalisés et autres fonctions Plus sont restaurés.</li>" +
            "</ul>" +
            "<p><strong>Limite d'appareils (selon l'offre)</strong> — Réinstaller sur le même PC compte comme le même appareil.</p>" +
            "<p>Single 1 · Double 2 · Family 5 (p. ex. Double — PC pro + PC perso).</p>",
        faq12a:
            "<p>Même en ligne, l'activation Plus doit joindre <strong>Lemon Squeezy (<code>api.lemonsqueezy.com</code>)</strong>.</p>" +
            "<p>Les <strong>pare-feu, antivirus, VPN ou proxy</strong> d'entreprise peuvent bloquer uniquement ce serveur.</p>" +
            "<p><strong>Essayez ceci</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>Activez une fois sur un autre réseau (Wi‑Fi domicile, partage de connexion)</li>" +
            "<li>Demandez à l'IT d'autoriser <strong><code>https://api.lemonsqueezy.com</code> en HTTPS (443)</strong></li>" +
            "<li>Désactivez le VPN d'entreprise ou essayez un VPN autorisé</li>" +
            "</ul>" +
            "<p>Si vous voyez un message de <strong>limite d'activation (selon l'offre)</strong>, <a href=\"/contact/\">contactez-nous</a> avec e-mail d'achat, numéro de commande et clé — nous pouvons réinitialiser les appareils.</p>" +
            "<p>Retélécharger l'installateur <strong>ne</strong> résout pas le problème si le serveur reste bloqué.</p>",
        winGuideBtn: 'Edge indique-t-il que le fichier « n\'est pas couramment téléchargé » ?',
        guideTitle: "Guide de déblocage des téléchargements Edge",
        step1: 'Lors d\'un téléchargement dans <b>Microsoft Edge</b>, vous pouvez voir <b>« Ce fichier n\'est pas couramment téléchargé »</b>. C\'est courant pour les apps récemment distribuées.',
        step2: "Appuyez sur <kbd>Ctrl</kbd> + <kbd>J</kbd> pour ouvrir <b>Téléchargements</b>, cliquez sur les <b>trois points (…)</b> à côté de <code>Peekom-Setup.exe</code> bloqué et choisissez <b>Conserver</b>.",
        step3: "Cliquez sur <b>Conserver quand même</b> dans l'avertissement pour lancer l'installateur. Si le message revient, retéléchargez dans <b>Google Chrome</b>.",
        help1p: "Téléchargez et exécutez Peekom Setup. Edge peut afficher l'avertissement « n'est pas couramment téléchargé ».",
        guideInstallEdgeLi: '<li><strong>Téléchargement bloqué dans Edge</strong> — Si vous voyez « Ce fichier n\'est pas couramment téléchargé », ouvrez le <a href="#" onclick="openModal(); return false;">guide d\'installation</a> et utilisez Téléchargements (<kbd>Ctrl</kbd>+<kbd>J</kbd>) → <strong>Conserver</strong> → <strong>Conserver quand même</strong>. Vous pouvez aussi réessayer dans Chrome.</li>',
        dlFreeFreewareNote: "Peekom (gratuit) est un freeware ; Plus est optionnel."
    },
    de: {
        heroPlusSingleCardTitle: "Peekom Plus - Single",
        heroPlusDoubleCardTitle: "Peekom Plus - Double",
        heroPlusFamilyCardTitle: "Peekom Plus - Family",
        heroPlusCardOsCompat: "Windows / Mac kompatibel",
        heroPlusSingleCardMeta: "Einmalzahlung · 1 Gerät · lebenslang",
        heroPlusDoubleCardMeta: "Einmalzahlung · 2 Geräte · lebenslang",
        heroPlusFamilyCardMeta: "Einmalzahlung · 5 Geräte · lebenslang",
        comparePricing: '<span class="pricing-was">$5.99–$19.99</span> <span class="pricing-vat">(zzgl. MwSt.)</span> · <span class="pricing-launch">Einführungspreis</span> · einmalig · 1–5 Geräte (je nach Tarif) · kleinere Updates · 30 Tage Rückerstattung (<a href="mailto:' + EMAIL + '">' + EMAIL + '</a>)',
        guidePlusP: "1) Tarif auf Lemon Squeezy wählen und kaufen → 2) Lizenzschlüssel per E-Mail erhalten → 3) Peekom öffnen → Schlüssel im Sperrbildschirm oder Einstellungen eingeben → 4) Peekom Plus aktiviert. 30 Tage Rückerstattung: <a href=\"mailto:" + EMAIL + "\">" + EMAIL + "</a>",
        dlPlusHint: 'Peekom Plus: Single <strong>$5.99</strong> · Double <strong>$9.99</strong> · Family <strong>$19.99</strong> (zzgl. MwSt.) · <a href="' + BUY_D + '">Bei Lemon Squeezy kaufen</a> → Schlüssel in der App eingeben',
        faq1a:
            "<p>Die kostenlose Version umfasst 3 Indexe, Gruppenverschiebung, ICE-Modus, Hover-Verzögerung, Monitorauswahl, Formatleiste und Bildeinfügung.</p>" +
            "<p>Peekom Plus (Single $5.99 · Double $9.99 · Family $19.99) schaltet 10 Slots, individuelles Theme, Schriftarten, Deckkraft, linkes Panel, Bildgröße und Export in der App frei.</p>" +
            '<p>Siehe die <a href="/features/#compare">Vergleichstabelle</a>.</p>',
        faq3bq: "Kann ich einen Lizenzschlüssel auf mehr als einem PC nutzen?",
        faq3ba:
            "<p>Auch bei unterschiedlichen Betriebssystemen — z. B. Windows-PC der Arbeit und MacBook zu Hause — reicht <strong>ein Plus-Kauf</strong>.</p>" +
            "<p>Die Installationsdateien unterscheiden sich, aber geben Sie auf jedem Gerät in den Einstellungen den <strong>gleichen Lizenzschlüssel</strong> ein.</p>" +
            "<p>Wie viele Geräte gleichzeitig nutzbar sind, hängt vom Tarif ab:</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Single</strong> — 1 Gerät</li>" +
            "<li><strong>Double</strong> — 2 Geräte (z. B. Windows-PC der Arbeit + MacBook zu Hause)</li>" +
            "<li><strong>Family</strong> — 5 Geräte</li>" +
            "</ul>" +
            "<p>Beispiel Double: Peekom auf dem Windows-PC der Arbeit installieren und Plus-Schlüssel in Einstellungen eingeben → macOS-Version auf dem MacBook installieren und den <strong>gleichen Schlüssel</strong> eingeben.</p>",
        faq3cq: "Kann ich Peekom weiter nutzen, wenn ich den Arbeits-PC wechsle oder den Job wechsle?",
        faq3ca:
            "<p>Peekom Plus erlaubt je nach Tarif 1 Gerät (Single), 2 (Double) oder 5 (Family).</p>" +
            "<p>Neuinstallation auf demselben Gerät ist erlaubt.</p>" +
            "<p>Für einen Wechsel auf ein neues Gerät kontaktieren Sie uns — wir prüfen und helfen.</p>" +
            "<p>Je nach Fall führen wir Sie zur Reaktivierung auf dem neuen Gerät nach Zurücksetzen zuvor aktivierter Geräte.</p>",
        faq3dq: "Welche Angaben soll ich für einen Gerätewechsel senden?",
        faq3da:
            "<p>Für eine schnellere Prüfung senden Sie die Kauf-E-Mail, Bestellnummer, Lizenzschlüssel und den Grund für den Wechsel.</p>" +
            "<p>Sind alle Plätze Ihres Tarifs belegt (Single 1 · Double 2 · Family 5), müssen wir ggf. aktivierte Geräte zurücksetzen — sichern Sie vorher, was Sie brauchen.</p>",
        faq4q: 'Microsoft Edge meldet, die Datei werde „nicht häufig heruntergeladen“.',
        faq4a:
            '<p>Beim Herunterladen des Installers in <strong>Microsoft Edge</strong> kann <strong>„Diese Datei wird nicht häufig heruntergeladen“</strong> erscheinen.</p>' +
            "<p>Das ist bei neu verteilten Apps üblich.</p>" +
            '<ol class="guide-step-list">' +
            "<li><kbd>Ctrl</kbd> + <kbd>J</kbd> drücken, um <strong>Downloads</strong> zu öffnen.</li>" +
            "<li>Bei blockiertem <code>Peekom-Setup.exe</code> auf die <strong>drei Punkte (…)</strong> klicken und <strong>Behalten</strong> wählen.</li>" +
            "<li>Im Warndialog <strong>Trotzdem behalten</strong> klicken, um den Installer auszuführen.</li>" +
            "</ol>" +
            '<p>Erscheint die Meldung erneut, laden Sie in <strong>Google Chrome</strong> erneut herunter.</p>' +
            '<p>Details in der <a href="#" onclick="openModal(); return false;">Installationsanleitung</a>.</p>',
        faq7q: "Nach Entfernen der Legacy-App 빼꼼 인덱스 erscheinen beim Start seltsame Zeichen oder Fehler. Was tun?",
        faq7a:
            "<p>Wurde die Legacy-App (빼꼼 인덱스) entfernt, während <strong>Autostart beim Anmelden noch aktiv</strong> war, können Starteinträge, Taskleisten-Anheftungen oder Ordner gelöschte Dateien suchen und <strong>Zeichensalat oder Fehler</strong> anzeigen.</p>" +
            "<p>Führen Sie diese Schritte einmal zur Bereinigung aus.</p>" +
            "<p><strong>1. Laufende Instanz vollständig beenden</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> → Task-Manager → Peekom-/빼꼼-Prozesse beenden</li>" +
            "<li>Taskleistensymbol rechtsklicken → <strong>Von Taskleiste lösen</strong></li>" +
            "</ul>" +
            "<p><strong>2. Autostart deaktivieren</strong> (Namen können variieren)</p>" +
            "<p><strong>Windows 11</strong> — Einstellungen → Apps → Autostart</p>" +
            "<p><strong>Windows 10</strong> — Task-Manager → Register Autostart</p>" +
            '<ul class="guide-step-list">' +
            "<li>Deaktivieren falls vorhanden: Peekom, Peekom Plus, 빼꼼 인덱스, com.peekom.app oder unleserliche Namen</li>" +
            "<li>Ein Eintrag kann im Autostart bleiben, obwohl er unter Installierte Apps fehlt.</li>" +
            "</ul>" +
            "<p><strong>3. Verbleibende Ordner löschen</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>Im Explorer <code>%LocalAppData%\\Programs</code> öffnen → Ordner <strong>빼꼼</strong> löschen</li>" +
            "<li><code>%AppData%\\빼꼼</code> öffnen → Ordner löschen (Notizen/Einstellungen; nur wenn nicht mehr benötigt)</li>" +
            "<li><code>%LocalAppData%</code> öffnen → Ordner mit <strong>빼꼼</strong> im Namen löschen</li>" +
            "</ol>" +
            "<p>Schlägt das Löschen fehl, beenden Sie Aufgaben aus Schritt 1 und versuchen Sie es erneut.</p>" +
            "<p><strong>4. Neu starten und prüfen</strong> — PC neu starten.</p>" +
            "<p>Keine Fehlerfenster und kein 빼꼼 in der Taskleiste bedeutet Erfolg.</p>" +
            "<p>Dann <a href=\"/download/\">Peekom (kostenlos)</a> neu installieren.</p>" +
            '<p class="privacy-doc__note">Inhalte der Legacy-App werden <strong>nicht automatisch migriert</strong>, da Peekom Daten woanders speichert.</p>' +
            '<p class="privacy-doc__note">Kopieren Sie Nötiges vor dem Entfernen der alten App.</p>',
        faq9a:
            "<p>Deinstallieren entfernt Ihre Lemon-Squeezy-Lizenz nicht.</p>" +
            "<p>So stellen Sie Peekom Plus und alle Plus-Funktionen wieder her:</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>1. Peekom neu installieren</strong> — Kostenlose Version (<code>Peekom-Setup.exe</code>) von <a href=\"/download/\">peekom.com</a> herunterladen und installieren.</li>" +
            "<li><strong>2. Lizenzschlüssel finden</strong> — Lemon-Squeezy-E-Mail öffnen und <strong>[License Key]</strong> kopieren. E-Mail verloren? Bei <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Lemon Squeezy Meine Bestellungen</a> mit derselben E-Mail anmelden.</li>" +
            "<li><strong>3. Plus reaktivieren</strong> — Einstellungen (Zahnrad) öffnen, Schlüssel unter <strong>Plus-Aktivierung</strong> einfügen und bestätigen. 10 Slots, Themes und weitere Plus-Funktionen werden wiederhergestellt.</li>" +
            "</ul>" +
            "<p><strong>Gerätelimit (je nach Tarif)</strong> — Neuinstallation auf demselben PC zählt als dasselbe Gerät.</p>" +
            "<p>Single 1 · Double 2 · Family 5 (z. B. Double — Arbeits-PC + Privat-PC).</p>",
        faq12a:
            "<p>Auch online muss die Plus-Aktivierung <strong>Lemon Squeezy (<code>api.lemonsqueezy.com</code>)</strong> erreichen.</p>" +
            "<p><strong>Firewalls, Sicherheitssoftware, VPN oder Proxy</strong> im Unternehmen können nur diesen Server blockieren.</p>" +
            "<p><strong>Bitte versuchen</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>Einmal in anderem Netz aktivieren (Heim-WLAN, Mobil-Hotspot)</li>" +
            "<li>IT bitten, <strong><code>https://api.lemonsqueezy.com</code> per HTTPS (443)</strong> freizugeben</li>" +
            "<li>Firmen-VPN ausschalten oder erlaubtes VPN testen</li>" +
            "</ul>" +
            "<p>Bei <strong>Aktivierungslimit (je nach Tarif)</strong> <a href=\"/contact/\">kontaktieren</a> Sie uns mit Kauf-E-Mail, Bestellnummer und Schlüssel — wir können Geräte zurücksetzen.</p>" +
            "<p>Installer erneut laden <strong>hilft nicht</strong>, wenn der Server weiter blockiert ist.</p>",
        winGuideBtn: 'Zeigt Edge an, die Datei werde „nicht häufig heruntergeladen“?',
        guideTitle: "Edge: Download-Blockade aufheben",
        step1: 'Beim Download in <b>Microsoft Edge</b> kann <b>„Diese Datei wird nicht häufig heruntergeladen“</b> erscheinen. Das ist bei neuen Apps üblich.',
        step2: "<kbd>Ctrl</kbd> + <kbd>J</kbd> für <b>Downloads</b>, <b>drei Punkte (…)</b> neben blockiertem <code>Peekom-Setup.exe</code> → <b>Behalten</b>.",
        step3: "Im Dialog <b>Trotzdem behalten</b> klicken. Wiederholt sich die Meldung, in <b>Google Chrome</b> erneut laden.",
        help1p: "Peekom Setup herunterladen und ausführen. In Edge kann die Meldung „nicht häufig heruntergeladen“ erscheinen.",
        guideInstallEdgeLi: '<li><strong>Edge-Download blockiert</strong> — Bei „Diese Datei wird nicht häufig heruntergeladen“ die <a href="#" onclick="openModal(); return false;">Installationsanleitung</a> öffnen: Downloads (<kbd>Ctrl</kbd>+<kbd>J</kbd>) → <strong>Behalten</strong> → <strong>Trotzdem behalten</strong>. Auch in Chrome erneut versuchen.</li>',
        dlFreeFreewareNote: "Peekom (kostenlos) ist Freeware; Plus ist optional."
    },
    pt: {
        heroPlusSingleCardTitle: "Peekom Plus - Single",
        heroPlusDoubleCardTitle: "Peekom Plus - Double",
        heroPlusFamilyCardTitle: "Peekom Plus - Family",
        heroPlusCardOsCompat: "Compatível com Windows / Mac",
        heroPlusSingleCardMeta: "Pagamento único · 1 dispositivo · vitalício",
        heroPlusDoubleCardMeta: "Pagamento único · 2 dispositivos · vitalício",
        heroPlusFamilyCardMeta: "Pagamento único · 5 dispositivos · vitalício",
        comparePricing: '<span class="pricing-was">$5.99–$19.99</span> <span class="pricing-vat">(sem IVA)</span> · <span class="pricing-launch">Preço de lançamento</span> · pagamento único · 1–5 dispositivos (conforme plano) · atualizações menores · reembolso 30 dias (<a href="mailto:' + EMAIL + '">' + EMAIL + '</a>)',
        guidePlusP: "1) Escolha um plano no Lemon Squeezy e compre → 2) Receba a chave de licença por e-mail → 3) Abra o Peekom → insira a chave na tela de bloqueio ou Configurações → 4) Ativação do Peekom Plus concluída. Reembolso 30 dias: <a href=\"mailto:" + EMAIL + "\">" + EMAIL + "</a>",
        dlPlusHint: 'Peekom Plus: Single <strong>$5.99</strong> · Double <strong>$9.99</strong> · Family <strong>$19.99</strong> (sem IVA) · <a href="' + BUY_D + '">Comprar no Lemon Squeezy</a> → insira a chave no app',
        faq1a:
            "<p>A versão gratuita inclui 3 índices, movimento em grupo, modo ICE, atraso ao passar o mouse, seleção de monitor, barra de formatação e inserção de imagens.</p>" +
            "<p>Peekom Plus (Single $5.99 · Double $9.99 · Family $19.99) desbloqueia 10 slots, tema personalizado, fontes, opacidade, painel esquerdo, redimensionamento de imagens e exportação no app.</p>" +
            '<p>Veja a <a href="/features/#compare">tabela comparativa</a>.</p>',
        faq3bq: "Posso usar uma chave de licença em mais de um PC?",
        faq3ba:
            "<p>Mesmo com sistemas diferentes — por ex. PC Windows do trabalho e MacBook em casa — basta <strong>comprar Plus uma vez</strong>.</p>" +
            "<p>Os instaladores diferem por SO, mas insira a <strong>mesma chave de licença</strong> em Configurações em cada dispositivo.</p>" +
            "<p>Quantos dispositivos você pode usar ao mesmo tempo depende do plano:</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Single</strong> — 1 dispositivo</li>" +
            "<li><strong>Double</strong> — 2 dispositivos (ex.: PC Windows do trabalho + MacBook em casa)</li>" +
            "<li><strong>Family</strong> — 5 dispositivos</li>" +
            "</ul>" +
            "<p>Exemplo Double: instale o Peekom no PC Windows do trabalho e insira a chave Plus em Configurações → instale a versão macOS no MacBook e insira a <strong>mesma chave</strong>.</p>",
        faq3cq: "Posso continuar usando o Peekom se trocar de PC do trabalho ou de emprego?",
        faq3ca:
            "<p>O Peekom Plus permite 1 dispositivo (Single), 2 (Double) ou 5 (Family), conforme o plano.</p>" +
            "<p>Reinstalar no mesmo dispositivo é permitido.</p>" +
            "<p>Para migrar para um novo dispositivo, entre em contato — analisaremos e ajudaremos.</p>" +
            "<p>Conforme o caso, podemos orientar a reativação no novo dispositivo após redefinir os ativados anteriormente.</p>",
        faq3dq: "Quais informações enviar para troca de dispositivo?",
        faq3da:
            "<p>Para análise mais rápida, envie o e-mail de compra, número do pedido, chave de licença e motivo da troca.</p>" +
            "<p>Se todas as vagas do plano estiverem em uso (Single 1 · Double 2 · Family 5), pode ser necessário redefinir dispositivos ativados — faça backup do necessário antes de contactar.</p>",
        faq4q: 'O Microsoft Edge diz que o arquivo «não é baixado com frequência».',
        faq4a:
            '<p>Ao baixar o instalador no <strong>Microsoft Edge</strong>, pode aparecer <strong>«Este arquivo não é baixado com frequência»</strong>.</p>' +
            "<p>É comum em apps recém-distribuídos.</p>" +
            '<ol class="guide-step-list">' +
            "<li>Pressione <kbd>Ctrl</kbd> + <kbd>J</kbd> para abrir <strong>Downloads</strong>.</li>" +
            "<li>Ao lado de <code>Peekom-Setup.exe</code> bloqueado, clique nos <strong>três pontos (…)</strong> e escolha <strong>Manter</strong>.</li>" +
            "<li>No aviso, clique em <strong>Manter mesmo assim</strong> para executar o instalador.</li>" +
            "</ol>" +
            '<p>Se a mensagem persistir, baixe novamente no <strong>Google Chrome</strong>.</p>' +
            '<p>Veja o <a href="#" onclick="openModal(); return false;">guia de instalação</a>.</p>',
        faq7q: "Após remover o app antigo 빼꼼 인덱스, aparecem textos estranhos ou erros na inicialização. O que fazer?",
        faq7a:
            "<p>Se você removeu o app antigo (빼꼼 인덱스) com a <strong>inicialização automática ainda ativada</strong>, entradas de inicialização, fixações na barra ou pastas restantes podem tentar executar arquivos excluídos e mostrar <strong>texto corrompido ou erros</strong>.</p>" +
            "<p>Siga estes passos uma vez para limpar.</p>" +
            "<p><strong>1. Encerre completamente qualquer instância em execução</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> → Gerenciador de Tarefas → encerre processos Peekom / 빼꼼</li>" +
            "<li>Clique com o botão direito no ícone da barra → <strong>Desafixar da barra de tarefas</strong></li>" +
            "</ul>" +
            "<p><strong>2. Desative entradas de inicialização</strong> (nomes podem variar)</p>" +
            "<p><strong>Windows 11</strong> — Configurações → Aplicativos → Inicialização</p>" +
            "<p><strong>Windows 10</strong> — Gerenciador de Tarefas → aba Inicialização</p>" +
            '<ul class="guide-step-list">' +
            "<li>Desative se presentes: Peekom, Peekom Plus, 빼꼼 인덱스, com.peekom.app ou nomes ilegíveis</li>" +
            "<li>Uma entrada pode permanecer na Inicialização mesmo ausente em Apps instalados.</li>" +
            "</ul>" +
            "<p><strong>3. Exclua pastas restantes</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>No Explorer, abra <code>%LocalAppData%\\Programs</code> → exclua pastas <strong>빼꼼</strong></li>" +
            "<li>Abra <code>%AppData%\\빼꼼</code> → exclua a pasta (notas/configurações; só se não for reutilizar)</li>" +
            "<li>Abra <code>%LocalAppData%</code> → exclua pastas com <strong>빼꼼</strong> no nome</li>" +
            "</ol>" +
            "<p>Se não conseguir excluir, encerre tarefas do passo 1 e tente de novo.</p>" +
            "<p><strong>4. Reinicie e verifique</strong> — Reinicie o PC.</p>" +
            "<p>Sem janelas de erro e sem 빼꼼 na barra, a limpeza foi bem-sucedida.</p>" +
            "<p>Depois instale <a href=\"/download/\">Peekom (grátis)</a> novamente.</p>" +
            '<p class="privacy-doc__note">O conteúdo do app antigo <strong>não é migrado automaticamente</strong> porque o Peekom armazena dados em outro local.</p>' +
            '<p class="privacy-doc__note">Copie o que precisar antes de remover o app antigo.</p>',
        faq9a:
            "<p>Desinstalar o app não remove sua licença Lemon Squeezy.</p>" +
            "<p>Siga estes passos para restaurar o Peekom Plus e todos os recursos pagos.</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>1. Reinstale o Peekom</strong> — Baixe a versão gratuita (<code>Peekom-Setup.exe</code>) em <a href=\"/download/\">peekom.com</a> e instale.</li>" +
            "<li><strong>2. Encontre sua chave</strong> — Abra o e-mail Lemon Squeezy e copie <strong>[License Key]</strong>. Perdeu o e-mail? Entre em <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Meus pedidos Lemon Squeezy</a> com o mesmo e-mail.</li>" +
            "<li><strong>3. Reative o Plus</strong> — Abra Configurações (ícone de engrenagem), cole a chave em <strong>Ativação Plus</strong> e confirme. 10 slots, temas personalizados e outros recursos Plus são restaurados.</li>" +
            "</ul>" +
            "<p><strong>Limite de dispositivos (conforme plano)</strong> — Reinstalar no mesmo PC conta como o mesmo dispositivo.</p>" +
            "<p>Single 1 · Double 2 · Family 5 (ex.: Double — PC do trabalho + PC pessoal).</p>",
        faq12a:
            "<p>Mesmo online, a ativação Plus precisa alcançar <strong>Lemon Squeezy (<code>api.lemonsqueezy.com</code>)</strong>.</p>" +
            "<p><strong>Firewalls, antivírus, VPN ou proxy</strong> corporativos podem bloquear só esse servidor.</p>" +
            "<p><strong>Tente isto</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>Ative uma vez em outra rede (Wi‑Fi doméstico, hotspot móvel)</li>" +
            "<li>Peça ao TI para permitir <strong><code>https://api.lemonsqueezy.com</code> via HTTPS (443)</strong></li>" +
            "<li>Desative VPN corporativa ou teste VPN permitida</li>" +
            "</ul>" +
            "<p>Se vir mensagem de <strong>limite de ativação (conforme plano)</strong>, <a href=\"/contact/\">contacte-nos</a> com e-mail de compra, pedido e chave — podemos redefinir dispositivos.</p>" +
            "<p>Baixar o instalador de novo <strong>não</strong> resolve se o servidor continuar bloqueado.</p>",
        winGuideBtn: 'O Edge diz que o arquivo «não é baixado com frequência»?',
        guideTitle: "Guia para desbloquear download no Edge",
        step1: 'Ao baixar no <b>Microsoft Edge</b>, pode aparecer <b>«Este arquivo não é baixado com frequência»</b>. É comum em apps recém-distribuídos.',
        step2: "Pressione <kbd>Ctrl</kbd> + <kbd>J</kbd> para <b>Downloads</b>, clique nos <b>três pontos (…)</b> ao lado de <code>Peekom-Setup.exe</code> bloqueado e escolha <b>Manter</b>.",
        step3: "Clique em <b>Manter mesmo assim</b> no aviso. Se repetir, baixe de novo no <b>Google Chrome</b>.",
        help1p: "Baixe e execute o Peekom Setup. No Edge pode aparecer o aviso de que o arquivo «não é baixado com frequência».",
        guideInstallEdgeLi: '<li><strong>Download bloqueado no Edge</strong> — Se vir «Este arquivo não é baixado com frequência», abra o <a href="#" onclick="openModal(); return false;">guia de instalação</a> e use Downloads (<kbd>Ctrl</kbd>+<kbd>J</kbd>) → <strong>Manter</strong> → <strong>Manter mesmo assim</strong>. Também pode tentar no Chrome.</li>',
        dlFreeFreewareNote: "Peekom (grátis) é freeware; Plus é opcional."
    },
    it: {
        heroPlusSingleCardTitle: "Peekom Plus - Single",
        heroPlusDoubleCardTitle: "Peekom Plus - Double",
        heroPlusFamilyCardTitle: "Peekom Plus - Family",
        heroPlusCardOsCompat: "Compatibile Windows / Mac",
        heroPlusSingleCardMeta: "Pagamento unico · 1 dispositivo · a vita",
        heroPlusDoubleCardMeta: "Pagamento unico · 2 dispositivi · a vita",
        heroPlusFamilyCardMeta: "Pagamento unico · 5 dispositivi · a vita",
        comparePricing: '<span class="pricing-was">$5.99–$19.99</span> <span class="pricing-vat">(IVA esclusa)</span> · <span class="pricing-launch">Prezzo di lancio</span> · pagamento unico · 1–5 dispositivi (in base al piano) · aggiornamenti minori · rimborso 30 giorni (<a href="mailto:' + EMAIL + '">' + EMAIL + '</a>)',
        guidePlusP: "1) Scegli un piano su Lemon Squeezy e acquista → 2) Ricevi la chiave di licenza via email → 3) Apri Peekom → inserisci la chiave nella schermata di blocco o Impostazioni → 4) Attivazione Peekom Plus completata. Rimborso 30 giorni: <a href=\"mailto:" + EMAIL + "\">" + EMAIL + "</a>",
        dlPlusHint: 'Peekom Plus: Single <strong>$5.99</strong> · Double <strong>$9.99</strong> · Family <strong>$19.99</strong> (IVA esclusa) · <a href="' + BUY_D + '">Acquista su Lemon Squeezy</a> → inserisci la chiave nell\'app',
        faq1a:
            "<p>La versione gratuita include 3 indici, spostamento gruppo, modalità ICE, ritardo hover, selezione monitor, barra formattazione e inserimento immagini.</p>" +
            "<p>Peekom Plus (Single $5.99 · Double $9.99 · Family $19.99) sblocca 10 slot, tema personalizzato, font, opacità, pannello sinistro, ridimensionamento immagini ed export nell'app.</p>" +
            '<p>Vedi la <a href="/features/#compare">tabella comparativa</a>.</p>',
        faq3bq: "Posso usare una chiave di licenza su più PC?",
        faq3ba:
            "<p>Anche con sistemi diversi — ad es. PC Windows lavoro e MacBook casa — basta <strong>acquistare Plus una volta</strong>.</p>" +
            "<p>I file di installazione differiscono per OS, ma inserisci la <strong>stessa chiave di licenza</strong> in Impostazioni su ogni dispositivo.</p>" +
            "<p>Quanti dispositivi puoi usare contemporaneamente dipende dal piano:</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Single</strong> — 1 dispositivo</li>" +
            "<li><strong>Double</strong> — 2 dispositivi (es. PC Windows lavoro + MacBook casa)</li>" +
            "<li><strong>Family</strong> — 5 dispositivi</li>" +
            "</ul>" +
            "<p>Esempio Double: installa Peekom sul PC Windows lavoro e inserisci la chiave Plus in Impostazioni → installa la versione macOS sul MacBook e inserisci la <strong>stessa chiave</strong>.</p>",
        faq3cq: "Posso continuare a usare Peekom se cambio PC lavoro o cambio lavoro?",
        faq3ca:
            "<p>Peekom Plus consente 1 dispositivo (Single), 2 (Double) o 5 (Family) in base al piano.</p>" +
            "<p>Reinstallare sullo stesso dispositivo è consentito.</p>" +
            "<p>Per spostarti su un nuovo dispositivo, contattaci: valuteremo e ti assisteremo.</p>" +
            "<p>A seconda del caso, potremmo guidarti alla riattivazione sul nuovo dispositivo dopo il reset di quelli attivati in precedenza.</p>",
        faq3dq: "Quali informazioni inviare per un cambio dispositivo?",
        faq3da:
            "<p>Per una revisione più rapida, invia email di acquisto, numero ordine, chiave di licenza e motivo del cambio.</p>" +
            "<p>Se hai usato tutti gli slot del piano (Single 1 · Double 2 · Family 5), potremmo dover reimpostare i dispositivi attivati — esegui backup prima di contattarci.</p>",
        faq4q: 'Microsoft Edge indica che il file «non viene scaricato di frequente».',
        faq4a:
            '<p>Scaricando l\'installer in <strong>Microsoft Edge</strong>, puoi vedere <strong>«Questo file non viene scaricato di frequente»</strong>.</p>' +
            "<p>È comune per app appena distribuite.</p>" +
            '<ol class="guide-step-list">' +
            "<li>Premi <kbd>Ctrl</kbd> + <kbd>J</kbd> per aprire <strong>Download</strong>.</li>" +
            "<li>Accanto a <code>Peekom-Setup.exe</code> bloccato, clicca sui <strong>tre puntini (…)</strong> e scegli <strong>Mantieni</strong>.</li>" +
            "<li>Nell'avviso, clicca <strong>Mantieni comunque</strong> per eseguire l'installer.</li>" +
            "</ol>" +
            '<p>Se il messaggio persiste, scarica di nuovo in <strong>Google Chrome</strong>.</p>' +
            '<p>Vedi la <a href="#" onclick="openModal(); return false;">guida all\'installazione</a>.</p>',
        faq7q: "Dopo aver rimosso l'app legacy 빼꼼 인덱스, compaiono testo strano o errori all'avvio. Cosa fare?",
        faq7a:
            "<p>Se hai rimosso l'app legacy (빼꼼 인덱스) con l'<strong>avvio automatico ancora attivo</strong>, voci di avvio, pin nella barra o cartelle residue possono cercare file eliminati e mostrare <strong>testo illeggibile o errori</strong>.</p>" +
            "<p>Segui questi passaggi una volta per pulire.</p>" +
            "<p><strong>1. Chiudi completamente qualsiasi istanza in esecuzione</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> → Gestione attività → termina processi Peekom / 빼꼼</li>" +
            "<li>Clic destro sull'icona barra → <strong>Rimuovi dalla barra delle applicazioni</strong></li>" +
            "</ul>" +
            "<p><strong>2. Disattiva voci di avvio</strong> (i nomi possono variare)</p>" +
            "<p><strong>Windows 11</strong> — Impostazioni → App → Avvio</p>" +
            "<p><strong>Windows 10</strong> — Gestione attività → scheda Avvio</p>" +
            '<ul class="guide-step-list">' +
            "<li>Disattiva se presenti: Peekom, Peekom Plus, 빼꼼 인덱스, com.peekom.app o nomi illeggibili</li>" +
            "<li>Una voce può restare in Avvio anche se assente dalle app installate.</li>" +
            "</ul>" +
            "<p><strong>3. Elimina cartelle residue</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>In Esplora file apri <code>%LocalAppData%\\Programs</code> → elimina cartelle <strong>빼꼼</strong></li>" +
            "<li>Apri <code>%AppData%\\빼꼼</code> → elimina la cartella (note/impostazioni; solo se non la riuserai)</li>" +
            "<li>Apri <code>%LocalAppData%</code> → elimina cartelle con <strong>빼꼼</strong> nel nome</li>" +
            "</ol>" +
            "<p>Se l'eliminazione fallisce, termina i processi al passo 1 e riprova.</p>" +
            "<p><strong>4. Riavvia e verifica</strong> — Riavvia il PC.</p>" +
            "<p>Nessuna finestra di errore e nessun 빼꼼 nella barra significa pulizia riuscita.</p>" +
            "<p>Poi installa <a href=\"/download/\">Peekom (gratuito)</a> da zero.</p>" +
            '<p class="privacy-doc__note">I contenuti dell\'app legacy <strong>non vengono migrati automaticamente</strong> perché Peekom salva i dati altrove.</p>' +
            '<p class="privacy-doc__note">Copia ciò che ti serve prima di rimuovere la vecchia app.</p>',
        faq9a:
            "<p>Disinstallare l'app non rimuove la licenza Lemon Squeezy.</p>" +
            "<p>Segui questi passaggi per ripristinare Peekom Plus e tutte le funzioni a pagamento.</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>1. Reinstalla Peekom</strong> — Scarica la versione gratuita (<code>Peekom-Setup.exe</code>) da <a href=\"/download/\">peekom.com</a> e installala.</li>" +
            "<li><strong>2. Trova la chiave</strong> — Apri l'email Lemon Squeezy e copia <strong>[License Key]</strong>. Email persa? Accedi a <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">I miei ordini Lemon Squeezy</a> con la stessa email.</li>" +
            "<li><strong>3. Riattiva Plus</strong> — Apri Impostazioni (icona ingranaggio), incolla la chiave in <strong>Attivazione Plus</strong> e conferma. 10 slot, temi personalizzati e altre funzioni Plus vengono ripristinati.</li>" +
            "</ul>" +
            "<p><strong>Limite dispositivi (in base al piano)</strong> — Reinstallare sullo stesso PC conta come lo stesso dispositivo.</p>" +
            "<p>Single 1 · Double 2 · Family 5 (es. Double — PC lavoro + PC personale).</p>",
        faq12a:
            "<p>Anche online, l'attivazione Plus deve raggiungere <strong>Lemon Squeezy (<code>api.lemonsqueezy.com</code>)</strong>.</p>" +
            "<p><strong>Firewall, antivirus, VPN o proxy</strong> aziendali possono bloccare solo quel server.</p>" +
            "<p><strong>Prova questo</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>Attiva una volta su altra rete (Wi‑Fi casa, hotspot mobile)</li>" +
            "<li>Chiedi all'IT di consentire <strong><code>https://api.lemonsqueezy.com</code> via HTTPS (443)</strong></li>" +
            "<li>Disattiva VPN aziendale o prova VPN consentita</li>" +
            "</ul>" +
            "<p>Se vedi un messaggio di <strong>limite attivazione (in base al piano)</strong>, <a href=\"/contact/\">contattaci</a> con email acquisto, ordine e chiave — possiamo reimpostare i dispositivi.</p>" +
            "<p>Riscaricare l'installer <strong>non</strong> risolve se il server resta bloccato.</p>",
        winGuideBtn: 'Edge indica che il file «non viene scaricato di frequente»?',
        guideTitle: "Guida sblocco download Edge",
        step1: 'Scaricando in <b>Microsoft Edge</b>, puoi vedere <b>«Questo file non viene scaricato di frequente»</b>. È comune per app appena distribuite.',
        step2: "Premi <kbd>Ctrl</kbd> + <kbd>J</kbd> per <b>Download</b>, clicca sui <b>tre puntini (…)</b> accanto a <code>Peekom-Setup.exe</code> bloccato e scegli <b>Mantieni</b>.",
        step3: "Clicca <b>Mantieni comunque</b> nell'avviso. Se si ripete, scarica di nuovo in <b>Google Chrome</b>.",
        help1p: "Scarica ed esegui Peekom Setup. In Edge può apparire l'avviso «non viene scaricato di frequente».",
        guideInstallEdgeLi: '<li><strong>Download bloccato in Edge</strong> — Se vedi «Questo file non viene scaricato di frequente», apri la <a href="#" onclick="openModal(); return false;">guida all\'installazione</a> e usa Download (<kbd>Ctrl</kbd>+<kbd>J</kbd>) → <strong>Mantieni</strong> → <strong>Mantieni comunque</strong>. Puoi anche riprovare in Chrome.</li>',
        dlFreeFreewareNote: "Peekom (gratuito) è freeware; Plus è opzionale."
    },
    ru: {
        heroPlusSingleCardTitle: "Peekom Plus - Single",
        heroPlusDoubleCardTitle: "Peekom Plus - Double",
        heroPlusFamilyCardTitle: "Peekom Plus - Family",
        heroPlusCardOsCompat: "Совместимость Windows / Mac",
        heroPlusSingleCardMeta: "Разовая оплата · 1 устройство · навсегда",
        heroPlusDoubleCardMeta: "Разовая оплата · 2 устройства · навсегда",
        heroPlusFamilyCardMeta: "Разовая оплата · 5 устройств · навсегда",
        comparePricing: '<span class="pricing-was">$5.99–$19.99</span> <span class="pricing-vat">(без НДС)</span> · <span class="pricing-launch">Цена запуска</span> · разовая оплата · 1–5 устройств (по тарифу) · мелкие обновления · возврат 30 дней (<a href="mailto:' + EMAIL + '">' + EMAIL + '</a>)',
        guidePlusP: "1) Выберите тариф на Lemon Squeezy и купите → 2) Получите ключ лицензии по email → 3) Откройте Peekom → введите ключ на экране блокировки или в Настройках → 4) Активация Peekom Plus завершена. Возврат 30 дней: <a href=\"mailto:" + EMAIL + "\">" + EMAIL + "</a>",
        dlPlusHint: 'Peekom Plus: Single <strong>$5.99</strong> · Double <strong>$9.99</strong> · Family <strong>$19.99</strong> (без НДС) · <a href="' + BUY_D + '">Купить на Lemon Squeezy</a> → введите ключ в приложении',
        faq1a:
            "<p>Бесплатная версия включает 3 индекса, групповое перемещение, режим ICE, задержку наведения, выбор монитора, панель форматирования и вставку изображений.</p>" +
            "<p>Peekom Plus (Single $5.99 · Double $9.99 · Family $19.99) открывает 10 слотов, свою тему, шрифты, прозрачность, левую панель, изменение размера изображений и экспорт в приложении.</p>" +
            '<p>См. <a href="/features/#compare">таблицу сравнения</a>.</p>',
        faq3bq: "Можно ли использовать один ключ лицензии на нескольких ПК?",
        faq3ba:
            "<p>Даже при разных ОС — например, рабочий Windows и домашний MacBook — достаточно <strong>купить Plus один раз</strong>.</p>" +
            "<p>Файлы установки различаются, но введите <strong>тот же ключ лицензии</strong> в Настройках на каждом устройстве.</p>" +
            "<p>Сколько устройств можно использовать одновременно, зависит от тарифа:</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Single</strong> — 1 устройство</li>" +
            "<li><strong>Double</strong> — 2 устройства (напр. рабочий Windows + домашний MacBook)</li>" +
            "<li><strong>Family</strong> — 5 устройств</li>" +
            "</ul>" +
            "<p>Пример Double: установите Peekom на рабочий Windows и введите ключ Plus в Настройках → установите macOS-версию на MacBook и введите <strong>тот же ключ</strong>.</p>",
        faq3cq: "Можно ли продолжать использовать Peekom при смене рабочего ПК или работы?",
        faq3ca:
            "<p>Peekom Plus позволяет 1 устройство (Single), 2 (Double) или 5 (Family) в зависимости от тарифа.</p>" +
            "<p>Переустановка на том же устройстве разрешена.</p>" +
            "<p>Для переноса на новое устройство свяжитесь с нами — мы рассмотрим и поможем.</p>" +
            "<p>В зависимости от ситуации можем предложить повторную активацию на новом устройстве после сброса ранее активированных.</p>",
        faq3dq: "Какую информацию отправить при смене устройства?",
        faq3da:
            "<p>Для быстрой проверки отправьте email покупки, номер заказа, ключ лицензии и причину смены устройства.</p>" +
            "<p>Если все слоты тарифа заняты (Single 1 · Double 2 · Family 5), может потребоваться сброс активированных устройств — сохраните нужное заранее.</p>",
        faq4q: 'Microsoft Edge сообщает, что файл «редко скачивается».',
        faq4a:
            '<p>При загрузке установщика в <strong>Microsoft Edge</strong> может появиться <strong>«Этот файл редко скачивается»</strong> (или аналогичное предупреждение).</p>' +
            "<p>Это обычно для недавно распространяемых приложений.</p>" +
            '<ol class="guide-step-list">' +
            "<li>Нажмите <kbd>Ctrl</kbd> + <kbd>J</kbd>, чтобы открыть <strong>Загрузки</strong>.</li>" +
            "<li>Рядом с заблокированным <code>Peekom-Setup.exe</code> нажмите <strong>три точки (…)</strong> и выберите <strong>Сохранить</strong>.</li>" +
            "<li>В предупреждении нажмите <strong>Все равно сохранить</strong>, чтобы запустить установщик.</li>" +
            "</ol>" +
            '<p>Если сообщение повторяется, попробуйте скачать снова в <strong>Google Chrome</strong>.</p>' +
            '<p>Подробнее в <a href="#" onclick="openModal(); return false;">руководстве по установке</a>.</p>',
        faq7q: "После удаления старого приложения 빼꼼 인덱스 при запуске появляются кракозябры или ошибки. Что делать?",
        faq7a:
            "<p>Если старое приложение (빼꼼 인덱스) удалено при <strong>включённом автозапуске</strong>, записи автозагрузки, закрепления на панели задач или папки могут искать удалённые файлы и показывать <strong>искажённый текст или ошибки</strong>.</p>" +
            "<p>Выполните эти шаги один раз для очистки.</p>" +
            "<p><strong>1. Полностью завершите работающие экземпляры</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> → Диспетчер задач → завершите процессы Peekom / 빼꼼</li>" +
            "<li>ПКМ по значку на панели → <strong>Открепить от панели задач</strong></li>" +
            "</ul>" +
            "<p><strong>2. Отключите автозагрузку</strong> (названия могут отличаться)</p>" +
            "<p><strong>Windows 11</strong> — Параметры → Приложения → Автозагрузка</p>" +
            "<p><strong>Windows 10</strong> — Диспетчер задач → вкладка Автозагрузка</p>" +
            '<ul class="guide-step-list">' +
            "<li>Отключите при наличии: Peekom, Peekom Plus, 빼꼼 인덱스, com.peekom.app или нечитаемые имена</li>" +
            "<li>Запись может остаться в автозагрузке, даже если её нет в установленных приложениях.</li>" +
            "</ul>" +
            "<p><strong>3. Удалите оставшиеся папки</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>В проводнике откройте <code>%LocalAppData%\\Programs</code> → удалите папки <strong>빼꼼</strong></li>" +
            "<li>Откройте <code>%AppData%\\빼꼼</code> → удалите папку (заметки/настройки; только если больше не нужна)</li>" +
            "<li>Откройте <code>%LocalAppData%</code> → удалите папки с <strong>빼꼼</strong> в имени</li>" +
            "</ol>" +
            "<p>Если удаление не удаётся, завершите задачи из шага 1 и повторите.</p>" +
            "<p><strong>4. Перезагрузите и проверьте</strong> — Перезагрузите ПК.</p>" +
            "<p>Нет окон ошибок и нет 빼꼼 на панели — очистка успешна.</p>" +
            "<p>Затем установите <a href=\"/download/\">Peekom (бесплатно)</a> заново.</p>" +
            '<p class="privacy-doc__note">Содержимое старого приложения <strong>не переносится автоматически</strong>, так как Peekom хранит данные в другом месте.</p>' +
            '<p class="privacy-doc__note">Скопируйте нужное перед удалением старого приложения.</p>',
        faq9a:
            "<p>Удаление приложения не отменяет лицензию Lemon Squeezy.</p>" +
            "<p>Выполните эти шаги, чтобы восстановить Peekom Plus и все платные функции.</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>1. Переустановите Peekom</strong> — Скачайте бесплатную версию (<code>Peekom-Setup.exe</code>) с <a href=\"/download/\">peekom.com</a> и установите.</li>" +
            "<li><strong>2. Найдите ключ</strong> — Откройте письмо Lemon Squeezy и скопируйте <strong>[License Key]</strong>. Потеряли письмо? Войдите в <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Мои заказы Lemon Squeezy</a> с тем же email.</li>" +
            "<li><strong>3. Повторно активируйте Plus</strong> — Откройте Настройки (шестерёнка), вставьте ключ в <strong>Активация Plus</strong> и подтвердите. Восстанавливаются 10 слотов, темы и другие функции Plus.</li>" +
            "</ul>" +
            "<p><strong>Лимит устройств (по тарифу)</strong> — Переустановка на том же ПК считается тем же устройством.</p>" +
            "<p>Single 1 · Double 2 · Family 5 (напр. Double — рабочий ПК + личный ПК).</p>",
        faq12a:
            "<p>Даже при подключении к интернету активация Plus должна достичь <strong>Lemon Squeezy (<code>api.lemonsqueezy.com</code>)</strong>.</p>" +
            "<p>Корпоративные <strong>файрволы, антивирус, VPN или прокси</strong> могут блокировать только этот сервер.</p>" +
            "<p><strong>Попробуйте</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>Активируйте раз в другой сети (домашний Wi‑Fi, мобильная точка доступа)</li>" +
            "<li>Попросите IT разрешить <strong><code>https://api.lemonsqueezy.com</code> по HTTPS (443)</strong></li>" +
            "<li>Отключите корпоративный VPN или используйте разрешённый VPN</li>" +
            "</ul>" +
            "<p>При сообщении о <strong>лимите активации (по тарифу)</strong> <a href=\"/contact/\">свяжитесь с нами</a> с email покупки, номером заказа и ключом — поможем сбросить устройства.</p>" +
            "<p>Повторная загрузка установщика <strong>не</strong> поможет, если сервер по-прежнему заблокирован.</p>",
        winGuideBtn: 'Edge сообщает, что файл «редко скачивается»?',
        guideTitle: "Как разблокировать загрузку в Edge",
        step1: 'При загрузке в <b>Microsoft Edge</b> может появиться <b>«Этот файл редко скачивается»</b>. Это обычно для новых приложений.',
        step2: "Нажмите <kbd>Ctrl</kbd> + <kbd>J</kbd> для <b>Загрузок</b>, <b>три точки (…)</b> у заблокированного <code>Peekom-Setup.exe</code> → <b>Сохранить</b>.",
        step3: "Нажмите <b>Все равно сохранить</b> в предупреждении. При повторе загрузите снова в <b>Google Chrome</b>.",
        help1p: "Скачайте и запустите Peekom Setup. В Edge может появиться предупреждение «редко скачивается».",
        guideInstallEdgeLi: '<li><strong>Загрузка заблокирована в Edge</strong> — При «Этот файл редко скачивается» откройте <a href="#" onclick="openModal(); return false;">руководство по установке</a>: Загрузки (<kbd>Ctrl</kbd>+<kbd>J</kbd>) → <strong>Сохранить</strong> → <strong>Все равно сохранить</strong>. Можно повторить в Chrome.</li>',
        dlFreeFreewareNote: "Peekom (бесплатно) — freeware; Plus необязателен."
    },
    vi: {
        heroPlusSingleCardTitle: "Peekom Plus - Single",
        heroPlusDoubleCardTitle: "Peekom Plus - Double",
        heroPlusFamilyCardTitle: "Peekom Plus - Family",
        heroPlusCardOsCompat: "Tương thích Windows / Mac",
        heroPlusSingleCardMeta: "Thanh toán một lần · 1 thiết bị · trọn đời",
        heroPlusDoubleCardMeta: "Thanh toán một lần · 2 thiết bị · trọn đời",
        heroPlusFamilyCardMeta: "Thanh toán một lần · 5 thiết bị · trọn đời",
        comparePricing: '<span class="pricing-was">$5.99–$19.99</span> <span class="pricing-vat">(chưa gồm VAT)</span> · <span class="pricing-launch">Giá ra mắt</span> · một lần · 1–5 thiết bị (theo gói) · cập nhật nhỏ · hoàn tiền 30 ngày (<a href="mailto:' + EMAIL + '">' + EMAIL + '</a>)',
        guidePlusP: "1) Chọn gói trên Lemon Squeezy và mua → 2) Nhận khóa bản quyền qua email → 3) Mở Peekom → nhập khóa trên màn hình khóa hoặc Cài đặt → 4) Kích hoạt Peekom Plus hoàn tất. Hoàn tiền 30 ngày: <a href=\"mailto:" + EMAIL + "\">" + EMAIL + "</a>",
        dlPlusHint: 'Peekom Plus: Single <strong>$5.99</strong> · Double <strong>$9.99</strong> · Family <strong>$19.99</strong> (chưa gồm VAT) · <a href="' + BUY_D + '">Mua trên Lemon Squeezy</a> → nhập khóa trong app',
        faq1a:
            "<p>Bản miễn phí gồm 3 chỉ mục, di chuyển nhóm, chế độ ICE, độ trễ hover, chọn màn hình, thanh định dạng và chèn ảnh.</p>" +
            "<p>Peekom Plus (Single $5.99 · Double $9.99 · Family $19.99) mở khóa 10 slot, chủ đề tùy chỉnh, phông chữ, độ mờ, bảng trái, thay đổi kích thước ảnh và xuất trong app.</p>" +
            '<p>Xem <a href="/features/#compare">bảng so sánh</a>.</p>',
        faq3bq: "Tôi có thể dùng một khóa bản quyền trên nhiều PC không?",
        faq3ba:
            "<p>Dù dùng hệ điều hành khác nhau — ví dụ PC Windows công ty và MacBook ở nhà — bạn chỉ cần <strong>mua Plus một lần</strong>.</p>" +
            "<p>File cài đặt khác theo OS, nhưng nhập <strong>cùng khóa bản quyền</strong> trong Cài đặt trên mỗi thiết bị.</p>" +
            "<p>Số thiết bị dùng đồng thời phụ thuộc gói:</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Single</strong> — 1 thiết bị</li>" +
            "<li><strong>Double</strong> — 2 thiết bị (vd. PC Windows công ty + MacBook nhà)</li>" +
            "<li><strong>Family</strong> — 5 thiết bị</li>" +
            "</ul>" +
            "<p>Ví dụ Double: cài Peekom trên PC Windows công ty và nhập khóa Plus trong Cài đặt → cài bản macOS trên MacBook và nhập <strong>cùng khóa</strong>.</p>",
        faq3cq: "Tôi có thể tiếp tục dùng Peekom khi đổi PC công ty hoặc đổi việc không?",
        faq3ca:
            "<p>Peekom Plus cho phép 1 thiết bị (Single), 2 (Double) hoặc 5 (Family) tùy gói.</p>" +
            "<p>Cài lại trên cùng thiết bị được phép.</p>" +
            "<p>Nếu cần chuyển sang thiết bị mới, hãy liên hệ — chúng tôi sẽ xem xét và hỗ trợ.</p>" +
            "<p>Tùy trường hợp, có thể hướng dẫn kích hoạt lại trên thiết bị mới sau khi đặt lại thiết bị đã kích hoạt.</p>",
        faq3dq: "Cần gửi thông tin gì khi đổi thiết bị?",
        faq3da:
            "<p>Để xử lý nhanh, gửi email mua hàng, số đơn, khóa bản quyền và lý do đổi thiết bị.</p>" +
            "<p>Nếu đã dùng hết slot gói (Single 1 · Double 2 · Family 5), có thể cần đặt lại thiết bị đã kích hoạt — hãy sao lưu trước khi liên hệ.</p>",
        faq4q: 'Microsoft Edge báo tệp «không được tải xuống phổ biến».',
        faq4a:
            '<p>Khi tải trình cài trong <strong>Microsoft Edge</strong>, bạn có thể thấy <strong>«Tệp này không được tải xuống phổ biến»</strong> (hoặc tương tự).</p>' +
            "<p>Điều này thường gặp với app mới phát hành.</p>" +
            '<ol class="guide-step-list">' +
            "<li>Nhấn <kbd>Ctrl</kbd> + <kbd>J</kbd> để mở <strong>Tải xuống</strong>.</li>" +
            "<li>Bên cạnh <code>Peekom-Setup.exe</code> bị chặn, nhấn <strong>ba chấm (…)</strong> và chọn <strong>Giữ</strong>.</li>" +
            "<li>Trong hộp thoại cảnh báo, nhấn <strong>Vẫn giữ</strong> để chạy trình cài.</li>" +
            "</ol>" +
            '<p>Nếu thông báo lặp lại, thử tải lại trong <strong>Google Chrome</strong>.</p>' +
            '<p>Xem <a href="#" onclick="openModal(); return false;">hướng dẫn cài đặt</a> để biết chi tiết.</p>',
        faq7q: "Sau khi gỡ app cũ 빼꼼 인덱스, khởi động xuất hiện ký tự lạ hoặc lỗi. Phải làm gì?",
        faq7a:
            "<p>Nếu bạn gỡ app cũ (빼꼼 인덱스) khi <strong>tự khởi động khi đăng nhập vẫn bật</strong>, mục khởi động, ghim taskbar hoặc thư mục còn lại có thể tìm file đã xóa và hiện <strong>chữ lỗi hoặc lỗi</strong>.</p>" +
            "<p>Thực hiện các bước sau một lần để dọn dẹp.</p>" +
            "<p><strong>1. Thoát hoàn toàn mọi phiên bản đang chạy</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> → Trình quản lý tác vụ → kết thúc tiến trình Peekom / 빼꼼</li>" +
            "<li>Chuột phải biểu tượng taskbar → <strong>Bỏ ghim khỏi taskbar</strong></li>" +
            "</ul>" +
            "<p><strong>2. Tắt mục khởi động</strong> (tên có thể khác)</p>" +
            "<p><strong>Windows 11</strong> — Cài đặt → Ứng dụng → Khởi động</p>" +
            "<p><strong>Windows 10</strong> — Trình quản lý tác vụ → tab Khởi động</p>" +
            '<ul class="guide-step-list">' +
            "<li>Tắt nếu có: Peekom, Peekom Plus, 빼꼼 인덱스, com.peekom.app hoặc tên lỗi font</li>" +
            "<li>Mục có thể còn trong Khởi động dù không còn trong ứng dụng đã cài.</li>" +
            "</ul>" +
            "<p><strong>3. Xóa thư mục còn lại</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>Trong Explorer mở <code>%LocalAppData%\\Programs</code> → xóa thư mục <strong>빼꼼</strong></li>" +
            "<li>Mở <code>%AppData%\\빼꼼</code> → xóa thư mục (ghi chú/cài đặt; chỉ khi không dùng lại)</li>" +
            "<li>Mở <code>%LocalAppData%</code> → xóa thư mục có <strong>빼꼼</strong> trong tên</li>" +
            "</ol>" +
            "<p>Nếu không xóa được, kết thúc tác vụ ở bước 1 rồi thử lại.</p>" +
            "<p><strong>4. Khởi động lại và kiểm tra</strong> — Khởi động lại PC.</p>" +
            "<p>Không còn cửa sổ lỗi và không còn 빼꼼 trên taskbar là thành công.</p>" +
            "<p>Sau đó cài mới <a href=\"/download/\">Peekom (miễn phí)</a>.</p>" +
            '<p class="privacy-doc__note">Nội dung app cũ <strong>không tự động chuyển</strong> vì Peekom lưu dữ liệu ở vị trí khác.</p>' +
            '<p class="privacy-doc__note">Sao chép nội dung cần thiết trước khi gỡ app cũ.</p>',
        faq9a:
            "<p>Gỡ app không xóa bản quyền Lemon Squeezy của bạn.</p>" +
            "<p>Làm theo các bước sau để khôi phục Peekom Plus và mọi tính năng trả phí.</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>1. Cài lại Peekom</strong> — Tải bản miễn phí (<code>Peekom-Setup.exe</code>) từ <a href=\"/download/\">peekom.com</a> và cài.</li>" +
            "<li><strong>2. Tìm khóa bản quyền</strong> — Mở email Lemon Squeezy và sao chép <strong>[License Key]</strong>. Mất email? Đăng nhập <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Đơn hàng Lemon Squeezy</a> bằng cùng email.</li>" +
            "<li><strong>3. Kích hoạt lại Plus</strong> — Mở Cài đặt (biểu tượng bánh răng), dán khóa vào <strong>Kích hoạt Plus</strong> và xác nhận. Khôi phục 10 slot, chủ đề tùy chỉnh và tính năng Plus khác.</li>" +
            "</ul>" +
            "<p><strong>Giới hạn thiết bị (theo gói)</strong> — Cài lại trên cùng PC được tính là cùng thiết bị.</p>" +
            "<p>Single 1 · Double 2 · Family 5 (vd. Double — PC công ty + PC cá nhân).</p>",
        faq12a:
            "<p>Dù PC đã online, kích hoạt Plus vẫn cần kết nối <strong>Lemon Squeezy (<code>api.lemonsqueezy.com</code>)</strong>.</p>" +
            "<p><strong>Tường lửa, phần mềm bảo mật, VPN hoặc proxy</strong> công ty có thể chỉ chặn máy chủ này.</p>" +
            "<p><strong>Hãy thử</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>Kích hoạt một lần trên mạng khác (Wi‑Fi nhà, hotspot điện thoại)</li>" +
            "<li>Nhờ IT cho phép <strong><code>https://api.lemonsqueezy.com</code> qua HTTPS (443)</strong></li>" +
            "<li>Tắt VPN công ty hoặc thử VPN được phép</li>" +
            "</ul>" +
            "<p>Nếu thấy thông báo <strong>giới hạn kích hoạt (theo gói)</strong>, <a href=\"/contact/\">liên hệ</a> với email mua, số đơn và khóa — chúng tôi có thể đặt lại thiết bị.</p>" +
            "<p>Tải lại trình cài <strong>không</strong> sửa được nếu máy chủ vẫn bị chặn.</p>",
        winGuideBtn: 'Edge có báo tệp «không được tải xuống phổ biến» không?',
        guideTitle: "Hướng dẫn bỏ chặn tải xuống Edge",
        step1: 'Khi tải trong <b>Microsoft Edge</b>, bạn có thể thấy <b>«Tệp này không được tải xuống phổ biến»</b>. Thường gặp với app mới phát hành.',
        step2: "Nhấn <kbd>Ctrl</kbd> + <kbd>J</kbd> mở <b>Tải xuống</b>, nhấn <b>ba chấm (…)</b> bên <code>Peekom-Setup.exe</code> bị chặn và chọn <b>Giữ</b>.",
        step3: "Nhấn <b>Vẫn giữ</b> trong cảnh báo để chạy trình cài. Nếu lặp lại, tải lại trong <b>Google Chrome</b>.",
        help1p: "Tải và chạy Peekom Setup. Edge có thể hiện cảnh báo «không được tải xuống phổ biến».",
        guideInstallEdgeLi: '<li><strong>Tải xuống bị chặn trên Edge</strong> — Nếu thấy «Tệp này không được tải xuống phổ biến», mở <a href="#" onclick="openModal(); return false;">hướng dẫn cài đặt</a> và dùng Tải xuống (<kbd>Ctrl</kbd>+<kbd>J</kbd>) → <strong>Giữ</strong> → <strong>Vẫn giữ</strong>. Cũng có thể thử lại trên Chrome.</li>',
        dlFreeFreewareNote: "Peekom (miễn phí) là freeware; Plus là tùy chọn."
    },
    th: {
        heroPlusSingleCardTitle: "Peekom Plus - Single",
        heroPlusDoubleCardTitle: "Peekom Plus - Double",
        heroPlusFamilyCardTitle: "Peekom Plus - Family",
        heroPlusCardOsCompat: "รองรับ Windows / Mac",
        heroPlusSingleCardMeta: "จ่ายครั้งเดียว · 1 อุปกรณ์ · ใช้ได้ตลอดชีพ",
        heroPlusDoubleCardMeta: "จ่ายครั้งเดียว · 2 อุปกรณ์ · ใช้ได้ตลอดชีพ",
        heroPlusFamilyCardMeta: "จ่ายครั้งเดียว · 5 อุปกรณ์ · ใช้ได้ตลอดชีพ",
        comparePricing: '<span class="pricing-was">$5.99–$19.99</span> <span class="pricing-vat">(ไม่รวม VAT)</span> · <span class="pricing-launch">ราคาเปิดตัว</span> · จ่ายครั้งเดียว · 1–5 อุปกรณ์ (ตามแพ็ก) · อัปเดตย่อย · คืนเงิน 30 วัน (<a href="mailto:' + EMAIL + '">' + EMAIL + '</a>)',
        guidePlusP: "1) เลือกแพ็กบน Lemon Squeezy และซื้อ → 2) รับคีย์ใบอนุญาตทางอีเมล → 3) เปิด Peekom → ใส่คีย์ในหน้าจอล็อกหรือการตั้งค่า → 4) เปิดใช้ Peekom Plus สำเร็จ คืนเงิน 30 วัน: <a href=\"mailto:" + EMAIL + "\">" + EMAIL + "</a>",
        dlPlusHint: 'Peekom Plus: Single <strong>$5.99</strong> · Double <strong>$9.99</strong> · Family <strong>$19.99</strong> (ไม่รวม VAT) · <a href="' + BUY_D + '">ซื้อบน Lemon Squeezy</a> → ใส่คีย์ในแอป',
        faq1a:
            "<p>เวอร์ชันฟรีมี 3 ดัชนี การย้ายกลุ่ม โหมด ICE หน่วง hover เลือกจอ แถบจัดรูปแบบ และแทรกรูป</p>" +
            "<p>Peekom Plus (Single $5.99 · Double $9.99 · Family $19.99) ปลดล็อก 10 ช่อง ธีมกำหนดเอง ฟอนต์ ความโปร่งใส แผงซ้าย ปรับขนาดรูป และส่งออกในแอป</p>" +
            '<p>ดู <a href="/features/#compare">ตารางเปรียบเทียบ</a></p>',
        faq3bq: "ใช้คีย์ใบอนุญาตเดียวกันบนหลาย PC ได้ไหม?",
        faq3ba:
            "<p>แม้ใช้ระบบต่างกัน — เช่น PC Windows ที่ทำงานกับ MacBook ที่บ้าน — คุณ <strong>ซื้อ Plus ครั้งเดียว</strong>ก็พอ</p>" +
            "<p>ไฟล์ติดตั้งต่างตาม OS แต่ใส่ <strong>คีย์ใบอนุญาตเดียวกัน</strong>ในการตั้งค่าของแต่ละอุปกรณ์</p>" +
            "<p>จำนวนอุปกรณ์ที่ใช้พร้อมกันขึ้นกับแพ็ก:</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Single</strong> — 1 อุปกรณ์</li>" +
            "<li><strong>Double</strong> — 2 อุปกรณ์ (เช่น PC Windows ที่ทำงาน + MacBook ที่บ้าน)</li>" +
            "<li><strong>Family</strong> — 5 อุปกรณ์</li>" +
            "</ul>" +
            "<p>ตัวอย่าง Double: ติดตั้ง Peekom บน PC Windows ที่ทำงานและใส่คีย์ Plus ในการตั้งค่า → ติดตั้ง macOS บน MacBook และใส่ <strong>คีย์เดียวกัน</strong></p>",
        faq3cq: "เปลี่ยน PC ที่ทำงานหรือเปลี่ยนงานแล้วยังใช้ Peekom ต่อได้ไหม?",
        faq3ca:
            "<p>Peekom Plus ใช้ได้ 1 อุปกรณ์ (Single) 2 (Double) หรือ 5 (Family) ตามแพ็ก</p>" +
            "<p>ติดตั้งใหม่บนอุปกรณ์เดิมได้</p>" +
            "<p>หากต้องย้ายไปอุปกรณ์ใหม่ ติดต่อเรา เราจะตรวจสอบและช่วยเหลือ</p>" +
            "<p>ตามสถานการณ์ อาจแนะให้เปิดใช้ใหม่บนอุปกรณ์ใหม่หลังรีเซ็ตอุปกรณ์ที่เปิดใช้แล้ว</p>",
        faq3dq: "ต้องส่งข้อมูลอะไรเมื่อเปลี่ยนอุปกรณ์?",
        faq3da:
            "<p>เพื่อตรวจสอบเร็วขึ้น ส่งอีเมลซื้อ หมายเลขคำสั่งซื้อ คีย์ใบอนุญาต และเหตุผลเปลี่ยนอุปกรณ์</p>" +
            "<p>หากใช้ครบโควตาแพ็ก (Single 1 · Double 2 · Family 5) อาจต้องรีเซ็ตอุปกรณ์ที่เปิดใช้ก่อน — สำรองข้อมูลก่อนติดต่อ</p>",
        faq4q: 'Microsoft Edge บอกว่าไฟล์ «ไม่ได้รับการดาวน์โหลดบ่อย»',
        faq4a:
            '<p>เมื่อดาวน์โหลดตัวติดตั้งใน <strong>Microsoft Edge</strong> อาจเห็น <strong>«ไฟล์นี้ไม่ได้รับการดาวน์โหลดบ่อย»</strong></p>' +
            "<p>เป็นเรื่องปกติสำหรับแอปที่เพิ่งแจกจ่าย</p>" +
            '<ol class="guide-step-list">' +
            "<li>กด <kbd>Ctrl</kbd> + <kbd>J</kbd> เปิด <strong>ดาวน์โหลด</strong></li>" +
            "<li>ข้าง <code>Peekom-Setup.exe</code> ที่ถูกบล็อก คลิก <strong>จุดสามจุด (…)</strong> แล้วเลือก <strong>เก็บ</strong></li>" +
            "<li>ในกล่องเตือน คลิก <strong>เก็บต่อไป</strong> เพื่อรันตัวติดตั้ง</li>" +
            "</ol>" +
            '<p>หากข้อความซ้ำ ลองดาวน์โหลดใหม่ใน <strong>Google Chrome</strong></p>' +
            '<p>ดู <a href="#" onclick="openModal(); return false;">คู่มือติดตั้ง</a> สำหรับรายละเอียด</p>',
        faq7q: "หลังลบแอปเก่า 빼꼼 인덱스 เปิดเครื่องมีตัวอักษรแปลกหรือข้อผิดพลาด ทำอย่างไร?",
        faq7a:
            "<p>หากลบแอปเก่า (빼꼼 인덱스) ขณะ <strong>เปิดใช้เริ่มต้นเมื่อเข้าสู่ระบบ</strong> รายการเริ่มต้น ปักหมุดแถบงาน หรือโฟลเดอร์ที่เหลืออาจพยายามรันไฟล์ที่ลบแล้วและแสดง <strong>ตัวอักษรเพี้ยนหรือข้อผิดพลาด</strong></p>" +
            "<p>ทำตามขั้นตอนเหล่านี้ครั้งเดียวเพื่อทำความสะอาด</p>" +
            "<p><strong>1. ปิดแอปที่กำลังทำงานให้หมด</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> → ตัวจัดการงาน → จบกระบวนการ Peekom / 빼꼼</li>" +
            "<li>คลิกขวาไอคอนแถบงาน → <strong>เลิกปักหมุดจากแถบงาน</strong></li>" +
            "</ul>" +
            "<p><strong>2. ปิดรายการเริ่มต้น</strong> (ชื่ออาจต่างกัน)</p>" +
            "<p><strong>Windows 11</strong> — การตั้งค่า → แอป → เริ่มต้น</p>" +
            "<p><strong>Windows 10</strong> — ตัวจัดการงาน → แท็บเริ่มต้น</p>" +
            '<ul class="guide-step-list">' +
            "<li>ปิดหากมี: Peekom, Peekom Plus, 빼꼼 인덱스, com.peekom.app หรือชื่ออ่านไม่ออก</li>" +
            "<li>รายการอาจค้างในเริ่มต้นแม้ไม่มีในแอปที่ติดตั้งแล้ว</li>" +
            "</ul>" +
            "<p><strong>3. ลบโฟลเดอร์ที่เหลือ</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>ใน Explorer เปิด <code>%LocalAppData%\\Programs</code> → ลบโฟลเดอร์ <strong>빼꼼</strong></li>" +
            "<li>เปิด <code>%AppData%\\빼꼼</code> → ลบโฟลเดอร์ (มีโน้ต/การตั้งค่า ลบเมื่อไม่ใช้ต่อ)</li>" +
            "<li>เปิด <code>%LocalAppData%</code> → ลบโฟลเดอร์ที่มี <strong>빼꼼</strong> ในชื่อ</li>" +
            "</ol>" +
            "<p>หากลบไม่ได้ จบงานในขั้น 1 แล้วลองใหม่</p>" +
            "<p><strong>4. รีสตาร์ทและตรวจสอบ</strong> — รีสตาร์ท PC</p>" +
            "<p>ไม่มีหน้าต่างข้อผิดพลาดและไม่มี 빼꼼 ในแถบงาน แสดงว่าสำเร็จ</p>" +
            "<p>จากนั้นติดตั้ง <a href=\"/download/\">Peekom (ฟรี)</a> ใหม่</p>" +
            '<p class="privacy-doc__note">เนื้อหาแอปเก่า <strong>ไม่ย้ายอัตโนมัติ</strong> เพราะ Peekom เก็บข้อมูลคนละที่</p>' +
            '<p class="privacy-doc__note">คัดลอกสิ่งที่ต้องการก่อนลบแอปเก่า</p>',
        faq9a:
            "<p>ถอนการติดตั้งไม่ลบใบอนุญาต Lemon Squeezy ของคุณ</p>" +
            "<p>ทำตามขั้นตอนเพื่อกู้คืน Peekom Plus และฟีเจอร์เสียเงินทั้งหมด</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>1. ติดตั้ง Peekom ใหม่</strong> — ดาวน์โหลดเวอร์ชันฟรี (<code>Peekom-Setup.exe</code>) จาก <a href=\"/download/\">peekom.com</a> และติดตั้ง</li>" +
            "<li><strong>2. หาคีย์ใบอนุญาต</strong> — เปิดอีเมล Lemon Squeezy และคัดลอก <strong>[License Key]</strong> หากอีเมลหาย ลงชื่อ <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">คำสั่งซื้อ Lemon Squeezy</a> ด้วยอีเมลเดิม</li>" +
            "<li><strong>3. เปิดใช้ Plus อีกครั้ง</strong> — เปิดการตั้งค่า (ไอคอนเฟือง) วางคีย์ใน <strong>เปิดใช้ Plus</strong> และยืนยัน กู้คืน 10 ช่อง ธีมกำหนดเอง และฟีเจอร์ Plus อื่นๆ</li>" +
            "</ul>" +
            "<p><strong>ขีดจำกัดอุปกรณ์ (ตามแพ็ก)</strong> — ติดตั้งใหม่บน PC เดิมนับเป็นอุปกรณ์เดิม</p>" +
            "<p>Single 1 · Double 2 · Family 5 (เช่น Double — PC งาน + PC ส่วนตัว)</p>",
        faq12a:
            "<p>แม้ PC ออนไลน์ การเปิดใช้ Plus ต้องเชื่อม <strong>Lemon Squeezy (<code>api.lemonsqueezy.com</code>)</strong></p>" +
            "<p><strong>ไฟร์วอลล์ โปรแกรมป้องกันไวรัส VPN หรือพร็อกซี</strong>ของบริษัทอาจบล็อกเฉพาะเซิร์ฟเวอร์นี้</p>" +
            "<p><strong>ลองสิ่งนี้</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>เปิดใช้ครั้งหนึ่งบนเครือข่ายอื่น (Wi‑Fi บ้าน ฮอตสปอตมือถือ)</li>" +
            "<li>ขอ IT อนุญาต <strong><code>https://api.lemonsqueezy.com</code> ผ่าน HTTPS (443)</strong></li>" +
            "<li>ปิด VPN บริษัทหรือลอง VPN ที่อนุญาต</li>" +
            "</ul>" +
            "<p>หากเห็นข้อความ <strong>ขีดจำกัดการเปิดใช้ (ตามแพ็ก)</strong> <a href=\"/contact/\">ติดต่อเรา</a> พร้อมอีเมลซื้อ หมายเลขคำสั่งซื้อ และคีย์ — เราช่วยรีเซ็ตอุปกรณ์ได้</p>" +
            "<p>ดาวน์โหลดตัวติดตั้งใหม่ <strong>ไม่</strong>แก้ปัญหาหากเซิร์ฟเวอร์ยังถูกบล็อก</p>",
        winGuideBtn: 'Edge บอกว่าไฟล์ «ไม่ได้รับการดาวน์โหลดบ่อย» หรือไม่?',
        guideTitle: "คู่มือปลดบล็อกดาวน์โหลด Edge",
        step1: 'เมื่อดาวน์โหลดใน <b>Microsoft Edge</b> อาจเห็น <b>«ไฟล์นี้ไม่ได้รับการดาวน์โหลดบ่อย»</b> เป็นเรื่องปกติสำหรับแอปใหม่',
        step2: "กด <kbd>Ctrl</kbd> + <kbd>J</kbd> เปิด <b>ดาวน์โหลด</b> คลิก <b>จุดสามจุด (…)</b> ข้าง <code>Peekom-Setup.exe</code> ที่ถูกบล็อก แล้วเลือก <b>เก็บ</b>",
        step3: "คลิก <b>เก็บต่อไป</b> ในกล่องเตือน หากซ้ำ ลองดาวน์โหลดใหม่ใน <b>Google Chrome</b>",
        help1p: "ดาวน์โหลดและรัน Peekom Setup Edge อาจแสดงคำเตือน «ไม่ได้รับการดาวน์โหลดบ่อย»",
        guideInstallEdgeLi: '<li><strong>ดาวน์โหลดถูกบล็อกใน Edge</strong> — หากเห็น «ไฟล์นี้ไม่ได้รับการดาวน์โหลดบ่อย» เปิด <a href="#" onclick="openModal(); return false;">คู่มือติดตั้ง</a> ใช้ดาวน์โหลด (<kbd>Ctrl</kbd>+<kbd>J</kbd>) → <strong>เก็บ</strong> → <strong>เก็บต่อไป</strong> หรือลองใหม่ใน Chrome</li>',
        dlFreeFreewareNote: "Peekom (ฟรี) เป็น freeware Plus เป็นทางเลือก"
    },
    id: {
        heroPlusSingleCardTitle: "Peekom Plus - Single",
        heroPlusDoubleCardTitle: "Peekom Plus - Double",
        heroPlusFamilyCardTitle: "Peekom Plus - Family",
        heroPlusCardOsCompat: "Kompatibel Windows / Mac",
        heroPlusSingleCardMeta: "Sekali bayar · 1 perangkat · seumur hidup",
        heroPlusDoubleCardMeta: "Sekali bayar · 2 perangkat · seumur hidup",
        heroPlusFamilyCardMeta: "Sekali bayar · 5 perangkat · seumur hidup",
        comparePricing: '<span class="pricing-was">$5.99–$19.99</span> <span class="pricing-vat">(belum termasuk PPN)</span> · <span class="pricing-launch">Harga peluncuran</span> · sekali bayar · 1–5 perangkat (sesuai paket) · pembaruan minor · refund 30 hari (<a href="mailto:' + EMAIL + '">' + EMAIL + '</a>)',
        guidePlusP: "1) Pilih paket di Lemon Squeezy dan beli → 2) Terima kunci lisensi via email → 3) Buka Peekom → masukkan kunci di layar kunci atau Pengaturan → 4) Aktivasi Peekom Plus selesai. Refund 30 hari: <a href=\"mailto:" + EMAIL + "\">" + EMAIL + "</a>",
        dlPlusHint: 'Peekom Plus: Single <strong>$5.99</strong> · Double <strong>$9.99</strong> · Family <strong>$19.99</strong> (belum termasuk PPN) · <a href="' + BUY_D + '">Beli di Lemon Squeezy</a> → masukkan kunci di app',
        faq1a:
            "<p>Versi gratis mencakup 3 indeks, gerak grup, mode ICE, delay hover, pilihan monitor, toolbar format, dan sisip gambar.</p>" +
            "<p>Peekom Plus (Single $5.99 · Double $9.99 · Family $19.99) membuka 10 slot, tema kustom, font, opacity, panel kiri, ubah ukuran gambar, dan ekspor di app.</p>" +
            '<p>Lihat <a href="/features/#compare">tabel perbandingan</a>.</p>',
        faq3bq: "Bisakah satu kunci lisensi dipakai di lebih dari satu PC?",
        faq3ba:
            "<p>Meski OS berbeda — mis. PC Windows kantor dan MacBook rumah — Anda cukup <strong>beli Plus sekali</strong>.</p>" +
            "<p>File instal berbeda per OS, tapi masukkan <strong>kunci lisensi yang sama</strong> di Pengaturan tiap perangkat.</p>" +
            "<p>Jumlah perangkat simultan tergantung paket:</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Single</strong> — 1 perangkat</li>" +
            "<li><strong>Double</strong> — 2 perangkat (mis. PC Windows kantor + MacBook rumah)</li>" +
            "<li><strong>Family</strong> — 5 perangkat</li>" +
            "</ul>" +
            "<p>Contoh Double: instal Peekom di PC Windows kantor dan masukkan kunci Plus di Pengaturan → instal macOS di MacBook dan masukkan <strong>kunci yang sama</strong>.</p>",
        faq3cq: "Bisakah saya terus pakai Peekom jika ganti PC kantor atau pindah kerja?",
        faq3ca:
            "<p>Peekom Plus mengizinkan 1 perangkat (Single), 2 (Double), atau 5 (Family) sesuai paket.</p>" +
            "<p>Instal ulang di perangkat yang sama diperbolehkan.</p>" +
            "<p>Untuk pindah ke perangkat baru, hubungi kami — kami akan tinjau dan bantu.</p>" +
            "<p>Tergantung situasi, kami dapat pandu reaktivasi di perangkat baru setelah reset perangkat yang diaktivasi sebelumnya.</p>",
        faq3dq: "Informasi apa yang harus dikirim untuk ganti perangkat?",
        faq3da:
            "<p>Untuk tinjauan cepat, kirim email pembelian, nomor pesanan, kunci lisensi, dan alasan ganti perangkat.</p>" +
            "<p>Jika slot paket sudah penuh (Single 1 · Double 2 · Family 5), kami mungkin perlu reset perangkat aktif — cadangkan dulu sebelum hubungi.</p>",
        faq4q: 'Microsoft Edge mengatakan file «jarang diunduh».',
        faq4a:
            '<p>Saat mengunduh installer di <strong>Microsoft Edge</strong>, Anda mungkin melihat <strong>«File ini jarang diunduh»</strong> (atau serupa).</p>' +
            "<p>Umum untuk app yang baru didistribusikan.</p>" +
            '<ol class="guide-step-list">' +
            "<li>Tekan <kbd>Ctrl</kbd> + <kbd>J</kbd> untuk buka <strong>Unduhan</strong>.</li>" +
            "<li>Di samping <code>Peekom-Setup.exe</code> yang diblokir, klik <strong>tiga titik (…)</strong> dan pilih <strong>Simpan</strong>.</li>" +
            "<li>Di dialog peringatan, klik <strong>Tetap simpan</strong> untuk jalankan installer.</li>" +
            "</ol>" +
            '<p>Jika pesan berulang, unduh lagi di <strong>Google Chrome</strong>.</p>' +
            '<p>Lihat <a href="#" onclick="openModal(); return false;">panduan instalasi</a>.</p>',
        faq7q: "Setelah menghapus app lama 빼꼼 인덱스, teks aneh atau error muncul saat startup. Apa yang harus dilakukan?",
        faq7a:
            "<p>Jika app lama (빼꼼 인덱스) dihapus saat <strong>startup saat login masih aktif</strong>, entri startup, pin taskbar, atau folder tersisa dapat mencari file yang dihapus dan menampilkan <strong>teks rusak atau error</strong>.</p>" +
            "<p>Ikuti langkah ini sekali untuk membersihkan.</p>" +
            "<p><strong>1. Tutup sepenuhnya instance yang berjalan</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> → Pengelola Tugas → akhiri proses Peekom / 빼꼼</li>" +
            "<li>Klik kanan ikon taskbar → <strong>Lepas sematan dari taskbar</strong></li>" +
            "</ul>" +
            "<p><strong>2. Matikan entri startup</strong> (nama dapat bervariasi)</p>" +
            "<p><strong>Windows 11</strong> — Pengaturan → Aplikasi → Startup</p>" +
            "<p><strong>Windows 10</strong> — Pengelola Tugas → tab Startup</p>" +
            '<ul class="guide-step-list">' +
            "<li>Nonaktifkan jika ada: Peekom, Peekom Plus, 빼꼼 인덱스, com.peekom.app atau nama tidak terbaca</li>" +
            "<li>Entri dapat tetap di Startup meski tidak ada di app terinstal.</li>" +
            "</ul>" +
            "<p><strong>3. Hapus folder tersisa</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>Di Explorer buka <code>%LocalAppData%\\Programs</code> → hapus folder <strong>빼꼼</strong></li>" +
            "<li>Buka <code>%AppData%\\빼꼼</code> → hapus folder (catatan/pengaturan; hanya jika tidak dipakai lagi)</li>" +
            "<li>Buka <code>%LocalAppData%</code> → hapus folder dengan <strong>빼꼼</strong> di nama</li>" +
            "</ol>" +
            "<p>Jika gagal hapus, akhiri tugas langkah 1 lalu coba lagi.</p>" +
            "<p><strong>4. Restart dan verifikasi</strong> — Restart PC.</p>" +
            "<p>Tanpa jendela error dan tanpa 빼꼼 di taskbar berarti berhasil.</p>" +
            "<p>Lalu instal <a href=\"/download/\">Peekom (gratis)</a> baru.</p>" +
            '<p class="privacy-doc__note">Isi app lama <strong>tidak dimigrasi otomatis</strong> karena Peekom menyimpan data di lokasi berbeda.</p>' +
            '<p class="privacy-doc__note">Salin yang diperlukan sebelum hapus app lama.</p>',
        faq9a:
            "<p>Uninstall tidak menghapus lisensi Lemon Squeezy Anda.</p>" +
            "<p>Ikuti langkah ini untuk pulihkan Peekom Plus dan semua fitur berbayar.</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>1. Instal ulang Peekom</strong> — Unduh versi gratis (<code>Peekom-Setup.exe</code>) dari <a href=\"/download/\">peekom.com</a> dan instal.</li>" +
            "<li><strong>2. Temukan kunci lisensi</strong> — Buka email Lemon Squeezy dan salin <strong>[License Key]</strong>. Email hilang? Masuk <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Pesanan Lemon Squeezy</a> dengan email yang sama.</li>" +
            "<li><strong>3. Aktivasi ulang Plus</strong> — Buka Pengaturan (ikon gear), tempel kunci di <strong>Aktivasi Plus</strong> dan konfirmasi. Pulihkan 10 slot, tema kustom, dan fitur Plus lainnya.</li>" +
            "</ul>" +
            "<p><strong>Batas perangkat (sesuai paket)</strong> — Instal ulang di PC yang sama dihitung perangkat yang sama.</p>" +
            "<p>Single 1 · Double 2 · Family 5 (mis. Double — PC kantor + PC pribadi).</p>",
        faq12a:
            "<p>Meski PC online, aktivasi Plus harus mencapai <strong>Lemon Squeezy (<code>api.lemonsqueezy.com</code>)</strong>.</p>" +
            "<p><strong>Firewall, antivirus, VPN, atau proxy</strong> perusahaan mungkin hanya memblokir server itu.</p>" +
            "<p><strong>Coba ini</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>Aktivasi sekali di jaringan lain (Wi‑Fi rumah, hotspot ponsel)</li>" +
            "<li>Minta IT izinkan <strong><code>https://api.lemonsqueezy.com</code> via HTTPS (443)</strong></li>" +
            "<li>Matikan VPN perusahaan atau coba VPN yang diizinkan</li>" +
            "</ul>" +
            "<p>Jika muncul pesan <strong>batas aktivasi (sesuai paket)</strong>, <a href=\"/contact/\">hubungi kami</a> dengan email pembelian, nomor pesanan, dan kunci — kami bisa reset perangkat.</p>" +
            "<p>Unduh ulang installer <strong>tidak</strong> memperbaiki jika server masih diblokir.</p>",
        winGuideBtn: 'Apakah Edge mengatakan file «jarang diunduh»?',
        guideTitle: "Panduan buka blokir unduhan Edge",
        step1: 'Saat unduh di <b>Microsoft Edge</b>, Anda mungkin melihat <b>«File ini jarang diunduh»</b>. Umum untuk app baru.',
        step2: "Tekan <kbd>Ctrl</kbd> + <kbd>J</kbd> buka <b>Unduhan</b>, klik <b>tiga titik (…)</b> di samping <code>Peekom-Setup.exe</code> yang diblokir dan pilih <b>Simpan</b>.",
        step3: "Klik <b>Tetap simpan</b> di peringatan. Jika berulang, unduh lagi di <b>Google Chrome</b>.",
        help1p: "Unduh dan jalankan Peekom Setup. Edge mungkin menampilkan peringatan «jarang diunduh».",
        guideInstallEdgeLi: '<li><strong>Unduhan diblokir di Edge</strong> — Jika melihat «File ini jarang diunduh», buka <a href="#" onclick="openModal(); return false;">panduan instalasi</a> dan gunakan Unduhan (<kbd>Ctrl</kbd>+<kbd>J</kbd>) → <strong>Simpan</strong> → <strong>Tetap simpan</strong>. Bisa coba lagi di Chrome.</li>',
        dlFreeFreewareNote: "Peekom (gratis) adalah freeware; Plus opsional."
    },
    hi: {
        heroPlusSingleCardTitle: "Peekom Plus - Single",
        heroPlusDoubleCardTitle: "Peekom Plus - Double",
        heroPlusFamilyCardTitle: "Peekom Plus - Family",
        heroPlusCardOsCompat: "Windows / Mac संगत",
        heroPlusSingleCardMeta: "एक बार भुगतान · 1 डिवाइस · आजीवन",
        heroPlusDoubleCardMeta: "एक बार भुगतान · 2 डिवाइस · आजीवन",
        heroPlusFamilyCardMeta: "एक बार भुगतान · 5 डिवाइस · आजीवन",
        comparePricing: '<span class="pricing-was">$5.99–$19.99</span> <span class="pricing-vat">(VAT अलग)</span> · <span class="pricing-launch">लॉन्च मूल्य</span> · एक बार · 1–5 डिवाइस (प्लान अनुसार) · छोटे अपडेट · 30 दिन रिफंड (<a href="mailto:' + EMAIL + '">' + EMAIL + '</a>)',
        guidePlusP: "1) Lemon Squeezy पर प्लान चुनें और खरीदें → 2) ईमेल से लाइसेंस कुंजी प्राप्त करें → 3) Peekom खोलें → लॉक UI या सेटिंग्स में कुंजी दर्ज करें → 4) Peekom Plus सक्रियण पूर्ण। 30 दिन रिफंड: <a href=\"mailto:" + EMAIL + "\">" + EMAIL + "</a>",
        dlPlusHint: 'Peekom Plus: Single <strong>$5.99</strong> · Double <strong>$9.99</strong> · Family <strong>$19.99</strong> (VAT अलग) · <a href="' + BUY_D + '">Lemon Squeezy पर खरीदें</a> → ऐप में कुंजी दर्ज करें',
        faq1a:
            "<p>मुफ्त संस्करण में 3 इंडेक्स, समूह स्थानांतरण, ICE मोड, होवर विलंब, मॉनिटर चयन, फ़ॉर्मेट टूलबार और छवि सम्मिलन शामिल हैं।</p>" +
            "<p>Peekom Plus (Single $5.99 · Double $9.99 · Family $19.99) ऐप में 10 स्लॉट, कस्टम थीम, फ़ॉन्ट, अपारदर्शिता, बायाँ पैनल, छवि आकार बदलना और निर्यात अनलॉक करता है।</p>" +
            '<p><a href="/features/#compare">तुलना तालिका</a> देखें।</p>',
        faq3bq: "क्या एक लाइसेंस कुंजी कई PC पर उपयोग की जा सकती है?",
        faq3ba:
            "<p>भले ही OS अलग हों — जैसे ऑफिस Windows PC और घर का MacBook — Plus <strong>एक बार खरीद</strong> पर्याप्त है।</p>" +
            "<p>इंस्टॉलर OS के अनुसार अलग हैं, पर प्रत्येक डिवाइस की सेटिंग्स में <strong>वही लाइसेंस कुंजी</strong> दर्ज करें।</p>" +
            "<p>एक साथ कितने डिवाइस उपयोग होंगे, प्लान पर निर्भर:</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Single</strong> — 1 डिवाइस</li>" +
            "<li><strong>Double</strong> — 2 डिवाइस (उदा. ऑफिस Windows PC + घर MacBook)</li>" +
            "<li><strong>Family</strong> — 5 डिवाइस</li>" +
            "</ul>" +
            "<p>Double उदाहरण: ऑफिस Windows PC पर Peekom इंस्टॉल करें और सेटिंग्स में Plus कुंजी दर्ज करें → MacBook पर macOS संस्करण इंस्टॉल करें और <strong>वही कुंजी</strong> दर्ज करें।</p>",
        faq3cq: "क्या मैं ऑफिस PC बदलने या नौकरी बदलने पर भी Peekom उपयोग कर सकता/सकती हूँ?",
        faq3ca:
            "<p>Peekom Plus प्लान अनुसार 1 (Single), 2 (Double) या 5 (Family) डिवाइस पर उपयोग हो सकता है।</p>" +
            "<p>उसी डिवाइस पर पुनः इंस्टॉल अनुमत है।</p>" +
            "<p>नए डिवाइस पर जाने के लिए हमसे संपर्क करें — हम समीक्षा कर सहायता करेंगे।</p>" +
            "<p>स्थिति अनुसार, पहले सक्रिय डिवाइस रीसेट के बाद नए डिवाइस पर पुनः सक्रियण मार्गदर्शन दे सकते हैं।</p>",
        faq3dq: "डिवाइस बदलाव के लिए क्या जानकारी भेजें?",
        faq3da:
            "<p>तेज़ समीक्षा के लिए खरीद ईमेल, ऑर्डर नंबर, लाइसेंस कुंजी और बदलाव का कारण भेजें।</p>" +
            "<p>यदि प्लान की सभी सीटें भरी हैं (Single 1 · Double 2 · Family 5), पुनः सक्रियण से पहले सक्रिय डिवाइस रीसेट आवश्यक हो सकता है — संपर्क से पहले बैकअप लें।</p>",
        faq4q: 'Microsoft Edge कहता है फ़ाइल «आमतौर पर डाउनलोड नहीं की जाती»।',
        faq4a:
            '<p><strong>Microsoft Edge</strong> में इंस्टॉलर डाउनलोड करते समय <strong>«This file isn\'t commonly downloaded»</strong> (या हिंदी में समान संदेश) दिख सकता है।</p>' +
            "<p>नई ऐप्स में यह सामान्य है।</p>" +
            '<ol class="guide-step-list">' +
            "<li><kbd>Ctrl</kbd> + <kbd>J</kbd> दबाकर <strong>Downloads</strong> खोलें।</li>" +
            "<li>ब्लॉक <code>Peekom-Setup.exe</code> के बगल में <strong>तीन बिंदु (…)</strong> → <strong>Keep</strong> चुनें।</li>" +
            "<li>चेतावनी में <strong>Keep anyway</strong> पर क्लिक कर इंस्टॉलर चलाएँ।</li>" +
            "</ol>" +
            '<p>संदेश बार-बार आए तो <strong>Google Chrome</strong> में पुनः डाउनलोड करें।</p>' +
            '<p><a href="#" onclick="openModal(); return false;">इंस्टॉल गाइड</a> देखें।</p>',
        faq7q: "पुरानी ऐप 빼꼼 인덱스 हटाने के बाद स्टार्टअप पर अजीब अक्षर या त्रुटि दिखती है। क्या करें?",
        faq7a:
            "<p>यदि पुरानी ऐप (빼꼼 인덱스) <strong>लॉगिन पर ऑटो-स्टार्ट चालू</strong> रहते हटाई गई, स्टार्टअप प्रविष्टियाँ, टास्कबार पिन या बचे फ़ोल्डर हटाई फ़ाइलें ढूँढकर <strong>गड़बड़ टेक्स्ट या त्रुटि</strong> दिखा सकते हैं।</p>" +
            "<p>सफाई के लिए एक बार ये चरण करें।</p>" +
            "<p><strong>1. चल रहे इंस्टेंस पूरी तरह बंद करें</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> → Task Manager → Peekom / 빼꼼 प्रक्रियाएँ समाप्त करें</li>" +
            "<li>टास्कबार आइकन पर राइट-क्लिक → <strong>टास्कबार से अनपिन</strong></li>" +
            "</ul>" +
            "<p><strong>2. स्टार्टअप बंद करें</strong> (नाम भिन्न हो सकते हैं)</p>" +
            "<p><strong>Windows 11</strong> — Settings → Apps → Startup</p>" +
            "<p><strong>Windows 10</strong> — Task Manager → Startup टैब</p>" +
            '<ul class="guide-step-list">' +
            "<li>यदि मौजूद: Peekom, Peekom Plus, 빼꼼 인덱스, com.peekom.app या अपठनीय नाम — अक्षम करें</li>" +
            "<li>Installed apps में न होने पर भी Startup में प्रविष्टि रह सकती है।</li>" +
            "</ul>" +
            "<p><strong>3. बचे फ़ोल्डर हटाएँ</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>Explorer में <code>%LocalAppData%\\Programs</code> खोलें → <strong>빼꼼</strong> फ़ोल्डर हटाएँ</li>" +
            "<li><code>%AppData%\\빼꼼</code> → पूरा फ़ोल्डर हटाएँ (नोट/सेटिंग्स; केवल जब दोबारा न उपयोग करें)</li>" +
            "<li><code>%LocalAppData%</code> → नाम में <strong>빼꼼</strong> वाले फ़ोल्डर हटाएँ</li>" +
            "</ol>" +
            "<p>हटाना असफल हो तो चरण 1 में कार्य समाप्त कर पुनः प्रयास करें।</p>" +
            "<p><strong>4. रीस्टार्ट और जाँच</strong> — PC रीबूट करें।</p>" +
            "<p>कोई त्रुटि विंडो न हो और टास्कबार में 빼꼼 न हो तो सफल।</p>" +
            "<p>फिर <a href=\"/download/\">Peekom (मुफ्त)</a> नया इंस्टॉल करें।</p>" +
            '<p class="privacy-doc__note">पुरानी ऐप की सामग्री <strong>स्वतः स्थानांतरित नहीं</strong> होती क्योंकि Peekom डेटा अलग स्थान पर रखता है।</p>' +
            '<p class="privacy-doc__note">हटाने से पहले आवश्यक सामग्री कॉपी करें।</p>',
        faq9a:
            "<p>ऐप अनइंस्टॉल करने से Lemon Squeezy लाइसेंस नहीं हटता।</p>" +
            "<p>Peekom Plus और सभी paid फीचर पुनर्स्थापित करने के लिए:</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>1. Peekom पुनः इंस्टॉल</strong> — <a href=\"/download/\">peekom.com</a> से मुफ्त (<code>Peekom-Setup.exe</code>) डाउनलोड कर इंस्टॉल करें।</li>" +
            "<li><strong>2. लाइसेंस कुंजी खोजें</strong> — Lemon Squeezy ईमेल से <strong>[License Key]</strong> कॉपी करें। ईमेल खो गया? <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Lemon Squeezy My Orders</a> में उसी ईमेल से लॉगिन करें।</li>" +
            "<li><strong>3. Plus पुनः सक्रिय</strong> — Settings (गियर) खोलें, <strong>Plus activation</strong> में कुंजी पेस्ट कर पुष्टि करें। 10 स्लॉट, कस्टम थीम आदि पुनर्स्थापित।</li>" +
            "</ul>" +
            "<p><strong>डिवाइस सीमा (प्लान अनुसार)</strong> — उसी PC पर पुनः इंस्टॉल = वही डिवाइस।</p>" +
            "<p>Single 1 · Double 2 · Family 5 (उदा. Double — ऑफिस PC + व्यक्तिगत PC)।</p>",
        faq12a:
            "<p>PC ऑनलाइन होने पर भी Plus सक्रियण को <strong>Lemon Squeezy (<code>api.lemonsqueezy.com</code>)</strong> तक पहुँच चाहिए।</p>" +
            "<p>कॉर्पोरेट <strong>फ़ायरवॉल, सुरक्षा सॉफ़्टवेयर, VPN या proxy</strong> केवल इस सर्वर को ब्लॉक कर सकते हैं।</p>" +
            "<p><strong>यह आज़माएँ</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>दूसरे नेटवर्क (घर Wi‑Fi, मोबाइल hotspot) पर एक बार सक्रिय करें</li>" +
            "<li>IT से <strong><code>https://api.lemonsqueezy.com</code> HTTPS (443)</strong> अनुमति माँगें</li>" +
            "<li>कॉर्पोरेट VPN बंद करें या अनुमत VPN आज़माएँ</li>" +
            "</ul>" +
            "<p><strong>सक्रियण सीमा (प्लान अनुसार)</strong> संदेश पर <a href=\"/contact/\">संपर्क</a> करें — खरीद ईमेल, ऑर्डर नंबर, कुंजी के साथ; डिवाइस रीसेट में सहायता।</p>" +
            "<p>इंस्टॉलर पुनः डाउनलोड <strong>नहीं</strong> सुधारेगा यदि सर्वर अभी भी ब्लॉक है।</p>",
        winGuideBtn: 'क्या Edge कहता है फ़ाइल «आमतौर पर डाउनलोड नहीं की जाती»?',
        guideTitle: "Edge डाउनलोड अनब्लॉक गाइड",
        step1: '<b>Microsoft Edge</b> में डाउनलोड पर <b>«This file isn\'t commonly downloaded»</b> दिख सकता है। नई ऐप्स में सामान्य।',
        step2: "<kbd>Ctrl</kbd> + <kbd>J</kbd> से <b>Downloads</b> खोलें, ब्लॉक <code>Peekom-Setup.exe</code> के <b>तीन बिंदु (…)</b> → <b>Keep</b>।",
        step3: "चेतावनी में <b>Keep anyway</b>। दोहराए तो <b>Google Chrome</b> में पुनः डाउनलोड।",
        help1p: "Peekom Setup डाउनलोड और चलाएँ। Edge में «आमतौर पर डाउनलोड नहीं» जैसा चेतावनी दिख सकता है।",
        guideInstallEdgeLi: '<li><strong>Edge पर डाउनलोड ब्लॉक</strong> — «This file isn\'t commonly downloaded» दिखे तो <a href="#" onclick="openModal(); return false;">इंस्टॉल गाइड</a> खोलें: Downloads (<kbd>Ctrl</kbd>+<kbd>J</kbd>) → <strong>Keep</strong> → <strong>Keep anyway</strong>। Chrome में भी पुनः प्रयास करें।</li>',
        dlFreeFreewareNote: "Peekom (मुफ्त) freeware है; Plus वैकल्पिक है।"
    },
    ar: {
        heroPlusSingleCardTitle: "Peekom Plus - Single",
        heroPlusDoubleCardTitle: "Peekom Plus - Double",
        heroPlusFamilyCardTitle: "Peekom Plus - Family",
        heroPlusCardOsCompat: "متوافق مع Windows / Mac",
        heroPlusSingleCardMeta: "دفعة واحدة · جهاز واحد · مدى الحياة",
        heroPlusDoubleCardMeta: "دفعة واحدة · جهازان · مدى الحياة",
        heroPlusFamilyCardMeta: "دفعة واحدة · 5 أجهزة · مدى الحياة",
        comparePricing: '<span class="pricing-was">$5.99–$19.99</span> <span class="pricing-vat">(بدون ضريبة القيمة المضافة)</span> · <span class="pricing-launch">سعر الإطلاق</span> · دفعة واحدة · 1–5 أجهزة (حسب الخطة) · تحديثات ثانوية · استرداد 30 يومًا (<a href="mailto:' + EMAIL + '">' + EMAIL + '</a>)',
        guidePlusP: "1) اختر خطة على Lemon Squeezy واشترِ → 2) استلم مفتاح الترخيص بالبريد → 3) افتح Peekom → أدخل المفتاح في شاشة القفل أو الإعدادات → 4) اكتمل تفعيل Peekom Plus. استرداد 30 يومًا: <a href=\"mailto:" + EMAIL + "\">" + EMAIL + "</a>",
        dlPlusHint: 'Peekom Plus: Single <strong>$5.99</strong> · Double <strong>$9.99</strong> · Family <strong>$19.99</strong> (بدون ضريبة القيمة المضافة) · <a href="' + BUY_D + '">الشراء على Lemon Squeezy</a> → أدخل المفتاح في التطبيق',
        faq1a:
            "<p>النسخة المجانية تشمل 3 فهارس، نقل المجموعة، وضع ICE، تأخير التمرير، اختيار الشاشة، شريط التنسيق وإدراج الصور.</p>" +
            "<p>Peekom Plus (Single $5.99 · Double $9.99 · Family $19.99) يفتح 10 خانات، سمة مخصصة، خطوط، شفافية، اللوحة اليسرى، تغيير حجم الصور والتصدير داخل التطبيق.</p>" +
            '<p>راجع <a href="/features/#compare">جدول المقارنة</a>.</p>',
        faq3bq: "هل يمكنني استخدام مفتاح ترخيص واحد على أكثر من جهاز PC؟",
        faq3ba:
            "<p>حتى مع أنظمة مختلفة — مثل PC Windows للعمل وMacBook في المنزل — تحتاج فقط <strong>شراء Plus مرة واحدة</strong>.</p>" +
            "<p>ملفات التثبيت تختلف حسب النظام، لكن أدخل <strong>نفس مفتاح الترخيص</strong> في الإعدادات على كل جهاز.</p>" +
            "<p>عدد الأجهزة المتزامنة يعتمد على خطتك:</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Single</strong> — جهاز واحد</li>" +
            "<li><strong>Double</strong> — جهازان (مثل PC Windows للعمل + MacBook المنزل)</li>" +
            "<li><strong>Family</strong> — 5 أجهزة</li>" +
            "</ul>" +
            "<p>مثال Double: ثبّت Peekom على PC Windows للعمل وأدخل مفتاح Plus في الإعدادات → ثبّت macOS على MacBook وأدخل <strong>نفس المفتاح</strong>.</p>",
        faq3cq: "هل يمكنني الاستمرار في استخدام Peekom عند تغيير PC العمل أو الوظيفة؟",
        faq3ca:
            "<p>Peekom Plus يسمح بجهاز واحد (Single) أو 2 (Double) أو 5 (Family) حسب الخطة.</p>" +
            "<p>إعادة التثبيت على نفس الجهاز مسموحة.</p>" +
            "<p>للانتقال إلى جهاز جديد، تواصل معنا وسنراجع ونساعدك.</p>" +
            "<p>حسب الحالة، قد نرشدك لإعادة التفعيل على الجهاز الجديد بعد إعادة تعيين الأجهزة المفعّلة سابقًا.</p>",
        faq3dq: "ما المعلومات التي يجب إرسالها لتغيير الجهاز؟",
        faq3da:
            "<p>لمراجعة أسرع، أرسل بريد الشراء ورقم الطلب ومفتاح الترخيص وسبب تغيير الجهاز.</p>" +
            "<p>إذا استخدمت جميع خانات خطتك (Single 1 · Double 2 · Family 5)، قد نحتاج إعادة تعيين الأجهزة المفعّلة — احفظ نسخة احتياطية قبل التواصل.</p>",
        faq4q: 'Microsoft Edge يقول إن الملف «لا يُحمَّل بشكل شائع».',
        faq4a:
            '<p>عند تنزيل المثبّت في <strong>Microsoft Edge</strong>، قد ترى <strong>«This file isn\'t commonly downloaded»</strong> (أو رسالة مشابهة).</p>' +
            "<p>هذا شائع للتطبيقات الموزّعة حديثًا.</p>" +
            '<ol class="guide-step-list">' +
            "<li>اضغط <kbd>Ctrl</kbd> + <kbd>J</kbd> لفتح <strong>Downloads</strong>.</li>" +
            "<li>بجانب <code>Peekom-Setup.exe</code> المحظور، انقر <strong>النقاط الثلاث (…)</strong> واختر <strong>Keep</strong>.</li>" +
            "<li>في التحذير، انقر <strong>Keep anyway</strong> لتشغيل المثبّت.</li>" +
            "</ol>" +
            '<p>إذا تكررت الرسالة، حاول التنزيل مجددًا في <strong>Google Chrome</strong>.</p>' +
            '<p>راجع <a href="#" onclick="openModal(); return false;">دليل التثبيت</a>.</p>',
        faq7q: "بعد إزالة التطبيق القديم 빼꼼 인덱스، تظهر رموز غريبة أو أخطاء عند التشغيل. ماذا أفعل؟",
        faq7a:
            "<p>إذا أزلت التطبيق القديم (빼꼼 인덱스) بينما <strong>التشغيل التلقائي عند تسجيل الدخول كان مفعّلًا</strong>، قد تحاول إدخالات بدء التشغيل أو تثبيت شريط المهام أو مجلدات متبقية تشغيل ملفات محذوفة وتعرض <strong>نصًا مشوّهًا أو أخطاء</strong>.</p>" +
            "<p>اتبع هذه الخطوات مرة للتنظيف.</p>" +
            "<p><strong>1. أغلق أي نسخة قيد التشغيل بالكامل</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> → Task Manager → أنهِ عمليات Peekom / 빼꼼</li>" +
            "<li>انقر يمينًا على أيقونة شريط المهام → <strong>Unpin from taskbar</strong></li>" +
            "</ul>" +
            "<p><strong>2. عطّل إدخالات بدء التشغيل</strong> (الأسماء قد تختلف)</p>" +
            "<p><strong>Windows 11</strong> — Settings → Apps → Startup</p>" +
            "<p><strong>Windows 10</strong> — Task Manager → Startup tab</p>" +
            '<ul class="guide-step-list">' +
            "<li>عطّل إن وُجد: Peekom, Peekom Plus, 빼꼼 인덱스, com.peekom.app أو أسماء مشوّهة</li>" +
            "<li>قد يبقى إدخال في Startup رغم غيابه من Installed apps.</li>" +
            "</ul>" +
            "<p><strong>3. احذف المجلدات المتبقية</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>في Explorer افتح <code>%LocalAppData%\\Programs</code> → احذف مجلد <strong>빼꼼</strong></li>" +
            "<li>افتح <code>%AppData%\\빼꼼</code> → احذف المجلد (ملاحظات/إعدادات؛ فقط إن لن تستخدمه مجددًا)</li>" +
            "<li>افتح <code>%LocalAppData%</code> → احذف مجلدات تحتوي <strong>빼꼼</strong> في الاسم</li>" +
            "</ol>" +
            "<p>إن فشل الحذف، أنهِ المهام في الخطوة 1 وحاول مجددًا.</p>" +
            "<p><strong>4. أعد التشغيل وتحقق</strong> — أعد تشغيل PC.</p>" +
            "<p>بدون نوافذ خطأ وبدون 빼꼼 في شريط المهام = نجاح.</p>" +
            "<p>ثم ثبّت <a href=\"/download/\">Peekom (مجاني)</a> من جديد.</p>" +
            '<p class="privacy-doc__note">محتوى التطبيق القديم <strong>لا يُنقل تلقائيًا</strong> لأن Peekom يخزّن البيانات في مكان مختلف.</p>' +
            '<p class="privacy-doc__note">انسخ ما تحتاجه قبل إزالة التطبيق القديم.</p>',
        faq9a:
            "<p>إلغاء التثبيت لا يزيل ترخيص Lemon Squeezy.</p>" +
            "<p>اتبع هذه الخطوات لاستعادة Peekom Plus وجميع الميزات المدفوعة.</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>1. أعد تثبيت Peekom</strong> — حمّل النسخة المجانية (<code>Peekom-Setup.exe</code>) من <a href=\"/download/\">peekom.com</a> وثبّتها.</li>" +
            "<li><strong>2. اعثر على مفتاح الترخيص</strong> — افتح بريد Lemon Squeezy وانسخ <strong>[License Key]</strong>. فقدت البريد؟ سجّل الدخول إلى <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Lemon Squeezy My Orders</a> بنفس البريد.</li>" +
            "<li><strong>3. أعد تفعيل Plus</strong> — افتح Settings (أيقونة الترس)، الصق المفتاح تحت <strong>Plus activation</strong> وأكد. تُستعاد 10 خانات والسمات المخصصة وميزات Plus.</li>" +
            "</ul>" +
            "<p><strong>حد الأجهزة (حسب الخطة)</strong> — إعادة التثبيت على نفس PC = نفس الجهاز.</p>" +
            "<p>Single 1 · Double 2 · Family 5 (مثل Double — PC العمل + PC الشخصي).</p>",
        faq12a:
            "<p>حتى مع اتصال PC بالإنترنت، يجب أن يصل تفعيل Plus إلى <strong>Lemon Squeezy (<code>api.lemonsqueezy.com</code>)</strong>.</p>" +
            "<p>قد تحجب <strong>جدران الحماية أو برامج الأمان أو VPN أو proxy</strong> الشركات هذا الخادم فقط.</p>" +
            "<p><strong>جرّب هذا</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>فعّل مرة على شبكة أخرى (Wi‑Fi المنزل، hotspot الهاتف)</li>" +
            "<li>اطلب من IT السماح بـ <strong><code>https://api.lemonsqueezy.com</code> عبر HTTPS (443)</strong></li>" +
            "<li>أوقف VPN الشركة أو جرّب VPN مسموحًا</li>" +
            "</ul>" +
            "<p>عند رسالة <strong>حد التفعيل (حسب الخطة)</strong>، <a href=\"/contact/\">تواصل</a> معنا ببريد الشراء ورقم الطلب والمفتاح — يمكننا إعادة تعيين الأجهزة.</p>" +
            "<p>إعادة تنزيل المثبّت <strong>لن</strong> تحل المشكلة إذا بقي الخادم محجوبًا.</p>",
        winGuideBtn: 'هل يقول Edge إن الملف «لا يُحمَّل بشكل شائع»؟',
        guideTitle: "دليل إلغاء حظر التنزيل في Edge",
        step1: 'عند التنزيل في <b>Microsoft Edge</b> قد ترى <b>«This file isn\'t commonly downloaded»</b>. شائع للتطبيقات الجديدة.',
        step2: "اضغط <kbd>Ctrl</kbd> + <kbd>J</kbd> لفتح <b>Downloads</b>، انقر <b>النقاط الثلاث (…)</b> بجانب <code>Peekom-Setup.exe</code> المحظور واختر <b>Keep</b>.",
        step3: "انقر <b>Keep anyway</b> في التحذير. إن تكرر، حمّل مجددًا في <b>Google Chrome</b>.",
        help1p: "حمّل وشغّل Peekom Setup. قد يظهر في Edge تحذير «لا يُحمَّل بشكل شائع».",
        guideInstallEdgeLi: '<li><strong>تنزيل محظور في Edge</strong> — إذا رأيت «This file isn\'t commonly downloaded»، افتح <a href="#" onclick="openModal(); return false;">دليل التثبيت</a> واستخدم Downloads (<kbd>Ctrl</kbd>+<kbd>J</kbd>) → <strong>Keep</strong> → <strong>Keep anyway</strong>. يمكنك أيضًا المحاولة في Chrome.</li>',
        dlFreeFreewareNote: "Peekom (مجاني) freeware؛ Plus اختياري."
    }
};

window.PeekomI18nLocales = window.PeekomI18nLocales || {};
Object.keys(PATCH).forEach(function (lang) {
    var base = window.PeekomI18nLocales[lang] || {};
    window.PeekomI18nLocales[lang] = Object.assign({}, base, PATCH[lang]);
    if (base.guideStartBody && PATCH[lang].guideInstallEdgeLi) {
        window.PeekomI18nLocales[lang].guideStartBody = base.guideStartBody.replace(
            /<li><strong>[^<]*(SmartScreen|Smart Screen|smartscreen)[^<]*<\/strong>[\s\S]*?<\/li>/i,
            PATCH[lang].guideInstallEdgeLi
        );
    }
    delete window.PeekomI18nLocales[lang].guideInstallEdgeLi;
});
})();

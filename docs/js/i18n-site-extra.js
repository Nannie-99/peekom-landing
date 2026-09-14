(function () {
"use strict";
var BUY = "https://peekom.lemonsqueezy.com/checkout/buy/97457035-6963-4cc0-9348-63dbb738e6a8";
var ORDER = "https://app.lemonsqueezy.com/my-orders";
var EXTRA = {
    ja: {
        settingsGuideTitle: "設定はどこから開きますか？",
        settingsGuideText: "タスクバー右端の <strong>∧</strong> をクリックして Peekom アイコンを表示し、ダブルクリックするか右クリック →「設定」を選びます。",
        settingsGuideThumbAria: "設定を開く場所の拡大表示",
        dlFreeFreewareNote: "無料版はフリーウェアです。Peekom Plus は任意です。",
        faq7q: "旧版アプリ「빼꼼 인덱스」を削除した後、起動時に文字化けやエラーが出ます。どうすればいいですか？",
        faq7a:
            "<p>旧版（빼꼼 인덱스）を削除したとき、<strong>ログイン時の自動起動がオン</strong>のままだと、Windows のスタートアップに古い項目が残り、削除済みファイルを探して <strong>文字化けやエラー</strong>が表示されることがあります。</p>" +
            "<p><strong>Windows 11</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>設定 → アプリ → スタートアップ（またはインストール済みアプリ → スタートアップ）</li>" +
            "<li>一覧で「빼꼼 인덱스」または類似の名前を探す</li>" +
            "<li><strong>オフ</strong>にする</li>" +
            "</ol>" +
            "<p><strong>Windows 10</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> でタスクマネージャーを開く</li>" +
            "<li><strong>スタートアップ</strong>タブを開く</li>" +
            "<li>「빼꼼 인덱스」を選択 → <strong>無効にする</strong></li>" +
            "</ol>" +
            "<p>項目をオフにしてから <strong>再起動</strong>してください。問題が止まれば原因はスタートアップ登録です。その後 <a href=\"/download/\">Peekom（無料）</a>を新規インストールしてご利用ください。</p>" +
            '<p class="privacy-doc__note">旧版のメモ内容は Peekom と<strong>保存場所が異なるため自動移行されません。</strong>必要な内容は事前にコピーしてください。</p>',
        faq10q: "Peekom の設定はどこから開きますか？",
        faq10a:
            "タスクバー（トレイ）の Peekom アイコンを <strong>右クリック → 設定</strong>で開けます。<strong>ダブルクリック</strong>、またはデスクトップの <strong>Peekom ショートカットをダブルクリック</strong>でも開けます（アプリが終了している場合はメモと一緒に開きます）。詳しくは <a href=\"/help/\">ガイド</a>をご覧ください。",
        faq11q: "ライセンスキーはどう入力しますか？入力欄の例とメールのキーが違います。",
        faq11a:
            "<p>Peekom Plus では Lemon Squeezy の購入確認メールにある <strong>ライセンスキー全体</strong>を使います。</p>" +
            '<ol class="guide-step-list">' +
            "<li><a href=\"" + BUY + "\" target=\"_blank\" rel=\"noopener\">Peekom Plus を購入</a>後、メールの <strong>[License Key]</strong> をコピー（<strong>ハイフンを含む全体</strong>）</li>" +
            "<li>Peekom を起動 → <strong>設定</strong>または <strong>Plus ロック画面</strong> → キーを貼り付け → <strong>認証</strong></li>" +
            "<li>インターネット接続がある状態で実行（社内ネットワークは下の FAQ を参照）</li>" +
            "</ol>" +
            "<p>入力欄の <code>XXXX-XXXX-XXXX-XXXX</code> は <strong>形式の例</strong>です。<strong>16 文字だけ</strong>入れず、メールの <strong>キー全体</strong>をそのまま入力してください。</p>" +
            "<p>メールを紛失した場合は <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Lemon Squeezy の注文履歴</a>で同じメールアドレスから再確認できます。</p>",
        faq12q: "インターネットはつながるのに認証できません。「Lemon Squeezy サーバーに接続できません」と出ます。",
        faq12a:
            "<p>PC がオンラインでも Plus 認証は <strong>Lemon Squeezy サーバー（<code>api.lemonsqueezy.com</code>）</strong>への別途接続が必要です。社内の <strong>ファイアウォール・セキュリティソフト・VPN・プロキシ</strong>がこのアドレスだけをブロックしていると、このメッセージが出ることがあります。</p>" +
            "<p><strong>お試しください</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>自宅 Wi‑Fi・スマホのテザリング</strong>など別ネットワークで一度有効化</li>" +
            "<li>IT に <strong><code>https://api.lemonsqueezy.com</code> の HTTPS（443）許可</strong>を依頼</li>" +
            "<li>社内 VPN 利用中ならオフにするか、許可された VPN で再試行</li>" +
            "</ul>" +
            "<p><strong>有効化上限（プラン別: Single 1 台 · Double 2 台 · Family 5 台）</strong>のメッセージが出た場合は <a href=\"/contact/\">お問い合わせ</a>で購入メール・注文番号・ライセンスキーをお送りください。端末のリセットをご案内できます。</p>" +
            "<p>インストーラーを再ダウンロードしても、<strong>サーバー接続がブロックされている</strong>限り同じエラーになります。</p>" +
            "<p><strong>返金との関係</strong> — このエラーはお使いの<strong>ネットワーク環境の制限</strong>によるもので、製品の不具合ではありません。ライセンスを<strong>すでに有効化済み</strong>の場合、この理由による返金は対象外です。まだ <strong>Inactive</strong>（有効化された端末 0 台）で、ご購入から 30 日以内であれば、注文番号と状況を添えてお問い合わせいただければ、上記の返金ポリシーに沿って個別に検討いたします。</p>",
        faq13q: "Peekom はフリーウェアですか？会社 PC にインストールできますか？",
        faq13a:
            "<p><strong>Peekom 無料版</strong>は別途ライセンス料なしで使える <strong>フリーウェア</strong>です。有料の <strong>Peekom Plus</strong>は任意で、購入しなくても無料版だけで使い続けられます。</p>" +
            "<p>（※ Microsoft Windows の<strong>公式認証プログラム</strong>を指すものではありません。）</p>" +
            "<p>会社 PC ではセキュリティ方針によりインストール・保存先が制限されることがあります。Peekom はプログラムフォルダ以外に <code>%AppData%\\Roaming\\Peekom</code> にメモと設定を保存するため、IT に以下の許可も依頼してください。</p>" +
            '<ul class="guide-step-list">' +
            "<li>公式インストーラー: <a href=\"/download/\">peekom.com/download</a> の <code>Peekom-Setup.exe</code>（GitHub Releases で配布）</li>" +
            "<li>データフォルダ: <code>C:\\Users\\(ユーザー名)\\AppData\\Roaming\\Peekom</code></li>" +
            "<li>Plus 認証時: <code>https://api.lemonsqueezy.com</code></li>" +
            "</ul>" +
            "<p>無料版はインターネットがなくても使えますが、<strong>Plus の初回認証</strong>にはインターネット接続と <code>https://api.lemonsqueezy.com</code> への接続が必要です。</p>" +
            "<p>github.com と <code>api.lemonsqueezy.com</code> の両方がブロックされている環境では、<strong>Plus をご購入になる前に</strong> IT 担当者に許可の可否をご確認ください。有効化した後に会社ネットワークの制限のみを理由とする返金は対象外です。</p>",
        faq14q: "メモが消えました。復元できますか？",
        faq14a:
            "<p>Peekom のメモは <strong>お使いの PC にのみ保存</strong>されます。クラウドサーバーはなく、こちらから遠隔で閲覧・復元することはできません。</p>" +
            "<p><strong>自動バックアップはありません。</strong> Peekom Plus では <strong>書き出し</strong>（.txt / .md / .json）や <strong>JSON バックアップ・復元</strong>で別途保存できますが、<strong>事前にバックアップしていない</strong>場合、再インストール・アカウント変更・AppData 削除後の復元は困難です。</p>" +
            "<p>次をご確認ください。</p>" +
            '<ul class="guide-step-list">' +
            "<li>Peekom を <strong>アンインストールして再インストール</strong>したか</li>" +
            "<li><strong>別の Windows ユーザー</strong>でログインしているか</li>" +
            "<li>社内セキュリティソフトが <strong>AppData</strong> を削除したか</li>" +
            "</ul>" +
            "<p>今後は定期的に Plus の <strong>JSON バックアップ</strong>や <strong>書き出し</strong>での保存をおすすめします。</p>",
        faq15q: "Plus を購入したのにライセンスキーのメールが届きません。",
        faq15a:
            "<p>お支払い後、Lemon Squeezy から <strong>購入確認メール</strong>が送られます。次をご確認ください。</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>迷惑メール・プロモーション・ソーシャル</strong>フォルダ</li>" +
            "<li>送信者 <strong>Lemon Squeezy</strong>、または件名に <strong>Peekom / License</strong> が含まれるメール</li>" +
            "<li>決済時に入力した <strong>メールアドレス</strong>が正しいか（会社・個人の取り違え）</li>" +
            "</ul>" +
            "<p><a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Lemon Squeezy の注文履歴</a>で決済に使ったメールでログインすると、注文とライセンスキーを再確認できます。</p>" +
            "<p>それでも見つからない場合は <a href=\"/contact/\">お問い合わせ</a>で <strong>購入メール・決済日時・領収書</strong>をお送りください。確認のうえご案内します。</p>"
    },
    "zh-CN": {
        settingsGuideTitle: "如何打开设置？",
        settingsGuideText: "点击任务栏右端的 <strong>∧</strong> 找到 Peekom 图标，然后双击图标，或右键 →「设置」。",
        settingsGuideThumbAria: "放大查看打开设置的位置",
        dlFreeFreewareNote: "免费版为免费软件（Freeware），Peekom Plus 为可选升级。",
        faq7q: "卸载旧版应用「빼꼼 인덱스」后，开机时出现乱码或错误，怎么办？",
        faq7a:
            "<p>若删除旧版（빼꼼 인덱스）时<strong>开机自启动仍开启</strong>，Windows 启动项可能仍保留旧条目，开机时会尝试运行已删除文件，从而出现<strong>乱码或错误窗口</strong>。</p>" +
            "<p><strong>Windows 11</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>设置 → 应用 → 启动（或已安装的应用 → 启动）</li>" +
            "<li>在列表中找到「빼꼼 인덱스」或类似名称</li>" +
            "<li>将其设为<strong>关</strong></li>" +
            "</ol>" +
            "<p><strong>Windows 10</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>按 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> 打开任务管理器</li>" +
            "<li>打开<strong>启动</strong>选项卡</li>" +
            "<li>选择「빼꼼 인덱스」→ <strong>禁用</strong></li>" +
            "</ol>" +
            "<p>关闭该条目后<strong>重启</strong>电脑。若问题消失，原因即为启动项残留。之后可重新安装 <a href=\"/download/\">Peekom（免费版）</a>使用。</p>" +
            '<p class="privacy-doc__note">旧版备忘录与 Peekom <strong>存储位置不同，不会自动迁移。</strong>请先复制需要保留的内容。</p>',
        faq10q: "在哪里打开 Peekom 设置？",
        faq10a:
            "在任务栏（托盘）的 Peekom 图标上<strong>右键 → 设置</strong>即可打开。也可<strong>双击</strong>托盘图标，或<strong>双击</strong>桌面 Peekom 快捷方式（若应用已关闭，会连同备忘录一起打开）。详见<a href=\"/help/\">使用指南</a>。",
        faq11q: "如何输入许可证密钥？输入框示例与邮件中的密钥不一致。",
        faq11a:
            "<p>Peekom Plus 请使用 Lemon Squeezy 购买确认邮件中的<strong>完整许可证密钥</strong>。</p>" +
            '<ol class="guide-step-list">' +
            "<li><a href=\"" + BUY + "\" target=\"_blank\" rel=\"noopener\">购买 Peekom Plus</a>后，从邮件复制 <strong>[License Key]</strong>（<strong>含连字符的完整密钥</strong>）</li>" +
            "<li>启动 Peekom → <strong>设置</strong>或 <strong>Plus 锁定界面</strong> → 粘贴密钥 → <strong>激活</strong></li>" +
            "<li>请保持网络畅通（公司网络请参阅下方 FAQ）</li>" +
            "</ol>" +
            "<p>输入框中的 <code>XXXX-XXXX-XXXX-XXXX</code> 仅为<strong>格式示例</strong>。<strong>不要</strong>只输入 16 位字符，请粘贴邮件中的<strong>完整密钥</strong>。</p>" +
            "<p>若遗失邮件，可用同一邮箱登录 <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Lemon Squeezy 订单记录</a>再次查看。</p>",
        faq12q: "网络正常但激活失败，提示「无法连接 Lemon Squeezy 服务器」。",
        faq12a:
            "<p>即使电脑已联网，Plus 激活仍需单独连接 <strong>Lemon Squeezy 服务器（<code>api.lemonsqueezy.com</code>）</strong>。公司<strong>防火墙、安全软件、VPN 或代理</strong>若仅拦截该地址，就会出现此提示。</p>" +
            "<p><strong>请尝试</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>在<strong>家庭 Wi‑Fi、手机热点</strong>等其他网络下激活一次</li>" +
            "<li>请 IT 允许 <strong><code>https://api.lemonsqueezy.com</code> 的 HTTPS（443）</strong></li>" +
            "<li>若使用公司 VPN，请关闭或改用已允许的 VPN 重试</li>" +
            "</ul>" +
            "<p>若出现<strong>激活上限（按套餐：Single 1 台 · Double 2 台 · Family 5 台）</strong>提示，请通过 <a href=\"/contact/\">联系我们</a>提供购买邮箱、订单号与许可证密钥，我们可协助重置设备。</p>" +
            "<p>重新下载安装包<strong>无法</strong>解决服务器仍被拦截的情况。</p>" +
            "<p><strong>与退款的关系</strong> — 此错误源于您所在<strong>网络环境的限制</strong>，并非产品缺陷。若许可证<strong>已经激活</strong>，以此为由的退款不在受理范围内。若仍为 <strong>Inactive</strong>（已激活设备 0 台）且在购买后 30 天内，请通过 <a href=\"/contact/\">联系我们</a>提供订单号与具体情况，我们会依照上述退款政策逐案审核。</p>",
        faq13q: "Peekom 是免费软件吗？可以在公司电脑上安装吗？",
        faq13a:
            "<p><strong>Peekom 免费版</strong>为无需单独许可费的<strong>免费软件（Freeware）</strong>。付费的 <strong>Peekom Plus</strong>为可选功能，不购买也可继续使用免费版。</p>" +
            "<p>（※ 并非指 Microsoft Windows <strong>官方认证计划</strong>。）</p>" +
            "<p>公司电脑可能因安全策略限制安装或数据路径。除程序文件夹外，Peekom 还会在 <code>%AppData%\\Roaming\\Peekom</code> 保存备忘录与设置，请一并向 IT 申请允许：</p>" +
            '<ul class="guide-step-list">' +
            "<li>官方安装包：<a href=\"/download/\">peekom.com/download</a> 的 <code>Peekom-Setup.exe</code>（由 GitHub Releases 提供）</li>" +
            "<li>数据文件夹：<code>C:\\Users\\(用户名)\\AppData\\Roaming\\Peekom</code></li>" +
            "<li>Plus 激活：<code>https://api.lemonsqueezy.com</code></li>" +
            "</ul>" +
            "<p>免费版没有网络也能使用，但 <strong>Plus 首次激活</strong>需要联网并能访问 <code>https://api.lemonsqueezy.com</code>。</p>" +
            "<p>若 github.com 与 <code>api.lemonsqueezy.com</code> 都被拦截，请在<strong>购买 Plus 之前</strong>先向 IT 确认能否放行。激活之后仅以公司网络限制为由申请的退款不在受理范围内。</p>",
        faq14q: "备忘录不见了，能恢复吗？",
        faq14a:
            "<p>Peekom 的备忘录<strong>仅保存在您的电脑上</strong>，没有云端服务器，我们也无法远程查看或恢复。</p>" +
            "<p><strong>没有自动备份。</strong> Peekom Plus 提供<strong>导出</strong>（.txt / .md / .json）和 <strong>JSON 备份/恢复</strong>，但若<strong>事先未备份</strong>，重装、切换账户或清理 AppData 后很难恢复。</p>" +
            "<p>请检查：</p>" +
            '<ul class="guide-step-list">' +
            "<li>是否<strong>卸载后重新安装</strong>了 Peekom</li>" +
            "<li>是否登录了<strong>其他 Windows 用户账户</strong></li>" +
            "<li>公司安全软件是否清理了 <strong>AppData</strong></li>" +
            "</ul>" +
            "<p>建议今后定期使用 Plus 的 <strong>JSON 备份</strong>或<strong>导出</strong>保存内容。</p>",
        faq15q: "购买 Plus 后未收到许可证密钥邮件。",
        faq15a:
            "<p>付款后 Lemon Squeezy 会发送<strong>购买确认邮件</strong>，请检查：</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>垃圾邮件、推广、社交</strong>文件夹</li>" +
            "<li>发件人 <strong>Lemon Squeezy</strong>，或主题含 <strong>Peekom / License</strong></li>" +
            "<li>结账时填写的<strong>邮箱地址</strong>是否正确（工作/个人邮箱是否弄混）</li>" +
            "</ul>" +
            "<p>使用付款邮箱登录 <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Lemon Squeezy 订单记录</a>可再次查看订单与密钥。</p>" +
            "<p>仍找不到？请通过 <a href=\"/contact/\">联系我们</a>提供<strong>购买邮箱、付款时间与收据</strong>，我们会协助确认。</p>"
    },
    "zh-TW": {
        settingsGuideTitle: "如何開啟設定？",
        settingsGuideText: "點選工作列右端的 <strong>∧</strong> 找到 Peekom 圖示，然後雙擊圖示，或右鍵 →「設定」。",
        settingsGuideThumbAria: "放大檢視開啟設定的位置",
        dlFreeFreewareNote: "免費版為免費軟體（Freeware），Peekom Plus 為選用升級。",
        faq7q: "移除舊版應用「빼꼼 인덱스」後，開機時出現亂碼或錯誤，該怎麼辦？",
        faq7a:
            "<p>若刪除舊版（빼꼼 인덱스）時<strong>開機自動啟動仍開啟</strong>，Windows 啟動項目可能仍保留舊條目，開機時會嘗試執行已刪除檔案，因而出現<strong>亂碼或錯誤視窗</strong>。</p>" +
            "<p><strong>Windows 11</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>設定 → 應用程式 → 啟動（或已安裝的應用程式 → 啟動）</li>" +
            "<li>在清單中找到「빼꼼 인덱스」或類似名稱</li>" +
            "<li>將其設為<strong>關閉</strong></li>" +
            "</ol>" +
            "<p><strong>Windows 10</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>按 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> 開啟工作管理員</li>" +
            "<li>開啟<strong>啟動</strong>索引標籤</li>" +
            "<li>選取「빼꼼 인덱스」→ <strong>停用</strong></li>" +
            "</ol>" +
            "<p>關閉該項目後<strong>重新啟動</strong>電腦。若問題消失，原因即為啟動項目殘留。之後可重新安裝 <a href=\"/download/\">Peekom（免費版）</a>使用。</p>" +
            '<p class="privacy-doc__note">舊版備忘錄與 Peekom <strong>儲存位置不同，不會自動移轉。</strong>請先複製需要保留的內容。</p>',
        faq10q: "在哪裡開啟 Peekom 設定？",
        faq10a:
            "在工作列（系統匣）的 Peekom 圖示上<strong>右鍵 → 設定</strong>即可開啟。也可<strong>雙擊</strong>系統匣圖示，或<strong>雙擊</strong>桌面 Peekom 捷徑（若應用程式已關閉，會連同備忘錄一起開啟）。詳見<a href=\"/help/\">使用指南</a>。",
        faq11q: "如何輸入授權金鑰？輸入框範例與郵件中的金鑰不一致。",
        faq11a:
            "<p>Peekom Plus 請使用 Lemon Squeezy 購買確認郵件中的<strong>完整授權金鑰</strong>。</p>" +
            '<ol class="guide-step-list">' +
            "<li><a href=\"" + BUY + "\" target=\"_blank\" rel=\"noopener\">購買 Peekom Plus</a>後，從郵件複製 <strong>[License Key]</strong>（<strong>含連字號的完整金鑰</strong>）</li>" +
            "<li>啟動 Peekom → <strong>設定</strong>或 <strong>Plus 鎖定畫面</strong> → 貼上金鑰 → <strong>啟用</strong></li>" +
            "<li>請保持網路暢通（公司網路請參閱下方 FAQ）</li>" +
            "</ol>" +
            "<p>輸入框中的 <code>XXXX-XXXX-XXXX-XXXX</code> 僅為<strong>格式範例</strong>。<strong>不要</strong>只輸入 16 個字元，請貼上郵件中的<strong>完整金鑰</strong>。</p>" +
            "<p>若遺失郵件，可用同一信箱登入 <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Lemon Squeezy 訂單記錄</a>再次查看。</p>",
        faq12q: "網路正常但啟用失敗，顯示「無法連線至 Lemon Squeezy 伺服器」。",
        faq12a:
            "<p>即使電腦已連線，Plus 啟用仍需另外連線至 <strong>Lemon Squeezy 伺服器（<code>api.lemonsqueezy.com</code>）</strong>。公司<strong>防火牆、安全軟體、VPN 或 Proxy</strong>若僅封鎖該網址，就會出現此訊息。</p>" +
            "<p><strong>請嘗試</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>在<strong>家用 Wi‑Fi、手機熱點</strong>等其他網路下啟用一次</li>" +
            "<li>請 IT 允許 <strong><code>https://api.lemonsqueezy.com</code> 的 HTTPS（443）</strong></li>" +
            "<li>若使用公司 VPN，請關閉或改用已允許的 VPN 重試</li>" +
            "</ul>" +
            "<p>若出現<strong>啟用上限（依方案：Single 1 台 · Double 2 台 · Family 5 台）</strong>訊息，請透過 <a href=\"/contact/\">聯絡我們</a>提供購買信箱、訂單編號與授權金鑰，我們可協助重設裝置。</p>" +
            "<p>重新下載安裝程式<strong>無法</strong>解決伺服器仍被封鎖的情況。</p>" +
            "<p><strong>與退款的關係</strong> — 此錯誤源自您所在<strong>網路環境的限制</strong>，並非產品瑕疵。若授權<strong>已經啟用</strong>，以此為由的退款不在受理範圍內。若仍為 <strong>Inactive</strong>（已啟用裝置 0 台）且在購買後 30 天內，請透過 <a href=\"/contact/\">聯絡我們</a>提供訂單編號與具體情況，我們會依照上述退款政策逐案審核。</p>",
        faq13q: "Peekom 是免費軟體嗎？可以在公司電腦上安裝嗎？",
        faq13a:
            "<p><strong>Peekom 免費版</strong>為無需另外授權費的<strong>免費軟體（Freeware）</strong>。付費的 <strong>Peekom Plus</strong>為選用功能，不購買也可繼續使用免費版。</p>" +
            "<p>（※ 並非指 Microsoft Windows <strong>官方認證計畫</strong>。）</p>" +
            "<p>公司電腦可能因安全政策限制安裝或資料路徑。除程式資料夾外，Peekom 還會在 <code>%AppData%\\Roaming\\Peekom</code> 儲存備忘錄與設定，請一併向 IT 申請允許：</p>" +
            '<ul class="guide-step-list">' +
            "<li>官方安裝程式：<a href=\"/download/\">peekom.com/download</a> 的 <code>Peekom-Setup.exe</code>（由 GitHub Releases 提供）</li>" +
            "<li>資料資料夾：<code>C:\\Users\\(使用者名稱)\\AppData\\Roaming\\Peekom</code></li>" +
            "<li>Plus 啟用：<code>https://api.lemonsqueezy.com</code></li>" +
            "</ul>" +
            "<p>免費版沒有網路也能使用，但 <strong>Plus 首次啟用</strong>需要連網並能存取 <code>https://api.lemonsqueezy.com</code>。</p>" +
            "<p>若 github.com 與 <code>api.lemonsqueezy.com</code> 都被封鎖，請在<strong>購買 Plus 之前</strong>先向 IT 確認能否放行。啟用之後僅以公司網路限制為由申請的退款不在受理範圍內。</p>",
        faq14q: "備忘錄不見了，能復原嗎？",
        faq14a:
            "<p>Peekom 的備忘錄<strong>僅儲存在您的電腦上</strong>，沒有雲端伺服器，我們也無法遠端查看或復原。</p>" +
            "<p><strong>沒有自動備份。</strong> Peekom Plus 提供<strong>匯出</strong>（.txt / .md / .json）和 <strong>JSON 備份/還原</strong>，但若<strong>事先未備份</strong>，重裝、切換帳戶或清理 AppData 後很難復原。</p>" +
            "<p>請檢查：</p>" +
            '<ul class="guide-step-list">' +
            "<li>是否<strong>解除安裝後重新安裝</strong>了 Peekom</li>" +
            "<li>是否登入了<strong>其他 Windows 使用者帳戶</strong></li>" +
            "<li>公司安全軟體是否清理了 <strong>AppData</strong></li>" +
            "</ul>" +
            "<p>建議今後定期使用 Plus 的 <strong>JSON 備份</strong>或<strong>匯出</strong>儲存內容。</p>",
        faq15q: "購買 Plus 後未收到授權金鑰郵件。",
        faq15a:
            "<p>付款後 Lemon Squeezy 會寄送<strong>購買確認郵件</strong>，請檢查：</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>垃圾郵件、促銷、社交</strong>資料夾</li>" +
            "<li>寄件者 <strong>Lemon Squeezy</strong>，或主旨含 <strong>Peekom / License</strong></li>" +
            "<li>結帳時填寫的<strong>電子郵件地址</strong>是否正確（工作/個人信箱是否弄混）</li>" +
            "</ul>" +
            "<p>使用付款信箱登入 <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Lemon Squeezy 訂單記錄</a>可再次查看訂單與金鑰。</p>" +
            "<p>仍找不到？請透過 <a href=\"/contact/\">聯絡我們</a>提供<strong>購買信箱、付款時間與收據</strong>，我們會協助確認。</p>"
    },
    es: {
        settingsGuideTitle: "¿Cómo abro la configuración?",
        settingsGuideText: "Haz clic en <strong>∧</strong> al final derecho de la barra de tareas para encontrar el icono de Peekom; luego haz doble clic o clic derecho → «Configuración».",
        settingsGuideThumbAria: "Ampliar dónde abrir la configuración",
        dlFreeFreewareNote: "La versión gratuita es freeware; Peekom Plus es opcional.",
        faq7q: "Tras desinstalar la app antigua 빼꼼 인덱스, al iniciar Windows aparecen caracteres extraños o errores. ¿Qué hago?",
        faq7a:
            "<p>Si eliminaste la versión antigua (빼꼼 인덱스) con el <strong>inicio automático activado</strong>, puede quedar una entrada en el arranque de Windows que intenta ejecutar un archivo borrado y muestra <strong>texto ilegible o un error</strong>.</p>" +
            "<p><strong>Windows 11</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>Configuración → Aplicaciones → Inicio (o Aplicaciones instaladas → Inicio)</li>" +
            "<li>Busca <strong>빼꼼 인덱스</strong> o un nombre similar</li>" +
            "<li>Desactívalo (<strong>Off</strong>)</li>" +
            "</ol>" +
            "<p><strong>Windows 10</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>Pulsa <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> para abrir el Administrador de tareas</li>" +
            "<li>Abre la pestaña <strong>Inicio</strong></li>" +
            "<li>Selecciona <strong>빼꼼 인덱스</strong> → <strong>Deshabilitar</strong></li>" +
            "</ol>" +
            "<p>Desactiva la entrada y <strong>reinicia</strong>. Si el problema desaparece, la causa era el arranque automático. Luego instala <a href=\"/download/\">Peekom (gratis)</a> de nuevo.</p>" +
            '<p class="privacy-doc__note">Las notas de la app antigua <strong>no se migran automáticamente</strong> porque Peekom guarda los datos en otra ubicación. Copia lo que necesites antes de eliminarla.</p>',
        faq10q: "¿Dónde abro la configuración de Peekom?",
        faq10a:
            "Clic derecho en el icono de Peekom en la <strong>bandeja del sistema</strong> → <strong>Configuración</strong>. También puedes <strong>hacer doble clic</strong> en el icono de la bandeja o <strong>doble clic</strong> en el acceso directo del escritorio (si la app estaba cerrada, se abren la nota y la configuración). Consulta la <a href=\"/help/\">guía</a> para más detalles.",
        faq11q: "¿Cómo introduzco la clave de licencia? El ejemplo del campo no coincide con el correo.",
        faq11a:
            "<p>Usa la <strong>clave de licencia completa</strong> del correo de confirmación de Lemon Squeezy.</p>" +
            '<ol class="guide-step-list">' +
            "<li>Tras <a href=\"" + BUY + "\" target=\"_blank\" rel=\"noopener\">comprar Peekom Plus</a>, copia <strong>[License Key]</strong> del correo (<strong>con todos los guiones</strong>)</li>" +
            "<li>Abre Peekom → <strong>Configuración</strong> o la <strong>pantalla de bloqueo Plus</strong> → pega la clave → <strong>Activar</strong></li>" +
            "<li>Con conexión a internet (en redes corporativas, consulta el FAQ siguiente)</li>" +
            "</ol>" +
            "<p>El <code>XXXX-XXXX-XXXX-XXXX</code> del campo es solo un <strong>ejemplo</strong>. <strong>No</strong> introduzcas solo 16 caracteres: pega la <strong>clave completa</strong> del correo.</p>" +
            "<p>¿Perdiste el correo? Inicia sesión en <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Mis pedidos de Lemon Squeezy</a> con el mismo email.</p>",
        faq12q: "Tengo internet pero la activación falla: «No se pudo conectar con Lemon Squeezy».",
        faq12a:
            "<p>Aunque el PC esté en línea, la activación Plus debe alcanzar <strong>Lemon Squeezy (<code>api.lemonsqueezy.com</code>)</strong>. Un <strong>firewall, antivirus, VPN o proxy</strong> corporativo puede bloquear solo ese servidor.</p>" +
            "<p><strong>Prueba esto</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>Activa una vez en otra red (Wi‑Fi de casa, hotspot del móvil)</li>" +
            "<li>Pide a IT permitir <strong><code>https://api.lemonsqueezy.com</code> por HTTPS (443)</strong></li>" +
            "<li>Desactiva la VPN corporativa o prueba con una VPN permitida</li>" +
            "</ul>" +
            "<p>Si aparece el límite de <strong>activación (según el plan: Single 1 dispositivo · Double 2 · Family 5)</strong>, <a href=\"/contact/\">contáctanos</a> con el email de compra, número de pedido y clave; podemos ayudarte a restablecer dispositivos.</p>" +
            "<p>Volver a descargar el instalador <strong>no</strong> soluciona el bloqueo del servidor.</p>" +
            "<p><strong>Relación con los reembolsos</strong> — este error viene de una <strong>restricción de red en tu entorno</strong>, no de un defecto del producto. Si tu licencia ya está <strong>activada</strong>, un reembolso por este motivo no es elegible. Si sigue como <strong>Inactive</strong> (0 dispositivos activados) y estás dentro de los 30 días desde la compra, <a href=\"/contact/\">escríbenos</a> con tu número de pedido y una descripción: revisaremos el caso de forma individual según la política de reembolsos anterior.</p>",
        faq13q: "¿Peekom es freeware? ¿Puedo instalarlo en un PC de empresa?",
        faq13a:
            "<p><strong>Peekom (gratis)</strong> es <strong>freeware</strong>: puedes usarlo sin licencia aparte. <strong>Peekom Plus</strong> es opcional de pago.</p>" +
            "<p>(Se refiere al <strong>tipo de licencia</strong>, no a la certificación oficial de Microsoft Windows.)</p>" +
            "<p>En PCs corporativos puede haber restricciones. Además de la carpeta del programa, Peekom guarda notas y ajustes en <code>%AppData%\\Roaming\\Peekom</code>. Pide a IT que permita:</p>" +
            '<ul class="guide-step-list">' +
            "<li>Instalador oficial: <code>Peekom-Setup.exe</code> en <a href=\"/download/\">peekom.com/download</a> (alojado en GitHub Releases)</li>" +
            "<li>Carpeta de datos: <code>C:\\Users\\(usuario)\\AppData\\Roaming\\Peekom</code></li>" +
            "<li>Activación Plus: <code>https://api.lemonsqueezy.com</code></li>" +
            "</ul>" +
            "<p>La versión gratuita funciona sin internet, pero la <strong>primera activación de Plus</strong> necesita conexión y acceso a <code>https://api.lemonsqueezy.com</code>.</p>" +
            "<p>Si github.com y <code>api.lemonsqueezy.com</code> están bloqueados los dos, confírmalo con IT <strong>antes de comprar Plus</strong>. Un reembolso solicitado después de la activación, cuando el único motivo es la red de la empresa, no es elegible.</p>",
        faq14q: "Desapareció mi nota. ¿Puedo recuperarla?",
        faq14a:
            "<p>Peekom guarda las notas <strong>solo en tu PC</strong>. No hay servidor en la nube y no podemos ver ni restaurar tus datos de forma remota.</p>" +
            "<p><strong>No hay copia de seguridad automática.</strong> Peekom Plus ofrece <strong>Exportar</strong> (.txt / .md / .json) y <strong>copia/restauración JSON</strong>, pero sin una copia previa, recuperar tras reinstalar, cambiar de cuenta o limpiar AppData es difícil.</p>" +
            "<p>Comprueba:</p>" +
            '<ul class="guide-step-list">' +
            "<li>¿<strong>Desinstalaste y reinstalaste</strong> Peekom?</li>" +
            "<li>¿Iniciaste sesión con <strong>otra cuenta de Windows</strong>?</li>" +
            "<li>¿Un antivirus corporativo limpió <strong>AppData</strong>?</li>" +
            "</ul>" +
            "<p>Recomendamos copias periódicas en <strong>JSON</strong> o <strong>Exportar</strong> con Plus.</p>",
        faq15q: "Compré Plus pero no recibí el correo con la clave de licencia.",
        faq15a:
            "<p>Tras el pago, Lemon Squeezy envía un <strong>correo de confirmación</strong>. Revisa:</p>" +
            '<ul class="guide-step-list">' +
            "<li>Carpetas de <strong>spam, promociones o social</strong></li>" +
            "<li>Remitente <strong>Lemon Squeezy</strong> o asunto con <strong>Peekom / License</strong></li>" +
            "<li>El <strong>email</strong> usado al pagar (¿trabajo o personal?)</li>" +
            "</ul>" +
            "<p>Inicia sesión en <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Mis pedidos de Lemon Squeezy</a> con ese email para ver la clave de nuevo.</p>" +
            "<p>¿Sigues sin encontrarla? <a href=\"/contact/\">Contáctanos</a> con tu <strong>email de compra, fecha de pago y recibo</strong>.</p>"
    },
    fr: {
        settingsGuideTitle: "Comment ouvrir les paramètres ?",
        settingsGuideText: "Cliquez sur <strong>∧</strong> à l’extrémité droite de la barre des tâches pour afficher l’icône Peekom, puis double-cliquez ou clic droit → « Paramètres ».",
        settingsGuideThumbAria: "Agrandir l’emplacement pour ouvrir les paramètres",
        dlFreeFreewareNote: "La version gratuite est un freeware ; Peekom Plus est en option.",
        faq7q: "Après avoir supprimé l’ancienne app 빼꼼 인덱스, des caractères bizarres ou des erreurs apparaissent au démarrage. Que faire ?",
        faq7a:
            "<p>Si vous avez supprimé l’ancienne version (빼꼼 인덱스) alors que le <strong>démarrage automatique était encore activé</strong>, une entrée Windows peut tenter d’exécuter un fichier supprimé et afficher du <strong>texte illisible ou une erreur</strong>.</p>" +
            "<p><strong>Windows 11</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>Paramètres → Applications → Démarrage (ou Applications installées → Démarrage)</li>" +
            "<li>Repérez <strong>빼꼼 인덱스</strong> ou un nom similaire</li>" +
            "<li>Passez sur <strong>Désactivé</strong></li>" +
            "</ol>" +
            "<p><strong>Windows 10</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>Appuyez sur <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> pour ouvrir le Gestionnaire des tâches</li>" +
            "<li>Onglet <strong>Démarrage</strong></li>" +
            "<li>Sélectionnez <strong>빼꼼 인덱스</strong> → <strong>Désactiver</strong></li>" +
            "</ol>" +
            "<p>Désactivez l’entrée puis <strong>redémarrez</strong>. Si le problème disparaît, la cause était l’inscription au démarrage. Installez ensuite <a href=\"/download/\">Peekom (gratuit)</a> à neuf.</p>" +
            '<p class="privacy-doc__note">Les notes de l’ancienne app ne sont <strong>pas migrées automatiquement</strong> : Peekom stocke les données ailleurs. Copiez ce dont vous avez besoin avant de supprimer l’ancienne version.</p>',
        faq10q: "Où ouvrir les paramètres Peekom ?",
        faq10a:
            "Clic droit sur l’icône Peekom dans la <strong>zone de notification</strong> → <strong>Paramètres</strong>. Vous pouvez aussi <strong>double-cliquer</strong> sur l’icône ou <strong>double-cliquer</strong> le raccourci bureau (si l’app était fermée, la note et les paramètres s’ouvrent ensemble). Voir le <a href=\"/help/\">guide</a> pour plus de détails.",
        faq11q: "Comment saisir la clé de licence ? L’exemple du champ ne correspond pas à l’e-mail.",
        faq11a:
            "<p>Utilisez la <strong>clé de licence complète</strong> de l’e-mail de confirmation Lemon Squeezy.</p>" +
            '<ol class="guide-step-list">' +
            "<li>Après <a href=\"" + BUY + "\" target=\"_blank\" rel=\"noopener\">l’achat de Peekom Plus</a>, copiez <strong>[License Key]</strong> dans l’e-mail (<strong>tirets inclus</strong>)</li>" +
            "<li>Lancez Peekom → <strong>Paramètres</strong> ou l’<strong>écran de verrouillage Plus</strong> → collez la clé → <strong>Activer</strong></li>" +
            "<li>Avec une connexion internet (réseau d’entreprise : voir la FAQ ci-dessous)</li>" +
            "</ol>" +
            "<p>Le <code>XXXX-XXXX-XXXX-XXXX</code> affiché est un <strong>exemple de format</strong>. N’entrez <strong>pas</strong> seulement 16 caractères : collez la <strong>clé entière</strong> de l’e-mail.</p>" +
            "<p>E-mail perdu ? Connectez-vous sur <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Mes commandes Lemon Squeezy</a> avec la même adresse.</p>",
        faq12q: "J’ai internet mais l’activation échoue : « Impossible de joindre Lemon Squeezy ».",
        faq12a:
            "<p>Même en ligne, l’activation Plus doit atteindre <strong>Lemon Squeezy (<code>api.lemonsqueezy.com</code>)</strong>. Un <strong>pare-feu, antivirus, VPN ou proxy</strong> d’entreprise peut bloquer uniquement ce serveur.</p>" +
            "<p><strong>Essayez ceci</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>Activez une fois sur un autre réseau (Wi‑Fi maison, partage de connexion)</li>" +
            "<li>Demandez à l’IT d’autoriser <strong><code>https://api.lemonsqueezy.com</code> en HTTPS (443)</strong></li>" +
            "<li>Désactivez le VPN d’entreprise ou réessayez avec un VPN autorisé</li>" +
            "</ul>" +
            "<p>Message de <strong>limite d’activation (selon la formule : Single 1 appareil · Double 2 · Family 5)</strong> ? <a href=\"/contact/\">Contactez-nous</a> avec l’e-mail d’achat, le n° de commande et la clé — nous pouvons réinitialiser les appareils.</p>" +
            "<p>Retélécharger l’installateur <strong>ne résout pas</strong> un blocage serveur.</p>" +
            "<p><strong>Lien avec les remboursements</strong> — cette erreur vient d’une <strong>restriction réseau dans votre environnement</strong>, pas d’un défaut du produit. Si votre licence est <strong>déjà activée</strong>, un remboursement pour ce motif n’est pas éligible. Si elle est encore <strong>Inactive</strong> (0 appareil activé) et que vous êtes dans les 30 jours suivant l’achat, <a href=\"/contact/\">écrivez-nous</a> avec votre n° de commande et une description : nous étudierons le cas individuellement selon la politique de remboursement ci-dessus.</p>",
        faq13q: "Peekom est-il un freeware ? Puis-je l’installer sur un PC professionnel ?",
        faq13a:
            "<p><strong>Peekom (gratuit)</strong> est un <strong>freeware</strong> utilisable sans licence séparée. <strong>Peekom Plus</strong> est une option payante.</p>" +
            "<p>(Il s’agit du <strong>type de licence</strong>, pas de la certification officielle Microsoft Windows.)</p>" +
            "<p>Sur un PC d’entreprise, l’installation ou les chemins de données peuvent être restreints. Outre le dossier programme, Peekom enregistre notes et réglages dans <code>%AppData%\\Roaming\\Peekom</code>. Demandez à l’IT d’autoriser :</p>" +
            '<ul class="guide-step-list">' +
            "<li>Installateur officiel : <code>Peekom-Setup.exe</code> sur <a href=\"/download/\">peekom.com/download</a> (hébergé sur GitHub Releases)</li>" +
            "<li>Dossier de données : <code>C:\\Users\\(nom)\\AppData\\Roaming\\Peekom</code></li>" +
            "<li>Activation Plus : <code>https://api.lemonsqueezy.com</code></li>" +
            "</ul>" +
            "<p>La version gratuite fonctionne sans internet, mais la <strong>première activation de Plus</strong> nécessite une connexion et l’accès à <code>https://api.lemonsqueezy.com</code>.</p>" +
            "<p>Si github.com et <code>api.lemonsqueezy.com</code> sont tous les deux bloqués, vérifiez auprès de l’IT <strong>avant d’acheter Plus</strong>. Un remboursement demandé après l’activation, dont le réseau d’entreprise est le seul motif, n’est pas éligible.</p>",
        faq14q: "Ma note a disparu. Puis-je la récupérer ?",
        faq14a:
            "<p>Peekom stocke les notes <strong>uniquement sur votre PC</strong>. Pas de cloud : nous ne pouvons pas consulter ni restaurer vos données à distance.</p>" +
            "<p><strong>Pas de sauvegarde automatique.</strong> Peekom Plus propose <strong>Exporter</strong> (.txt / .md / .json) et <strong>sauvegarde/restauration JSON</strong>, mais sans copie préalable, la récupération après réinstallation, changement de compte ou nettoyage AppData est difficile.</p>" +
            "<p>Vérifiez :</p>" +
            '<ul class="guide-step-list">' +
            "<li>Avez-vous <strong>désinstallé puis réinstallé</strong> Peekom ?</li>" +
            "<li>Êtes-vous connecté avec un <strong>autre compte Windows</strong> ?</li>" +
            "<li>Un antivirus d’entreprise a-t-il nettoyé <strong>AppData</strong> ?</li>" +
            "</ul>" +
            "<p>Nous recommandons des <strong>sauvegardes JSON</strong> ou <strong>exports</strong> réguliers avec Plus.</p>",
        faq15q: "J’ai acheté Plus mais je n’ai pas reçu l’e-mail avec la clé.",
        faq15a:
            "<p>Après paiement, Lemon Squeezy envoie un <strong>e-mail de confirmation</strong>. Vérifiez :</p>" +
            '<ul class="guide-step-list">' +
            "<li>Dossiers <strong>spam, promotions ou réseaux sociaux</strong></li>" +
            "<li>Expéditeur <strong>Lemon Squeezy</strong> ou objet contenant <strong>Peekom / License</strong></li>" +
            "<li>L’<strong>adresse e-mail</strong> utilisée au paiement (pro vs perso)</li>" +
            "</ul>" +
            "<p>Connectez-vous sur <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Mes commandes Lemon Squeezy</a> avec cet e-mail pour revoir la clé.</p>" +
            "<p>Toujours bloqué ? <a href=\"/contact/\">Contactez-nous</a> avec votre <strong>e-mail d’achat, date de paiement et reçu</strong>.</p>"
    },
    de: {
        settingsGuideTitle: "Wie öffne ich die Einstellungen?",
        settingsGuideText: "Klicken Sie rechts in der Taskleiste auf <strong>∧</strong>, um das Peekom-Symbol zu finden, dann Doppelklick oder Rechtsklick → „Einstellungen“.",
        settingsGuideThumbAria: "Vergrößerte Ansicht: Einstellungen öffnen",
        dlFreeFreewareNote: "Die kostenlose Version ist Freeware; Peekom Plus ist optional.",
        faq7q: "Nach dem Entfernen der alten App 빼꼼 인덱스 erscheinen beim Start seltsame Zeichen oder Fehler. Was tun?",
        faq7a:
            "<p>Wurde die alte Version (빼꼼 인덱스) entfernt, während <strong>Autostart beim Anmelden aktiv</strong> war, kann ein Eintrag im Windows-Autostart eine gelöschte Datei starten und <strong>kaputten Text oder einen Fehler</strong> anzeigen.</p>" +
            "<p><strong>Windows 11</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>Einstellungen → Apps → Autostart (oder Installierte Apps → Autostart)</li>" +
            "<li><strong>빼꼼 인덱스</strong> oder ähnlichen Namen suchen</li>" +
            "<li>Auf <strong>Aus</strong> stellen</li>" +
            "</ol>" +
            "<p><strong>Windows 10</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> für den Task-Manager</li>" +
            "<li>Register <strong>Autostart</strong></li>" +
            "<li><strong>빼꼼 인덱스</strong> wählen → <strong>Deaktivieren</strong></li>" +
            "</ol>" +
            "<p>Eintrag deaktivieren und <strong>neu starten</strong>. Verschwindet das Problem, war der Autostart die Ursache. Danach <a href=\"/download/\">Peekom (kostenlos)</a> neu installieren.</p>" +
            '<p class="privacy-doc__note">Notizen der alten App werden <strong>nicht automatisch übernommen</strong>, da Peekom Daten woanders speichert. Kopieren Sie Wichtiges vor dem Entfernen.</p>',
        faq10q: "Wo öffne ich die Peekom-Einstellungen?",
        faq10a:
            "Rechtsklick auf das Peekom-Symbol im <strong>Infobereich</strong> → <strong>Einstellungen</strong>. Oder <strong>Doppelklick</strong> auf das Tray-Symbol bzw. <strong>Doppelklick</strong> auf die Desktop-Verknüpfung (war die App geschlossen, öffnen sich Notiz und Einstellungen). Details in der <a href=\"/help/\">Anleitung</a>.",
        faq11q: "Wie gebe ich den Lizenzschlüssel ein? Das Platzhalter-Beispiel passt nicht zur E-Mail.",
        faq11a:
            "<p>Verwenden Sie den <strong>vollständigen Lizenzschlüssel</strong> aus der Lemon-Squeezy-Kaufbestätigung.</p>" +
            '<ol class="guide-step-list">' +
            "<li>Nach <a href=\"" + BUY + "\" target=\"_blank\" rel=\"noopener\">Kauf von Peekom Plus</a> <strong>[License Key]</strong> aus der E-Mail kopieren (<strong>inkl. aller Bindestriche</strong>)</li>" +
            "<li>Peekom starten → <strong>Einstellungen</strong> oder <strong>Plus-Sperrbildschirm</strong> → Schlüssel einfügen → <strong>Aktivieren</strong></li>" +
            "<li>Mit funktionierender Internetverbindung (Firmennetz: FAQ unten)</li>" +
            "</ol>" +
            "<p><code>XXXX-XXXX-XXXX-XXXX</code> ist nur ein <strong>Formatbeispiel</strong>. <strong>Nicht</strong> nur 16 Zeichen eingeben — den <strong>gesamten Schlüssel</strong> aus der E-Mail einfügen.</p>" +
            "<p>E-Mail verloren? Bei <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Lemon Squeezy Meine Bestellungen</a> mit derselben Adresse anmelden.</p>",
        faq12q: "Internet funktioniert, aber Aktivierung schlägt fehl: „Verbindung zu Lemon Squeezy nicht möglich“.",
        faq12a:
            "<p>Auch online muss die Plus-Aktivierung <strong>Lemon Squeezy (<code>api.lemonsqueezy.com</code>)</strong> erreichen. <strong>Firewall, Sicherheitssoftware, VPN oder Proxy</strong> im Unternehmen können nur diesen Server blockieren.</p>" +
            "<p><strong>Bitte versuchen</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>Einmal in einem anderen Netz aktivieren (Heim-WLAN, Mobil-Hotspot)</li>" +
            "<li>IT um Freigabe von <strong><code>https://api.lemonsqueezy.com</code> per HTTPS (443)</strong> bitten</li>" +
            "<li>Firmen-VPN ausschalten oder erlaubtes VPN nutzen</li>" +
            "</ul>" +
            "<p>Meldung <strong>Aktivierungslimit (je Tarif: Single 1 Gerät · Double 2 · Family 5)</strong>? <a href=\"/contact/\">Kontakt</a> mit Kauf-E-Mail, Bestellnummer und Schlüssel — wir helfen beim Zurücksetzen.</p>" +
            "<p>Installer erneut laden hilft <strong>nicht</strong>, wenn der Server blockiert bleibt.</p>" +
            "<p><strong>Zusammenhang mit Rückerstattungen</strong> — dieser Fehler entsteht durch eine <strong>Netzwerkbeschränkung in Ihrer Umgebung</strong> und ist kein Produktfehler. Ist Ihre Lizenz <strong>bereits aktiviert</strong>, besteht aus diesem Grund kein Anspruch auf Rückerstattung. Ist sie noch <strong>Inactive</strong> (0 aktivierte Geräte) und liegt der Kauf weniger als 30 Tage zurück, schreiben Sie uns über <a href=\"/contact/\">Kontakt</a> mit Bestellnummer und Beschreibung — wir prüfen den Fall gemäß der obigen Rückerstattungsrichtlinie individuell.</p>",
        faq13q: "Ist Peekom Freeware? Darf ich es auf einem Firmen-PC installieren?",
        faq13a:
            "<p><strong>Peekom (kostenlos)</strong> ist <strong>Freeware</strong> ohne separate Lizenzgebühr. <strong>Peekom Plus</strong> ist optional kostenpflichtig.</p>" +
            "<p>(Gemeint ist der <strong>Lizenztyp</strong>, nicht die offizielle Microsoft-Windows-Zertifizierung.)</p>" +
            "<p>Auf Firmen-PCs können Installation und Datenpfade eingeschränkt sein. Neben dem Programmordner speichert Peekom in <code>%AppData%\\Roaming\\Peekom</code>. Bitte IT um Freigabe von:</p>" +
            '<ul class="guide-step-list">' +
            "<li>Offiziellem Installer: <code>Peekom-Setup.exe</code> von <a href=\"/download/\">peekom.com/download</a> (über GitHub Releases bereitgestellt)</li>" +
            "<li>Datenordner: <code>C:\\Users\\(Benutzername)\\AppData\\Roaming\\Peekom</code></li>" +
            "<li>Plus-Aktivierung: <code>https://api.lemonsqueezy.com</code></li>" +
            "</ul>" +
            "<p>Die kostenlose Version läuft auch ohne Internet, die <strong>erste Plus-Aktivierung</strong> braucht jedoch eine Verbindung und Zugriff auf <code>https://api.lemonsqueezy.com</code>.</p>" +
            "<p>Sind github.com und <code>api.lemonsqueezy.com</code> beide blockiert, klären Sie das <strong>vor dem Kauf von Plus</strong> mit der IT. Eine Rückerstattung, die nach der Aktivierung allein wegen des Firmennetzes verlangt wird, ist nicht möglich.</p>",
        faq14q: "Meine Notiz ist weg. Kann ich sie wiederherstellen?",
        faq14a:
            "<p>Peekom speichert Notizen <strong>nur auf Ihrem PC</strong>. Kein Cloud-Server — wir können Ihre Daten nicht remote einsehen oder wiederherstellen.</p>" +
            "<p><strong>Kein automatisches Backup.</strong> Peekom Plus bietet <strong>Export</strong> (.txt / .md / .json) und <strong>JSON-Backup/Wiederherstellung</strong>, aber ohne vorheriges Backup ist Wiederherstellung nach Neuinstallation, Kontowechsel oder AppData-Bereinigung schwer.</p>" +
            "<p>Bitte prüfen:</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Deinstallation und Neuinstallation</strong> von Peekom?</li>" +
            "<li>Anderes <strong>Windows-Benutzerkonto</strong>?</li>" +
            "<li>Firmen-Security hat <strong>AppData</strong> bereinigt?</li>" +
            "</ul>" +
            "<p>Wir empfehlen regelmäßige Plus-<strong>JSON-Backups</strong> oder <strong>Export</strong>.</p>",
        faq15q: "Plus gekauft, aber keine E-Mail mit dem Lizenzschlüssel.",
        faq15a:
            "<p>Nach der Zahlung sendet Lemon Squeezy eine <strong>Kaufbestätigung</strong>. Bitte prüfen:</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Spam-, Werbe- oder Social-Ordner</strong></li>" +
            "<li>Absender <strong>Lemon Squeezy</strong> oder Betreff mit <strong>Peekom / License</strong></li>" +
            "<li><strong>E-Mail-Adresse</strong> beim Checkout (Firma vs. privat verwechselt?)</li>" +
            "</ul>" +
            "<p>Bei <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Lemon Squeezy Meine Bestellungen</a> mit dieser E-Mail anmelden, um den Schlüssel erneut zu sehen.</p>" +
            "<p>Noch nicht gefunden? <a href=\"/contact/\">Kontakt</a> mit <strong>Kauf-E-Mail, Zahlungszeitpunkt und Beleg</strong>.</p>"
    },
    pt: {
        settingsGuideTitle: "Como abro as configurações?",
        settingsGuideText: "Clique em <strong>∧</strong> no canto direito da barra de tarefas para encontrar o ícone do Peekom; depois clique duas vezes ou botão direito → «Configurações».",
        settingsGuideThumbAria: "Ampliar onde abrir as configurações",
        dlFreeFreewareNote: "A versão gratuita é freeware; o Peekom Plus é opcional.",
        faq7q: "Depois de remover o app antigo 빼꼼 인덱스, aparecem caracteres estranhos ou erros ao iniciar. O que fazer?",
        faq7a:
            "<p>Se removeu a versão antiga (빼꼼 인덱스) com o <strong>início automático ainda ativo</strong>, uma entrada no arranque do Windows pode tentar executar um ficheiro apagado e mostrar <strong>texto corrompido ou erro</strong>.</p>" +
            "<p><strong>Windows 11</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>Definições → Aplicações → Arranque (ou Aplicações instaladas → Arranque)</li>" +
            "<li>Procure <strong>빼꼼 인덱스</strong> ou nome semelhante</li>" +
            "<li>Desative (<strong>Off</strong>)</li>" +
            "</ol>" +
            "<p><strong>Windows 10</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>Prima <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> para o Gestor de Tarefas</li>" +
            "<li>Separador <strong>Arranque</strong></li>" +
            "<li>Selecione <strong>빼꼼 인덱스</strong> → <strong>Desativar</strong></li>" +
            "</ol>" +
            "<p>Desative a entrada e <strong>reinicie</strong>. Se o problema parar, a causa era o arranque automático. Depois instale <a href=\"/download/\">Peekom (grátis)</a> de novo.</p>" +
            '<p class="privacy-doc__note">As notas da app antiga <strong>não migram automaticamente</strong> — o Peekom guarda dados noutro local. Copie o que precisar antes de remover.</p>',
        faq10q: "Onde abro as configurações do Peekom?",
        faq10a:
            "Clique com o botão direito no ícone do Peekom na <strong>bandeja do sistema</strong> → <strong>Configurações</strong>. Também pode <strong>clicar duas vezes</strong> no ícone da bandeja ou <strong>duplo clique</strong> no atalho do ambiente de trabalho (se a app estava fechada, abrem-se a nota e as configurações). Veja o <a href=\"/help/\">guia</a> para detalhes.",
        faq11q: "Como introduzo a chave de licença? O exemplo do campo não coincide com o e-mail.",
        faq11a:
            "<p>Use a <strong>chave de licença completa</strong> do e-mail de confirmação Lemon Squeezy.</p>" +
            '<ol class="guide-step-list">' +
            "<li>Após <a href=\"" + BUY + "\" target=\"_blank\" rel=\"noopener\">comprar Peekom Plus</a>, copie <strong>[License Key]</strong> do e-mail (<strong>com todos os hífens</strong>)</li>" +
            "<li>Abra o Peekom → <strong>Configurações</strong> ou <strong>ecrã de bloqueio Plus</strong> → cole a chave → <strong>Ativar</strong></li>" +
            "<li>Com ligação à internet (rede corporativa: veja o FAQ abaixo)</li>" +
            "</ol>" +
            "<p>O <code>XXXX-XXXX-XXXX-XXXX</code> é só um <strong>exemplo</strong>. <strong>Não</strong> introduza só 16 caracteres — cole a <strong>chave inteira</strong> do e-mail.</p>" +
            "<p>Perdeu o e-mail? Inicie sessão em <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">As minhas encomendas Lemon Squeezy</a> com o mesmo endereço.</p>",
        faq12q: "Tenho internet mas a ativação falha: «Não foi possível contactar o Lemon Squeezy».",
        faq12a:
            "<p>Mesmo online, a ativação Plus precisa de alcançar <strong>Lemon Squeezy (<code>api.lemonsqueezy.com</code>)</strong>. <strong>Firewall, antivírus, VPN ou proxy</strong> corporativos podem bloquear só esse servidor.</p>" +
            "<p><strong>Tente isto</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>Ative uma vez noutra rede (Wi‑Fi de casa, hotspot do telemóvel)</li>" +
            "<li>Peça à IT para permitir <strong><code>https://api.lemonsqueezy.com</code> em HTTPS (443)</strong></li>" +
            "<li>Desligue a VPN corporativa ou use uma VPN permitida</li>" +
            "</ul>" +
            "<p>Mensagem de <strong>limite de ativação (por plano: Single 1 dispositivo · Double 2 · Family 5)</strong>? <a href=\"/contact/\">Contacte-nos</a> com e-mail de compra, n.º de encomenda e chave.</p>" +
            "<p>Transferir o instalador de novo <strong>não resolve</strong> se o servidor continuar bloqueado.</p>" +
            "<p><strong>Relação com reembolsos</strong> — este erro vem de uma <strong>restrição de rede no seu ambiente</strong> e não de um defeito do produto. Se a licença já estiver <strong>ativada</strong>, o reembolso por este motivo não é elegível. Se ainda estiver <strong>Inactive</strong> (0 dispositivos ativados) e estiver dentro dos 30 dias após a compra, <a href=\"/contact/\">contacte-nos</a> com o n.º de encomenda e uma descrição — analisamos o caso individualmente segundo a política de reembolso acima.</p>",
        faq13q: "O Peekom é freeware? Posso instalar num PC da empresa?",
        faq13a:
            "<p><strong>Peekom (grátis)</strong> é <strong>freeware</strong> — pode usar sem licença à parte. <strong>Peekom Plus</strong> é opcional e pago.</p>" +
            "<p>(Refere-se ao <strong>tipo de licença</strong>, não à certificação oficial Microsoft Windows.)</p>" +
            "<p>Em PCs corporativos a instalação ou caminhos de dados podem ser restritos. Além da pasta do programa, o Peekom guarda em <code>%AppData%\\Roaming\\Peekom</code>. Peça à IT para permitir:</p>" +
            '<ul class="guide-step-list">' +
            "<li>Instalador oficial: <code>Peekom-Setup.exe</code> em <a href=\"/download/\">peekom.com/download</a> (alojado no GitHub Releases)</li>" +
            "<li>Pasta de dados: <code>C:\\Users\\(utilizador)\\AppData\\Roaming\\Peekom</code></li>" +
            "<li>Ativação Plus: <code>https://api.lemonsqueezy.com</code></li>" +
            "</ul>" +
            "<p>A versão gratuita funciona sem internet, mas a <strong>primeira ativação do Plus</strong> exige ligação e acesso a <code>https://api.lemonsqueezy.com</code>.</p>" +
            "<p>Se github.com e <code>api.lemonsqueezy.com</code> estiverem os dois bloqueados, confirme com a IT <strong>antes de comprar o Plus</strong>. Um reembolso pedido após a ativação, tendo como único motivo a rede da empresa, não é elegível.</p>",
        faq14q: "A minha nota desapareceu. Posso recuperá-la?",
        faq14a:
            "<p>O Peekom guarda notas <strong>só no seu PC</strong>. Não há servidor na nuvem — não podemos ver nem restaurar os seus dados à distância.</p>" +
            "<p><strong>Sem cópia de segurança automática.</strong> O Peekom Plus oferece <strong>Exportar</strong> (.txt / .md / .json) e <strong>cópia/restauro JSON</strong>, mas sem cópia prévia a recuperação após reinstalação, mudança de conta ou limpeza de AppData é difícil.</p>" +
            "<p>Verifique:</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Desinstalou e reinstalou</strong> o Peekom?</li>" +
            "<li>Iniciou sessão noutra <strong>conta Windows</strong>?</li>" +
            "<li>Antivírus corporativo limpou <strong>AppData</strong>?</li>" +
            "</ul>" +
            "<p>Recomendamos cópias periódicas em <strong>JSON</strong> ou <strong>Exportar</strong> com Plus.</p>",
        faq15q: "Comprei o Plus mas não recebi o e-mail com a chave.",
        faq15a:
            "<p>Após o pagamento, a Lemon Squeezy envia um <strong>e-mail de confirmação</strong>. Verifique:</p>" +
            '<ul class="guide-step-list">' +
            "<li>Pastas de <strong>spam, promoções ou social</strong></li>" +
            "<li>Remetente <strong>Lemon Squeezy</strong> ou assunto com <strong>Peekom / License</strong></li>" +
            "<li>O <strong>e-mail</strong> usado no checkout (trabalho vs. pessoal)</li>" +
            "</ul>" +
            "<p>Inicie sessão em <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">As minhas encomendas Lemon Squeezy</a> com esse e-mail para ver a chave outra vez.</p>" +
            "<p>Ainda sem sucesso? <a href=\"/contact/\">Contacte-nos</a> com <strong>e-mail de compra, data de pagamento e recibo</strong>.</p>"
    },
    it: {
        settingsGuideTitle: "Come apro le impostazioni?",
        settingsGuideText: "Fai clic su <strong>∧</strong> all’estremità destra della barra delle applicazioni per trovare l’icona Peekom, poi doppio clic o tasto destro → «Impostazioni».",
        settingsGuideThumbAria: "Ingrandisci dove aprire le impostazioni",
        dlFreeFreewareNote: "La versione gratuita è freeware; Peekom Plus è facoltativo.",
        faq7q: "Dopo aver rimosso la vecchia app 빼꼼 인덱스, all’avvio compaiono caratteri strani o errori. Cosa fare?",
        faq7a:
            "<p>Se hai eliminato la versione precedente (빼꼼 인덱스) con l’<strong>avvio automatico ancora attivo</strong>, una voce di avvio di Windows può tentare di eseguire un file cancellato e mostrare <strong>testo illeggibile o un errore</strong>.</p>" +
            "<p><strong>Windows 11</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>Impostazioni → App → Avvio (o App installate → Avvio)</li>" +
            "<li>Cerca <strong>빼꼼 인덱스</strong> o un nome simile</li>" +
            "<li>Disattivalo (<strong>Off</strong>)</li>" +
            "</ol>" +
            "<p><strong>Windows 10</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>Premi <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> per Apri Gestione attività</li>" +
            "<li>Scheda <strong>Avvio</strong></li>" +
            "<li>Seleziona <strong>빼꼼 인덱스</strong> → <strong>Disabilita</strong></li>" +
            "</ol>" +
            "<p>Disattiva la voce e <strong>riavvia</strong>. Se il problema scompare, la causa era l’avvio automatico. Poi installa <a href=\"/download/\">Peekom (gratuito)</a> da capo.</p>" +
            '<p class="privacy-doc__note">Le note della vecchia app <strong>non vengono migrate automaticamente</strong> perché Peekom salva i dati altrove. Copia ciò che ti serve prima di rimuoverla.</p>',
        faq10q: "Dove apro le impostazioni di Peekom?",
        faq10a:
            "Tasto destro sull’icona Peekom nella <strong>area di notifica</strong> → <strong>Impostazioni</strong>. Puoi anche <strong>fare doppio clic</strong> sull’icona o <strong>doppio clic</strong> sul collegamento desktop (se l’app era chiusa, si aprono nota e impostazioni). Vedi la <a href=\"/help/\">guida</a> per i dettagli.",
        faq11q: "Come inserisco la chiave di licenza? L’esempio nel campo non coincide con l’e-mail.",
        faq11a:
            "<p>Usa la <strong>chiave di licenza completa</strong> dall’e-mail di conferma Lemon Squeezy.</p>" +
            '<ol class="guide-step-list">' +
            "<li>Dopo <a href=\"" + BUY + "\" target=\"_blank\" rel=\"noopener\">l’acquisto di Peekom Plus</a>, copia <strong>[License Key]</strong> dall’e-mail (<strong>trattini inclusi</strong>)</li>" +
            "<li>Avvia Peekom → <strong>Impostazioni</strong> o <strong>schermata blocco Plus</strong> → incolla la chiave → <strong>Attiva</strong></li>" +
            "<li>Con connessione internet (rete aziendale: vedi FAQ sotto)</li>" +
            "</ol>" +
            "<p>Il <code>XXXX-XXXX-XXXX-XXXX</code> è solo un <strong>esempio di formato</strong>. <strong>Non</strong> inserire solo 16 caratteri: incolla la <strong>chiave intera</strong> dall’e-mail.</p>" +
            "<p>E-mail persa? Accedi a <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">I miei ordini Lemon Squeezy</a> con lo stesso indirizzo.</p>",
        faq12q: "Ho internet ma l’attivazione fallisce: «Impossibile contattare Lemon Squeezy».",
        faq12a:
            "<p>Anche online, l’attivazione Plus deve raggiungere <strong>Lemon Squeezy (<code>api.lemonsqueezy.com</code>)</strong>. <strong>Firewall, antivirus, VPN o proxy</strong> aziendali possono bloccare solo quel server.</p>" +
            "<p><strong>Prova questo</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>Attiva una volta su un’altra rete (Wi‑Fi di casa, hotspot del telefono)</li>" +
            "<li>Chiedi all’IT di consentire <strong><code>https://api.lemonsqueezy.com</code> in HTTPS (443)</strong></li>" +
            "<li>Disattiva la VPN aziendale o riprova con una VPN consentita</li>" +
            "</ul>" +
            "<p>Messaggio <strong>limite attivazione (per piano: Single 1 dispositivo · Double 2 · Family 5)</strong>? <a href=\"/contact/\">Contattaci</a> con e-mail d’acquisto, numero ordine e chiave.</p>" +
            "<p>Scaricare di nuovo l’installer <strong>non risolve</strong> se il server resta bloccato.</p>" +
            "<p><strong>Rapporto con i rimborsi</strong> — questo errore deriva da una <strong>restrizione di rete nel tuo ambiente</strong>, non da un difetto del prodotto. Se la licenza è <strong>già attivata</strong>, il rimborso per questo motivo non è ammissibile. Se è ancora <strong>Inactive</strong> (0 dispositivi attivati) e sei entro 30 giorni dall’acquisto, <a href=\"/contact/\">scrivici</a> con il numero d’ordine e una descrizione: valuteremo il caso singolarmente secondo la politica di rimborso qui sopra.</p>",
        faq13q: "Peekom è freeware? Posso installarlo su un PC aziendale?",
        faq13a:
            "<p><strong>Peekom (gratuito)</strong> è <strong>freeware</strong> utilizzabile senza licenza separata. <strong>Peekom Plus</strong> è opzionale a pagamento.</p>" +
            "<p>(Si intende il <strong>tipo di licenza</strong>, non la certificazione ufficiale Microsoft Windows.)</p>" +
            "<p>Sui PC aziendali installazione e percorsi dati possono essere limitati. Oltre alla cartella programma, Peekom salva in <code>%AppData%\\Roaming\\Peekom</code>. Chiedi all’IT di autorizzare:</p>" +
            '<ul class="guide-step-list">' +
            "<li>Installer ufficiale: <code>Peekom-Setup.exe</code> da <a href=\"/download/\">peekom.com/download</a> (ospitato su GitHub Releases)</li>" +
            "<li>Cartella dati: <code>C:\\Users\\(utente)\\AppData\\Roaming\\Peekom</code></li>" +
            "<li>Attivazione Plus: <code>https://api.lemonsqueezy.com</code></li>" +
            "</ul>" +
            "<p>La versione gratuita funziona anche senza internet, ma la <strong>prima attivazione di Plus</strong> richiede una connessione e l’accesso a <code>https://api.lemonsqueezy.com</code>.</p>" +
            "<p>Se github.com e <code>api.lemonsqueezy.com</code> sono entrambi bloccati, verifica con l’IT <strong>prima di acquistare Plus</strong>. Un rimborso richiesto dopo l’attivazione, quando l’unico motivo è la rete aziendale, non è ammissibile.</p>",
        faq14q: "La mia nota è sparita. Posso recuperarla?",
        faq14a:
            "<p>Peekom salva le note <strong>solo sul tuo PC</strong>. Nessun cloud: non possiamo vedere o ripristinare i dati da remoto.</p>" +
            "<p><strong>Nessun backup automatico.</strong> Peekom Plus offre <strong>Esporta</strong> (.txt / .md / .json) e <strong>backup/ripristino JSON</strong>, ma senza backup precedente il recupero dopo reinstallazione, cambio account o pulizia AppData è difficile.</p>" +
            "<p>Controlla:</p>" +
            '<ul class="guide-step-list">' +
            "<li>Hai <strong>disinstallato e reinstallato</strong> Peekom?</li>" +
            "<li>Sei con un <strong>altro account Windows</strong>?</li>" +
            "<li>L’antivirus aziendale ha pulito <strong>AppData</strong>?</li>" +
            "</ul>" +
            "<p>Consigliamo backup periodici <strong>JSON</strong> o <strong>Esporta</strong> con Plus.</p>",
        faq15q: "Ho acquistato Plus ma non ho ricevuto l’e-mail con la chiave.",
        faq15a:
            "<p>Dopo il pagamento, Lemon Squeezy invia un’<strong>e-mail di conferma</strong>. Controlla:</p>" +
            '<ul class="guide-step-list">' +
            "<li>Cartelle <strong>spam, promozioni o social</strong></li>" +
            "<li>Mittente <strong>Lemon Squeezy</strong> o oggetto con <strong>Peekom / License</strong></li>" +
            "<li>L’<strong>e-mail</strong> usata al checkout (lavoro vs. personale)</li>" +
            "</ul>" +
            "<p>Accedi a <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">I miei ordini Lemon Squeezy</a> con quell’e-mail per rivedere la chiave.</p>" +
            "<p>Ancora niente? <a href=\"/contact/\">Contattaci</a> con <strong>e-mail d’acquisto, data pagamento e ricevuta</strong>.</p>"
    },
    ru: {
        settingsGuideTitle: "Как открыть настройки?",
        settingsGuideText: "Нажмите <strong>∧</strong> в правой части панели задач, найдите значок Peekom, затем дважды щёлкните или правый щелчок → «Настройки».",
        settingsGuideThumbAria: "Увеличить: где открыть настройки",
        dlFreeFreewareNote: "Бесплатная версия — freeware; Peekom Plus необязателен.",
        faq7q: "После удаления старого приложения 빼꼼 인덱스 при запуске появляются кракозябры или ошибки. Что делать?",
        faq7a:
            "<p>Если вы удалили старую версию (빼꼼 인덱스), а <strong>автозапуск при входе оставался включён</strong>, в автозагрузке Windows может остаться запись, которая пытается запустить удалённый файл и показывает <strong>искажённый текст или ошибку</strong>.</p>" +
            "<p><strong>Windows 11</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>Параметры → Приложения → Автозагрузка (или Установленные приложения → Автозагрузка)</li>" +
            "<li>Найдите <strong>빼꼼 인덱스</strong> или похожее имя</li>" +
            "<li>Отключите (<strong>Выкл.</strong>)</li>" +
            "</ol>" +
            "<p><strong>Windows 10</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> — диспетчер задач</li>" +
            "<li>Вкладка <strong>Автозагрузка</strong></li>" +
            "<li>Выберите <strong>빼꼼 인덱스</strong> → <strong>Отключить</strong></li>" +
            "</ol>" +
            "<p>Отключите запись и <strong>перезагрузите</strong> ПК. Если проблема исчезла, причина была в автозапуске. Затем установите <a href=\"/download/\">Peekom (бесплатно)</a> заново.</p>" +
            '<p class="privacy-doc__note">Заметки из старого приложения <strong>не переносятся автоматически</strong> — Peekom хранит данные в другом месте. Скопируйте нужное заранее.</p>',
        faq10q: "Где открыть настройки Peekom?",
        faq10a:
            "Правый щелчок по значку Peekom в <strong>области уведомлений</strong> → <strong>Настройки</strong>. Также можно <strong>дважды щёлкнуть</strong> по значку в трее или <strong>дважды щёлкнуть</strong> ярлык на рабочем столе (если приложение было закрыто, откроются заметка и настройки). Подробнее в <a href=\"/help/\">руководстве</a>.",
        faq11q: "Как ввести лицензионный ключ? Пример в поле не совпадает с письмом.",
        faq11a:
            "<p>Используйте <strong>полный лицензионный ключ</strong> из письма подтверждения Lemon Squeezy.</p>" +
            '<ol class="guide-step-list">' +
            "<li>После <a href=\"" + BUY + "\" target=\"_blank\" rel=\"noopener\">покупки Peekom Plus</a> скопируйте <strong>[License Key]</strong> из письма (<strong>со всеми дефисами</strong>)</li>" +
            "<li>Запустите Peekom → <strong>Настройки</strong> или <strong>экран блокировки Plus</strong> → вставьте ключ → <strong>Активировать</strong></li>" +
            "<li>Нужен интернет (корпоративная сеть — см. FAQ ниже)</li>" +
            "</ol>" +
            "<p><code>XXXX-XXXX-XXXX-XXXX</code> — только <strong>пример формата</strong>. <strong>Не</strong> вводите только 16 символов — вставьте <strong>весь ключ</strong> из письма.</p>" +
            "<p>Потеряли письмо? Войдите на <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Мои заказы Lemon Squeezy</a> с тем же email.</p>",
        faq12q: "Интернет есть, но активация не проходит: «Не удалось связаться с Lemon Squeezy».",
        faq12a:
            "<p>Даже при подключении к сети активация Plus должна достучаться до <strong>Lemon Squeezy (<code>api.lemonsqueezy.com</code>)</strong>. Корпоративный <strong>файрвол, антивирус, VPN или прокси</strong> может блокировать только этот сервер.</p>" +
            "<p><strong>Попробуйте</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>Активировать один раз в другой сети (домашний Wi‑Fi, раздача с телефона)</li>" +
            "<li>Попросить IT разрешить <strong><code>https://api.lemonsqueezy.com</code> по HTTPS (443)</strong></li>" +
            "<li>Отключить корпоративный VPN или использовать разрешённый</li>" +
            "</ul>" +
            "<p>Сообщение о <strong>лимите активации (по тарифу: Single — 1 устройство · Double — 2 · Family — 5)</strong>? <a href=\"/contact/\">Напишите нам</a> с email покупки, номером заказа и ключом.</p>" +
            "<p>Повторная загрузка установщика <strong>не поможет</strong>, если сервер по-прежнему заблокирован.</p>" +
            "<p><strong>Как это связано с возвратом</strong> — эта ошибка вызвана <strong>ограничением сети в вашем окружении</strong>, а не дефектом продукта. Если лицензия <strong>уже активирована</strong>, возврат по этой причине не предоставляется. Если она всё ещё <strong>Inactive</strong> (активировано 0 устройств) и с покупки прошло не больше 30 дней, <a href=\"/contact/\">напишите нам</a> номер заказа и опишите ситуацию — мы рассмотрим случай индивидуально согласно приведённой выше политике возврата.</p>",
        faq13q: "Peekom — это freeware? Можно ли установить на рабочий ПК?",
        faq13a:
            "<p><strong>Peekom (бесплатно)</strong> — <strong>freeware</strong>, можно пользоваться без отдельной лицензии. <strong>Peekom Plus</strong> — платная опция.</p>" +
            "<p>(Речь о <strong>типе лицензии</strong>, а не об официальной сертификации Microsoft Windows.)</p>" +
            "<p>На рабочих ПК установка и пути данных могут быть ограничены. Кроме папки программы Peekom сохраняет данные в <code>%AppData%\\Roaming\\Peekom</code>. Попросите IT разрешить:</p>" +
            '<ul class="guide-step-list">' +
            "<li>Официальный установщик: <code>Peekom-Setup.exe</code> с <a href=\"/download/\">peekom.com/download</a> (размещён на GitHub Releases)</li>" +
            "<li>Папка данных: <code>C:\\Users\\(имя)\\AppData\\Roaming\\Peekom</code></li>" +
            "<li>Активация Plus: <code>https://api.lemonsqueezy.com</code></li>" +
            "</ul>" +
            "<p>Бесплатная версия работает без интернета, но для <strong>первой активации Plus</strong> нужны подключение и доступ к <code>https://api.lemonsqueezy.com</code>.</p>" +
            "<p>Если github.com и <code>api.lemonsqueezy.com</code> оба заблокированы, уточните у IT <strong>до покупки Plus</strong>. Возврат, запрошенный после активации, если единственная причина — корпоративная сеть, не предоставляется.</p>",
        faq14q: "Заметка пропала. Можно ли восстановить?",
        faq14a:
            "<p>Peekom хранит заметки <strong>только на вашем ПК</strong>. Облака нет — мы не можем удалённо просмотреть или восстановить данные.</p>" +
            "<p><strong>Автоматического резервного копирования нет.</strong> В Peekom Plus есть <strong>Экспорт</strong> (.txt / .md / .json) и <strong>JSON-резерв/восстановление</strong>, но без предварительной копии восстановление после переустановки, смены учётки или очистки AppData затруднено.</p>" +
            "<p>Проверьте:</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Переустанавливали</strong> Peekom?</li>" +
            "<li>Вошли под <strong>другой учётной записью Windows</strong>?</li>" +
            "<li>Корпоративный антивирус очистил <strong>AppData</strong>?</li>" +
            "</ul>" +
            "<p>Рекомендуем периодически делать <strong>JSON-резерв</strong> или <strong>Экспорт</strong> в Plus.</p>",
        faq15q: "Купил Plus, но письмо с ключом не пришло.",
        faq15a:
            "<p>После оплаты Lemon Squeezy отправляет <strong>письмо с подтверждением</strong>. Проверьте:</p>" +
            '<ul class="guide-step-list">' +
            "<li>Папки <strong>спам, промо, соцсети</strong></li>" +
            "<li>Отправитель <strong>Lemon Squeezy</strong> или тема с <strong>Peekom / License</strong></li>" +
            "<li><strong>Email</strong> при оплате (рабочий vs личный)</li>" +
            "</ul>" +
            "<p>Войдите на <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Мои заказы Lemon Squeezy</a> с этим email, чтобы снова увидеть ключ.</p>" +
            "<p>Всё ещё не нашли? <a href=\"/contact/\">Напишите нам</a> с <strong>email покупки, датой оплаты и чеком</strong>.</p>"
    },
    vi: {
        settingsGuideTitle: "Mở Cài đặt ở đâu?",
        settingsGuideText: "Nhấn <strong>∧</strong> ở cuối bên phải thanh tác vụ để tìm biểu tượng Peekom, rồi nhấp đúp hoặc chuột phải → «Cài đặt».",
        settingsGuideThumbAria: "Phóng to vị trí mở Cài đặt",
        dlFreeFreewareNote: "Bản miễn phí là freeware; Peekom Plus là tùy chọn.",
        faq7q: "Sau khi gỡ app cũ 빼꼼 인덱스, khi khởi động máy xuất hiện ký tự lạ hoặc lỗi. Phải làm sao?",
        faq7a:
            "<p>Nếu bạn xóa bản cũ (빼꼼 인덱스) khi <strong>tự khởi động cùng Windows vẫn bật</strong>, mục khởi động còn sót có thể chạy file đã xóa và hiện <strong>chữ lỗi hoặc cửa sổ báo lỗi</strong>.</p>" +
            "<p><strong>Windows 11</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>Cài đặt → Ứng dụng → Khởi động (hoặc Ứng dụng đã cài → Khởi động)</li>" +
            "<li>Tìm <strong>빼꼼 인덱스</strong> hoặc tên tương tự</li>" +
            "<li>Tắt (<strong>Off</strong>)</li>" +
            "</ol>" +
            "<p><strong>Windows 10</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>Nhấn <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> mở Trình quản lý tác vụ</li>" +
            "<li>Tab <strong>Khởi động</strong></li>" +
            "<li>Chọn <strong>빼꼼 인덱스</strong> → <strong>Vô hiệu hóa</strong></li>" +
            "</ol>" +
            "<p>Tắt mục đó rồi <strong>khởi động lại</strong>. Nếu hết lỗi, nguyên nhân là mục khởi động cũ. Sau đó cài mới <a href=\"/download/\">Peekom (miễn phí)</a>.</p>" +
            '<p class="privacy-doc__note">Ghi chú từ app cũ <strong>không tự chuyển sang</strong> vì Peekom lưu ở vị trí khác. Hãy sao chép nội dung cần giữ trước khi gỡ.</p>',
        faq10q: "Mở Cài đặt Peekom ở đâu?",
        faq10a:
            "Chuột phải biểu tượng Peekom ở <strong>khay hệ thống</strong> → <strong>Cài đặt</strong>. Cũng có thể <strong>nhấp đúp</strong> biểu tượng khay hoặc <strong>nhấp đúp</strong> lối tắt trên màn hình (nếu app đang tắt, ghi chú và Cài đặt mở cùng lúc). Xem <a href=\"/help/\">hướng dẫn</a> để biết thêm.",
        faq11q: "Nhập khóa bản quyền thế nào? Ví dụ trong ô không khớp email.",
        faq11a:
            "<p>Dùng <strong>toàn bộ khóa bản quyền</strong> trong email xác nhận Lemon Squeezy.</p>" +
            '<ol class="guide-step-list">' +
            "<li>Sau khi <a href=\"" + BUY + "\" target=\"_blank\" rel=\"noopener\">mua Peekom Plus</a>, sao chép <strong>[License Key]</strong> từ email (<strong>gồm cả dấu gạch ngang</strong>)</li>" +
            "<li>Mở Peekom → <strong>Cài đặt</strong> hoặc <strong>màn hình khóa Plus</strong> → dán khóa → <strong>Kích hoạt</strong></li>" +
            "<li>Cần kết nối internet (mạng công ty: xem FAQ bên dưới)</li>" +
            "</ol>" +
            "<p><code>XXXX-XXXX-XXXX-XXXX</code> chỉ là <strong>ví dụ định dạng</strong>. <strong>Đừng</strong> chỉ nhập 16 ký tự — dán <strong>toàn bộ khóa</strong> từ email.</p>" +
            "<p>Mất email? Đăng nhập <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Đơn hàng Lemon Squeezy</a> bằng cùng địa chỉ.</p>",
        faq12q: "Có mạng nhưng kích hoạt thất bại: «Không kết nối được Lemon Squeezy».",
        faq12a:
            "<p>Dù PC online, kích hoạt Plus vẫn phải truy cập <strong>Lemon Squeezy (<code>api.lemonsqueezy.com</code>)</strong>. <strong>Tường lửa, phần mềm bảo mật, VPN hoặc proxy</strong> công ty có thể chặn riêng máy chủ này.</p>" +
            "<p><strong>Hãy thử</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>Kích hoạt một lần trên mạng khác (Wi‑Fi nhà, hotspot điện thoại)</li>" +
            "<li>Nhờ IT cho phép <strong><code>https://api.lemonsqueezy.com</code> qua HTTPS (443)</strong></li>" +
            "<li>Tắt VPN công ty hoặc dùng VPN được phép</li>" +
            "</ul>" +
            "<p>Thông báo <strong>giới hạn kích hoạt (theo gói: Single 1 thiết bị · Double 2 · Family 5)</strong>? <a href=\"/contact/\">Liên hệ</a> kèm email mua, mã đơn và khóa bản quyền.</p>" +
            "<p>Tải lại installer <strong>không</strong> sửa được nếu máy chủ vẫn bị chặn.</p>" +
            "<p><strong>Liên quan đến hoàn tiền</strong> — lỗi này đến từ <strong>hạn chế mạng trong môi trường của bạn</strong>, không phải lỗi sản phẩm. Nếu giấy phép <strong>đã được kích hoạt</strong>, yêu cầu hoàn tiền vì lý do này không thuộc diện được hoàn. Nếu vẫn ở trạng thái <strong>Inactive</strong> (0 thiết bị đã kích hoạt) và trong vòng 30 ngày kể từ ngày mua, hãy <a href=\"/contact/\">liên hệ</a> kèm mã đơn và mô tả tình huống — chúng tôi sẽ xem xét từng trường hợp theo chính sách hoàn tiền ở trên.</p>",
        faq13q: "Peekom có phải freeware không? Cài trên PC công ty được không?",
        faq13a:
            "<p><strong>Peekom (miễn phí)</strong> là <strong>freeware</strong> — dùng không cần phí bản quyền riêng. <strong>Peekom Plus</strong> là tùy chọn trả phí.</p>" +
            "<p>(Ý nói <strong>loại giấy phép</strong>, không phải chứng nhận chính thức Microsoft Windows.)</p>" +
            "<p>PC công ty có thể hạn chế cài đặt hoặc đường dẫn dữ liệu. Ngoài thư mục chương trình, Peekom lưu tại <code>%AppData%\\Roaming\\Peekom</code>. Nhờ IT cho phép:</p>" +
            '<ul class="guide-step-list">' +
            "<li>Installer chính thức: <code>Peekom-Setup.exe</code> tại <a href=\"/download/\">peekom.com/download</a> (được lưu trên GitHub Releases)</li>" +
            "<li>Thư mục dữ liệu: <code>C:\\Users\\(tên)\\AppData\\Roaming\\Peekom</code></li>" +
            "<li>Kích hoạt Plus: <code>https://api.lemonsqueezy.com</code></li>" +
            "</ul>" +
            "<p>Bản miễn phí dùng được khi không có mạng, nhưng <strong>lần kích hoạt Plus đầu tiên</strong> cần internet và truy cập được <code>https://api.lemonsqueezy.com</code>.</p>" +
            "<p>Nếu github.com và <code>api.lemonsqueezy.com</code> đều bị chặn, hãy xác nhận với IT <strong>trước khi mua Plus</strong>. Yêu cầu hoàn tiền sau khi đã kích hoạt, nếu lý do duy nhất là mạng công ty, không thuộc diện được hoàn.</p>",
        faq14q: "Ghi chú của tôi biến mất. Có khôi phục được không?",
        faq14a:
            "<p>Peekom chỉ lưu ghi chú <strong>trên PC của bạn</strong>. Không có đám mây — chúng tôi không thể xem hay khôi phục từ xa.</p>" +
            "<p><strong>Không có sao lưu tự động.</strong> Peekom Plus có <strong>Xuất</strong> (.txt / .md / .json) và <strong>sao lưu/khôi phục JSON</strong>, nhưng nếu <strong>chưa sao lưu trước</strong> thì khó khôi phục sau cài lại, đổi tài khoản hoặc dọn AppData.</p>" +
            "<p>Hãy kiểm tra:</p>" +
            '<ul class="guide-step-list">' +
            "<li>Bạn đã <strong>gỡ và cài lại</strong> Peekom?</li>" +
            "<li>Đăng nhập <strong>tài khoản Windows khác</strong>?</li>" +
            "<li>Phần mềm bảo mật công ty đã dọn <strong>AppData</strong>?</li>" +
            "</ul>" +
            "<p>Nên định kỳ <strong>sao lưu JSON</strong> hoặc <strong>Xuất</strong> bằng Plus.</p>",
        faq15q: "Đã mua Plus nhưng không nhận được email khóa bản quyền.",
        faq15a:
            "<p>Sau thanh toán, Lemon Squeezy gửi <strong>email xác nhận</strong>. Hãy kiểm tra:</p>" +
            '<ul class="guide-step-list">' +
            "<li>Thư mục <strong>spam, khuyến mãi, mạng xã hội</strong></li>" +
            "<li>Người gửi <strong>Lemon Squeezy</strong> hoặc tiêu đề có <strong>Peekom / License</strong></li>" +
            "<li><strong>Email</strong> dùng khi thanh toán (nhầm công ty/cá nhân?)</li>" +
            "</ul>" +
            "<p>Đăng nhập <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Đơn hàng Lemon Squeezy</a> bằng email đó để xem lại khóa.</p>" +
            "<p>Vẫn không thấy? <a href=\"/contact/\">Liên hệ</a> kèm <strong>email mua, thời gian thanh toán và biên lai</strong>.</p>"
    },
    th: {
        settingsGuideTitle: "เปิดการตั้งค่าที่ไหน?",
        settingsGuideText: "คลิก <strong>∧</strong> ที่ปลายขวาของแถบงานเพื่อหาไอคอน Peekom จากนั้นดับเบิลคลิกหรือคลิกขวา → «การตั้งค่า»",
        settingsGuideThumbAria: "ขยายตำแหน่งเปิดการตั้งค่า",
        dlFreeFreewareNote: "เวอร์ชันฟรีเป็น freeware Peekom Plus เป็นตัวเลือกเสริม",
        faq7q: "ถอนแอปเก่า 빼꼼 인덱스 แล้วตอนเปิดเครื่องมีตัวอักษรแปลกหรือข้อผิดพลาด ต้องทำอย่างไร?",
        faq7a:
            "<p>หากลบเวอร์ชันเก่า (빼꼼 인덱스) ขณะที่ <strong>เปิดใช้งานเริ่มต้นอัตโนมัติ</strong> รายการเริ่มต้นของ Windows อาจพยายามรันไฟล์ที่ถูกลบและแสดง <strong>ตัวอักษรเพี้ยนหรือข้อผิดพลาด</strong></p>" +
            "<p><strong>Windows 11</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>การตั้งค่า → แอป → เริ่มต้น (หรือ แอปที่ติดตั้ง → เริ่มต้น)</li>" +
            "<li>หา <strong>빼꼼 인덱스</strong> หรือชื่อที่คล้ายกัน</li>" +
            "<li>ปิด (<strong>Off</strong>)</li>" +
            "</ol>" +
            "<p><strong>Windows 10</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>กด <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> เปิดตัวจัดการงาน</li>" +
            "<li>แท็บ <strong>เริ่มต้น</strong></li>" +
            "<li>เลือก <strong>빼꼼 인덱스</strong> → <strong>ปิดใช้งาน</strong></li>" +
            "</ol>" +
            "<p>ปิดรายการแล้ว <strong>รีสตาร์ท</strong> หากปัญหาหาย สาเหตุคือการลงทะเบียนเริ่มต้น จากนั้นติดตั้ง <a href=\"/download/\">Peekom (ฟรี)</a> ใหม่</p>" +
            '<p class="privacy-doc__note">บันทึกจากแอปเก่า <strong>ไม่ย้ายอัตโนมัติ</strong> เพราะ Peekom เก็บข้อมูลคนละที่ คัดลอกสิ่งที่ต้องการก่อนลบ</p>',
        faq10q: "เปิดการตั้งค่า Peekom ที่ไหน?",
        faq10a:
            "คลิกขวาไอคอน Peekom ใน <strong>ถาดระบบ</strong> → <strong>การตั้งค่า</strong> หรือ <strong>ดับเบิลคลิก</strong> ไอคอนถาด หรือ <strong>ดับเบิลคลิก</strong> ทางลัดบนเดสก์ท็อป (หากแอปปิดอยู่ จะเปิดบันทึกและการตั้งค่าพร้อมกัน) ดู<a href=\"/help/\">คู่มือ</a>เพิ่มเติม",
        faq11q: "ใส่คีย์ใบอนุญาตอย่างไร? ตัวอย่างในช่องไม่ตรงกับอีเมล",
        faq11a:
            "<p>ใช้ <strong>คีย์ใบอนุญาตทั้งหมด</strong> จากอีเมลยืนยัน Lemon Squeezy</p>" +
            '<ol class="guide-step-list">' +
            "<li>หลัง<a href=\"" + BUY + "\" target=\"_blank\" rel=\"noopener\">ซื้อ Peekom Plus</a> คัดลอก <strong>[License Key]</strong> จากอีเมล (<strong>รวมขีดทั้งหมด</strong>)</li>" +
            "<li>เปิด Peekom → <strong>การตั้งค่า</strong> หรือ <strong>หน้าจอล็อก Plus</strong> → วางคีย์ → <strong>เปิดใช้งาน</strong></li>" +
            "<li>ต้องมีอินเทอร์เน็ต (เครือข่ายบริษัท ดู FAQ ด้านล่าง)</li>" +
            "</ol>" +
            "<p><code>XXXX-XXXX-XXXX-XXXX</code> เป็นเพียง <strong>ตัวอย่างรูปแบบ</strong> <strong>อย่า</strong>ใส่แค่ 16 ตัวอักษร — วาง <strong>คีย์ทั้งหมด</strong> จากอีเมล</p>" +
            "<p>หากอีเมลหาย เข้าสู่ระบบ <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">คำสั่งซื้อ Lemon Squeezy</a> ด้วยอีเมลเดิม</p>",
        faq12q: "มีเน็ตแต่เปิดใช้งานไม่ได้: «เชื่อมต่อ Lemon Squeezy ไม่ได้»",
        faq12a:
            "<p>แม้ PC ออนไลน์ การเปิดใช้ Plus ต้องเข้าถึง <strong>Lemon Squeezy (<code>api.lemonsqueezy.com</code>)</strong> <strong>ไฟร์วอลล์ แอนตี้ไวรัส VPN หรือพร็อกซี</strong>ของบริษัทอาจบล็อกเฉพาะเซิร์ฟเวอร์นี้</p>" +
            "<p><strong>ลองดังนี้</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>เปิดใช้ครั้งหนึ่งบนเครือข่ายอื่น (Wi‑Fi บ้าน ฮอตสปอตมือถือ)</li>" +
            "<li>ขอ IT อนุญาต <strong><code>https://api.lemonsqueezy.com</code> ผ่าน HTTPS (443)</strong></li>" +
            "<li>ปิด VPN บริษัท หรือลอง VPN ที่อนุญาต</li>" +
            "</ul>" +
            "<p>ข้อความ <strong>ขีดจำกัดการเปิดใช้ (ตามแพ็กเกจ: Single 1 เครื่อง · Double 2 เครื่อง · Family 5 เครื่อง)</strong>? <a href=\"/contact/\">ติดต่อเรา</a> พร้อมอีเมลซื้อ เลขคำสั่งซื้อ และคีย์</p>" +
            "<p>ดาวน์โหลดตัวติดตั้งใหม่ <strong>ไม่ช่วย</strong> หากเซิร์ฟเวอร์ยังถูกบล็อก</p>" +
            "<p><strong>ความเกี่ยวข้องกับการคืนเงิน</strong> — ข้อผิดพลาดนี้เกิดจาก<strong>ข้อจำกัดของเครือข่ายในสภาพแวดล้อมของคุณ</strong> ไม่ใช่ข้อบกพร่องของผลิตภัณฑ์ หากไลเซนส์<strong>เปิดใช้งานแล้ว</strong> การคืนเงินด้วยเหตุผลนี้ไม่เข้าเงื่อนไข หากยังเป็น <strong>Inactive</strong> (เปิดใช้งาน 0 เครื่อง) และอยู่ภายใน 30 วันนับจากวันซื้อ โปรด<a href=\"/contact/\">ติดต่อเรา</a> พร้อมเลขคำสั่งซื้อและรายละเอียด เราจะพิจารณาเป็นรายกรณีตามนโยบายคืนเงินด้านบน</p>",
        faq13q: "Peekom เป็น freeware ไหม? ติดตั้งบน PC บริษัทได้หรือไม่?",
        faq13a:
            "<p><strong>Peekom (ฟรี)</strong> เป็น <strong>freeware</strong> ใช้ได้โดยไม่ต้องจ่ายค่าใบอนุญาตแยก <strong>Peekom Plus</strong> เป็นตัวเลือกเสียเงิน</p>" +
            "<p>(หมายถึง<strong>ประเภทใบอนุญาต</strong> ไม่ใช่การรับรองอย่างเป็นทางการของ Microsoft Windows)</p>" +
            "<p>PC บริษัทอาจจำกัดการติดตั้งหรือพาธข้อมูล นอกโฟลเดอร์โปรแกรม Peekom เก็บที่ <code>%AppData%\\Roaming\\Peekom</code> ขอ IT อนุญาต:</p>" +
            '<ul class="guide-step-list">' +
            "<li>ตัวติดตั้งอย่างเป็นทางการ: <code>Peekom-Setup.exe</code> จาก <a href=\"/download/\">peekom.com/download</a> (โฮสต์บน GitHub Releases)</li>" +
            "<li>โฟลเดอร์ข้อมูล: <code>C:\\Users\\(ชื่อผู้ใช้)\\AppData\\Roaming\\Peekom</code></li>" +
            "<li>เปิดใช้ Plus: <code>https://api.lemonsqueezy.com</code></li>" +
            "</ul>" +
            "<p>เวอร์ชันฟรีใช้ได้โดยไม่ต้องมีอินเทอร์เน็ต แต่<strong>การเปิดใช้ Plus ครั้งแรก</strong>ต้องมีอินเทอร์เน็ตและเข้าถึง <code>https://api.lemonsqueezy.com</code> ได้</p>" +
            "<p>หาก github.com และ <code>api.lemonsqueezy.com</code> ถูกบล็อกทั้งคู่ โปรดยืนยันกับ IT <strong>ก่อนซื้อ Plus</strong> การขอคืนเงินหลังเปิดใช้งานแล้ว โดยมีเหตุผลเพียงเครือข่ายบริษัท ไม่เข้าเงื่อนไข</p>",
        faq14q: "บันทึกหายไป กู้คืนได้ไหม?",
        faq14a:
            "<p>Peekom เก็บบันทึก<strong>เฉพาะบน PC ของคุณ</strong> ไม่มีคลาวด์ — เราไม่สามารถดูหรือกู้คืนจากระยะไกล</p>" +
            "<p><strong>ไม่มีสำรองอัตโนมัติ</strong> Peekom Plus มี <strong>ส่งออก</strong> (.txt / .md / .json) และ <strong>สำรอง/กู้คืน JSON</strong> แต่หาก<strong>ยังไม่สำรอง</strong> การกู้หลังติดตั้งใหม่ เปลี่ยนบัญชี หรือล้าง AppData จะยาก</p>" +
            "<p>ตรวจสอบ:</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>ถอนแล้วติดตั้งใหม่</strong> Peekom หรือไม่</li>" +
            "<li>เข้าสู่ระบบ<strong>บัญชี Windows อื่น</strong>หรือไม่</li>" +
            "<li>ซอฟต์แวร์ความปลอดภัยบริษัทล้าง <strong>AppData</strong> หรือไม่</li>" +
            "</ul>" +
            "<p>แนะนำสำรอง <strong>JSON</strong> หรือ <strong>ส่งออก</strong> เป็นระยะด้วย Plus</p>",
        faq15q: "ซื้อ Plus แล้วแต่ไม่ได้รับอีเมลคีย์ใบอนุญาต",
        faq15a:
            "<p>หลังชำระเงิน Lemon Squeezy จะส่ง<strong>อีเมลยืนยันการซื้อ</strong> ตรวจสอบ:</p>" +
            '<ul class="guide-step-list">' +
            "<li>โฟลเดอร์<strong>สแปม โปรโมชัน หรือโซเชียล</strong></li>" +
            "<li>ผู้ส่ง <strong>Lemon Squeezy</strong> หรือหัวข้อมี <strong>Peekom / License</strong></li>" +
            "<li><strong>อีเมล</strong>ที่ใช้ชำระเงิน (สับสนงาน/ส่วนตัว?)</li>" +
            "</ul>" +
            "<p>เข้าสู่ระบบ <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">คำสั่งซื้อ Lemon Squeezy</a> ด้วยอีเมลนั้นเพื่อดูคีย์อีกครั้ง</p>" +
            "<p>ยังหาไม่เจอ? <a href=\"/contact/\">ติดต่อเรา</a> พร้อม<strong>อีเมลซื้อ เวลาชำระ และใบเสร็จ</strong></p>"
    },
    id: {
        settingsGuideTitle: "Bagaimana cara membuka Pengaturan?",
        settingsGuideText: "Klik <strong>∧</strong> di ujung kanan bilah tugas untuk menemukan ikon Peekom, lalu klik dua kali atau klik kanan → «Pengaturan».",
        settingsGuideThumbAria: "Perbesar lokasi membuka Pengaturan",
        dlFreeFreewareNote: "Versi gratis adalah freeware; Peekom Plus bersifat opsional.",
        faq7q: "Setelah menghapus app lama 빼꼼 인덱스, saat menyalakan PC muncul karakter aneh atau error. Apa yang harus dilakukan?",
        faq7a:
            "<p>Jika Anda menghapus versi lama (빼꼼 인덱스) saat <strong>jalankan saat startup masih aktif</strong>, entri startup Windows bisa mencoba menjalankan file yang sudah dihapus dan menampilkan <strong>teks rusak atau error</strong>.</p>" +
            "<p><strong>Windows 11</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>Pengaturan → Aplikasi → Startup (atau Aplikasi terpasang → Startup)</li>" +
            "<li>Cari <strong>빼꼼 인덱스</strong> atau nama serupa</li>" +
            "<li>Matikan (<strong>Off</strong>)</li>" +
            "</ol>" +
            "<p><strong>Windows 10</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>Tekan <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> untuk Task Manager</li>" +
            "<li>Tab <strong>Startup</strong></li>" +
            "<li>Pilih <strong>빼꼼 인덱스</strong> → <strong>Nonaktifkan</strong></li>" +
            "</ol>" +
            "<p>Nonaktifkan entri lalu <strong>restart</strong>. Jika masalah berhenti, penyebabnya adalah startup otomatis. Lalu pasang <a href=\"/download/\">Peekom (gratis)</a> baru.</p>" +
            '<p class="privacy-doc__note">Catatan dari app lama <strong>tidak dipindahkan otomatis</strong> karena Peekom menyimpan di lokasi berbeda. Salin yang diperlukan sebelum menghapus.</p>',
        faq10q: "Di mana saya membuka Pengaturan Peekom?",
        faq10a:
            "Klik kanan ikon Peekom di <strong>system tray</strong> → <strong>Pengaturan</strong>. Anda juga bisa <strong>klik dua kali</strong> ikon tray atau <strong>klik dua kali</strong> pintasan desktop (jika app tertutup, catatan dan Pengaturan terbuka bersamaan). Lihat <a href=\"/help/\">panduan</a> untuk detail.",
        faq11q: "Bagaimana memasukkan kunci lisensi? Contoh di kolom tidak cocok dengan email.",
        faq11a:
            "<p>Gunakan <strong>seluruh kunci lisensi</strong> dari email konfirmasi Lemon Squeezy.</p>" +
            '<ol class="guide-step-list">' +
            "<li>Setelah <a href=\"" + BUY + "\" target=\"_blank\" rel=\"noopener\">membeli Peekom Plus</a>, salin <strong>[License Key]</strong> dari email (<strong>termasuk semua tanda hubung</strong>)</li>" +
            "<li>Buka Peekom → <strong>Pengaturan</strong> atau <strong>layar kunci Plus</strong> → tempel kunci → <strong>Aktifkan</strong></li>" +
            "<li>Butuh koneksi internet (jaringan kantor: lihat FAQ di bawah)</li>" +
            "</ol>" +
            "<p><code>XXXX-XXXX-XXXX-XXXX</code> hanya <strong>contoh format</strong>. <strong>Jangan</strong> hanya memasukkan 16 karakter — tempel <strong>seluruh kunci</strong> dari email.</p>" +
            "<p>Email hilang? Masuk ke <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Pesanan Lemon Squeezy</a> dengan alamat yang sama.</p>",
        faq12q: "Internet ada tapi aktivasi gagal: «Tidak dapat menghubungi Lemon Squeezy».",
        faq12a:
            "<p>Meski PC online, aktivasi Plus harus menjangkau <strong>Lemon Squeezy (<code>api.lemonsqueezy.com</code>)</strong>. <strong>Firewall, antivirus, VPN, atau proxy</strong> perusahaan bisa memblokir server itu saja.</p>" +
            "<p><strong>Coba ini</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>Aktifkan sekali di jaringan lain (Wi‑Fi rumah, hotspot ponsel)</li>" +
            "<li>Minta IT mengizinkan <strong><code>https://api.lemonsqueezy.com</code> lewat HTTPS (443)</strong></li>" +
            "<li>Matikan VPN kantor atau coba VPN yang diizinkan</li>" +
            "</ul>" +
            "<p>Pesan <strong>batas aktivasi (per paket: Single 1 perangkat · Double 2 · Family 5)</strong>? <a href=\"/contact/\">Hubungi kami</a> dengan email pembelian, nomor pesanan, dan kunci.</p>" +
            "<p>Unduh installer lagi <strong>tidak</strong> memperbaiki jika server masih diblokir.</p>" +
            "<p><strong>Kaitannya dengan refund</strong> — error ini berasal dari <strong>pembatasan jaringan di lingkungan Anda</strong>, bukan cacat produk. Jika lisensi <strong>sudah diaktivasi</strong>, refund dengan alasan ini tidak memenuhi syarat. Jika masih <strong>Inactive</strong> (0 perangkat teraktivasi) dan belum lewat 30 hari sejak pembelian, <a href=\"/contact/\">hubungi kami</a> dengan nomor pesanan dan penjelasan situasinya — kami akan meninjau kasusnya satu per satu sesuai kebijakan refund di atas.</p>",
        faq13q: "Apakah Peekom freeware? Bisa dipasang di PC kantor?",
        faq13a:
            "<p><strong>Peekom (gratis)</strong> adalah <strong>freeware</strong> — bisa dipakai tanpa biaya lisensi terpisah. <strong>Peekom Plus</strong> opsional berbayar.</p>" +
            "<p>(Maksudnya <strong>jenis lisensi</strong>, bukan sertifikasi resmi Microsoft Windows.)</p>" +
            "<p>PC kantor bisa membatasi instalasi atau path data. Selain folder program, Peekom menyimpan di <code>%AppData%\\Roaming\\Peekom</code>. Minta IT mengizinkan:</p>" +
            '<ul class="guide-step-list">' +
            "<li>Installer resmi: <code>Peekom-Setup.exe</code> dari <a href=\"/download/\">peekom.com/download</a> (dihosting di GitHub Releases)</li>" +
            "<li>Folder data: <code>C:\\Users\\(nama)\\AppData\\Roaming\\Peekom</code></li>" +
            "<li>Aktivasi Plus: <code>https://api.lemonsqueezy.com</code></li>" +
            "</ul>" +
            "<p>Versi gratis tetap jalan tanpa internet, tetapi <strong>aktivasi Plus pertama kali</strong> butuh koneksi internet dan akses ke <code>https://api.lemonsqueezy.com</code>.</p>" +
            "<p>Kalau github.com dan <code>api.lemonsqueezy.com</code> sama-sama diblokir, pastikan dulu ke IT <strong>sebelum membeli Plus</strong>. Refund yang diminta setelah aktivasi, dengan jaringan kantor sebagai satu-satunya alasan, tidak memenuhi syarat.</p>",
        faq14q: "Catatan saya hilang. Bisa dipulihkan?",
        faq14a:
            "<p>Peekom menyimpan catatan <strong>hanya di PC Anda</strong>. Tidak ada cloud — kami tidak bisa melihat atau memulihkan dari jarak jauh.</p>" +
            "<p><strong>Tidak ada cadangan otomatis.</strong> Peekom Plus menawarkan <strong>Ekspor</strong> (.txt / .md / .json) dan <strong>cadangan/pemulihan JSON</strong>, tetapi tanpa cadangan sebelumnya, pemulihan setelah instal ulang, ganti akun, atau pembersihan AppData sulit.</p>" +
            "<p>Periksa:</p>" +
            '<ul class="guide-step-list">' +
            "<li>Apakah Anda <strong>uninstall lalu instal ulang</strong> Peekom?</li>" +
            "<li>Login ke <strong>akun Windows lain</strong>?</li>" +
            "<li>Antivirus perusahaan membersihkan <strong>AppData</strong>?</li>" +
            "</ul>" +
            "<p>Kami sarankan cadangan <strong>JSON</strong> atau <strong>Ekspor</strong> berkala dengan Plus.</p>",
        faq15q: "Sudah beli Plus tapi tidak menerima email kunci lisensi.",
        faq15a:
            "<p>Setelah pembayaran, Lemon Squeezy mengirim <strong>email konfirmasi pembelian</strong>. Periksa:</p>" +
            '<ul class="guide-step-list">' +
            "<li>Folder <strong>spam, promosi, atau sosial</strong></li>" +
            "<li>Pengirim <strong>Lemon Squeezy</strong> atau subjek berisi <strong>Peekom / License</strong></li>" +
            "<li><strong>Alamat email</strong> saat checkout (kerja vs pribadi)</li>" +
            "</ul>" +
            "<p>Masuk ke <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Pesanan Lemon Squeezy</a> dengan email itu untuk melihat kunci lagi.</p>" +
            "<p>Masih belum ketemu? <a href=\"/contact/\">Hubungi kami</a> dengan <strong>email pembelian, waktu bayar, dan kuitansi</strong>.</p>"
    },
    hi: {
        settingsGuideTitle: "सेटिंग्स कैसे खोलें?",
        settingsGuideText: "टास्कबार के दाएँ छोर पर <strong>∧</strong> पर क्लिक करके Peekom आइकन ढूँढें, फिर डबल-क्लिक करें या राइट-क्लिक → «सेटिंग्स» चुनें।",
        settingsGuideThumbAria: "सेटिंग्स खोलने की जगह बड़ा करके देखें",
        dlFreeFreewareNote: "मुफ़्त संस्करण freeware है; Peekom Plus वैकल्पिक है।",
        faq7q: "पुराना ऐप 빼꼼 인덱스 हटाने के बाद स्टार्टअप पर अजीब अक्षर या त्रुटि दिखती है। क्या करें?",
        faq7a:
            "<p>यदि पुराना संस्करण (빼꼼 인덱스) <strong>स्टार्टअप चालू</strong> रहते हुए हटाया गया, Windows स्टार्टअप में पुरानी प्रविष्टि मिटी फ़ाइल चलाने की कोशिश कर सकती है और <strong>बिगड़ा हुआ टेक्स्ट या त्रुटि</strong> दिखा सकती है।</p>" +
            "<p><strong>Windows 11</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>सेटिंग्स → ऐप्स → स्टार्टअप (या इंस्टॉल किए गए ऐप्स → स्टार्टअप)</li>" +
            "<li>सूची में <strong>빼꼼 인덱스</strong> या समान नाम ढूँढें</li>" +
            "<li><strong>बंद (Off)</strong> करें</li>" +
            "</ol>" +
            "<p><strong>Windows 10</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li><kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> से टास्क मैनेजर खोलें</li>" +
            "<li><strong>स्टार्टअप</strong> टैब</li>" +
            "<li><strong>빼꼼 인덱스</strong> चुनें → <strong>अक्षम करें</strong></li>" +
            "</ol>" +
            "<p>प्रविष्टि बंद करके <strong>रीस्टार्ट</strong> करें। समस्या रुक जाए तो कारण स्टार्टअप पंजीकरण था। फिर <a href=\"/download/\">Peekom (मुफ़्त)</a> नए सिरे से इंस्टॉल करें।</p>" +
            '<p class="privacy-doc__note">पुराने ऐप की नोट्स <strong>अपने आप नहीं जातीं</strong> क्योंकि Peekom डेटा अलग जगह रखता है। हटाने से पहले ज़रूरी सामग्री कॉपी कर लें।</p>',
        faq10q: "Peekom सेटिंग्स कहाँ खोलें?",
        faq10a:
            "<strong>सिस्टम ट्रे</strong> में Peekom आइकन पर राइट-क्लिक → <strong>सेटिंग्स</strong>। आप <strong>डबल-क्लिक</strong> भी कर सकते हैं ट्रे आइकन पर, या डेस्कटॉप शॉर्टकट <strong>डबल-क्लिक</strong> (ऐप बंद हो तो नोट और सेटिंग्स साथ खुलती हैं)। विवरण के लिए <a href=\"/help/\">गाइड</a> देखें।",
        faq11q: "लाइसेंस कुंजी कैसे दर्ज करें? फ़ील्ड का उदाहरण ईमेल से मेल नहीं खाता।",
        faq11a:
            "<p>Lemon Squeezy पुष्टि ईमेल की <strong>पूरी लाइसेंस कुंजी</strong> उपयोग करें।</p>" +
            '<ol class="guide-step-list">' +
            "<li><a href=\"" + BUY + "\" target=\"_blank\" rel=\"noopener\">Peekom Plus खरीदने</a> के बाद ईमेल से <strong>[License Key]</strong> कॉपी करें (<strong>सभी हाइफ़न सहित</strong>)</li>" +
            "<li>Peekom चलाएँ → <strong>सेटिंग्स</strong> या <strong>Plus लॉक स्क्रीन</strong> → कुंजी पेस्ट → <strong>सक्रिय करें</strong></li>" +
            "<li>इंटरनेट कनेक्शन चाहिए (कॉर्पोरेट नेटवर्क: नीचे FAQ देखें)</li>" +
            "</ol>" +
            "<p><code>XXXX-XXXX-XXXX-XXXX</code> केवल <strong>उदाहरण प्रारूप</strong> है। <strong>सिर्फ़ 16 अक्षर न डालें</strong> — ईमेल की <strong>पूरी कुंजी</strong> पेस्ट करें।</p>" +
            "<p>ईमेल खो गया? <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Lemon Squeezy My Orders</a> पर उसी पते से साइन इन करें।</p>",
        faq12q: "इंटरनेट है पर सक्रियण विफल: «Lemon Squeezy तक पहुँच नहीं सकी»।",
        faq12a:
            "<p>PC ऑनलाइन होने पर भी Plus सक्रियण को <strong>Lemon Squeezy (<code>api.lemonsqueezy.com</code>)</strong> तक पहुँच चाहिए। कंपनी <strong>फ़ायरवॉल, सुरक्षा सॉफ़्टवेयर, VPN या प्रॉक्सी</strong> सिर्फ़ इस सर्वर को रोक सकते हैं।</p>" +
            "<p><strong>यह आज़माएँ</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>दूसरे नेटवर्क पर एक बार सक्रिय करें (घर का Wi‑Fi, मोबाइल हॉटस्पॉट)</li>" +
            "<li>IT से <strong><code>https://api.lemonsqueezy.com</code> HTTPS (443)</strong> अनुमति माँगें</li>" +
            "<li>कॉर्पोरेट VPN बंद करें या अनुमत VPN से फिर कोशिश करें</li>" +
            "</ul>" +
            "<p><strong>सक्रियण सीमा (प्लान के अनुसार: Single 1 डिवाइस · Double 2 · Family 5)</strong> संदेश? <a href=\"/contact/\">संपर्क करें</a> — खरीद ईमेल, ऑर्डर नंबर और कुंजी भेजें।</p>" +
            "<p>इंस्टॉलर दोबारा डाउनलोड करने से <strong>कोई फ़ायदा नहीं</strong> अगर सर्वर अभी भी ब्लॉक है।</p>" +
            "<p><strong>रिफ़ंड से संबंध</strong> — यह त्रुटि आपके <strong>नेटवर्क परिवेश की पाबंदी</strong> से आती है, उत्पाद की खराबी से नहीं। यदि लाइसेंस <strong>पहले से सक्रिय</strong> है, तो इस कारण से रिफ़ंड पात्र नहीं है। यदि वह अभी भी <strong>Inactive</strong> है (0 सक्रिय डिवाइस) और खरीद से 30 दिन के भीतर हैं, तो ऑर्डर नंबर और स्थिति बताकर <a href=\"/contact/\">संपर्क करें</a> — हम ऊपर दी गई रिफ़ंड नीति के अनुसार हर मामले की अलग से समीक्षा करेंगे।</p>",
        faq13q: "क्या Peekom freeware है? कंपनी PC पर इंस्टॉल कर सकते हैं?",
        faq13a:
            "<p><strong>Peekom (मुफ़्त)</strong> <strong>freeware</strong> है — अलग लाइसेंस शुल्क के बिना उपयोग कर सकते हैं। <strong>Peekom Plus</strong> वैकल्पिक सशुल्क है।</p>" +
            "<p>(यह <strong>लाइसेंस प्रकार</strong> है, Microsoft Windows की आधिकारिक प्रमाणन नहीं।)</p>" +
            "<p>कंपनी PC पर इंस्टॉल या डेटा पथ प्रतिबंधित हो सकते हैं। प्रोग्राम फ़ोल्डर के अलावा Peekom <code>%AppData%\\Roaming\\Peekom</code> में सहेजता है। IT से अनुमति माँगें:</p>" +
            '<ul class="guide-step-list">' +
            "<li>आधिकारिक इंस्टॉलर: <a href=\"/download/\">peekom.com/download</a> का <code>Peekom-Setup.exe</code> (GitHub Releases पर उपलब्ध)</li>" +
            "<li>डेटा फ़ोल्डर: <code>C:\\Users\\(उपयोगकर्ता)\\AppData\\Roaming\\Peekom</code></li>" +
            "<li>Plus सक्रियण: <code>https://api.lemonsqueezy.com</code></li>" +
            "</ul>" +
            "<p>मुफ़्त संस्करण इंटरनेट के बिना भी चलता है, पर <strong>Plus के पहले सक्रियण</strong> के लिए इंटरनेट कनेक्शन और <code>https://api.lemonsqueezy.com</code> तक पहुँच ज़रूरी है।</p>" +
            "<p>अगर github.com और <code>api.lemonsqueezy.com</code> दोनों ब्लॉक हैं, तो <strong>Plus खरीदने से पहले</strong> IT से अनुमति की पुष्टि कर लें। सक्रियण के बाद, जहाँ एकमात्र कारण कंपनी का नेटवर्क हो, वहाँ रिफ़ंड पात्र नहीं है।</p>",
        faq14q: "मेरी नोट गायब हो गई। क्या वापस मिल सकती है?",
        faq14a:
            "<p>Peekom नोट्स <strong>सिर्फ़ आपके PC पर</strong> रखता है। कोई क्लाउड नहीं — हम दूर से देख या पुनर्स्थापित नहीं कर सकते।</p>" +
            "<p><strong>स्वचालित बैकअप नहीं है।</strong> Peekom Plus में <strong>निर्यात</strong> (.txt / .md / .json) और <strong>JSON बैकअप/पुनर्स्थापना</strong> है, पर <strong>पहले बैकअप न हो</strong> तो पुनर्स्थापना मुश्किल है।</p>" +
            "<p>जाँचें:</p>" +
            '<ul class="guide-step-list">' +
            "<li>क्या आपने Peekom <strong>अनइंस्टॉल करके फिर इंस्टॉल</strong> किया?</li>" +
            "<li>क्या <strong>दूसरे Windows खाते</strong> से लॉग इन हैं?</li>" +
            "<li>क्या कंपनी सुरक्षा सॉफ़्टवेयर ने <strong>AppData</strong> साफ़ किया?</li>" +
            "</ul>" +
            "<p>आगे Plus <strong>JSON बैकअप</strong> या <strong>निर्यात</strong> नियमित करने की सलाह देते हैं।</p>",
        faq15q: "Plus खरीदा पर लाइसेंस कुंजी ईमेल नहीं आया।",
        faq15a:
            "<p>भुगतान के बाद Lemon Squeezy <strong>खरीद पुष्टि ईमेल</strong> भेजता है। जाँचें:</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>स्पैम, प्रमोशन या सोशल</strong> फ़ोल्डर</li>" +
            "<li>प्रेषक <strong>Lemon Squeezy</strong> या विषय में <strong>Peekom / License</strong></li>" +
            "<li>चेकआउट पर दिया <strong>ईमेल पता</strong> (ऑफिस/निजी भ्रम?)</li>" +
            "</ul>" +
            "<p><a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">Lemon Squeezy My Orders</a> पर उस ईमेल से साइन इन करके कुंजी फिर देखें।</p>" +
            "<p>फिर भी न मिले? <a href=\"/contact/\">संपर्क करें</a> — <strong>खरीद ईमेल, भुगतान समय और रसीद</strong> भेजें।</p>"
    },
    ar: {
        settingsGuideTitle: "كيف أفتح الإعدادات؟",
        settingsGuideText: "انقر على <strong>∧</strong> في الطرف الأيمن لشريط المهام للعثور على أيقونة Peekom، ثم انقر نقرًا مزدوجًا أو انقر بزر الماوس الأيمن → «الإعدادات».",
        settingsGuideThumbAria: "تكبير مكان فتح الإعدادات",
        dlFreeFreewareNote: "الإصدار المجاني برنامج مجاني (freeware)؛ Peekom Plus اختياري.",
        faq7q: "بعد إزالة التطبيق القديم 빼꼼 인덱스، تظهر رموز غريبة أو أخطاء عند التشغيل. ماذا أفعل؟",
        faq7a:
            "<p>إذا أزلت الإصدار القديم (빼꼼 인덱스) بينما كان <strong>التشغيل التلقائي عند بدء Windows مفعّلًا</strong>، قد يبقى إدخال في بدء التشغيل يحاول تشغيل ملف محذوف ويعرض <strong>نصًا مشوّهًا أو خطأ</strong>.</p>" +
            "<p><strong>Windows 11</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>الإعدادات → التطبيقات → بدء التشغيل (أو التطبيقات المثبتة → بدء التشغيل)</li>" +
            "<li>ابحث عن <strong>빼꼼 인덱스</strong> أو اسم مشابه</li>" +
            "<li>عطّله (<strong>إيقاف</strong>)</li>" +
            "</ol>" +
            "<p><strong>Windows 10</strong></p>" +
            '<ol class="guide-step-list">' +
            "<li>اضغط <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Esc</kbd> لفتح مدير المهام</li>" +
            "<li>علامة تبويب <strong>بدء التشغيل</strong></li>" +
            "<li>اختر <strong>빼꼼 인덱스</strong> → <strong>تعطيل</strong></li>" +
            "</ol>" +
            "<p>عطّل الإدخال ثم <strong>أعد التشغيل</strong>. إذا توقفت المشكلة، فالسبب كان تسجيل بدء التشغيل. ثم ثبّت <a href=\"/download/\">Peekom (مجاني)</a> من جديد.</p>" +
            '<p class="privacy-doc__note">ملاحظات التطبيق القديم <strong>لا تُنقل تلقائيًا</strong> لأن Peekom يخزّن البيانات في مكان مختلف. انسخ ما تحتاجه قبل الإزالة.</p>',
        faq10q: "أين أفتح إعدادات Peekom؟",
        faq10a:
            "انقر بزر الماوس الأيمن على أيقونة Peekom في <strong>صينية النظام</strong> → <strong>الإعدادات</strong>. يمكنك أيضًا <strong>النقر المزدوج</strong> على أيقونة الصينية أو <strong>النقر المزدوج</strong> على اختصار سطح المكتب (إذا كان التطبيق مغلقًا، تُفتح الملاحظة والإعدادات معًا). راجع <a href=\"/help/\">الدليل</a> للتفاصيل.",
        faq11q: "كيف أُدخل مفتاح الترخيص؟ المثال في الحقل لا يطابق المفتاح في البريد.",
        faq11a:
            "<p>استخدم <strong>مفتاح الترخيص الكامل</strong> من بريد تأكيد Lemon Squeezy.</p>" +
            '<ol class="guide-step-list">' +
            "<li>بعد <a href=\"" + BUY + "\" target=\"_blank\" rel=\"noopener\">شراء Peekom Plus</a>، انسخ <strong>[License Key]</strong> من البريد (<strong>بما في ذلك الشرطات</strong>)</li>" +
            "<li>شغّل Peekom → <strong>الإعدادات</strong> أو <strong>شاشة قفل Plus</strong> → الصق المفتاح → <strong>تفعيل</strong></li>" +
            "<li>يلزم اتصال بالإنترنت (شبكة الشركة: راجع الأسئلة أدناه)</li>" +
            "</ol>" +
            "<p><code>XXXX-XXXX-XXXX-XXXX</code> مجرد <strong>مثال للتنسيق</strong>. <strong>لا</strong> تُدخل 16 حرفًا فقط — الصق <strong>المفتاح كاملًا</strong> من البريد.</p>" +
            "<p>فقدت البريد؟ سجّل الدخول إلى <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">طلبات Lemon Squeezy</a> بنفس البريد.</p>",
        faq12q: "الإنترنت يعمل لكن التفعيل يفشل: «تعذّر الاتصال بـ Lemon Squeezy».",
        faq12a:
            "<p>حتى مع اتصال الجهاز، يجب أن يصل تفعيل Plus إلى <strong>Lemon Squeezy (<code>api.lemonsqueezy.com</code>)</strong>. قد يحجب <strong>جدار الحماية أو برنامج الأمان أو VPN أو الوكيل</strong> في الشركة هذا الخادم فقط.</p>" +
            "<p><strong>جرّب التالي</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>فعّل مرة على شبكة أخرى (Wi‑Fi منزلية، نقطة اتصال الهاتف)</li>" +
            "<li>اطلب من IT السماح بـ <strong><code>https://api.lemonsqueezy.com</code> عبر HTTPS (443)</strong></li>" +
            "<li>أوقف VPN الشركة أو جرّب VPN مسموحًا</li>" +
            "</ul>" +
            "<p>رسالة <strong>حد التفعيل (حسب الخطة: Single جهاز واحد · Double جهازان · Family 5 أجهزة)</strong>؟ <a href=\"/contact/\">تواصل معنا</a> مع بريد الشراء ورقم الطلب والمفتاح.</p>" +
            "<p>إعادة تنزيل المثبّت <strong>لن</strong> تحل المشكلة إذا بقي الخادم محجوبًا.</p>" +
            "<p><strong>علاقة ذلك بالاسترداد</strong> — ينشأ هذا الخطأ عن <strong>قيود الشبكة في بيئتك</strong> وليس عن عيب في المنتج. إذا كان الترخيص <strong>مفعّلًا بالفعل</strong>، فالاسترداد لهذا السبب غير مشمول. وإذا كان لا يزال <strong>Inactive</strong> (0 أجهزة مفعّلة) وأنت داخل 30 يومًا من الشراء، <a href=\"/contact/\">فتواصل معنا</a> مع رقم الطلب ووصف الحالة وسنراجع كل حالة على حدة وفق سياسة الاسترداد أعلاه.</p>",
        faq13q: "هل Peekom برنامج مجاني (freeware)؟ هل يمكن تثبيته على جهاز الشركة؟",
        faq13a:
            "<p><strong>Peekom (مجاني)</strong> <strong>freeware</strong> — يمكنك استخدامه دون رسوم ترخيص منفصلة. <strong>Peekom Plus</strong> اختياري مدفوع.</p>" +
            "<p>(يقصد <strong>نوع الترخيص</strong>، وليس شهادة Microsoft Windows الرسمية.)</p>" +
            "<p>قد تُقيَّد التثبيت أو مسارات البيانات على أجهزة الشركة. بجانب مجلد البرنامج، يخزّن Peekom في <code>%AppData%\\Roaming\\Peekom</code>. اطلب من IT السماح بـ:</p>" +
            '<ul class="guide-step-list">' +
            "<li>المثبّت الرسمي: <code>Peekom-Setup.exe</code> من <a href=\"/download/\">peekom.com/download</a> (مستضاف على GitHub Releases)</li>" +
            "<li>مجلد البيانات: <code>C:\\Users\\(اسم المستخدم)\\AppData\\Roaming\\Peekom</code></li>" +
            "<li>تفعيل Plus: <code>https://api.lemonsqueezy.com</code></li>" +
            "</ul>" +
            "<p>الإصدار المجاني يعمل دون إنترنت، لكن <strong>التفعيل الأول لـ Plus</strong> يحتاج اتصالًا بالإنترنت والوصول إلى <code>https://api.lemonsqueezy.com</code>.</p>" +
            "<p>إذا كان github.com و<code>api.lemonsqueezy.com</code> محجوبين معًا، فتأكد من فريق IT <strong>قبل شراء Plus</strong>. أي استرداد يُطلب بعد التفعيل ويكون سببه الوحيد قيود شبكة الشركة غير مشمول.</p>",
        faq14q: "اختفت ملاحظتي. هل يمكن استعادتها؟",
        faq14a:
            "<p>يخزّن Peekom الملاحظات <strong>على جهازك فقط</strong>. لا يوجد سحابة — لا يمكننا العرض أو الاستعادة عن بُعد.</p>" +
            "<p><strong>لا يوجد نسخ احتياطي تلقائي.</strong> يوفّر Peekom Plus <strong>تصدير</strong> (.txt / .md / .json) و<strong>نسخ/استعادة JSON</strong>، لكن دون نسخ مسبق تكون الاستعادة صعبة بعد إعادة التثبيت أو تغيير الحساب أو تنظيف AppData.</p>" +
            "<p>تحقق من:</p>" +
            '<ul class="guide-step-list">' +
            "<li>هل <strong>أزلت ثم أعدت تثبيت</strong> Peekom؟</li>" +
            "<li>هل سجّلت الدخول بحساب <strong>Windows آخر</strong>؟</li>" +
            "<li>هل نظّف برنامج أمان الشركة <strong>AppData</strong>؟</li>" +
            "</ul>" +
            "<p>ننصح بنسخ <strong>JSON</strong> أو <strong>تصدير</strong> دوري مع Plus.</p>",
        faq15q: "اشتريت Plus لكن لم أستلم بريد مفتاح الترخيص.",
        faq15a:
            "<p>بعد الدفع يرسل Lemon Squeezy <strong>بريد تأكيد الشراء</strong>. تحقق من:</p>" +
            '<ul class="guide-step-list">' +
            "<li>مجلدات <strong>البريد العشوائي أو العروض أو الاجتماعي</strong></li>" +
            "<li>المرسل <strong>Lemon Squeezy</strong> أو الموضوع يحتوي <strong>Peekom / License</strong></li>" +
            "<li><strong>البريد</strong> المستخدم عند الدفع (عمل مقابل شخصي)</li>" +
            "</ul>" +
            "<p>سجّل الدخول إلى <a href=\"" + ORDER + "\" target=\"_blank\" rel=\"noopener\">طلبات Lemon Squeezy</a> بنفس البريد لعرض المفتاح مجددًا.</p>" +
            "<p>ما زلت عالقًا؟ <a href=\"/contact/\">تواصل معنا</a> مع <strong>بريد الشراء ووقت الدفع والإيصال</strong>.</p>"
    }
};
window.PeekomI18nLocales = window.PeekomI18nLocales || {};
Object.keys(EXTRA).forEach(function (lang) {
    window.PeekomI18nLocales[lang] = Object.assign({}, window.PeekomI18nLocales[lang] || {}, EXTRA[lang]);
});
})();

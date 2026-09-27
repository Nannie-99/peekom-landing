/* Peekom landing — fill missing locale strings + correct outdated FAQ (panel edges) */
(function () {
    "use strict";

    var GAPS = {
        ja: {
            reviewListTitle: "ユーザーレビュー",
            reviewListHint: "すべてのレビューを見る",
            faq8q: "Peekom はモニター右端でのみ使えますか？",
            faq8a:
                "<p>無料：<strong>右</strong>端</p>" +
                "<p>Peekom Plus：<strong>左</strong>・<strong>上</strong>端も利用できます。</p>" +
                "<p>設定 → 表示位置で変更できます。</p>",
            purchaseSuccessTitle: "Peekom Plus のご購入ありがとうございます！",
            purchaseSuccessLead: "下のライセンスキーをコピーし、Peekom アプリ内で Plus を有効化してください。",
            purchaseSuccessKeyLabel: "ライセンスキー",
            purchaseSuccessCopyBtn: "コピー",
            purchaseSuccessCopied: "コピーしました",
            purchaseSuccessStep1: "下の <strong>Windows ダウンロード</strong> ボタンで Peekom をインストールします。",
            purchaseSuccessStep2: "アプリを開き、<strong>設定（⚙）</strong> または Plus ロック画面でキーを貼り付けて <strong>認証</strong> します。",
            purchaseSuccessStep3: "認証が完了するとアプリ名が <strong>Peekom Plus</strong> になり、有料機能が解除されます。",
            purchaseSuccessDownloadBtn: "Windows 版をダウンロード",
            purchaseSuccessEmailNote: "このキーは Lemon Squeezy の購入確認メールにも記載されています。"
        },
        "zh-CN": {
            reviewListTitle: "用户评价",
            reviewListHint: "查看全部评价",
            faq8q: "Peekom 只能在显示器右边缘使用吗？",
            faq8a:
                "<p>免费版：<strong>右侧</strong>边缘</p>" +
                "<p>Peekom Plus：还可使用<strong>左侧</strong>和<strong>上方</strong>边缘。</p>" +
                "<p>可在「设置 → 显示位置」中更改。</p>",
            purchaseSuccessTitle: "感谢购买 Peekom Plus！",
            purchaseSuccessLead: "请复制下方许可证密钥，并在 Peekom 应用中激活 Plus。",
            purchaseSuccessKeyLabel: "许可证密钥",
            purchaseSuccessCopyBtn: "复制",
            purchaseSuccessCopied: "已复制",
            purchaseSuccessStep1: "使用下方的 <strong>Windows 下载</strong> 按钮安装 Peekom。",
            purchaseSuccessStep2: "打开应用，在<strong>设置（⚙）</strong>或 Plus 锁定屏幕粘贴密钥并点击<strong>激活</strong>。",
            purchaseSuccessStep3: "验证完成后，应用名称将变为 <strong>Peekom Plus</strong>，付费功能随即解锁。",
            purchaseSuccessDownloadBtn: "下载 Windows 版",
            purchaseSuccessEmailNote: "此密钥也包含在 Lemon Squeezy 购买收据邮件中。"
        },
        "zh-TW": {
            reviewListTitle: "使用者評價",
            reviewListHint: "查看全部評價",
            faq8q: "Peekom 只能在螢幕右邊緣使用嗎？",
            faq8a:
                "<p>免費版：<strong>右側</strong>邊緣</p>" +
                "<p>Peekom Plus：也可使用<strong>左側</strong>與<strong>上方</strong>邊緣。</p>" +
                "<p>可在「設定 → 顯示位置」中變更。</p>",
            purchaseSuccessTitle: "感謝購買 Peekom Plus！",
            purchaseSuccessLead: "請複製下方授權金鑰，並在 Peekom 應用程式中啟用 Plus。",
            purchaseSuccessKeyLabel: "授權金鑰",
            purchaseSuccessCopyBtn: "複製",
            purchaseSuccessCopied: "已複製",
            purchaseSuccessStep1: "使用下方的 <strong>Windows 下載</strong> 按鈕安裝 Peekom。",
            purchaseSuccessStep2: "開啟應用程式，在<strong>設定（⚙）</strong>或 Plus 鎖定畫面貼上金鑰並點選<strong>啟用</strong>。",
            purchaseSuccessStep3: "驗證完成後，應用程式名稱會變成 <strong>Peekom Plus</strong>，付費功能隨即解鎖。",
            purchaseSuccessDownloadBtn: "下載 Windows 版",
            purchaseSuccessEmailNote: "此金鑰也包含在 Lemon Squeezy 購買收據電子郵件中。"
        },
        es: {
            reviewListTitle: "Opiniones de usuarios",
            reviewListHint: "Ver todas las opiniones",
            faq8q: "¿Peekom solo se puede usar en el borde derecho del monitor?",
            faq8a:
                "<p>Gratis: borde <strong>derecho</strong>.</p>" +
                "<p>Peekom Plus: también <strong>izquierdo</strong> y <strong>superior</strong>.</p>" +
                "<p>Cámbialo en Ajustes → Lado del panel.</p>",
            purchaseSuccessTitle: "¡Gracias por comprar Peekom Plus!",
            purchaseSuccessLead: "Copia la clave de licencia abajo y activa Plus dentro de la app Peekom.",
            purchaseSuccessKeyLabel: "Clave de licencia",
            purchaseSuccessCopyBtn: "Copiar",
            purchaseSuccessCopied: "Copiado",
            purchaseSuccessStep1: "Instala Peekom con el botón <strong>Descarga para Windows</strong> de abajo.",
            purchaseSuccessStep2: "Abre la app, ve a <strong>Ajustes (⚙)</strong> o a la pantalla de bloqueo de Plus, pega la clave y pulsa <strong>Activar</strong>.",
            purchaseSuccessStep3: "Tras verificarla, la app pasa a ser <strong>Peekom Plus</strong> y se desbloquean las funciones de pago.",
            purchaseSuccessDownloadBtn: "Descargar para Windows",
            purchaseSuccessEmailNote: "Esta clave también está en el correo de recibo de Lemon Squeezy."
        },
        fr: {
            reviewListTitle: "Avis des utilisateurs",
            reviewListHint: "Voir tous les avis",
            faq8q: "Peekom ne peut-il être utilisé que sur le bord droit de l’écran ?",
            faq8a:
                "<p>Gratuit : bord <strong>droit</strong>.</p>" +
                "<p>Peekom Plus : aussi <strong>gauche</strong> et <strong>haut</strong>.</p>" +
                "<p>Modifiez-le dans Paramètres → Côté du panneau.</p>",
            purchaseSuccessTitle: "Merci d’avoir acheté Peekom Plus !",
            purchaseSuccessLead: "Copiez la clé de licence ci-dessous et activez Plus dans l’application Peekom.",
            purchaseSuccessKeyLabel: "Clé de licence",
            purchaseSuccessCopyBtn: "Copier",
            purchaseSuccessCopied: "Copié",
            purchaseSuccessStep1: "Installez Peekom via le bouton <strong>Téléchargement Windows</strong> ci-dessous.",
            purchaseSuccessStep2: "Ouvrez l’app, allez dans <strong>Paramètres (⚙)</strong> ou l’écran de verrouillage Plus, collez la clé et appuyez sur <strong>Activer</strong>.",
            purchaseSuccessStep3: "Une fois vérifiée, l’app devient <strong>Peekom Plus</strong> et les fonctions payantes se débloquent.",
            purchaseSuccessDownloadBtn: "Télécharger pour Windows",
            purchaseSuccessEmailNote: "Cette clé figure aussi dans l’e-mail de reçu Lemon Squeezy."
        },
        de: {
            reviewListTitle: "Nutzerbewertungen",
            reviewListHint: "Alle Bewertungen anzeigen",
            faq8q: "Kann Peekom nur am rechten Monitorrand verwendet werden?",
            faq8a:
                "<p>Kostenlos: <strong>rechter</strong> Rand.</p>" +
                "<p>Peekom Plus: auch <strong>links</strong> und <strong>oben</strong>.</p>" +
                "<p>Ändern Sie dies unter Einstellungen → Panel-Seite.</p>",
            purchaseSuccessTitle: "Danke für den Kauf von Peekom Plus!",
            purchaseSuccessLead: "Kopieren Sie den Lizenzschlüssel unten und aktivieren Sie Plus in der Peekom-App.",
            purchaseSuccessKeyLabel: "Lizenzschlüssel",
            purchaseSuccessCopyBtn: "Kopieren",
            purchaseSuccessCopied: "Kopiert",
            purchaseSuccessStep1: "Installieren Sie Peekom über den Button <strong>Windows-Download</strong> unten.",
            purchaseSuccessStep2: "Öffnen Sie die App, gehen Sie zu <strong>Einstellungen (⚙)</strong> oder dem Plus-Sperrbildschirm, fügen Sie den Schlüssel ein und tippen Sie auf <strong>Aktivieren</strong>.",
            purchaseSuccessStep3: "Nach der Prüfung heißt die App <strong>Peekom Plus</strong> und die Premium-Funktionen sind freigeschaltet.",
            purchaseSuccessDownloadBtn: "Für Windows herunterladen",
            purchaseSuccessEmailNote: "Dieser Schlüssel steht auch in der Lemon-Squeezy-Kaufbestätigungs-E-Mail."
        },
        pt: {
            reviewListTitle: "Avaliações de usuários",
            reviewListHint: "Ver todas as avaliações",
            faq8q: "O Peekom só pode ser usado na borda direita do monitor?",
            faq8a:
                "<p>Grátis: borda <strong>direita</strong>.</p>" +
                "<p>Peekom Plus: também <strong>esquerda</strong> e <strong>superior</strong>.</p>" +
                "<p>Altere em Configurações → Lado do painel.</p>",
            purchaseSuccessTitle: "Obrigado por comprar o Peekom Plus!",
            purchaseSuccessLead: "Copie a chave de licença abaixo e ative o Plus no app Peekom.",
            purchaseSuccessKeyLabel: "Chave de licença",
            purchaseSuccessCopyBtn: "Copiar",
            purchaseSuccessCopied: "Copiado",
            purchaseSuccessStep1: "Instale o Peekom com o botão <strong>Download para Windows</strong> abaixo.",
            purchaseSuccessStep2: "Abra o app, vá em <strong>Configurações (⚙)</strong> ou na tela de bloqueio do Plus, cole a chave e toque em <strong>Ativar</strong>.",
            purchaseSuccessStep3: "Após a verificação, o app vira <strong>Peekom Plus</strong> e os recursos pagos são liberados.",
            purchaseSuccessDownloadBtn: "Baixar para Windows",
            purchaseSuccessEmailNote: "Esta chave também está no e-mail de recibo da Lemon Squeezy."
        },
        it: {
            reviewListTitle: "Recensioni degli utenti",
            reviewListHint: "Vedi tutte le recensioni",
            faq8q: "Peekom si può usare solo sul bordo destro del monitor?",
            faq8a:
                "<p>Gratis: bordo <strong>destro</strong>.</p>" +
                "<p>Peekom Plus: anche <strong>sinistro</strong> e <strong>superiore</strong>.</p>" +
                "<p>Modificalo in Impostazioni → Lato del pannello.</p>",
            purchaseSuccessTitle: "Grazie per aver acquistato Peekom Plus!",
            purchaseSuccessLead: "Copia la chiave di licenza qui sotto e attiva Plus nell’app Peekom.",
            purchaseSuccessKeyLabel: "Chiave di licenza",
            purchaseSuccessCopyBtn: "Copia",
            purchaseSuccessCopied: "Copiato",
            purchaseSuccessStep1: "Installa Peekom con il pulsante <strong>Download per Windows</strong> qui sotto.",
            purchaseSuccessStep2: "Apri l’app, vai su <strong>Impostazioni (⚙)</strong> o sulla schermata di blocco Plus, incolla la chiave e tocca <strong>Attiva</strong>.",
            purchaseSuccessStep3: "Dopo la verifica, l’app diventa <strong>Peekom Plus</strong> e le funzioni a pagamento si sbloccano.",
            purchaseSuccessDownloadBtn: "Scarica per Windows",
            purchaseSuccessEmailNote: "Questa chiave è inclusa anche nell’email di ricevuta Lemon Squeezy."
        },
        ru: {
            reviewListTitle: "Отзывы пользователей",
            reviewListHint: "Смотреть все отзывы",
            faq8q: "Peekom можно использовать только у правого края монитора?",
            faq8a:
                "<p>Бесплатно: <strong>правый</strong> край.</p>" +
                "<p>Peekom Plus: также <strong>левый</strong> и <strong>верхний</strong>.</p>" +
                "<p>Меняется в Настройки → Сторона панели.</p>",
            purchaseSuccessTitle: "Спасибо за покупку Peekom Plus!",
            purchaseSuccessLead: "Скопируйте лицензионный ключ ниже и активируйте Plus в приложении Peekom.",
            purchaseSuccessKeyLabel: "Лицензионный ключ",
            purchaseSuccessCopyBtn: "Копировать",
            purchaseSuccessCopied: "Скопировано",
            purchaseSuccessStep1: "Установите Peekom кнопкой <strong>Скачать для Windows</strong> ниже.",
            purchaseSuccessStep2: "Откройте приложение, перейдите в <strong>Настройки (⚙)</strong> или на экран блокировки Plus, вставьте ключ и нажмите <strong>Активировать</strong>.",
            purchaseSuccessStep3: "После проверки приложение станет <strong>Peekom Plus</strong>, и платные функции откроются.",
            purchaseSuccessDownloadBtn: "Скачать для Windows",
            purchaseSuccessEmailNote: "Этот ключ также указан в письме-чеке Lemon Squeezy."
        },
        vi: {
            reviewListTitle: "Đánh giá người dùng",
            reviewListHint: "Xem tất cả đánh giá",
            faq8q: "Peekom chỉ dùng được ở cạnh phải màn hình?",
            faq8a:
                "<p>Miễn phí: cạnh <strong>phải</strong>.</p>" +
                "<p>Peekom Plus: thêm cạnh <strong>trái</strong> và <strong>trên</strong>.</p>" +
                "<p>Đổi trong Cài đặt → Vị trí panel.</p>",
            purchaseSuccessTitle: "Cảm ơn bạn đã mua Peekom Plus!",
            purchaseSuccessLead: "Sao chép khóa giấy phép bên dưới và kích hoạt Plus trong ứng dụng Peekom.",
            purchaseSuccessKeyLabel: "Khóa giấy phép",
            purchaseSuccessCopyBtn: "Sao chép",
            purchaseSuccessCopied: "Đã sao chép",
            purchaseSuccessStep1: "Cài Peekom bằng nút <strong>Tải xuống Windows</strong> bên dưới.",
            purchaseSuccessStep2: "Mở ứng dụng, vào <strong>Cài đặt (⚙)</strong> hoặc màn hình khóa Plus, dán khóa rồi nhấn <strong>Kích hoạt</strong>.",
            purchaseSuccessStep3: "Sau khi xác minh, ứng dụng trở thành <strong>Peekom Plus</strong> và các tính năng trả phí được mở khóa.",
            purchaseSuccessDownloadBtn: "Tải xuống cho Windows",
            purchaseSuccessEmailNote: "Khóa này cũng có trong email biên lai Lemon Squeezy."
        },
        th: {
            reviewListTitle: "รีวิวจากผู้ใช้",
            reviewListHint: "ดูรีวิวทั้งหมด",
            faq8q: "Peekom ใช้ได้เฉพาะขอบขวาของจอเท่านั้นหรือไม่?",
            faq8a:
                "<p>ฟรี: ขอบ<strong>ขวา</strong></p>" +
                "<p>Peekom Plus: ใช้ขอบ<strong>ซ้าย</strong>และ<strong>บน</strong>ได้ด้วย</p>" +
                "<p>เปลี่ยนได้ที่ การตั้งค่า → ตำแหน่งแผง</p>",
            purchaseSuccessTitle: "ขอบคุณที่ซื้อ Peekom Plus!",
            purchaseSuccessLead: "คัดลอกคีย์ใบอนุญาตด้านล่าง แล้วเปิดใช้ Plus ในแอป Peekom",
            purchaseSuccessKeyLabel: "คีย์ใบอนุญาต",
            purchaseSuccessCopyBtn: "คัดลอก",
            purchaseSuccessCopied: "คัดลอกแล้ว",
            purchaseSuccessStep1: "ติดตั้ง Peekom ด้วยปุ่ม <strong>ดาวน์โหลด Windows</strong> ด้านล่าง",
            purchaseSuccessStep2: "เปิดแอป ไปที่ <strong>การตั้งค่า (⚙)</strong> หรือหน้าจอล็อก Plus วางคีย์แล้วกด <strong>เปิดใช้</strong>",
            purchaseSuccessStep3: "เมื่อยืนยันแล้ว ชื่อแอปจะเป็น <strong>Peekom Plus</strong> และปลดล็อกฟีเจอร์พรีเมียม",
            purchaseSuccessDownloadBtn: "ดาวน์โหลดสำหรับ Windows",
            purchaseSuccessEmailNote: "คีย์นี้มีอยู่ในอีเมลใบเสร็จ Lemon Squeezy ด้วย"
        },
        id: {
            reviewListTitle: "Ulasan pengguna",
            reviewListHint: "Lihat semua ulasan",
            faq8q: "Apakah Peekom hanya bisa digunakan di tepi kanan monitor?",
            faq8a:
                "<p>Gratis: tepi <strong>kanan</strong>.</p>" +
                "<p>Peekom Plus: juga <strong>kiri</strong> dan <strong>atas</strong>.</p>" +
                "<p>Ubah di Pengaturan → Sisi panel.</p>",
            purchaseSuccessTitle: "Terima kasih telah membeli Peekom Plus!",
            purchaseSuccessLead: "Salin kunci lisensi di bawah dan aktifkan Plus di aplikasi Peekom.",
            purchaseSuccessKeyLabel: "Kunci lisensi",
            purchaseSuccessCopyBtn: "Salin",
            purchaseSuccessCopied: "Disalin",
            purchaseSuccessStep1: "Instal Peekom dengan tombol <strong>Unduh Windows</strong> di bawah.",
            purchaseSuccessStep2: "Buka aplikasi, buka <strong>Pengaturan (⚙)</strong> atau layar kunci Plus, tempel kunci, lalu ketuk <strong>Aktifkan</strong>.",
            purchaseSuccessStep3: "Setelah diverifikasi, aplikasi menjadi <strong>Peekom Plus</strong> dan fitur berbayar terbuka.",
            purchaseSuccessDownloadBtn: "Unduh untuk Windows",
            purchaseSuccessEmailNote: "Kunci ini juga ada di email bukti pembelian Lemon Squeezy."
        },
        hi: {
            reviewListTitle: "उपयोगकर्ता समीक्षाएँ",
            reviewListHint: "सभी समीक्षाएँ देखें",
            faq8q: "क्या Peekom केवल मॉनिटर के दाएँ किनारे पर उपयोग हो सकता है?",
            faq8a:
                "<p>मुफ़्त: <strong>दायाँ</strong> किनारा।</p>" +
                "<p>Peekom Plus: <strong>बायाँ</strong> और <strong>ऊपरी</strong> किनारा भी।</p>" +
                "<p>सेटिंग्स → पैनल साइड में बदलें।</p>",
            purchaseSuccessTitle: "Peekom Plus खरीदने के लिए धन्यवाद!",
            purchaseSuccessLead: "नीचे लाइसेंस कुंजी कॉपी करें और Peekom ऐप में Plus सक्रिय करें।",
            purchaseSuccessKeyLabel: "लाइसेंस कुंजी",
            purchaseSuccessCopyBtn: "कॉपी",
            purchaseSuccessCopied: "कॉपी हो गया",
            purchaseSuccessStep1: "नीचे <strong>Windows डाउनलोड</strong> बटन से Peekom इंस्टॉल करें।",
            purchaseSuccessStep2: "ऐप खोलें, <strong>सेटिंग्स (⚙)</strong> या Plus लॉक स्क्रीन पर जाएँ, कुंजी पेस्ट करें और <strong>सक्रिय करें</strong> दबाएँ।",
            purchaseSuccessStep3: "सत्यापन के बाद ऐप <strong>Peekom Plus</strong> बन जाता है और प्रीमियम सुविधाएँ खुल जाती हैं।",
            purchaseSuccessDownloadBtn: "Windows के लिए डाउनलोड",
            purchaseSuccessEmailNote: "यह कुंजी Lemon Squeezy रसीद ईमेल में भी शामिल है।"
        },
        ar: {
            reviewListTitle: "تقييمات المستخدمين",
            reviewListHint: "عرض كل التقييمات",
            faq8q: "هل يمكن استخدام Peekom على الحافة اليمنى للشاشة فقط؟",
            faq8a:
                "<p>المجاني: الحافة <strong>اليمنى</strong>.</p>" +
                "<p>Peekom Plus: أيضًا <strong>اليسرى</strong> و<strong>العلوية</strong>.</p>" +
                "<p>غيّرها من الإعدادات → جانب اللوحة.</p>",
            purchaseSuccessTitle: "شكرًا لشرائك Peekom Plus!",
            purchaseSuccessLead: "انسخ مفتاح الترخيص أدناه وفعّل Plus داخل تطبيق Peekom.",
            purchaseSuccessKeyLabel: "مفتاح الترخيص",
            purchaseSuccessCopyBtn: "نسخ",
            purchaseSuccessCopied: "تم النسخ",
            purchaseSuccessStep1: "ثبّت Peekom باستخدام زر <strong>تنزيل Windows</strong> أدناه.",
            purchaseSuccessStep2: "افتح التطبيق، انتقل إلى <strong>الإعدادات (⚙)</strong> أو شاشة قفل Plus، الصق المفتاح واضغط <strong>تفعيل</strong>.",
            purchaseSuccessStep3: "بعد التحقق يصبح التطبيق <strong>Peekom Plus</strong> وتُفتح الميزات المدفوعة.",
            purchaseSuccessDownloadBtn: "تنزيل لنظام Windows",
            purchaseSuccessEmailNote: "هذا المفتاح موجود أيضًا في رسالة إيصال Lemon Squeezy.",
            comparePricingExtra:
                ' · دفعة واحدة · 1–5 أجهزة (حسب الخطة) · تحديثات فرعية مشمولة · استرداد خلال 30 يومًا (<a href="mailto:hello.peekom@gmail.com">hello.peekom@gmail.com</a>)'
        }
    };

    // Shared extras that were still wrong / English in source locales
    var EXTRA_FIX = {
        ja: {
            comparePricingExtra:
                ' · 買い切り · 1〜5台（プラン別） · マイナーアップデート込み · 30日間返金 (<a href="mailto:hello.peekom@gmail.com">hello.peekom@gmail.com</a>)'
        },
        "zh-CN": {
            comparePricingExtra:
                ' · 一次性购买 · 1–5 台设备（按套餐） · 含小版本更新 · 30天退款 (<a href="mailto:hello.peekom@gmail.com">hello.peekom@gmail.com</a>)'
        },
        "zh-TW": {
            comparePricingExtra:
                ' · 一次性購買 · 1–5 台裝置（依方案） · 含小版本更新 · 30天退款 (<a href="mailto:hello.peekom@gmail.com">hello.peekom@gmail.com</a>)'
        },
        es: {
            comparePricingExtra:
                ' · pago único · 1–5 dispositivos (según plan) · actualizaciones menores incluidas · reembolso 30 días (<a href="mailto:hello.peekom@gmail.com">hello.peekom@gmail.com</a>)'
        },
        fr: {
            comparePricingExtra:
                " · paiement unique · 1–5 appareils (selon l'offre) · mises à jour mineures incluses · remboursement 30 jours (<a href=\"mailto:hello.peekom@gmail.com\">hello.peekom@gmail.com</a>)"
        },
        de: {
            comparePricingExtra:
                ' · Einmalkauf · 1–5 Geräte (je nach Plan) · kleinere Updates inklusive · 30-Tage-Rückerstattung (<a href="mailto:hello.peekom@gmail.com">hello.peekom@gmail.com</a>)'
        },
        pt: {
            comparePricingExtra:
                ' · pagamento único · 1–5 dispositivos (conforme o plano) · atualizações menores incluídas · reembolso em 30 dias (<a href="mailto:hello.peekom@gmail.com">hello.peekom@gmail.com</a>)'
        },
        it: {
            footerPrivacy: "Informativa sulla privacy",
            comparePricingExtra:
                ' · pagamento unico · 1–5 dispositivi (in base al piano) · aggiornamenti minori inclusi · rimborso 30 giorni (<a href="mailto:hello.peekom@gmail.com">hello.peekom@gmail.com</a>)'
        },
        ru: {
            comparePricingExtra:
                ' · разовая оплата · 1–5 устройств (по тарифу) · минорные обновления включены · возврат за 30 дней (<a href="mailto:hello.peekom@gmail.com">hello.peekom@gmail.com</a>)'
        },
        vi: {
            comparePricingExtra:
                ' · thanh toán một lần · 1–5 thiết bị (theo gói) · cập nhật nhỏ bao gồm · hoàn tiền 30 ngày (<a href="mailto:hello.peekom@gmail.com">hello.peekom@gmail.com</a>)'
        },
        th: {
            comparePricingExtra:
                ' · จ่ายครั้งเดียว · 1–5 อุปกรณ์ (ตามแพ็ก) · อัปเดตย่อยรวม · คืนเงิน 30 วัน (<a href="mailto:hello.peekom@gmail.com">hello.peekom@gmail.com</a>)'
        },
        id: {
            comparePricingExtra:
                ' · sekali bayar · 1–5 perangkat (sesuai paket) · pembaruan minor termasuk · refund 30 hari (<a href="mailto:hello.peekom@gmail.com">hello.peekom@gmail.com</a>)'
        },
        hi: {
            comparePricingExtra:
                ' · एक बार भुगतान · 1–5 डिवाइस (योजना अनुसार) · माइनर अपडेट शामिल · 30-दिन रिफंड (<a href="mailto:hello.peekom@gmail.com">hello.peekom@gmail.com</a>)'
        }
    };

    window.PeekomI18nLocales = window.PeekomI18nLocales || {};
    var langs = {};
    Object.keys(GAPS).forEach(function (lang) {
        langs[lang] = true;
    });
    Object.keys(EXTRA_FIX).forEach(function (lang) {
        langs[lang] = true;
    });
    Object.keys(langs).forEach(function (lang) {
        window.PeekomI18nLocales[lang] = Object.assign(
            {},
            window.PeekomI18nLocales[lang] || {},
            GAPS[lang] || {},
            EXTRA_FIX[lang] || {}
        );
    });
})();

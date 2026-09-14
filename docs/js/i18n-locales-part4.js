(function () {
"use strict";
window.PeekomI18nLocales = window.PeekomI18nLocales || {};

const PRICING = { list: 12.99, sale: 9.99 };
const CONTACT_EMAIL = "hello.peekom@gmail.com";
const LINKS = { buy: "https://peekom.lemonsqueezy.com/checkout/buy/97457035-6963-4cc0-9348-63dbb738e6a8" };

Object.assign(window.PeekomI18nLocales, {
    id: {
        navHome: "Beranda",
        navFeatures: "Fitur",
        navDownload: "Unduh",
        navFaq: "FAQ",
        navHelp: "Panduan",
        navContact: "Kontak",
        searchPlaceholder: "Cari...",
        heroTitleMain: "Peekom",
        heroTagline: "Aplikasi memo tepi layar kembali sebagai <strong>Peekom</strong>.<br>Catatan ringan dan cepat di tepi layar—tetap teratur tanpa mengganggu alur kerja atau presentasi.",
        heroPlusNote: "Setelah memasang aplikasi gratis, tingkatkan ke Peekom Plus di Pengaturan.<br><a href=\"/features/#compare\">Lihat perbandingan gratis vs Plus</a> di tabel perbandingan.",
        heroUpgradeNote: "Setelah memasang aplikasi gratis, tingkatkan ke Peekom Plus di Pengaturan.",
        heroFreeCompareNote: "<a href=\"/features/#compare\">Lihat gratis vs Plus</a>.",
        heroWinBtn: "Unduh untuk Windows",
        heroMacBtn: "Unduh untuk macOS",
        heroPlusBuyBtn: "Beli sekarang",
        heroPlusCardTitle: "Peekom Plus",
        heroPlusCardBadge: "BERBAYAR",
        heroPlusCardOs: "Windows",
        heroMacPlusCardTitle: "Peekom Plus",
        heroMacPlusCardBadge: "BERBAYAR",
        heroPlusCardMeta: "Sekali bayar · hingga 2 perangkat · seumur hidup",
        heroFreeCardTitle: "Peekom",
        heroFreeCardBadge: "GRATIS",
        heroMacFreeCardBadge: "GRATIS",
        heroWinCardMeta: "Windows 10 · 11 (64-bit)",
        heroMacFreeCardMeta: "macOS (Universal)",
        heroFreeDownloadLabel: "Unduh",
        carouselCap1: "Pegangan tepi di monitor Anda",
        carouselCap2: "Buka memo lewat klik atau pintasan",
        carouselCap3: "ICE mode · penundaan lipat otomatis",
        reviewBtnLabel: "Tulis ulasan",
        reviewEmpty: "Jadilah yang pertama membagikan pengalaman Anda!",
        reviewAnonymous: "Anonim",
        detectWin: "Terdeteksi: <strong>Windows</strong> — Windows disarankan",
        detectMac: "Terdeteksi: <strong>macOS</strong> — macOS disarankan",
        detectGeneric: "OS tidak terdeteksi — pilih manual",
        featuresTitle: "Fitur",
        featuresSub: "Ringkasan fitur Peekom.",
        compareTitle: "Peekom vs Peekom Plus",
        compareSub: "Satu aplikasi — Peekom Plus dibuka di dalam aplikasi.",
        comparePricing: '<span class="pricing-was">$' + PRICING.list.toFixed(2) + '</span> <span class="pricing-now">$' + PRICING.sale.toFixed(2) + ' USD</span> <span class="pricing-vat">(belum termasuk PPN)</span> · <span class="pricing-launch">Harga peluncuran</span> · sekali bayar · hingga 2 perangkat · pembaruan minor termasuk · refund 30 hari (<a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>)',
        guidePlusP: '1) Beli dengan harga peluncuran $9.99 di Lemon Squeezy → 2) Terima kunci lisensi lewat email → 3) Buka Peekom → masukkan kunci di UI kunci atau Pengaturan → 4) Aktivasi Peekom Plus selesai. Refund 30 hari: <a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>',
        dlSub: "Pasang Peekom sekali. Tingkatkan ke Peekom Plus di dalam aplikasi.",
        dlWin: "Peekom Setup (Windows)",
        dlMac: "Peekom Setup (macOS)",
        dlPlusHint: 'Peekom Plus: Harga normal <span class="pricing-was">$' + PRICING.list.toFixed(2) + '</span> → Peluncuran <strong>$' + PRICING.sale.toFixed(2) + '</strong> (belum termasuk PPN) · <a href="' + LINKS.buy + '" id="dlBuyLinkInner">Beli di Lemon Squeezy</a> → masukkan kunci lisensi di aplikasi',
        featureGifPending: "GIF demo segera hadir",
        compareNoLabel: "Tidak didukung",
        faqSub: "Pertanyaan umum tentang Peekom.",
        refundPolicyTitle: "Kebijakan pengembalian dana Peekom Plus",
        refundPolicyBody:
            "<p>Pembayaran dan pengembalian dana Peekom Plus diproses oleh <strong>Lemon Squeezy</strong>, Merchant of Record (penjual resmi) kami.</p>" +
            '<ul class="faq-refund-list">' +
            "<li><strong>Batas waktu pengajuan</strong> — Kami meninjau permintaan yang diajukan dalam <strong>30 hari</strong> sejak pembelian.</li>" +
            "<li><strong>Memenuhi syarat pengembalian dana</strong> — Kami mengembalikan dana untuk hal berikut:" +
            "<ul>" +
            "<li><strong>Cacat produk</strong> — aplikasi tidak bisa dijalankan atau tidak bekerja dengan benar.</li>" +
            "<li><strong>Pembayaran ganda</strong> untuk pesanan yang sama.</li>" +
            "</ul></li>" +
            "<li><strong>Tidak memenuhi syarat pengembalian dana</strong> — Kami tidak dapat mengembalikan dana untuk hal berikut:" +
            "<ul>" +
            "<li><strong>Berubah pikiran</strong> setelah membeli.</li>" +
            "<li><strong>Berpindah paket</strong> — misalnya Single ↔ Double/Family. Kami tidak menyediakan peningkatan dengan membayar selisih harga. Jika Anda membutuhkan lebih banyak perangkat, paket yang lebih tinggi harus <strong>dibeli secara terpisah</strong>; paket lama tidak otomatis dikembalikan dananya dan selisih harganya tidak diperhitungkan.</li>" +
            "<li><strong>Pengembalian dana setelah lisensi diaktifkan (Activated).</strong> \"Activated\" berarti kunci sudah berhasil diverifikasi dan terdaftar sehingga Plus dapat dipakai di perangkat tersebut. Aktivasi yang berhasil menunjukkan bahwa produknya bekerja, jadi hal ini <strong>tidak dianggap sebagai cacat produk</strong>.</li>" +
            "<li><strong>Kendala yang hanya disebabkan oleh lingkungan Anda</strong> — firewall kantor atau sekolah, perangkat lunak keamanan, jaringan tertutup tanpa internet, unduhan GitHub yang diblokir, atau <code>api.lemonsqueezy.com</code> yang diblokir. Hal ini terutama berlaku jika lisensi <strong>sudah diaktifkan</strong>.</li>" +
            "<li><strong>Ketidaknyamanan karena batas jumlah perangkat atau penggantian PC.</strong> Jika Anda perlu pindah ke perangkat lain, silakan <a href=\"/contact/\">hubungi kami</a> — kami dapat menonaktifkan perangkat lama untuk Anda.</li>" +
            "</ul></li>" +
            "</ul>" +
            "<p><strong>Sebelum membeli (aktivasi &amp; jaringan)</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li><strong>Aktivasi Plus pertama kali</strong> memerlukan koneksi internet dan akses ke <code>https://api.lemonsqueezy.com</code>.</li>" +
            "<li>Meskipun situs web biasa bisa dibuka, aktivasi tetap bisa gagal jika hanya alamat ini yang diblokir.</li>" +
            "<li>PC yang hanya dipakai pada <strong>jaringan tertutup tanpa internet sama sekali</strong> mungkin tidak bisa diaktivasi.</li>" +
            "<li>Installer disediakan melalui GitHub Releases, sehingga unduhan bisa gagal di lingkungan yang memblokir github.com.</li>" +
            "<li>Jika Anda berencana memakai Peekom hanya di PC kantor, sebaiknya periksa dulu poin-poin di atas sebelum membeli.</li>" +
            "</ul>" +
            "<p><strong>Jika lingkungan Anda membuat Plus tidak bisa dipakai — begini cara kami meninjaunya</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li>Pembelian dilakukan dalam <strong>30 hari</strong> terakhir, dan</li>" +
            "<li>lisensi berstatus <strong>Inactive (0 perangkat aktif)</strong>, atau kasusnya berupa cacat produk maupun pembayaran ganda, dan</li>" +
            "<li>Anda menghubungi kami dengan nomor pesanan beserta penjelasan singkat — lalu kami <strong>meninjau kasus tersebut satu per satu</strong>.</li>" +
            "<li>Namun jika lisensi <strong>sudah diaktifkan</strong> dan pembatasan jaringan kantor adalah satu-satunya alasan, pada dasarnya hal itu tidak memenuhi syarat pengembalian dana.</li>" +
            "</ul>" +
            "<p><strong>Lisensi Anda dan proses pengembalian dana</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li><strong>Lisensi</strong> — Setelah pengembalian dana selesai, kunci lisensi Peekom Plus Anda dinonaktifkan dan aplikasi kembali ke versi gratis saat berikutnya dijalankan dalam keadaan online.</li>" +
            '<li><strong>Cara mengajukan</strong> — Gunakan <a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">formulir kontak (atau email)</a> dan sertakan <strong>Order # (nomor pesanan)</strong> beserta penjelasan singkat. Menuliskan alamat email yang dipakai saat pembayaran membantu kami menemukan pesanan lebih cepat. Kami tidak dapat mencari pesanan hanya dari nomor telepon.</li>' +
            "<li><strong>Pemrosesan</strong> — Setelah ditinjau, kami memproses pengembalian dana dari dasbor Lemon Squeezy; dananya bisa memerlukan beberapa hari kerja untuk muncul, tergantung penerbit kartu atau metode pembayaran Anda.</li>" +
            "</ul>",
        faqR1q: "Bagaimana cara meminta pengembalian dana Peekom Plus?",
        faqR1a:
            '<p>Kirimkan <strong>Order # (nomor pesanan)</strong> Anda melalui <a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">formulir kontak (atau email)</a>.</p>' +
            "<p>Menuliskan <strong>alamat email yang dipakai saat pembayaran</strong> membantu kami menemukan pesanan Anda lebih cepat. Kami tidak dapat mencari pesanan hanya dari nomor telepon.</p>" +
            "<p>Mohon jelaskan juga apa yang terjadi (aplikasi tidak mau berjalan, pembayaran ganda, dan sebagainya).</p>" +
            "<p>Jika permintaan memenuhi syarat, kami memproses pengembalian dana dari dasbor Lemon Squeezy. Dananya bisa memerlukan beberapa hari kerja untuk muncul, tergantung penerbit kartu atau metode pembayaran Anda.</p>",
        faqR2q: "Apa saja yang memenuhi syarat pengembalian dana?",
        faqR2a:
            "<p><strong>Memenuhi syarat</strong> — pembelian dilakukan dalam <strong>30 hari</strong> terakhir dan kasusnya berupa <strong>cacat produk</strong> (aplikasi tidak bisa dijalankan atau tidak bekerja dengan benar) atau <strong>pembayaran ganda</strong> untuk pesanan yang sama.</p>" +
            "<p><strong>Tidak memenuhi syarat</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Berubah pikiran.</strong></li>" +
            "<li><strong>Berpindah paket</strong> (Single ↔ Double/Family) — tidak ada peningkatan dengan membayar selisih harga, dan paket yang lebih tinggi harus dibeli secara terpisah.</li>" +
            "<li>Pengembalian dana setelah lisensi <strong>sudah diaktifkan</strong>.</li>" +
            "<li>Kendala yang <strong>hanya disebabkan oleh lingkungan Anda</strong>, seperti firewall kantor atau sekolah, jaringan tanpa internet, atau unduhan GitHub yang diblokir — terutama jika lisensi <strong>sudah diaktifkan</strong>.</li>" +
            "<li>Ketidaknyamanan karena batas jumlah perangkat atau penggantian PC — silakan hubungi kami saja, dan kami dapat membantu memindahkan perangkat.</li>" +
            "</ul>" +
            "<p>Jika pembelian Anda masih dalam 30 hari dan lisensi berstatus <strong>Inactive (0 perangkat aktif)</strong>, hubungi kami dengan nomor pesanan beserta penjelasan, dan kami akan <strong>meninjau</strong> kasus tersebut satu per satu.</p>" +
            "<p>Pembayaran dan pengembalian dana ditangani oleh Lemon Squeezy, Merchant of Record kami.</p>",
        faqR3q: "Apa yang terjadi pada lisensi saya setelah pengembalian dana?",
        faqR3a:
            "<p>Setelah pengembalian dana selesai, kunci lisensi Peekom Plus Anda <strong>dinonaktifkan</strong>.</p>" +
            "<p>Aplikasi otomatis kembali ke <strong>versi gratis</strong> saat berikutnya dijalankan dalam keadaan online, dan fitur khusus Plus berhenti bekerja.</p>" +
            "<p>Memo Anda tetap tersimpan di PC, tetapi Anda kembali ke rangkaian fitur gratis (3 indeks dan seterusnya), jadi ekspor dulu apa pun yang Anda perlukan <strong>sebelum</strong> mengajukan pengembalian dana.</p>" +
            "<p>Sebelum mengirim permintaan, mohon pastikan Anda memang berniat berhenti menggunakan Plus.</p>",
        faqR4q: "Bisakah saya memakai Peekom Plus di balik firewall kantor atau di jaringan tanpa internet?",
        faqR4a:
            "<p>Versi gratis bisa dipakai tanpa koneksi internet.</p>" +
            "<p>Namun <strong>aktivasi Plus pertama kali</strong> memerlukan koneksi internet dan akses ke <code>https://api.lemonsqueezy.com</code> melalui HTTPS (port 443).</p>" +
            "<p>Meskipun situs web biasa bisa dibuka, aktivasi tetap bisa gagal jika hanya alamat ini yang diblokir, dan PC yang hanya dipakai pada <strong>jaringan tertutup tanpa internet sama sekali</strong> mungkin tidak bisa diaktivasi.</p>" +
            "<p>Installer-nya juga disediakan melalui GitHub Releases, sehingga unduhannya sendiri bisa gagal di lingkungan yang memblokir github.com.</p>" +
            "<p><strong>Coba langkah ini</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Lakukan aktivasi sekali di jaringan lain</strong>, misalnya Wi‑Fi rumah atau hotspot ponsel. Setelah aktivasi, Anda bisa memakai Plus tanpa internet (lisensi akan diperiksa ulang setiap kali Anda kembali online).</li>" +
            "<li>Minta tim IT mengizinkan <code>https://api.lemonsqueezy.com</code> melalui <strong>HTTPS (port 443)</strong>.</li>" +
            "<li>Jika Anda memakai VPN atau proxy perusahaan, matikan sebentar atau coba lagi di jaringan yang diizinkan.</li>" +
            "</ul>" +
            "<p><strong>Mohon periksa sebelum membeli.</strong> Jika Anda berencana memakai Peekom hanya di PC kantor, pembatasan ini bisa membuat aktivasi gagal. Permintaan pengembalian dana <strong>setelah lisensi diaktifkan</strong>, dengan jaringan kantor sebagai satu-satunya alasan, tidak memenuhi syarat.</p>",
        faqR5q: "Bisakah saya meminta pengembalian dana setelah mengaktifkan lisensi?",
        faqR5a:
            "<p>Pada dasarnya <strong>tidak — hal itu tidak memenuhi syarat pengembalian dana.</strong></p>" +
            "<p><strong>Activated</strong> (sudah diaktifkan) berarti kunci sudah berhasil diverifikasi dan terdaftar sehingga Plus dapat dipakai di perangkat tersebut. Aktivasi yang berhasil menunjukkan bahwa produknya bekerja, jadi hal ini <strong>tidak dianggap sebagai cacat produk</strong>.</p>" +
            "<p>Meski begitu, setelah aktivasi pun kami tetap mengembalikan dana untuk hal berikut:</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Cacat produk</strong> — aplikasi tidak bisa dijalankan atau tidak bekerja dengan benar.</li>" +
            "<li><strong>Pembayaran ganda</strong> untuk pesanan yang sama.</li>" +
            "</ul>" +
            "<p>Jika Anda <strong>belum</strong> mengaktifkan lisensi (status <strong>Inactive</strong>, 0 perangkat aktif) dan pembelian masih dalam 30 hari, <a href=\"/contact/\">hubungi kami</a> dengan nomor pesanan beserta penjelasan, dan kami akan meninjau kasus tersebut satu per satu.</p>" +
            "<p>Jika Anda hanya perlu pindah ke perangkat lain, kami dapat <strong>menonaktifkan perangkat lama</strong> sebagai ganti pengembalian dana.</p>",
        faq1q: "Apa bedanya versi gratis dan Plus?",
        faq1a: "Gratis mencakup 3 indeks, pemindahan pegangan grup, ICE mode, penundaan hover, pemilihan monitor, Markdown, bilah pemformatan, dan sisipan gambar. Peekom Plus (peluncuran $9.99, normal $12.99) membuka 10 slot, tema kustom, font, opasitas, ubah ukuran gambar, dan ekspor di aplikasi. Lihat <a href=\"/features/#compare\">tabel perbandingan</a>.",
        compareFreeName: "Peekom (Gratis)",
        comparePlusName: "Peekom Plus",
        compareCta: "Dapatkan Peekom Plus",
        comparePromoBanner: "Promo peluncuran · diskon {pct}% sekarang",
        helpTitle: "Panduan",
        helpSub: "Mulai menggunakan Peekom.",
        guideStartBody: "<div class=\"guide-step\"><h3>1. Instal</h3><ul class=\"guide-step-list\"><li><strong>Unduh</strong> — Dapatkan installer Windows atau macOS dari halaman <a href=\"/download/\">Unduh</a> (atau beranda).</li><li><strong>Run Peekom-Setup.exe</strong> — Klik dua kali installer dan ikuti petunjuk.</li><li><strong>SmartScreen warning</strong> — Jika jendela biru muncul, buka <a href=\"#\" onclick=\"openModal(); return false;\">panduan instal</a> dan pilih <strong>Info lebih lanjut</strong> → <strong>Jalankan tetap</strong>.</li></ul></div><div class=\"guide-step\"><h3>2. Pengaturan umum &amp; per indeks</h3><p class=\"guide-step-lead\">Klik kanan ikon baki → <strong>Pengaturan</strong>.</p><h4 class=\"guide-step-sub\">Pengaturan umum</h4><ul class=\"guide-step-list\"><li>Pilih <strong>monitor tampilan</strong> (otomatis atau tetap)</li><li><strong>Mode pemicu</strong> — <strong>Kontrol mouse</strong> / <strong>Kontrol pintasan</strong>; sesuaikan tiga pintasan (buka/tutup, indeks sebelumnya/berikutnya)</li><li><strong>Penundaan lipat otomatis</strong> pegangan (default 0,3 dtk, bisa diatur di Pengaturan)</li></ul><div class=\"guide-plus-card\"><span class=\"guide-plus-card__label\">Plus</span> Font kustom, opasitas default, cadangan/pulihkan JSON, ekspor (.txt/.md/.json), dan lainnya.</div><h4 class=\"guide-step-sub\">Pengaturan per indeks</h4><ul class=\"guide-step-list\"><li>Tambah/hapus <strong>indeks</strong> (3 gratis)</li><li>Atur <strong>judul dan warna</strong> per indeks</li><li>Pilih <strong>rasio aspek</strong> memo (1:1 / 3:4)</li></ul><div class=\"guide-plus-card\"><span class=\"guide-plus-card__label\">Plus</span> Hingga 10 slot dengan posisi pegangan independen.</div></div><div class=\"guide-step\"><h3>3. Menulis memo</h3><ul class=\"guide-step-list\"><li><strong>Reposisi</strong> — Seret pegangan tepi ke ketinggian yang Anda inginkan.</li><li><strong>Peek / ICE</strong> — Alihkan di bagian atas memo. Peek dibuka lewat klik atau pintasan; ICE tetap disematkan.</li><li><strong>Sesuaikan teks</strong> — Gunakan Markdown, bilah alat, dan gambar. Lihat <a href=\"#guide-edit\">Pengeditan</a> di bawah.</li></ul></div><div class=\"guide-step guide-step--last\"><h3>4. Tingkatkan ke Peekom Plus</h3><ul class=\"guide-step-list\"><li>Masukkan kunci lisensi lewat tombol <strong>Tingkatkan ke Plus</strong> di aplikasi (atau jendela <strong>Pengaturan</strong> saat pertama kali dibuka).</li><li>Lihat <a href=\"#guide-plus\">Aktifkan Plus</a> untuk langkah demi langkah.</li></ul></div>",
        help1t: "1. Instal",
        help1p: "Unduh dan jalankan Peekom Setup. SmartScreen mungkin muncul di Windows.",
        help2t: "2. Buka memo",
        help2p: "Klik pegangan atau, dalam mode <strong>kontrol pintasan</strong>, tekan <strong>Ctrl+Shift+M</strong> (default) untuk membuka/menutup memo <strong>terakhir dibuka</strong>.",
        help3t: "3. Ganti memo",
        help3p: "Dalam mode <strong>kontrol mouse</strong>, tekan <strong>↑ / ↓</strong> saat panel terbuka. Dalam mode <strong>kontrol pintasan</strong>, gunakan <strong>Ctrl+Shift+↑ / ↓</strong> (bahkan saat tertutup). <strong>Ctrl+1–9</strong> melompat ke indeks.",
        help4t: "4. Menulis",
        help4p: "Ketik di panel; tambahkan indeks dan judul di Pengaturan.",
        help5t: "5. ICE mode",
        help5p: "Klik chip <strong>Peek / ICE</strong> untuk menyematkan memo tanpa hover (gratis & Plus).",
        help6t: "6. Pengaturan · Plus",
        help6p: "Baki → Pengaturan → tab Umum untuk mengubah mode pemicu dan pintasan. Gunakan tombol Tingkatkan ke Plus untuk memasukkan kunci lisensi dan beralih ke branding Peekom Plus.",
        winGuideBtn: "Muncul peringatan SmartScreen biru saat instal di Windows?",
        dlTitle: "Unduh",
        dlWinNote: "Windows 10 & 11 (64-bit)",
        dlWinLabel: "Windows x64 · Windows 10 & 11 (64-bit)",
        dlMacLabel: "macOS",
        linkChangelog: "Catatan perubahan / Rilis",
        linkPrev: "Versi Sebelumnya",
        linkSmartScreen: "Panduan SmartScreen",
        faqTitle: "FAQ",
        faqGroupProductLabel: "Produk & fitur",
        faqGroupLicenseLabel: "Lisensi",
        faqGroupInstallLabel: "Instalasi",
        faqGroupTroubleshootLabel: "Pemecahan masalah",
        faq2q: "Bagaimana dukungan dual monitor bekerja?",
        faq2a: "Di Pengaturan → Monitor tampilan, pilih otomatis (ikuti mouse) atau monitor tetap. Tersedia di Gratis dan Plus.",
        faq8q: "Apakah Peekom hanya bisa dipakai di tepi kanan monitor?",
        faq8a: "Saat ini, Peekom hanya bekerja di tepi kanan. Kami berencana menambahkan dukungan untuk tepi kiri, atas, dan bawah di pembaruan mendatang.",
        faq9q: "Saya tidak sengaja menghapus Peekom Plus. Bagaimana dengan fitur berbayar?",
        faq9a:
            "<p>Menghapus aplikasi tidak membatalkan lisensi Lemon Squeezy Anda. Ikuti langkah berikut untuk memulihkan Peekom Plus dan semua fitur berbayar.</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>1. Instal ulang Peekom</strong> — Unduh versi gratis (<code>Peekom-Setup.exe</code>) dari <a href=\"/download/\">peekom.com</a> dan instal.</li>" +
            "<li><strong>2. Temukan kunci lisensi</strong> — Buka email tanda terima Lemon Squeezy saat pembelian dan salin <strong>[License Key]</strong>. Jika email hilang, masuk ke riwayat pesanan Lemon Squeezy dengan email yang sama untuk melihatnya lagi.</li>" +
            "<li><strong>3. Aktifkan ulang Plus</strong> — Buka Pengaturan (ikon roda gigi kanan atas), tempel kunci di <strong>Aktivasi Plus</strong>, lalu konfirmasi. Aplikasi berubah menjadi Peekom Plus dan memulihkan 10 slot, tema kustom, dan fitur berbayar lainnya.</li>" +
            "</ul>" +
            "<p><strong>Batas perangkat (hingga 2)</strong> — Instal ulang di PC yang sama dianggap perangkat yang sama, tanpa masalah aktivasi. Saat pindah komputer, setiap lisensi mengizinkan hingga dua perangkat (mis. PC kerja + PC pribadi).</p>",
        faq3q: "Bagaimana cara mengaktifkan Plus?",
        faq3a:
            "<p><strong>Instal dulu aplikasi gratisnya</strong>, lalu masukkan kunci lisensi yang Anda beli di Lemon Squeezy pada Pengaturan atau di layar kunci Plus. Tidak ada installer khusus Plus dan Anda tidak perlu menginstal ulang.</p>" +
            "<p><strong>Aktivasi pertama kali memerlukan koneksi internet</strong> dan akses ke <code>https://api.lemonsqueezy.com</code>. Setelah itu, Anda bisa terus memakai Plus secara offline.</p>" +
            "<p>Begitu aktivasi berhasil, lisensi tercatat sebagai <strong>Activated</strong> di perangkat tersebut. Setelah aktivasi, pengembalian dana karena berubah pikiran, berpindah paket, atau pembatasan jaringan kantor pada umumnya tidak tersedia, jadi mohon baca dulu kebijakan pengembalian dana di atas.</p>",
        faq3bq: "Bisakah satu kunci lisensi dipakai di lebih dari satu PC?",
        faq3ba: "Ya. Anda dapat memasukkan kunci lisensi 16 karakter yang sama sekali di masing-masing hingga dua PC—misalnya PC kerja dan pribadi—untuk memakai Peekom Plus di keduanya.",
        faq3cq: "Bisakah saya tetap memakai jika ganti PC kerja atau pindah pekerjaan?",
        faq3ca: "Tergantung paket Anda, Peekom Plus dapat dipakai di 1 perangkat (Single), 2 perangkat (Double), atau 5 perangkat (Family). Instal ulang di perangkat yang sama diperbolehkan. Jika perlu pindah ke perangkat baru, hubungi kami — kami akan meninjau dan membantu. Tergantung situasi, kami dapat memandu reaktivasi di perangkat baru setelah mengatur ulang perangkat yang sudah diaktifkan. Pengembalian dana yang hanya didasarkan pada batas jumlah perangkat atau penggantian PC <strong>tidak memenuhi syarat</strong>, tetapi kami dengan senang hati membantu Anda pindah perangkat dengan menonaktifkan perangkat lama — cukup hubungi kami.",
        faq3dq: "Informasi apa yang harus dikirim untuk ganti perangkat?",
        faq3da: "Agar tinjauan cepat, kirim email pembelian, nomor pesanan, kunci lisensi, dan alasan ganti perangkat. Jika semua slot paket Anda sudah terpakai (Single 1 · Double 2 · Family 5), kami mungkin perlu mengatur ulang perangkat aktif sebelum reaktivasi — cadangkan yang diperlukan sebelum menghubungi. Pengembalian dana yang hanya didasarkan pada batas jumlah perangkat atau penggantian PC <strong>tidak memenuhi syarat</strong>, tetapi kami dengan senang hati membantu Anda pindah perangkat dengan menonaktifkan perangkat lama — cukup hubungi kami.",
        faq4q: "Peringatan biru muncul saat instal di Windows.",
        faq4a: "Peringatan SmartScreen umum untuk aplikasi tanpa tanda tangan. Lihat <a href=\"#\" onclick=\"openModal(); return false;\">panduan instal</a>: [Info lebih lanjut] → [Jalankan tetap].",
        faq5q: "Versi Windows apa yang didukung?",
        faq5a: "Peekom berjalan di Windows 10 dan 11 (64-bit). Installer hanya 64-bit. Windows 7, 8, dan 8.1 tidak didukung (Electron 36).",
        faq6q: "Saya menambah indeks tetapi tidak muncul di Pengaturan.",
        faq6a: "Buka ulang Pengaturan untuk memperbarui daftar; versi terbaru menyinkronkan otomatis.",
        faq7q: "Teks aneh saat startup setelah uninstall.",
        faq7a: "Nonaktifkan entri startup Peekom yang tersisa di Task Manager, atau instal ulang lalu uninstall lagi.",
        compareColFeature: "Fitur",
        contactTitle: "Kontak",
        contactSub: "Kirim masukan Anda.",
        contactFeedbackTitle: "Kirim masukan",
        contactFeedbackDesc: "Laporan bug, ide fitur, pertanyaan lisensi",
        contactFeedbackBtn: "Buka formulir masukan",
        contactReviewTitle: "Tinggalkan ulasan",
        contactReviewDesc: "Ceritakan pengalaman Anda — bisa ditampilkan di situs kami.",
        contactReviewBtn: "Buka formulir ulasan",
        contactEmailTitle: "Hubungi lewat email",
        contactEmailDesc: "Saat perlu menghubungi kami langsung",
        contactNote: "Kami berusaha membalas dalam sekitar 10 hari kerja. Formulir Google lebih cepat daripada email, jadi gunakan formulir jika memungkinkan.",
        contactEmail: "hello.peekom@gmail.com",
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "Privasi",
        guideTitle: "Panduan Instal SmartScreen Windows",
        step1: "Saat menjalankan installer, jendela SmartScreen biru bertuliskan <b>\"Aplikasi Tidak Dikenal\"</b> mungkin muncul.",
        step2: "Klik <b>[Info lebih lanjut]</b> di bagian atas deskripsi.",
        step3: "Klik <b>[Jalankan tetap]</b> di kanan bawah untuk menyelesaikan instalasi.",
        searchNoResults: "Tidak ada hasil",
        modalClose: "Tutup",
        promoNote: "Kenaikan harga direncanakan setelah promo berakhir",
        promoSectionTitle: "Peekom Plus (Berbayar)",
        promoFreeTitle: "Peekom (Gratis)",
        promoVat: "(belum termasuk PPN)",
        promoLaunchLabel: "Harga promo\npeluncuran\nditerapkan",
        comparePricingExtra: ' · sekali bayar · hingga 2 perangkat · pembaruan minor termasuk · refund 30 hari (<a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>)',
        dlPlusHintExtra: ' · <a href="' + LINKS.buy + '" id="dlBuyLinkInner">Beli di Lemon Squeezy</a> → masukkan kunci lisensi di aplikasi',
        markdownGuideTitle: "Memo dengan Markdown",
        markdownGuideBody: "<p class=\"guide-table-intro\">Ketik seperti biasa—tekan <strong>Enter</strong> dan pemformatan diterapkan otomatis.</p><table class=\"compare-table guide-table\"><thead><tr><th>Format input</th><th>Setelah Enter</th></tr></thead><tbody><tr><td><code># Agenda rapat</code></td><td class=\"guide-md-result\"><h1 class=\"guide-md-h1\">Agenda rapat</h1></td></tr><tr><td><code>## Catatan</code></td><td class=\"guide-md-result\"><h2 class=\"guide-md-h2\">Catatan</h2></td></tr><tr><td><code>### Referensi</code></td><td class=\"guide-md-result\"><h3 class=\"guide-md-h3\">Referensi</h3></td></tr><tr><td><code>- Tugas</code></td><td class=\"guide-md-result\"><ul class=\"guide-md-ul\"><li>Tugas</li></ul></td></tr><tr><td><code>- [ ] Tugas</code></td><td class=\"guide-md-result\"><label class=\"guide-md-task\"><input type=\"checkbox\" disabled> Tugas</label></td></tr><tr><td><code>**Penting**</code></td><td class=\"guide-md-result\"><strong>Penting</strong></td></tr><tr><td><code>*Penekanan*</code></td><td class=\"guide-md-result\"><em>Penekanan</em></td></tr></tbody></table>",
        formatBarGuideTitle: "Memo dengan bilah alat",
        formatBarGuideBody: "<p class=\"guide-table-intro\">Klik tombol di atas memo—tanpa pintasan keyboard.</p><table class=\"compare-table guide-table\"><thead><tr><th>Fitur</th><th>Cara pakai</th></tr></thead><tbody><tr><td>Warna · tebal · miring · garis bawah · coret</td><td>Pilih teks, lalu klik tombol</td></tr><tr><td>Perataan (kiri/tengah/kanan/rata)</td><td>Ubah perataan paragraf</td></tr><tr><td>Daftar (bullet/kotak/bernomor/biasa)</td><td>Pilih gaya daftar dari dropdown</td></tr><tr><td>Sisipkan gambar</td><td>Gratis: 1 per memo · Plus: 5 (ubah ukuran &amp; crop di Plus)</td></tr></tbody></table>",
        guideKeysTitle: "Pintasan",
        guideKeysIntro: "Di Pengaturan → Umum → <strong>Mode pemicu</strong>, pilih <strong>Kontrol mouse</strong> atau <strong>Kontrol pintasan</strong>. Di macOS, gunakan ⌘ (Command) alih-alih Ctrl.",
        gkColAction: "Aksi",
        gkColKey: "Default",
        gkColNote: "Catatan",
        gk1a: "Buka/tutup memo",
        gk1k: "Ctrl+Shift+M",
        gk1n: "Memo terbaru. Hanya mode kontrol pintasan. Dapat disesuaikan di Pengaturan → Umum → Mode pemicu",
        gk2a: "Buka indeks sebelumnya",
        gk2k: "Ctrl+Shift+↑",
        gk2n: "Membuka indeks sebelumnya dan menampilkan panel. Mode kontrol pintasan. Dapat disesuaikan di Pengaturan",
        gk3a: "Buka indeks berikutnya",
        gk3k: "Ctrl+Shift+↓",
        gk3n: "Membuka indeks berikutnya dan menampilkan panel. Mode kontrol pintasan. Dapat disesuaikan di Pengaturan",
        gk4a: "Ganti indeks",
        gk4k: "↑ / ↓",
        gk4n: "Hanya mode kontrol mouse, panel harus terbuka",
        gk5a: "Lompat ke indeks",
        gk5k: "Ctrl+1–9 (Ctrl+0 = indeks 10)",
        gk5n: "Membuka memo indeks tersebut langsung",
        gk6a: "Ukuran font",
        gk6k: "Ctrl + roda",
        gk6n: "Di area memo. Hanya Plus",
        guidePlusTitle: "Aktifkan Plus",
        guidePlusStep1: "1. Beli Peekom Plus dengan tombol di bawah.",
        guidePlusStep2: "2. Periksa email Anda untuk kunci lisensi.",
        guidePlusStep3: "3. Buka Peekom dan masukkan kunci di jendela <strong>Pengaturan</strong> atau di <strong>Pengaturan</strong>.",
        macComingSoonTitle: "macOS",
        macComingSoonBody: "Versi macOS sedang dikembangkan.<br>Rilis diharapkan: <strong>Juli 2026</strong>.",
        guidePlusStep4: "4. Aktivasi Peekom Plus selesai.",
        guideNavStart: "Memulai",
        guideNavKeys: "Pintasan",
        guideNavEdit: "Pengeditan",
        guideNavPlus: "Aktifkan Plus",
        guideSectionEditTitle: "Pengeditan",
        versionHistoryTitle: "Riwayat Versi",
        versionColVersion: "Versi",
        versionColDate: "Tanggal Rilis",
        versionColWin: "Windows",
        versionColMac: "macOS",
        versionLatest: "Terbaru",
        versionWin: "64-bit",
        versionMac: "Universal",
        versionMacSoon: "Segera hadir",
        changelogTitle: "Catatan Perubahan",
        fz1Title: "Peek dari tepi",
        fz1Items: [
            { text: "Klik indeks untuk membuka memo dengan cepat" },
            { text: "Seret indeks untuk reposisi" },
            { text: "Alihkan Peek / ICE mode" },
            { text: "Lipat otomatis dalam mode PEEK" }
        ],
        fz2Title: "Bekerja lebih efisien",
        fz2Items: [
            { text: "Pintasan untuk membuka memo terbaru" },
            { text: "Penyematan tampilan target" },
            { text: "Dukungan sintaks Markdown" },
            { text: "Sisipkan gambar" }
        ],
        fz3Title: "Memo kustom Anda",
        fz3Items: [
            { text: "Bilah pemformatan" },
            { text: "Judul indeks kustom" },
            { text: "Aspek memo (1:1, 3:4)" },
            { text: "Warna latar default" }
        ],
        fz4Title: "Lebih jauh dengan Plus",
        fz4Items: [
            { text: "Hingga 10 indeks independen", plus: true },
            { text: "Ekspor · cadangan JSON", plus: true },
            { text: "Hingga 5 gambar per memo", plus: true },
            { text: "Ubah ukuran gambar · crop aspek", plus: true }
        ],
        fz5Title: "Kustomisasi khusus Plus",
        fz5Items: [
            { text: "Kontrol ukuran font", plus: true },
            { text: "Opasitas memo default", plus: true },
            { text: "Warna latar & teks kustom", plus: true },
            { text: "Font kustom", plus: true }
        ],
        footerLangLabel: "Bahasa",
        themeLight: "Light",
        themeDark: "Dark",
        themeAuto: "Auto",
        themeLightLabel: "Mode terang",
        themeDarkLabel: "Mode gelap",
        themeAutoLabel: "Ikuti sistem",
        themeAriaLabel: "Tema",
        pageCtaDownload: "Unduh",
        pageCtaCompare: "Lihat perbandingan",
        featuresCtaTitle: "Perluas dengan Peekom Plus",
        featuresCtaDesc: "Buka 10 slot, tema kustom, ekspor, dan lainnya di dalam aplikasi.",
        helpCtaTitle: "Mulai sekarang",
        helpCtaDesc: "Pasang Peekom dan coba memo tepi di monitor Anda.",
        faqCtaTitle: "Masih ada pertanyaan?",
        faqCtaDesc: "Lihat perbandingan fitur gratis vs Plus.",
        contactCtaTitle: "Belum mencoba Peekom?",
        contactCtaDesc: "Pasang gratis dan mulai sekarang juga.",
        downloadCtaTitle: "Butuh Plus?",
        downloadCtaDesc: "Masukkan kunci lisensi di aplikasi yang sama untuk mengaktifkan Plus."
    },
    hi: {
        navHome: "होम",
        navFeatures: "फ़ीचर",
        navDownload: "डाउनलोड",
        navFaq: "सामान्य प्रश्न",
        navHelp: "गाइड",
        navContact: "संपर्क",
        searchPlaceholder: "खोजें...",
        heroTitleMain: "Peekom",
        heroTagline: "किनारे की मेमो ऐप <strong>Peekom</strong> के रूप में लौट आई है।<br>स्क्रीन किनारे पर हल्की, तेज़ नोट्स—काम या प्रेज़ेंटेशन की लय बिना टूटे व्यवस्थित रहें।",
        heroPlusNote: "मुफ़्त ऐप इंस्टॉल करने के बाद, सेटिंग्स में Peekom Plus में अपग्रेड करें।<br><a href=\"/features/#compare\">मुफ़्त बनाम Plus</a> तुलना तालिका में देखें।",
        heroUpgradeNote: "मुफ़्त ऐप इंस्टॉल करने के बाद, सेटिंग्स में Peekom Plus में अपग्रेड करें।",
        heroFreeCompareNote: "<a href=\"/features/#compare\">मुफ़्त बनाम Plus देखें</a>।",
        heroWinBtn: "Windows के लिए डाउनलोड",
        heroMacBtn: "macOS के लिए डाउनलोड",
        heroPlusBuyBtn: "अभी खरीदें",
        heroPlusCardTitle: "Peekom Plus",
        heroPlusCardBadge: "सशुल्क",
        heroPlusCardOs: "Windows",
        heroMacPlusCardTitle: "Peekom Plus",
        heroMacPlusCardBadge: "सशुल्क",
        heroPlusCardMeta: "एक बार भुगतान · अधिकतम 2 डिवाइस · आजीवन",
        heroFreeCardTitle: "Peekom",
        heroFreeCardBadge: "मुफ़्त",
        heroMacFreeCardBadge: "मुफ़्त",
        heroWinCardMeta: "Windows 10 · 11 (64-bit)",
        heroMacFreeCardMeta: "macOS (Universal)",
        heroFreeDownloadLabel: "डाउनलोड",
        carouselCap1: "आपके मॉनिटर पर किनारे का हैंडल",
        carouselCap2: "क्लिक या शॉर्टकट से मेमो खोलें",
        carouselCap3: "ICE mode · ऑटो-कोलैप्स विलंब",
        reviewBtnLabel: "समीक्षा लिखें",
        reviewEmpty: "अनुभव साझा करने वाले पहले व्यक्ति बनें!",
        reviewAnonymous: "गुमनाम",
        detectWin: "पता चला: <strong>Windows</strong> — Windows अनुशंसित",
        detectMac: "पता चला: <strong>macOS</strong> — macOS अनुशंसित",
        detectGeneric: "OS नहीं मिला — मैन्युअल चुनें",
        featuresTitle: "फ़ीचर",
        featuresSub: "Peekom क्या करता है, एक नज़र में।",
        compareTitle: "Peekom बनाम Peekom Plus",
        compareSub: "एक ऐप — Peekom Plus ऐप के अंदर अनलॉक होता है।",
        comparePricing: '<span class="pricing-was">$' + PRICING.list.toFixed(2) + '</span> <span class="pricing-now">$' + PRICING.sale.toFixed(2) + ' USD</span> <span class="pricing-vat">(VAT अलग)</span> · <span class="pricing-launch">लॉन्च मूल्य</span> · एक बार भुगतान · अधिकतम 2 डिवाइस · माइनर अपडेट शामिल · 30-दिन रिफंड (<a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>)',
        guidePlusP: '1) Lemon Squeezy पर लॉन्च मूल्य $9.99 में खरीदें → 2) ईमेल से लाइसेंस कुंजी प्राप्त करें → 3) Peekom खोलें → लॉक UI या सेटिंग्स में कुंजी दर्ज करें → 4) Peekom Plus सक्रियण पूर्ण. 30-दिन रिफंड: <a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>',
        dlSub: "Peekom एक बार इंस्टॉल करें। ऐप के अंदर Peekom Plus में अपग्रेड करें।",
        dlWin: "Peekom Setup (Windows)",
        dlMac: "Peekom Setup (macOS)",
        dlPlusHint: 'Peekom Plus: पहले <span class="pricing-was">$' + PRICING.list.toFixed(2) + '</span> → लॉन्च <strong>$' + PRICING.sale.toFixed(2) + '</strong> (VAT अलग) · <a href="' + LINKS.buy + '" id="dlBuyLinkInner">Lemon Squeezy पर खरीदें</a> → ऐप में लाइसेंस कुंजी दर्ज करें',
        featureGifPending: "डेमो GIF जल्द आ रहा है",
        compareNoLabel: "समर्थित नहीं",
        faqSub: "Peekom के बारे में सामान्य प्रश्न।",
        refundPolicyTitle: "Peekom Plus रिफ़ंड नीति",
        refundPolicyBody:
            "<p>Peekom Plus के भुगतान और रिफ़ंड हमारे मर्चेंट ऑफ़ रिकॉर्ड (Merchant of Record) <strong>Lemon Squeezy</strong> द्वारा संसाधित किए जाते हैं।</p>" +
            '<ul class="faq-refund-list">' +
            "<li><strong>अनुरोध की अवधि</strong> — खरीद के <strong>30 दिनों</strong> के भीतर भेजे गए अनुरोधों की हम समीक्षा करते हैं।</li>" +
            "<li><strong>रिफ़ंड के योग्य</strong> — इन मामलों में हम रिफ़ंड देते हैं:" +
            "<ul>" +
            "<li><strong>उत्पाद में खराबी</strong> — ऐप शुरू नहीं होता या ठीक से काम नहीं करता।</li>" +
            "<li>एक ही ऑर्डर के लिए <strong>दोहरा भुगतान</strong>।</li>" +
            "</ul></li>" +
            "<li><strong>रिफ़ंड के योग्य नहीं</strong> — इन मामलों में हम रिफ़ंड नहीं दे सकते:" +
            "<ul>" +
            "<li>खरीद के बाद <strong>मन बदल जाना</strong>।</li>" +
            "<li><strong>प्लान बदलना</strong> — जैसे Single ↔ Double/Family। अंतर की राशि देकर अपग्रेड करने की सुविधा हम नहीं देते। अधिक उपकरण चाहिए तो ऊपर वाला प्लान <strong>अलग से खरीदना</strong> होगा; पुराने प्लान का रिफ़ंड अपने आप नहीं होता और कीमत का अंतर समायोजित नहीं किया जाता।</li>" +
            "<li><strong>लाइसेंस सक्रिय (Activated) हो जाने के बाद रिफ़ंड।</strong> \"Activated\" का अर्थ है कि कुंजी सफलतापूर्वक सत्यापित होकर दर्ज हो चुकी है और उस उपकरण पर Plus इस्तेमाल किया जा सकता है। सफल सक्रियण यह दिखाता है कि उत्पाद काम कर रहा है, इसलिए इसे <strong>उत्पाद की खराबी नहीं माना जाता</strong>।</li>" +
            "<li><strong>केवल आपके उपयोग-परिवेश से जुड़ी समस्याएँ</strong> — कंपनी या स्कूल का फ़ायरवॉल, सुरक्षा सॉफ़्टवेयर, इंटरनेट रहित बंद नेटवर्क, GitHub डाउनलोड का अवरुद्ध होना, या <code>api.lemonsqueezy.com</code> का अवरुद्ध होना। यह बात खासकर तब लागू होती है जब लाइसेंस <strong>पहले ही सक्रिय हो चुका हो</strong>।</li>" +
            "<li><strong>उपकरण सीमा या PC बदलने से होने वाली असुविधा।</strong> किसी दूसरे उपकरण पर जाना हो तो कृपया <a href=\"/contact/\">हमसे संपर्क करें</a> — हम पुराने उपकरण को निष्क्रिय कर देंगे।</li>" +
            "</ul></li>" +
            "</ul>" +
            "<p><strong>खरीदने से पहले देख लें (सक्रियण और नेटवर्क)</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li><strong>Plus के पहली बार सक्रियण</strong> के लिए इंटरनेट कनेक्शन और <code>https://api.lemonsqueezy.com</code> तक पहुँच ज़रूरी है।</li>" +
            "<li>सामान्य वेबसाइटें खुलने पर भी, अगर सिर्फ़ यही पता अवरुद्ध हो तो सक्रियण विफल हो सकता है।</li>" +
            "<li>जो PC केवल <strong>पूरी तरह इंटरनेट रहित (बंद) नेटवर्क</strong> पर चलता है, उस पर सक्रियण शायद हो ही न पाए।</li>" +
            "<li>इंस्टॉलर GitHub Releases पर रखा गया है, इसलिए जहाँ github.com अवरुद्ध है वहाँ डाउनलोड नहीं हो पाएगा।</li>" +
            "<li>अगर आप Peekom को केवल कंपनी के PC पर इस्तेमाल करना चाहते हैं, तो खरीदने से पहले ऊपर दी गई बातें जाँच लेने की सलाह है।</li>" +
            "</ul>" +
            "<p><strong>अगर आपके परिवेश के कारण Plus इस्तेमाल नहीं हो पा रहा — हम कैसे समीक्षा करते हैं</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li>खरीद पिछले <strong>30 दिनों</strong> के भीतर हुई हो, और</li>" +
            "<li>लाइसेंस <strong>Inactive (0 सक्रिय उपकरण)</strong> हो, या मामला उत्पाद की खराबी अथवा दोहरे भुगतान का हो, और</li>" +
            "<li>आप ऑर्डर नंबर तथा विवरण के साथ हमसे संपर्क करें — तब हम <strong>हर मामले की अलग-अलग समीक्षा</strong> करते हैं।</li>" +
            "<li>लेकिन अगर लाइसेंस <strong>पहले ही सक्रिय हो चुका है</strong> और कंपनी का नेटवर्क ही एकमात्र कारण है, तो सामान्यतः वह रिफ़ंड के योग्य नहीं है।</li>" +
            "</ul>" +
            "<p><strong>आपका लाइसेंस और रिफ़ंड की प्रक्रिया</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li><strong>लाइसेंस</strong> — रिफ़ंड पूरा होते ही आपकी Peekom Plus लाइसेंस कुंजी निष्क्रिय कर दी जाती है और अगली बार ऑनलाइन रहते हुए ऐप शुरू होने पर वह मुफ़्त संस्करण पर लौट आता है।</li>" +
            '<li><strong>अनुरोध कैसे करें</strong> — <a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">संपर्क फ़ॉर्म (या ईमेल)</a> का उपयोग करें और अपना <strong>Order # (ऑर्डर नंबर)</strong> तथा संक्षिप्त विवरण भेजें। भुगतान में इस्तेमाल किया गया ईमेल पता भी बताने पर ऑर्डर जल्दी मिल जाता है। केवल फ़ोन नंबर से हम ऑर्डर नहीं खोज सकते।</li>' +
            "<li><strong>प्रोसेसिंग</strong> — समीक्षा के बाद हम Lemon Squeezy डैशबोर्ड से रिफ़ंड जारी करते हैं; आपके कार्ड जारीकर्ता या भुगतान विधि के अनुसार राशि दिखने में कुछ कार्यदिवस लग सकते हैं।</li>" +
            "</ul>",
        faqR1q: "Peekom Plus रिफ़ंड का अनुरोध कैसे करूँ?",
        faqR1a:
            '<p><a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">संपर्क फ़ॉर्म (या ईमेल)</a> के ज़रिए अपना <strong>Order # (ऑर्डर नंबर)</strong> भेजें।</p>' +
            "<p><strong>भुगतान में इस्तेमाल किया गया ईमेल पता</strong> भी बताने पर हमें आपका ऑर्डर जल्दी मिल जाता है। केवल फ़ोन नंबर से हम ऑर्डर नहीं खोज सकते।</p>" +
            "<p>कृपया यह भी लिखें कि हुआ क्या है (ऐप शुरू नहीं हो रहा, दोहरा भुगतान हो गया, आदि)।</p>" +
            "<p>अनुरोध योग्य पाया गया तो हम Lemon Squeezy डैशबोर्ड से रिफ़ंड जारी करते हैं। आपके कार्ड जारीकर्ता या भुगतान विधि के अनुसार राशि दिखने में कुछ कार्यदिवस लग सकते हैं।</p>",
        faqR2q: "किन मामलों में रिफ़ंड मिलता है?",
        faqR2a:
            "<p><strong>योग्य</strong> — खरीद <strong>30 दिनों</strong> के भीतर हुई हो और मामला <strong>उत्पाद की खराबी</strong> (ऐप शुरू नहीं होता या ठीक से काम नहीं करता) या एक ही ऑर्डर के <strong>दोहरे भुगतान</strong> का हो।</p>" +
            "<p><strong>योग्य नहीं</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>मन बदल जाना।</strong></li>" +
            "<li><strong>प्लान बदलना</strong> (Single ↔ Double/Family) — अंतर की राशि देकर अपग्रेड नहीं होता, ऊपर वाला प्लान अलग से खरीदना पड़ता है।</li>" +
            "<li>लाइसेंस <strong>पहले ही सक्रिय हो जाने</strong> के बाद रिफ़ंड।</li>" +
            "<li><strong>केवल आपके उपयोग-परिवेश</strong> से जुड़ी समस्याएँ, जैसे कंपनी या स्कूल का फ़ायरवॉल, इंटरनेट रहित नेटवर्क, या GitHub डाउनलोड का अवरुद्ध होना — खासकर तब जब लाइसेंस <strong>पहले ही सक्रिय</strong> हो।</li>" +
            "<li>उपकरण सीमा या PC बदलने से होने वाली असुविधा — इसके बजाय हमसे संपर्क करें, हम उपकरण बदलने में मदद कर सकते हैं।</li>" +
            "</ul>" +
            "<p>अगर खरीद को 30 दिन नहीं हुए हैं और लाइसेंस <strong>Inactive (0 सक्रिय उपकरण)</strong> है, तो ऑर्डर नंबर और विवरण के साथ हमसे संपर्क करें — हम हर मामले की अलग-अलग <strong>समीक्षा</strong> करेंगे।</p>" +
            "<p>भुगतान और रिफ़ंड हमारे मर्चेंट ऑफ़ रिकॉर्ड Lemon Squeezy द्वारा संभाले जाते हैं।</p>",
        faqR3q: "रिफ़ंड के बाद मेरे लाइसेंस का क्या होता है?",
        faqR3a:
            "<p>रिफ़ंड पूरा होने पर आपकी Peekom Plus लाइसेंस कुंजी <strong>निष्क्रिय</strong> कर दी जाती है।</p>" +
            "<p>अगली बार ऑनलाइन रहते हुए ऐप शुरू होने पर वह अपने आप <strong>मुफ़्त संस्करण</strong> पर लौट आता है और Plus की विशेष सुविधाएँ काम करना बंद कर देती हैं।</p>" +
            "<p>आपके मेमो आपके PC पर बने रहते हैं, लेकिन आप मुफ़्त सुविधाओं (3 इंडेक्स आदि) पर लौट आते हैं, इसलिए ज़रूरी सामग्री रिफ़ंड माँगने से <strong>पहले</strong> एक्सपोर्ट कर लें।</p>" +
            "<p>अनुरोध भेजने से पहले कृपया सुनिश्चित कर लें कि आप वाकई Plus का उपयोग बंद करना चाहते हैं।</p>",
        faqR4q: "क्या कंपनी के फ़ायरवॉल या इंटरनेट रहित नेटवर्क पर Peekom Plus चल सकता है?",
        faqR4a:
            "<p>मुफ़्त संस्करण बिना इंटरनेट कनेक्शन के भी चलता है।</p>" +
            "<p>लेकिन <strong>Plus के पहली बार सक्रियण</strong> के लिए इंटरनेट कनेक्शन और HTTPS (पोर्ट 443) के ज़रिए <code>https://api.lemonsqueezy.com</code> तक पहुँच ज़रूरी है।</p>" +
            "<p>सामान्य वेबसाइटें खुलने पर भी, अगर सिर्फ़ यही पता अवरुद्ध हो तो सक्रियण विफल हो सकता है, और जो PC केवल <strong>पूरी तरह इंटरनेट रहित (बंद) नेटवर्क</strong> पर चलता है उस पर सक्रियण शायद हो ही न पाए।</p>" +
            "<p>इंस्टॉलर भी GitHub Releases पर रखा गया है, इसलिए जहाँ github.com अवरुद्ध है वहाँ डाउनलोड ही नहीं हो पाएगा।</p>" +
            "<p><strong>यह आज़माएँ</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li>घर के Wi‑Fi या मोबाइल हॉटस्पॉट जैसे <strong>किसी दूसरे नेटवर्क पर एक बार सक्रियण कर लें</strong>। सक्रियण के बाद आप बिना इंटरनेट के भी Plus इस्तेमाल कर सकते हैं (ऑनलाइन आने पर लाइसेंस की दोबारा जाँच होती है)।</li>" +
            "<li>अपनी IT टीम से <strong>HTTPS (पोर्ट 443)</strong> पर <code>https://api.lemonsqueezy.com</code> की अनुमति देने को कहें।</li>" +
            "<li>कंपनी का VPN या प्रॉक्सी इस्तेमाल कर रहे हों तो उसे थोड़ी देर बंद करें या अनुमति वाले नेटवर्क पर दोबारा कोशिश करें।</li>" +
            "</ul>" +
            "<p><strong>खरीदने से पहले कृपया जाँच लें।</strong> अगर आप Peekom को केवल कंपनी के PC पर इस्तेमाल करना चाहते हैं, तो इन पाबंदियों के कारण सक्रियण नहीं हो पाएगा। <strong>लाइसेंस सक्रिय हो जाने के बाद</strong> सिर्फ़ कंपनी नेटवर्क को कारण बताकर माँगा गया रिफ़ंड योग्य नहीं है।</p>",
        faqR5q: "लाइसेंस सक्रिय करने के बाद भी क्या रिफ़ंड मिल सकता है?",
        faqR5a:
            "<p>सामान्यतः <strong>नहीं — यह रिफ़ंड के योग्य नहीं है।</strong></p>" +
            "<p><strong>Activated (सक्रिय)</strong> का अर्थ है कि कुंजी सफलतापूर्वक सत्यापित होकर दर्ज हो चुकी है और उस उपकरण पर Plus इस्तेमाल किया जा सकता है। सफल सक्रियण यह दिखाता है कि उत्पाद काम कर रहा है, इसलिए इसे <strong>उत्पाद की खराबी नहीं माना जाता</strong>।</p>" +
            "<p>सक्रियण के बाद भी इन मामलों में हम रिफ़ंड देते हैं:</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>उत्पाद में खराबी</strong> — ऐप शुरू नहीं होता या ठीक से काम नहीं करता।</li>" +
            "<li>एक ही ऑर्डर के लिए <strong>दोहरा भुगतान</strong>।</li>" +
            "</ul>" +
            "<p>अगर आपने अभी तक सक्रियण <strong>नहीं</strong> किया है (लाइसेंस <strong>Inactive</strong>, 0 सक्रिय उपकरण) और खरीद को 30 दिन नहीं हुए हैं, तो ऑर्डर नंबर और विवरण के साथ <a href=\"/contact/\">हमसे संपर्क करें</a> — हम हर मामले की अलग-अलग समीक्षा करेंगे।</p>" +
            "<p>अगर आपको बस किसी दूसरे उपकरण पर जाना है, तो रिफ़ंड के बजाय हम <strong>पुराने उपकरण को निष्क्रिय</strong> कर सकते हैं।</p>",
        faq1q: "मुफ़्त और Plus में क्या अंतर है?",
        faq1a: "मुफ़्त में 3 इंडेक्स, ग्रुप हैंडल मूव, ICE mode, होवर विलंब, मॉनिटर चयन, Markdown, फ़ॉर्मेटिंग टूलबार और इमेज इन्सर्ट शामिल हैं। Peekom Plus (लॉन्च $9.99, सूची $12.99) 10 स्लॉट, कस्टम थीम, फ़ॉन्ट, अपारदर्शिता, इमेज रीसाइज़ और ऐप में एक्सपोर्ट अनलॉक करता है। <a href=\"/features/#compare\">तुलना तालिका</a> देखें।",
        compareFreeName: "Peekom (मुफ़्त)",
        comparePlusName: "Peekom Plus",
        compareCta: "Peekom Plus प्राप्त करें",
        comparePromoBanner: "लॉन्च प्रोमो · अभी {pct}% छूट",
        helpTitle: "गाइड",
        helpSub: "Peekom के साथ शुरुआत करें।",
        guideStartBody: "<div class=\"guide-step\"><h3>1. इंस्टॉल</h3><ul class=\"guide-step-list\"><li><strong>डाउनलोड</strong> — <a href=\"/download/\">डाउनलोड</a> पेज (या होम) से Windows या macOS इंस्टॉलर प्राप्त करें।</li><li><strong>Run Peekom-Setup.exe</strong> — इंस्टॉलर पर डबल-क्लिक करें और संकेतों का पालन करें।</li><li><strong>SmartScreen warning</strong> — यदि नीली विंडो दिखे, <a href=\"#\" onclick=\"openModal(); return false;\">इंस्टॉल गाइड</a> खोलें और <strong>अधिक जानकारी</strong> → <strong>फिर भी चलाएँ</strong> चुनें।</li></ul></div><div class=\"guide-step\"><h3>2. सामान्य और प्रति-इंडेक्स सेटिंग्स</h3><p class=\"guide-step-lead\">ट्रे आइकन पर राइट-क्लिक → <strong>सेटिंग्स</strong>।</p><h4 class=\"guide-step-sub\">सामान्य सेटिंग्स</h4><ul class=\"guide-step-list\"><li><strong>डिस्प्ले मॉनिटर</strong> चुनें (ऑटो या फ़िक्स्ड)</li><li><strong>ट्रिगर मोड</strong> — <strong>माउस नियंत्रण</strong> / <strong>शॉर्टकट नियंत्रण</strong>; तीन शॉर्टकट (टॉगल, पिछला/अगला इंडेक्स) कस्टमाइज़ करें</li><li>हैंडल <strong>ऑटो-कोलैप्स विलंब</strong> (डिफ़ॉल्ट 0.3s, सेटिंग्स में समायोज्य)</li></ul><div class=\"guide-plus-card\"><span class=\"guide-plus-card__label\">Plus</span> कस्टम फ़ॉन्ट, डिफ़ॉल्ट अपारदर्शिता, JSON बैकअप/रिस्टोर, एक्सपोर्ट (.txt/.md/.json), और अधिक।</div><h4 class=\"guide-step-sub\">प्रति-इंडेक्स सेटिंग्स</h4><ul class=\"guide-step-list\"><li><strong>इंडेक्स</strong> जोड़ें/हटाएँ (3 मुफ़्त)</li><li>प्रति इंडेक्स <strong>शीर्षक और रंग</strong> सेट करें</li><li>मेमो <strong>पहलू अनुपात</strong> चुनें (1:1 / 3:4)</li></ul><div class=\"guide-plus-card\"><span class=\"guide-plus-card__label\">Plus</span> स्वतंत्र हैंडल स्थितियों के साथ अधिकतम 10 स्लॉट।</div></div><div class=\"guide-step\"><h3>3. मेमो लिखें</h3><ul class=\"guide-step-list\"><li><strong>स्थिति बदलें</strong> — किनारे के हैंडल को पसंदीदा ऊँचाई पर खींचें।</li><li><strong>Peek / ICE</strong> — मेमो के ऊपर टॉगल करें। Peek क्लिक या शॉर्टकट से खुलता है; ICE पिन रहता है।</li><li><strong>टेक्स्ट कस्टमाइज़ करें</strong> — Markdown, टूलबार और इमेज का उपयोग करें। नीचे <a href=\"#guide-edit\">संपादन</a> देखें।</li></ul></div><div class=\"guide-step guide-step--last\"><h3>4. Peekom Plus में अपग्रेड</h3><ul class=\"guide-step-list\"><li>ऐप में <strong>Plus में अपग्रेड</strong> बटन (या पहली बार लॉन्च पर <strong>सेटिंग्स</strong> विंडो) से लाइसेंस कुंजी दर्ज करें।</li><li>चरण-दर-चरण के लिए <a href=\"#guide-plus\">Plus सक्रिय करें</a> देखें।</li></ul></div>",
        help1t: "1. इंस्टॉल",
        help1p: "Peekom Setup डाउनलोड करें और चलाएँ। Windows पर SmartScreen दिख सकता है।",
        help2t: "2. मेमो खोलें",
        help2p: "हैंडल क्लिक करें या, <strong>शॉर्टकट नियंत्रण</strong> मोड में, <strong>सबसे हाल में खुला</strong> मेमो टॉगल करने के लिए <strong>Ctrl+Shift+M</strong> (डिफ़ॉल्ट) दबाएँ।",
        help3t: "3. मेमो बदलें",
        help3p: "<strong>माउस नियंत्रण</strong> मोड में, पैनल खुला होने पर <strong>↑ / ↓</strong> दबाएँ। <strong>शॉर्टकट नियंत्रण</strong> मोड में, <strong>Ctrl+Shift+↑ / ↓</strong> उपयोग करें (बंद होने पर भी)। <strong>Ctrl+1–9</strong> इंडेक्स पर जाता है।",
        help4t: "4. लिखें",
        help4p: "पैनल में टाइप करें; सेटिंग्स में इंडेक्स और शीर्षक जोड़ें।",
        help5t: "5. ICE mode",
        help5p: "होवर के बिना मेमो पिन करने के लिए <strong>Peek / ICE</strong> चिप क्लिक करें (मुफ़्त और Plus)।",
        help6t: "6. सेटिंग्स · Plus",
        help6p: "ट्रे → सेटिंग्स → सामान्य टैब से ट्रिगर मोड और शॉर्टकट बदलें। Plus में अपग्रेड बटन से लाइसेंस कुंजी दर्ज करें और Peekom Plus ब्रांडिंग पर स्विच करें।",
        winGuideBtn: "Windows पर इंस्टॉल करते समय नीली SmartScreen चेतावनी दिखती है?",
        dlTitle: "डाउनलोड",
        dlWinNote: "Windows 10 और 11 (64-bit)",
        dlWinLabel: "Windows x64 · Windows 10 और 11 (64-bit)",
        dlMacLabel: "macOS",
        linkChangelog: "चेंजलॉग / रिलीज़",
        linkPrev: "पिछले संस्करण",
        linkSmartScreen: "SmartScreen गाइड",
        faqTitle: "सामान्य प्रश्न",
        faqGroupProductLabel: "उत्पाद और सुविधाएँ",
        faqGroupLicenseLabel: "लाइसेंस",
        faqGroupInstallLabel: "इंस्टॉलेशन",
        faqGroupTroubleshootLabel: "समस्या निवारण",
        faq2q: "डुअल मॉनिटर समर्थन कैसे काम करता है?",
        faq2a: "सेटिंग्स → डिस्प्ले मॉनिटर में, ऑटो (माउस का अनुसरण) या फ़िक्स्ड मॉनिटर चुनें। मुफ़्त और Plus दोनों में उपलब्ध।",
        faq8q: "क्या Peekom केवल मॉनिटर के दाएँ किनारे पर उपयोग किया जा सकता है?",
        faq8a: "वर्तमान में, Peekom केवल दाएँ किनारे पर काम करता है। हम भविष्य के अपडेट में बाएँ, ऊपर और नीचे किनारों का समर्थन जोड़ने की योजना बना रहे हैं।",
        faq9q: "मैंने गलती से Peekom Plus हटा दिया। भुगतान वाली सुविधाओं का क्या होगा?",
        faq9a:
            "<p>ऐप हटाने से आपका Lemon Squeezy लाइसेंस रद्द नहीं होता। Peekom Plus और सभी भुगतान सुविधाएँ पुनर्स्थापित करने के लिए ये चरण अपनाएँ।</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>1. Peekom पुनः इंस्टॉल करें</strong> — <a href=\"/download/\">peekom.com</a> से मुफ़्त संस्करण (<code>Peekom-Setup.exe</code>) डाउनलोड करके इंस्टॉल करें।</li>" +
            "<li><strong>2. लाइसेंस कुंजी खोजें</strong> — खरीद पर Lemon Squeezy की रसीद ईमेल खोलें और <strong>[License Key]</strong> कॉपी करें। ईमेल खो गई हो तो उसी ईमेल से Lemon Squeezy ऑर्डर इतिहास में लॉग इन करके देखें।</li>" +
            "<li><strong>3. Plus पुनः सक्रिय करें</strong> — सेटिंग्स (ऊपर दाएँ गियर आइकन) खोलें, <strong>Plus सक्रियण</strong> में कुंजी चिपकाएँ और पुष्टि करें। ऐप Peekom Plus बन जाएगा और 10 स्लॉट, कस्टम थीम आदि पुनर्स्थापित होंगे।</li>" +
            "</ul>" +
            "<p><strong>डिवाइस सीमा (अधिकतम 2)</strong> — उसी PC पर पुनः इंस्टॉल करने से वही डिवाइस माना जाता है, सक्रियण प्रभावित नहीं होता। नया कंप्यूटर लेने पर प्रति लाइसेंस अधिकतम दो डिवाइस (जैसे कार्य + व्यक्तिगत PC) अनुमत हैं।</p>",
        faq3q: "Plus कैसे सक्रिय होता है?",
        faq3a:
            "<p>पहले <strong>मुफ़्त ऐप इंस्टॉल करें</strong>, फिर Lemon Squeezy से खरीदी गई लाइसेंस कुंजी सेटिंग्स में या Plus लॉक स्क्रीन पर दर्ज करें। Plus के लिए अलग इंस्टॉलर नहीं है और दोबारा इंस्टॉल करने की ज़रूरत भी नहीं।</p>" +
            "<p><strong>पहली बार सक्रियण के लिए इंटरनेट कनेक्शन</strong> और <code>https://api.lemonsqueezy.com</code> तक पहुँच ज़रूरी है। उसके बाद आप Plus को ऑफ़लाइन भी इस्तेमाल कर सकते हैं।</p>" +
            "<p>सक्रियण सफल होते ही लाइसेंस उस उपकरण पर <strong>Activated</strong> के रूप में दर्ज हो जाता है। सक्रियण के बाद मन बदलने, प्लान बदलने या कंपनी नेटवर्क की पाबंदियों के आधार पर रिफ़ंड सामान्यतः उपलब्ध नहीं होता, इसलिए कृपया ऊपर दी गई रिफ़ंड नीति पहले पढ़ लें।</p>",
        faq3bq: "क्या एक लाइसेंस कुंजी कई PC पर उपयोग की जा सकती है?",
        faq3ba: "हाँ। समान 16-अक्षर की लाइसेंस कुंजी अधिकतम दो PC पर—उदाहरण के लिए कार्य और व्यक्तिगत PC—प्रत्येक पर एक बार दर्ज करके दोनों पर Peekom Plus उपयोग कर सकते हैं।",
        faq3cq: "क्या मैं कंपनी PC बदलने या नौकरी बदलने पर भी उपयोग जारी रख सकता/सकती हूँ?",
        faq3ca: "आपके प्लान के अनुसार Peekom Plus 1 उपकरण (Single), 2 उपकरण (Double) या 5 उपकरण (Family) पर उपयोग किया जा सकता है। उसी उपकरण पर पुनः स्थापना की अनुमति है। नए उपकरण पर जाने की आवश्यकता हो तो हमसे संपर्क करें — हम जाँच कर सहायता करेंगे। स्थिति के अनुसार, पहले सक्रिय उपकरणों को रीसेट करके नए उपकरण पर पुनः सक्रियण का मार्गदर्शन किया जा सकता है। केवल उपकरण सीमा या PC बदलने के आधार पर रिफ़ंड <strong>योग्य नहीं है</strong>, लेकिन उपकरण बदलने में हम पुराने उपकरण को निष्क्रिय करके खुशी से मदद करेंगे — बस हमसे संपर्क करें।",
        faq3dq: "उपकरण बदलने के लिए कौन-सी जानकारी भेजें?",
        faq3da: "शीघ्र जाँच के लिए खरीद ईमेल, ऑर्डर नंबर, लाइसेंस कुंजी और बदलाव का कारण भेजें। यदि आपके प्लान (Single 1 · Double 2 · Family 5) के सभी स्लॉट इस्तेमाल हो चुके हैं, तो पुनः सक्रियण से पहले सक्रिय उपकरण रीसेट करने पड़ सकते हैं — संपर्क से पहले आवश्यक सामग्री का बैकअप लें। केवल उपकरण सीमा या PC बदलने के आधार पर रिफ़ंड <strong>योग्य नहीं है</strong>, लेकिन उपकरण बदलने में हम पुराने उपकरण को निष्क्रिय करके खुशी से मदद करेंगे — बस हमसे संपर्क करें।",
        faq4q: "Windows पर इंस्टॉल करते समय नीली चेतावनी आती है।",
        faq4a: "SmartScreen चेतावनियाँ अहस्ताक्षरित ऐप में सामान्य हैं। <a href=\"#\" onclick=\"openModal(); return false;\">इंस्टॉल गाइड</a> देखें: [अधिक जानकारी] → [फिर भी चलाएँ]।",
        faq5q: "कौन से Windows संस्करण समर्थित हैं?",
        faq5a: "Peekom Windows 10 और 11 (64-bit) पर चलता है। इंस्टॉलर केवल 64-bit है। Windows 7, 8 और 8.1 समर्थित नहीं (Electron 36)।",
        faq6q: "मैंने इंडेक्स जोड़ा लेकिन सेटिंग्स में नहीं दिखता।",
        faq6a: "सूची रिफ़्रेश करने के लिए सेटिंग्स फिर खोलें; हाल के संस्करण स्वचालित सिंक करते हैं।",
        faq7q: "अनइंस्टॉल के बाद स्टार्टअप पर अजीब टेक्स्ट।",
        faq7a: "Task Manager में बचे Peekom स्टार्टअप प्रविष्टियाँ अक्षम करें, या पुनः इंस्टॉल करके फिर अनइंस्टॉल करें।",
        compareColFeature: "फ़ीचर",
        contactTitle: "संपर्क",
        contactSub: "अपनी प्रतिक्रिया भेजें।",
        contactFeedbackTitle: "प्रतिक्रिया भेजें",
        contactFeedbackDesc: "बग रिपोर्ट, फ़ीचर सुझाव, लाइसेंस प्रश्न",
        contactFeedbackBtn: "प्रतिक्रिया फ़ॉर्म खोलें",
        contactReviewTitle: "समीक्षा लिखें",
        contactReviewDesc: "अपना अनुभव साझा करें — यह हमारी वेबसाइट पर दिख सकता है।",
        contactReviewBtn: "समीक्षा फ़ॉर्म खोलें",
        contactEmailTitle: "ईमेल से संपर्क",
        contactEmailDesc: "जब सीधे संपर्क करना हो",
        contactNote: "हम लगभग 10 कार्यदिवसों में जवाब देने का प्रयास करते हैं। Google फ़ॉर्म ईमेल से तेज़ पहुँचते हैं, इसलिए जब संभव हो फ़ॉर्म का उपयोग करें।",
        contactEmail: "hello.peekom@gmail.com",
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "गोपनीयता",
        guideTitle: "Windows SmartScreen इंस्टॉल गाइड",
        step1: "इंस्टॉलर चलाते समय, <b>\"अपरिचित ऐप\"</b> कहने वाली नीली SmartScreen विंडो दिख सकती है।",
        step2: "विवरण के ऊपर <b>[अधिक जानकारी]</b> पर क्लिक करें।",
        step3: "इंस्टॉल पूरा करने के लिए नीचे दाएँ <b>[फिर भी चलाएँ]</b> पर क्लिक करें।",
        searchNoResults: "कोई परिणाम नहीं",
        modalClose: "बंद करें",
        promoNote: "प्रोमो समाप्त होने के बाद मूल्य वृद्धि की योजना",
        promoSectionTitle: "Peekom Plus (सशुल्क)",
        promoFreeTitle: "Peekom (मुफ़्त)",
        promoVat: "(VAT अलग)",
        promoLaunchLabel: "लॉन्च प्रोमो\nमूल्य\nलागू",
        comparePricingExtra: ' · एक बार भुगतान · अधिकतम 2 डिवाइस · माइनर अपडेट शामिल · 30-दिन रिफंड (<a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>)',
        dlPlusHintExtra: ' · <a href="' + LINKS.buy + '" id="dlBuyLinkInner">Lemon Squeezy पर खरीदें</a> → ऐप में लाइसेंस कुंजी दर्ज करें',
        markdownGuideTitle: "Markdown से नोट्स",
        markdownGuideBody: "<p class=\"guide-table-intro\">स्वाभाविक रूप से टाइप करें—<strong>Enter</strong> दबाएँ और फ़ॉर्मेटिंग स्वचालित लागू होगी।</p><table class=\"compare-table guide-table\"><thead><tr><th>इनपुट प्रारूप</th><th>Enter के बाद</th></tr></thead><tbody><tr><td><code># बैठक एजेंडा</code></td><td class=\"guide-md-result\"><h1 class=\"guide-md-h1\">बैठक एजेंडा</h1></td></tr><tr><td><code>## नोट्स</code></td><td class=\"guide-md-result\"><h2 class=\"guide-md-h2\">नोट्स</h2></td></tr><tr><td><code>### संदर्भ</code></td><td class=\"guide-md-result\"><h3 class=\"guide-md-h3\">संदर्भ</h3></td></tr><tr><td><code>- कार्य</code></td><td class=\"guide-md-result\"><ul class=\"guide-md-ul\"><li>कार्य</li></ul></td></tr><tr><td><code>- [ ] कार्य</code></td><td class=\"guide-md-result\"><label class=\"guide-md-task\"><input type=\"checkbox\" disabled> कार्य</label></td></tr><tr><td><code>**महत्वपूर्ण**</code></td><td class=\"guide-md-result\"><strong>महत्वपूर्ण</strong></td></tr><tr><td><code>*ज़ोर*</code></td><td class=\"guide-md-result\"><em>ज़ोर</em></td></tr></tbody></table>",
        formatBarGuideTitle: "टूलबार से नोट्स",
        formatBarGuideBody: "<p class=\"guide-table-intro\">मेमो के ऊपर बटन क्लिक करें—कीबोर्ड शॉर्टकट की ज़रूरत नहीं।</p><table class=\"compare-table guide-table\"><thead><tr><th>फ़ीचर</th><th>उपयोग</th></tr></thead><tbody><tr><td>रंग · बोल्ड · इटैलिक · अंडरलाइन · स्ट्राइकथ्रू</td><td>टेक्स्ट चुनें, फिर बटन क्लिक करें</td></tr><tr><td>संरेखण (बाएँ/केंद्र/दाएँ/जस्टिफ़ाई)</td><td>पैराग्राफ संरेखण बदलें</td></tr><tr><td>सूचियाँ (बुलेट/वर्ग/क्रमांकित/सादा)</td><td>ड्रॉपडाउन से सूची शैली चुनें</td></tr><tr><td>इमेज इन्सर्ट</td><td>मुफ़्त: प्रति मेमो 1 · Plus: 5 (Plus पर रीसाइज़ और क्रॉप)</td></tr></tbody></table>",
        guideKeysTitle: "शॉर्टकट",
        guideKeysIntro: "सेटिंग्स → सामान्य → <strong>ट्रिगर मोड</strong> में, <strong>माउस नियंत्रण</strong> या <strong>शॉर्टकट नियंत्रण</strong> चुनें। macOS पर Ctrl के बजाय ⌘ (Command) उपयोग करें।",
        gkColAction: "क्रिया",
        gkColKey: "डिफ़ॉल्ट",
        gkColNote: "नोट",
        gk1a: "मेमो खोलें/बंद करें",
        gk1k: "Ctrl+Shift+M",
        gk1n: "सबसे हाल का मेमो। केवल शॉर्टकट नियंत्रण मोड। सेटिंग्स → सामान्य → ट्रिगर मोड में कस्टमाइज़",
        gk2a: "पिछला इंडेक्स खोलें",
        gk2k: "Ctrl+Shift+↑",
        gk2n: "पिछला इंडेक्स खोलता है और पैनल दिखाता है। शॉर्टकट नियंत्रण मोड। सेटिंग्स में कस्टमाइज़",
        gk3a: "अगला इंडेक्स खोलें",
        gk3k: "Ctrl+Shift+↓",
        gk3n: "अगला इंडेक्स खोलता है और पैनल दिखाता है। शॉर्टकट नियंत्रण मोड। सेटिंग्स में कस्टमाइज़",
        gk4a: "इंडेक्स बदलें",
        gk4k: "↑ / ↓",
        gk4n: "केवल माउस नियंत्रण मोड, पैनल खुला होना चाहिए",
        gk5a: "इंडेक्स पर जाएँ",
        gk5k: "Ctrl+1–9 (Ctrl+0 = इंडेक्स 10)",
        gk5n: "उस इंडेक्स का मेमो सीधे खोलता है",
        gk6a: "फ़ॉन्ट आकार",
        gk6k: "Ctrl + व्हील",
        gk6n: "मेमो क्षेत्र में। केवल Plus",
        guidePlusTitle: "Plus सक्रिय करें",
        guidePlusStep1: "1. नीचे के बटन से Peekom Plus खरीदें।",
        guidePlusStep2: "2. लाइसेंस कुंजी के लिए अपना ईमेल देखें।",
        guidePlusStep3: "3. Peekom खोलें और <strong>सेटिंग्स</strong> विंडो या <strong>सेटिंग्स</strong> में कुंजी दर्ज करें।",
        macComingSoonTitle: "macOS",
        macComingSoonBody: "macOS संस्करण विकास में है।<br>अपेक्षित रिलीज़: <strong>जुलाई 2026</strong>।",
        guidePlusStep4: "4. Peekom Plus सक्रियण पूर्ण।",
        guideNavStart: "शुरुआत",
        guideNavKeys: "शॉर्टकट",
        guideNavEdit: "संपादन",
        guideNavPlus: "Plus सक्रिय करें",
        guideSectionEditTitle: "संपादन",
        versionHistoryTitle: "संस्करण इतिहास",
        versionColVersion: "संस्करण",
        versionColDate: "रिलीज़ तिथि",
        versionColWin: "Windows",
        versionColMac: "macOS",
        versionLatest: "नवीनतम",
        versionWin: "64-bit",
        versionMac: "Universal",
        versionMacSoon: "जल्द आ रहा है",
        changelogTitle: "चेंजलॉग",
        fz1Title: "किनारे से Peek",
        fz1Items: [
            { text: "जल्दी मेमो खोलने के लिए इंडेक्स क्लिक करें" },
            { text: "स्थिति बदलने के लिए इंडेक्स खींचें" },
            { text: "Peek / ICE mode स्विच" },
            { text: "PEEK मोड में ऑटो-कोलैप्स" }
        ],
        fz2Title: "अधिक कुशलता से काम करें",
        fz2Items: [
            { text: "हाल का मेमो खोलने का शॉर्टकट" },
            { text: "लक्ष्य डिस्प्ले पिनिंग" },
            { text: "Markdown सिंटैक्स समर्थन" },
            { text: "इमेज इन्सर्ट" }
        ],
        fz3Title: "आपका कस्टम मेमो",
        fz3Items: [
            { text: "फ़ॉर्मेटिंग टूलबार" },
            { text: "कस्टम इंडेक्स शीर्षक" },
            { text: "मेमो पहलू (1:1, 3:4)" },
            { text: "डिफ़ॉल्ट पृष्ठभूमि रंग" }
        ],
        fz4Title: "Plus के साथ आगे बढ़ें",
        fz4Items: [
            { text: "अधिकतम 10 स्वतंत्र इंडेक्स", plus: true },
            { text: "एक्सपोर्ट · JSON बैकअप", plus: true },
            { text: "प्रति मेमो अधिकतम 5 इमेज", plus: true },
            { text: "इमेज रीसाइज़ · पहलू क्रॉप", plus: true }
        ],
        fz5Title: "केवल Plus कस्टमाइज़ेशन",
        fz5Items: [
            { text: "फ़ॉन्ट आकार नियंत्रण", plus: true },
            { text: "डिफ़ॉल्ट मेमो अपारदर्शिता", plus: true },
            { text: "कस्टम पृष्ठभूमि और टेक्स्ट रंग", plus: true },
            { text: "कस्टम फ़ॉन्ट", plus: true }
        ],
        footerLangLabel: "भाषा",
        themeLight: "Light",
        themeDark: "Dark",
        themeAuto: "Auto",
        themeLightLabel: "लाइट मोड",
        themeDarkLabel: "डार्क मोड",
        themeAutoLabel: "सिस्टम अनुसरण",
        themeAriaLabel: "थीम",
        pageCtaDownload: "डाउनलोड",
        pageCtaCompare: "तुलना देखें",
        featuresCtaTitle: "Peekom Plus के साथ विस्तार करें",
        featuresCtaDesc: "ऐप के अंदर 10 स्लॉट, कस्टम थीम, एक्सपोर्ट और अधिक अनलॉक करें।",
        helpCtaTitle: "अभी शुरू करें",
        helpCtaDesc: "Peekom इंस्टॉल करें और अपने मॉनिटर पर किनारे की मेमो आज़माएँ।",
        faqCtaTitle: "अभी भी प्रश्न हैं?",
        faqCtaDesc: "मुफ़्त बनाम Plus के लिए फ़ीचर तुलना देखें।",
        contactCtaTitle: "अभी तक Peekom नहीं आज़माया?",
        contactCtaDesc: "मुफ़्त में इंस्टॉल करें और तुरंत शुरू करें।",
        downloadCtaTitle: "Plus चाहिए?",
        downloadCtaDesc: "Plus सक्रिय करने के लिए उसी ऐप में लाइसेंस कुंजी दर्ज करें।"
    },
    ar: {
        navHome: "الرئيسية",
        navFeatures: "الميزات",
        navDownload: "تنزيل",
        navFaq: "الأسئلة",
        navHelp: "الدليل",
        navContact: "اتصل",
        searchPlaceholder: "بحث...",
        heroTitleMain: "Peekom",
        heroTagline: "تطبيق الملاحظات على الحافة عاد باسم <strong>Peekom</strong>.<br>ملاحظات خفيفة وسريعة على حافة الشاشة—ابقَ منظّمًا دون مقاطعة عملك أو عرضك.",
        heroPlusNote: "بعد تثبيت التطبيق المجاني، قم بالترقية إلى Peekom Plus من الإعدادات.<br><a href=\"/features/#compare\">اطّلع على المجاني مقابل Plus</a> في جدول المقارنة.",
        heroUpgradeNote: "بعد تثبيت التطبيق المجاني، قم بالترقية إلى Peekom Plus من الإعدادات.",
        heroFreeCompareNote: "<a href=\"/features/#compare\">اطّلع على المجاني مقابل Plus</a>.",
        heroWinBtn: "تنزيل لـ Windows",
        heroMacBtn: "تنزيل لـ macOS",
        heroPlusBuyBtn: "اشترِ الآن",
        heroPlusCardTitle: "Peekom Plus",
        heroPlusCardBadge: "مدفوع",
        heroPlusCardOs: "Windows",
        heroMacPlusCardTitle: "Peekom Plus",
        heroMacPlusCardBadge: "مدفوع",
        heroPlusCardMeta: "دفعة واحدة · حتى جهازين · مدى الحياة",
        heroFreeCardTitle: "Peekom",
        heroFreeCardBadge: "مجاني",
        heroMacFreeCardBadge: "مجاني",
        heroWinCardMeta: "Windows 10 · 11 (64-bit)",
        heroMacFreeCardMeta: "macOS (Universal)",
        heroFreeDownloadLabel: "تنزيل",
        carouselCap1: "مقبض على حافة الشاشة",
        carouselCap2: "افتح الملاحظة بالنقر أو الاختصار",
        carouselCap3: "ICE mode · تأخير الطي التلقائي",
        reviewBtnLabel: "اكتب مراجعة",
        reviewEmpty: "كن أول من يشارك تجربته!",
        reviewAnonymous: "مجهول",
        detectWin: "مكتشف: <strong>Windows</strong> — يُنصح بـ Windows",
        detectMac: "مكتشف: <strong>macOS</strong> — يُنصح بـ macOS",
        detectGeneric: "لم يُكتشف النظام — اختر يدويًا",
        featuresTitle: "الميزات",
        featuresSub: "ما يقدّمه Peekom في لمحة.",
        compareTitle: "Peekom مقابل Peekom Plus",
        compareSub: "تطبيق واحد — يُفعَّل Peekom Plus من داخل التطبيق.",
        comparePricing: '<span class="pricing-was">$' + PRICING.list.toFixed(2) + '</span> <span class="pricing-now">$' + PRICING.sale.toFixed(2) + ' USD</span> <span class="pricing-vat">(باستثناء ضريبة القيمة المضافة)</span> · <span class="pricing-launch">سعر الإطلاق</span> · دفعة واحدة · حتى جهازين · تحديثات فرعية مشمولة · استرداد خلال 30 يومًا (<a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>)',
        guidePlusP: '1) اشترِ بسعر الإطلاق $9.99 على Lemon Squeezy → 2) استلم مفتاح الترخيص عبر البريد → 3) افتح Peekom → أدخل المفتاح في واجهة القفل أو الإعدادات → 4) اكتمل تفعيل Peekom Plus. استرداد خلال 30 يومًا: <a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>',
        dlSub: "ثبّت Peekom مرة واحدة. رقِّ إلى Peekom Plus من داخل التطبيق.",
        dlWin: "Peekom Setup (Windows)",
        dlMac: "Peekom Setup (macOS)",
        dlPlusHint: 'Peekom Plus: كان <span class="pricing-was">$' + PRICING.list.toFixed(2) + '</span> → إطلاق <strong>$' + PRICING.sale.toFixed(2) + '</strong> (باستثناء ضريبة القيمة المضافة) · <a href="' + LINKS.buy + '" id="dlBuyLinkInner">اشترِ على Lemon Squeezy</a> → أدخل مفتاح الترخيص في التطبيق',
        featureGifPending: "صورة GIF تجريبية قريبًا",
        compareNoLabel: "غير مدعوم",
        faqSub: "أسئلة شائعة حول Peekom.",
        refundPolicyTitle: "سياسة استرداد Peekom Plus",
        refundPolicyBody:
            "<p>تتم معالجة المدفوعات والمبالغ المستردة لـ Peekom Plus عبر <strong>Lemon Squeezy</strong>، تاجر التسجيل (Merchant of Record) لدينا.</p>" +
            '<ul class="faq-refund-list">' +
            "<li><strong>مهلة تقديم الطلب</strong> — نراجع الطلبات المقدَّمة خلال <strong>30 يومًا</strong> من تاريخ الشراء.</li>" +
            "<li><strong>الحالات المؤهلة للاسترداد</strong> — نرد المبلغ في الحالات التالية:" +
            "<ul>" +
            "<li><strong>خلل في المنتج</strong> — لا يعمل التطبيق أو لا يؤدي وظيفته بشكل صحيح.</li>" +
            "<li><strong>دفع مزدوج</strong> لنفس الطلب.</li>" +
            "</ul></li>" +
            "<li><strong>الحالات غير المؤهلة للاسترداد</strong> — لا يمكننا رد المبلغ في الحالات التالية:" +
            "<ul>" +
            "<li><strong>تغيير الرأي</strong> بعد الشراء.</li>" +
            "<li><strong>تغيير الباقة</strong> — مثل الانتقال بين Single وDouble/Family. لا نوفّر ترقية بفارق السعر. وإذا احتجت أجهزة أكثر فعليك <strong>شراء الباقة الأعلى بشكل منفصل</strong>؛ ولا تُسترد قيمة الباقة السابقة تلقائيًا ولا يُحتسب فارق السعر.</li>" +
            "<li><strong>الاسترداد بعد تفعيل الترخيص (Activated).</strong> تعني \"Activated\" أن المفتاح تم التحقق منه بنجاح وتسجيله بحيث يمكن استخدام Plus على ذلك الجهاز. ونجاح التفعيل يدل على أن المنتج يعمل، لذلك <strong>لا يُعد ذلك خللًا في المنتج</strong>.</li>" +
            "<li><strong>المشكلات الناتجة عن بيئة الاستخدام وحدها</strong> — جدار حماية الشركة أو المدرسة، أو برامج الحماية، أو شبكة مغلقة بلا إنترنت، أو حجب التنزيل من GitHub، أو حجب <code>api.lemonsqueezy.com</code>. وينطبق ذلك بوجه خاص إذا كان الترخيص <strong>مفعَّلًا بالفعل</strong>.</li>" +
            "<li><strong>الإزعاج الناتج عن حد عدد الأجهزة أو تغيير الحاسوب.</strong> إذا احتجت الانتقال إلى جهاز آخر، <a href=\"/contact/\">تواصل معنا</a> — يمكننا إلغاء تفعيل الجهاز القديم نيابةً عنك.</li>" +
            "</ul></li>" +
            "</ul>" +
            "<p><strong>قبل الشراء (التفعيل والشبكة)</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li><strong>التفعيل الأول لـ Plus</strong> يتطلب اتصالًا بالإنترنت والوصول إلى <code>https://api.lemonsqueezy.com</code>.</li>" +
            "<li>حتى لو فتحت المواقع العادية، قد يفشل التفعيل إذا كان هذا العنوان وحده محجوبًا.</li>" +
            "<li>الحاسوب المستخدم حصريًا على <strong>شبكة مغلقة تمامًا بلا إنترنت</strong> قد يتعذّر تفعيله.</li>" +
            "<li>ملف التثبيت متاح عبر GitHub Releases، لذا قد يفشل التنزيل في البيئات التي تحجب github.com.</li>" +
            "<li>إذا كنت تنوي استخدام Peekom على حاسوب العمل فقط، ننصح بالتحقق من النقاط أعلاه قبل الشراء.</li>" +
            "</ul>" +
            "<p><strong>إذا كانت بيئتك تمنع استخدام Plus — كيف نراجع الطلب</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li>أن يكون الشراء قد تم خلال <strong>30 يومًا</strong> الماضية، و</li>" +
            "<li>أن يكون الترخيص <strong>Inactive (صفر جهاز مفعَّل)</strong>، أو أن تكون الحالة خللًا في المنتج أو دفعًا مزدوجًا، و</li>" +
            "<li>أن تتواصل معنا برقم الطلب ووصف موجز — عندها <strong>نراجع كل حالة على حدة</strong>.</li>" +
            "<li>أما إذا كان الترخيص <strong>مفعَّلًا بالفعل</strong> وكان قيد شبكة الشركة هو السبب الوحيد، فهذه الحالة غير مؤهلة للاسترداد من حيث المبدأ.</li>" +
            "</ul>" +
            "<p><strong>الترخيص وإجراءات الاسترداد</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li><strong>الترخيص</strong> — بعد اكتمال الاسترداد، يُعطَّل مفتاح ترخيص Peekom Plus ويعود التطبيق إلى النسخة المجانية عند تشغيله المرة القادمة عبر الإنترنت.</li>" +
            '<li><strong>طريقة التقديم</strong> — استخدم <a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">نموذج التواصل (أو البريد الإلكتروني)</a> وأرفق <strong>Order # (رقم الطلب)</strong> مع وصف موجز. وإضافة البريد الإلكتروني المستخدم في الدفع تساعدنا على إيجاد الطلب أسرع. ولا يمكننا البحث عن الطلب برقم الهاتف وحده.</li>' +
            "<li><strong>المعالجة</strong> — بعد المراجعة نُصدر الاسترداد من لوحة تحكم Lemon Squeezy؛ وقد يستغرق ظهور المبلغ عدة أيام عمل حسب مُصدِر البطاقة أو طريقة الدفع.</li>" +
            "</ul>",
        faqR1q: "كيف أطلب استرداد Peekom Plus؟",
        faqR1a:
            '<p>أرسل لنا <strong>Order # (رقم الطلب)</strong> عبر <a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">نموذج التواصل (أو البريد الإلكتروني)</a>.</p>' +
            "<p>وإضافة <strong>البريد الإلكتروني المستخدم في الدفع</strong> تساعدنا على إيجاد طلبك أسرع. ولا يمكننا البحث عن الطلب برقم الهاتف وحده.</p>" +
            "<p>يُرجى أيضًا وصف ما حدث (التطبيق لا يعمل، دفع مزدوج، وما إلى ذلك).</p>" +
            "<p>إذا كان الطلب مؤهلًا، نُصدر الاسترداد من لوحة تحكم Lemon Squeezy. وقد يستغرق ظهور المبلغ بضعة أيام عمل حسب مُصدِر البطاقة أو طريقة الدفع.</p>",
        faqR2q: "ما الحالات المؤهلة للاسترداد؟",
        faqR2a:
            "<p><strong>مؤهل</strong> — أن يكون الشراء قد تم خلال <strong>30 يومًا</strong> وأن تكون الحالة <strong>خللًا في المنتج</strong> (لا يعمل التطبيق أو لا يؤدي وظيفته بشكل صحيح) أو <strong>دفعًا مزدوجًا</strong> لنفس الطلب.</p>" +
            "<p><strong>غير مؤهل</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>تغيير الرأي.</strong></li>" +
            "<li><strong>تغيير الباقة</strong> (بين Single وDouble/Family) — لا توجد ترقية بفارق السعر، ويجب شراء الباقة الأعلى بشكل منفصل.</li>" +
            "<li>الاسترداد بعد أن يكون الترخيص <strong>مفعَّلًا بالفعل</strong>.</li>" +
            "<li>المشكلات الناتجة <strong>عن بيئة الاستخدام وحدها</strong>، مثل جدار حماية الشركة أو المدرسة، أو شبكة بلا إنترنت، أو حجب التنزيل من GitHub — خصوصًا عندما يكون الترخيص <strong>مفعَّلًا بالفعل</strong>.</li>" +
            "<li>الإزعاج الناتج عن حد عدد الأجهزة أو تغيير الحاسوب — تواصل معنا بدلًا من ذلك ويمكننا مساعدتك في نقل الأجهزة.</li>" +
            "</ul>" +
            "<p>إذا لم يمضِ على الشراء أكثر من 30 يومًا وكان الترخيص <strong>Inactive (صفر جهاز مفعَّل)</strong>، تواصل معنا برقم الطلب ووصف الحالة وسوف <strong>نراجع</strong> كل حالة على حدة.</p>" +
            "<p>تتم معالجة المدفوعات والمبالغ المستردة عبر Lemon Squeezy، تاجر التسجيل لدينا.</p>",
        faqR3q: "ماذا يحدث للترخيص بعد الاسترداد؟",
        faqR3a:
            "<p>بعد اكتمال الاسترداد، يتم <strong>تعطيل</strong> مفتاح ترخيص Peekom Plus.</p>" +
            "<p>ويعود التطبيق تلقائيًا إلى <strong>النسخة المجانية</strong> في المرة التالية التي يعمل فيها عبر الإنترنت، وتتوقف مزايا Plus الحصرية عن العمل.</p>" +
            "<p>تبقى مذكراتك على حاسوبك، لكنك تعود إلى مزايا النسخة المجانية (3 فهارس وغيرها)، لذا صدِّر ما تحتاجه <strong>قبل</strong> طلب الاسترداد.</p>" +
            "<p>ويُرجى التأكد من رغبتك في التوقف عن استخدام Plus قبل إرسال الطلب.</p>",
        faqR4q: "هل يمكن استخدام Peekom Plus خلف جدار حماية الشركة أو على شبكة بلا إنترنت؟",
        faqR4a:
            "<p>تعمل النسخة المجانية دون اتصال بالإنترنت.</p>" +
            "<p>لكن <strong>التفعيل الأول لـ Plus</strong> يتطلب اتصالًا بالإنترنت والوصول إلى <code>https://api.lemonsqueezy.com</code> عبر HTTPS (المنفذ 443).</p>" +
            "<p>وحتى لو فتحت المواقع العادية، قد يفشل التفعيل إذا كان هذا العنوان وحده محجوبًا، وقد يتعذّر التفعيل تمامًا على حاسوب يُستخدم حصريًا على <strong>شبكة مغلقة تمامًا بلا إنترنت</strong>.</p>" +
            "<p>كما أن ملف التثبيت متاح عبر GitHub Releases، لذا قد يفشل التنزيل نفسه في البيئات التي تحجب github.com.</p>" +
            "<p><strong>جرّب ما يلي</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>فعِّل الترخيص مرة واحدة على شبكة أخرى</strong>، مثل Wi‑Fi المنزل أو نقطة اتصال الهاتف. وبعد التفعيل يمكنك استخدام Plus دون إنترنت (يُعاد التحقق من الترخيص كلما عدت للاتصال).</li>" +
            "<li>اطلب من قسم تقنية المعلومات السماح بـ <code>https://api.lemonsqueezy.com</code> عبر <strong>HTTPS (المنفذ 443)</strong>.</li>" +
            "<li>إذا كنت تستخدم VPN أو وكيلًا (proxy) خاصًا بالشركة، فأوقفه مؤقتًا أو أعد المحاولة على شبكة مسموح بها.</li>" +
            "</ul>" +
            "<p><strong>يُرجى التحقق قبل الشراء.</strong> إذا كنت تنوي استخدام Peekom على حاسوب العمل فقط، فقد تمنع هذه القيود التفعيل. وطلب الاسترداد <strong>بعد تفعيل الترخيص</strong> بحجة قيود شبكة الشركة وحدها غير مؤهل.</p>",
        faqR5q: "هل يمكنني الاسترداد بعد تفعيل الترخيص؟",
        faqR5a:
            "<p>من حيث المبدأ <strong>لا — هذه الحالة غير مؤهلة للاسترداد.</strong></p>" +
            "<p><strong>Activated (مفعَّل)</strong> تعني أن المفتاح تم التحقق منه بنجاح وتسجيله بحيث يمكن استخدام Plus على ذلك الجهاز. ونجاح التفعيل يدل على أن المنتج يعمل، لذلك <strong>لا يُعد ذلك خللًا في المنتج</strong>.</p>" +
            "<p>وحتى بعد التفعيل، نرد المبلغ في الحالات التالية:</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>خلل في المنتج</strong> — لا يعمل التطبيق أو لا يؤدي وظيفته بشكل صحيح.</li>" +
            "<li><strong>دفع مزدوج</strong> لنفس الطلب.</li>" +
            "</ul>" +
            "<p>وإذا <strong>لم</strong> تكن قد فعّلت الترخيص بعد (الترخيص <strong>Inactive</strong>، صفر جهاز مفعَّل) ولم يمضِ على الشراء أكثر من 30 يومًا، <a href=\"/contact/\">تواصل معنا</a> برقم الطلب ووصف الحالة وسنراجعها على حدة.</p>" +
            "<p>وإذا كنت تحتاج فقط إلى الانتقال إلى جهاز آخر، فيمكننا <strong>إلغاء تفعيل الجهاز القديم</strong> بدلًا من الاسترداد.</p>",
        faq1q: "ما الفرق بين المجاني وPlus؟",
        faq1a: "يشمل المجاني 3 فهارس ونقل مقبض المجموعة وICE mode وتأخير التمرير واختيار الشاشة وMarkdown وشريط التنسيق وإدراج الصور. يفعّل Peekom Plus (إطلاق $9.99، سعر $12.99) 10 فتحات وسمة مخصصة وخطوط وشفافية وتغيير حجم الصور والتصدير داخل التطبيق. راجع <a href=\"/features/#compare\">جدول المقارنة</a>.",
        compareFreeName: "Peekom (مجاني)",
        comparePlusName: "Peekom Plus",
        compareCta: "احصل على Peekom Plus",
        comparePromoBanner: "عرض الإطلاق · خصم {pct}% الآن",
        helpTitle: "الدليل",
        helpSub: "ابدأ مع Peekom.",
        guideStartBody: "<div class=\"guide-step\"><h3>1. التثبيت</h3><ul class=\"guide-step-list\"><li><strong>تنزيل</strong> — احصل على مثبّت Windows أو macOS من صفحة <a href=\"/download/\">التنزيل</a> (أو الصفحة الرئيسية).</li><li><strong>Run Peekom-Setup.exe</strong> — انقر مرتين على المثبّت واتبع التعليمات.</li><li><strong>SmartScreen warning</strong> — إذا ظهرت نافذة زرقاء، افتح <a href=\"#\" onclick=\"openModal(); return false;\">دليل التثبيت</a> واختر <strong>مزيد من المعلومات</strong> → <strong>تشغيل على أي حال</strong>.</li></ul></div><div class=\"guide-step\"><h3>2. الإعدادات العامة وإعدادات كل فهرس</h3><p class=\"guide-step-lead\">انقر بزر الماوس الأيمن على أيقونة الدرج → <strong>الإعدادات</strong>.</p><h4 class=\"guide-step-sub\">الإعدادات العامة</h4><ul class=\"guide-step-list\"><li>اختر <strong>شاشة العرض</strong> (تلقائي أو ثابت)</li><li><strong>وضع التفعيل</strong> — <strong>تحكم بالماوس</strong> / <strong>تحكم بالاختصار</strong>؛ خصّص ثلاثة اختصارات (فتح/إغلاق، الفهرس السابق/التالي)</li><li><strong>تأخير الطي التلقائي</strong> للمقبض (افتراضي 0.3 ث، قابل للتعديل في الإعدادات)</li></ul><div class=\"guide-plus-card\"><span class=\"guide-plus-card__label\">Plus</span> خطوط مخصصة وشفافية افتراضية ونسخ/استعادة JSON وتصدير (.txt/.md/.json) والمزيد.</div><h4 class=\"guide-step-sub\">إعدادات كل فهرس</h4><ul class=\"guide-step-list\"><li>إضافة/إزالة <strong>فهارس</strong> (3 مجانًا)</li><li>تعيين <strong>العنوان واللون</strong> لكل فهرس</li><li>اختر <strong>نسبة العرض</strong> للملاحظة (1:1 / 3:4)</li></ul><div class=\"guide-plus-card\"><span class=\"guide-plus-card__label\">Plus</span> حتى 10 فتحات بمواضع مقابض مستقلة.</div></div><div class=\"guide-step\"><h3>3. كتابة الملاحظات</h3><ul class=\"guide-step-list\"><li><strong>إعادة الموضع</strong> — اسحب مقبض الحافة إلى الارتفاع المفضل.</li><li><strong>Peek / ICE</strong> — بدّل من أعلى الملاحظة. يفتح Peek بالنقر أو الاختصار؛ يبقى ICE مثبتًا.</li><li><strong>تخصيص النص</strong> — استخدم Markdown وشريط الأدوات والصور. راجع <a href=\"#guide-edit\">التحرير</a> أدناه.</li></ul></div><div class=\"guide-step guide-step--last\"><h3>4. الترقية إلى Peekom Plus</h3><ul class=\"guide-step-list\"><li>أدخل مفتاح الترخيص عبر زر <strong>الترقية إلى Plus</strong> في التطبيق (أو نافذة <strong>الإعدادات</strong> عند أول تشغيل).</li><li>راجع <a href=\"#guide-plus\">تفعيل Plus</a> للخطوات التفصيلية.</li></ul></div>",
        help1t: "1. التثبيت",
        help1p: "نزّل وشغّل Peekom Setup. قد يظهر SmartScreen على Windows.",
        help2t: "2. افتح ملاحظة",
        help2p: "انقر المقبض أو، في وضع <strong>التحكم بالاختصار</strong>، اضغط <strong>Ctrl+Shift+M</strong> (افتراضي) لتبديل <strong>آخر ملاحظة مفتوحة</strong>.",
        help3t: "3. بدّل الملاحظات",
        help3p: "في وضع <strong>التحكم بالماوس</strong>، اضغط <strong>↑ / ↓</strong> واللوحة مفتوحة. في وضع <strong>التحكم بالاختصار</strong>، استخدم <strong>Ctrl+Shift+↑ / ↓</strong> (حتى وهي مغلقة). <strong>Ctrl+1–9</strong> ينتقل إلى فهرس.",
        help4t: "4. اكتب",
        help4p: "اكتب في اللوحة؛ أضف فهارس وعناوين من الإعدادات.",
        help5t: "5. ICE mode",
        help5p: "انقر شريحة <strong>Peek / ICE</strong> لتثبيت الملاحظة دون تمرير (مجاني وPlus).",
        help6t: "6. الإعدادات · Plus",
        help6p: "الدرج → الإعدادات → تبويب عام لتغيير وضع التفعيل والاختصارات. استخدم زر الترقية إلى Plus لإدخال مفتاح الترخيص والتبديل إلى علامة Peekom Plus.",
        winGuideBtn: "هل تظهر تحذير SmartScreen أزرق عند التثبيت على Windows؟",
        dlTitle: "تنزيل",
        dlWinNote: "Windows 10 و11 (64-bit)",
        dlWinLabel: "Windows x64 · Windows 10 و11 (64-bit)",
        dlMacLabel: "macOS",
        linkChangelog: "سجل التغييرات / الإصدارات",
        linkPrev: "الإصدارات السابقة",
        linkSmartScreen: "دليل SmartScreen",
        faqTitle: "الأسئلة الشائعة",
        faqGroupProductLabel: "المنتج والميزات",
        faqGroupLicenseLabel: "الترخيص",
        faqGroupInstallLabel: "التثبيت",
        faqGroupTroubleshootLabel: "استكشاف الأخطاء",
        faq2q: "كيف يعمل دعم الشاشتين؟",
        faq2a: "في الإعدادات → شاشة العرض، اختر تلقائي (يتبع الماوس) أو شاشة ثابتة. متاح في المجاني وPlus.",
        faq8q: "هل يمكن استخدام Peekom على الحافة اليمنى فقط؟",
        faq8a: "حاليًا، يعمل Peekom على الحافة اليمنى فقط. نخطط لإضافة دعم الحواف اليسرى والعلوية والسفلية في تحديث مستقبلي.",
        faq9q: "حذفت Peekom Plus بالخطأ. ماذا يحدث للميزات المدفوعة؟",
        faq9a:
            "<p>إلغاء تثبيت التطبيق لا يلغي ترخيص Lemon Squeezy. اتبع الخطوات التالية لاستعادة Peekom Plus وجميع الميزات المدفوعة.</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>1. إعادة تثبيت Peekom</strong> — حمّل النسخة المجانية (<code>Peekom-Setup.exe</code>) من <a href=\"/download/\">peekom.com</a> وثبّتها.</li>" +
            "<li><strong>2. العثور على مفتاح الترخيص</strong> — افتح بريد إيصال Lemon Squeezy عند الشراء وانسخ <strong>[License Key]</strong>. إذا فقدت البريد، سجّل الدخول إلى سجل الطلبات في Lemon Squeezy بنفس البريد لعرضه مجددًا.</li>" +
            "<li><strong>3. إعادة تفعيل Plus</strong> — افتح الإعدادات (أيقونة الترس أعلى اليمين)، الصق المفتاح في <strong>تفعيل Plus</strong> وأكّد. يتحول التطبيق إلى Peekom Plus ويستعيد 10 فتحات والسمات المخصصة وغيرها من الميزات المدفوعة.</li>" +
            "</ul>" +
            "<p><strong>حد الأجهزة (حتى 2)</strong> — إعادة التثبيت على نفس الجهاز تُحسب كجهاز واحد دون التأثير على التفعيل. عند تغيير الكمبيوتر، يسمح كل ترخيص بجهازين كحد أقصى (مثل جهاز العمل + الشخصي).</p>",
        faq3q: "كيف يُفعَّل Plus؟",
        faq3a:
            "<p><strong>ثبّت التطبيق المجاني</strong> أولًا، ثم أدخل مفتاح الترخيص الذي اشتريته من Lemon Squeezy في الإعدادات أو في شاشة قفل Plus. لا يوجد ملف تثبيت خاص بـ Plus ولا حاجة إلى إعادة التثبيت.</p>" +
            "<p><strong>التفعيل الأول يتطلب اتصالًا بالإنترنت</strong> والوصول إلى <code>https://api.lemonsqueezy.com</code>. وبعد ذلك يمكنك متابعة استخدام Plus دون إنترنت.</p>" +
            "<p>وبمجرد نجاح التفعيل، يُسجَّل الترخيص على ذلك الجهاز بحالة <strong>Activated</strong>. وبعد التفعيل لا يتوفر الاسترداد عادةً بسبب تغيير الرأي أو تغيير الباقة أو قيود شبكة الشركة، لذا يُرجى قراءة سياسة الاسترداد أعلاه أولًا.</p>",
        faq3bq: "هل يمكن استخدام مفتاح ترخيص واحد على أكثر من جهاز؟",
        faq3ba: "نعم. يمكنك إدخال نفس مفتاح الترخيص المكوّن من 16 حرفًا مرة واحدة على كل من جهازين كحد أقصى—مثل جهاز العمل والشخصي—لاستخدام Peekom Plus على كليهما.",
        faq3cq: "هل يمكنني الاستمرار في الاستخدام عند تغيير جهاز العمل أو الانتقال لوظيفة أخرى؟",
        faq3ca: "حسب باقتك، يمكن استخدام Peekom Plus على جهاز واحد (Single) أو جهازين (Double) أو خمسة أجهزة (Family). إعادة التثبيت على الجهاز نفسه مسموحة. إذا احتجت الانتقال إلى جهاز جديد، تواصل معنا وسنراجع طلبك ونساعدك. حسب الحالة، قد نوجّهك لإعادة التفعيل على الجهاز الجديد بعد إعادة ضبط الأجهزة المفعّلة سابقًا. أما الاسترداد بسبب حد عدد الأجهزة أو تغيير الحاسوب وحده <strong>فغير مؤهل</strong>، لكن يسعدنا مساعدتك في نقل الأجهزة بإلغاء تفعيل الجهاز القديم — فقط تواصل معنا.",
        faq3dq: "ما المعلومات المطلوبة عند الحاجة لتغيير الجهاز؟",
        faq3da: "للمراجعة السريعة، أرسل البريد المستخدم عند الشراء ورقم الطلب ومفتاح الترخيص وسبب تغيير الجهاز. وإذا كنت قد استخدمت كل الأجهزة المتاحة في باقتك (Single جهاز واحد · Double جهازان · Family خمسة أجهزة)، فقد نحتاج إلى إعادة ضبط الأجهزة المفعّلة قبل إعادة التفعيل — احفظ نسخة احتياطية لما تحتاجه قبل التواصل. أما الاسترداد بسبب حد عدد الأجهزة أو تغيير الحاسوب وحده <strong>فغير مؤهل</strong>، لكن يسعدنا مساعدتك في نقل الأجهزة بإلغاء تفعيل الجهاز القديم — فقط تواصل معنا.",
        faq4q: "يظهر تحذير أزرق عند التثبيت على Windows.",
        faq4a: "تحذيرات SmartScreen شائعة للتطبيقات غير الموقّعة. راجع <a href=\"#\" onclick=\"openModal(); return false;\">دليل التثبيت</a>: [مزيد من المعلومات] → [تشغيل على أي حال].",
        faq5q: "ما إصدارات Windows المدعومة؟",
        faq5a: "يعمل Peekom على Windows 10 و11 (64-bit). المثبّت 64-bit فقط. Windows 7 و8 و8.1 غير مدعومة (Electron 36).",
        faq6q: "أضفت فهرسًا لكنه لا يظهر في الإعدادات.",
        faq6a: "أعد فتح الإعدادات لتحديث القائمة؛ الإصدارات الحديثة تزامن تلقائيًا.",
        faq7q: "نص غريب عند بدء التشغيل بعد إلغاء التثبيت.",
        faq7a: "عطّل إدخالات بدء تشغيل Peekom المتبقية في مدير المهام، أو أعد التثبيت ثم ألغِ التثبيت مجددًا.",
        compareColFeature: "الميزة",
        contactTitle: "اتصل",
        contactSub: "أرسل ملاحظاتك.",
        contactFeedbackTitle: "إرسال ملاحظات",
        contactFeedbackDesc: "تقارير الأخطاء، أفكار الميزات، استفسارات الترخيص",
        contactFeedbackBtn: "فتح نموذج الملاحظات",
        contactReviewTitle: "اترك تقييمًا",
        contactReviewDesc: "شارك تجربتك — قد تُعرض على موقعنا.",
        contactReviewBtn: "فتح نموذج التقييم",
        contactEmailTitle: "التواصل عبر البريد",
        contactEmailDesc: "عند الحاجة للتواصل مباشرة",
        contactNote: "نسعى للرد خلال نحو 10 أيام عمل. نماذج Google تصل أسرع من البريد، لذا يُرجى استخدامها عند الإمكان.",
        contactEmail: "hello.peekom@gmail.com",
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "الخصوصية",
        guideTitle: "دليل تثبيت SmartScreen على Windows",
        step1: "عند تشغيل المثبّت، قد تظهر نافذة SmartScreen زرقاء تقول <b>\"تطبيق غير معروف\"</b>.",
        step2: "انقر <b>[مزيد من المعلومات]</b> أعلى الوصف.",
        step3: "انقر <b>[تشغيل على أي حال]</b> أسفل اليمين لإكمال التثبيت.",
        searchNoResults: "لا توجد نتائج",
        modalClose: "إغلاق",
        promoNote: "زيادة السعر مخططة بعد انتهاء العرض",
        promoSectionTitle: "Peekom Plus (مدفوع)",
        promoFreeTitle: "Peekom (مجاني)",
        promoVat: "(باستثناء ضريبة القيمة المضافة)",
        promoLaunchLabel: "سعر عرض\nالإطلاق\nمُطبَّق",
        comparePricingExtra: ' · دفعة واحدة · حتى جهازين · تحديثات فرعية مشمولة · استرداد خلال 30 يومًا (<a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>)',
        dlPlusHintExtra: ' · <a href="' + LINKS.buy + '" id="dlBuyLinkInner">اشترِ على Lemon Squeezy</a> → أدخل مفتاح الترخيص في التطبيق',
        markdownGuideTitle: "ملاحظات بـ Markdown",
        markdownGuideBody: "<p class=\"guide-table-intro\">اكتب بشكل طبيعي—اضغط <strong>Enter</strong> ويُطبَّق التنسيق تلقائيًا.</p><table class=\"compare-table guide-table\"><thead><tr><th>صيغة الإدخال</th><th>بعد Enter</th></tr></thead><tbody><tr><td><code># جدول الاجتماع</code></td><td class=\"guide-md-result\"><h1 class=\"guide-md-h1\">جدول الاجتماع</h1></td></tr><tr><td><code>## ملاحظات</code></td><td class=\"guide-md-result\"><h2 class=\"guide-md-h2\">ملاحظات</h2></td></tr><tr><td><code>### مرجع</code></td><td class=\"guide-md-result\"><h3 class=\"guide-md-h3\">مرجع</h3></td></tr><tr><td><code>- مهمة</code></td><td class=\"guide-md-result\"><ul class=\"guide-md-ul\"><li>مهمة</li></ul></td></tr><tr><td><code>- [ ] مهمة</code></td><td class=\"guide-md-result\"><label class=\"guide-md-task\"><input type=\"checkbox\" disabled> مهمة</label></td></tr><tr><td><code>**مهم**</code></td><td class=\"guide-md-result\"><strong>مهم</strong></td></tr><tr><td><code>*تأكيد*</code></td><td class=\"guide-md-result\"><em>تأكيد</em></td></tr></tbody></table>",
        formatBarGuideTitle: "ملاحظات بشريط الأدوات",
        formatBarGuideBody: "<p class=\"guide-table-intro\">انقر الأزرار فوق الملاحظة—دون اختصارات لوحة المفاتيح.</p><table class=\"compare-table guide-table\"><thead><tr><th>الميزة</th><th>طريقة الاستخدام</th></tr></thead><tbody><tr><td>لون · عريض · مائل · تسطير · يتوسطه خط</td><td>حدّد النص ثم انقر زرًا</td></tr><tr><td>محاذاة (يسار/وسط/يمين/ضبط)</td><td>غيّر محاذاة الفقرة</td></tr><tr><td>قوائم (نقطة/مربع/مرقّمة/عادية)</td><td>اختر نمط القائمة من القائمة المنسدلة</td></tr><tr><td>إدراج صورة</td><td>مجاني: 1 لكل ملاحظة · Plus: 5 (تغيير الحجم والقص على Plus)</td></tr></tbody></table>",
        guideKeysTitle: "الاختصارات",
        guideKeysIntro: "في الإعدادات → عام → <strong>وضع التفعيل</strong>، اختر <strong>التحكم بالماوس</strong> أو <strong>التحكم بالاختصار</strong>. على macOS، استخدم ⌘ (Command) بدل Ctrl.",
        gkColAction: "الإجراء",
        gkColKey: "افتراضي",
        gkColNote: "ملاحظة",
        gk1a: "فتح/إغلاق الملاحظة",
        gk1k: "Ctrl+Shift+M",
        gk1n: "آخر ملاحظة. وضع التحكم بالاختصار فقط. قابل للتخصيص في الإعدادات → عام → وضع التفعيل",
        gk2a: "فتح الفهرس السابق",
        gk2k: "Ctrl+Shift+↑",
        gk2n: "يفتح الفهرس السابق ويعرض اللوحة. وضع التحكم بالاختصار. قابل للتخصيص في الإعدادات",
        gk3a: "فتح الفهرس التالي",
        gk3k: "Ctrl+Shift+↓",
        gk3n: "يفتح الفهرس التالي ويعرض اللوحة. وضع التحكم بالاختصار. قابل للتخصيص في الإعدادات",
        gk4a: "تبديل الفهرس",
        gk4k: "↑ / ↓",
        gk4n: "وضع التحكم بالماوس فقط، يجب أن تكون اللوحة مفتوحة",
        gk5a: "الانتقال إلى فهرس",
        gk5k: "Ctrl+1–9 (Ctrl+0 = الفهرس 10)",
        gk5n: "يفتح ملاحظة ذلك الفهرس مباشرة",
        gk6a: "حجم الخط",
        gk6k: "Ctrl + عجلة",
        gk6n: "في منطقة الملاحظة. Plus فقط",
        guidePlusTitle: "تفعيل Plus",
        guidePlusStep1: "1. اشترِ Peekom Plus بالزر أدناه.",
        guidePlusStep2: "2. تحقق من بريدك لمفتاح الترخيص.",
        guidePlusStep3: "3. افتح Peekom وأدخل المفتاح في نافذة <strong>الإعدادات</strong> أو في <strong>الإعدادات</strong>.",
        macComingSoonTitle: "macOS",
        macComingSoonBody: "إصدار macOS قيد التطوير.<br>الإصدار المتوقع: <strong>يوليو 2026</strong>.",
        guidePlusStep4: "4. اكتمل تفعيل Peekom Plus.",
        guideNavStart: "البدء",
        guideNavKeys: "الاختصارات",
        guideNavEdit: "التحرير",
        guideNavPlus: "تفعيل Plus",
        guideSectionEditTitle: "التحرير",
        versionHistoryTitle: "سجل الإصدارات",
        versionColVersion: "الإصدار",
        versionColDate: "تاريخ الإصدار",
        versionColWin: "Windows",
        versionColMac: "macOS",
        versionLatest: "الأحدث",
        versionWin: "64-bit",
        versionMac: "Universal",
        versionMacSoon: "قريبًا",
        changelogTitle: "سجل التغييرات",
        fz1Title: "Peek من الحافة",
        fz1Items: [
            { text: "انقر الفهرس لفتح الملاحظة بسرعة" },
            { text: "اسحب الفهرس لإعادة الموضع" },
            { text: "تبديل Peek / ICE mode" },
            { text: "طي تلقائي في وضع PEEK" }
        ],
        fz2Title: "اعمل بكفاءة أكبر",
        fz2Items: [
            { text: "اختصار لفتح آخر ملاحظة" },
            { text: "تثبيت شاشة العرض المستهدفة" },
            { text: "دعم صيغة Markdown" },
            { text: "إدراج صورة" }
        ],
        fz3Title: "ملاحظتك المخصصة",
        fz3Items: [
            { text: "شريط التنسيق" },
            { text: "عناوين فهارس مخصصة" },
            { text: "نسبة الملاحظة (1:1، 3:4)" },
            { text: "ألوان خلفية افتراضية" }
        ],
        fz4Title: "أبعد مع Plus",
        fz4Items: [
            { text: "حتى 10 فهارس مستقلة", plus: true },
            { text: "تصدير · نسخ JSON احتياطي", plus: true },
            { text: "حتى 5 صور لكل ملاحظة", plus: true },
            { text: "تغيير حجم الصورة · قص بنسبة العرض", plus: true }
        ],
        fz5Title: "تخصيص حصري لـ Plus",
        fz5Items: [
            { text: "التحكم بحجم الخط", plus: true },
            { text: "شفافية الملاحظة الافتراضية", plus: true },
            { text: "ألوان خلفية ونص مخصصة", plus: true },
            { text: "خطوط مخصصة", plus: true }
        ],
        footerLangLabel: "اللغة",
        themeLight: "Light",
        themeDark: "Dark",
        themeAuto: "Auto",
        themeLightLabel: "الوضع الفاتح",
        themeDarkLabel: "الوضع الداكن",
        themeAutoLabel: "اتباع النظام",
        themeAriaLabel: "السمة",
        pageCtaDownload: "تنزيل",
        pageCtaCompare: "عرض المقارنة",
        featuresCtaTitle: "وسّع مع Peekom Plus",
        featuresCtaDesc: "فعّل 10 فتحات وسمات مخصصة وتصدير والمزيد داخل التطبيق.",
        helpCtaTitle: "ابدأ الآن",
        helpCtaDesc: "ثبّت Peekom وجرّب ملاحظات الحافة على شاشتك.",
        faqCtaTitle: "لا تزال لديك أسئلة؟",
        faqCtaDesc: "اطّلع على مقارنة الميزات بين المجاني وPlus.",
        contactCtaTitle: "لم تجرّب Peekom بعد؟",
        contactCtaDesc: "ثبّته مجانًا وابدأ فورًا.",
        downloadCtaTitle: "تحتاج Plus؟",
        downloadCtaDesc: "أدخل مفتاح الترخيص في نفس التطبيق لتفعيل Plus."
    }
});
})();

(function () {
"use strict";
window.PeekomI18nLocales = window.PeekomI18nLocales || {};

const PRICING = { list: 12.99, sale: 9.99 };
const CONTACT_EMAIL = "hello.peekom@gmail.com";
const LINKS = { buy: "https://peekom.lemonsqueezy.com/checkout/buy/97457035-6963-4cc0-9348-63dbb738e6a8" };

Object.assign(window.PeekomI18nLocales, {
    es: {
        navHome: "Inicio", navFeatures: "Funciones", navDownload: "Descargar", navFaq: "Preguntas", navHelp: "Guía", navContact: "Contacto",
        searchPlaceholder: "Buscar...",
        heroTitleMain: "Peekom",
        heroTagline: "La app de notas en el borde vuelve como <strong>Peekom</strong>.<br>Notas ligeras y rápidas en el borde de la pantalla—manténgase organizado sin interrumpir su trabajo o presentación.",
        heroPlusNote: 'Tras instalar la app gratuita, actualice a Peekom Plus en Ajustes.<br><a href="/features/#compare">Ver gratis vs Plus</a> en la tabla comparativa.',
        heroUpgradeNote: "Tras instalar la app gratuita, actualice a Peekom Plus en Ajustes.",
        heroFreeCompareNote: '<a href="/features/#compare">Ver gratis vs Plus</a>.',
        heroWinBtn: "Descargar para Windows", heroMacBtn: "Descargar para macOS",
        heroPlusBuyBtn: "Comprar ahora",
        heroPlusCardTitle: "Peekom Plus",
        heroPlusCardBadge: "PAID",
        heroPlusCardOs: "Windows",
        heroMacPlusCardTitle: "Peekom Plus",
        heroMacPlusCardBadge: "PAID",
        heroPlusCardMeta: "Pago único · hasta 2 dispositivos · de por vida",
        heroFreeCardTitle: "Peekom",
        heroFreeCardBadge: "FREE",
        heroMacFreeCardBadge: "FREE",
        heroWinCardMeta: "Windows 10 · 11 (64 bits)",
        heroMacFreeCardMeta: "macOS (Universal)",
        heroFreeDownloadLabel: "Descargar",
        carouselCap1: "Mango en el borde del monitor",
        carouselCap2: "Abrir memo con clic o atajo",
        carouselCap3: "Modo ICE · retardo de auto-ocultación",
        reviewBtnLabel: "Dejar una reseña",
        reviewEmpty: "¡Sé el primero en compartir tu experiencia!",
        reviewAnonymous: "Anónimo",
        detectWin: "Detectado: <strong>Windows</strong> — se recomienda Windows",
        detectMac: "Detectado: <strong>macOS</strong> — se recomienda macOS",
        detectGeneric: "SO no detectado — elija manualmente",
        featuresTitle: "Funciones", featuresSub: "Lo que hace Peekom de un vistazo.",
        compareTitle: "Peekom vs Peekom Plus", compareSub: "Una sola app — Peekom Plus se desbloquea dentro de la app.",
        comparePricing: '<span class="pricing-was">$' + PRICING.list.toFixed(2) + '</span> <span class="pricing-now">$' + PRICING.sale.toFixed(2) + ' USD</span> <span class="pricing-vat">(IVA no incl.)</span> · <span class="pricing-launch">Precio de lanzamiento</span> · pago único · hasta 2 dispositivos · actualizaciones menores incluidas · reembolso 30 días (<a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>)',
        guidePlusP: "1) Comprar a precio de lanzamiento $9.99 en Lemon Squeezy → 2) Recibir clave de licencia por correo → 3) Abrir Peekom → introducir clave en la UI de bloqueo o en Ajustes → 4) Activación de Peekom Plus completada. Reembolso 30 días: <a href=\"mailto:" + CONTACT_EMAIL + "\">" + CONTACT_EMAIL + "</a>",
        dlSub: "Instale Peekom una vez. Actualice a Peekom Plus dentro de la app.",
        dlWin: "Peekom Setup (Windows)", dlMac: "Peekom Setup (macOS)",
        dlPlusHint: 'Peekom Plus: Antes <span class="pricing-was">$' + PRICING.list.toFixed(2) + '</span> → Lanzamiento <strong>$' + PRICING.sale.toFixed(2) + '</strong> (IVA no incl.) · <a href="' + LINKS.buy + '" id="dlBuyLinkInner">Comprar en Lemon Squeezy</a> → introducir clave de licencia en la app',
        featureGifPending: "GIF de demostración próximamente",
        compareNoLabel: "No compatible",
        faqSub: "Preguntas frecuentes sobre Peekom.",
        refundPolicyTitle: "Política de reembolso de Peekom Plus",
        refundPolicyBody:
            "<p>Los pagos y reembolsos de Peekom Plus los procesa <strong>Lemon Squeezy</strong>, nuestro comerciante registrado (Merchant of Record).</p>" +
            '<ul class="faq-refund-list">' +
            "<li><strong>Plazo de solicitud</strong> — Revisamos las solicitudes enviadas dentro de los <strong>30 días</strong> posteriores a la compra.</li>" +
            "<li><strong>Casos con derecho a reembolso</strong> — Reembolsamos lo siguiente:" +
            "<ul>" +
            "<li>Un <strong>defecto del producto</strong>: la app no se abre o no funciona correctamente.</li>" +
            "<li>Un <strong>pago duplicado</strong> del mismo pedido.</li>" +
            "</ul></li>" +
            "<li><strong>Casos sin derecho a reembolso</strong> — No podemos reembolsar lo siguiente:" +
            "<ul>" +
            "<li><strong>Cambio de opinión</strong> después de la compra.</li>" +
            "<li><strong>Cambio de plan</strong>, por ejemplo Single ↔ Double/Family. No ofrecemos mejoras pagando solo la diferencia. Si necesitas más dispositivos, tienes que <strong>comprar el plan superior por separado</strong>; el plan original no se reembolsa automáticamente y no se abona ninguna diferencia de precio.</li>" +
            "<li><strong>Un reembolso cuando la licencia ya se ha activado.</strong> «Activated» (activada) significa que la clave se verificó correctamente y quedó registrada para poder usar Plus en ese dispositivo. Una activación correcta demuestra que el producto funciona, por lo que <strong>no se considera un defecto del producto</strong>.</li>" +
            "<li><strong>Problemas causados únicamente por tu entorno</strong>: el firewall de una empresa o un centro educativo, un programa de seguridad, una red totalmente aislada (sin internet), descargas de GitHub bloqueadas o el bloqueo de <code>api.lemonsqueezy.com</code>. Esto se aplica especialmente si la licencia <strong>ya está activada</strong>.</li>" +
            "<li><strong>Las molestias por el límite de dispositivos o por cambiar de PC.</strong> Si necesitas pasar a otro dispositivo, <a href=\"/contact/\">escríbenos</a>: podemos desactivar el dispositivo anterior por ti.</li>" +
            "</ul></li>" +
            "</ul>" +
            "<p><strong>Antes de comprar (activación y red)</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li>La <strong>primera activación de Plus</strong> necesita conexión a internet y acceso a <code>https://api.lemonsqueezy.com</code>.</li>" +
            "<li>Aunque las páginas web normales se abran, la activación puede fallar si solo esa dirección está bloqueada.</li>" +
            "<li>Un PC que se usa exclusivamente en una <strong>red totalmente aislada (sin internet)</strong> puede que no se pueda activar.</li>" +
            "<li>El instalador está alojado en GitHub Releases, así que la descarga puede fallar donde github.com esté bloqueado.</li>" +
            "<li>Si piensas usar Peekom solo en un PC de empresa, te recomendamos comprobar los puntos anteriores antes de comprar.</li>" +
            "</ul>" +
            "<p><strong>Si tu entorno impide usar Plus: así lo revisamos</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li>La compra se hizo en los últimos <strong>30 días</strong>, y</li>" +
            "<li>la licencia está <strong>Inactive (0 dispositivos activados)</strong>, o se trata de un defecto del producto o de un pago duplicado, y</li>" +
            "<li>nos escribes con tu número de pedido y una descripción: entonces <strong>revisamos el caso de forma individual</strong>.</li>" +
            "<li>Sin embargo, si la licencia <strong>ya está activada</strong> y el único motivo es la red de la empresa, por regla general no hay derecho a reembolso.</li>" +
            "</ul>" +
            "<p><strong>Tu licencia y el proceso de reembolso</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li><strong>Licencia</strong> — Una vez completado el reembolso, tu clave de licencia de Peekom Plus se desactiva y la app vuelve a la versión gratuita la próxima vez que se inicie con conexión.</li>" +
            '<li><strong>Cómo solicitarlo</strong> — Usa el <a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">formulario de contacto (o correo)</a> e incluye tu <strong>Order #</strong> (número de pedido) y una breve descripción. Añadir la dirección de correo que usaste para pagar nos ayuda a encontrar el pedido más rápido. No podemos localizar un pedido solo con un número de teléfono.</li>' +
            "<li><strong>Tramitación</strong> — Tras la revisión emitimos el reembolso desde el panel de Lemon Squeezy; según tu emisor de tarjeta o método de pago, puede tardar varios días hábiles en aparecer.</li>" +
            "</ul>",
        faqR1q: "¿Cómo solicito un reembolso de Peekom Plus?",
        faqR1a:
            '<p>Envía tu <strong>Order #</strong> (número de pedido) a través del <a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">formulario de contacto (o correo)</a>.</p>' +
            "<p>Añadir la <strong>dirección de correo que usaste para pagar</strong> nos ayuda a encontrar tu pedido más rápido. No podemos localizar un pedido solo con un número de teléfono.</p>" +
            "<p>Cuéntanos también qué ha pasado (la app no se abre, un pago duplicado, etc.).</p>" +
            "<p>Si la solicitud cumple los requisitos, emitimos el reembolso desde el panel de Lemon Squeezy. Según tu emisor de tarjeta o método de pago, puede tardar unos días hábiles en aparecer.</p>",
        faqR2q: "¿Qué casos tienen derecho a reembolso?",
        faqR2a:
            "<p><strong>Con derecho a reembolso</strong> — La compra se hizo en los últimos <strong>30 días</strong> y se trata de un <strong>defecto del producto</strong> (la app no se abre o no funciona correctamente) o de un <strong>pago duplicado</strong> del mismo pedido.</p>" +
            "<p><strong>Sin derecho a reembolso</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Cambio de opinión.</strong></li>" +
            "<li><strong>Cambio de plan</strong> (Single ↔ Double/Family): no hay mejora pagando la diferencia y el plan superior debe comprarse por separado.</li>" +
            "<li>Un reembolso cuando la licencia <strong>ya se ha activado</strong>.</li>" +
            "<li>Problemas causados <strong>únicamente por tu entorno</strong>, como el firewall de una empresa o un centro educativo, una red sin internet o descargas de GitHub bloqueadas, especialmente si la licencia <strong>ya está activada</strong>.</li>" +
            "<li>Las molestias por el límite de dispositivos o por cambiar de PC: escríbenos y te ayudamos a mover los dispositivos.</li>" +
            "</ul>" +
            "<p>Si estás dentro de los 30 días posteriores a la compra y la licencia está <strong>Inactive (0 dispositivos activados)</strong>, escríbenos con tu número de pedido y una descripción y <strong>revisaremos</strong> el caso de forma individual.</p>" +
            "<p>Los pagos y reembolsos los gestiona Lemon Squeezy, nuestro comerciante registrado (Merchant of Record).</p>",
        faqR3q: "¿Qué ocurre con mi licencia tras el reembolso?",
        faqR3a:
            "<p>Una vez completado el reembolso, tu clave de licencia de Peekom Plus queda <strong>desactivada</strong>.</p>" +
            "<p>La app vuelve automáticamente a la <strong>versión gratuita</strong> la próxima vez que se inicie con conexión, y las funciones exclusivas de Plus dejan de funcionar.</p>" +
            "<p>Tus notas siguen en tu PC, pero vuelves al conjunto de funciones gratuitas (3 índices, etc.), así que exporta lo que necesites <strong>antes</strong> de solicitar el reembolso.</p>" +
            "<p>Asegúrate de que quieres dejar de usar Plus antes de enviar la solicitud.</p>",
        faqR4q: "¿Puedo usar Peekom Plus detrás del firewall de una empresa o en una red sin internet?",
        faqR4a:
            "<p>La versión gratuita funciona sin conexión a internet.</p>" +
            "<p>Sin embargo, la <strong>primera activación de Plus</strong> necesita conexión a internet y acceso a <code>https://api.lemonsqueezy.com</code> por HTTPS (443).</p>" +
            "<p>Aunque las páginas web normales se abran, la activación puede fallar si solo esa dirección está bloqueada, y un PC que se usa exclusivamente en una <strong>red totalmente aislada (sin internet)</strong> puede que no se pueda activar.</p>" +
            "<p>El instalador también está alojado en GitHub Releases, así que la descarga puede fallar donde github.com esté bloqueado.</p>" +
            "<p><strong>Prueba esto</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Activa una vez en otra red</strong>, como el wifi de casa o un punto de acceso del móvil. Después de la activación puedes usar Plus sin internet (la licencia se vuelve a comprobar cada vez que estés en línea).</li>" +
            "<li>Pide a tu departamento de IT que permita <code>https://api.lemonsqueezy.com</code> por <strong>HTTPS (443)</strong>.</li>" +
            "<li>Si usas una VPN o un proxy corporativos, desactívalos un momento o vuelve a intentarlo en una red permitida.</li>" +
            "</ul>" +
            "<p><strong>Compruébalo antes de comprar.</strong> Si piensas usar Peekom solo en un PC de empresa, estas restricciones pueden impedir la activación. Un reembolso solicitado <strong>después de activar la licencia</strong>, cuando el único motivo es la red de la empresa, no tiene derecho a reembolso.</p>",
        faqR5q: "¿Puedo obtener un reembolso después de activar la licencia?",
        faqR5a:
            "<p>Por regla general, <strong>no: no tiene derecho a reembolso.</strong></p>" +
            "<p><strong>Activated</strong> (activada) significa que la clave se verificó correctamente y quedó registrada para poder usar Plus en ese dispositivo. Una activación correcta demuestra que el producto funciona, por lo que <strong>no se considera un defecto del producto</strong>.</p>" +
            "<p>Incluso después de la activación, sí reembolsamos lo siguiente:</p>" +
            '<ul class="guide-step-list">' +
            "<li>Un <strong>defecto del producto</strong>: la app no se abre o no funciona correctamente.</li>" +
            "<li>Un <strong>pago duplicado</strong> del mismo pedido.</li>" +
            "</ul>" +
            "<p>Si <strong>todavía no</strong> has activado (licencia <strong>Inactive</strong>, 0 dispositivos activados) y estás dentro de los 30 días posteriores a la compra, <a href=\"/contact/\">escríbenos</a> con tu número de pedido y una descripción y revisaremos el caso de forma individual.</p>" +
            "<p>Si lo único que necesitas es pasar a otro dispositivo, podemos <strong>desactivar el dispositivo anterior</strong> en lugar de hacer un reembolso.</p>",
        faq1q: "¿Cuál es la diferencia entre gratis y Plus?",
        faq1a: 'Gratis incluye 3 índices, mover mango en grupo, modo ICE, retardo al pasar el cursor, selección de monitor, Markdown, barra de formato e inserción de imágenes. Peekom Plus (lanzamiento $9.99, lista $12.99) desbloquea 10 ranuras, tema personalizado, fuentes, opacidad, redimensionar imágenes y exportar en la app. Consulte la <a href="/features/#compare">tabla comparativa</a>.',
        compareFreeName: "Peekom (Gratis)",
        comparePlusName: "Peekom Plus",
        compareCta: "Obtener Peekom Plus",
        comparePromoBanner: "Promo de lanzamiento · {pct}% de descuento ahora",
        helpTitle: "Guía", helpSub: "Empiece con Peekom.",
        guideStartBody:
            '<div class="guide-step">' +
                "<h3>1. Instalar</h3>" +
                '<ul class="guide-step-list">' +
                    '<li><strong>Descargar</strong> — Obtenga el instalador de Windows o macOS en la página <a href="/download/">Descargar</a> (o inicio).</li>' +
                    "<li><strong>Ejecutar Peekom-Setup.exe</strong> — Haga doble clic en el instalador y siga las indicaciones.</li>" +
                    '<li><strong>Advertencia SmartScreen</strong> — Si aparece una ventana azul, abra la <a href="#" onclick="openModal(); return false;">guía de instalación</a> y elija <strong>Más información</strong> → <strong>Ejecutar de todos modos</strong>.</li>' +
                "</ul>" +
            "</div>" +
            '<div class="guide-step">' +
                "<h3>2. Ajustes comunes y por índice</h3>" +
                '<p class="guide-step-lead">Clic derecho en el icono de la bandeja → <strong>Ajustes</strong>.</p>' +
                '<h4 class="guide-step-sub">Ajustes comunes</h4>' +
                '<ul class="guide-step-list">' +
                    "<li>Elegir <strong>monitor de visualización</strong> (auto o fijo)</li>" +
                    "<li><strong>Modo de activación</strong> — <strong>Control con ratón</strong> / <strong>Control con atajos</strong>; personalizar tres atajos (alternar, índice ant./sig.)</li>" +
                    "<li><strong>Retardo de auto-ocultación</strong> del mango (predeterminado 0,3 s, ajustable en Ajustes)</li>" +
                "</ul>" +
                '<div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> Fuentes personalizadas, opacidad predeterminada, copia/restauración JSON, exportar (.txt/.md/.json) y más.</div>' +
                '<h4 class="guide-step-sub">Ajustes por índice</h4>' +
                '<ul class="guide-step-list">' +
                    "<li>Añadir/eliminar <strong>índices</strong> (3 gratis)</li>" +
                    "<li>Establecer <strong>título y color</strong> por índice</li>" +
                    "<li>Elegir <strong>relación de aspecto</strong> del memo (1:1 / 3:4)</li>" +
                "</ul>" +
                '<div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> Hasta 10 ranuras con posiciones de mango independientes.</div>' +
            "</div>" +
            '<div class="guide-step">' +
                "<h3>3. Escribir memos</h3>" +
                '<ul class="guide-step-list">' +
                    "<li><strong>Reubicar</strong> — Arrastre el mango del borde a la altura preferida.</li>" +
                    "<li><strong>Peek / ICE</strong> — Alternar en la parte superior del memo. Peek se abre con clic o atajo; ICE permanece fijado.</li>" +
                    '<li><strong>Personalizar texto</strong> — Use Markdown, la barra de herramientas e imágenes. Vea <a href="#guide-edit">Edición</a> abajo.</li>' +
                "</ul>" +
            "</div>" +
            '<div class="guide-step guide-step--last">' +
                "<h3>4. Actualizar a Peekom Plus</h3>" +
                '<ul class="guide-step-list">' +
                    "<li>Introduzca su clave de licencia con el botón <strong>Actualizar a Plus</strong> en la app (o la ventana de <strong>Ajustes</strong> en el primer inicio).</li>" +
                    '<li>Consulte <a href="#guide-plus">Activar Plus</a> para instrucciones paso a paso.</li>' +
                "</ul>" +
            "</div>",
        help1t: "1. Instalar", help1p: "Descargue y ejecute Peekom Setup. SmartScreen puede aparecer en Windows.",
        help2t: "2. Abrir un memo", help2p: "Haga clic en el mango o, en modo <strong>control con atajos</strong>, pulse <strong>Ctrl+Shift+M</strong> (predeterminado) para alternar el memo <strong>más reciente</strong>.",
        help3t: "3. Cambiar memos", help3p: "En modo <strong>control con ratón</strong>, pulse <strong>↑ / ↓</strong> con el panel abierto. En modo <strong>control con atajos</strong>, use <strong>Ctrl+Shift+↑ / ↓</strong> (incluso cerrado). <strong>Ctrl+1–9</strong> salta a un índice.",
        help4t: "4. Escribir", help4p: "Escriba en el panel; añada índices y títulos en Ajustes.",
        help5t: "5. Modo ICE", help5p: "Haga clic en el chip <strong>Peek / ICE</strong> para fijar el memo sin pasar el cursor (gratis y Plus).",
        help6t: "6. Ajustes · Plus", help6p: "Bandeja → Ajustes → pestaña Común para cambiar el modo de activación y los atajos. Use el botón Actualizar a Plus para introducir una clave de licencia y cambiar la marca a Peekom Plus.",
        winGuideBtn: "¿Ve una advertencia azul de SmartScreen al instalar en Windows?",
        dlTitle: "Descargar", dlWinNote: "Windows 10 y 11 (64 bits)",
        dlWinLabel: "Windows x64 · Windows 10 y 11 (64 bits)",
        dlMacLabel: "macOS",
        linkChangelog: "Registro de cambios / Versiones", linkPrev: "Versiones anteriores", linkSmartScreen: "Guía SmartScreen",
        faqTitle: "Preguntas frecuentes",
        faqGroupProductLabel: "Producto y funciones",
        faqGroupLicenseLabel: "Licencia",
        faqGroupInstallLabel: "Instalación",
        faqGroupTroubleshootLabel: "Solución de problemas",
        faq2q: "¿Cómo funciona el soporte de doble monitor?",
        faq2a: "En Ajustes → Monitor de visualización, elija auto (seguir el ratón) o un monitor fijo. Disponible en Gratis y Plus.",
        faq8q: "¿Peekom solo se puede usar en el borde derecho del monitor?",
        faq8a: "Actualmente, Peekom funciona solo en el borde derecho. Planeamos añadir soporte para los bordes izquierdo, superior e inferior en una futura actualización.",
        faq9q: "Desinstalé Peekom Plus por error. ¿Qué pasa con mis funciones de pago?",
        faq9a:
            "<p>Desinstalar la app no elimina su licencia en Lemon Squeezy. Siga estos pasos para restaurar Peekom Plus y todas las funciones de pago.</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>1. Reinstalar Peekom</strong> — Descargue la versión gratuita (<code>Peekom-Setup.exe</code>) desde <a href=\"/download/\">peekom.com</a> e instálela.</li>" +
            "<li><strong>2. Encontrar la clave de licencia</strong> — Abra el correo de recibo de Lemon Squeezy de su compra y copie la <strong>[License Key]</strong>. Si perdió el correo, inicie sesión en el historial de pedidos de Lemon Squeezy con el mismo email para verla de nuevo.</li>" +
            "<li><strong>3. Reactivar Plus</strong> — Abra Ajustes (icono de engranaje, arriba a la derecha), pegue la clave en <strong>Activación Plus</strong> y confirme. La app cambiará a Peekom Plus y restaurará 10 ranuras, temas personalizados y demás funciones de pago.</li>" +
            "</ul>" +
            "<p><strong>Límite de dispositivos (hasta 2)</strong> — Reinstalar en el mismo PC cuenta como el mismo dispositivo, sin afectar la activación. Si cambia de ordenador, cada licencia permite hasta dos dispositivos (p. ej., PC de trabajo + PC personal).</p>",
        faq3q: "¿Cómo se activa Plus?",
        faq3a:
            "<p>Instale primero la <strong>app gratuita</strong> y luego introduzca en Ajustes o en la pantalla de bloqueo de Plus la clave de licencia que compró en Lemon Squeezy. No hay un instalador aparte para Plus ni es necesario reinstalar.</p>" +
            "<p>La <strong>primera activación necesita conexión a internet</strong> y acceso a <code>https://api.lemonsqueezy.com</code>. Después puede seguir usando Plus sin conexión.</p>" +
            "<p>Cuando la activación se completa, la licencia queda registrada como <strong>Activated</strong> (activada) en ese dispositivo. Después de la activación, por regla general no hay reembolso por cambio de opinión, cambio de plan ni restricciones de la red de la empresa, así que lea antes la política de reembolso de arriba.</p>",
        faq3bq: "¿Puedo usar una clave de licencia en más de un PC?",
        faq3ba: "Sí. Puede introducir la misma clave de licencia de 16 caracteres una vez en cada uno de hasta dos PC—por ejemplo, su PC de trabajo y personal—para usar Peekom Plus en ambos.",
        faq3cq: "¿Puedo seguir usándolo si cambio el PC del trabajo o me mudo de empresa?",
        faq3ca: "Según su plan, Peekom Plus puede usarse en 1 dispositivo (Single), 2 (Double) o 5 (Family). Reinstalar en el mismo dispositivo está permitido. Si necesita pasar a un nuevo dispositivo, contáctenos y le ayudaremos tras revisar su caso. Según la situación, podemos guiarle para reactivar en el nuevo dispositivo tras restablecer los dispositivos activados anteriormente. El límite de dispositivos o el cambio de PC, por sí solos, <strong>no dan derecho a reembolso</strong>, pero con mucho gusto le ayudamos a mover los dispositivos desactivando el anterior: solo tiene que contactarnos.",
        faq3dq: "¿Qué información debo enviar si necesito cambiar de dispositivo?",
        faq3da: "Para una revisión más rápida, envíe el correo usado en la compra, el número de pedido, la clave de licencia y el motivo del cambio de dispositivo. Si ya está usando todas las plazas de su plan (Single 1 · Double 2 · Family 5), puede que debamos restablecer los dispositivos activados antes de la reactivación; haga una copia de seguridad de lo necesario antes de contactarnos. El límite de dispositivos o el cambio de PC, por sí solos, <strong>no dan derecho a reembolso</strong>, pero si nos contacta le ayudamos a mover los dispositivos desactivando el anterior.",
        faq4q: "Aparece una advertencia azul al instalar en Windows.",
        faq4a: 'Las advertencias SmartScreen son comunes en apps sin firmar. Consulte la <a href="#" onclick="openModal(); return false;">guía de instalación</a>: [Más información] → [Ejecutar de todos modos].',
        faq5q: "¿Qué versiones de Windows son compatibles?",
        faq5a: "Peekom funciona en Windows 10 y 11 (64 bits). El instalador es solo de 64 bits. Windows 7, 8 y 8.1 no son compatibles (Electron 36).",
        faq6q: "Añadí un índice pero no aparece en Ajustes.",
        faq6a: "Vuelva a abrir Ajustes para actualizar la lista; las versiones recientes sincronizan automáticamente.",
        faq7q: "Texto extraño al iniciar tras desinstalar.",
        faq7a: "Desactive las entradas de inicio de Peekom restantes en el Administrador de tareas, o reinstale y desinstale de nuevo.",
        compareColFeature: "Función",
        contactTitle: "Contacto", contactSub: "Envíenos sus comentarios.",
        contactFeedbackTitle: "Enviar comentarios",
        contactFeedbackDesc: "Informes de errores, ideas de funciones, consultas de licencia",
        contactFeedbackBtn: "Abrir formulario de comentarios",
        contactReviewTitle: "Dejar una reseña",
        contactReviewDesc: "Comparta su experiencia; puede aparecer en nuestro sitio web.",
        contactReviewBtn: "Abrir formulario de reseñas",
        contactEmailTitle: "Contacto por correo",
        contactEmailDesc: "Cuando necesite contactarnos directamente",
        contactNote: "Intentamos responder en unos 10 días hábiles. Los formularios de Google llegan más rápido que el correo, así que úselos cuando pueda.",
        contactEmail: "hello.peekom@gmail.com",
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "Privacidad",
        guideTitle: "Guía de instalación SmartScreen para Windows",
        step1: 'Al ejecutar el instalador, puede aparecer una ventana azul de SmartScreen que dice <b>"Aplicación no reconocida"</b>.',
        step2: "Haga clic en <b>[Más información]</b> en la parte superior de la descripción.",
        step3: "Haga clic en <b>[Ejecutar de todos modos]</b> abajo a la derecha para completar la instalación.",
        searchNoResults: "Sin resultados",
        modalClose: "Cerrar",
        promoNote: "Aumento de precio previsto tras finalizar la promoción",
        promoSectionTitle: "Peekom Plus (De pago)",
        promoFreeTitle: "Peekom (Gratis)",
        promoVat: "(IVA no incl.)",
        promoLaunchLabel: "Precio promocional\nde lanzamiento\naplicado",
        comparePricingExtra: " · pago único · hasta 2 dispositivos · actualizaciones menores incluidas · reembolso 30 días (<a href=\"mailto:" + CONTACT_EMAIL + "\">" + CONTACT_EMAIL + "</a>)",
        dlPlusHintExtra: ' · <a href="' + LINKS.buy + '" id="dlBuyLinkInner">Comprar en Lemon Squeezy</a> → introducir clave de licencia en la app',
        markdownGuideTitle: "Notas con Markdown",
        markdownGuideBody:
            '<p class="guide-table-intro">Escriba con naturalidad—pulse <strong>Enter</strong> y el formato se aplica automáticamente.</p>' +
            '<table class="compare-table guide-table"><thead><tr><th>Formato de entrada</th><th>Tras Enter</th></tr></thead><tbody>' +
            '<tr><td><code># Agenda de reunión</code></td><td class="guide-md-result"><h1 class="guide-md-h1">Agenda de reunión</h1></td></tr>' +
            '<tr><td><code>## Notas</code></td><td class="guide-md-result"><h2 class="guide-md-h2">Notas</h2></td></tr>' +
            '<tr><td><code>### Referencia</code></td><td class="guide-md-result"><h3 class="guide-md-h3">Referencia</h3></td></tr>' +
            '<tr><td><code>- Tarea</code></td><td class="guide-md-result"><ul class="guide-md-ul"><li>Tarea</li></ul></td></tr>' +
            '<tr><td><code>- [ ] Tarea</code></td><td class="guide-md-result"><label class="guide-md-task"><input type="checkbox" disabled> Tarea</label></td></tr>' +
            '<tr><td><code>**Importante**</code></td><td class="guide-md-result"><strong>Importante</strong></td></tr>' +
            '<tr><td><code>*Énfasis*</code></td><td class="guide-md-result"><em>Énfasis</em></td></tr>' +
            "</tbody></table>",
        formatBarGuideTitle: "Notas con barra de herramientas",
        formatBarGuideBody:
            '<p class="guide-table-intro">Haga clic en los botones sobre el memo—no se requieren atajos de teclado.</p>' +
            '<table class="compare-table guide-table"><thead><tr><th>Función</th><th>Cómo usar</th></tr></thead><tbody>' +
            "<tr><td>Color · negrita · cursiva · subrayado · tachado</td><td>Seleccione texto y haga clic en un botón</td></tr>" +
            "<tr><td>Alineación (izq./centro/der./justificado)</td><td>Cambiar alineación del párrafo</td></tr>" +
            "<tr><td>Listas (viñeta/cuadrado/numerada/simple)</td><td>Elija un estilo de lista en el menú</td></tr>" +
            "<tr><td>Inserción de imagen</td><td>Gratis: 1 por memo · Plus: 5 (redimensionar y recortar en Plus)</td></tr>" +
            "</tbody></table>",
        guideKeysTitle: "Atajos",
        guideKeysIntro: 'En Ajustes → Común → <strong>Modo de activación</strong>, elija <strong>Control con ratón</strong> o <strong>Control con atajos</strong>. En macOS, use ⌘ (Command) en lugar de Ctrl.',
        gkColAction: "Acción", gkColKey: "Predeterminado", gkColNote: "Nota",
        gk1a: "Alternar abrir/cerrar memo", gk1k: "Ctrl+Shift+M",
        gk1n: "Memo más reciente. Solo en modo control con atajos. Personalizable en Ajustes → Común → Modo de activación",
        gk2a: "Abrir índice anterior", gk2k: "Ctrl+Shift+↑",
        gk2n: "Abre el índice anterior y muestra el panel. Modo control con atajos. Personalizable en Ajustes",
        gk3a: "Abrir índice siguiente", gk3k: "Ctrl+Shift+↓",
        gk3n: "Abre el índice siguiente y muestra el panel. Modo control con atajos. Personalizable en Ajustes",
        gk4a: "Cambiar índice", gk4k: "↑ / ↓",
        gk4n: "Solo en modo control con ratón, panel debe estar abierto",
        gk5a: "Saltar a índice", gk5k: "Ctrl+1–9 (Ctrl+0 = índice 10)",
        gk5n: "Abre directamente el memo de ese índice",
        gk6a: "Tamaño de fuente", gk6k: "Ctrl + rueda", gk6n: "En el área del memo. Solo Plus",
        guidePlusTitle: "Activar Plus",
        guidePlusStep1: "1. Compre Peekom Plus con el botón de abajo.",
        guidePlusStep2: "2. Revise su correo para la clave de licencia.",
        guidePlusStep3: "3. Abra Peekom e introduzca la clave en la ventana de <strong>Ajustes</strong> o en <strong>Ajustes</strong>.",
        macComingSoonTitle: "macOS",
        macComingSoonBody: "La versión para macOS está en desarrollo.<br>Lanzamiento previsto: <strong>julio de 2026</strong>.",
        guidePlusStep4: "4. La activación de Peekom Plus está completa.",
        guideNavStart: "Primeros pasos", guideNavKeys: "Atajos", guideNavEdit: "Edición", guideNavPlus: "Activar Plus",
        guideSectionEditTitle: "Edición",
        versionHistoryTitle: "Historial de versiones",
        versionColVersion: "Versión", versionColDate: "Fecha de lanzamiento", versionColWin: "Windows", versionColMac: "macOS",
        versionLatest: "Última", versionWin: "64 bits", versionMac: "Universal", versionMacSoon: "Próximamente",
        changelogTitle: "Registro de cambios",
        fz1Title: "Asomar desde el borde",
        fz1Items: [
            { text: "Clic en índice para abrir memo rápidamente" },
            { text: "Arrastrar índice para reposicionar" },
            { text: "Interruptor Peek / ICE" },
            { text: "Auto-ocultación en modo Peek" }
        ],
        fz2Title: "Trabaje con más eficiencia",
        fz2Items: [
            { text: "Atajo para abrir memo reciente" },
            { text: "Fijar pantalla de destino" },
            { text: "Soporte de sintaxis Markdown" },
            { text: "Inserción de imagen" }
        ],
        fz3Title: "Su memo personalizado",
        fz3Items: [
            { text: "Barra de formato" },
            { text: "Títulos de índice personalizados" },
            { text: "Aspecto del memo (1:1, 3:4)" },
            { text: "Colores de fondo predeterminados" }
        ],
        fz4Title: "Más con Plus",
        fz4Items: [
            { text: "Hasta 10 índices independientes", plus: true },
            { text: "Exportar · copia JSON", plus: true },
            { text: "Hasta 5 imágenes por memo", plus: true },
            { text: "Redimensionar imagen · recorte de aspecto", plus: true }
        ],
        fz5Title: "Personalización solo Plus",
        fz5Items: [
            { text: "Control de tamaño de fuente", plus: true },
            { text: "Opacidad predeterminada del memo", plus: true },
            { text: "Colores de fondo y texto personalizados", plus: true },
            { text: "Fuentes personalizadas", plus: true }
        ],
        footerLangLabel: "Idioma",
        themeLight: "Claro",
        themeDark: "Oscuro",
        themeAuto: "Auto",
        themeLightLabel: "Modo claro",
        themeDarkLabel: "Modo oscuro",
        themeAutoLabel: "Seguir sistema",
        themeAriaLabel: "Tema",
        pageCtaDownload: "Descargar",
        pageCtaCompare: "Ver comparación",
        featuresCtaTitle: "Amplíe con Peekom Plus",
        featuresCtaDesc: "Desbloquee 10 ranuras, temas personalizados, exportación y más dentro de la app.",
        helpCtaTitle: "Empiece ahora",
        helpCtaDesc: "Instale Peekom y pruebe memos en el borde de su monitor.",
        faqCtaTitle: "¿Aún tiene preguntas?",
        faqCtaDesc: "Consulte la comparación de funciones gratis vs Plus.",
        contactCtaTitle: "¿Aún no ha probado Peekom?",
        contactCtaDesc: "Instálelo gratis y empiece de inmediato.",
        downloadCtaTitle: "¿Necesita Plus?",
        downloadCtaDesc: "Introduzca su clave de licencia en la misma app para activar Plus."
    },
    fr: {
        navHome: "Accueil", navFeatures: "Fonctionnalités", navDownload: "Télécharger", navFaq: "FAQ", navHelp: "Guide", navContact: "Contact",
        searchPlaceholder: "Rechercher...",
        heroTitleMain: "Peekom",
        heroTagline: "L'app de mémos sur le bord est de retour sous <strong>Peekom</strong>.<br>Des notes légères et rapides au bord de l'écran—restez organisé sans interrompre votre travail ou votre présentation.",
        heroPlusNote: 'Après avoir installé l\'app gratuite, passez à Peekom Plus dans les Réglages.<br><a href="/features/#compare">Voir gratuit vs Plus</a> dans le tableau comparatif.',
        heroUpgradeNote: "Après avoir installé l'app gratuite, passez à Peekom Plus dans les Réglages.",
        heroFreeCompareNote: '<a href="/features/#compare">Voir gratuit vs Plus</a>.',
        heroWinBtn: "Télécharger pour Windows", heroMacBtn: "Télécharger pour macOS",
        heroPlusBuyBtn: "Acheter",
        heroPlusCardTitle: "Peekom Plus",
        heroPlusCardBadge: "PAID",
        heroPlusCardOs: "Windows",
        heroMacPlusCardTitle: "Peekom Plus",
        heroMacPlusCardBadge: "PAID",
        heroPlusCardMeta: "Paiement unique · jusqu'à 2 appareils · à vie",
        heroFreeCardTitle: "Peekom",
        heroFreeCardBadge: "FREE",
        heroMacFreeCardBadge: "FREE",
        heroWinCardMeta: "Windows 10 · 11 (64 bits)",
        heroMacFreeCardMeta: "macOS (Universal)",
        heroFreeDownloadLabel: "Télécharger",
        carouselCap1: "Poignée au bord de l'écran",
        carouselCap2: "Ouvrir le mémo par clic ou raccourci",
        carouselCap3: "Mode ICE · délai de repli automatique",
        reviewBtnLabel: "Laisser un avis",
        reviewEmpty: "Soyez le premier à partager votre expérience !",
        reviewAnonymous: "Anonyme",
        detectWin: "Détecté : <strong>Windows</strong> — Windows recommandé",
        detectMac: "Détecté : <strong>macOS</strong> — macOS recommandé",
        detectGeneric: "OS non détecté — choisissez manuellement",
        featuresTitle: "Fonctionnalités", featuresSub: "Ce que fait Peekom en un coup d'œil.",
        compareTitle: "Peekom vs Peekom Plus", compareSub: "Une seule app — Peekom Plus se débloque dans l'app.",
        comparePricing: '<span class="pricing-was">$' + PRICING.list.toFixed(2) + '</span> <span class="pricing-now">$' + PRICING.sale.toFixed(2) + ' USD</span> <span class="pricing-vat">(HT)</span> · <span class="pricing-launch">Prix de lancement</span> · paiement unique · jusqu\'à 2 appareils · mises à jour mineures incluses · remboursement 30 jours (<a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>)',
        guidePlusP: "1) Acheter au prix de lancement 9,99 $ sur Lemon Squeezy → 2) Recevoir la clé de licence par e-mail → 3) Ouvrir Peekom → saisir la clé dans l'interface de verrouillage ou les Réglages → 4) Activation de Peekom Plus terminée. Remboursement 30 jours : <a href=\"mailto:" + CONTACT_EMAIL + "\">" + CONTACT_EMAIL + "</a>",
        dlSub: "Installez Peekom une fois. Passez à Peekom Plus dans l'app.",
        dlWin: "Peekom Setup (Windows)", dlMac: "Peekom Setup (macOS)",
        dlPlusHint: 'Peekom Plus : Avant <span class="pricing-was">$' + PRICING.list.toFixed(2) + '</span> → Lancement <strong>$' + PRICING.sale.toFixed(2) + '</strong> (HT) · <a href="' + LINKS.buy + '" id="dlBuyLinkInner">Acheter sur Lemon Squeezy</a> → saisir la clé de licence dans l\'app',
        featureGifPending: "GIF de démonstration bientôt disponible",
        compareNoLabel: "Non pris en charge",
        faqSub: "Questions fréquentes sur Peekom.",
        refundPolicyTitle: "Politique de remboursement de Peekom Plus",
        refundPolicyBody:
            "<p>Les paiements et les remboursements de Peekom Plus sont traités par <strong>Lemon Squeezy</strong>, notre revendeur officiel (Merchant of Record).</p>" +
            '<ul class="faq-refund-list">' +
            "<li><strong>Délai de demande</strong> — Nous examinons les demandes envoyées dans les <strong>30 jours</strong> suivant l'achat.</li>" +
            "<li><strong>Cas remboursables</strong> — Nous remboursons les situations suivantes :" +
            "<ul>" +
            "<li>Un <strong>défaut du produit</strong> : l'app ne se lance pas ou ne fonctionne pas correctement.</li>" +
            "<li>Un <strong>paiement en double</strong> pour la même commande.</li>" +
            "</ul></li>" +
            "<li><strong>Cas non remboursables</strong> — Nous ne pouvons pas rembourser les situations suivantes :" +
            "<ul>" +
            "<li><strong>Un changement d'avis</strong> après l'achat.</li>" +
            "<li><strong>Un changement de formule</strong>, par exemple Single ↔ Double/Family. Nous ne proposons pas de mise à niveau au prorata. Si vous avez besoin de plus d'appareils, vous devez <strong>acheter la formule supérieure séparément</strong> ; la formule initiale n'est pas remboursée automatiquement et aucune différence de prix n'est créditée.</li>" +
            "<li><strong>Un remboursement après l'activation de la licence.</strong> « Activated » (activée) signifie que la clé a été vérifiée avec succès et enregistrée pour permettre d'utiliser Plus sur cet appareil. Une activation réussie montre que le produit fonctionne : ce n'est donc <strong>pas considéré comme un défaut du produit</strong>.</li>" +
            "<li><strong>Les problèmes liés uniquement à votre environnement</strong> : pare-feu d'entreprise ou d'école, logiciel de sécurité, réseau totalement isolé (sans internet), téléchargements GitHub bloqués ou blocage de <code>api.lemonsqueezy.com</code>. C'est particulièrement vrai lorsque la licence est <strong>déjà activée</strong>.</li>" +
            "<li><strong>La gêne liée au nombre d'appareils autorisés ou au remplacement d'un PC.</strong> Si vous devez passer à un autre appareil, <a href=\"/contact/\">contactez-nous</a> : nous pouvons désactiver l'ancien appareil pour vous.</li>" +
            "</ul></li>" +
            "</ul>" +
            "<p><strong>Avant d'acheter (activation et réseau)</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li>La <strong>première activation de Plus</strong> nécessite une connexion internet et l'accès à <code>https://api.lemonsqueezy.com</code>.</li>" +
            "<li>Même si les sites web habituels s'ouvrent, l'activation peut échouer si seule cette adresse est bloquée.</li>" +
            "<li>Un PC utilisé exclusivement sur un <strong>réseau totalement isolé (sans internet)</strong> peut ne pas pouvoir être activé du tout.</li>" +
            "<li>Le programme d'installation est hébergé sur GitHub Releases : le téléchargement peut donc échouer là où github.com est bloqué.</li>" +
            "<li>Si vous prévoyez d'utiliser Peekom uniquement sur un PC professionnel, nous vous conseillons de vérifier les points ci-dessus avant d'acheter.</li>" +
            "</ul>" +
            "<p><strong>Si votre environnement empêche d'utiliser Plus — comment nous examinons la demande</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li>L'achat a été effectué dans les <strong>30 derniers jours</strong>, et</li>" +
            "<li>la licence est <strong>Inactive (0 appareil activé)</strong>, ou il s'agit d'un défaut du produit ou d'un paiement en double, et</li>" +
            "<li>vous nous écrivez avec votre numéro de commande et une description : nous <strong>examinons alors le cas individuellement</strong>.</li>" +
            "<li>En revanche, si la licence est <strong>déjà activée</strong> et que le réseau de l'entreprise est le seul motif, la demande n'est en principe pas remboursable.</li>" +
            "</ul>" +
            "<p><strong>Votre licence et la procédure de remboursement</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li><strong>Licence</strong> — Une fois le remboursement effectué, votre clé de licence Peekom Plus est désactivée et l'app revient à la version gratuite au prochain lancement en ligne.</li>" +
            "<li><strong>Comment faire la demande</strong> — Utilisez le <a href=\"https://forms.gle/fbzSb2Gf1THnFwGD6\" target=\"_blank\" rel=\"noopener\">formulaire de contact (ou e-mail)</a> et indiquez votre <strong>Order #</strong> (numéro de commande) ainsi qu'une brève description. Ajouter l'adresse e-mail utilisée pour le paiement nous aide à retrouver la commande plus vite. Nous ne pouvons pas retrouver une commande à partir d'un simple numéro de téléphone.</li>" +
            "<li><strong>Traitement</strong> — Après examen, nous effectuons le remboursement depuis le tableau de bord Lemon Squeezy ; selon votre émetteur de carte ou votre moyen de paiement, plusieurs jours ouvrés peuvent être nécessaires avant qu'il apparaisse.</li>" +
            "</ul>",
        faqR1q: "Comment demander un remboursement Peekom Plus ?",
        faqR1a:
            "<p>Envoyez votre <strong>Order #</strong> (numéro de commande) via le <a href=\"https://forms.gle/fbzSb2Gf1THnFwGD6\" target=\"_blank\" rel=\"noopener\">formulaire de contact (ou e-mail)</a>.</p>" +
            "<p>Ajouter l'<strong>adresse e-mail utilisée pour le paiement</strong> nous aide à retrouver votre commande plus vite. Nous ne pouvons pas retrouver une commande à partir d'un simple numéro de téléphone.</p>" +
            "<p>Décrivez aussi ce qui s'est passé (l'app ne se lance pas, un paiement en double, etc.).</p>" +
            "<p>Si la demande est éligible, nous effectuons le remboursement depuis le tableau de bord Lemon Squeezy. Selon votre émetteur de carte ou votre moyen de paiement, quelques jours ouvrés peuvent être nécessaires avant qu'il apparaisse.</p>",
        faqR2q: "Quels cas donnent droit à un remboursement ?",
        faqR2a:
            "<p><strong>Remboursable</strong> — L'achat a été effectué dans les <strong>30 jours</strong> et il s'agit d'un <strong>défaut du produit</strong> (l'app ne se lance pas ou ne fonctionne pas correctement) ou d'un <strong>paiement en double</strong> pour la même commande.</p>" +
            "<p><strong>Non remboursable</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Un changement d'avis.</strong></li>" +
            "<li><strong>Un changement de formule</strong> (Single ↔ Double/Family) : il n'y a pas de mise à niveau au prorata et la formule supérieure doit être achetée séparément.</li>" +
            "<li>Un remboursement lorsque la licence est <strong>déjà activée</strong>.</li>" +
            "<li>Les problèmes liés <strong>uniquement à votre environnement</strong> : pare-feu d'entreprise ou d'école, réseau sans internet, téléchargements GitHub bloqués — surtout lorsque la licence est <strong>déjà activée</strong>.</li>" +
            "<li>La gêne liée au nombre d'appareils autorisés ou au remplacement d'un PC : contactez-nous plutôt, nous pouvons vous aider à changer d'appareil.</li>" +
            "</ul>" +
            "<p>Si vous êtes dans les 30 jours suivant l'achat et que la licence est <strong>Inactive (0 appareil activé)</strong>, écrivez-nous avec votre numéro de commande et une description : nous <strong>examinerons</strong> le cas individuellement.</p>" +
            "<p>Les paiements et remboursements sont gérés par Lemon Squeezy, notre revendeur officiel (Merchant of Record).</p>",
        faqR3q: "Que devient ma licence après un remboursement ?",
        faqR3a:
            "<p>Une fois le remboursement effectué, votre clé de licence Peekom Plus est <strong>désactivée</strong>.</p>" +
            "<p>L'app revient automatiquement à la <strong>version gratuite</strong> au prochain lancement en ligne, et les fonctions réservées à Plus cessent de fonctionner.</p>" +
            "<p>Vos mémos restent sur votre PC, mais vous retrouvez les fonctions de la version gratuite (3 index, etc.) : exportez donc ce dont vous avez besoin <strong>avant</strong> de demander le remboursement.</p>" +
            "<p>Assurez-vous de vouloir cesser d'utiliser Plus avant d'envoyer votre demande.</p>",
        faqR4q: "Puis-je utiliser Peekom Plus derrière un pare-feu d'entreprise ou sur un réseau sans internet ?",
        faqR4a:
            "<p>La version gratuite fonctionne sans connexion internet.</p>" +
            "<p>En revanche, la <strong>première activation de Plus</strong> nécessite une connexion internet et l'accès à <code>https://api.lemonsqueezy.com</code> en HTTPS (443).</p>" +
            "<p>Même si les sites web habituels s'ouvrent, l'activation peut échouer si seule cette adresse est bloquée, et un PC utilisé exclusivement sur un <strong>réseau totalement isolé (sans internet)</strong> peut ne pas pouvoir être activé du tout.</p>" +
            "<p>Le programme d'installation est également hébergé sur GitHub Releases : le téléchargement lui-même peut donc échouer là où github.com est bloqué.</p>" +
            "<p><strong>Essayez ceci</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Activez une fois sur un autre réseau</strong>, par exemple le Wi‑Fi de votre domicile ou un partage de connexion mobile. Après l'activation, vous pouvez utiliser Plus sans internet (la licence est revérifiée dès que vous êtes de nouveau en ligne).</li>" +
            "<li>Demandez à votre service informatique d'autoriser <code>https://api.lemonsqueezy.com</code> en <strong>HTTPS (443)</strong>.</li>" +
            "<li>Si vous utilisez un VPN ou un proxy d'entreprise, désactivez-le un instant ou réessayez sur un réseau autorisé.</li>" +
            "</ul>" +
            "<p><strong>Vérifiez avant d'acheter.</strong> Si vous prévoyez d'utiliser Peekom uniquement sur un PC professionnel, ces restrictions peuvent empêcher l'activation. Un remboursement demandé <strong>après l'activation de la licence</strong>, lorsque le réseau de l'entreprise est le seul motif, n'est pas remboursable.</p>",
        faqR5q: "Puis-je être remboursé après avoir activé ma licence ?",
        faqR5a:
            "<p>En principe, <strong>non : la demande n'est pas remboursable.</strong></p>" +
            "<p><strong>Activated</strong> (activée) signifie que la clé a été vérifiée avec succès et enregistrée pour permettre d'utiliser Plus sur cet appareil. Une activation réussie montre que le produit fonctionne : ce n'est donc <strong>pas considéré comme un défaut du produit</strong>.</p>" +
            "<p>Même après l'activation, nous remboursons les cas suivants :</p>" +
            '<ul class="guide-step-list">' +
            "<li>Un <strong>défaut du produit</strong> : l'app ne se lance pas ou ne fonctionne pas correctement.</li>" +
            "<li>Un <strong>paiement en double</strong> pour la même commande.</li>" +
            "</ul>" +
            "<p>Si vous n'avez <strong>pas encore</strong> activé (licence <strong>Inactive</strong>, 0 appareil activé) et que vous êtes dans les 30 jours suivant l'achat, <a href=\"/contact/\">contactez-nous</a> avec votre numéro de commande et une description : nous examinerons le cas individuellement.</p>" +
            "<p>Si vous avez simplement besoin de passer à un autre appareil, nous pouvons <strong>désactiver l'ancien appareil</strong> au lieu de rembourser.</p>",
        faq1q: "Quelle est la différence entre gratuit et Plus ?",
        faq1a: 'Le gratuit inclut 3 index, déplacement groupé de la poignée, mode ICE, délai au survol, sélection du moniteur, Markdown, barre de formatage et insertion d\'images. Peekom Plus (lancement 9,99 $, tarif 12,99 $) débloque 10 emplacements, thème personnalisé, polices, opacité, redimensionnement d\'images et export dans l\'app. Consultez le <a href="/features/#compare">tableau comparatif</a>.',
        compareFreeName: "Peekom (Gratuit)",
        comparePlusName: "Peekom Plus",
        compareCta: "Obtenir Peekom Plus",
        comparePromoBanner: "Promo de lancement · {pct} % de réduction maintenant",
        helpTitle: "Guide", helpSub: "Démarrez avec Peekom.",
        guideStartBody:
            '<div class="guide-step">' +
                "<h3>1. Installer</h3>" +
                '<ul class="guide-step-list">' +
                    '<li><strong>Télécharger</strong> — Obtenez l\'installateur Windows ou macOS sur la page <a href="/download/">Télécharger</a> (ou accueil).</li>' +
                    "<li><strong>Exécuter Peekom-Setup.exe</strong> — Double-cliquez sur l'installateur et suivez les instructions.</li>" +
                    '<li><strong>Avertissement SmartScreen</strong> — Si une fenêtre bleue apparaît, ouvrez le <a href="#" onclick="openModal(); return false;">guide d\'installation</a> et choisissez <strong>Informations complémentaires</strong> → <strong>Exécuter quand même</strong>.</li>' +
                "</ul>" +
            "</div>" +
            '<div class="guide-step">' +
                "<h3>2. Réglages communs et par index</h3>" +
                '<p class="guide-step-lead">Clic droit sur l\'icône de la barre des tâches → <strong>Réglages</strong>.</p>' +
                '<h4 class="guide-step-sub">Réglages communs</h4>' +
                '<ul class="guide-step-list">' +
                    "<li>Choisir le <strong>moniteur d'affichage</strong> (auto ou fixe)</li>" +
                    "<li><strong>Mode de déclenchement</strong> — <strong>Contrôle souris</strong> / <strong>Contrôle raccourcis</strong> ; personnaliser trois raccourcis (basculer, index préc./suiv.)</li>" +
                    "<li><strong>Délai de repli automatique</strong> de la poignée (0,3 s par défaut, réglable dans les Réglages)</li>" +
                "</ul>" +
                '<div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> Polices personnalisées, opacité par défaut, sauvegarde/restauration JSON, export (.txt/.md/.json) et plus.</div>' +
                '<h4 class="guide-step-sub">Réglages par index</h4>' +
                '<ul class="guide-step-list">' +
                    "<li>Ajouter/supprimer des <strong>index</strong> (3 gratuits)</li>" +
                    "<li>Définir <strong>titre et couleur</strong> par index</li>" +
                    "<li>Choisir le <strong>format du mémo</strong> (1:1 / 3:4)</li>" +
                "</ul>" +
                '<div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> Jusqu\'à 10 emplacements avec positions de poignée indépendantes.</div>' +
            "</div>" +
            '<div class="guide-step">' +
                "<h3>3. Rédiger des mémos</h3>" +
                '<ul class="guide-step-list">' +
                    "<li><strong>Repositionner</strong> — Faites glisser la poignée du bord à la hauteur souhaitée.</li>" +
                    "<li><strong>Peek / ICE</strong> — Basculer en haut du mémo. Peek s'ouvre par clic ou raccourci ; ICE reste épinglé.</li>" +
                    '<li><strong>Personnaliser le texte</strong> — Utilisez Markdown, la barre d\'outils et des images. Voir <a href="#guide-edit">Édition</a> ci-dessous.</li>' +
                "</ul>" +
            "</div>" +
            '<div class="guide-step guide-step--last">' +
                "<h3>4. Passer à Peekom Plus</h3>" +
                '<ul class="guide-step-list">' +
                    "<li>Saisissez votre clé de licence via le bouton <strong>Passer à Plus</strong> dans l'app (ou la fenêtre <strong>Réglages</strong> au premier lancement).</li>" +
                    '<li>Voir <a href="#guide-plus">Activer Plus</a> pour les instructions détaillées.</li>' +
                "</ul>" +
            "</div>",
        help1t: "1. Installer", help1p: "Téléchargez et exécutez Peekom Setup. SmartScreen peut apparaître sur Windows.",
        help2t: "2. Ouvrir un mémo", help2p: "Cliquez sur la poignée ou, en mode <strong>contrôle raccourcis</strong>, appuyez sur <strong>Ctrl+Shift+M</strong> (par défaut) pour basculer le mémo le <strong>plus récent</strong>.",
        help3t: "3. Changer de mémo", help3p: "En mode <strong>contrôle souris</strong>, appuyez sur <strong>↑ / ↓</strong> avec le panneau ouvert. En mode <strong>contrôle raccourcis</strong>, utilisez <strong>Ctrl+Shift+↑ / ↓</strong> (même fermé). <strong>Ctrl+1–9</strong> saute à un index.",
        help4t: "4. Écrire", help4p: "Saisissez dans le panneau ; ajoutez des index et des titres dans les Réglages.",
        help5t: "5. Mode ICE", help5p: "Cliquez sur la puce <strong>Peek / ICE</strong> pour épingler le mémo sans survol (gratuit et Plus).",
        help6t: "6. Réglages · Plus", help6p: "Barre des tâches → Réglages → onglet Commun pour changer le mode de déclenchement et les raccourcis. Utilisez le bouton Passer à Plus pour saisir une clé de licence et passer à la marque Peekom Plus.",
        winGuideBtn: "Une alerte bleue SmartScreen apparaît lors de l'installation sur Windows ?",
        dlTitle: "Télécharger", dlWinNote: "Windows 10 et 11 (64 bits)",
        dlWinLabel: "Windows x64 · Windows 10 et 11 (64 bits)",
        dlMacLabel: "macOS",
        linkChangelog: "Journal des modifications / Versions", linkPrev: "Versions précédentes", linkSmartScreen: "Guide SmartScreen",
        faqTitle: "FAQ",
        faqGroupProductLabel: "Produit et fonctionnalités",
        faqGroupLicenseLabel: "Licence",
        faqGroupInstallLabel: "Installation",
        faqGroupTroubleshootLabel: "Dépannage",
        faq2q: "Comment fonctionne le double écran ?",
        faq2a: "Dans Réglages → Moniteur d'affichage, choisissez auto (suivre la souris) ou un moniteur fixe. Disponible en Gratuit et Plus.",
        faq8q: "Peekom ne peut-il être utilisé que sur le bord droit du moniteur ?",
        faq8a: "Actuellement, Peekom fonctionne uniquement sur le bord droit. Nous prévoyons d'ajouter le support des bords gauche, haut et bas dans une future mise à jour.",
        faq9q: "J'ai désinstallé Peekom Plus par erreur. Que deviennent mes fonctionnalités payantes ?",
        faq9a:
            "<p>La désinstallation de l'app ne supprime pas votre licence Lemon Squeezy. Suivez ces étapes pour restaurer Peekom Plus et toutes les fonctionnalités payantes.</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>1. Réinstaller Peekom</strong> — Téléchargez la version gratuite (<code>Peekom-Setup.exe</code>) sur <a href=\"/download/\">peekom.com</a> et installez-la.</li>" +
            "<li><strong>2. Retrouver la clé de licence</strong> — Ouvrez l'e-mail de reçu Lemon Squeezy de votre achat et copiez la <strong>[License Key]</strong>. Si vous avez perdu l'e-mail, connectez-vous à l'historique des commandes Lemon Squeezy avec le même e-mail pour la revoir.</li>" +
            "<li><strong>3. Réactiver Plus</strong> — Ouvrez Réglages (icône engrenage, en haut à droite), collez la clé dans <strong>Activation Plus</strong> et confirmez. L'app repasse en Peekom Plus et restaure 10 emplacements, thèmes personnalisés et autres fonctions payantes.</li>" +
            "</ul>" +
            "<p><strong>Limite d'appareils (jusqu'à 2)</strong> — Réinstaller sur le même PC compte comme le même appareil, sans impact sur l'activation. Si vous changez d'ordinateur, chaque licence permet jusqu'à deux appareils (p. ex. PC professionnel + PC personnel).</p>",
        faq3q: "Comment activer Plus ?",
        faq3a:
            "<p>Installez d'abord l'<strong>app gratuite</strong>, puis saisissez dans les Réglages ou sur l'écran de verrouillage Plus la clé de licence achetée sur Lemon Squeezy. Il n'y a pas d'installateur Plus distinct et aucune réinstallation n'est nécessaire.</p>" +
            "<p>La <strong>première activation nécessite une connexion internet</strong> et l'accès à <code>https://api.lemonsqueezy.com</code>. Ensuite, vous pouvez continuer à utiliser Plus hors ligne.</p>" +
            "<p>Une fois l'activation réussie, la licence est enregistrée comme <strong>Activated</strong> (activée) sur cet appareil. Après l'activation, les remboursements pour changement d'avis, changement de formule ou restrictions du réseau d'entreprise ne sont en principe pas possibles : merci de lire d'abord la politique de remboursement ci-dessus.</p>",
        faq3bq: "Puis-je utiliser une clé de licence sur plusieurs PC ?",
        faq3ba: "Oui. Vous pouvez saisir la même clé de licence à 16 caractères une fois sur chacun de deux PC au maximum—par exemple, PC professionnel et personnel—pour utiliser Peekom Plus sur les deux.",
        faq3cq: "Puis-je continuer à l'utiliser si je change de PC professionnel ou de poste ?",
        faq3ca: "Selon votre formule, Peekom Plus peut être utilisé sur 1 appareil (Single), 2 (Double) ou 5 (Family). La réinstallation sur le même appareil est autorisée. Si vous devez passer à un nouvel appareil, contactez-nous : nous examinerons votre demande et vous aiderons. Selon la situation, nous pourrons réinitialiser les appareils déjà activés avant une réactivation sur le nouvel appareil. Le nombre d'appareils autorisés ou le remplacement d'un PC ne donnent à eux seuls <strong>pas droit à un remboursement</strong>, mais nous vous aidons volontiers à changer d'appareil en désactivant l'ancien : il suffit de nous contacter.",
        faq3dq: "Quelles informations envoyer pour un changement d'appareil ?",
        faq3da: "Pour un traitement plus rapide, envoyez l'adresse e-mail utilisée à l'achat, le numéro de commande, la clé de licence et la raison du changement d'appareil. Si vous utilisez déjà toutes les places de votre formule (Single 1 · Double 2 · Family 5), nous devrons peut-être réinitialiser les appareils actifs avant la réactivation : sauvegardez donc vos données avant de nous contacter. Le nombre d'appareils autorisés ou le remplacement d'un PC ne donnent à eux seuls <strong>pas droit à un remboursement</strong>, mais si vous nous contactez, nous vous aidons à changer d'appareil en désactivant l'ancien.",
        faq4q: "Une alerte bleue apparaît lors de l'installation sur Windows.",
        faq4a: 'Les alertes SmartScreen sont courantes pour les apps non signées. Consultez le <a href="#" onclick="openModal(); return false;">guide d\'installation</a> : [Informations complémentaires] → [Exécuter quand même].',
        faq5q: "Quelles versions de Windows sont prises en charge ?",
        faq5a: "Peekom fonctionne sur Windows 10 et 11 (64 bits). L'installateur est uniquement en 64 bits. Windows 7, 8 et 8.1 ne sont pas pris en charge (Electron 36).",
        faq6q: "J'ai ajouté un index mais il n'apparaît pas dans les Réglages.",
        faq6a: "Rouvrez les Réglages pour actualiser la liste ; les versions récentes synchronisent automatiquement.",
        faq7q: "Texte étrange au démarrage après désinstallation.",
        faq7a: "Désactivez les entrées de démarrage Peekom restantes dans le Gestionnaire des tâches, ou réinstallez puis désinstallez à nouveau.",
        compareColFeature: "Fonctionnalité",
        contactTitle: "Contact", contactSub: "Envoyez-nous vos retours.",
        contactFeedbackTitle: "Envoyer un retour",
        contactFeedbackDesc: "Rapports de bugs, idées de fonctionnalités, questions de licence",
        contactFeedbackBtn: "Ouvrir le formulaire de retour",
        contactReviewTitle: "Laisser un avis",
        contactReviewDesc: "Partagez votre expérience — elle peut être mise en avant sur notre site.",
        contactReviewBtn: "Ouvrir le formulaire d'avis",
        contactEmailTitle: "Nous écrire par e-mail",
        contactEmailDesc: "Quand vous avez besoin de nous contacter directement",
        contactNote: "Nous visons une réponse sous environ 10 jours ouvrés. Les formulaires Google arrivent plus vite que l'e-mail, merci de les utiliser quand c'est possible.",
        contactEmail: "hello.peekom@gmail.com",
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "Confidentialité",
        guideTitle: "Guide d'installation SmartScreen pour Windows",
        step1: 'Lors de l\'exécution de l\'installateur, une fenêtre bleue SmartScreen indiquant <b>« Application non reconnue »</b> peut apparaître.',
        step2: "Cliquez sur <b>[Informations complémentaires]</b> en haut de la description.",
        step3: "Cliquez sur <b>[Exécuter quand même]</b> en bas à droite pour terminer l'installation.",
        searchNoResults: "Aucun résultat",
        modalClose: "Fermer",
        promoNote: "Augmentation de prix prévue après la fin de la promotion",
        promoSectionTitle: "Peekom Plus (Payant)",
        promoFreeTitle: "Peekom (Gratuit)",
        promoVat: "(HT)",
        promoLaunchLabel: "Prix promo\nde lancement\nappliqué",
        comparePricingExtra: " · paiement unique · jusqu'à 2 appareils · mises à jour mineures incluses · remboursement 30 jours (<a href=\"mailto:" + CONTACT_EMAIL + "\">" + CONTACT_EMAIL + "</a>)",
        dlPlusHintExtra: ' · <a href="' + LINKS.buy + '" id="dlBuyLinkInner">Acheter sur Lemon Squeezy</a> → saisir la clé de licence dans l\'app',
        markdownGuideTitle: "Notes avec Markdown",
        markdownGuideBody:
            '<p class="guide-table-intro">Saisissez naturellement—appuyez sur <strong>Entrée</strong> et le formatage s\'applique automatiquement.</p>' +
            '<table class="compare-table guide-table"><thead><tr><th>Format de saisie</th><th>Après Entrée</th></tr></thead><tbody>' +
            '<tr><td><code># Ordre du jour</code></td><td class="guide-md-result"><h1 class="guide-md-h1">Ordre du jour</h1></td></tr>' +
            '<tr><td><code>## Notes</code></td><td class="guide-md-result"><h2 class="guide-md-h2">Notes</h2></td></tr>' +
            '<tr><td><code>### Référence</code></td><td class="guide-md-result"><h3 class="guide-md-h3">Référence</h3></td></tr>' +
            '<tr><td><code>- Tâche</code></td><td class="guide-md-result"><ul class="guide-md-ul"><li>Tâche</li></ul></td></tr>' +
            '<tr><td><code>- [ ] Tâche</code></td><td class="guide-md-result"><label class="guide-md-task"><input type="checkbox" disabled> Tâche</label></td></tr>' +
            '<tr><td><code>**Important**</code></td><td class="guide-md-result"><strong>Important</strong></td></tr>' +
            '<tr><td><code>*Emphase*</code></td><td class="guide-md-result"><em>Emphase</em></td></tr>' +
            "</tbody></table>",
        formatBarGuideTitle: "Notes avec barre d'outils",
        formatBarGuideBody:
            '<p class="guide-table-intro">Cliquez sur les boutons au-dessus du mémo—aucun raccourci clavier requis.</p>' +
            '<table class="compare-table guide-table"><thead><tr><th>Fonctionnalité</th><th>Mode d\'emploi</th></tr></thead><tbody>' +
            "<tr><td>Couleur · gras · italique · souligné · barré</td><td>Sélectionnez le texte, puis cliquez sur un bouton</td></tr>" +
            "<tr><td>Alignement (gauche/centre/droite/justifié)</td><td>Modifier l'alignement du paragraphe</td></tr>" +
            "<tr><td>Listes (puce/carré/numérotée/simple)</td><td>Choisir un style de liste dans le menu</td></tr>" +
            "<tr><td>Insertion d'image</td><td>Gratuit : 1 par mémo · Plus : 5 (redimensionner et recadrer sur Plus)</td></tr>" +
            "</tbody></table>",
        guideKeysTitle: "Raccourcis",
        guideKeysIntro: 'Dans Réglages → Commun → <strong>Mode de déclenchement</strong>, choisissez <strong>Contrôle souris</strong> ou <strong>Contrôle raccourcis</strong>. Sur macOS, utilisez ⌘ (Commande) au lieu de Ctrl.',
        gkColAction: "Action", gkColKey: "Par défaut", gkColNote: "Note",
        gk1a: "Basculer ouvrir/fermer le mémo", gk1k: "Ctrl+Shift+M",
        gk1n: "Mémo le plus récent. Mode contrôle raccourcis uniquement. Personnalisable dans Réglages → Commun → Mode de déclenchement",
        gk2a: "Ouvrir l'index précédent", gk2k: "Ctrl+Shift+↑",
        gk2n: "Ouvre l'index précédent et affiche le panneau. Mode contrôle raccourcis. Personnalisable dans les Réglages",
        gk3a: "Ouvrir l'index suivant", gk3k: "Ctrl+Shift+↓",
        gk3n: "Ouvre l'index suivant et affiche le panneau. Mode contrôle raccourcis. Personnalisable dans les Réglages",
        gk4a: "Changer d'index", gk4k: "↑ / ↓",
        gk4n: "Mode contrôle souris uniquement, panneau doit être ouvert",
        gk5a: "Aller à l'index", gk5k: "Ctrl+1–9 (Ctrl+0 = index 10)",
        gk5n: "Ouvre directement le mémo de cet index",
        gk6a: "Taille de police", gk6k: "Ctrl + molette", gk6n: "Dans la zone du mémo. Plus uniquement",
        guidePlusTitle: "Activer Plus",
        guidePlusStep1: "1. Achetez Peekom Plus avec le bouton ci-dessous.",
        guidePlusStep2: "2. Vérifiez votre e-mail pour la clé de licence.",
        guidePlusStep3: "3. Ouvrez Peekom et saisissez la clé dans la fenêtre <strong>Réglages</strong> ou dans <strong>Réglages</strong>.",
        macComingSoonTitle: "macOS",
        macComingSoonBody: "La version macOS est en développement.<br>Sortie prévue : <strong>juillet 2026</strong>.",
        guidePlusStep4: "4. L'activation de Peekom Plus est terminée.",
        guideNavStart: "Premiers pas", guideNavKeys: "Raccourcis", guideNavEdit: "Édition", guideNavPlus: "Activer Plus",
        guideSectionEditTitle: "Édition",
        versionHistoryTitle: "Historique des versions",
        versionColVersion: "Version", versionColDate: "Date de sortie", versionColWin: "Windows", versionColMac: "macOS",
        versionLatest: "Dernière", versionWin: "64 bits", versionMac: "Universel", versionMacSoon: "Bientôt disponible",
        changelogTitle: "Journal des modifications",
        fz1Title: "Apparaître depuis le bord",
        fz1Items: [
            { text: "Clic sur l'index pour ouvrir le mémo rapidement" },
            { text: "Glisser l'index pour repositionner" },
            { text: "Interrupteur Peek / ICE" },
            { text: "Repli automatique en mode Peek" }
        ],
        fz2Title: "Travaillez plus efficacement",
        fz2Items: [
            { text: "Raccourci pour ouvrir le mémo récent" },
            { text: "Épinglage de l'écran cible" },
            { text: "Prise en charge de la syntaxe Markdown" },
            { text: "Insertion d'image" }
        ],
        fz3Title: "Votre mémo personnalisé",
        fz3Items: [
            { text: "Barre de formatage" },
            { text: "Titres d'index personnalisés" },
            { text: "Format du mémo (1:1, 3:4)" },
            { text: "Couleurs d'arrière-plan par défaut" }
        ],
        fz4Title: "Allez plus loin avec Plus",
        fz4Items: [
            { text: "Jusqu'à 10 index indépendants", plus: true },
            { text: "Export · sauvegarde JSON", plus: true },
            { text: "Jusqu'à 5 images par mémo", plus: true },
            { text: "Redimensionner l'image · recadrage du format", plus: true }
        ],
        fz5Title: "Personnalisation réservée à Plus",
        fz5Items: [
            { text: "Contrôle de la taille de police", plus: true },
            { text: "Opacité par défaut du mémo", plus: true },
            { text: "Couleurs d'arrière-plan et de texte personnalisées", plus: true },
            { text: "Polices personnalisées", plus: true }
        ],
        footerLangLabel: "Langue",
        themeLight: "Clair",
        themeDark: "Sombre",
        themeAuto: "Auto",
        themeLightLabel: "Mode clair",
        themeDarkLabel: "Mode sombre",
        themeAutoLabel: "Suivre le système",
        themeAriaLabel: "Thème",
        pageCtaDownload: "Télécharger",
        pageCtaCompare: "Voir la comparaison",
        featuresCtaTitle: "Étendez avec Peekom Plus",
        featuresCtaDesc: "Débloquez 10 emplacements, thèmes personnalisés, export et plus dans l'app.",
        helpCtaTitle: "Commencez maintenant",
        helpCtaDesc: "Installez Peekom et essayez les mémos sur le bord de votre écran.",
        faqCtaTitle: "Encore des questions ?",
        faqCtaDesc: "Consultez la comparaison des fonctionnalités gratuit vs Plus.",
        contactCtaTitle: "Vous n'avez pas encore essayé Peekom ?",
        contactCtaDesc: "Installez gratuitement et commencez tout de suite.",
        downloadCtaTitle: "Besoin de Plus ?",
        downloadCtaDesc: "Saisissez votre clé de licence dans la même app pour activer Plus."
    },
    de: {
        navHome: "Start", navFeatures: "Funktionen", navDownload: "Download", navFaq: "FAQ", navHelp: "Anleitung", navContact: "Kontakt",
        searchPlaceholder: "Suchen...",
        heroTitleMain: "Peekom",
        heroTagline: "Die Rand-Memo-App ist zurück als <strong>Peekom</strong>.<br>Leichte, schnelle Notizen am Bildschirmrand—bleiben Sie organisiert, ohne Ihren Arbeits- oder Präsentationsfluss zu unterbrechen.",
        heroPlusNote: 'Nach der Installation der kostenlosen App upgraden Sie in den Einstellungen auf Peekom Plus.<br><a href="/features/#compare">Kostenlos vs Plus</a> in der Vergleichstabelle ansehen.',
        heroUpgradeNote: "Nach der Installation der kostenlosen App upgraden Sie in den Einstellungen auf Peekom Plus.",
        heroFreeCompareNote: '<a href="/features/#compare">Kostenlos vs Plus ansehen</a>.',
        heroWinBtn: "Für Windows herunterladen", heroMacBtn: "Für macOS herunterladen",
        heroPlusBuyBtn: "Jetzt kaufen",
        heroPlusCardTitle: "Peekom Plus",
        heroPlusCardBadge: "PAID",
        heroPlusCardOs: "Windows",
        heroMacPlusCardTitle: "Peekom Plus",
        heroMacPlusCardBadge: "PAID",
        heroPlusCardMeta: "Einmalkauf · bis zu 2 Geräte · lebenslang",
        heroFreeCardTitle: "Peekom",
        heroFreeCardBadge: "FREE",
        heroMacFreeCardBadge: "FREE",
        heroWinCardMeta: "Windows 10 · 11 (64-Bit)",
        heroMacFreeCardMeta: "macOS (Universal)",
        heroFreeDownloadLabel: "Herunterladen",
        carouselCap1: "Griff am Monitorrand",
        carouselCap2: "Memo per Klick oder Tastenkürzel öffnen",
        carouselCap3: "ICE-Modus · Auto-Einklapp-Verzögerung",
        reviewBtnLabel: "Bewertung abgeben",
        reviewEmpty: "Teile als Erster deine Erfahrung!",
        reviewAnonymous: "Anonym",
        detectWin: "Erkannt: <strong>Windows</strong> — Windows empfohlen",
        detectMac: "Erkannt: <strong>macOS</strong> — macOS empfohlen",
        detectGeneric: "OS nicht erkannt — manuell wählen",
        featuresTitle: "Funktionen", featuresSub: "Was Peekom auf einen Blick kann.",
        compareTitle: "Peekom vs Peekom Plus", compareSub: "Eine App — Peekom Plus wird in der App freigeschaltet.",
        comparePricing: '<span class="pricing-was">$' + PRICING.list.toFixed(2) + '</span> <span class="pricing-now">$' + PRICING.sale.toFixed(2) + ' USD</span> <span class="pricing-vat">(ohne MwSt.)</span> · <span class="pricing-launch">Einführungspreis</span> · Einmalkauf · bis zu 2 Geräte · kleinere Updates inklusive · 30-Tage-Rückerstattung (<a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>)',
        guidePlusP: "1) Zum Einführungspreis 9,99 $ auf Lemon Squeezy kaufen → 2) Lizenzschlüssel per E-Mail erhalten → 3) Peekom öffnen → Schlüssel in der Sperr-UI oder in den Einstellungen eingeben → 4) Peekom Plus-Aktivierung abgeschlossen. 30-Tage-Rückerstattung: <a href=\"mailto:" + CONTACT_EMAIL + "\">" + CONTACT_EMAIL + "</a>",
        dlSub: "Peekom einmal installieren. Auf Peekom Plus in der App upgraden.",
        dlWin: "Peekom Setup (Windows)", dlMac: "Peekom Setup (macOS)",
        dlPlusHint: 'Peekom Plus: Statt <span class="pricing-was">$' + PRICING.list.toFixed(2) + '</span> → Einführung <strong>$' + PRICING.sale.toFixed(2) + '</strong> (ohne MwSt.) · <a href="' + LINKS.buy + '" id="dlBuyLinkInner">Auf Lemon Squeezy kaufen</a> → Lizenzschlüssel in der App eingeben',
        featureGifPending: "Demo-GIF demnächst",
        compareNoLabel: "Nicht unterstützt",
        faqSub: "Häufige Fragen zu Peekom.",
        refundPolicyTitle: "Peekom Plus Rückerstattungsrichtlinie",
        refundPolicyBody:
            "<p>Zahlungen und Rückerstattungen für Peekom Plus werden über <strong>Lemon Squeezy</strong>, unseren Merchant of Record (offiziellen Verkäufer), abgewickelt.</p>" +
            '<ul class="faq-refund-list">' +
            "<li><strong>Antragsfrist</strong> — Wir prüfen Anfragen, die innerhalb von <strong>30 Tagen</strong> nach dem Kauf eingehen.</li>" +
            "<li><strong>Erstattungsfähig</strong> — Folgendes erstatten wir:" +
            "<ul>" +
            "<li>Ein <strong>Produktfehler</strong> — die App startet nicht oder funktioniert nicht korrekt.</li>" +
            "<li>Eine <strong>Doppelzahlung</strong> für dieselbe Bestellung.</li>" +
            "</ul></li>" +
            "<li><strong>Nicht erstattungsfähig</strong> — Folgendes können wir nicht erstatten:" +
            "<ul>" +
            "<li><strong>Meinungsänderung</strong> nach dem Kauf.</li>" +
            "<li><strong>Tarifwechsel</strong> — zum Beispiel Single ↔ Double/Family. Ein Upgrade gegen Aufpreis bieten wir nicht an. Wenn Sie mehr Geräte benötigen, müssen Sie den höheren Tarif <strong>separat kaufen</strong>; der ursprüngliche Tarif wird nicht automatisch erstattet und die Preisdifferenz wird nicht angerechnet.</li>" +
            "<li><strong>Eine Rückerstattung, nachdem die Lizenz bereits aktiviert wurde.</strong> „Activated“ (aktiviert) bedeutet, dass der Schlüssel erfolgreich geprüft und registriert wurde, sodass Plus auf diesem Gerät genutzt werden kann. Eine erfolgreiche Aktivierung zeigt, dass das Produkt funktioniert, und gilt daher <strong>nicht als Produktfehler</strong>.</li>" +
            "<li><strong>Probleme, die allein durch Ihre Umgebung verursacht werden</strong> — eine Firewall der Firma oder Schule, Sicherheitssoftware, ein vollständig abgeschottetes Netzwerk ohne Internet, blockierte GitHub-Downloads oder ein blockiertes <code>api.lemonsqueezy.com</code>. Das gilt besonders, wenn die Lizenz <strong>bereits aktiviert</strong> ist.</li>" +
            "<li><strong>Unannehmlichkeiten durch das Gerätelimit oder einen PC-Wechsel.</strong> Wenn Sie auf ein anderes Gerät wechseln müssen, <a href=\"/contact/\">kontaktieren Sie uns</a> — wir deaktivieren das alte Gerät gern für Sie.</li>" +
            "</ul></li>" +
            "</ul>" +
            "<p><strong>Bitte vor dem Kauf prüfen (Aktivierung und Netzwerk)</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li>Die <strong>erste Plus-Aktivierung</strong> benötigt eine Internetverbindung und Zugriff auf <code>https://api.lemonsqueezy.com</code>.</li>" +
            "<li>Auch wenn normale Webseiten laden, kann die Aktivierung fehlschlagen, wenn nur diese Adresse blockiert ist.</li>" +
            "<li>Ein PC, der ausschließlich in einem <strong>vollständig abgeschotteten Netzwerk ohne Internet</strong> genutzt wird, lässt sich möglicherweise überhaupt nicht aktivieren.</li>" +
            "<li>Die Installationsdatei liegt auf GitHub Releases, daher kann der Download dort fehlschlagen, wo github.com blockiert ist.</li>" +
            "<li>Wenn Sie Peekom nur auf einem Firmen-PC nutzen möchten, empfehlen wir, die oben genannten Punkte vor dem Kauf zu prüfen.</li>" +
            "</ul>" +
            "<p><strong>Wenn Ihre Umgebung die Nutzung von Plus verhindert — so prüfen wir das</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li>Der Kauf liegt innerhalb der letzten <strong>30 Tage</strong>, und</li>" +
            "<li>die Lizenz ist <strong>Inactive (0 aktivierte Geräte)</strong> oder es handelt sich um einen Produktfehler bzw. eine Doppelzahlung, und</li>" +
            "<li>Sie schreiben uns mit Ihrer Bestellnummer und einer Beschreibung — dann <strong>prüfen wir den Fall individuell</strong>.</li>" +
            "<li>Ist die Lizenz jedoch <strong>bereits aktiviert</strong> und das Firmennetzwerk der einzige Grund, ist die Anfrage in der Regel nicht erstattungsfähig.</li>" +
            "</ul>" +
            "<p><strong>Ihre Lizenz und der Ablauf der Rückerstattung</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li><strong>Lizenz</strong> — Nach Abschluss der Rückerstattung wird Ihr Peekom Plus Lizenzschlüssel deaktiviert und die App wechselt beim nächsten Start mit Internetverbindung zur kostenlosen Version.</li>" +
            '<li><strong>So beantragen Sie</strong> — Nutzen Sie das <a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">Kontaktformular (oder eine E-Mail)</a> und geben Sie Ihre <strong>Order #</strong> (Bestellnummer) sowie eine kurze Beschreibung an. Die für die Zahlung verwendete E-Mail-Adresse hilft uns, die Bestellung schneller zu finden. Anhand einer Telefonnummer allein können wir keine Bestellung finden.</li>' +
            "<li><strong>Abwicklung</strong> — Nach der Prüfung erstatten wir über das Lemon-Squeezy-Dashboard; je nach Kartenanbieter oder Zahlungsmethode kann es einige Werktage dauern, bis die Gutschrift erscheint.</li>" +
            "</ul>",
        faqR1q: "Wie beantrage ich eine Peekom-Plus-Rückerstattung?",
        faqR1a:
            '<p>Senden Sie Ihre <strong>Order #</strong> (Bestellnummer) über das <a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">Kontaktformular (oder per E-Mail)</a>.</p>' +
            "<p>Die <strong>für die Zahlung verwendete E-Mail-Adresse</strong> hilft uns, Ihre Bestellung schneller zu finden. Anhand einer Telefonnummer allein können wir keine Bestellung finden.</p>" +
            "<p>Beschreiben Sie bitte auch, was passiert ist (die App startet nicht, eine Doppelzahlung usw.).</p>" +
            "<p>Wenn die Anfrage erstattungsfähig ist, erstatten wir über das Lemon-Squeezy-Dashboard. Je nach Kartenanbieter oder Zahlungsmethode kann es einige Werktage dauern, bis die Gutschrift erscheint.</p>",
        faqR2q: "Was ist erstattungsfähig?",
        faqR2a:
            "<p><strong>Erstattungsfähig</strong> — Der Kauf liegt innerhalb von <strong>30 Tagen</strong> und es handelt sich um einen <strong>Produktfehler</strong> (die App startet nicht oder funktioniert nicht korrekt) oder um eine <strong>Doppelzahlung</strong> für dieselbe Bestellung.</p>" +
            "<p><strong>Nicht erstattungsfähig</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Meinungsänderung.</strong></li>" +
            "<li><strong>Tarifwechsel</strong> (Single ↔ Double/Family) — es gibt kein Upgrade gegen Aufpreis, der höhere Tarif muss separat gekauft werden.</li>" +
            "<li>Eine Rückerstattung, wenn die Lizenz <strong>bereits aktiviert</strong> wurde.</li>" +
            "<li>Probleme, die <strong>allein durch Ihre Umgebung</strong> verursacht werden, etwa eine Firewall der Firma oder Schule, ein Netzwerk ohne Internet oder blockierte GitHub-Downloads — besonders wenn die Lizenz <strong>bereits aktiviert</strong> ist.</li>" +
            "<li>Unannehmlichkeiten durch das Gerätelimit oder einen PC-Wechsel — schreiben Sie uns stattdessen, wir helfen beim Gerätewechsel.</li>" +
            "</ul>" +
            "<p>Wenn der Kauf weniger als 30 Tage zurückliegt und die Lizenz <strong>Inactive (0 aktivierte Geräte)</strong> ist, schreiben Sie uns mit Ihrer Bestellnummer und einer Beschreibung — wir <strong>prüfen</strong> den Fall individuell.</p>" +
            "<p>Zahlungen und Rückerstattungen werden von Lemon Squeezy, unserem Merchant of Record, abgewickelt.</p>",
        faqR3q: "Was passiert nach einer Rückerstattung mit meiner Lizenz?",
        faqR3a:
            "<p>Nach Abschluss der Rückerstattung wird Ihr Peekom Plus Lizenzschlüssel <strong>deaktiviert</strong>.</p>" +
            "<p>Die App wechselt beim nächsten Start mit Internetverbindung automatisch zur <strong>kostenlosen Version</strong>, und die Plus-Funktionen stehen nicht mehr zur Verfügung.</p>" +
            "<p>Ihre Memos bleiben auf dem PC, aber Sie kehren zum kostenlosen Funktionsumfang zurück (3 Indizes usw.) — exportieren Sie daher <strong>vor</strong> dem Antrag alles, was Sie benötigen.</p>" +
            "<p>Bitte stellen Sie vor dem Absenden sicher, dass Sie Plus wirklich nicht mehr nutzen möchten.</p>",
        faqR4q: "Kann ich Peekom Plus hinter einer Firmen-Firewall oder in einem Netzwerk ohne Internet nutzen?",
        faqR4a:
            "<p>Die kostenlose Version funktioniert ohne Internetverbindung.</p>" +
            "<p>Die <strong>erste Plus-Aktivierung</strong> benötigt jedoch eine Internetverbindung und Zugriff auf <code>https://api.lemonsqueezy.com</code> über HTTPS (443).</p>" +
            "<p>Auch wenn normale Webseiten laden, kann die Aktivierung fehlschlagen, wenn nur diese Adresse blockiert ist; ein PC, der ausschließlich in einem <strong>vollständig abgeschotteten Netzwerk ohne Internet</strong> genutzt wird, lässt sich möglicherweise überhaupt nicht aktivieren.</p>" +
            "<p>Auch die Installationsdatei liegt auf GitHub Releases, daher kann bereits der Download dort fehlschlagen, wo github.com blockiert ist.</p>" +
            "<p><strong>Das können Sie versuchen</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Einmal in einem anderen Netzwerk aktivieren</strong>, zum Beispiel im heimischen WLAN oder über einen Handy-Hotspot. Nach der Aktivierung können Sie Plus ohne Internet nutzen (die Lizenz wird erneut geprüft, sobald Sie wieder online sind).</li>" +
            "<li>Bitten Sie die IT-Abteilung, <code>https://api.lemonsqueezy.com</code> über <strong>HTTPS (443)</strong> freizugeben.</li>" +
            "<li>Wenn Sie ein Firmen-VPN oder einen Proxy verwenden, schalten Sie es kurz aus oder versuchen Sie es in einem freigegebenen Netzwerk erneut.</li>" +
            "</ul>" +
            "<p><strong>Bitte vor dem Kauf prüfen.</strong> Wenn Sie Peekom nur auf einem Firmen-PC nutzen möchten, können diese Einschränkungen die Aktivierung verhindern. Eine Rückerstattung, die <strong>nach der Aktivierung der Lizenz</strong> beantragt wird und deren einziger Grund das Firmennetzwerk ist, ist nicht erstattungsfähig.</p>",
        faqR5q: "Kann ich nach der Aktivierung meiner Lizenz noch eine Rückerstattung erhalten?",
        faqR5a:
            "<p>In der Regel <strong>nein — die Anfrage ist nicht erstattungsfähig.</strong></p>" +
            "<p><strong>Activated</strong> (aktiviert) bedeutet, dass der Schlüssel erfolgreich geprüft und registriert wurde, sodass Plus auf diesem Gerät genutzt werden kann. Eine erfolgreiche Aktivierung zeigt, dass das Produkt funktioniert, und gilt daher <strong>nicht als Produktfehler</strong>.</p>" +
            "<p>Auch nach der Aktivierung erstatten wir Folgendes:</p>" +
            '<ul class="guide-step-list">' +
            "<li>Einen <strong>Produktfehler</strong> — die App startet nicht oder funktioniert nicht korrekt.</li>" +
            "<li>Eine <strong>Doppelzahlung</strong> für dieselbe Bestellung.</li>" +
            "</ul>" +
            "<p>Wenn Sie <strong>noch nicht</strong> aktiviert haben (Lizenz <strong>Inactive</strong>, 0 aktivierte Geräte) und der Kauf weniger als 30 Tage zurückliegt, <a href=\"/contact/\">kontaktieren Sie uns</a> mit Ihrer Bestellnummer und einer Beschreibung — wir prüfen den Fall individuell.</p>" +
            "<p>Wenn Sie lediglich auf ein anderes Gerät wechseln möchten, können wir statt einer Rückerstattung <strong>das alte Gerät deaktivieren</strong>.</p>",
        faq1q: "Was ist der Unterschied zwischen kostenlos und Plus?",
        faq1a: 'Kostenlos umfasst 3 Indexe, Gruppen-Griffverschiebung, ICE-Modus, Hover-Verzögerung, Monitorauswahl, Markdown, Formatierungsleiste und Bildeinfügung. Peekom Plus (Einführung 9,99 $, Listenpreis 12,99 $) schaltet 10 Slots, eigenes Theme, Schriftarten, Deckkraft, Bildgrößenänderung und Export in der App frei. Siehe die <a href="/features/#compare">Vergleichstabelle</a>.',
        compareFreeName: "Peekom (Kostenlos)",
        comparePlusName: "Peekom Plus",
        compareCta: "Peekom Plus holen",
        comparePromoBanner: "Einführungsaktion · jetzt {pct} % Rabatt",
        helpTitle: "Anleitung", helpSub: "Starten Sie mit Peekom.",
        guideStartBody:
            '<div class="guide-step">' +
                "<h3>1. Installation</h3>" +
                '<ul class="guide-step-list">' +
                    '<li><strong>Herunterladen</strong> — Holen Sie das Windows- oder macOS-Installationsprogramm von der Seite <a href="/download/">Download</a> (oder Startseite).</li>' +
                    "<li><strong>Peekom-Setup.exe ausführen</strong> — Doppelklicken Sie auf das Installationsprogramm und folgen Sie den Anweisungen.</li>" +
                    '<li><strong>SmartScreen-Warnung</strong> — Wenn ein blaues Fenster erscheint, öffnen Sie die <a href="#" onclick="openModal(); return false;">Installationsanleitung</a> und wählen Sie <strong>Weitere Informationen</strong> → <strong>Trotzdem ausführen</strong>.</li>' +
                "</ul>" +
            "</div>" +
            '<div class="guide-step">' +
                "<h3>2. Allgemeine & Index-Einstellungen</h3>" +
                '<p class="guide-step-lead">Rechtsklick auf das Tray-Symbol → <strong>Einstellungen</strong>.</p>' +
                '<h4 class="guide-step-sub">Allgemeine Einstellungen</h4>' +
                '<ul class="guide-step-list">' +
                    "<li><strong>Anzeigemonitor</strong> wählen (auto oder fest)</li>" +
                    "<li><strong>Auslösemodus</strong> — <strong>Maussteuerung</strong> / <strong>Tastenkürzel-Steuerung</strong>; drei Tastenkürzel anpassen (umschalten, vorheriger/nächster Index)</li>" +
                    "<li><strong>Auto-Einklapp-Verzögerung</strong> des Griffs (Standard 0,3 s, in Einstellungen anpassbar)</li>" +
                "</ul>" +
                '<div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> Eigene Schriftarten, Standard-Deckkraft, JSON-Backup/Wiederherstellung, Export (.txt/.md/.json) und mehr.</div>' +
                '<h4 class="guide-step-sub">Einstellungen pro Index</h4>' +
                '<ul class="guide-step-list">' +
                    "<li><strong>Indexe</strong> hinzufügen/entfernen (3 kostenlos)</li>" +
                    "<li><strong>Titel und Farbe</strong> pro Index festlegen</li>" +
                    "<li>Memo-<strong>Seitenverhältnis</strong> wählen (1:1 / 3:4)</li>" +
                "</ul>" +
                '<div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> Bis zu 10 Slots mit unabhängigen Griffpositionen.</div>' +
            "</div>" +
            '<div class="guide-step">' +
                "<h3>3. Memos schreiben</h3>" +
                '<ul class="guide-step-list">' +
                    "<li><strong>Neu positionieren</strong> — Ziehen Sie den Randgriff auf die gewünschte Höhe.</li>" +
                    "<li><strong>Peek / ICE</strong> — Oben im Memo umschalten. Peek öffnet per Klick oder Tastenkürzel; ICE bleibt angeheftet.</li>" +
                    '<li><strong>Text anpassen</strong> — Nutzen Sie Markdown, die Symbolleiste und Bilder. Siehe <a href="#guide-edit">Bearbeitung</a> unten.</li>' +
                "</ul>" +
            "</div>" +
            '<div class="guide-step guide-step--last">' +
                "<h3>4. Auf Peekom Plus upgraden</h3>" +
                '<ul class="guide-step-list">' +
                    "<li>Geben Sie Ihren Lizenzschlüssel über die Schaltfläche <strong>Auf Plus upgraden</strong> in der App ein (oder im <strong>Einstellungen</strong>-Fenster beim ersten Start).</li>" +
                    '<li>Siehe <a href="#guide-plus">Plus aktivieren</a> für Schritt-für-Schritt-Anleitung.</li>' +
                "</ul>" +
            "</div>",
        help1t: "1. Installation", help1p: "Peekom Setup herunterladen und ausführen. SmartScreen kann unter Windows erscheinen.",
        help2t: "2. Memo öffnen", help2p: "Klicken Sie auf den Griff oder drücken Sie im Modus <strong>Tastenkürzel-Steuerung</strong> <strong>Strg+Umschalt+M</strong> (Standard), um das <strong>zuletzt geöffnete</strong> Memo umzuschalten.",
        help3t: "3. Memos wechseln", help3p: "Im Modus <strong>Maussteuerung</strong> <strong>↑ / ↓</strong> drücken, während das Panel offen ist. Im Modus <strong>Tastenkürzel-Steuerung</strong> <strong>Strg+Umschalt+↑ / ↓</strong> verwenden (auch geschlossen). <strong>Strg+1–9</strong> springt zu einem Index.",
        help4t: "4. Schreiben", help4p: "Im Panel tippen; Indexe und Titel in den Einstellungen hinzufügen.",
        help5t: "5. ICE-Modus", help5p: "Klicken Sie auf die <strong>Peek / ICE</strong>-Chip, um das Memo ohne Hover anzuheften (kostenlos & Plus).",
        help6t: "6. Einstellungen · Plus", help6p: "Tray → Einstellungen → Register Allgemein, um Auslösemodus und Tastenkürzel zu ändern. Nutzen Sie die Schaltfläche Auf Plus upgraden, um einen Lizenzschlüssel einzugeben und auf Peekom Plus umzustellen.",
        winGuideBtn: "Erscheint eine blaue SmartScreen-Warnung bei der Windows-Installation?",
        dlTitle: "Download", dlWinNote: "Windows 10 & 11 (64-Bit)",
        dlWinLabel: "Windows x64 · Windows 10 & 11 (64-Bit)",
        dlMacLabel: "macOS",
        linkChangelog: "Änderungsprotokoll / Versionen", linkPrev: "Frühere Versionen", linkSmartScreen: "SmartScreen-Anleitung",
        faqTitle: "FAQ",
        faqGroupProductLabel: "Produkt & Funktionen",
        faqGroupLicenseLabel: "Lizenz",
        faqGroupInstallLabel: "Installation",
        faqGroupTroubleshootLabel: "Fehlerbehebung",
        faq2q: "Wie funktioniert die Dual-Monitor-Unterstützung?",
        faq2a: "In Einstellungen → Anzeigemonitor wählen Sie auto (Maus folgen) oder einen festen Monitor. Verfügbar in Kostenlos und Plus.",
        faq8q: "Kann Peekom nur am rechten Monitorrand verwendet werden?",
        faq8a: "Derzeit funktioniert Peekom nur am rechten Rand. Wir planen, in einem zukünftigen Update auch links, oben und unten zu unterstützen.",
        faq9q: "Ich habe Peekom Plus versehentlich deinstalliert. Was passiert mit meinen kostenpflichtigen Funktionen?",
        faq9a:
            "<p>Die Deinstallation der App löscht Ihre Lemon-Squeezy-Lizenz nicht. Folgen Sie diesen Schritten, um Peekom Plus und alle kostenpflichtigen Funktionen wiederherzustellen.</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>1. Peekom neu installieren</strong> — Laden Sie die kostenlose Version (<code>Peekom-Setup.exe</code>) von <a href=\"/download/\">peekom.com</a> herunter und installieren Sie sie.</li>" +
            "<li><strong>2. Lizenzschlüssel finden</strong> — Öffnen Sie die Lemon-Squeezy-Beleg-E-Mail Ihres Kaufs und kopieren Sie den <strong>[License Key]</strong>. Bei verlorener E-Mail melden Sie sich mit derselben Adresse in der Lemon-Squeezy-Bestellhistorie an, um den Schlüssel erneut zu sehen.</li>" +
            "<li><strong>3. Plus erneut aktivieren</strong> — Öffnen Sie Einstellungen (Zahnradsymbol oben rechts), fügen Sie den Schlüssel unter <strong>Plus-Aktivierung</strong> ein und bestätigen Sie. Die App wechselt sofort zu Peekom Plus und stellt 10 Slots, benutzerdefinierte Themes und weitere Plus-Funktionen wieder her.</li>" +
            "</ul>" +
            "<p><strong>Gerätelimit (bis zu 2)</strong> — Neuinstallation auf demselben PC gilt als dasselbe Gerät und beeinträchtigt die Aktivierung nicht. Bei einem neuen Computer erlaubt jede Lizenz bis zu zwei Geräte (z. B. Arbeits-PC + Privat-PC).</p>",
        faq3q: "Wie wird Plus aktiviert?",
        faq3a:
            "<p>Installieren Sie zuerst die <strong>kostenlose App</strong> und geben Sie dann in den Einstellungen oder auf dem Plus-Sperrbildschirm den bei Lemon Squeezy gekauften Lizenzschlüssel ein. Es gibt keine separate Plus-Installationsdatei, und eine Neuinstallation ist nicht nötig.</p>" +
            "<p>Die <strong>erste Aktivierung benötigt eine Internetverbindung</strong> und Zugriff auf <code>https://api.lemonsqueezy.com</code>. Danach können Sie Plus auch offline weiter nutzen.</p>" +
            "<p>Nach erfolgreicher Aktivierung wird die Lizenz auf diesem Gerät als <strong>Activated</strong> (aktiviert) registriert. Nach der Aktivierung sind Rückerstattungen wegen Meinungsänderung, Tarifwechsel oder Einschränkungen im Firmennetzwerk in der Regel nicht möglich — bitte lesen Sie daher vorher die Rückerstattungsrichtlinie oben.</p>",
        faq3bq: "Kann ich einen Lizenzschlüssel auf mehr als einem PC nutzen?",
        faq3ba: "Ja. Derselbe 16-stellige Lizenzschlüssel kann einmal auf bis zu zwei PCs eingegeben werden—z. B. Arbeits- und Privat-PC—um Peekom Plus auf beiden zu nutzen.",
        faq3cq: "Kann ich Peekom weiter nutzen, wenn ich den Arbeits-PC wechsle oder den Job wechsle?",
        faq3ca: "Je nach Tarif kann Peekom Plus auf 1 Gerät (Single), 2 Geräten (Double) oder 5 Geräten (Family) genutzt werden. Eine Neuinstallation auf demselben Gerät ist möglich. Wenn Sie auf ein neues Gerät wechseln müssen, kontaktieren Sie uns — wir prüfen Ihren Fall und unterstützen Sie. Je nach Situation leiten wir Sie an, nach einem Zurücksetzen zuvor aktivierter Geräte auf dem neuen Gerät erneut zu aktivieren. Allein das Gerätelimit oder ein PC-Wechsel ist <strong>nicht erstattungsfähig</strong>, aber beim Gerätewechsel helfen wir gern: Kontaktieren Sie uns, dann deaktivieren wir das alte Gerät.",
        faq3dq: "Welche Angaben soll ich bei einem Gerätewechsel senden?",
        faq3da: "Für eine schnellere Prüfung senden Sie bitte die beim Kauf verwendete E-Mail-Adresse, die Bestellnummer, den Lizenzschlüssel und den Grund für den Gerätewechsel. Wenn Sie alle Plätze Ihres Tarifs (Single 1 · Double 2 · Family 5) bereits nutzen, setzen wir die aktiven Geräte ggf. vor einer erneuten Aktivierung zurück — sichern Sie wichtige Inhalte daher vorher. Allein das Gerätelimit oder ein PC-Wechsel ist <strong>nicht erstattungsfähig</strong>, aber wenn Sie uns kontaktieren, helfen wir beim Gerätewechsel und deaktivieren das alte Gerät.",
        faq4q: "Bei der Windows-Installation erscheint eine blaue Warnung.",
        faq4a: 'SmartScreen-Warnungen sind bei unsignierten Apps üblich. Siehe <a href="#" onclick="openModal(); return false;">Installationsanleitung</a>: [Weitere Informationen] → [Trotzdem ausführen].',
        faq5q: "Welche Windows-Versionen werden unterstützt?",
        faq5a: "Peekom läuft unter Windows 10 und 11 (64-Bit). Das Installationsprogramm ist nur für 64-Bit. Windows 7, 8 und 8.1 werden nicht unterstützt (Electron 36).",
        faq6q: "Ich habe einen Index hinzugefügt, er erscheint aber nicht in den Einstellungen.",
        faq6a: "Einstellungen erneut öffnen, um die Liste zu aktualisieren; neuere Versionen synchronisieren automatisch.",
        faq7q: "Seltsamer Text beim Start nach Deinstallation.",
        faq7a: "Deaktivieren Sie verbleibende Peekom-Starteinträge im Task-Manager oder installieren und deinstallieren Sie erneut.",
        compareColFeature: "Funktion",
        contactTitle: "Kontakt", contactSub: "Senden Sie uns Ihr Feedback.",
        contactFeedbackTitle: "Feedback senden",
        contactFeedbackDesc: "Fehlerberichte, Funktionsideen, Lizenzanfragen",
        contactFeedbackBtn: "Feedback-Formular öffnen",
        contactReviewTitle: "Bewertung hinterlassen",
        contactReviewDesc: "Teilen Sie Ihre Erfahrung — sie kann auf unserer Website erscheinen.",
        contactReviewBtn: "Bewertungsformular öffnen",
        contactEmailTitle: "Per E-Mail kontaktieren",
        contactEmailDesc: "Wenn Sie uns direkt erreichen möchten",
        contactNote: "Wir antworten in der Regel innerhalb von etwa 10 Werktagen. Google-Formulare kommen schneller an als E-Mails — bitte nutzen Sie sie, wenn möglich.",
        contactEmail: "hello.peekom@gmail.com",
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "Datenschutz",
        guideTitle: "Windows SmartScreen Installationsanleitung",
        step1: 'Beim Ausführen des Installers kann ein blaues SmartScreen-Fenster mit <b>„Unbekannte App"</b> erscheinen.',
        step2: "Klicken Sie oben auf <b>[Weitere Informationen]</b>.",
        step3: "Klicken Sie unten rechts auf <b>[Trotzdem ausführen]</b>, um die Installation abzuschließen.",
        searchNoResults: "Keine Ergebnisse",
        modalClose: "Schließen",
        promoNote: "Preiserhöhung nach Ende der Aktion geplant",
        promoSectionTitle: "Peekom Plus (Kostenpflichtig)",
        promoFreeTitle: "Peekom (Kostenlos)",
        promoVat: "(ohne MwSt.)",
        promoLaunchLabel: "Einführungs-\nAktionspreis\naktiv",
        comparePricingExtra: " · Einmalkauf · bis zu 2 Geräte · kleinere Updates inklusive · 30-Tage-Rückerstattung (<a href=\"mailto:" + CONTACT_EMAIL + "\">" + CONTACT_EMAIL + "</a>)",
        dlPlusHintExtra: ' · <a href="' + LINKS.buy + '" id="dlBuyLinkInner">Auf Lemon Squeezy kaufen</a> → Lizenzschlüssel in der App eingeben',
        markdownGuideTitle: "Notizen mit Markdown",
        markdownGuideBody:
            '<p class="guide-table-intro">Natürlich tippen—<strong>Eingabe</strong> drücken und die Formatierung wird automatisch angewendet.</p>' +
            '<table class="compare-table guide-table"><thead><tr><th>Eingabeformat</th><th>Nach Eingabe</th></tr></thead><tbody>' +
            '<tr><td><code># Besprechungsagenda</code></td><td class="guide-md-result"><h1 class="guide-md-h1">Besprechungsagenda</h1></td></tr>' +
            '<tr><td><code>## Notizen</code></td><td class="guide-md-result"><h2 class="guide-md-h2">Notizen</h2></td></tr>' +
            '<tr><td><code>### Referenz</code></td><td class="guide-md-result"><h3 class="guide-md-h3">Referenz</h3></td></tr>' +
            '<tr><td><code>- Aufgabe</code></td><td class="guide-md-result"><ul class="guide-md-ul"><li>Aufgabe</li></ul></td></tr>' +
            '<tr><td><code>- [ ] Aufgabe</code></td><td class="guide-md-result"><label class="guide-md-task"><input type="checkbox" disabled> Aufgabe</label></td></tr>' +
            '<tr><td><code>**Wichtig**</code></td><td class="guide-md-result"><strong>Wichtig</strong></td></tr>' +
            '<tr><td><code>*Betonung*</code></td><td class="guide-md-result"><em>Betonung</em></td></tr>' +
            "</tbody></table>",
        formatBarGuideTitle: "Notizen mit Symbolleiste",
        formatBarGuideBody:
            '<p class="guide-table-intro">Klicken Sie auf die Schaltflächen über dem Memo—keine Tastenkürzel nötig.</p>' +
            '<table class="compare-table guide-table"><thead><tr><th>Funktion</th><th>Verwendung</th></tr></thead><tbody>' +
            "<tr><td>Farbe · fett · kursiv · unterstrichen · durchgestrichen</td><td>Text markieren, dann Schaltfläche klicken</td></tr>" +
            "<tr><td>Ausrichtung (links/mitte/rechts/blocksatz)</td><td>Absatzausrichtung ändern</td></tr>" +
            "<tr><td>Listen (Aufzählung/Quadrat/nummeriert/einfach)</td><td>Listenstil im Menü wählen</td></tr>" +
            "<tr><td>Bildeinfügung</td><td>Kostenlos: 1 pro Memo · Plus: 5 (Größe ändern & zuschneiden bei Plus)</td></tr>" +
            "</tbody></table>",
        guideKeysTitle: "Tastenkürzel",
        guideKeysIntro: 'In Einstellungen → Allgemein → <strong>Auslösemodus</strong> wählen Sie <strong>Maussteuerung</strong> oder <strong>Tastenkürzel-Steuerung</strong>. Unter macOS ⌘ (Befehl) statt Strg verwenden.',
        gkColAction: "Aktion", gkColKey: "Standard", gkColNote: "Hinweis",
        gk1a: "Memo öffnen/schließen umschalten", gk1k: "Strg+Umschalt+M",
        gk1n: "Zuletzt geöffnetes Memo. Nur Tastenkürzel-Steuerung. Anpassbar in Einstellungen → Allgemein → Auslösemodus",
        gk2a: "Vorherigen Index öffnen", gk2k: "Strg+Umschalt+↑",
        gk2n: "Öffnet vorherigen Index und zeigt Panel. Tastenkürzel-Steuerung. Anpassbar in Einstellungen",
        gk3a: "Nächsten Index öffnen", gk3k: "Strg+Umschalt+↓",
        gk3n: "Öffnet nächsten Index und zeigt Panel. Tastenkürzel-Steuerung. Anpassbar in Einstellungen",
        gk4a: "Index wechseln", gk4k: "↑ / ↓",
        gk4n: "Nur Maussteuerung, Panel muss offen sein",
        gk5a: "Zu Index springen", gk5k: "Strg+1–9 (Strg+0 = Index 10)",
        gk5n: "Öffnet das Memo dieses Index direkt",
        gk6a: "Schriftgröße", gk6k: "Strg + Rad", gk6n: "Im Memo-Bereich. Nur Plus",
        guidePlusTitle: "Plus aktivieren",
        guidePlusStep1: "1. Peekom Plus mit der Schaltfläche unten kaufen.",
        guidePlusStep2: "2. E-Mail auf den Lizenzschlüssel prüfen.",
        guidePlusStep3: "3. Peekom öffnen und den Schlüssel im Fenster <strong>Einstellungen</strong> oder in <strong>Einstellungen</strong> eingeben.",
        macComingSoonTitle: "macOS",
        macComingSoonBody: "Die macOS-Version ist in Entwicklung.<br>Voraussichtliche Veröffentlichung: <strong>Juli 2026</strong>.",
        guidePlusStep4: "4. Peekom Plus-Aktivierung ist abgeschlossen.",
        guideNavStart: "Erste Schritte", guideNavKeys: "Tastenkürzel", guideNavEdit: "Bearbeitung", guideNavPlus: "Plus aktivieren",
        guideSectionEditTitle: "Bearbeitung",
        versionHistoryTitle: "Versionsverlauf",
        versionColVersion: "Version", versionColDate: "Veröffentlichungsdatum", versionColWin: "Windows", versionColMac: "macOS",
        versionLatest: "Neueste", versionWin: "64-Bit", versionMac: "Universal", versionMacSoon: "Demnächst",
        changelogTitle: "Änderungsprotokoll",
        fz1Title: "Vom Rand hervorschauen",
        fz1Items: [
            { text: "Index klicken, um Memo schnell zu öffnen" },
            { text: "Index ziehen zum Neupositionieren" },
            { text: "Peek / ICE-Umschalter" },
            { text: "Auto-Einklappen im Peek-Modus" }
        ],
        fz2Title: "Effizienter arbeiten",
        fz2Items: [
            { text: "Tastenkürzel für zuletzt geöffnetes Memo" },
            { text: "Zielbildschirm fixieren" },
            { text: "Markdown-Syntaxunterstützung" },
            { text: "Bildeinfügung" }
        ],
        fz3Title: "Ihr individuelles Memo",
        fz3Items: [
            { text: "Formatierungsleiste" },
            { text: "Eigene Indextitel" },
            { text: "Memo-Format (1:1, 3:4)" },
            { text: "Standard-Hintergrundfarben" }
        ],
        fz4Title: "Mehr mit Plus",
        fz4Items: [
            { text: "Bis zu 10 unabhängige Indexe", plus: true },
            { text: "Export · JSON-Backup", plus: true },
            { text: "Bis zu 5 Bilder pro Memo", plus: true },
            { text: "Bildgröße ändern · Seitenverhältnis zuschneiden", plus: true }
        ],
        fz5Title: "Nur-Plus-Anpassung",
        fz5Items: [
            { text: "Schriftgrößensteuerung", plus: true },
            { text: "Standard-Memo-Deckkraft", plus: true },
            { text: "Eigene Hintergrund- & Textfarben", plus: true },
            { text: "Eigene Schriftarten", plus: true }
        ],
        footerLangLabel: "Sprache",
        themeLight: "Hell",
        themeDark: "Dunkel",
        themeAuto: "Auto",
        themeLightLabel: "Heller Modus",
        themeDarkLabel: "Dunkler Modus",
        themeAutoLabel: "System folgen",
        themeAriaLabel: "Design",
        pageCtaDownload: "Herunterladen",
        pageCtaCompare: "Vergleich ansehen",
        featuresCtaTitle: "Mit Peekom Plus erweitern",
        featuresCtaDesc: "10 Slots, eigene Themes, Export und mehr in der App freischalten.",
        helpCtaTitle: "Jetzt starten",
        helpCtaDesc: "Peekom installieren und Rand-Memos auf Ihrem Monitor ausprobieren.",
        faqCtaTitle: "Noch Fragen?",
        faqCtaDesc: "Funktionsvergleich kostenlos vs Plus ansehen.",
        contactCtaTitle: "Peekom noch nicht ausprobiert?",
        contactCtaDesc: "Kostenlos installieren und sofort loslegen.",
        downloadCtaTitle: "Plus benötigt?",
        downloadCtaDesc: "Lizenzschlüssel in derselben App eingeben, um Plus zu aktivieren."
    },
    pt: {
        navHome: "Início", navFeatures: "Recursos", navDownload: "Download", navFaq: "Perguntas", navHelp: "Guia", navContact: "Contato",
        searchPlaceholder: "Pesquisar...",
        heroTitleMain: "Peekom",
        heroTagline: "O app de memos na borda está de volta como <strong>Peekom</strong>.<br>Notas leves e rápidas na borda da tela—mantenha-se organizado sem interromper seu trabalho ou apresentação.",
        heroPlusNote: 'Após instalar o app gratuito, atualize para Peekom Plus em Configurações.<br><a href="/features/#compare">Ver grátis vs Plus</a> na tabela comparativa.',
        heroUpgradeNote: "Após instalar o app gratuito, atualize para Peekom Plus em Configurações.",
        heroFreeCompareNote: '<a href="/features/#compare">Ver grátis vs Plus</a>.',
        heroWinBtn: "Baixar para Windows", heroMacBtn: "Baixar para macOS",
        heroPlusBuyBtn: "Comprar agora",
        heroPlusCardTitle: "Peekom Plus",
        heroPlusCardBadge: "PAID",
        heroPlusCardOs: "Windows",
        heroMacPlusCardTitle: "Peekom Plus",
        heroMacPlusCardBadge: "PAID",
        heroPlusCardMeta: "Pagamento único · até 2 dispositivos · vitalício",
        heroFreeCardTitle: "Peekom",
        heroFreeCardBadge: "FREE",
        heroMacFreeCardBadge: "FREE",
        heroWinCardMeta: "Windows 10 · 11 (64 bits)",
        heroMacFreeCardMeta: "macOS (Universal)",
        heroFreeDownloadLabel: "Baixar",
        carouselCap1: "Alça na borda do monitor",
        carouselCap2: "Abrir memo por clique ou atalho",
        carouselCap3: "Modo ICE · atraso de recolhimento automático",
        reviewBtnLabel: "Deixar avaliação",
        reviewEmpty: "Seja o primeiro a compartilhar sua experiência!",
        reviewAnonymous: "Anônimo",
        detectWin: "Detectado: <strong>Windows</strong> — Windows recomendado",
        detectMac: "Detectado: <strong>macOS</strong> — macOS recomendado",
        detectGeneric: "SO não detectado — escolha manualmente",
        featuresTitle: "Recursos", featuresSub: "O que o Peekom faz em um relance.",
        compareTitle: "Peekom vs Peekom Plus", compareSub: "Um app — Peekom Plus é desbloqueado dentro do app.",
        comparePricing: '<span class="pricing-was">$' + PRICING.list.toFixed(2) + '</span> <span class="pricing-now">$' + PRICING.sale.toFixed(2) + ' USD</span> <span class="pricing-vat">(sem IVA)</span> · <span class="pricing-launch">Preço de lançamento</span> · pagamento único · até 2 dispositivos · atualizações menores incluídas · reembolso em 30 dias (<a href="mailto:' + CONTACT_EMAIL + '">' + CONTACT_EMAIL + '</a>)',
        guidePlusP: "1) Comprar pelo preço de lançamento $9.99 no Lemon Squeezy → 2) Receber chave de licença por e-mail → 3) Abrir Peekom → inserir chave na UI de bloqueio ou em Configurações → 4) Ativação do Peekom Plus concluída. Reembolso em 30 dias: <a href=\"mailto:" + CONTACT_EMAIL + "\">" + CONTACT_EMAIL + "</a>",
        dlSub: "Instale o Peekom uma vez. Atualize para Peekom Plus dentro do app.",
        dlWin: "Peekom Setup (Windows)", dlMac: "Peekom Setup (macOS)",
        dlPlusHint: 'Peekom Plus: Antes <span class="pricing-was">$' + PRICING.list.toFixed(2) + '</span> → Lançamento <strong>$' + PRICING.sale.toFixed(2) + '</strong> (sem IVA) · <a href="' + LINKS.buy + '" id="dlBuyLinkInner">Comprar no Lemon Squeezy</a> → inserir chave de licença no app',
        featureGifPending: "GIF de demonstração em breve",
        compareNoLabel: "Não suportado",
        faqSub: "Perguntas comuns sobre o Peekom.",
        refundPolicyTitle: "Política de reembolso do Peekom Plus",
        refundPolicyBody:
            "<p>Os pagamentos e reembolsos do Peekom Plus são processados pela <strong>Lemon Squeezy</strong>, nosso comerciante registrado (Merchant of Record).</p>" +
            '<ul class="faq-refund-list">' +
            "<li><strong>Prazo para solicitar</strong> — Analisamos as solicitações enviadas em até <strong>30 dias</strong> após a compra.</li>" +
            "<li><strong>Casos com direito a reembolso</strong> — Reembolsamos o seguinte:" +
            "<ul>" +
            "<li>Um <strong>defeito do produto</strong> — o app não abre ou não funciona corretamente.</li>" +
            "<li>Um <strong>pagamento duplicado</strong> do mesmo pedido.</li>" +
            "</ul></li>" +
            "<li><strong>Casos sem direito a reembolso</strong> — Não podemos reembolsar o seguinte:" +
            "<ul>" +
            "<li><strong>Mudança de ideia</strong> após a compra.</li>" +
            "<li><strong>Mudança de plano</strong> — por exemplo Single ↔ Double/Family. Não oferecemos upgrade pagando apenas a diferença. Se precisar de mais dispositivos, é necessário <strong>comprar o plano superior separadamente</strong>; o plano original não é reembolsado automaticamente e nenhuma diferença de preço é creditada.</li>" +
            "<li><strong>Reembolso depois de a licença já ter sido ativada.</strong> «Activated» (ativada) significa que a chave foi verificada com sucesso e registada para que o Plus possa ser usado nesse dispositivo. Uma ativação bem-sucedida mostra que o produto funciona, por isso <strong>não é considerada um defeito do produto</strong>.</li>" +
            "<li><strong>Problemas causados apenas pelo seu ambiente</strong> — firewall da empresa ou da escola, software de segurança, uma rede totalmente isolada (sem internet), downloads do GitHub bloqueados ou o bloqueio de <code>api.lemonsqueezy.com</code>. Isto aplica-se sobretudo quando a licença <strong>já está ativada</strong>.</li>" +
            "<li><strong>Incómodo pelo limite de dispositivos ou pela troca de PC.</strong> Se precisar mudar para outro dispositivo, <a href=\"/contact/\">contacte-nos</a> — podemos desativar o dispositivo antigo por você.</li>" +
            "</ul></li>" +
            "</ul>" +
            "<p><strong>Antes de comprar (ativação e rede)</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li>A <strong>primeira ativação do Plus</strong> exige acesso à internet e acesso a <code>https://api.lemonsqueezy.com</code>.</li>" +
            "<li>Mesmo que os sites normais abram, a ativação pode falhar se apenas esse endereço estiver bloqueado.</li>" +
            "<li>Um PC usado exclusivamente numa <strong>rede totalmente isolada (sem internet)</strong> pode não conseguir ser ativado.</li>" +
            "<li>O instalador está alojado no GitHub Releases, por isso o download pode falhar onde o github.com está bloqueado.</li>" +
            "<li>Se pretende usar o Peekom apenas num PC da empresa, recomendamos verificar os pontos acima antes de comprar.</li>" +
            "</ul>" +
            "<p><strong>Se o seu ambiente impedir o uso do Plus — como analisamos</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li>A compra foi feita nos últimos <strong>30 dias</strong>, e</li>" +
            "<li>a licença está <strong>Inactive (0 dispositivos ativados)</strong>, ou trata-se de um defeito do produto ou de um pagamento duplicado, e</li>" +
            "<li>entra em contacto connosco com o número do pedido e uma descrição — então <strong>analisamos o caso individualmente</strong>.</li>" +
            "<li>No entanto, se a licença <strong>já estiver ativada</strong> e a rede da empresa for o único motivo, em regra não há direito a reembolso.</li>" +
            "</ul>" +
            "<p><strong>A sua licença e o processo de reembolso</strong></p>" +
            '<ul class="faq-refund-list">' +
            "<li><strong>Licença</strong> — Concluído o reembolso, a sua chave de licença do Peekom Plus é desativada e o app volta à versão gratuita na próxima vez que iniciar com acesso à internet.</li>" +
            '<li><strong>Como solicitar</strong> — Use o <a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">formulário de contato (ou e-mail)</a> e inclua o seu <strong>Order #</strong> (número do pedido) e uma breve descrição. Indicar o endereço de e-mail usado no pagamento ajuda-nos a encontrar o pedido mais depressa. Não conseguimos localizar um pedido apenas com um número de telefone.</li>' +
            "<li><strong>Processamento</strong> — Após a análise, emitimos o reembolso pelo painel da Lemon Squeezy; conforme o emissor do cartão ou a forma de pagamento, pode levar alguns dias úteis para aparecer.</li>" +
            "</ul>",
        faqR1q: "Como solicito um reembolso do Peekom Plus?",
        faqR1a:
            '<p>Envie o seu <strong>Order #</strong> (número do pedido) pelo <a href="https://forms.gle/fbzSb2Gf1THnFwGD6" target="_blank" rel="noopener">formulário de contato (ou e-mail)</a>.</p>' +
            "<p>Indicar o <strong>endereço de e-mail usado no pagamento</strong> ajuda-nos a encontrar o seu pedido mais depressa. Não conseguimos localizar um pedido apenas com um número de telefone.</p>" +
            "<p>Descreva também o que aconteceu (o app não abre, um pagamento duplicado, etc.).</p>" +
            "<p>Se a solicitação tiver direito a reembolso, emitimos o reembolso pelo painel da Lemon Squeezy. Conforme o emissor do cartão ou a forma de pagamento, pode levar alguns dias úteis para aparecer.</p>",
        faqR2q: "Quais casos têm direito a reembolso?",
        faqR2a:
            "<p><strong>Com direito a reembolso</strong> — A compra foi feita há menos de <strong>30 dias</strong> e trata-se de um <strong>defeito do produto</strong> (o app não abre ou não funciona corretamente) ou de um <strong>pagamento duplicado</strong> do mesmo pedido.</p>" +
            "<p><strong>Sem direito a reembolso</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Mudança de ideia.</strong></li>" +
            "<li><strong>Mudança de plano</strong> (Single ↔ Double/Family) — não existe upgrade pela diferença e o plano superior tem de ser comprado separadamente.</li>" +
            "<li>Reembolso depois de a licença <strong>já ter sido ativada</strong>.</li>" +
            "<li>Problemas causados <strong>apenas pelo seu ambiente</strong>, como firewall da empresa ou da escola, rede sem internet ou downloads do GitHub bloqueados — sobretudo quando a licença <strong>já está ativada</strong>.</li>" +
            "<li>Incómodo pelo limite de dispositivos ou pela troca de PC — nesse caso contacte-nos e ajudamos a mudar de dispositivo.</li>" +
            "</ul>" +
            "<p>Se estiver dentro dos 30 dias após a compra e a licença estiver <strong>Inactive (0 dispositivos ativados)</strong>, contacte-nos com o número do pedido e uma descrição e <strong>analisamos</strong> o caso individualmente.</p>" +
            "<p>Os pagamentos e reembolsos são processados pela Lemon Squeezy, nosso comerciante registrado (Merchant of Record).</p>",
        faqR3q: "O que acontece com a minha licença após o reembolso?",
        faqR3a:
            "<p>Concluído o reembolso, a sua chave de licença do Peekom Plus é <strong>desativada</strong>.</p>" +
            "<p>O app volta automaticamente à <strong>versão gratuita</strong> na próxima vez que iniciar com acesso à internet, e as funcionalidades exclusivas do Plus deixam de funcionar.</p>" +
            "<p>Os seus memos continuam no PC, mas volta ao conjunto de funcionalidades gratuitas (3 índices, etc.), por isso exporte o que precisar <strong>antes</strong> de pedir o reembolso.</p>" +
            "<p>Confirme que pretende deixar de usar o Plus antes de enviar o pedido.</p>",
        faqR4q: "Posso usar o Peekom Plus atrás da firewall da empresa ou numa rede sem internet?",
        faqR4a:
            "<p>A versão gratuita funciona sem acesso à internet.</p>" +
            "<p>No entanto, a <strong>primeira ativação do Plus</strong> exige acesso à internet e acesso a <code>https://api.lemonsqueezy.com</code> por HTTPS (443).</p>" +
            "<p>Mesmo que os sites normais abram, a ativação pode falhar se apenas esse endereço estiver bloqueado, e um PC usado exclusivamente numa <strong>rede totalmente isolada (sem internet)</strong> pode não conseguir ser ativado.</p>" +
            "<p>O instalador também está alojado no GitHub Releases, por isso o próprio download pode falhar onde o github.com está bloqueado.</p>" +
            "<p><strong>Experimente isto</strong></p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>Ative uma vez noutra rede</strong>, como o Wi‑Fi de casa ou um hotspot do telemóvel. Depois da ativação pode usar o Plus sem internet (a licença é verificada de novo sempre que voltar a estar online).</li>" +
            "<li>Peça ao departamento de TI para permitir <code>https://api.lemonsqueezy.com</code> por <strong>HTTPS (443)</strong>.</li>" +
            "<li>Se usa VPN ou proxy da empresa, desligue-o por um momento ou tente de novo numa rede permitida.</li>" +
            "</ul>" +
            "<p><strong>Verifique antes de comprar.</strong> Se pretende usar o Peekom apenas num PC da empresa, estas restrições podem impedir a ativação. Um reembolso pedido <strong>depois de a licença ter sido ativada</strong>, tendo a rede da empresa como único motivo, não tem direito a reembolso.</p>",
        faqR5q: "Posso obter reembolso depois de ativar a licença?",
        faqR5a:
            "<p>Em regra, <strong>não — não há direito a reembolso.</strong></p>" +
            "<p><strong>Activated</strong> (ativada) significa que a chave foi verificada com sucesso e registada para que o Plus possa ser usado nesse dispositivo. Uma ativação bem-sucedida mostra que o produto funciona, por isso <strong>não é considerada um defeito do produto</strong>.</p>" +
            "<p>Mesmo depois da ativação, reembolsamos o seguinte:</p>" +
            '<ul class="guide-step-list">' +
            "<li>Um <strong>defeito do produto</strong> — o app não abre ou não funciona corretamente.</li>" +
            "<li>Um <strong>pagamento duplicado</strong> do mesmo pedido.</li>" +
            "</ul>" +
            "<p>Se <strong>ainda não</strong> ativou (licença <strong>Inactive</strong>, 0 dispositivos ativados) e a compra foi feita há menos de 30 dias, <a href=\"/contact/\">contacte-nos</a> com o número do pedido e uma descrição e analisamos o caso individualmente.</p>" +
            "<p>Se apenas precisa de mudar para outro dispositivo, podemos <strong>desativar o dispositivo antigo</strong> em vez de reembolsar.</p>",
        faq1q: "Qual é a diferença entre grátis e Plus?",
        faq1a: 'O grátis inclui 3 índices, mover alça em grupo, modo ICE, atraso ao passar o mouse, seleção de monitor, Markdown, barra de formatação e inserção de imagens. Peekom Plus (lançamento $9.99, lista $12.99) desbloqueia 10 slots, tema personalizado, fontes, opacidade, redimensionar imagens e exportar no app. Veja a <a href="/features/#compare">tabela comparativa</a>.',
        compareFreeName: "Peekom (Grátis)",
        comparePlusName: "Peekom Plus",
        compareCta: "Obter Peekom Plus",
        comparePromoBanner: "Promo de lançamento · {pct}% de desconto agora",
        helpTitle: "Guia", helpSub: "Comece com o Peekom.",
        guideStartBody:
            '<div class="guide-step">' +
                "<h3>1. Instalar</h3>" +
                '<ul class="guide-step-list">' +
                    '<li><strong>Baixar</strong> — Obtenha o instalador do Windows ou macOS na página <a href="/download/">Download</a> (ou início).</li>' +
                    "<li><strong>Executar Peekom-Setup.exe</strong> — Clique duas vezes no instalador e siga as instruções.</li>" +
                    '<li><strong>Aviso SmartScreen</strong> — Se aparecer uma janela azul, abra o <a href="#" onclick="openModal(); return false;">guia de instalação</a> e escolha <strong>Mais informações</strong> → <strong>Executar mesmo assim</strong>.</li>' +
                "</ul>" +
            "</div>" +
            '<div class="guide-step">' +
                "<h3>2. Configurações gerais e por índice</h3>" +
                '<p class="guide-step-lead">Clique com o botão direito no ícone da bandeja → <strong>Configurações</strong>.</p>' +
                '<h4 class="guide-step-sub">Configurações gerais</h4>' +
                '<ul class="guide-step-list">' +
                    "<li>Escolher <strong>monitor de exibição</strong> (auto ou fixo)</li>" +
                    "<li><strong>Modo de acionamento</strong> — <strong>Controle por mouse</strong> / <strong>Controle por atalhos</strong>; personalizar três atalhos (alternar, índice ant./próx.)</li>" +
                    "<li><strong>Atraso de recolhimento automático</strong> da alça (padrão 0,3 s, ajustável em Configurações)</li>" +
                "</ul>" +
                '<div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> Fontes personalizadas, opacidade padrão, backup/restauração JSON, exportar (.txt/.md/.json) e mais.</div>' +
                '<h4 class="guide-step-sub">Configurações por índice</h4>' +
                '<ul class="guide-step-list">' +
                    "<li>Adicionar/remover <strong>índices</strong> (3 grátis)</li>" +
                    "<li>Definir <strong>título e cor</strong> por índice</li>" +
                    "<li>Escolher <strong>proporção</strong> do memo (1:1 / 3:4)</li>" +
                "</ul>" +
                '<div class="guide-plus-card"><span class="guide-plus-card__label">Plus</span> Até 10 slots com posições de alça independentes.</div>' +
            "</div>" +
            '<div class="guide-step">' +
                "<h3>3. Escrever memos</h3>" +
                '<ul class="guide-step-list">' +
                    "<li><strong>Reposicionar</strong> — Arraste a alça da borda para a altura desejada.</li>" +
                    "<li><strong>Peek / ICE</strong> — Alternar no topo do memo. Peek abre por clique ou atalho; ICE permanece fixado.</li>" +
                    '<li><strong>Personalizar texto</strong> — Use Markdown, a barra de ferramentas e imagens. Veja <a href="#guide-edit">Edição</a> abaixo.</li>' +
                "</ul>" +
            "</div>" +
            '<div class="guide-step guide-step--last">' +
                "<h3>4. Atualizar para Peekom Plus</h3>" +
                '<ul class="guide-step-list">' +
                    "<li>Insira sua chave de licença pelo botão <strong>Atualizar para Plus</strong> no app (ou na janela de <strong>Configurações</strong> na primeira execução).</li>" +
                    '<li>Veja <a href="#guide-plus">Ativar Plus</a> para instruções passo a passo.</li>' +
                "</ul>" +
            "</div>",
        help1t: "1. Instalar", help1p: "Baixe e execute o Peekom Setup. SmartScreen pode aparecer no Windows.",
        help2t: "2. Abrir um memo", help2p: "Clique na alça ou, no modo <strong>controle por atalhos</strong>, pressione <strong>Ctrl+Shift+M</strong> (padrão) para alternar o memo <strong>mais recente</strong>.",
        help3t: "3. Trocar memos", help3p: "No modo <strong>controle por mouse</strong>, pressione <strong>↑ / ↓</strong> com o painel aberto. No modo <strong>controle por atalhos</strong>, use <strong>Ctrl+Shift+↑ / ↓</strong> (mesmo fechado). <strong>Ctrl+1–9</strong> pula para um índice.",
        help4t: "4. Escrever", help4p: "Digite no painel; adicione índices e títulos em Configurações.",
        help5t: "5. Modo ICE", help5p: "Clique no chip <strong>Peek / ICE</strong> para fixar o memo sem passar o mouse (grátis e Plus).",
        help6t: "6. Configurações · Plus", help6p: "Bandeja → Configurações → aba Geral para alterar o modo de acionamento e os atalhos. Use o botão Atualizar para Plus para inserir uma chave de licença e mudar a marca para Peekom Plus.",
        winGuideBtn: "Aparece um aviso azul do SmartScreen ao instalar no Windows?",
        dlTitle: "Download", dlWinNote: "Windows 10 e 11 (64 bits)",
        dlWinLabel: "Windows x64 · Windows 10 e 11 (64 bits)",
        dlMacLabel: "macOS",
        linkChangelog: "Registro de alterações / Versões", linkPrev: "Versões anteriores", linkSmartScreen: "Guia SmartScreen",
        faqTitle: "Perguntas frequentes",
        faqGroupProductLabel: "Produto e recursos",
        faqGroupLicenseLabel: "Licença",
        faqGroupInstallLabel: "Instalação",
        faqGroupTroubleshootLabel: "Solução de problemas",
        faq2q: "Como funciona o suporte a dual monitor?",
        faq2a: "Em Configurações → Monitor de exibição, escolha auto (seguir o mouse) ou um monitor fixo. Disponível no Grátis e Plus.",
        faq8q: "O Peekom só pode ser usado na borda direita do monitor?",
        faq8a: "Atualmente, o Peekom funciona apenas na borda direita. Planejamos adicionar suporte para as bordas esquerda, superior e inferior em uma atualização futura.",
        faq9q: "Desinstalei o Peekom Plus por engano. O que acontece com os recursos pagos?",
        faq9a:
            "<p>Desinstalar o app não remove sua licença no Lemon Squeezy. Siga estes passos para restaurar o Peekom Plus e todos os recursos pagos.</p>" +
            '<ul class="guide-step-list">' +
            "<li><strong>1. Reinstalar o Peekom</strong> — Baixe a versão gratuita (<code>Peekom-Setup.exe</code>) em <a href=\"/download/\">peekom.com</a> e instale.</li>" +
            "<li><strong>2. Encontrar a chave de licença</strong> — Abra o e-mail de recibo do Lemon Squeezy da sua compra e copie a <strong>[License Key]</strong>. Se perdeu o e-mail, entre no histórico de pedidos do Lemon Squeezy com o mesmo e-mail para vê-la novamente.</li>" +
            "<li><strong>3. Reativar o Plus</strong> — Abra Configurações (ícone de engrenagem, canto superior direito), cole a chave em <strong>Ativação Plus</strong> e confirme. O app muda para Peekom Plus e restaura 10 slots, temas personalizados e demais recursos pagos.</li>" +
            "</ul>" +
            "<p><strong>Limite de dispositivos (até 2)</strong> — Reinstalar no mesmo PC conta como o mesmo dispositivo, sem afetar a ativação. Ao trocar de computador, cada licença permite até dois dispositivos (ex.: PC de trabalho + PC pessoal).</p>",
        faq3q: "Como o Plus é ativado?",
        faq3a:
            "<p>Instale primeiro a <strong>app gratuita</strong> e depois introduza nas Configurações ou no ecrã de bloqueio do Plus a chave de licença que comprou na Lemon Squeezy. Não existe um instalador separado para o Plus e não é preciso reinstalar.</p>" +
            "<p>A <strong>primeira ativação exige acesso à internet</strong> e acesso a <code>https://api.lemonsqueezy.com</code>. Depois disso, pode continuar a usar o Plus sem internet.</p>" +
            "<p>Quando a ativação é concluída, a licença fica registada como <strong>Activated</strong> (ativada) nesse dispositivo. Depois da ativação, em regra não há reembolso por mudança de ideia, mudança de plano ou restrições da rede da empresa, por isso leia primeiro a política de reembolso acima.</p>",
        faq3bq: "Posso usar uma chave de licença em mais de um PC?",
        faq3ba: "Sim. Você pode inserir a mesma chave de licença de 16 caracteres uma vez em cada um de até dois PCs—por exemplo, PC de trabalho e pessoal—para usar o Peekom Plus em ambos.",
        faq3cq: "Posso continuar a usar se trocar o PC do trabalho ou mudar de emprego?",
        faq3ca: "Consoante o plano, o Peekom Plus pode ser usado em 1 dispositivo (Single), 2 (Double) ou 5 (Family). Reinstalar no mesmo dispositivo é permitido. Se precisar mudar para um novo dispositivo, contacte-nos — analisaremos e ajudaremos. Consoante a situação, poderemos orientá-lo a reativar no novo dispositivo após repor os dispositivos ativados anteriormente. O limite de dispositivos ou a troca de PC, por si só, <strong>não dão direito a reembolso</strong>, mas ajudamos com gosto a mudar de dispositivo desativando o antigo — basta contactar-nos.",
        faq3dq: "Que informações devo enviar para mudar de dispositivo?",
        faq3da: "Para uma análise mais rápida, envie o e-mail usado na compra, o número do pedido, a chave de licença e o motivo da mudança de dispositivo. Se já estiver a usar todos os lugares do seu plano (Single 1 · Double 2 · Family 5), poderemos repor os dispositivos ativos antes da reativação — faça cópia de segurança do que precisar antes de contactar. O limite de dispositivos ou a troca de PC, por si só, <strong>não dão direito a reembolso</strong>, mas se nos contactar ajudamos a mudar de dispositivo desativando o antigo.",
        faq4q: "Um aviso azul aparece ao instalar no Windows.",
        faq4a: 'Avisos SmartScreen são comuns em apps não assinados. Consulte o <a href="#" onclick="openModal(); return false;">guia de instalação</a>: [Mais informações] → [Executar mesmo assim].',
        faq5q: "Quais versões do Windows são suportadas?",
        faq5a: "O Peekom funciona no Windows 10 e 11 (64 bits). O instalador é apenas de 64 bits. Windows 7, 8 e 8.1 não são suportados (Electron 36).",
        faq6q: "Adicionei um índice mas ele não aparece em Configurações.",
        faq6a: "Reabra Configurações para atualizar a lista; versões recentes sincronizam automaticamente.",
        faq7q: "Texto estranho na inicialização após desinstalar.",
        faq7a: "Desative entradas de inicialização do Peekom restantes no Gerenciador de Tarefas, ou reinstale e desinstale novamente.",
        compareColFeature: "Recurso",
        contactTitle: "Contato", contactSub: "Envie seu feedback.",
        contactFeedbackTitle: "Enviar feedback",
        contactFeedbackDesc: "Relatórios de bugs, ideias de recursos, dúvidas de licença",
        contactFeedbackBtn: "Abrir formulário de feedback",
        contactReviewTitle: "Deixar uma avaliação",
        contactReviewDesc: "Conte sua experiência — pode aparecer no nosso site.",
        contactReviewBtn: "Abrir formulário de avaliação",
        contactEmailTitle: "Contato por e-mail",
        contactEmailDesc: "Quando precisar falar conosco diretamente",
        contactNote: "Buscamos responder em cerca de 10 dias úteis. Os formulários do Google chegam mais rápido que o e-mail, então use-os quando puder.",
        contactEmail: "hello.peekom@gmail.com",
        footerCopy: "© 2026. Peekom All rights reserved.",
        footerPrivacy: "Privacidade",
        guideTitle: "Guia de instalação SmartScreen para Windows",
        step1: 'Ao executar o instalador, pode aparecer uma janela azul do SmartScreen dizendo <b>"Aplicativo não reconhecido"</b>.',
        step2: "Clique em <b>[Mais informações]</b> na parte superior da descrição.",
        step3: "Clique em <b>[Executar mesmo assim]</b> no canto inferior direito para concluir a instalação.",
        searchNoResults: "Nenhum resultado",
        modalClose: "Fechar",
        promoNote: "Aumento de preço previsto após o fim da promoção",
        promoSectionTitle: "Peekom Plus (Pago)",
        promoFreeTitle: "Peekom (Grátis)",
        promoVat: "(sem IVA)",
        promoLaunchLabel: "Preço promocional\nde lançamento\naplicado",
        comparePricingExtra: " · pagamento único · até 2 dispositivos · atualizações menores incluídas · reembolso em 30 dias (<a href=\"mailto:" + CONTACT_EMAIL + "\">" + CONTACT_EMAIL + "</a>)",
        dlPlusHintExtra: ' · <a href="' + LINKS.buy + '" id="dlBuyLinkInner">Comprar no Lemon Squeezy</a> → inserir chave de licença no app',
        markdownGuideTitle: "Notas com Markdown",
        markdownGuideBody:
            '<p class="guide-table-intro">Digite naturalmente—pressione <strong>Enter</strong> e a formatação é aplicada automaticamente.</p>' +
            '<table class="compare-table guide-table"><thead><tr><th>Formato de entrada</th><th>Após Enter</th></tr></thead><tbody>' +
            '<tr><td><code># Pauta da reunião</code></td><td class="guide-md-result"><h1 class="guide-md-h1">Pauta da reunião</h1></td></tr>' +
            '<tr><td><code>## Notas</code></td><td class="guide-md-result"><h2 class="guide-md-h2">Notas</h2></td></tr>' +
            '<tr><td><code>### Referência</code></td><td class="guide-md-result"><h3 class="guide-md-h3">Referência</h3></td></tr>' +
            '<tr><td><code>- Tarefa</code></td><td class="guide-md-result"><ul class="guide-md-ul"><li>Tarefa</li></ul></td></tr>' +
            '<tr><td><code>- [ ] Tarefa</code></td><td class="guide-md-result"><label class="guide-md-task"><input type="checkbox" disabled> Tarefa</label></td></tr>' +
            '<tr><td><code>**Importante**</code></td><td class="guide-md-result"><strong>Importante</strong></td></tr>' +
            '<tr><td><code>*Ênfase*</code></td><td class="guide-md-result"><em>Ênfase</em></td></tr>' +
            "</tbody></table>",
        formatBarGuideTitle: "Notas com barra de ferramentas",
        formatBarGuideBody:
            '<p class="guide-table-intro">Clique nos botões acima do memo—não são necessários atalhos de teclado.</p>' +
            '<table class="compare-table guide-table"><thead><tr><th>Recurso</th><th>Como usar</th></tr></thead><tbody>' +
            "<tr><td>Cor · negrito · itálico · sublinhado · tachado</td><td>Selecione o texto e clique em um botão</td></tr>" +
            "<tr><td>Alinhamento (esq./centro/dir./justificado)</td><td>Alterar alinhamento do parágrafo</td></tr>" +
            "<tr><td>Listas (marcador/quadrado/numerada/simples)</td><td>Escolha um estilo de lista no menu</td></tr>" +
            "<tr><td>Inserção de imagem</td><td>Grátis: 1 por memo · Plus: 5 (redimensionar e recortar no Plus)</td></tr>" +
            "</tbody></table>",
        guideKeysTitle: "Atalhos",
        guideKeysIntro: 'Em Configurações → Geral → <strong>Modo de acionamento</strong>, escolha <strong>Controle por mouse</strong> ou <strong>Controle por atalhos</strong>. No macOS, use ⌘ (Command) em vez de Ctrl.',
        gkColAction: "Ação", gkColKey: "Padrão", gkColNote: "Nota",
        gk1a: "Alternar abrir/fechar memo", gk1k: "Ctrl+Shift+M",
        gk1n: "Memo mais recente. Apenas no modo controle por atalhos. Personalizável em Configurações → Geral → Modo de acionamento",
        gk2a: "Abrir índice anterior", gk2k: "Ctrl+Shift+↑",
        gk2n: "Abre o índice anterior e mostra o painel. Modo controle por atalhos. Personalizável em Configurações",
        gk3a: "Abrir próximo índice", gk3k: "Ctrl+Shift+↓",
        gk3n: "Abre o próximo índice e mostra o painel. Modo controle por atalhos. Personalizável em Configurações",
        gk4a: "Trocar índice", gk4k: "↑ / ↓",
        gk4n: "Apenas no modo controle por mouse, painel deve estar aberto",
        gk5a: "Ir para índice", gk5k: "Ctrl+1–9 (Ctrl+0 = índice 10)",
        gk5n: "Abre diretamente o memo desse índice",
        gk6a: "Tamanho da fonte", gk6k: "Ctrl + roda", gk6n: "Na área do memo. Apenas Plus",
        guidePlusTitle: "Ativar Plus",
        guidePlusStep1: "1. Compre o Peekom Plus usando o botão abaixo.",
        guidePlusStep2: "2. Verifique seu e-mail para a chave de licença.",
        guidePlusStep3: "3. Abra o Peekom e insira a chave na janela de <strong>Configurações</strong> ou em <strong>Configurações</strong>.",
        macComingSoonTitle: "macOS",
        macComingSoonBody: "A versão para macOS está em desenvolvimento.<br>Lançamento previsto: <strong>julho de 2026</strong>.",
        guidePlusStep4: "4. A ativação do Peekom Plus está concluída.",
        guideNavStart: "Primeiros passos", guideNavKeys: "Atalhos", guideNavEdit: "Edição", guideNavPlus: "Ativar Plus",
        guideSectionEditTitle: "Edição",
        versionHistoryTitle: "Histórico de versões",
        versionColVersion: "Versão", versionColDate: "Data de lançamento", versionColWin: "Windows", versionColMac: "macOS",
        versionLatest: "Mais recente", versionWin: "64 bits", versionMac: "Universal", versionMacSoon: "Em breve",
        changelogTitle: "Registro de alterações",
        fz1Title: "Espreitar da borda",
        fz1Items: [
            { text: "Clique no índice para abrir memo rapidamente" },
            { text: "Arrastar índice para reposicionar" },
            { text: "Interruptor Peek / ICE" },
            { text: "Recolhimento automático no modo Peek" }
        ],
        fz2Title: "Trabalhe com mais eficiência",
        fz2Items: [
            { text: "Atalho para abrir memo recente" },
            { text: "Fixar tela de destino" },
            { text: "Suporte à sintaxe Markdown" },
            { text: "Inserção de imagem" }
        ],
        fz3Title: "Seu memo personalizado",
        fz3Items: [
            { text: "Barra de formatação" },
            { text: "Títulos de índice personalizados" },
            { text: "Proporção do memo (1:1, 3:4)" },
            { text: "Cores de fundo padrão" }
        ],
        fz4Title: "Vá além com Plus",
        fz4Items: [
            { text: "Até 10 índices independentes", plus: true },
            { text: "Exportar · backup JSON", plus: true },
            { text: "Até 5 imagens por memo", plus: true },
            { text: "Redimensionar imagem · recorte de proporção", plus: true }
        ],
        fz5Title: "Personalização exclusiva Plus",
        fz5Items: [
            { text: "Controle de tamanho da fonte", plus: true },
            { text: "Opacidade padrão do memo", plus: true },
            { text: "Cores de fundo e texto personalizadas", plus: true },
            { text: "Fontes personalizadas", plus: true }
        ],
        footerLangLabel: "Idioma",
        themeLight: "Claro",
        themeDark: "Escuro",
        themeAuto: "Auto",
        themeLightLabel: "Modo claro",
        themeDarkLabel: "Modo escuro",
        themeAutoLabel: "Seguir sistema",
        themeAriaLabel: "Tema",
        pageCtaDownload: "Baixar",
        pageCtaCompare: "Ver comparação",
        featuresCtaTitle: "Expanda com Peekom Plus",
        featuresCtaDesc: "Desbloqueie 10 slots, temas personalizados, exportação e mais dentro do app.",
        helpCtaTitle: "Comece agora",
        helpCtaDesc: "Instale o Peekom e experimente memos na borda do seu monitor.",
        faqCtaTitle: "Ainda tem dúvidas?",
        faqCtaDesc: "Veja a comparação de recursos grátis vs Plus.",
        contactCtaTitle: "Ainda não experimentou o Peekom?",
        contactCtaDesc: "Instale gratuitamente e comece já.",
        downloadCtaTitle: "Precisa do Plus?",
        downloadCtaDesc: "Insira sua chave de licença no mesmo app para ativar o Plus."
    }
});

})();

jQuery(document).ready(function() {
  $.i18n({
    locale: 'es' // default locale spanish
  });
  var update_texts = function() {
    $('body').i18n();
    $('#loc-action-form-text').text($.i18n('action-form-text'));
    /* Not working
    $('#loc-action-form-name').attr("placeholder", $.i18n('action-form-name'));
    */
    /* NAVBAR */
    $('#loc-explanatory').text($.i18n('explanatory'));
    $('#loc-design').text($.i18n('design'));
    $('#loc-animation').text($.i18n('animation'));
    $('#loc-portfolio').text($.i18n('portfolio'));
    $('#loc-clients').text($.i18n('clients'));
    $('#loc-contact').text($.i18n('contact'));
    /* INTRO SECTION */
    $('#loc-intro-title').text($.i18n('intro-title'));
    $('#loc-intro-desc').text($.i18n('intro-desc'));
    $('#loc-intro-action1').text($.i18n('intro-action'));
    $('#loc-intro-action2').text($.i18n('intro-action'));
    $('#loc-intro-action3').text($.i18n('intro-action'));
    $('#loc-intro-design').text($.i18n('design'));
    $('#loc-intro-animation').text($.i18n('animation'));
    $('#loc-intro-packs').text($.i18n('intro-packs'));
    /* INTRO SECTION MODAL */
    $('#loc-intro-modal-packs').text($.i18n('intro-packs'));
    $('#loc-intro-modal-bundle1').text($.i18n('intro-modal-bundle1'));
    $('#loc-intro-modal-bundle1-bullet1').text($.i18n('intro-modal-bundle1-bullet1'));
    $('#loc-intro-modal-bundle1-bullet2').text($.i18n('intro-modal-bundle1-bullet2'));
    $('#loc-intro-modal-bundle1-bullet3').text($.i18n('intro-modal-bundle1-bullet3'));
    $('#loc-intro-modal-bundle1-bullet4').text($.i18n('intro-modal-bundle1-bullet4'));
    $('#loc-intro-modal-bundle1-bullet5').text($.i18n('intro-modal-bundle1-bullet5'));
    $('#loc-intro-modal-bundle1-bullet6').text($.i18n('intro-modal-bundle1-bullet6'));
    $('#loc-intro-modal-bundle1-bullet7').text($.i18n('intro-modal-bundle1-bullet7'));
    $('#loc-intro-modal-bundle1-bullet8').text($.i18n('intro-modal-bundle1-bullet8'));
    $('#loc-intro-modal-bundle1-bullet9').text($.i18n('intro-modal-bundle1-bullet9'));
    $('#loc-intro-modal-bundle1-bullet10').text($.i18n('intro-modal-bundle1-bullet10'));
    $('#loc-intro-modal-bundle1-bullet11').text($.i18n('intro-modal-bundle1-bullet11'));
    $('#loc-intro-modal-bundle1-bullet12').text($.i18n('intro-modal-bundle1-bullet12'));
    $('#loc-intro-modal-bundle2').text($.i18n('intro-modal-bundle2'));
    $('#loc-intro-modal-bundle2-bullet1').text($.i18n('intro-modal-bundle2-bullet1'));
    $('#loc-intro-modal-bundle2-bullet2').text($.i18n('intro-modal-bundle2-bullet2'));
    $('#loc-intro-modal-bundle2-bullet3').text($.i18n('intro-modal-bundle2-bullet3'));
    $('#loc-intro-modal-bundle2-bullet4').text($.i18n('intro-modal-bundle2-bullet4'));
    $('#loc-intro-modal-bundle2-bullet5').text($.i18n('intro-modal-bundle2-bullet5'));
    $('#loc-intro-modal-bundle2-bullet6').text($.i18n('intro-modal-bundle2-bullet6'));
    $('#loc-intro-modal-bundle2-bullet7').text($.i18n('intro-modal-bundle2-bullet7'));
    $('#loc-intro-modal-bundle2-bullet8').text($.i18n('intro-modal-bundle2-bullet8'));
    $('#loc-intro-modal-bundle2-bullet9').text($.i18n('intro-modal-bundle2-bullet9'));
    $('#loc-intro-modal-bundle2-bullet10').text($.i18n('intro-modal-bundle2-bullet10'));
    $('#loc-intro-modal-bundle2-bullet11').text($.i18n('intro-modal-bundle2-bullet11'));
    $('#loc-intro-modal-bundle2-bullet12').text($.i18n('intro-modal-bundle2-bullet12'));
    $('#loc-intro-modal-bundle3').text($.i18n('intro-modal-bundle3'));
    $('#loc-intro-modal-bundle3-bullet1').text($.i18n('intro-modal-bundle3-bullet1'));
    $('#loc-intro-modal-bundle3-bullet2').text($.i18n('intro-modal-bundle3-bullet2'));
    $('#loc-intro-modal-bundle3-bullet3').text($.i18n('intro-modal-bundle3-bullet3'));
    $('#loc-intro-modal-bundle3-bullet4').text($.i18n('intro-modal-bundle3-bullet4'));
    $('#loc-intro-modal-bundle3-bullet5').text($.i18n('intro-modal-bundle3-bullet5'));
    $('#loc-intro-modal-bundle3-bullet6').text($.i18n('intro-modal-bundle3-bullet6'));
    $('#loc-intro-modal-bundle3-bullet7').text($.i18n('intro-modal-bundle3-bullet7'));
    $('#loc-intro-modal-bundle3-bullet8').text($.i18n('intro-modal-bundle3-bullet8'));
    $('#loc-intro-modal-bundle3-bullet9').text($.i18n('intro-modal-bundle3-bullet9'));
    $('#loc-intro-modal-bundle3-bullet10').text($.i18n('intro-modal-bundle3-bullet10'));
    $('#loc-intro-modal-bundle3-bullet11').text($.i18n('intro-modal-bundle3-bullet11'));
    $('#loc-intro-modal-bundle3-bullet12').text($.i18n('intro-modal-bundle3-bullet12'));
    $('#loc-intro-modal-bundle3-bullet13').text($.i18n('intro-modal-bundle3-bullet13'));
    $('#loc-intro-modal-bundle3-bullet14').text($.i18n('intro-modal-bundle3-bullet14'));
    $('#loc-intro-modal-bundle3-bullet15').text($.i18n('intro-modal-bundle3-bullet15'));
    $('#loc-intro-modal-bundle3-bullet16').text($.i18n('intro-modal-bundle3-bullet16'));
    $('#loc-intro-modal-bundle3-bullet17').text($.i18n('intro-modal-bundle3-bullet17'));
    $('#loc-intro-modal-bundle4').text($.i18n('intro-modal-bundle4'));
    $('#loc-intro-modal-bundle4-bullet1').text($.i18n('intro-modal-bundle4-bullet1'));
    $('#loc-intro-modal-bundle4-bullet2').text($.i18n('intro-modal-bundle4-bullet2'));
    $('#loc-intro-modal-bundle4-bullet3').text($.i18n('intro-modal-bundle4-bullet3'));
    $('#loc-intro-modal-bundle4-bullet4').text($.i18n('intro-modal-bundle4-bullet4'));
    $('#loc-intro-modal-bundle4-bullet5').text($.i18n('intro-modal-bundle4-bullet5'));
    $('#loc-intro-modal-bundle4-bullet6').text($.i18n('intro-modal-bundle4-bullet6'));
    $('#loc-intro-modal-bundle4-bullet7').text($.i18n('intro-modal-bundle4-bullet7'));
    $('#loc-intro-modal-bundle4-bullet8').text($.i18n('intro-modal-bundle4-bullet8'));
    $('#loc-intro-modal-bundle4-bullet9').text($.i18n('intro-modal-bundle4-bullet9'));
    $('#loc-intro-modal-bundle4-bullet10').text($.i18n('intro-modal-bundle4-bullet10'));
    $('#loc-intro-modal-bundle4-bullet11').text($.i18n('intro-modal-bundle4-bullet11'));
    $('#loc-intro-modal-bundle4-bullet12').text($.i18n('intro-modal-bundle4-bullet12'));
    $('#loc-intro-modal-bundle4-bullet13').text($.i18n('intro-modal-bundle4-bullet13'));
    $('#loc-intro-modal-bundle4-bullet14').text($.i18n('intro-modal-bundle4-bullet14'));
    $('#loc-intro-modal-bundle4-bullet15').text($.i18n('intro-modal-bundle4-bullet15'));
    $('#loc-intro-modal-bundle4-bullet16').text($.i18n('intro-modal-bundle4-bullet16'));
    $('#loc-intro-modal-bundle4-bullet17').text($.i18n('intro-modal-bundle4-bullet17'));
    $('#loc-intro-modal-quote1').text($.i18n('intro-modal-quote'));
    $('#loc-intro-modal-quote2').text($.i18n('intro-modal-quote'));
    $('#loc-intro-modal-quote3').text($.i18n('intro-modal-quote'));
    $('#loc-intro-modal-quote4').text($.i18n('intro-modal-quote'));
    /* DESIGN SECTION */
    $('#loc-section-design').text($.i18n('design'));
    $('#loc-section-design-webdev').text($.i18n('section-design-webdev'));
    $('#loc-section-design-webdev-content').text($.i18n('section-design-webdev-content'));
    $('#loc-section-design-appdev').text($.i18n('section-design-appdev'));
    $('#loc-section-design-appdev-content').text($.i18n('section-design-appdev-content'));
    $('#loc-section-design-branding-content').text($.i18n('section-design-branding-content'));
    /* ANIMATION SECTION */
    $('#loc-section-animation').text($.i18n('animation'));
    $('#loc-section-animation-expvids-content').text($.i18n('section-animation-expvids-content'));
    $('#loc-section-animation-3dvr').text($.i18n('section-animation-3dvr'));
    $('#loc-section-animation-3dvr-content').text($.i18n('section-animation-3dvr-content'));
    $('#loc-section-animation-vr-link').text($.i18n('section-animation-vr-link'));
    $('#loc-section-animation-vrmobile-link').text($.i18n('section-animation-vrmobile-link'));
    $('#loc-section-animation-3d-link').text($.i18n('section-animation-3d-link'));
    $('#loc-section-animation-kintypo-content').text($.i18n('section-animation-kintypo-content'));
    $('#loc-section-animation-webcont').text($.i18n('section-animation-webcont'));
    $('#loc-section-animation-webcont-content').text($.i18n('section-animation-webcont-content'));
    $('#loc-section-animation-examples').text($.i18n('section-animation-examples'));
    $('#loc-section-animation-modal').text($.i18n('section-animation-webcont'));
    /* PORTFOLIO SECTION */
    $('#loc-section-portfolio').text($.i18n('portfolio'));
    $('#loc-section-portfolio-desc').text($.i18n('section-portfolio-desc'));
    /* CLIENTS SECTION */
    $('#loc-section-clients').text($.i18n('section-clients'));
    /* CONTACT SECTION */
    $('#loc-section-contact').text($.i18n('section-contact'));
    $('#loc-section-contact-address').text($.i18n('section-contact-address'));
    $('#loc-section-contact-phone').text($.i18n('section-contact-phone'));
    $('#loc-section-contact-time').text($.i18n('section-contact-time'));
    $('#loc-section-contact-time-montue').text($.i18n('section-contact-time-montue'));
    $('#loc-section-contact-time-fri').text($.i18n('section-contact-time-fri'));
    $('#loc-section-contact-time-fri-desc').text($.i18n('section-contact-time-fri-desc'));
    $('#loc-section-contact-time-weekend').text($.i18n('section-contact-time-weekend'));
    $('#loc-section-contact-time-weekend-desc').text($.i18n('section-contact-time-weekend-desc'));
    /* FOOTER */
    $('#loc-footer-about').text($.i18n('footer-about'));
    $('#loc-footer-whyus').text($.i18n('footer-whyus'));
    $('#loc-footer-whyus-1').text($.i18n('footer-whyus-1'));
    $('#loc-footer-whyus-2').text($.i18n('footer-whyus-2'));
    $('#loc-footer-whyus-3').text($.i18n('footer-whyus-3'));
    $('#loc-footer-ouroff').text($.i18n('footer-ouroff'));
    $('#loc-footer-address').text($.i18n('section-contact-address'));
    $('#loc-footer-phone').text($.i18n('section-contact-phone'));
    $('#messages').text($.i18n('message_from', 'Ann', 2, 'female'));
  };

  $('.lang-switch').click(function(e) {
    e.preventDefault();
    $.i18n().locale = $(this).data('locale');
    update_texts();
  });

  $.i18n().load({
    'es': {
      'welcome': '¡Bienvenido!',
      'action-form-text': 'Platícanos tu proyecto. Déjanos tu contacto o llámanos al',
      'action-form-name': 'Nombre',
      /* NAVBAR */
      'explanatory': 'Agencia',
      'design': 'Diseño',
      'animation': 'Animación',
      'portfolio': 'Portafolio',
      'clients': 'Clientes',
      'contact': 'Contacto',
      /* INTRO SECTION */
      'intro-title': 'Diseño y animación con una expriencia técnica sólida',
      'intro-desc': 'Animeishon Studio es una agencia digital en la Ciudad de México especializada en diseño y animación. Proveemos servicios creativos con una experiencia técnica sólida en diferentes campos.',
      'intro-action': 'VER DETALLES',
      'intro-packs': 'Servicios web',
      /* INTRO SECTION MODAL */
      'intro-modal-quote': 'Cotiza',
      'intro-modal-bundle1': 'Personal',
      'intro-modal-bundle1-bullet1': 'Hasta 5 páginas estáticas',
      'intro-modal-bundle1-bullet2': 'Diseño adaptable (smartphones, tabletas y computadoras)',
      'intro-modal-bundle1-bullet3': 'Diseño  100% personalizado',
      'intro-modal-bundle1-bullet4': '1 año de hospedaje web gratis',
      'intro-modal-bundle1-bullet12': 'Hasta 20 cuentas de correo @tu.dominio',
      'intro-modal-bundle1-bullet10': 'Hasta 5 formularios de contacto',
      'intro-modal-bundle1-bullet11': 'Integración con Google Analytics',
      'intro-modal-bundle1-bullet5': '1 año de cambios a banners, imágenes, y textos',
      'intro-modal-bundle1-bullet6': 'Registro de dominio gratis',
      'intro-modal-bundle1-bullet7': 'Código optimizado haciendo que el sitio sea lo más veloz posible',
      'intro-modal-bundle1-bullet8': '1.5GB de almacenamiento',
      'intro-modal-bundle1-bullet9': '2 rondas de cambios al aspecto y estructura del sitio antes de la entrega final',
      'intro-modal-bundle2': 'Negocio',
      'intro-modal-bundle2-bullet1': 'Hasta 15 páginas estáticas',
      'intro-modal-bundle2-bullet2': 'Diseño adaptable (smartphones, tabletas y computadoras)',
      'intro-modal-bundle2-bullet3': 'Diseño  100% personalizado',
      'intro-modal-bundle2-bullet4': '1 año de hospedaje web gratis',
      'intro-modal-bundle2-bullet12': 'Cuentas de correo ilimitadas @tu.dominio, ligadas a Gmail o Outlook',
      'intro-modal-bundle2-bullet10': 'Todos los formularios de contacto que se requieran',
      'intro-modal-bundle2-bullet11': 'Integración con Google Analytics',
      'intro-modal-bundle2-bullet5': '1 año de cambios a banners, imágenes, y textos',
      'intro-modal-bundle2-bullet6': 'Registro de dominio gratis',
      'intro-modal-bundle2-bullet7': 'Código optimizado haciendo que el sitio sea lo más veloz posible',
      'intro-modal-bundle2-bullet8': '1.5GB de almacenamiento',
      'intro-modal-bundle2-bullet9': '2 rondas de cambios al aspecto y estructura del sitio antes de la entrega final',
      'intro-modal-bundle3': 'Página editable',
      'intro-modal-bundle3-bullet1': 'Hasta 5 páginas estáticas',
      'intro-modal-bundle3-bullet13': 'Editor de contenidos',
      'intro-modal-bundle3-bullet2': 'Diseño  adaptable (smartphones, tabletas y computadoras)',
      'intro-modal-bundle3-bullet3': 'Diseño 100% personalizado',
      'intro-modal-bundle3-bullet4': '1 año de hospedaje web gratis',
      'intro-modal-bundle3-bullet12': 'Cuentas de correo ilimitadas @tu.dominio, ligadas a Gmail o Outlook',
      'intro-modal-bundle3-bullet10': 'Todos los formularios de contacto que se requieran',
      'intro-modal-bundle3-bullet11': 'Integración con Google Analytics',
      'intro-modal-bundle3-bullet5': '1 año de soporte técnico y resolución de dudas',
      'intro-modal-bundle3-bullet6': 'Registro de dominio gratis',
      'intro-modal-bundle3-bullet7': 'Código optimizado haciendo que el sitio sea lo más veloz posible',
      'intro-modal-bundle3-bullet8': '1.5GB de almacenamiento',
      'intro-modal-bundle3-bullet14': 'Manual de usuario',
      'intro-modal-bundle3-bullet9': '2 rondas de cambios al aspecto y estructura del sitio antes de la entrega final',
      'intro-modal-bundle4': 'E-commerce',
      'intro-modal-bundle4-bullet1': 'Hasta 5 páginas estáticas',
      'intro-modal-bundle4-bullet13': 'Editor de contenidos',
      'intro-modal-bundle4-bullet15': 'Tienda en linea',
      'intro-modal-bundle4-bullet16': 'Catálogo y editor de productos',
      'intro-modal-bundle4-bullet17': 'Pago con tarjeta y PayPal',
      'intro-modal-bundle4-bullet2': 'Diseño adaptable (smartphones, tabletas y computadoras)',
      'intro-modal-bundle4-bullet3': 'Diseño 100% personalizado',
      'intro-modal-bundle4-bullet4': '1 año de hospedaje web gratis',
      'intro-modal-bundle4-bullet12': 'Cuentas de correo ilimitadas @tu.dominio, ligadas a Gmail o Outlook',
      'intro-modal-bundle4-bullet10': 'Todos los formularios de contacto que se requieran',
      'intro-modal-bundle4-bullet11': 'Integración con Google Analytics',
      'intro-modal-bundle4-bullet5': '1 año de soporte técnico y resolución de dudas',
      'intro-modal-bundle4-bullet6': 'Registro de dominio gratis',
      'intro-modal-bundle4-bullet7': 'Código optimizado haciendo que el sitio sea lo más veloz posible',
      'intro-modal-bundle4-bullet8': '1.5GB de almacenamiento',
      'intro-modal-bundle4-bullet14': 'Manual de usuario',
      'intro-modal-bundle4-bullet9': '2 rondas de cambios al aspecto y estructura del sitio antes de la entrega final',
      /* DESIGN SECTION */
      'section-design-webdev': 'Desarrollo Web',
      'section-design-webdev-content': 'Creamos sitios web estéticos y modernos con diseño mobile-first, optimización en buscadores (SEO), mapas de calor para que sepas como se comportan tus clientes en tu sitio y analíticas en tiempo real.',
      'section-design-appdev': 'Desarrollo de apps',
      'section-design-appdev-content': 'Hacemos aplicaciones funcionales y estéticas, siempre pensando en cómo se ve (UI) y cómo se siente (UX).',
      'section-design-branding-content': 'Construimos marcas con el objetivo de que sean identificadas por el público deseado. Todo desde el logo y cómo usarlo, el look que tendrá el sitio web, la comunicación de la empresa y la armonía entre todos esos elementos.',
      /* ANIMATION SECTION */
      'section-animation-expvids-content': 'Cada uno de los videos que hacemos explica de forma efectiva tu negocio, producto o servicio en menos de 2 minutos, creando una conexión emocional con el cliente.',
      'section-animation-3dvr': '3D y Realidad Virtual',
      'section-animation-3dvr-content': 'Desarrollamos animaciones y videos 3D, listos para ser utilizados por Oculus Rift, HoloLens y Google Cardboard.',
      'section-animation-vr-link': 'Demo de realidad virtual',
      'section-animation-vrmobile-link': 'Demo de realidad virtual',
      'section-animation-3d-link': 'Demo de tour interactivo',
      'section-animation-kintypo-content': 'Texto en movimiento. Es una técnica de animación que mezcla animación y texto con el propósito de transmitir una idea de manera fácil, rápida y simple.',
      'section-animation-webcont': 'Contenido Web',
      'section-animation-webcont-content': 'Creamos contenido para redes sociales, Facebook, Instagram y Twitter además de sitios web. Formato WEBM, GIF, MOV, etc.',
      'section-animation-examples': "Ver ejemplos",
      /* PORTFOLIO SECTION */
      'section-portfolio-desc': "Dejamos que nuestro trabajo hable por nosostros",
      /* CLIENTS SECTION */
      'section-clients': 'Nuestros Clientes',
      /* CONTACT SECTION */
      'section-contact': 'Contáctanos',
      'section-contact-address': '🏡 Dirección',
      'section-contact-phone': '📞 Teléfono',
      'section-contact-time': '🕖 Horario',
      'section-contact-time-montue': 'Lunes - Jueves:',
      'section-contact-time-fri': 'Viernes:',
      'section-contact-time-fri-desc': '¿Trabajas los viernes?',
      'section-contact-time-weekend': 'Sábado y Domingo:',
      'section-contact-time-weekend-desc': 'No preguntes',
      /* FOOTER */
      'footer-about': 'Animeishon Studio es una agencia especializada en diseño digital y animación. Proveemos distintos servicios enfocados a la creatividad, con fundamentos técnicos sólidos y experiencia. hello@animeishon.studio ',
      'footer-whyus': '¿Por qué nosotros?',
      'footer-whyus-1': 'Hemos trabajado con todo tiempo de clientes: desde instancias gubernamentales hasta industrias creativas.',
      'footer-whyus-2': 'Conjuga diseño y tecnología para lograr un producto completo.',
      'footer-whyus-3': 'Soporte 24/7 incluido en cada servicio. Nosotros te cuidamos ♥︎',
      'footer-ouroff': 'Nuestra oficinas',
      'message_from': '$1 {{gender:$3|отправил|отправила}} вам $2 {{plural:$2|сообщение|сообщений|сообщения}}. {{gender:$3|Он|Она}} ждёт ответа!'
    },
    'en': {
      'welcome': 'Welcome!',
      'action-form-text': 'Tell us about your project. Leave your contact info here or call us at',
      'action-form-name': 'Name',
      /* NAVBAR */
      'explanatory': 'Agency',
      'design': 'Design',
      'animation': 'Animation',
      'portfolio': 'Portfolio',
      'clients': 'Clients',
      'contact': 'Contact',
      /* INTRO SECTION */
      'intro-title': 'Design and animation with a strong technical background',
      'intro-desc': 'Animeishon Studio is Mexico City-based digital agency specialized in design and animation. We provide creative services with a strong experience in different fields.',
      'intro-action': 'SEE MORE',
      /* SERVICES */
      'intro-packs': 'Web services',
      'intro-packs-welcome': 'The best design for the best price. Each of our package includes all you need to attain the serious online presence your business needs: what changes is the power, speed, and strength as you need it. We start off making a strategic plan to raise your business\' goals, then focusing all our design &  programming efforts to make them real.',
      'intro-modal-quote': 'Request a quote',
      'intro-modal-bundle1': 'Personal',
      'intro-modal-bundle1-bullet1': 'Up to 5  static pages',
      'intro-modal-bundle1-bullet2': 'Responsive design (smartphones, tablets & desktops)',
      'intro-modal-bundle1-bullet3': '100% custom design',
      'intro-modal-bundle1-bullet4': 'Free web hosting for 1 year',
      'intro-modal-bundle1-bullet12': 'Up to 20 @your.domain mail accounts',
      'intro-modal-bundle1-bullet10': 'Up to 5 contact forms',
      'intro-modal-bundle1-bullet11': 'Google Analytics integration',
      'intro-modal-bundle1-bullet5': 'Free changes to banners, images & texts for 1 year',
      'intro-modal-bundle1-bullet6': 'Free domain registration',
      'intro-modal-bundle1-bullet7': 'Código optimizado haciendo que el sitio sea lo más veloz posible',
      'intro-modal-bundle1-bullet7': 'Optimized code making the page load faster',
      'intro-modal-bundle1-bullet8': '1.5GB Storage',
      'intro-modal-bundle1-bullet9': '2 rounds of changes to the site\'s structure & looks before launch',
      'intro-modal-bundle2': 'Negocio',
      'intro-modal-bundle2-bullet1': 'Up to 15 static pages',
      'intro-modal-bundle2-bullet2': 'Responsive design (smartphones, tablets & desktops)',
      'intro-modal-bundle2-bullet3': '100% custom design',
      'intro-modal-bundle2-bullet4': 'Free web hosting for 1 year',
      'intro-modal-bundle2-bullet12': 'Unlimited @your.domain mail accounts',
      'intro-modal-bundle2-bullet10': 'Unlimited contact forms',
      'intro-modal-bundle2-bullet11': 'Google Analytics integration',
      'intro-modal-bundle2-bullet5': 'Free changes to banners, images & texts for 1 year',
      'intro-modal-bundle2-bullet6': 'Free domain registration',
      'intro-modal-bundle2-bullet7': 'Optimized code making the page load faster',
      'intro-modal-bundle2-bullet8': '1.5GB Storage',
      'intro-modal-bundle2-bullet9': '2 rounds of changes to the site\'s structure & looks before launch',
      'intro-modal-bundle3': 'Página editable',
      'intro-modal-bundle3-bullet1': 'Up to 5 static pages',
      'intro-modal-bundle3-bullet13': 'Content Management System',
      'intro-modal-bundle3-bullet2': 'Responsive design (smartphones, tablets & desktops)',
      'intro-modal-bundle3-bullet3': '100% custom design',
      'intro-modal-bundle3-bullet4': 'Free web hosting for 1 year',
      'intro-modal-bundle3-bullet12': 'Unlimited @your.domain mail accounts',
      'intro-modal-bundle3-bullet10': 'Unlimited contact forms',
      'intro-modal-bundle3-bullet11': 'Google Analytics integration',
      'intro-modal-bundle3-bullet5': '24/7 Technical support for 1 year',
      'intro-modal-bundle3-bullet6': 'Free domain registration',
      'intro-modal-bundle3-bullet7': 'Optimized code making the page load faster',
      'intro-modal-bundle3-bullet8': '1.5GB storage',
      'intro-modal-bundle3-bullet14': 'User manual',
      'intro-modal-bundle3-bullet9': '2 rounds of changes to the site\'s structure & looks before launch',
      'intro-modal-bundle4': 'E-commerce',
      'intro-modal-bundle4-bullet1': 'Up to 5 static pages',
      'intro-modal-bundle4-bullet13': 'Content Management System',
      'intro-modal-bundle4-bullet15': 'Digital storefront',
      'intro-modal-bundle4-bullet16': 'Inventory manager',
      'intro-modal-bundle4-bullet17': 'Payment processor & PayPal',
      'intro-modal-bundle4-bullet2': 'Responsive design (smartphones, tablets & desktops)',
      'intro-modal-bundle4-bullet3': '100% custom design',
      'intro-modal-bundle4-bullet4': 'Free web hosting for 1 year',
      'intro-modal-bundle4-bullet12': 'Unlimited @your.domain mail accounts',
      'intro-modal-bundle4-bullet10': 'Unlimited contact forms',
      'intro-modal-bundle4-bullet11': 'Google Analytics integration',
      'intro-modal-bundle4-bullet5': '24/7 Technical support for 1 year',
      'intro-modal-bundle4-bullet6': 'Free domain registration',
      'intro-modal-bundle4-bullet7': 'Optimized code making the page load faster',
      'intro-modal-bundle4-bullet8': '1.5GB storage',
      'intro-modal-bundle4-bullet14': 'User manual',
      'intro-modal-bundle4-bullet9': '2 rounds of changes to the site',
      /* COMMON ACROSS SERVICES: */
      'intro-modal-bundle-common1': 'Google Maps Integration',
      'intro-modal-bundle-common2': 'Visual Website Analytics and Heatmaps',
      'intro-modal-bundle-common3': 'Social media widgets integration',
      /* DESIGN SECTION */
      'section-design-webdev': 'Web Development',
      'section-design-webdev-content': 'We create beautiful, modern, mobile-first websites that will really make you stand out. You will also get Search Engine Optimization (SEO), heatmaps to know where your visitors click, and real-time analytics for your website.',
      'section-design-appdev': 'App Development',
      'section-design-appdev-content': 'User interfaces for a beautiful user experience. Our apps are clean and straightforward. Programmers love us!',
      'section-design-branding-content': 'We build brands that can be easily recognized by their desired audience. From the logo and how to use it, the look and feel of the website, the company\'s communication and the harmony among these elements.',
      /* ANIMATION SECTION */
      'section-animation-expvids-content': 'Let your clients know what you offer, in under 2 minutes. No. Overhead.',
      'section-animation-3dvr': '3D & VR',
      'section-animation-3dvr-content': 'Stereoscopic video and animations. Ocuclus Rift & Hololens ready. Even Google Cardboard.',
      'section-animation-vr-link': 'Virtual reality demo',
      'section-animation-vrmobile-link': 'Virtual reality demo',
      'section-animation-3d-link': '3D landscapes and architecture',
      'section-animation-kintypo-content': 'Movin’ type. Express yourself with animated text. Dynamic, simple and easy.',
      'section-animation-webcont': 'Web Content',
      'section-animation-webcont-content': 'Original, curated and custom made posts for your Facebook, Instagram, & Twitter. PNGs, High Quality GIFs, WebMs, you call it.',
      'section-animation-examples': 'See examples',
      /* PORTFOLIO SECTION */
      'section-portfolio-desc': 'Our work speaks for ourselves',
      /* CLIENTS SECTION */
      'section-clients': 'Our Clients',
      /* CONTACT SECTION */
      'section-contact': 'Contact Us',
      'section-contact-address': '🏡 Address',
      'section-contact-phone': '📞 Phone',
      'section-contact-time': '🕖 Working Hours',
      'section-contact-time-montue': 'Monday - Tuesday:',
      'section-contact-time-fri': 'Friday:',
      'section-contact-time-fri-desc': 'Do you really work on Fridays?',
      'section-contact-time-weekend': 'Saturday and Sunday:',
      'section-contact-time-weekend-desc': 'Don\'t even try it',
      /* FOOTER */
      'footer-about': 'Animeishon Studio is a creative agency focused on digital design and animation. We provide different creative services with a solid technical experience. hello@animeishon.studio',
      'footer-whyus': 'Why us?',
      'footer-whyus-1': 'We have worked with a wide range of clients: from creative industries to the government.',
      'footer-whyus-2': 'Mix design and technology to create a polished product.',
      'footer-whyus-3': '24/7 Support included in every service. We care for you ♥︎',
      'footer-ouroff': 'Our Offices',
      'message_from': '$1 has send you $2 {{plural:$2|message|messages}}. {{gender:$3|He|She}} is waiting for your response!'
    }
  });

  update_texts();
});

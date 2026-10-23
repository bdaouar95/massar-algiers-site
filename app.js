/* Massar Algiers : affichage du site.
   Le contenu modifiable est dans contenu.js. Ce fichier contient les textes
   d'interface (FR / AR) et la mise en page. */

(function () {
  var D = window.MASSAR;

  // ─── Textes d'interface ───────────────────────────────────────────────
  var T = {
    fr: {
      langBtn: 'عربي',
      nav: [['Offres', '#offres'], ['Omra', '#omra'], ['Services', '#services'], ['Avis', '#avis'], ['Contact', '#contact']],
      kicker: 'Votre prochaine escapade', heroTitle: "Voyagez l'esprit tranquille",
      heroSub: 'Voyages organisés, Omra, billetterie et visas. Nous organisons tout, de A à Z, et vous réservez directement sur WhatsApp.',
      btnOffers: 'Voir nos offres', btnWa: 'Réserver sur WhatsApp',
      metiers: [{ t: 'Voyages', s: 'Organisés & Omra', icon: 'luggage' }, { t: 'Billetterie', s: 'Avion & bateau', icon: 'airplane_ticket' }, { t: 'Services', s: 'Visas & salons', icon: 'badge' }],
      offersBrush: 'Une ville, mille émotions', offersTitle: 'Offres du moment', book: 'Réserver sur WhatsApp', onRequest: 'Prix sur demande', priceLabel: 'Tarif',
      omraBrush: 'Un voyage de foi, bien accompagné', from: 'à partir de', omraProg: 'Programme des départs', omraUnit: 'Prix en DA par personne',
      rooms: ['Quintuple', 'Quadruple', 'Triple', 'Double'], omraHotel: 'Hôtel à La Mecque',
      omraIncl: [{ t: 'Hôtels proches du Haram', icon: 'hotel' }, { t: 'Programmes de qualité, prix adaptés', icon: 'sell' }, { t: 'Organisation complète du voyage', icon: 'directions_bus' }, { t: 'Encadrement et accompagnement', icon: 'groups' }],
      omraBtn: 'Réserver ma Omra sur WhatsApp',
      svcBrush: 'On vous accompagne', svcTitle: 'Billetterie & services',
      services: [
        { img: 'service-maritime', cat: 'Billetterie', t: 'Billets maritimes Algérie ⇄ Europe', d: 'Baleària, Nouris El Bahr, GNV. Dans les deux sens, de l’Algérie vers l’Europe ou de l’Europe vers l’Algérie. Aller simple ou aller-retour.', btn: 'Réserver ma traversée' },
        { img: 'service-visa-espagne', cat: 'Visa', t: 'Visa d’études Espagne', d: 'Choix d’université, dossier complet, accompagnement personnalisé, suivi jusqu’à l’obtention du visa.', btn: 'Demander un accompagnement' },
        { img: 'service-visa-chine', cat: 'Visa', t: 'Visa Chine', d: 'Liste des documents pour une première demande ou un renouvellement.', btn: 'Demander un accompagnement' },
        { img: 'service-salons-italie', cat: 'Salons professionnels', t: 'Salons en Italie', d: 'Pour architectes, designers et entreprises : invitations officielles, lettres de soutien visa.', btn: 'Demander un accompagnement' }
      ],
      seaTitle: 'Lignes maritimes', seaNote: 'Dans les deux sens · Aller simple ou aller-retour',
      whyBrush: 'On s’occupe de tout', whyTitle: 'Pourquoi nous choisir',
      why: [{ t: 'Accompagnement de A à Z', d: 'De la première question jusqu’au retour.', icon: 'support_agent' }, { t: 'Organisation complète', d: 'Vols, hôtels, transferts et excursions.', icon: 'checklist' }, { t: 'Prix compétitifs', d: 'Des tarifs affichés en dinars algériens.', icon: 'sell' }, { t: 'Suivi pendant le voyage', d: 'Une équipe joignable tout au long du séjour.', icon: 'travel_explore' }],
      reviewsTitle: 'Avis clients', reviewSrc: function (s) { return 'Avis ' + s; }, ago: function (m) { return 'il y a ' + m + ' mois'; },
      contactTitle: 'Prêt à partir ?', contactSub: 'Appelez-nous ou écrivez-nous sur WhatsApp. Toutes les réservations se font par téléphone ou WhatsApp.',
      formTitle: 'Demande de réservation', fName: 'Nom complet', fPhone: 'Téléphone', fOffer: 'Offre souhaitée', fPeople: 'Personnes', fMsg: 'Message', fSend: 'Envoyer sur WhatsApp', fHint: 'Le bouton ouvre WhatsApp avec votre message déjà rédigé.', other: 'Autre demande',
      slogan: 'Votre réussite, notre mission', address: 'Cité Ali Ammari, Fouka, Tipaza, Algérie', follow: 'Suivez-nous', waFloat: 'WhatsApp', menu: 'Menu', mapTitle: 'Carte : Massar Algiers à Fouka',
      msg: 'Bonjour Massar Algiers, je souhaite réserver : ', msgGen: 'Bonjour Massar Algiers, je souhaite des informations sur vos offres.',
      msgForm: 'Bonjour Massar Algiers, voici ma demande :'
    },
    ar: {
      langBtn: 'FR',
      nav: [['العروض', '#offres'], ['العمرة', '#omra'], ['الخدمات', '#services'], ['الآراء', '#avis'], ['اتصل بنا', '#contact']],
      kicker: 'وجهتك القادمة', heroTitle: 'سافر براحة بال',
      heroSub: 'رحلات منظمة، عمرة، تذاكر وتأشيرات. ننظم لكم كل شيء من الألف إلى الياء، والحجز مباشرة عبر واتساب.',
      btnOffers: 'اكتشف عروضنا', btnWa: 'احجز عبر واتساب',
      metiers: [{ t: 'رحلات', s: 'منظمة وعمرة', icon: 'luggage' }, { t: 'تذاكر', s: 'طيران وبحر', icon: 'airplane_ticket' }, { t: 'خدمات', s: 'تأشيرات ومعارض', icon: 'badge' }],
      offersBrush: 'مدينة واحدة، ألف إحساس', offersTitle: 'عروض الشهر', book: 'احجز عبر واتساب', onRequest: 'السعر عند الطلب', priceLabel: 'السعر',
      omraBrush: 'رحلة إيمانية بمرافقة كاملة', from: 'ابتداءً من', omraProg: 'برنامج الرحلات', omraUnit: 'الأسعار بالدينار للشخص',
      rooms: ['خماسية', 'رباعية', 'ثلاثية', 'ثنائية'], omraHotel: 'الفندق في مكة',
      omraIncl: [{ t: 'فنادق قريبة من الحرم المكي', icon: 'hotel' }, { t: 'برامج قيمة وأسعار مناسبة', icon: 'sell' }, { t: 'تنظيم كامل لرحلتكم', icon: 'directions_bus' }, { t: 'إشراف ومرافقة خلال الرحلة', icon: 'groups' }],
      omraBtn: 'احجز عمرتك عبر واتساب',
      svcBrush: 'نرافقكم', svcTitle: 'التذاكر والخدمات',
      services: [
        { img: 'service-maritime', cat: 'التذاكر', t: 'تذاكر بحرية الجزائر ⇄ أوروبا', d: 'بالياريا، نوريس البحر، GNV. في الاتجاهين، من الجزائر إلى أوروبا أو من أوروبا إلى الجزائر. ذهاب فقط أو ذهاب وإياب.', btn: 'احجز رحلتك البحرية' },
        { img: 'service-visa-espagne', cat: 'تأشيرة', t: 'تأشيرة الدراسة في إسبانيا', d: 'اختيار الجامعة، ملف كامل، مرافقة شخصية، متابعة حتى الحصول على التأشيرة.', btn: 'اطلب مرافقة' },
        { img: 'service-visa-chine', cat: 'تأشيرة', t: 'تأشيرة الصين', d: 'قائمة الوثائق للطلب الأول أو للتجديد.', btn: 'اطلب مرافقة' },
        { img: 'service-salons-italie', cat: 'معارض مهنية', t: 'معارض إيطاليا', d: 'للمهندسين المعماريين والمصممين والشركات: دعوات رسمية ورسائل دعم التأشيرة.', btn: 'اطلب مرافقة' }
      ],
      seaTitle: 'الخطوط البحرية', seaNote: 'في الاتجاهين · ذهاب فقط أو ذهاب وإياب',
      whyBrush: 'نتكفل بكل شيء', whyTitle: 'لماذا تختارنا',
      why: [{ t: 'مرافقة من الألف إلى الياء', d: 'من أول سؤال حتى العودة.', icon: 'support_agent' }, { t: 'تنظيم شامل', d: 'طيران، فنادق، تنقلات وخرجات.', icon: 'checklist' }, { t: 'أسعار تنافسية', d: 'أسعار واضحة بالدينار الجزائري.', icon: 'sell' }, { t: 'متابعة طوال الرحلة', d: 'فريق متاح طوال مدة الإقامة.', icon: 'travel_explore' }],
      reviewsTitle: 'آراء العملاء', reviewSrc: function (s) { return 'تقييم ' + s; }, ago: function (m) { return 'منذ ' + m + ' أشهر'; },
      contactTitle: 'مستعد للسفر؟', contactSub: 'اتصلوا بنا أو راسلونا عبر واتساب. كل الحجوزات تتم عبر الهاتف أو واتساب.',
      formTitle: 'طلب حجز', fName: 'الاسم الكامل', fPhone: 'رقم الهاتف', fOffer: 'العرض المطلوب', fPeople: 'عدد الأشخاص', fMsg: 'رسالتك', fSend: 'أرسل عبر واتساب', fHint: 'يفتح الزر واتساب مع رسالتك جاهزة.', other: 'طلب آخر',
      slogan: 'نجاحكم، مهمتنا', address: 'حي علي عماري، فوكة، تيبازة، الجزائر', follow: 'تابعونا', waFloat: 'واتساب', menu: 'القائمة', mapTitle: 'خريطة: مسار الجزائر في فوكة',
      msg: 'السلام عليكم، أرغب في حجز: ', msgGen: 'السلام عليكم، أرغب في معلومات حول عروضكم.',
      msgForm: 'السلام عليكم مسار الجزائر، هذا طلبي:'
    }
  };

  // ─── Utilitaires ──────────────────────────────────────────────────────
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function wa(m) { return 'https://wa.me/' + D.whatsapp + '?text=' + encodeURIComponent(m); }
  function ic(name) { return '<span class="ic" aria-hidden="true">' + esc(name) + '</span>'; }
  function waIco() {
    return '<svg class="wa-ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';
  }
  // Symbole du logo (direction 2a) : corps + avion en négatif
  function logo(body) {
    var plane = /^#fff(fff)?$/i.test(body) ? '#0A3D62' : '#ffffff';
    return '<svg viewBox="0 0 100 100" aria-hidden="true"><path fill="' + body + '" d="M28 8 L50 26 L72 8 A48.75 48.75 0 0 1 72 92 L50 76 L28 92 A48.75 48.75 0 0 1 28 8 Z"/>' +
      '<path fill="' + plane + '" transform="translate(50 50) scale(.86) translate(-50 -50)" d="M50 26 C54 26 55.5 30 55.5 35 V45 L82 60 V67 L55.5 59 V65 L64 71 V75 L50 71.5 L36 75 V71 L44.5 65 V59 L18 67 V60 L44.5 45 V35 C44.5 30 46 26 50 26 Z"/></svg>';
  }
  function img(src, alt, eager) {
    return '<img class="cover" src="' + esc(src) + '" alt="' + esc(alt) + '"' + (eager ? '' : ' loading="lazy"') + ' decoding="async">';
  }
  function map(list, fn) { return list.map(fn).join(''); }

  // ─── Langue ───────────────────────────────────────────────────────────
  function initialLang() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q === 'ar' || q === 'fr') return q;
    try { var s = localStorage.getItem('massar-lang'); if (s === 'ar' || s === 'fr') return s; } catch (e) {}
    return 'fr';
  }
  var lang = initialLang();

  // ─── Rendu ────────────────────────────────────────────────────────────
  function render() {
    var t = T[lang];
    var waGen = wa(t.msgGen);
    var omra = D.OMRA[lang];
    var offerOptions = D.OFFRES.map(function (o) { return o[lang].titre + ' – ' + o[lang].duree; })
      .concat([omra.titre], t.services.map(function (s) { return s.t; }), [t.other]);
    var avis = D.AVIS || [];
    var nav = t.nav.filter(function (n) { return n[1] !== '#avis' || avis.length; });

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    var html =
      '<header class="header">' +
        '<div class="wrap header-bar">' +
          '<a href="#top" class="brand" aria-label="Massar Algiers">' + logo('#0A3D62') +
            '<div class="brand-txt"><div class="brand-name">Massar Algiers</div><div class="brand-sub">Travel Agency</div></div></a>' +
          '<div class="spacer"></div>' +
          '<nav class="nav-desk">' + map(nav, function (n) { return '<a href="' + n[1] + '">' + esc(n[0]) + '</a>'; }) + '</nav>' +
          '<button type="button" class="lang-btn" data-action="lang">' + t.langBtn + '</button>' +
          '<a class="phone-pill" href="' + waGen + '" target="_blank" rel="noopener">' + ic('call') + '<span dir="ltr">+213 660 447 167</span></a>' +
          '<div class="mob-actions">' +
            '<a class="phone-round" href="tel:+213660447167" aria-label="Appeler">' + ic('call') + '</a>' +
            '<button type="button" class="burger" data-action="menu" aria-label="' + t.menu + '" aria-expanded="false" aria-controls="nav-mob">' + ic('menu') + '</button>' +
          '</div>' +
        '</div>' +
        '<nav class="nav-mob" id="nav-mob" hidden>' + map(nav, function (n) { return '<a href="' + n[1] + '" data-action="close">' + esc(n[0]) + '</a>'; }) + '</nav>' +
      '</header>' +

      '<main>' +
      '<section id="top" class="hero">' +
        '<div class="wrap hero-grid">' +
          '<div class="hero-txt">' +
            '<div class="brush hero-kicker">' + t.kicker + '</div>' +
            '<h1 class="head">' + t.heroTitle + '</h1>' +
            '<p class="hero-sub">' + t.heroSub + '</p>' +
            '<div class="hero-btns">' +
              '<a class="btn btn-dore" href="#offres">' + t.btnOffers + '</a>' +
              '<a class="btn btn-blanc" href="' + waGen + '" target="_blank" rel="noopener">' + waIco() + t.btnWa + '</a>' +
            '</div>' +
          '</div>' +
          '<div class="mosaic">' +
            '<div>' + img('assets/photos/hero-oued-souf.jpg', 'Oued Souf', true) + '</div>' +
            '<div>' + img('assets/photos/offre-istanbul.jpg', 'Istanbul', true) + '</div>' +
            '<div>' + img('assets/photos/offre-sousse.jpg', 'Sousse', true) + '</div>' +
          '</div>' +
        '</div>' +
      '</section>' +

      '<div class="metiers"><div class="metiers-grid">' + map(t.metiers, function (m) {
        return '<div class="metier"><div class="metier-ic">' + ic(m.icon) + '</div><div class="metier-t head">' + m.t + '</div><div class="metier-s">' + m.s + '</div></div>';
      }) + '</div></div>' +

      '<section id="offres" class="section bg-ciel"><div class="wrap stack">' +
        '<div class="sec-title"><div class="brush">' + t.offersBrush + '</div><h2 class="head">' + t.offersTitle + '</h2></div>' +
        '<div class="offres-grid">' + map(D.OFFRES, function (o) {
          var c = o[lang];
          var badge = c.prix
            ? '<div class="prix-badge"><small>' + esc(c.prixLabel) + '</small><strong class="head">' + esc(c.prix) + '</strong></div>'
            : '<div class="prix-badge sur-demande"><small>' + t.priceLabel + '</small><strong class="head">' + t.onRequest + '</strong></div>';
          return '<article class="offre">' +
            '<div class="offre-img">' + img(o.photo, c.titre) + badge + '</div>' +
            '<div class="offre-body">' +
              '<div class="offre-top"><div class="offre-pays">' + esc(c.pays) + '</div>' +
                '<div class="offre-row"><h3 class="head">' + esc(c.titre) + '</h3><div class="chip">' + esc(c.duree) + '</div></div>' +
                '<div class="offre-note">' + esc(c.note) + '</div></div>' +
              '<div class="inclus">' + map(o.icones, function (name, i) {
                return '<div><span class="rond">' + ic(name) + '</span><span>' + esc(c.inclus[i] || '') + '</span></div>';
              }) + '</div>' +
              '<div class="offre-detail">' + esc(c.detail) + '</div>' +
              '<a class="btn btn-marine" href="' + wa(t.msg + c.titre + ' – ' + c.duree) + '" target="_blank" rel="noopener">' + waIco() + t.book + '</a>' +
            '</div></article>';
        }) + '</div>' +
      '</div></section>' +

      '<section id="omra" class="section omra"><div class="wrap omra-grid">' +
        '<div class="col">' +
          '<div class="omra-img">' + img('assets/photos/omra-kaaba.jpg', omra.titre) + '<div class="omra-badge">' + esc(omra.periode) + '</div></div>' +
          '<div class="brush omra-brush">' + t.omraBrush + '</div>' +
          '<h2 class="head">' + esc(omra.titre) + '</h2>' +
          '<div class="omra-from"><span>' + t.from + '</span><span class="head">' + esc(omra.aPartirDe) + '</span></div>' +
          '<div class="omra-incl">' + map(t.omraIncl, function (x) { return '<div><span class="rond">' + ic(x.icon) + '</span>' + x.t + '</div>'; }) + '</div>' +
        '</div>' +
        '<div class="col">' +
          '<div class="omra-prog-head"><h3>' + t.omraProg + '</h3><div>' + t.omraUnit + '</div></div>' +
          map(D.OMRA.departs, function (dp) {
            var d = dp[lang];
            return '<div class="depart">' +
              '<div class="depart-bar"><div class="depart-date">' + ic('calendar_month') + esc(d.date) + '</div>' +
                '<div class="depart-vol">' + ic('flight') + esc(d.compagnie) + ' · ' + esc(d.trajet) + '</div></div>' +
              '<div class="table-scroll"><div class="table" role="table">' +
                '<div class="trow thead" role="row"><div role="columnheader">' + t.omraHotel + '</div>' + map(t.rooms, function (r) { return '<div role="columnheader">' + r + '</div>'; }) + '</div>' +
                map(dp.hotels, function (h) {
                  return '<div class="trow" role="row"><div class="hotel" role="cell"><b>' + esc(h[lang].nom) + '</b><span>' + esc(h[lang].distance) + '</span></div>' +
                    map(h.prix, function (p) { return '<div class="prix-cell" role="cell" dir="ltr">' + esc(p) + '</div>'; }) + '</div>';
                }) +
              '</div></div></div>';
          }) +
          '<div class="omra-medine">' + ic('mosque') + '<span>' + esc(omra.medine) + '</span></div>' +
          '<a class="btn btn-dore" href="' + wa(t.msg + omra.titre + ' (' + omra.periode + ')') + '" target="_blank" rel="noopener">' + waIco() + t.omraBtn + '</a>' +
        '</div>' +
      '</div></section>' +

      '<section id="services" class="section"><div class="wrap stack">' +
        '<div class="sec-title"><div class="brush">' + t.svcBrush + '</div><h2 class="head">' + t.svcTitle + '</h2></div>' +
        '<div class="svc-grid">' + map(t.services, function (s) {
          return '<article class="svc"><div class="svc-img">' + img('assets/photos/' + s.img + '.jpg', s.t) + '</div>' +
            '<div class="svc-body"><div class="svc-cat">' + s.cat + '</div><h3>' + s.t + '</h3><div class="svc-d">' + s.d + '</div>' +
            '<a class="btn btn-dore" href="' + wa(t.msg + s.t) + '" target="_blank" rel="noopener">' + s.btn + '</a></div></article>';
        }) + '</div>' +
        '<div class="mer"><div class="mer-head"><h3 class="head">' + t.seaTitle + '</h3><div>' + t.seaNote + '</div></div>' +
          '<div class="mer-grid">' + map(D.MER, function (c) {
            return '<div class="cie"><div class="cie-nom"><span class="rond">' + ic('directions_boat') + '</span>' + esc(c.compagnie) + '</div>' +
              map(c.lignes, function (l) { return '<div class="ligne"><span>' + esc(l[0]) + '</span>' + ic('sync_alt') + '<b>' + esc(l[1]) + '</b></div>'; }) + '</div>';
          }) + '</div>' +
        '</div>' +
      '</div></section>' +

      '<section class="section bg-ciel"><div class="wrap stack">' +
        '<div class="sec-title"><div class="brush">' + t.whyBrush + '</div><h2 class="head">' + t.whyTitle + '</h2></div>' +
        '<div class="why-grid">' + map(t.why, function (w) {
          return '<div class="why"><span class="rond">' + ic(w.icon) + '</span><b>' + w.t + '</b><span>' + w.d + '</span></div>';
        }) + '</div>' +
      '</div></section>' +

      (avis.length ?
      '<section id="avis" class="section"><div class="wrap stack">' +
        '<h2 class="head avis-title">' + t.reviewsTitle + '</h2>' +
        '<div class="avis-grid">' + map(avis, function (a) {
          return '<div class="avis"><div class="avis-who"><span class="rond">' + esc(a.nom.charAt(0)) + '</span><div><b>' + esc(a.nom) + '</b>' +
            (a.moisAgo ? '<small>' + t.ago(a.moisAgo) + '</small>' : '') + '</div></div>' +
            '<div class="etoiles" aria-label="5/5">★★★★★</div>' +
            (a.voyage ? '<div class="avis-trip">' + esc(a.voyage) + '</div>' : '') +
            '<div class="avis-txt" dir="auto">' + esc(a.texte) + '</div>' +
            (a.source ? '<div class="avis-src">' + esc(t.reviewSrc(a.source)) + '</div>' : '') + '</div>';
        }) + '</div>' +
      '</div></section>' : '') +

      '<section id="contact" class="section contact"><div class="wrap contact-grid">' +
        '<div class="col">' +
          '<h2 class="head">' + t.contactTitle + '</h2><p>' + t.contactSub + '</p>' +
          '<div class="call-grid">' +
            '<a class="btn btn-marine" href="tel:+213660447167">' + ic('call') + '<span dir="ltr">+213 660 447 167</span></a>' +
            '<a class="btn btn-blanc" href="tel:+213660884229">' + ic('call') + '<span dir="ltr">+213 660 88 42 29</span></a>' +
          '</div>' +
          '<div class="coords"><div>' + ic('location_on') + t.address + '</div>' +
            '<a href="mailto:massaralgiersagency@gmail.com">' + ic('mail') + 'massaralgiersagency@gmail.com</a></div>' +
          '<div class="carte"><iframe title="' + t.mapTitle + '" src="https://maps.google.com/maps?q=Cit%C3%A9%20Ali%20Ammari%2C%20Fouka%2C%20Tipaza%2C%20Alg%C3%A9rie&amp;z=15&amp;output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>' +
        '</div>' +
        '<form class="form" id="form">' +
          '<h3>' + t.formTitle + '</h3>' +
          '<label>' + t.fName + '<input name="nom" required autocomplete="name"></label>' +
          '<label>' + t.fPhone + '<input name="tel" type="tel" required autocomplete="tel" dir="ltr"></label>' +
          '<div class="form-row">' +
            '<label>' + t.fOffer + '<select name="offre">' + map(offerOptions, function (op) { return '<option>' + esc(op) + '</option>'; }) + '</select></label>' +
            '<label>' + t.fPeople + '<input name="pers" type="number" min="1" value="1" inputmode="numeric"></label>' +
          '</div>' +
          '<label>' + t.fMsg + '<textarea name="msg" rows="4"></textarea></label>' +
          '<button type="submit" class="btn btn-wa">' + waIco() + t.fSend + '</button>' +
          '<div class="form-hint">' + t.fHint + '</div>' +
        '</form>' +
      '</div></section>' +
      '</main>' +

      '<footer class="footer"><div class="wrap footer-grid">' +
        '<div class="col" style="gap:14px">' +
          '<div class="footer-logo">' + logo('#ffffff') +
            '<div class="brand-txt" style="gap:4px"><span class="brand-name">Massar Algiers</span><span class="brand-sub">Travel Agency</span></div>' +
            '<div class="footer-sep"></div><span class="footer-ar" dir="rtl">مسار</span></div>' +
          '<div class="brush slogan">' + t.slogan + '</div>' +
        '</div>' +
        '<div class="col footer-coords" style="gap:10px">' +
          '<div>' + ic('location_on') + '<span>' + t.address + '</span></div>' +
          '<div>' + ic('call') + '<span dir="ltr">+213 660 447 167 · +213 660 88 42 29</span></div>' +
          '<div>' + ic('mail') + '<span>massaralgiersagency@gmail.com</span></div>' +
        '</div>' +
        '<div class="col" style="gap:10px"><div class="follow">' + t.follow + '</div>' +
          '<div class="socials"><a href="' + esc(D.facebook) + '" target="_blank" rel="noopener">Facebook</a><a href="' + esc(D.instagram) + '" target="_blank" rel="noopener">Instagram</a></div></div>' +
      '</div></footer>' +

      '<a class="wa-float" href="' + waGen + '" target="_blank" rel="noopener">' + waIco() + t.waFloat + '</a>';

    document.getElementById('app').innerHTML = html;
  }

  // ─── Interactions ─────────────────────────────────────────────────────
  function setMenu(open) {
    var nav = document.getElementById('nav-mob');
    var btn = document.querySelector('[data-action="menu"]');
    if (!nav || !btn) return;
    nav.hidden = !open;
    btn.setAttribute('aria-expanded', String(open));
    btn.querySelector('.ic').textContent = open ? 'close' : 'menu';
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-action]');
    if (!el) return;
    var a = el.getAttribute('data-action');
    if (a === 'lang') {
      lang = lang === 'fr' ? 'ar' : 'fr';
      try { localStorage.setItem('massar-lang', lang); } catch (err) {}
      var url = new URL(location.href);
      if (lang === 'ar') url.searchParams.set('lang', 'ar'); else url.searchParams.delete('lang');
      history.replaceState(null, '', url);
      render();
    } else if (a === 'menu') {
      setMenu(document.getElementById('nav-mob').hidden);
    } else if (a === 'close') {
      setMenu(false);
    }
  });

  document.addEventListener('submit', function (e) {
    if (e.target.id !== 'form') return;
    e.preventDefault();
    var t = T[lang], el = e.target.elements;
    var lines = [t.msgForm, t.fName + ' : ' + el.nom.value, t.fPhone + ' : ' + el.tel.value, t.fOffer + ' : ' + el.offre.value, t.fPeople + ' : ' + el.pers.value];
    if (el.msg.value.trim()) lines.push(t.fMsg + ' : ' + el.msg.value.trim());
    window.open(wa(lines.join('\n')), '_blank', 'noopener');
  });

  render();
})();

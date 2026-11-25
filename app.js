/* Massar Algiers : affichage du site (v2).
   Le contenu modifiable est dans contenu.js. Ce fichier contient les textes
   d'interface (FR / AR) et la mise en page. */

(function () {
  var D = window.MASSAR;

  // ─── Textes d'interface ───────────────────────────────────────────────
  var T = {
    fr: {
      langBtn: 'عربي', tel: '0660 44 71 67', call: 'Appeler',
      nav: [['Offres', '#offres'], ['Omra', '#omra'], ['Études', 'etudes.html'], ['Billetterie', '#services'], ['Réserver', '#reserver'], ['Contact', '#contact']],
      pill: 'Voyages · Billetterie · Services', h1a: 'Votre prochaine escapade,', h1b: 'organisée de A à Z',
      heroLead: 'Agence de voyage à Fouka, Tipaza', heroSub: 'Voyages organisés, Omra, billets d’avion et de bateau, visas. Réservation directe par WhatsApp ou téléphone.',
      btnOffers: 'Voir nos offres',
      offersPill: 'Nos offres du moment', offersH1: 'Des voyages organisés pour', offersH2: 'des souvenirs inoubliables en famille.',
      cats: [['all', 'Toutes'], ['turquie', 'Turquie'], ['asie', 'Asie'], ['algerie', 'Algérie'], ['tunisie', 'Tunisie'], ['omra', 'Omra']],
      prev: 'Précédent', next: 'Suivant',
      omraH1: 'Votre Omra en toute sérénité,', omraH2: 'hôtels proches du Haram et accompagnement complet.',
      from: 'À partir de', omraUnit: 'Prix en DA par personne', rooms: ['Quintuple', 'Quadruple', 'Triple', 'Double'], omraHotel: 'Hôtel à La Mecque',
      omraIncl: [{ t: 'Vols directs depuis l’Algérie', icon: 'flight' }, { t: 'Hôtels proches du Haram', icon: 'hotel' }, { t: 'Meilleurs guides', icon: 'person' }, { t: 'Confort et sécurité', icon: 'verified_user' }],
      omraBtn: 'Réserver ma Omra',
      svcH1: 'Billetterie et services,', svcH2: 'on s’occupe de vos démarches.', svcSub: 'Traversées Algérie ⇄ Europe dans les deux sens, visas et salons professionnels : nous préparons votre dossier et vous accompagnons jusqu’au départ.',
      seaCat: 'Billets maritimes', seaTitle: 'Traversées Algérie ⇄ Europe', seaBoth: 'Dans les deux sens : de l’Algérie vers l’Espagne et la France, et de l’Espagne et la France vers l’Algérie. Aller simple ou aller-retour.', seaPriceNote: 'selon destination et période', seaBtn: 'Réserver ma traversée', svcBtn: 'Demander un accompagnement',
      howTitle: 'Comment réserver', why: ['Accompagnement de A à Z', 'Organisation complète', 'Prix compétitifs', 'Suivi pendant le voyage'],
      howLead: '4 étapes simples', howSub: 'Pas de paiement en ligne : tout se fait avec notre équipe, par WhatsApp ou téléphone.',
      steps: [['Choisissez votre offre', 'Parcourez les offres du moment ou demandez un programme sur mesure.'], ['Écrivez-nous sur WhatsApp', 'Le bouton « Réserver » ouvre WhatsApp avec votre message déjà prêt.'], ['Confirmez vos places', 'Nous vérifions les disponibilités et vous envoyons le détail du programme.'], ['Partez l’esprit tranquille', 'Notre équipe reste joignable avant et pendant tout le voyage.']],
      revH1: 'Avis clients,', revH2: 'ils ont voyagé avec nous.', rating: '5,0', ago: function (m) { return 'il y a ' + m + ' mois'; },
      contactH1: 'Prêt à partir ?', contactH2: 'Écrivez-nous, on vous répond.', address: 'Cité Ali Ammari, Fouka, Tipaza, Algérie', mapTitle: 'Carte : Massar Algiers à Fouka',
      formTitle: 'Demande de réservation', fName: 'Nom complet', fPhone: 'Téléphone', fOffer: 'Offre souhaitée', fPeople: 'Personnes', fMsg: 'Message', fSend: 'Envoyer sur WhatsApp', fHint: 'Le bouton ouvre WhatsApp avec votre demande déjà rédigée.', other: 'Autre demande',
      slogan: 'Votre réussite, notre mission', msgForm: 'Bonjour Massar Algiers, voici ma demande :',
      msg: 'Bonjour Massar Algiers, je souhaite réserver : ', msgGen: 'Bonjour Massar Algiers, je souhaite des informations sur vos offres.'
    },
    ar: {
      langBtn: 'FR', tel: '0660 44 71 67', call: 'اتصل',
      nav: [['العروض', '#offres'], ['العمرة', '#omra'], ['الدراسة', 'etudes.html?lang=ar'], ['التذاكر', '#services'], ['الحجز', '#reserver'], ['اتصل بنا', '#contact']],
      pill: 'رحلات · تذاكر · خدمات', h1a: 'وجهتك القادمة،', h1b: 'منظمة من الألف إلى الياء',
      heroLead: 'وكالة سفر في فوكة، تيبازة', heroSub: 'رحلات منظمة، عمرة، تذاكر طيران وبحر، تأشيرات. الحجز مباشرة عبر واتساب أو الهاتف.',
      btnOffers: 'اكتشف عروضنا',
      offersPill: 'عروضنا الحالية', offersH1: 'رحلات منظمة', offersH2: 'لذكريات لا تُنسى مع العائلة.',
      cats: [['all', 'الكل'], ['turquie', 'تركيا'], ['asie', 'آسيا'], ['algerie', 'الجزائر'], ['tunisie', 'تونس'], ['omra', 'عمرة']],
      prev: 'السابق', next: 'التالي',
      omraH1: 'عمرتكم براحة بال،', omraH2: 'فنادق قريبة من الحرم ومرافقة كاملة.',
      from: 'ابتداءً من', omraUnit: 'الأسعار بالدينار للشخص', rooms: ['خماسية', 'رباعية', 'ثلاثية', 'ثنائية'], omraHotel: 'الفندق في مكة',
      omraIncl: [{ t: 'رحلات مباشرة من الجزائر', icon: 'flight' }, { t: 'أقرب الفنادق للحرم', icon: 'hotel' }, { t: 'أفضل المرشدين', icon: 'person' }, { t: 'راحة وأمان طوال الرحلة', icon: 'verified_user' }],
      omraBtn: 'احجز عمرتك',
      svcH1: 'التذاكر والخدمات،', svcH2: 'نتكفل بإجراءاتكم.', svcSub: 'رحلات بحرية الجزائر ⇄ أوروبا في الاتجاهين، تأشيرات ومعارض مهنية: نحضر ملفكم ونرافقكم حتى السفر.',
      seaCat: 'تذاكر بحرية', seaTitle: 'رحلات بحرية الجزائر ⇄ أوروبا', seaBoth: 'في الاتجاهين: من الجزائر نحو إسبانيا وفرنسا، ومن إسبانيا وفرنسا نحو الجزائر. ذهاب فقط أو ذهاب وإياب.', seaPriceNote: 'حسب الوجهة والفترة', seaBtn: 'احجز رحلتك البحرية', svcBtn: 'اطلب مرافقة',
      howTitle: 'كيف تحجز', why: ['مرافقة من الألف إلى الياء', 'تنظيم شامل', 'أسعار تنافسية', 'متابعة طوال الرحلة'],
      howLead: '4 خطوات بسيطة', howSub: 'لا دفع عبر الإنترنت: كل شيء يتم مع فريقنا عبر واتساب أو الهاتف.',
      steps: [['اختر عرضك', 'تصفح عروض الشهر أو اطلب برنامجاً حسب رغبتك.'], ['راسلنا عبر واتساب', 'زر «احجز» يفتح واتساب مع رسالتك جاهزة.'], ['أكد أماكنك', 'نتحقق من الأماكن المتوفرة ونرسل لك تفاصيل البرنامج.'], ['سافر براحة بال', 'فريقنا متاح قبل وطوال الرحلة.']],
      revH1: 'آراء العملاء،', revH2: 'سافروا معنا.', rating: '5,0', ago: function (m) { return 'منذ ' + m + ' أشهر'; },
      contactH1: 'مستعد للسفر؟', contactH2: 'راسلونا، نرد عليكم.', address: 'حي علي عماري، فوكة، تيبازة، الجزائر', mapTitle: 'خريطة: مسار الجزائر في فوكة',
      formTitle: 'طلب حجز', fName: 'الاسم الكامل', fPhone: 'رقم الهاتف', fOffer: 'العرض المطلوب', fPeople: 'عدد الأشخاص', fMsg: 'رسالتك', fSend: 'أرسل عبر واتساب', fHint: 'يفتح الزر واتساب مع طلبك جاهزاً.', other: 'طلب آخر',
      slogan: 'نجاحكم، مهمتنا', msgForm: 'السلام عليكم مسار الجزائر، هذا طلبي:',
      msg: 'السلام عليكم، أرغب في حجز: ', msgGen: 'السلام عليكم، أرغب في معلومات حول عروضكم.'
    }
  };

  // ─── Utilitaires ──────────────────────────────────────────────────────
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  // Espace insécable entre groupes de chiffres (sinon l'ordre s'inverse en arabe)
  function num(s) { return esc(s).replace(/(\d) (?=\d)/g, '$1 '); }
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
  function img(src, alt, cls, eager) {
    return '<img class="cover' + (cls ? ' ' + cls : '') + '" src="' + esc(src) + '" alt="' + esc(alt) + '"' + (eager ? ' fetchpriority="high"' : ' loading="lazy"') + ' decoding="async">';
  }
  function map(list, fn) { return list.map(fn).join(''); }
  function pill(txt, cls) { return '<div class="pill' + (cls ? ' ' + cls : '') + '"><span class="rond">' + ic('add') + '</span>' + txt + '</div>'; }
  function h2(a, b, cls) { return '<h2 class="h2' + (cls ? ' ' + cls : '') + '">' + a + ' <span class="ton2">' + b + '</span></h2>'; }

  // ─── État ─────────────────────────────────────────────────────────────
  function initialLang() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q === 'ar' || q === 'fr') return q;
    try { var s = localStorage.getItem('massar-lang'); if (s === 'ar' || s === 'fr') return s; } catch (e) {}
    return 'fr';
  }
  var lang = initialLang();
  var cat = 'all';

  // ─── Offres (re-rendues au changement de filtre) ──────────────────────
  function offresHtml() {
    var t = T[lang], up = lang === 'ar' ? 'north_west' : 'north_east';
    return map(D.OFFRES.filter(function (o) { return cat === 'all' || o.cat === cat; }), function (o) {
      var c = o[lang];
      return '<article class="offre">' +
        '<div class="offre-img">' + img(o.image, c.titre, 'top') + '<div class="offre-lieu">' + esc(c.lieu) + '</div></div>' +
        '<div class="offre-row"><div class="offre-txt"><h3>' + esc(c.titre) + '</h3><div class="offre-quand">' + esc(c.quand) + '</div>' +
          '<div class="prix"><small>' + esc(c.prixLabel) + '</small><strong>' + num(c.prix) + '</strong></div></div>' +
          '<a class="go rond" href="' + wa(t.msg + c.titre + ' (' + c.quand + ')') + '" target="_blank" rel="noopener" aria-label="WhatsApp : ' + esc(c.titre) + '">' + ic(up) + '</a></div>' +
        '<div class="chips">' + map(c.inclus, function (i) { return '<span>' + esc(i) + '</span>'; }) + '</div>' +
      '</article>';
    });
  }
  function filtresHtml() {
    return map(T[lang].cats, function (c) {
      return '<button type="button" data-cat="' + c[0] + '" aria-pressed="' + (c[0] === cat) + '">' + c[1] + '</button>';
    });
  }

  // ─── Rendu ────────────────────────────────────────────────────────────
  function render() {
    var t = T[lang];
    var rtl = lang === 'ar';
    var arrow = rtl ? 'arrow_back' : 'arrow_forward';
    var waGen = wa(t.msgGen);
    var O = D.OMRA, M = D.MER;
    var avis = D.AVIS || [];
    var offerOptions = D.OFFRES.map(function (o) { return o[lang].titre; })
      .concat([t.seaTitle], D.SERVICES.map(function (s) { return s[lang].titre; }), [t.other]);

    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';

    var html =
      '<div class="page">' +

      // Hero
      '<section id="top" class="hero">' +
        '<div class="hero-photo">' + img(D.hero, '', '', true) + '</div><div class="hero-voile"></div>' +
        '<header class="hero-bar">' +
          '<a href="#top" class="brand" aria-label="Massar Algiers">' + logo('#ffffff') +
            '<div class="brand-txt"><div class="brand-name">Massar Algiers</div><div class="brand-sub">Travel Agency</div></div></a>' +
          '<div class="nav-wrap"><nav class="nav verre">' + map(t.nav, function (n) { return '<a href="' + n[1] + '">' + esc(n[0]) + '</a>'; }) + '</nav></div>' +
          '<button type="button" class="lang-btn verre" data-action="lang">' + t.langBtn + '</button>' +
          '<a class="tel-pill verre" href="' + waGen + '" target="_blank" rel="noopener" aria-label="' + t.call + '"><span dir="ltr">' + t.tel + '</span><span class="rond">' + ic('call') + '</span></a>' +
        '</header>' +
        '<div class="hero-centre">' +
          '<div class="hero-pill verre">' + t.pill + '</div>' +
          '<h1>' + t.h1a + ' <b>' + t.h1b + '</b></h1>' +
        '</div>' +
        '<div class="hero-bas">' +
          '<div class="hero-info">' +
            '<div class="hero-lead">' + t.heroLead + '</div>' +
            '<p class="hero-sub">' + t.heroSub + '</p>' +
            '<div class="hero-btns"><a class="btn btn-blanc" href="#offres">' + t.btnOffers + '</a>' +
              '<a class="btn btn-wa" href="' + waGen + '" target="_blank" rel="noopener">' + waIco() + 'WhatsApp</a></div>' +
          '</div>' +
          '<div class="vignettes">' + map(D.OFFRES.slice(0, 4), function (o) {
            return '<a href="#offres" aria-label="' + esc(o[lang].titre) + '">' + img(o.image, o[lang].titre, 'top') + '</a>';
          }) + '</div>' +
        '</div>' +
      '</section>' +

      // Offres
      '<section id="offres" class="card offres">' +
        pill(t.offersPill) +
        h2(t.offersH1, t.offersH2, 'center') +
        '<div class="filtres" role="group">' + filtresHtml() + '</div>' +
        '<div class="track" id="track">' + offresHtml() + '</div>' +
        '<div class="nav-track">' +
          '<button type="button" class="rond" data-action="prev" aria-label="' + t.prev + '">' + ic(rtl ? 'arrow_forward' : 'arrow_back') + '</button>' +
          '<div class="progress"><div id="progress"></div></div>' +
          '<button type="button" class="rond" data-action="next" aria-label="' + t.next + '">' + ic(arrow) + '</button>' +
        '</div>' +
      '</section>' +

      // Omra
      '<section id="omra" class="card card-dark omra">' +
        pill(O[lang].periode, 'blanche') +
        h2(t.omraH1, t.omraH2, 'center') +
        '<div class="omra-grid">' +
          '<div class="omra-affiche">' + img(O.image, 'Omra', 'top') + '</div>' +
          '<div class="omra-col">' +
            '<div class="omra-prix"><div><small>' + t.from + '</small><strong>' + num(O[lang].aPartirDe) + '</strong></div><div class="omra-unit">' + t.omraUnit + '</div></div>' +
            map(O.departs, function (dp) {
              var d = dp[lang];
              return '<div class="depart">' +
                '<div class="depart-head"><div class="depart-date"><span class="rond">' + ic('calendar_month') + '</span>' + esc(d.date) + '</div>' +
                  '<div class="depart-vol">' + ic('flight') + esc(d.compagnie) + ' · ' + esc(d.trajet) + '</div></div>' +
                '<div class="table-scroll"><div class="table" role="table">' +
                  '<div class="trow thead" role="row"><div role="columnheader">' + t.omraHotel + '</div>' + map(t.rooms, function (r) { return '<div role="columnheader">' + r + '</div>'; }) + '</div>' +
                  map(dp.hotels, function (h) {
                    return '<div class="trow" role="row"><div class="hotel" role="cell"><b>' + esc(h[lang].nom) + '</b><span>' + esc(h[lang].distance) + '</span></div>' +
                      map(h.prix, function (p) { return '<div class="cell-prix" role="cell" dir="ltr">' + num(p) + '</div>'; }) + '</div>';
                  }) +
                '</div></div></div>';
            }) +
            '<div class="avantages">' + map(t.omraIncl, function (x) { return '<div><span class="rond">' + ic(x.icon) + '</span>' + x.t + '</div>'; }) + '</div>' +
            '<div class="medine">' + esc(O[lang].medine) + '</div>' +
            '<a class="btn-split btn-blanc" href="' + wa(t.msg + 'Omra (' + O[lang].periode + ')') + '" target="_blank" rel="noopener">' + t.omraBtn + '<span class="rond">' + waIco() + '</span></a>' +
          '</div>' +
        '</div>' +
      '</section>' +

      // Billetterie & services
      '<section id="services" class="card services">' +
        '<div class="svc-head">' + h2(t.svcH1, t.svcH2) + '<p>' + t.svcSub + '</p></div>' +
        '<div class="svc-grid">' +
          '<div class="mer">' +
            '<div class="mer-img">' + img(M.image, t.seaTitle) + '</div>' +
            '<div class="mer-col">' +
              '<div class="cat">' + t.seaCat + '</div>' +
              '<h3>' + t.seaTitle + '</h3>' +
              '<div class="mer-txt">' + t.seaBoth + '</div>' +
              '<div class="prix"><small>' + t.from + '</small><strong>' + num(M[lang].aPartirDe) + '</strong><small>' + t.seaPriceNote + '</small></div>' +
              map(M.compagnies, function (c) {
                return '<div class="cie"><b>' + esc(c.nom) + '</b>' + map(c.lignes, function (l) {
                  return '<div class="ligne"><span>' + esc(l[0]) + '</span>' + ic('sync_alt') + '<strong>' + esc(l[1]) + '</strong></div>';
                }) + '</div>';
              }) +
              '<a class="btn-split" href="' + wa(t.msg + t.seaTitle) + '" target="_blank" rel="noopener">' + t.seaBtn + '<span class="rond">' + waIco() + '</span></a>' +
            '</div>' +
          '</div>' +
          '<div class="svc-list">' + map(D.SERVICES, function (s) {
            var c = s[lang];
            return '<a class="svc" href="' + wa(t.msg + c.titre) + '" target="_blank" rel="noopener">' +
              '<div class="svc-img">' + img(s.image, c.titre) + '</div>' +
              '<div class="svc-txt"><b>' + esc(c.titre) + '</b><span>' + esc(c.desc) + '</span><em>' + t.svcBtn + ic(arrow) + '</em></div></a>';
          }) + '</div>' +
        '</div>' +
      '</section>' +

      // Comment réserver
      '<section id="reserver" class="card reserver">' +
        '<h2>' + t.howTitle + '</h2>' +
        '<div class="mots">' + map(t.why, function (w) { return '<span>' + w + '<i aria-hidden="true">+</i></span>'; }) + '</div>' +
        '<div class="etapes">' +
          '<div class="intro"><b>' + t.howLead + '</b><span>' + t.howSub + '</span></div>' +
          map(t.steps, function (s, i) { return '<div><div class="n">0' + (i + 1) + '.</div><div class="t">' + s[0] + '</div><div class="d">' + s[1] + '</div></div>'; }) +
        '</div>' +
      '</section>' +

      // Avis (masqué si vide)
      (avis.length ?
      '<section id="avis" class="card avis">' +
        h2(t.revH1, t.revH2) +
        '<div class="avis-grid">' + map(avis, function (a) {
          return '<div class="avis-card"><div class="avis-who"><span class="rond">' + esc(a.nom.charAt(0)) + '</span><div><b>' + esc(a.nom) + '</b>' +
            (a.moisAgo ? '<small>' + t.ago(a.moisAgo) + '</small>' : '') + '</div></div>' +
            '<div class="avis-tags"><span>' + t.rating + ' ★</span>' + (a.voyage ? '<span>' + esc(a.voyage) + '</span>' : '') + '</div>' +
            '<div class="avis-txt" dir="auto">' + esc(a.texte) + '</div></div>';
        }) + '</div>' +
      '</section>' : '') +

      // Contact
      '<section id="contact" class="card card-dark contact">' +
        '<div class="contact-col">' +
          h2(t.contactH1, t.contactH2) +
          '<div class="appels">' +
            '<a href="tel:+213660447167">' + ic('call') + '<span dir="ltr">+213 660 447 167</span></a>' +
            '<a href="tel:+213660884229">' + ic('call') + '<span dir="ltr">+213 660 88 42 29</span></a>' +
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
          '<label>' + t.fMsg + '<textarea name="msg" rows="3"></textarea></label>' +
          '<button type="submit">' + waIco() + t.fSend + '</button>' +
          '<div class="form-hint">' + t.fHint + '</div>' +
        '</form>' +
      '</section>' +

      // Footer
      '<footer class="footer">' +
        '<div class="footer-logo">' + logo('#0A3D62') +
          '<div class="brand-txt"><span class="brand-name">Massar Algiers</span><span class="brand-sub">Travel Agency</span></div>' +
          '<div class="footer-sep"></div><span class="footer-ar" dir="rtl">مسار</span></div>' +
        '<div class="slogan">' + t.slogan + '</div>' +
        '<div class="socials"><a href="' + esc(D.facebook) + '" target="_blank" rel="noopener">Facebook</a><a href="' + esc(D.instagram) + '" target="_blank" rel="noopener">Instagram</a></div>' +
      '</footer>' +

      '<a class="wa-float" href="' + waGen + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + waIco() + '</a>' +
      '</div>';

    document.getElementById('app').innerHTML = html;
    bindTrack();
  }

  // ─── Carrousel des offres ─────────────────────────────────────────────
  function updateProgress() {
    var tr = document.getElementById('track'), bar = document.getElementById('progress');
    if (!tr || !bar) return;
    var max = tr.scrollWidth - tr.clientWidth;
    var w = max > 0 ? Math.max(15, 100 * tr.clientWidth / tr.scrollWidth) : 100;
    var ratio = max > 0 ? Math.min(1, Math.abs(tr.scrollLeft) / max) : 0;
    bar.style.width = w + '%';
    bar.style.marginInlineStart = (ratio * (100 - w)) + '%';
  }
  function bindTrack() {
    var tr = document.getElementById('track');
    if (tr) tr.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }
  window.addEventListener('resize', updateProgress);
  function scrollTrack(d) {
    var tr = document.getElementById('track');
    if (tr) tr.scrollBy({ left: d * 314 * (lang === 'ar' ? -1 : 1), behavior: 'smooth' });
  }

  // ─── Interactions ─────────────────────────────────────────────────────
  document.addEventListener('click', function (e) {
    var f = e.target.closest('[data-cat]');
    if (f) {
      cat = f.getAttribute('data-cat');
      document.querySelector('.filtres').innerHTML = filtresHtml();
      var tr = document.getElementById('track');
      tr.innerHTML = offresHtml();
      tr.scrollLeft = 0;
      updateProgress();
      return;
    }
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
    } else if (a === 'prev') {
      scrollTrack(-1);
    } else if (a === 'next') {
      scrollTrack(1);
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

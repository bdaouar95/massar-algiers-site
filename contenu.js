/* =====================================================================
   CONTENU DU SITE MASSAR ALGIERS (v2)
   ---------------------------------------------------------------------
   C'est le SEUL fichier à modifier pour mettre à jour le site.
   - Ajouter une offre : copier un bloc { ... } dans OFFRES et l'adapter
   - Retirer une offre : supprimer son bloc
   - Changer un prix : modifier le texte entre guillemets
   Chaque texte existe en français (fr) et en arabe (ar).
   Attention : garder les guillemets ' ' et les virgules en fin de ligne.
   Les 4 premières offres apparaissent aussi en vignettes dans le haut du site.
   ===================================================================== */

window.MASSAR = {

  // Numéro WhatsApp principal (format international, sans + ni espaces)
  whatsapp: '213660447167',

  // Grande photo du haut de la page
  hero: 'assets/offres/hero-desert-hd.jpg',

  // ─── Offres du moment ────────────────────────────────────────────────
  // cat : turquie | asie | algerie | tunisie | omra  (sert aux filtres)
  // image : affiche de l'offre (format portrait ou carré, le haut reste visible)
  OFFRES: [
    {
      id: 'istanbul', cat: 'turquie', image: 'assets/offres/istanbul-octobre.jpg',
      fr: { titre: 'Istanbul', lieu: 'Turquie', quand: 'Prochain départ : 25 octobre', prixLabel: 'À partir de', prix: '107 000 DA', inclus: ['Turkish Airlines', 'Graziella Gold, petit-déjeuner', 'Îles des Princesses & Sapanca avec déjeuner', 'Croisière Bosphore', 'Assistance sur place'] },
      ar: { titre: 'إسطنبول', lieu: 'تركيا', quand: 'الرحلة القادمة: 25 أكتوبر', prixLabel: 'ابتداءً من', prix: '107 000 دج', inclus: ['الخطوط التركية', 'فندق Graziella Gold مع فطور', 'جزر الأميرات وسبانجا مع غداء', 'رحلة بحرية في البوسفور', 'مرافقة في عين المكان'] }
    },
    {
      id: 'sousse', cat: 'tunisie', image: 'assets/offres/sousse.jpg',
      fr: { titre: 'Sousse', lieu: 'Tunisie', quand: '5 nuits', prixLabel: 'À partir de', prix: '49 000 DA', inclus: ['Bus au départ de 8 villes', '3 hôtels au choix', 'Demi-pension', '3 excursions offertes'] },
      ar: { titre: 'سوسة', lieu: 'تونس', quand: '5 ليالٍ', prixLabel: 'ابتداءً من', prix: '49 000 دج', inclus: ['حافلة من 8 مدن', '3 فنادق للاختيار', 'نصف إقامة', '3 رحلات مجانية'] }
    },
    {
      id: 'oued-souf', cat: 'algerie', image: 'assets/offres/oued-souf.jpg',
      fr: { titre: 'Oued Souf', lieu: 'Algérie · Sahara', quand: '4 jours / 3 nuits', prixLabel: 'Prix', prix: '69 000 DA', inclus: ['Safari 4x4', 'Chameau', 'Quad', 'Guemar', 'Soirée méchoui'] },
      ar: { titre: 'وادي سوف', lieu: 'الجزائر · الصحراء', quand: '4 أيام / 3 ليالٍ', prixLabel: 'السعر', prix: '69 000 دج', inclus: ['سفاري 4x4', 'ركوب الجمال', 'دراجة رباعية', 'قمار', 'سهرة مشوي'] }
    },
    {
      id: 'kl-bali', cat: 'asie', image: 'assets/offres/indonesie-malaisie.jpg',
      fr: { titre: 'Kuala Lumpur – Bali', lieu: 'Indonésie / Malaisie', quand: '11 jours / 10 nuits', prixLabel: 'Tarif', prix: 'Sur demande', inclus: ['Vol direct Alger – Kuala Lumpur', 'Hôtels 5★ avec petit-déjeuner', 'Vols internes et transferts', '2 excursions privées, guide anglophone'] },
      ar: { titre: 'كوالالمبور – بالي', lieu: 'إندونيسيا / ماليزيا', quand: '11 يوماً / 10 ليالٍ', prixLabel: 'السعر', prix: 'عند الطلب', inclus: ['رحلة مباشرة الجزائر – كوالالمبور', 'فنادق 5 نجوم مع فطور', 'رحلات داخلية وتنقلات', 'رحلتان خاصتان ومرشد بالإنجليزية'] }
    },
    {
      id: 'istanbul-antalya', cat: 'turquie', image: 'assets/offres/istanbul-antalya.jpg',
      fr: { titre: 'Istanbul + Antalya', lieu: 'Turquie', quand: '10 jours / 9 nuits', prixLabel: 'À partir de', prix: '297 000 DA', inclus: ['Turkish Airlines', 'Venera Old City 4★, petit-déjeuner', 'Venera Antalya 4★, all inclusive', 'Assistance 24/7'] },
      ar: { titre: 'إسطنبول + أنطاليا', lieu: 'تركيا', quand: '10 أيام / 9 ليالٍ', prixLabel: 'ابتداءً من', prix: '297 000 دج', inclus: ['الخطوط التركية', 'Venera Old City 4★ مع فطور', 'Venera أنطاليا 4★ شامل كلياً', 'مساعدة 24/7'] }
    },
    {
      id: 'omra', cat: 'omra', image: 'assets/offres/omra-169000.jpg',
      fr: { titre: 'Omra', lieu: 'Arabie saoudite', quand: 'Octobre · Novembre · Décembre', prixLabel: 'À partir de', prix: '169 000 DA', inclus: ['Vols directs depuis l’Algérie', 'Hôtels proches du Haram', 'Meilleurs guides', 'Confort et sécurité'] },
      ar: { titre: 'عمرة', lieu: 'السعودية', quand: 'أكتوبر · نوفمبر · ديسمبر', prixLabel: 'ابتداءً من', prix: '169 000 دج', inclus: ['رحلات مباشرة من الجزائر', 'أقرب الفنادق للحرم', 'أفضل المرشدين', 'راحة وأمان طوال الرحلة'] }
    }
  ],

  // ─── Omra ────────────────────────────────────────────────────────────
  OMRA: {
    image: 'assets/offres/omra-169000.jpg',
    fr: { aPartirDe: '169 000 DA', periode: 'Omra 2026',
          medine: '3 nuits à Médine pour tous les départs : hôtel Hayat Al Huda (≈ 300 m, zone centrale) ou Afaq Al Fiddi (≈ 800 m, 10 min à pied).' },
    ar: { aPartirDe: '169 000 دج', periode: 'عمرة 2026',
          medine: 'كل الرحلات 03 ليالٍ في المدينة: فندق حياة الهدى (حوالي 300 م، المنطقة المركزية) أو فندق آفاق الفضي (حوالي 800 م، 10 دقائق مشياً).' },
    // prix par personne en DA, dans l'ordre : [quintuple, quadruple, triple, double]
    departs: [
      {
        fr: { date: '26 octobre 2026', compagnie: 'Air Algérie', trajet: 'Djeddah – Médine' },
        ar: { date: '26 أكتوبر 2026', compagnie: 'الخطوط الجزائرية', trajet: 'جدة – المدينة' },
        hotels: [
          { fr: { nom: 'Abraj Al Kiswa', distance: '≈ 950 m du Haram · navette' }, ar: { nom: 'أبراج الكسوة', distance: '≈ 950 م من الحرم · نقل متوفر' }, prix: ['169 000', '179 000', '189 000', '209 000'] },
          { fr: { nom: 'Al Risala', distance: '≈ 700 m · 10 min à pied' }, ar: { nom: 'فندق الرسالة', distance: '≈ 700 م · 10 دقائق مشياً' }, prix: ['–', '209 000', '239 000', '275 000'] }
        ]
      },
      {
        fr: { date: '04 novembre 2026', compagnie: 'Flynas', trajet: 'Médine – Djeddah' },
        ar: { date: '04 نوفمبر 2026', compagnie: 'طيران ناس', trajet: 'المدينة – جدة' },
        hotels: [
          { fr: { nom: 'Abraj Al Kiswa', distance: '≈ 950 m du Haram · navette' }, ar: { nom: 'أبراج الكسوة', distance: '≈ 950 م من الحرم · نقل متوفر' }, prix: ['169 000', '189 000', '199 000', '219 000'] },
          { fr: { nom: 'Saraya Al Misk', distance: '≈ 580 m · 8 min à pied' }, ar: { nom: 'سرايا المسك', distance: '≈ 580 م · 8 دقائق مشياً' }, prix: ['209 000', '225 000', '249 000', '295 000'] }
        ]
      }
    ]
  },

  // ─── Billets maritimes (dans les deux sens) ──────────────────────────
  MER: {
    image: 'assets/offres/maritime-ete.jpg',
    fr: { aPartirDe: '22 900 DA' },
    ar: { aPartirDe: '22 900 دج' },
    compagnies: [
      { nom: 'Baleària', lignes: [['Mostaganem / Alger / Oran', 'Valence'], ['Alger / Oran', 'Barcelone']] },
      { nom: 'Nouris El Bahr', lignes: [['Alger / Oran', 'Alicante'], ['Alger', 'Marseille']] },
      { nom: 'GNV', lignes: [['Alger / Béjaïa', 'Sète']] }
    ]
  },

  // ─── Services (visas, salons) ────────────────────────────────────────
  SERVICES: [
    { image: 'assets/photos/service-visa-espagne.jpg',
      fr: { titre: 'Visa d’études Espagne', desc: 'Choix d’université, dossier complet, suivi jusqu’à l’obtention.' },
      ar: { titre: 'تأشيرة الدراسة في إسبانيا', desc: 'اختيار الجامعة، ملف كامل، متابعة حتى الحصول على التأشيرة.' } },
    { image: 'assets/offres/visa-hongrie.jpg',
      fr: { titre: 'Visa d’études Hongrie', desc: 'Choix d’université et pré-inscription, dossier visa complet, suivi jusqu’à l’obtention.' },
      ar: { titre: 'تأشيرة الدراسة في المجر', desc: 'اختيار الجامعة والتسجيل المسبق، ملف تأشيرة كامل، متابعة حتى الحصول عليها.' } },
    { image: 'assets/photos/service-visa-chine.jpg',
      fr: { titre: 'Visa Chine', desc: 'Documents pour une première demande ou un renouvellement.' },
      ar: { titre: 'تأشيرة الصين', desc: 'وثائق الطلب الأول أو التجديد.' } },
    { image: 'assets/photos/service-salons-italie.jpg',
      fr: { titre: 'Salons en Italie', desc: 'Architectes, designers, entreprises : invitations officielles, lettres de soutien visa.' },
      ar: { titre: 'معارض إيطاليا', desc: 'للمهندسين والمصممين والشركات: دعوات رسمية ورسائل دعم التأشيرة.' } }
  ],

  // ─── Avis clients ────────────────────────────────────────────────────
  // Tant que la liste est vide, la section « Avis clients » est masquée.
  // Modèle :
  // { nom: 'Prénom Nom', moisAgo: 2, voyage: 'Istanbul 2026', texte: 'Texte de l’avis…' },
  // Avis de vrais clients de Massar Algiers (Google, Facebook, WhatsApp), avec leur accord.
  // La section « Avis clients » reste cachée tant que cette liste est vide.
  // Format : { nom: 'Prénom N.', source: 'Facebook', voyage: 'Omra mars 2026', texte: '...' } (avis réels uniquement, textes non modifiés sur le fond)
  AVIS: [
    { nom: 'Djamel A.', source: 'Facebook', voyage: 'Traversée France ⇄ Algérie', texte: 'Vraiment c’est les meilleurs pour les réservations des traversées France Algérie, surtout on peut payer en dinars. Rien à dire, surtout la dame de l’agence, elle est très professionnelle.' },
    { nom: 'Hichem D.', source: 'Facebook', texte: 'Excellent service du début à la fin. L’agence a été très professionnelle.' },
    { nom: 'Pep W.', source: 'Facebook', texte: 'الصراحة والله على ما نقول شهيد، اتعاملت معاهم وكانو مهنيين والمستوى، خاصة من ناحية الثقة: نخلص عن طريق البريد والحجز يلحقني للهاتف. شكرا وبالتوفيق' },
    { nom: 'Do F.', source: 'Facebook', texte: 'Un grand merci à la dame de l’agence de voyage, et aussi à l’équipe de l’agence, dont j’ai beaucoup apprécié la présence rassurante, l’aide et l’écoute ! Merci.' },
    { nom: 'Nacer L.', source: 'Facebook', texte: 'صراحة يعطوكم معلومات واسعة والإجابة السريعة وفي وقتها، شكرا لكم' },
    { nom: 'Ribouh R.', source: 'Facebook', texte: 'Rapide et efficace, très bon accueil. Sincèrement, merci beaucoup.' },
    { nom: 'Oum Amir', source: 'Facebook', texte: 'Machallah, je recommande cette agence, c’est les meilleurs.' },
    { nom: 'Samir S.', source: 'Facebook', texte: 'أحسن وكالة في الجزائر، ربي يحفظكم' }
  ],

  // ─── Liens ───────────────────────────────────────────────────────────
  facebook: 'https://www.facebook.com/profile.php?id=61565476725472',
  instagram: 'https://www.instagram.com/massar_algiers_agency/'
};

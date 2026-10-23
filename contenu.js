/* =====================================================================
   CONTENU DU SITE MASSAR ALGIERS
   ---------------------------------------------------------------------
   C'est le SEUL fichier à modifier pour mettre à jour le site.
   - Ajouter une offre : copier un bloc { ... } dans OFFRES et l'adapter
   - Retirer une offre : supprimer son bloc
   - Changer un prix : modifier le texte entre guillemets
   Chaque texte existe en français (fr) et en arabe (ar).
   Attention : garder les guillemets ' ' et les virgules en fin de ligne.
   ===================================================================== */

window.MASSAR = {

  // Numéro WhatsApp principal (format international, sans + ni espaces)
  whatsapp: '213660447167',

  // ─── Offres du moment ────────────────────────────────────────────────
  // prix : mettre null pour afficher « Prix sur demande »
  // icones : noms d'icônes Material Symbols (https://fonts.google.com/icons)
  OFFRES: [
    {
      id: 'istanbul', photo: 'assets/photos/offre-istanbul.jpg',
      icones: ['hotel', 'flight', 'airport_shuttle', 'tour'],
      fr: { pays: 'Turquie', titre: 'Istanbul', duree: '7 jours / 6 nuits', prixLabel: 'par personne', prix: '109 000 DA', note: 'Par personne, en chambre double', inclus: ['Graziella Gold 4★', 'Turkish Airlines', 'Transferts', '3 sorties'], detail: 'Îles des Princes · Sapanca · Croisière sur le Bosphore' },
      ar: { pays: 'تركيا', titre: 'إسطنبول', duree: '7 أيام / 6 ليالٍ', prixLabel: 'للشخص', prix: '109 000 دج', note: 'للشخص الواحد في غرفة مزدوجة', inclus: ['Graziella Gold 4★', 'الخطوط التركية', 'التنقلات', '3 خرجات'], detail: 'جزر الأميرات · سبانجا · رحلة بحرية في البوسفور' }
    },
    {
      id: 'oued-souf', photo: 'assets/photos/offre-oued-souf.jpg',
      icones: ['directions_car', 'landscape', 'two_wheeler', 'restaurant'],
      fr: { pays: 'Algérie · Sahara', titre: 'Oued Souf', duree: '4 jours / 3 nuits', prixLabel: 'par personne', prix: '69 000 DA', note: 'Aventure dans le Sahara', inclus: ['Safari 4x4', 'Chameau', 'Quad', 'Soirée méchoui'], detail: 'Visite de Guemar incluse' },
      ar: { pays: 'الجزائر · الصحراء', titre: 'وادي سوف', duree: '4 أيام / 3 ليالٍ', prixLabel: 'للشخص', prix: '69 000 دج', note: 'مغامرة في الصحراء', inclus: ['سفاري 4x4', 'ركوب الجمال', 'دراجة رباعية', 'سهرة مشوي'], detail: 'زيارة قمار مشمولة' }
    },
    {
      id: 'sousse', photo: 'assets/photos/offre-sousse.jpg',
      icones: ['directions_bus', 'hotel', 'restaurant', 'tour'],
      // TODO : mettre le vrai prix (ex. prix: '52 000 DA' et prix: '52 000 دج')
      fr: { pays: 'Tunisie', titre: 'Sousse', duree: 'Séjour organisé', prixLabel: 'à partir de', prix: null, note: 'Par personne, selon l’hôtel choisi', inclus: ['Bus depuis 8 villes', '3 hôtels au choix', 'Demi-pension', '3 excursions offertes'], detail: 'Circuit en bus au départ de 8 villes' },
      ar: { pays: 'تونس', titre: 'سوسة', duree: 'إقامة منظمة', prixLabel: 'ابتداءً من', prix: null, note: 'للشخص، حسب الفندق المختار', inclus: ['حافلة من 8 مدن', '3 فنادق للاختيار', 'نصف إقامة', '3 رحلات مجانية'], detail: 'رحلة بالحافلة انطلاقاً من 8 مدن' }
    }
  ],

  // ─── Omra ────────────────────────────────────────────────────────────
  OMRA: {
    fr: { periode: 'Octobre / Novembre 2026', titre: 'Omra 2026', aPartirDe: '169 000 DA',
          medine: '3 nuits à Médine pour tous les départs : hôtel Hayat Al Huda (≈ 300 m, zone centrale) ou Afaq Al Fiddi (≈ 800 m, 10 min à pied).' },
    ar: { periode: 'أكتوبر / نوفمبر 2026', titre: 'عمرة 2026', aPartirDe: '169 000 دج',
          medine: 'كل الرحلات 03 ليالٍ في المدينة: فندق حياة الهدى (حوالي 300 م، المنطقة المركزية) أو فندق آفاق الفضي (حوالي 800 م، 10 دقائق مشياً).' },
    // prix par personne en DA, dans l'ordre : [quintuple, quadruple, triple, double]
    departs: [
      {
        fr: { date: '26 octobre 2026', compagnie: 'Air Algérie', trajet: 'Djeddah – Médine' },
        ar: { date: '26 أكتوبر 2026', compagnie: 'الخطوط الجزائرية', trajet: 'جدة – المدينة' },
        hotels: [
          { fr: { nom: 'Abraj Al Kiswa', distance: '≈ 950 m du Haram · navette' }, ar: { nom: 'أبراج الكسوة', distance: '≈ 950 م من الحرم · نقل متوفر' }, prix: ['169 000', '179 000', '189 000', '209 000'] },
          { fr: { nom: 'Al Risala', distance: '≈ 700 m du Haram · 10 min à pied' }, ar: { nom: 'فندق الرسالة', distance: '≈ 700 م من الحرم · 10 دقائق مشياً' }, prix: ['–', '209 000', '239 000', '275 000'] }
        ]
      },
      {
        fr: { date: '04 novembre 2026', compagnie: 'Flynas', trajet: 'Médine – Djeddah' },
        ar: { date: '04 نوفمبر 2026', compagnie: 'طيران ناس', trajet: 'المدينة – جدة' },
        hotels: [
          { fr: { nom: 'Abraj Al Kiswa', distance: '≈ 950 m du Haram · navette' }, ar: { nom: 'أبراج الكسوة', distance: '≈ 950 م من الحرم · نقل متوفر' }, prix: ['169 000', '189 000', '199 000', '219 000'] },
          { fr: { nom: 'Saraya Al Misk', distance: '≈ 580 m du Haram · 8 min à pied' }, ar: { nom: 'سرايا المسك', distance: '≈ 580 م من الحرم · 8 دقائق مشياً' }, prix: ['209 000', '225 000', '249 000', '295 000'] }
        ]
      }
    ]
  },

  // ─── Lignes maritimes ────────────────────────────────────────────────
  MER: [
    { compagnie: 'Baleària', lignes: [['Oran', 'Valencia'], ['Mostaganem', 'Valencia'], ['Alger', 'Valencia'], ['Alger', 'Barcelona']] },
    { compagnie: 'Nouris El Bahr', lignes: [['Alger', 'Marseille'], ['Alger', 'Alicante'], ['Oran', 'Alicante']] },
    { compagnie: 'GNV', lignes: [['Alger', 'Sète'], ['Béjaïa', 'Sète']] }
  ],

  // ─── Avis clients ────────────────────────────────────────────────────
  // UNIQUEMENT de vrais avis de clients de Massar Algiers.
  // Tant que la liste est vide, la section « Avis clients » est masquée.
  // Modèle :
  // { nom: 'Prénom Nom', moisAgo: 2, voyage: 'Istanbul 2026', texte: 'Texte de l’avis…', source: 'Google' },
  // ⚠️ TEMPORAIRE : ces 4 avis viennent de la fiche Google d'une autre agence (Riwaya Travel).
  // À REMPLACER par de vrais avis Massar Algiers AVANT toute mise en ligne.
  AVIS: [
    { nom: 'Ferry Aile', moisAgo: 9, texte: 'Nous avons passé un séjour exceptionnel. 2 jours à Alger, 1 journée à Tipaza et trek de 5 jours à Sefar dans le Tassili N’ajjer. Tout a été parfait, de la première jusqu’à la dernière seconde…', source: 'Google' },
    { nom: 'Marius Berdi', moisAgo: 9, texte: 'Cela fait presque un an que je suis partie dans le Hoggar, et les mots me manquent encore pour décrire à quel point cette expérience fut unique et marquante. …', source: 'Google' },
    { nom: 'Kalia Tayeb', moisAgo: 9, voyage: 'TADRART Rouge - Djanet 28 Déc', texte: 'Le voyage s’est parfaitement déroulé du début à la fin. Service au-dessus de tout, accueil et prise en charge excellents. …', source: 'Google' },
    { nom: 'Jean-Christophe Clement', moisAgo: 7, texte: 'This was a very comprehensive tour of Algier. While much more expensive than doing your own self-tour, if you only have a day or two in Algier, it is the better option to avoid getting lost in the casbah…', source: 'Google' }
  ],

  // ─── Liens ───────────────────────────────────────────────────────────
  facebook: 'https://www.facebook.com/profile.php?id=61565476725472',
  instagram: 'https://www.instagram.com/massar_algiers_agency/'
};

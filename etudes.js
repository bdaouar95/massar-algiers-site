/* Massar Study : page Études (FR / AR).
   Tout le contenu modifiable est dans l'objet C ci-dessous.
   Les prix des universités sont indicatifs (sources 2025-2027) : les revérifier chaque année. */

(function () {
  var WA = '213559923709';          // WhatsApp principal (Algérie)
  var WA2 = '33605961149';          // WhatsApp France
  var INSTA = 'https://www.instagram.com/massar.study/';

  // Photos libres de droits (Wikimedia Commons). Les crédits s'affichent en bas de page, obligatoires pour CC BY-SA.
  var HERO = 'assets/etudes/hero-etudiants-cluj.jpg';
  var PHOTOS_PAYS = ['assets/etudes/roumanie-umf-iasi.jpg', 'assets/etudes/espagne-universite-alicante.jpg', 'assets/etudes/italie-universite-padoue.jpg', 'assets/etudes/tchequie-universite-charles.jpg', 'assets/etudes/bulgarie-universite-sofia.jpg', 'assets/etudes/hongrie-universite-debrecen.jpg', 'assets/etudes/chine-universite-tsinghua.jpg'];
  // Vraies photos de nos étudiants (avec leur accord), dans assets/etudes/nos-etudiants/.
  // La section « Nos étudiants » reste cachée tant que cette liste est vide.
  // Format : ['nom-du-fichier.jpg', 'légende FR', 'légende AR']
  var NOS_PHOTOS = [
    ['etudiants-1.jpg', 'Une promotion réunie pour l’Aïd, loin de la maison', 'دفعة من طلبتنا مجتمعة في العيد بعيداً عن الديار'],
    ['etudiants-2.jpg', 'Arrivée d’un groupe d’étudiants', 'وصول مجموعة من الطلبة'],
    ['etudiants-3.jpg', 'Accueillis dès l’aéroport', 'استقبالهم من المطار'],
    ['etudiants-4.jpg', 'Une nouvelle promotion arrive', 'وصول دفعة جديدة'],
    ['etudiants-5.jpg', 'Premier jour d’une nouvelle vie', 'اليوم الأول في حياة جديدة'],
    ['etudiants-6.jpg', 'Notre futur pilote', 'طيارنا المستقبلي']
  ];
  var CREDITS = [
    ['Étudiants de l’Université Babeș-Bolyai, Cluj', 'MagdaBarascu', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Students_of_Babe%C8%99-Bolyai_University.jpg'],
    ['UMF Iași', 'UMF Iasi', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:UMF_Ia%C8%99i.jpg'],
    ['Université Charles, Prague', 'Slyronit', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Charles_University,_Prague.jpg'],
    ['Université d’Alicante', 'Luca83', 'CC BY 3.0', 'https://commons.wikimedia.org/wiki/File:Campus_universit%C3%A0_di_Alicante.jpg'],
    ['Palazzo Bo, Université de Padoue', 'Didier Descouens', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Palazzo_Bo_(Padua).jpg'],
    ['Université de Sofia', 'Deensel', 'domaine public', 'https://commons.wikimedia.org/wiki/File:Sofia_University_%22St._Kliment_Ohridski%22_(37849719131).jpg'],
    ['Université de Debrecen', 'Wikimedia Commons', 'CC BY-SA 2.0', 'https://commons.wikimedia.org/wiki/File:University_of_Debrecen_-_Main_building.jpg'],
    ['Université Tsinghua, Pékin', 'Huangdan2060', 'CC0', 'https://commons.wikimedia.org/wiki/File:West_school_gate_of_Tsinghua_University,_2011042202.jpg'],
    ['Rue Iuliu Maniu, Cluj-Napoca', 'DimiTalen', 'CC0', 'https://commons.wikimedia.org/wiki/File:Looking_down_Strada_Iuliu_Maniu_from_Pia%C8%9Ba_Unirii,_Cluj-Napoca,_2017.jpg'],
  ];

  var C = {
    fr: {
      langBtn: 'عربي', back: 'Agence de voyage',
      nav: [['Pays', '#pays'], ['Notre offre', '#offre'], ['Étapes', '#etapes'], ['FAQ', '#faq'], ['Diagnostic', '#diagnostic']],
      h1a: 'Étudier en', h1b: 'en licence ou en master.', rotPays: ['Roumanie', 'Espagne', 'Italie', 'Tchéquie', 'Bulgarie', 'Hongrie', 'Chine'],
      sub: 'Roumanie, Espagne, Italie, Tchéquie, Chine et plus. Toutes les spécialités, avec une année prépa de langue si besoin. On choisit avec toi le pays et l’université, et on t’accompagne jusqu’au dépôt du visa.',
      btn: 'Diagnostic gratuit', preuve: '+5 000', preuveTxt: 'étudiants accompagnés, sous notre ancien nom Dartina Center.',
      engag: [['Des pays parmi les plus ouverts aux étudiants algériens', 'travel_explore'], ['Universités publiques et accréditées', 'school'], ['Contrat écrit avant tout paiement', 'description'], ['Scolarité payée directement à l’université', 'account_balance']],
      paysPill: 'Nos destinations', paysH1: 'Sept destinations,', paysH2: 'un seul accompagnement.',
      pays: [
        { drap: '🇷🇴', rang: 'Europe de l’Est', nom: 'Roumanie', acc: 'Le consulat européen le plus ouvert aux étudiants algériens.', pts: ['Cursus en roumain, en français ou en anglais', 'Année prépa de langue si besoin', 'Diplôme européen'] },
        { drap: '🇪🇸', rang: 'Europe du Sud', nom: 'Espagne', acc: 'Deux consulats en Algérie, et un membre de notre équipe vit en Espagne.', pts: ['Consulats à Alger et à Oran', 'Année de langue espagnole si besoin', 'Diplôme européen'] },
        { drap: '🇮🇹', rang: 'Europe du Sud', nom: 'Italie', acc: 'Des universités publiques prestigieuses, avec des frais selon les revenus de la famille.', pts: ['Inscription par la plateforme Universitaly', 'Nombreux cursus en anglais', 'Bourses nationales et régionales'] },
        { drap: '🇨🇿', rang: 'Europe centrale', nom: 'Tchéquie', acc: 'Les études en tchèque sont gratuites dans les universités publiques.', pts: ['Année prépa de tchèque', 'Cursus en anglais aussi', 'Diplôme européen'] },
        { drap: '🇧🇬', rang: 'Europe de l’Est', nom: 'Bulgarie', acc: 'Des universités publiques reconnues, avec de nombreux cursus en anglais.', pts: ['Cursus en anglais ou en bulgare', 'Année prépa disponible', 'Diplôme européen'] },
        { drap: '🇭🇺', rang: 'Europe centrale', nom: 'Hongrie', acc: 'Plus de 200 programmes en anglais dans des universités réputées.', pts: ['Cursus en anglais', 'Bourse Stipendium Hungaricum pour les meilleurs dossiers', 'Diplôme européen'] },
        { drap: '🇨🇳', rang: 'Asie', nom: 'Chine', acc: 'Licence et master en anglais ou en chinois, dans de grandes universités.', pts: ['Année prépa de chinois si besoin', 'Visa délivré sur lettre d’admission', 'Bourses de certaines universités'] }
      ],
      paysCta: 'Je veux étudier ici',
      paysPlus: 'Licence et master, toutes les spécialités : le pays se choisit selon ton profil, ta langue et ton budget.',
      source: 'Les frais de scolarité dépendent de l’université et du programme. Ils sont confirmés par écrit avec chaque université avant toute inscription, et payés directement sur son compte.',
      offrePill: 'Notre accompagnement', offreH1: 'De ton inscription', offreH2: 'à ton arrivée sur place.',
      packTag: 'Admission et visa', packNom: 'Pack Admission',
      packPts: ['Choix du pays, de l’université et du programme selon ton profil', 'Montage et dépôt du dossier d’admission', 'Suivi jusqu’à la lettre d’acceptation', 'Préparation du dossier de visa et accompagnement jusqu’au dépôt'],
      packGar: 'Devis personnalisé après le diagnostic gratuit, détaillé et signé à l’agence avant tout paiement.',
      optTag: 'En option', optNom: 'Prise en charge totale à l’arrivée',
      optPts: ['Accueil à l’aéroport à ton arrivée', 'Carte SIM et premiers jours sur place', 'Aide à l’installation et aux démarches', 'Accompagnement de A à Z pendant ton installation'],
      hors: 'Non compris :', horsList: ['frais de scolarité', 'frais du consulat', 'billet d’avion', 'logement', 'assurance'],
      etapesTitre: 'Comment ça marche', why: ['Pays bien choisis', 'Contrat écrit', 'Universités vérifiées', 'Suivi jusqu’au départ'],
      etapesLead: '5 étapes', etapesSub: 'Tout se fait avec notre équipe, par WhatsApp ou au bureau. Aucun paiement en ligne.',
      etapes: [['Diagnostic gratuit', 'Tu remplis le formulaire. Un conseiller te rappelle avec les pays et le budget qui te correspondent.'], ['Choix de l’université', 'On compare ensemble les options et on signe un contrat écrit.'], ['Admission', 'On monte et on dépose ton dossier, jusqu’à la lettre d’acceptation.'], ['Visa', 'Tu paies la scolarité à l’université, puis on prépare ton dossier de visa.'], ['Départ', 'Tu pars seul, ou avec la prise en charge totale à l’arrivée.']],
      faqH1: 'Vos questions,', faqH2: 'nos réponses franches.',
      faq: [
        ['Pourquoi ces pays ?', 'Parce qu’ils font partie des pays européens les plus ouverts aux étudiants algériens. La Roumanie, par exemple, a le taux de refus le plus bas des consulats européens en Algérie : 18 % des visas Schengen refusés en 2024, contre 34 % en moyenne (Commission européenne). Nous y travaillons avec des universités publiques, et nous montons chaque dossier avec soin pour mettre toutes les chances de ton côté.'],
        ['Combien coûte une année au total ?', 'Il faut additionner les frais de scolarité (payés à l’université), le logement, la vie sur place, l’assurance, le visa et le billet. On te donne une estimation complète et écrite pour le pays choisi, avec notre devis, après le diagnostic gratuit.'],
        ['Je ne parle pas la langue du pays, c’est possible ?', 'Oui. Beaucoup de programmes sont en anglais, certains en français. Sinon, l’année prépa permet d’apprendre la langue pendant un an avant la licence ou le master.'],
        ['Mon diplôme sera-t-il reconnu en Algérie ?', 'Nous ne proposons que des universités publiques ou accréditées. Avant ton inscription, nous vérifions avec toi la procédure d’équivalence auprès du ministère de l’Enseignement supérieur (MESRS), et du ministère de la Santé pour la médecine.'],
        ['Qui encaisse les frais de scolarité ?', 'L’université, directement, sur un compte à son nom. L’agence n’encaisse jamais tes frais de scolarité.'],
        ['Quand faut-il commencer ?', 'Le plus tôt possible. En Roumanie, les dossiers se déposent dès mars et certaines places sont limitées par pays. Pour une rentrée en septembre, il faut commencer en début d’année.']
      ],
      contactH1: 'Prêt à partir ?', contactH2: 'Fais ton diagnostic gratuit.',
      contactTxt: 'Réponds à quelques questions. Le bouton ouvre WhatsApp avec ta demande déjà rédigée, et un conseiller te répond.',
      fTitre: 'Diagnostic gratuit', fNom: 'Nom complet', fTel: 'Ton numéro WhatsApp', fNiveau: 'Ton niveau', niveaux: ['Bac en cours', 'Bachelier', 'Licence', 'Master', 'Autre'],
      fMoy: 'Moyenne du bac', fFil: 'Filière souhaitée', filieres: ['Médecine, dentaire, pharmacie', 'Ingénierie', 'Informatique', 'Commerce, gestion', 'Autre', 'Je ne sais pas encore'],
      fPays: 'Pays souhaité', paysOpt: ['Roumanie', 'Espagne', 'Italie', 'Tchéquie', 'Bulgarie', 'Hongrie', 'Chine', 'Je ne sais pas encore'],
      fBudget: 'Budget par an (scolarité et vie)', budgets: ['Moins de 4 000 €', '4 000 à 7 000 €', '7 000 à 10 000 €', 'Plus de 10 000 €'],
      fLangue: 'Langue maîtrisée', langues: ['Français', 'Anglais', 'Français et anglais', 'Aucune des deux'],
      fSend: 'Envoyer sur WhatsApp', fHint: 'Tes informations ne sont envoyées qu’à notre équipe, sur WhatsApp.',
      msgForm: 'Bonjour Massar Study, voici ma demande de diagnostic :', msgGen: 'Bonjour Massar Study, je souhaite des informations sur les études à l’étranger.',
      defile: ['Roumanie', 'Licence', 'Espagne', 'Master', 'Italie', 'Toutes les spécialités', 'Tchéquie', 'Année prépa', 'Bulgarie', 'Hongrie', 'Chine', 'Dossier de visa'],
      statsTitre: 'Des chiffres, pas des promesses.',
      stats: [[5000, '+', '', 'étudiants accompagnés'], [7, '', '', 'destinations en Europe et en Chine'], [18, '', ' %', 'de refus de visa en Roumanie en 2024, le plus bas des consulats européens en Algérie'], [2, '', '', 'cycles d’études : licence et master, toutes les spécialités']],
      servTitre: 'Un seul interlocuteur, de A à Z', servOpt: 'Option',
      services: [
        ['Choix du pays', 'public', 'On compare avec toi les pays selon ton profil, ta filière et ton budget.'],
        ['Université et programme', 'school', 'Uniquement des universités publiques ou accréditées, vérifiées avant inscription.'],
        ['Dossier d’admission', 'folder_open', 'On monte ton dossier complet et on le dépose pour toi.'],
        ['Lettre d’acceptation', 'mark_email_read', 'On suit ta candidature jusqu’à la réponse de l’université.'],
        ['Dossier de visa', 'badge', 'Préparation complète de ton dossier et accompagnement jusqu’au dépôt.'],
        ['Accueil à l’aéroport', 'flight_land', 'Quelqu’un t’attend à ton arrivée, tu n’es jamais seul.', 1],
        ['Carte SIM', 'sim_card', 'Connecté dès le premier jour pour rassurer ta famille.', 1],
        ['Installation sur place', 'home', 'Aide aux démarches et à l’installation des premiers jours.', 1]
      ],
      galPill: 'Nos étudiants', galH1: 'Plus de 5 000 sont partis avec nous,', galH2: 'à ton tour.', galNote: 'Photos de nos étudiants à leur arrivée, à l’époque de Dartina Center.',
      waFr: 'WhatsApp France', slogan: 'Votre réussite, notre mission', exNom: 'ex-Dartina Center'
    },
    ar: {
      langBtn: 'FR', back: 'وكالة السفر',
      nav: [['الدول', '#pays'], ['عرضنا', '#offre'], ['الخطوات', '#etapes'], ['الأسئلة', '#faq'], ['التقييم', '#diagnostic']],
      h1a: 'ادرس في', h1b: 'ليسانس أو ماستر.', rotPays: ['رومانيا', 'إسبانيا', 'إيطاليا', 'التشيك', 'بلغاريا', 'المجر', 'الصين'],
      sub: 'رومانيا، إسبانيا، إيطاليا، التشيك، الصين وغيرها. كل التخصصات، مع سنة تحضيرية للغة عند الحاجة. نختار معك البلد والجامعة ونرافقك حتى إيداع ملف التأشيرة.',
      btn: 'تقييم مجاني', preuve: '+5000', preuveTxt: 'طالب رافقناهم، باسمنا السابق Dartina Center.',
      engag: [['دول من الأكثر انفتاحاً على الطلبة الجزائريين', 'travel_explore'], ['جامعات حكومية ومعتمدة', 'school'], ['عقد مكتوب قبل أي دفع', 'description'], ['رسوم الدراسة تُدفع مباشرة للجامعة', 'account_balance']],
      paysPill: 'وجهاتنا', paysH1: 'سبع وجهات،', paysH2: 'ومرافقة واحدة.',
      pays: [
        { drap: '🇷🇴', rang: 'أوروبا الشرقية', nom: 'رومانيا', acc: 'القنصلية الأوروبية الأكثر انفتاحاً على الطلبة الجزائريين.', pts: ['الدراسة بالرومانية أو الفرنسية أو الإنجليزية', 'سنة تحضيرية للغة عند الحاجة', 'شهادة أوروبية'] },
        { drap: '🇪🇸', rang: 'جنوب أوروبا', nom: 'إسبانيا', acc: 'قنصليتان في الجزائر، وأحد أعضاء فريقنا يقيم في إسبانيا.', pts: ['قنصليتان في الجزائر العاصمة ووهران', 'سنة لتعلم الإسبانية عند الحاجة', 'شهادة أوروبية'] },
        { drap: '🇮🇹', rang: 'جنوب أوروبا', nom: 'إيطاليا', acc: 'جامعات حكومية عريقة، برسوم حسب دخل العائلة.', pts: ['التسجيل عبر منصة Universitaly', 'برامج كثيرة بالإنجليزية', 'منح وطنية وجهوية'] },
        { drap: '🇨🇿', rang: 'أوروبا الوسطى', nom: 'التشيك', acc: 'الدراسة بالتشيكية مجانية في الجامعات الحكومية.', pts: ['سنة تحضيرية للتشيكية', 'برامج بالإنجليزية أيضاً', 'شهادة أوروبية'] },
        { drap: '🇧🇬', rang: 'أوروبا الشرقية', nom: 'بلغاريا', acc: 'جامعات حكومية معترف بها، مع برامج كثيرة بالإنجليزية.', pts: ['الدراسة بالإنجليزية أو بالبلغارية', 'سنة تحضيرية متوفرة', 'شهادة أوروبية'] },
        { drap: '🇭🇺', rang: 'أوروبا الوسطى', nom: 'المجر', acc: 'أكثر من 200 برنامج بالإنجليزية في جامعات مرموقة.', pts: ['الدراسة بالإنجليزية', 'منحة Stipendium Hungaricum لأفضل الملفات', 'شهادة أوروبية'] },
        { drap: '🇨🇳', rang: 'آسيا', nom: 'الصين', acc: 'ليسانس وماستر بالإنجليزية أو بالصينية، في جامعات كبرى.', pts: ['سنة تحضيرية للصينية عند الحاجة', 'تأشيرة تُمنح برسالة القبول', 'منح من بعض الجامعات'] }
      ],
      paysCta: 'أريد الدراسة هنا',
      paysPlus: 'ليسانس وماستر، كل التخصصات: يُختار البلد حسب ملفك ولغتك وميزانيتك.',
      source: 'رسوم الدراسة تختلف حسب الجامعة والبرنامج. نؤكدها كتابياً مع كل جامعة قبل التسجيل، وتُدفع مباشرة في حسابها.',
      offrePill: 'مرافقتنا', offreH1: 'من تسجيلك', offreH2: 'إلى وصولك.',
      packTag: 'القبول والتأشيرة', packNom: 'باقة القبول',
      packPts: ['اختيار البلد والجامعة والتخصص حسب ملفك', 'تحضير وإيداع ملف القبول', 'المتابعة حتى رسالة القبول', 'تحضير ملف التأشيرة والمرافقة حتى الإيداع'],
      packGar: 'عرض سعر خاص بك بعد التقييم المجاني، مفصّل وموقّع في الوكالة قبل أي دفع.',
      optTag: 'اختياري', optNom: 'التكفل الكامل عند الوصول',
      optPts: ['الاستقبال في المطار عند وصولك', 'شريحة الهاتف والأيام الأولى', 'المساعدة في الاستقرار والإجراءات', 'مرافقة من الألف إلى الياء أثناء استقرارك'],
      hors: 'غير مشمول:', horsList: ['رسوم الدراسة', 'رسوم القنصلية', 'تذكرة الطيران', 'السكن', 'التأمين'],
      etapesTitre: 'كيف نعمل', why: ['دول مختارة بعناية', 'عقد مكتوب', 'جامعات موثوقة', 'متابعة حتى السفر'],
      etapesLead: '5 خطوات', etapesSub: 'كل شيء يتم مع فريقنا عبر واتساب أو في المكتب. لا دفع عبر الإنترنت.',
      etapes: [['تقييم مجاني', 'تملأ الاستمارة ويتصل بك مستشار بالدول والميزانية المناسبة لك.'], ['اختيار الجامعة', 'نقارن الخيارات معاً ونوقع عقداً مكتوباً.'], ['القبول', 'نحضّر ملفك ونودعه حتى رسالة القبول.'], ['التأشيرة', 'تدفع رسوم الدراسة للجامعة، ثم نحضّر ملف التأشيرة.'], ['السفر', 'تسافر وحدك، أو مع التكفل الكامل عند الوصول.']],
      faqH1: 'أسئلتكم،', faqH2: 'وأجوبتنا الصريحة.',
      faq: [
        ['لماذا هذه الدول؟', 'لأنها من الدول الأوروبية الأكثر انفتاحاً على الطلبة الجزائريين. رومانيا مثلاً لديها أدنى نسبة رفض بين القنصليات الأوروبية في الجزائر: 18% من تأشيرات شنغن رُفضت سنة 2024، مقابل 34% في المتوسط (المفوضية الأوروبية). نعمل فيها مع جامعات حكومية، ونحضّر كل ملف بعناية لنضع كل الحظوظ في صالحك.'],
        ['كم تكلف سنة كاملة؟', 'يجب جمع رسوم الدراسة (تُدفع للجامعة) والسكن والمعيشة والتأمين والتأشيرة والتذكرة. نعطيك تقديراً كاملاً ومكتوباً للبلد المختار، مع عرض سعرنا، بعد التقييم المجاني.'],
        ['لا أتكلم لغة البلد، هل هذا ممكن؟', 'نعم. برامج كثيرة بالإنجليزية وبعضها بالفرنسية. وإلا فالسنة التحضيرية تسمح بتعلم اللغة لمدة سنة قبل الليسانس أو الماستر.'],
        ['هل ستُعادل شهادتي في الجزائر؟', 'نقترح فقط جامعات حكومية أو معتمدة. قبل تسجيلك نتحقق معك من إجراءات المعادلة لدى وزارة التعليم العالي، ولدى وزارة الصحة بالنسبة للطب.'],
        ['من يستلم رسوم الدراسة؟', 'الجامعة مباشرة، في حساب باسمها. الوكالة لا تستلم أبداً رسوم دراستك.'],
        ['متى يجب أن أبدأ؟', 'في أقرب وقت. في رومانيا تُودع الملفات ابتداءً من مارس وبعض الأماكن محدودة لكل بلد. للدخول في سبتمبر يجب البدء في بداية السنة.']
      ],
      contactH1: 'مستعد للسفر؟', contactH2: 'قم بتقييمك المجاني.',
      contactTxt: 'أجب عن بعض الأسئلة. يفتح الزر واتساب مع طلبك جاهزاً، ويرد عليك مستشار.',
      fTitre: 'تقييم مجاني', fNom: 'الاسم الكامل', fTel: 'رقم واتساب', fNiveau: 'مستواك', niveaux: ['أدرس للباكالوريا', 'حاصل على الباكالوريا', 'ليسانس', 'ماستر', 'آخر'],
      fMoy: 'معدل الباكالوريا', fFil: 'التخصص المطلوب', filieres: ['الطب، طب الأسنان، الصيدلة', 'الهندسة', 'الإعلام الآلي', 'التجارة والتسيير', 'آخر', 'لم أقرر بعد'],
      fPays: 'البلد المطلوب', paysOpt: ['رومانيا', 'إسبانيا', 'إيطاليا', 'التشيك', 'بلغاريا', 'المجر', 'الصين', 'لم أقرر بعد'],
      fBudget: 'الميزانية السنوية (الدراسة والمعيشة)', budgets: ['أقل من 4000 يورو', '4000 إلى 7000 يورو', '7000 إلى 10000 يورو', 'أكثر من 10000 يورو'],
      fLangue: 'اللغة التي تتقنها', langues: ['الفرنسية', 'الإنجليزية', 'الفرنسية والإنجليزية', 'لا هذه ولا تلك'],
      fSend: 'أرسل عبر واتساب', fHint: 'معلوماتك تُرسل فقط لفريقنا عبر واتساب.',
      msgForm: 'السلام عليكم Massar Study، هذا طلب التقييم:', msgGen: 'السلام عليكم Massar Study، أرغب في معلومات حول الدراسة في الخارج.',
      defile: ['رومانيا', 'ليسانس', 'إسبانيا', 'ماستر', 'إيطاليا', 'كل التخصصات', 'التشيك', 'سنة تحضيرية', 'بلغاريا', 'المجر', 'الصين', 'ملف التأشيرة'],
      statsTitre: 'أرقام، لا وعود.',
      stats: [[5000, '+', '', 'طالب رافقناهم'], [7, '', '', 'وجهات في أوروبا والصين'], [18, '', '%', 'نسبة رفض التأشيرة لرومانيا سنة 2024، الأدنى بين القنصليات الأوروبية في الجزائر'], [2, '', '', 'مستويات: ليسانس وماستر، كل التخصصات']],
      servTitre: 'محاور واحد، من الألف إلى الياء', servOpt: 'اختياري',
      services: [
        ['اختيار البلد', 'public', 'نقارن معك الدول حسب ملفك وتخصصك وميزانيتك.'],
        ['الجامعة والتخصص', 'school', 'جامعات حكومية أو معتمدة فقط، نتحقق منها قبل التسجيل.'],
        ['ملف القبول', 'folder_open', 'نحضّر ملفك كاملاً ونودعه نيابة عنك.'],
        ['رسالة القبول', 'mark_email_read', 'نتابع طلبك حتى رد الجامعة.'],
        ['ملف التأشيرة', 'badge', 'تحضير كامل لملفك ومرافقة حتى الإيداع.'],
        ['الاستقبال في المطار', 'flight_land', 'شخص ينتظرك عند وصولك، لن تكون وحدك أبداً.', 1],
        ['شريحة الهاتف', 'sim_card', 'متصل من اليوم الأول لطمأنة عائلتك.', 1],
        ['الاستقرار', 'home', 'مساعدة في إجراءات واستقرار الأيام الأولى.', 1]
      ],
      galPill: 'طلبتنا', galH1: 'أكثر من 5000 طالب سافروا معنا،', galH2: 'والآن دورك.', galNote: 'صور طلبتنا عند وصولهم، في فترة Dartina Center.',
      waFr: 'واتساب فرنسا', slogan: 'نجاحكم، مهمتنا', exNom: 'سابقاً Dartina Center'
    }
  };

  // ─── Utilitaires (mêmes conventions que app.js) ───────────────────────
  // Échappe le texte, et colle les nombres à leurs chiffres et au signe € (pas de coupure « 7 300 / € »)
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; })
      .replace(/(\d) (?=[\d€])/g, '$1 ');
  }
  function wa(m, n) { return 'https://wa.me/' + (n || WA) + '?text=' + encodeURIComponent(m); }
  function ic(name) { return '<span class="ic" aria-hidden="true">' + esc(name) + '</span>'; }
  function map(l, f) { return l.map(f).join(''); }
  function waIco() {
    return '<svg class="wa-ico" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>';
  }
  function logo(body) {
    var plane = /^#fff(fff)?$/i.test(body) ? '#0A3D62' : '#ffffff';
    return '<svg viewBox="0 0 100 100" aria-hidden="true"><path fill="' + body + '" d="M28 8 L50 26 L72 8 A48.75 48.75 0 0 1 72 92 L50 76 L28 92 A48.75 48.75 0 0 1 28 8 Z"/>' +
      '<path fill="' + plane + '" transform="translate(50 50) scale(.86) translate(-50 -50)" d="M50 26 C54 26 55.5 30 55.5 35 V45 L82 60 V67 L55.5 59 V65 L64 71 V75 L50 71.5 L36 75 V71 L44.5 65 V59 L18 67 V60 L44.5 45 V35 C44.5 30 46 26 50 26 Z"/></svg>';
  }
  function pill(txt, cls) { return '<div class="pill e-pill' + (cls ? ' ' + cls : '') + '"><span class="e-point" aria-hidden="true"></span>' + txt + '</div>'; }
  function h2(a, b, cls) { return '<h2 class="h2' + (cls ? ' ' + cls : '') + '">' + a + ' <span class="ton2">' + b + '</span></h2>'; }
  function opts(list) { return map(list, function (o) { return '<option>' + esc(o) + '</option>'; }); }

  function initialLang() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q === 'ar' || q === 'fr') return q;
    try { var s = localStorage.getItem('massar-lang'); if (s === 'ar' || s === 'fr') return s; } catch (e) {}
    return 'fr';
  }
  var lang = initialLang();

  function render() {
    var t = C[lang], rtl = lang === 'ar';
    var waGen = wa(t.msgGen);
    document.documentElement.lang = lang;
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';

    document.getElementById('app').innerHTML =
      '<div class="e-progress" aria-hidden="true"><span></span></div>' +
      '<div class="page">' +

      // Hero
      '<section id="top" class="e-hero">' +
        '<div class="e-hero-photo"><img class="cover" src="' + HERO + '" alt="" fetchpriority="high" decoding="async"></div><div class="e-hero-voile"></div>' +
        '<header class="hero-bar">' +
          '<a href="#top" class="brand" aria-label="Massar Study">' + logo('#ffffff') +
            '<div class="brand-txt"><div class="brand-name">Massar Study</div><div class="brand-sub">' + esc(t.exNom) + '</div></div></a>' +
          '<div class="nav-wrap"><nav class="nav verre">' + map(t.nav, function (n) { return '<a href="' + n[1] + '">' + esc(n[0]) + '</a>'; }) + '</nav></div>' +
          '<a class="e-back verre" href="index.html' + (rtl ? '?lang=ar' : '') + '">' + ic(rtl ? 'arrow_forward' : 'arrow_back') + esc(t.back) + '</a>' +
          '<button type="button" class="lang-btn verre" data-action="lang">' + t.langBtn + '</button>' +
        '</header>' +
        '<div class="e-hero-body">' +
          '<div class="e-hero-txt">' +
            '<h1><span class="ln"><span class="ln-in">' + esc(t.h1a) + ' <span class="rot">' + map(t.rotPays, function (w) { return '<span>' + esc(w) + '</span>'; }) + '</span>' + (rtl ? '،' : ',') + '</span></span> <span class="ln"><b class="ln-in">' + esc(t.h1b) + '</b></span></h1>' +
            '<p class="hero-sub">' + esc(t.sub) + '</p>' +
            '<div class="hero-btns"><a class="btn btn-blanc" href="#diagnostic">' + esc(t.btn) + '</a>' +
              '<a class="btn btn-wa" href="' + waGen + '" target="_blank" rel="noopener">' + waIco() + 'WhatsApp</a></div>' +
          '</div>' +
          '<div class="e-preuve verre"><strong dir="ltr">+<span data-count="5000">5\u00a0000</span></strong><span>' + esc(t.preuveTxt) + '</span></div>' +
        '</div>' +
        '<div class="e-engag">' + map(t.engag, function (e) { return '<div><span class="rond">' + ic(e[1]) + '</span>' + esc(e[0]) + '</div>'; }) + '</div>' +
      '</section>' +

      // Bande qui défile
      '<div class="e-defile" aria-hidden="true"><div class="e-defile-piste" dir="ltr">' +
        map(t.defile.concat(t.defile), function (m) { return '<span>' + esc(m) + '</span><i>✦</i>'; }) +
      '</div></div>' +

      // Chiffres clés
      '<section class="card e-stats" aria-label="' + esc(t.statsTitre) + '">' +
        '<h2 class="e-stats-titre">' + esc(t.statsTitre) + '</h2>' +
        '<div class="e-stats-grid">' + map(t.stats, function (st) {
          return '<div class="e-stat"><strong dir="ltr">' + st[1] + '<span data-count="' + st[0] + '">' + st[0] + '</span>' + st[2] + '</strong><span>' + esc(st[3]) + '</span></div>';
        }) + '</div>' +
      '</section>' +

      // Pays
      '<section id="pays" class="card e-pays">' +
        pill(t.paysPill) + h2(t.paysH1, t.paysH2, 'center') +
        '<div class="e-pays-grid">' + map(t.pays, function (p, i) {
          return '<article class="pays">' +
            '<div class="pays-img"><img class="cover" src="' + PHOTOS_PAYS[i] + '" alt="' + esc(p.nom) + '" loading="lazy" decoding="async"></div>' +
            '<div class="pays-top"><span class="pays-rang">' + esc(p.rang) + '</span><span class="pays-drap" aria-hidden="true">' + p.drap + '</span></div>' +
            '<h3>' + esc(p.nom) + '</h3><p class="pays-accroche">' + esc(p.acc) + '</p>' +
            '<ul>' + map(p.pts, function (x) { return '<li>' + ic('check_circle') + '<span>' + esc(x) + '</span></li>'; }) + '</ul>' +
            '<a class="pays-cta" href="#diagnostic" data-pays="' + esc(p.nom) + '">' + esc(t.paysCta) + ic(rtl ? 'arrow_back' : 'arrow_forward') + '</a>' +
          '</article>';
        }) + '</div>' +
        '<p class="e-source"><b>' + esc(t.paysPlus) + '</b><br>' + esc(t.source) + '</p>' +
      '</section>' +

      // Offre
      '<section id="offre" class="card card-dark e-offre">' +
        pill(t.offrePill, 'blanche') + h2(t.offreH1, t.offreH2, 'center') +
        '<p class="serv-titre">' + esc(t.servTitre) + '</p>' +
        '<div class="serv-grid">' + map(t.services, function (sv, i) {
          return '<article class="serv' + (sv[3] ? ' opt' : '') + '">' +
            '<div class="serv-haut"><span class="serv-ic">' + ic(sv[1]) + '</span><span class="serv-n" dir="ltr">0' + (i + 1) + '</span></div>' +
            '<h3>' + esc(sv[0]) + (sv[3] ? ' <em>' + esc(t.servOpt) + '</em>' : '') + '</h3><p>' + esc(sv[2]) + '</p>' +
          '</article>';
        }) + '</div>' +
        '<div class="e-offre-grid">' +
          '<article class="pack"><span class="pack-tag">' + esc(t.packTag) + '</span><h3>' + esc(t.packNom) + '</h3>' +
                        '<ul>' + map(t.packPts, function (x) { return '<li>' + ic('check') + '<span>' + esc(x) + '</span></li>'; }) + '</ul>' +
            '<div class="pack-garantie">' + ic('description') + '<span>' + esc(t.packGar) + '</span></div>' +
          '</article>' +
          '<article class="pack option"><span class="pack-tag">' + esc(t.optTag) + '</span><h3>' + esc(t.optNom) + '</h3>' +
                        '<ul>' + map(t.optPts, function (x) { return '<li>' + ic('check') + '<span>' + esc(x) + '</span></li>'; }) + '</ul>' +
            '<a class="btn-split btn-blanc" href="' + wa(t.msgGen + ' (' + t.optNom + ')') + '" target="_blank" rel="noopener">' + esc(t.btn) + '<span class="rond">' + waIco() + '</span></a>' +
          '</article>' +
        '</div>' +
        '<div class="e-hors"><b>' + esc(t.hors) + '</b>' + map(t.horsList, function (h) { return '<span>' + esc(h) + '</span>'; }) + '</div>' +
      '</section>' +

      // Étapes (reprend le bloc « Comment réserver » du site)
      '<section id="etapes" class="card reserver">' +
        '<h2>' + esc(t.etapesTitre) + '</h2>' +
        '<div class="mots">' + map(t.why, function (w) { return '<span>' + esc(w) + '<i aria-hidden="true">+</i></span>'; }) + '</div>' +
        '<div class="e-ligne" aria-hidden="true"><span></span></div>' +
        '<div class="etapes">' +
          '<div class="intro"><b>' + esc(t.etapesLead) + '</b><span>' + esc(t.etapesSub) + '</span></div>' +
          map(t.etapes, function (s, i) { return '<div><div class="n">0' + (i + 1) + '.</div><div class="t">' + esc(s[0]) + '</div><div class="d">' + esc(s[1]) + '</div></div>'; }) +
        '</div>' +
      '</section>' +

      // Nos étudiants (preuve sociale, masquée si aucune photo)
      (NOS_PHOTOS.length ?
      '<section id="etudiants" class="card e-galerie">' +
        pill(t.galPill) + h2(t.galH1, t.galH2, 'center') +
        [NOS_PHOTOS, NOS_PHOTOS.slice().reverse()].map(function (rang, r) {
          return '<div class="e-galerie-bande' + (r ? ' inverse' : '') + '"><div class="e-galerie-piste" dir="ltr">' + map(rang.concat(rang), function (ph, k) {
            var leg = rtl ? ph[2] : ph[1];
            return '<figure' + (k >= rang.length ? ' aria-hidden="true"' : '') + '><img class="cover" src="assets/etudes/nos-etudiants/' + esc(ph[0]) + '" alt="' + (k >= rang.length ? '' : esc(leg)) + '" loading="lazy" decoding="async">' + (leg ? '<figcaption dir="auto">' + esc(leg) + '</figcaption>' : '') + '</figure>';
          }) + '</div></div>';
        }).join('') +
        '<p class="e-source">' + esc(t.galNote) + '</p>' +
      '</section>' : '') +

      // FAQ
      '<section id="faq" class="card e-faq">' +
        h2(t.faqH1, t.faqH2) +
        '<div class="e-faq-list">' + map(t.faq, function (q) {
          return '<details><summary>' + esc(q[0]) + ic('add') + '</summary><p>' + esc(q[1]) + '</p></details>';
        }) + '</div>' +
      '</section>' +

      // Diagnostic
      '<section id="diagnostic" class="card card-dark contact">' +
        '<div class="contact-col">' +
          h2(t.contactH1, t.contactH2) +
          '<p class="hero-sub" style="color:#C9D8E4">' + esc(t.contactTxt) + '</p>' +
          '<div class="appels">' +
            '<a href="' + waGen + '" target="_blank" rel="noopener">' + waIco() + '<span dir="ltr">+213 559 92 37 09</span></a>' +
            '<a href="' + wa(t.msgGen, WA2) + '" target="_blank" rel="noopener">' + waIco() + '<span dir="ltr">+33 6 05 96 11 49</span></a>' +
          '</div>' +
          '<div class="coords"><a href="' + INSTA + '" target="_blank" rel="noopener">' + ic('photo_camera') + '@massar.study</a></div>' +
        '</div>' +
        '<form class="form e-diag" id="form">' +
          '<h3>' + esc(t.fTitre) + '</h3>' +
          '<label>' + t.fNom + '<input name="nom" required autocomplete="name"></label>' +
          '<label>' + t.fTel + '<input name="tel" type="tel" required autocomplete="tel" dir="ltr"></label>' +
          '<div class="form-row">' +
            '<label>' + t.fNiveau + '<select name="niveau">' + opts(t.niveaux) + '</select></label>' +
            '<label>' + t.fMoy + '<input name="moy" inputmode="decimal" placeholder="12,50" dir="ltr"></label>' +
          '</div>' +
          '<div class="form-row">' +
            '<label>' + t.fFil + '<select name="filiere">' + opts(t.filieres) + '</select></label>' +
            '<label>' + t.fPays + '<select name="pays">' + opts(t.paysOpt) + '</select></label>' +
          '</div>' +
          '<div class="form-row">' +
            '<label>' + t.fBudget + '<select name="budget">' + opts(t.budgets) + '</select></label>' +
            '<label>' + t.fLangue + '<select name="langue">' + opts(t.langues) + '</select></label>' +
          '</div>' +
          '<button type="submit">' + waIco() + t.fSend + '</button>' +
          '<div class="form-hint">' + t.fHint + '</div>' +
        '</form>' +
      '</section>' +

      // Footer
      '<footer class="footer">' +
        '<div class="footer-logo">' + logo('#0A3D62') +
          '<div class="brand-txt"><span class="brand-name">Massar Study</span><span class="brand-sub">' + esc(t.exNom) + '</span></div>' +
          '<div class="footer-sep"></div><span class="footer-ar" dir="rtl">مسار</span></div>' +
        '<div class="slogan">' + esc(t.slogan) + '</div>' +
        '<div class="socials"><a href="' + INSTA + '" target="_blank" rel="noopener">Instagram</a><a href="index.html' + (rtl ? '?lang=ar' : '') + '">' + esc(t.back) + '</a></div>' +
      '</footer>' +

      '<p class="e-credits" dir="ltr">Photos : ' + CREDITS.map(function (c) { return '<a href="' + c[3] + '" target="_blank" rel="noopener">' + esc(c[0]) + '</a> (' + esc(c[1]) + ', ' + c[2] + ')'; }).join(' · ') + ', via Wikimedia Commons.</p>' +
      '<a class="e-sticky" href="#diagnostic">' + ic('school') + esc(t.btn) + '</a>' +
      '<a class="wa-float" href="' + waGen + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + waIco() + '</a>' +
      '</div>';
    boutonFlottant();
    if (window.MASSAR_ANIM) (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(function () { window.MASSAR_ANIM(); });
  }

  // Clic sur un pays : on pré-remplit le pays dans le formulaire (le défilement est géré par le lien #diagnostic)
  document.addEventListener('click', function (e) {
    var lien = e.target.closest('[data-pays]');
    if (!lien) return;
    var form = document.getElementById('form');
    if (!form) return;
    var choix = form.elements.pays, nom = lien.getAttribute('data-pays');
    for (var i = 0; i < choix.options.length; i++) { if (choix.options[i].text === nom) { choix.selectedIndex = i; break; } }
    form.classList.remove('e-flash'); void form.offsetWidth; form.classList.add('e-flash');
    setTimeout(function () { try { form.elements.nom.focus({ preventScroll: true }); } catch (err) {} }, 1200);
  }, true);

  // Bouton « Diagnostic gratuit » flottant : visible après le haut de page, caché quand le formulaire est à l'écran
  function boutonFlottant() {
    var b = document.querySelector('.e-sticky'), hero = document.querySelector('.e-hero'), diag = document.getElementById('diagnostic');
    if (!b || !hero || !diag || !('IntersectionObserver' in window)) return;
    var heroVu = true, diagVu = false;
    function maj() { b.classList.toggle('visible', !heroVu && !diagVu); }
    new IntersectionObserver(function (en) { heroVu = en[0].isIntersecting; maj(); }).observe(hero);
    new IntersectionObserver(function (en) { diagVu = en[0].isIntersecting; maj(); }, { threshold: 0.15 }).observe(diag);
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest('[data-action="lang"]');
    if (!el) return;
    lang = lang === 'fr' ? 'ar' : 'fr';
    try { localStorage.setItem('massar-lang', lang); } catch (err) {}
    var url = new URL(location.href);
    if (lang === 'ar') url.searchParams.set('lang', 'ar'); else url.searchParams.delete('lang');
    history.replaceState(null, '', url);
    render();
  });

  document.addEventListener('submit', function (e) {
    if (e.target.id !== 'form') return;
    e.preventDefault();
    var t = C[lang], el = e.target.elements;
    var lines = [t.msgForm,
      t.fNom + ' : ' + el.nom.value, t.fTel + ' : ' + el.tel.value,
      t.fNiveau + ' : ' + el.niveau.value, t.fMoy + ' : ' + (el.moy.value || '-'),
      t.fFil + ' : ' + el.filiere.value, t.fPays + ' : ' + el.pays.value,
      t.fBudget + ' : ' + el.budget.value, t.fLangue + ' : ' + el.langue.value];
    window.open(wa(lines.join('\n')), '_blank', 'noopener');
  });

  render();
})();

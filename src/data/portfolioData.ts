    category: 'Marketing',
    url: 'https://booster-16.web.app/',
    image: booostImg,
    shortDescription:
      'Site vitrine haute conversion consacré au marketing digital, à la communication de marque, à la publicité et aux partenariats influenceurs.',
    features: [
      'Direction artistique contemporaine avec thème sombre et accents vibrants',
      'Présentation claire des services : Stratégie de marque, Publicité en ligne, Campagnes influenceurs',
      'Mise en avant des études de cas de marques et campagnes créatives',
      'Formulaire de brief et demande de devis en ligne',
      'Hébergement haute disponibilité sur Firebase Hosting',
    ],
    technologies: ['React', 'Tailwind CSS', 'Firebase Hosting', 'UI/UX Design', 'Modern Animations'],
    context:
      'Site vitrine pour une initiative d’agence créative et digitale accompagnant les entreprises dans leur croissance numérique.',
    problem:
      'Nécessité de rassurer les décideurs d’entreprise grâce à une présence en ligne percutante et professionnelle.',
    solution:
      'Une vitrine digitale aux standards internationaux, avec mise en valeur soignée du portfolio et canaux de contact simplifiés.',
    roleAndArchitecture: [
      'Conception de l’identité visuelle et de l’expérience de navigation.',
      'Développement frontend réactif et animations fluides.',
      'Optimisation des performances et déploiement sur Firebase Hosting.',
    ],
    highlight: 'Site vitrine déployé sur Firebase Hosting',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'web-mobile',
    name: 'Développement Web & Mobile',
    description: 'Applications cross-platform, frameworks modernes et architectures réactives',
    skills: [
      { name: 'Flutter & Dart', level: 'Compétence clé CV', iconName: 'Smartphone', details: 'Développement d’applications mobiles iOS & Android performantes' },
      { name: 'React', level: 'Pratique confirmée', iconName: 'Atom', details: 'Applications web dynamiques, Single Page Applications, écosystème moderne' },
      { name: 'Python', level: 'Pratique confirmée', iconName: 'Code', details: 'Backend d’API, scripts de traitement de données, intégration IA' },
      { name: 'JavaScript & HTML5', level: 'Maîtrise fondamentale', iconName: 'FileCode2', details: 'ES6+, DOM, programmation asynchrone, interfaces sémantiques' },
      { name: 'Node.js', level: 'Pratique confirmée', iconName: 'Server', details: 'Environnement backend, microservices, distribution de données' },
      { name: 'REST APIs & Dart Server', level: 'Pratique confirmée', iconName: 'Network', details: 'Conception et consommation d’endpoints REST sécurisés' },
    ],
  },
  {
    id: 'ai-automation',
    name: 'Intelligence Artificielle & Automatisation',
    description: 'Intégration de modèles de langage (LLM), workflows n8n et automatisation métier',
    skills: [
      { name: 'Intégration d’API OpenAI / GPT', level: 'Pratique en projet', iconName: 'Cpu', details: 'Génération de résumés, chatbots, recommandations automatisées' },
      { name: 'n8n Workflows avancés', level: 'Pratique confirmée', iconName: 'Workflow', details: 'Automatisation de processus métier, enrichissement de données' },
      { name: 'Intégration d’IA dans les applications', level: 'Pratique continue', iconName: 'Zap', details: 'Augmentation des fonctionnalités applicatives par l’IA générative' },
      { name: 'Analyse de données & Génération', level: 'Pratique appliquée', iconName: 'Binary', details: 'Extraction, structuration et synthèse de flux d’informations' },
      { name: 'Intégration d’API tierces', level: 'Pratique systématique', iconName: 'Network', details: 'Connexion de services SaaS, plateformes externes et webhooks' },
      { name: 'Outils d’IA (Google IA Studio)', level: 'Pratique quotidienne', iconName: 'Flame', details: 'Accélération de la conception, développement et débogage' },
    ],
  },
  {
    id: 'cloud-db',
    name: 'Cloud, Infrastructure & Données',
    description: 'Bases de données NoSQL/SQL, authentification et hébergement cloud',
    skills: [
      { name: 'Firebase (Auth, Firestore, FCM)', level: 'Pratique confirmée', iconName: 'Database', details: 'Base NoSQL en temps réel, notifications push, authentification' },
      { name: 'Supabase', level: 'Pratique en projet', iconName: 'Key', details: 'PostgreSQL managé, row-level security et authentification moderne' },
      { name: 'AWS (Amazon Web Services)', level: 'Pratique en projet', iconName: 'Cloud', details: 'Services cloud, stockage S3 et intégration d’API' },
      { name: 'MySQL', level: 'Acquis académique & projet', iconName: 'Table', details: 'Bases de données relationnelles, requêtes SQL, schémas normalisés' },
    ],
  },
  {
    id: 'tools-devops',
    name: 'Outils & Environnement',
    description: 'Environnements de code, versionnement et plateformes de déploiement',
    skills: [
      { name: 'Git / GitHub', level: 'Pratique régulière', iconName: 'GitBranch', details: 'Gestion de versions distribuée, collaboration et dépôts' },
      { name: 'Déploiement Cloud (Render, Firebase)', level: 'Pratique confirmée', iconName: 'Send', details: 'Mise en production continue d’applications web et d’APIs' },
      { name: 'VS Code & IA Assistée', level: 'Environnement quotidien', iconName: 'FileCode2', details: 'Google IA Studio, Firebase Studio, productivité logicielle' },
    ],
  },
  {
    id: 'management',
    name: 'Gestion Informatique & Organisation',
    description: 'Cursus universitaire approfondi à l’Université Pédagogique Nationale',
    skills: [
      { name: 'Analyse des systèmes d’information', level: 'Formation LMD Bac+3', iconName: 'Users', details: 'Modélisation des processus d’entreprise, Merise et UML' },
      { name: 'Gestion & suivi d’opérations financières', level: 'Expérience DGDA', iconName: 'CheckCircle2', details: 'Stage à la Direction des Finances Internes (DFI)' },
      { name: 'Conception UI/UX & Produit', level: 'Pratique continue', iconName: 'Compass', details: 'Conception d’expériences simples et adaptées aux réalités de terrain' },
    ],
  },
];

export const WORK_EXPERIENCES = [
  {
    period: 'Juin 2026 — Juill 2026',
    role: 'Stagiaire — Stage académique',
    company: 'DGDA (Direction Générale des Douanes et Accises)',
    department: 'Direction des Finances Internes (DFI)',
    location: 'Kinshasa, RDC',
    description:
      'Stage académique effectué au sein de la Direction des Finances Internes (DFI) dans le cadre de la Licence en Gestion Informatique.',
    achievements: [
      'Participation active aux activités liées à la gestion et au suivi des opérations financières internes.',
      'Observation et compréhension des flux d’information, des procédures de contrôle et des systèmes de gestion internes.',
      'Mise en application pratique des compétences d’analyse de données et de rigueur administrative.',
    ],
  },
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    period: 'Oct 2023 — Août 2026',
    degree: 'Licence en Gestion Informatique (Bac +3)',
    institution: 'Université Pédagogique Nationale (UPN)',
    location: 'Kinshasa, RD Congo',
    description:
      'Formation universitaire complète axée sur la modélisation des systèmes d’information, le génie logiciel, les bases de données relationnelles et NoSQL, et le management des technologies d’entreprise.',
    competencies: [
      'Modélisation des systèmes d’information & Génie logiciel',
      'Bases de données relationnelles (MySQL) et NoSQL (Firestore)',
      'Algorithmique, programmation (Python, JavaScript, Dart) et architectures web',
      'Audit, gestion financière et systèmes d’information organisationnels',
    ],
    status: 'En cours · Bac +3',
  },
];

export const LANGUAGES = [
  { language: 'Français', level: 'Courant / Langue de travail' },
  { language: 'Anglais', level: 'Intermédiaire' },
  { language: 'Lingala', level: 'Courant' },
];

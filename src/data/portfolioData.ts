import { Project, SkillCategory, EducationItem } from '../types/portfolio';

// Authentic project screenshots uploaded by Gode Mukeng Mukanz

const gmImmoImg = `${import.meta.env.BASE_URL}assets/aistudio/WhatsApp_Image_2026-10-24_at_08.44.04__1__bed8a7a9.jpeg`;

const mayeleImg = `${import.meta.env.BASE_URL}assets/aistudio/WhatsApp_Image_2026-10-24_at_08.44.05_a2672020.jpeg`;

const goyingImg = `${import.meta.env.BASE_URL}assets/aistudio/WhatsApp_Image_2026-10-24_at_08.44.05__1__9545578b.jpeg`;

const booostImg = `${import.meta.env.BASE_URL}assets/aistudio/WhatsApp_Image_2026-10-24_at_08.44.04_24dabaa9.jpeg`;

export const PERSONAL_INFO = {
  name: 'Gode Mukeng Mukanz',
  title: 'Développeur Web & Mobile | Licence en Gestion Informatique Bac +3',
  headline: 'Développeur Full-Stack spécialisé dans le développement d’applications web et mobiles, l’intégration de solutions d’intelligence artificielle et l’automatisation des processus.',
  hook: 'Expérience dans la conception de solutions numériques utilisant Flutter, Firebase, Python, les API et les outils d’automatisation. Capable de concevoir et développer des solutions robustes et rapidement opérationnelles.',
  education: 'Licence en gestion informatique Bac +3 — Université Pédagogique Nationale (UPN)',
  educationPeriod: 'Oct 2023 — Août 2026',
  location: 'Kinshasa, RD Congo',
  email: 'mukenggode0@gmail.com',
  phone: '+243857068014',
  whatsappDisplay: '+243 857 068 014',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
  availability: 'Disponible pour opportunités (Emploi, Stage & Freelance)',
  avatar: '/assets/aistudio/WhatsApp_Image_2026-10-24_at_08.42.55_eb66488f.jpeg',
  cvPdfUrl: `${import.meta.env.BASE_URL}Gode-Mukeng-Mukanz-CV.pdf`,

};

export const PROJECTS: Project[] = [
  {
    id: 'gm-immo-kin',
    title: 'GM Immo Kin',
    tagline: 'Plateforme immobilière de référence pour la ville de Kinshasa',
    category: 'Immobilier',
    url: 'https://kobosa-16.web.app/',
    image: gmImmoImg,
    shortDescription:
      'Conception et développement complet d’une application immobilière développée avec Flutter & Dart orientée vers le marché de Kinshasa, facilitant la recherche de logements et la mise en relation avec les propriétaires.',
    features: [
      'Conception et développement complet de l’architecture et du back-end',
      'Authentification sécurisée avec Firebase Authentication et gestion de sessions',
      'Base de données Firestore en temps réel pour le catalogue d’annonces et critères de recherche',
      'Stockage cloud sécurisé des photographies de biens immobiliers',
      'Mise en place d’un système de notifications push en temps réel pour les nouvelles annonces',
    ],
    technologies: ['Flutter', 'Dart', 'Firebase Firestore', 'Firebase Auth', 'Cloud Storage', 'FCM'],
    context:
      'Projet personnel développé entre Mai 2025 et Décembre 2025. Répond au défi d’accès transparent et vérifié aux annonces immobilières dans les communes de Kinshasa.',
    problem:
      'Difficulté d’accéder à des annonces géolocalisées avec photographies réelles sans passer par une chaîne opaque d’intermédiaires.',
    solution:
      'Une plateforme fluide conçue en Flutter & Dart permettant aux locataires et acheteurs de filtrer par quartier et budget, avec messagerie directe et notifications push.',
    roleAndArchitecture: [
      'Conception globale de l’architecture logicielle et de la modélisation de données NoSQL.',
      'Développement de l’application avec Flutter & Dart et intégration complète des services Firebase.',
      'Mise en œuvre des règles de sécurité Firestore et du pipeline de stockage d’images.',
      'Configuration du déploiement continu et des notifications push en temps réel.',
    ],
    highlight: 'Projet personnel · Mai 2025 - Déc 2025',
  },
  {
    id: 'mayele',
    title: 'Mayele / GM Biblio — Bibliothèque Numérique avec IA',
    tagline: 'Plateforme d’achat et lecture de livres avec IA & automatisation',
    category: 'Éducation',
    url: 'https://studio-app-n0iv.onrender.com/',
    image: mayeleImg,
    shortDescription:
      'Création d’une plateforme web moderne dédiée à l’achat et à la lecture de livres en ligne, enrichie par l’IA (OpenAI GPT) et des workflows d’automatisation n8n.',
    features: [
      'Catalogue thématique structuré : Informatique, Business, Roman, Développement personnel',
      'Intégration d’API OpenAI / GPT pour la génération automatique de résumés d’ouvrages',
      'Algorithme de recommandations personnalisées adaptées aux centres d’intérêt du lecteur',
      'Mise en place de workflows d’automatisation avec n8n pour le traitement des données et l’enrichissement du catalogue',
      'Lecteur web intégré et espace membre optimisé pour ordinateurs et mobiles',
    ],
    technologies: ['React', 'OpenAI API', 'Python', 'n8n Workflows', 'AWS', 'Google IA Studio', 'Render'],
    context:
      'Projet d’innovation développé entre Juillet 2026 et Septembre 2026. Axé sur la valorisation de l’apprentissage et l’intégration de l’intelligence artificielle générative.',
    problem:
      'Manque de résumés qualitatifs rapides et difficulté de trouver des recommandations adaptées dans les catalogues de lecture en ligne.',
    solution:
      'Associer une interface de lecture épurée à la puissance des LLM d’OpenAI pour synthétiser les chapitres et automatiser les fiches de livres via n8n.',
    roleAndArchitecture: [
      'Conception de l’interface React et intégration des endpoints de traitement de texte IA.',
      'Développement de scripts backend en Python pour la connexion avec l’API OpenAI GPT.',
      'Architecture de workflows automatisés sous n8n pour synchroniser et enrichir les métadonnées.',
      'Hébergement et intégration sur AWS, Render et Google IA Studio.',
    ],
    highlight: 'Projet d’innovation · Juill 2026 - Sept 2026',
  },
  {
    id: 'goying',
    title: 'Goying — Plateforme Multi-services',
    tagline: 'Mise en relation directe avec prestataires qualifiés à Kinshasa',
    category: 'Marketplace',
    url: 'https://www.goyingservices.com/',
    image: goyingImg,
    shortDescription:
      'Conception et développement d’une plateforme multi-services regroupant plusieurs corps de métiers et prestataires vérifiés à Kinshasa.',
    features: [
      'Interface intuitive permettant de trouver rapidement chauffeurs, ménagères, professeurs à domicile, coiffeurs/coiffeuses et maquilleuses',
      'Développement du frontend interactif avec React',
      'Développement du backend avec Python et API REST',
      'Mise en place de l’architecture logicielle et des fonctionnalités principales de la plateforme',
      'Mise en relation instantanée par téléphone et messagerie directe',
    ],
    technologies: ['React', 'Python', 'REST APIs', 'Cloud Services', 'Tailwind CSS'],
    context:
      'Projet personnel initié en Septembre 2026 (en évolution continue). Conçu pour professionnaliser le secteur informel des services de proximité en RDC.',
    problem:
      'Difficulté pour les ménages et entreprises à Kinshasa de recruter en confiance des prestataires qualifiés et vérifiés à domicile.',
    solution:
      'Un annuaire interactif avec profils détaillés, compétences attestées et contact direct rapide pour tous les services essentiels du quotidien.',
    roleAndArchitecture: [
      'Étude des parcours clients et prestataires pour une accessibilité maximale.',
      'Développement frontend responsive avec React.',
      'Développement des services d’API backend en Python.',
      'Mise en place de l’architecture modulaire et des systèmes de filtrage par métier.',
    ],
    highlight: 'Projet personnel · Sept 2026 - Présent',
  },
  {
    id: 'booost',
    title: 'BOOOST',
    tagline: 'Site vitrine consacré au marketing digital, branding et influence',
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

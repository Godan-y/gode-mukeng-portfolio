export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Immobilier' | 'Éducation' | 'Marketplace' | 'Marketing';
  url: string;
  image: string;
  shortDescription: string;
  features: string[];
  technologies: string[];
  context: string;
  problem: string;
  solution: string;
  roleAndArchitecture: string[];
  highlight: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    level: string;
    iconName: string;
    details?: string;
  }[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  description: string;
  competencies: string[];
  status?: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

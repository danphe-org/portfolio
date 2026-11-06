export interface StatItem {
  value: string;
  label: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  badge?: string;
  description?: string;
}

export interface ProcessStep {
  step: string;
  icon: 'search' | 'ideate' | 'design' | 'develop' | 'deliver';
  title: string;
  description: string;
}

export interface PortfolioData {
  hero: {
    topRole: string;
    subRole: string;
    status: string;
    greeting: string;
    name: string;
    title: string;
    bio: string;
    locationBadge: string;
    calloutText: string;
    stats: StatItem[];
    portraitImage: string;
    heroImage?: string;
    fallbackInitials?: string;
  };
  projects: ProjectItem[];
  education: EducationItem[];
  skills: string[];
  process: ProcessStep[];
  quote: {
    text: string;
    author: string;
    signatureName: string;
    ctaNote: string;
  };
  contact: {
    headline: string;
    subheadline: string;
    badge: string;
    email: string;
    website: string;
    phone: string;
    location: string;
    github?: string;
    linkedin?: string;
    instagram?: string;
    facebook?: string;
  };
}

export interface Project {
  id: string;
  title: string;
  category: 'Branding' | 'Layout' | 'Digital' | 'Print' | 'Campaign';
  image: string;
  description: string;
  tags: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  description: string[];
}

export interface Skill {
  name: string;
  category: 'Design' | 'Software' | 'Soft Skills';
  level: number; // 0-100
}

export interface NavItem {
  label: string;
  href: string;
}

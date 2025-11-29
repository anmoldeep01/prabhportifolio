import { ExperienceItem, Project, Skill } from './types';

export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: '1',
    role: 'Graphics Assistant',
    company: 'New Westminster Public Library',
    period: '2022 - Present',
    type: 'Regular Part-Time',
    description: [
      'Support the communications team in producing high-quality digital and print materials.',
      'Maintain and update the library website and digital signage systems.',
      'Ensure all visual output strictly adheres to institutional brand guidelines.',
      'Track distribution channels and analyze campaign impact for future optimization.',
      'Assist in planning promotional events and maintaining positive stakeholder relationships.'
    ]
  },
  {
    id: '2',
    role: 'Freelance Graphic Designer',
    company: 'Self-Employed',
    period: '2020 - Present',
    type: 'Contract',
    description: [
      'Delivering branding packages, UI layouts, and social media assets for diverse clients.',
      'Collaborating with marketing teams to translate conceptual ideas into visual reality.',
      'Managing multiple projects simultaneously with strict deadlines.'
    ]
  }
];

export const SKILLS_DATA: Skill[] = [
  { name: 'Adobe InDesign', category: 'Software', level: 95 },
  { name: 'Adobe Illustrator', category: 'Software', level: 90 },
  { name: 'Adobe Photoshop', category: 'Software', level: 88 },
  { name: 'Figma / UI Design', category: 'Software', level: 85 },
  { name: 'Layout Design', category: 'Design', level: 92 },
  { name: 'Brand Identity', category: 'Design', level: 88 },
  { name: 'Communication', category: 'Soft Skills', level: 90 },
  { name: 'Analytics', category: 'Soft Skills', level: 75 },
];

export const PORTFOLIO_DATA: Project[] = [
  {
    id: '1',
    title: 'Summer Reading Club',
    category: 'Campaign',
    image: 'https://picsum.photos/seed/design1/800/1000',
    description: 'A comprehensive visual campaign for the annual library reading club, including posters, bookmarks, and social assets.',
    tags: ['Illustrator', 'Campaign', 'Print']
  },
  {
    id: '2',
    title: 'Modern Bookmarks',
    category: 'Print',
    image: 'https://picsum.photos/seed/design2/800/1000',
    description: 'Series of minimal bookmark designs featuring typographic play and institutional branding.',
    tags: ['InDesign', 'Typography']
  },
  {
    id: '3',
    title: 'City Digital Signage',
    category: 'Digital',
    image: 'https://picsum.photos/seed/design3/1000/600',
    description: 'High-visibility digital display graphics for municipal announcements.',
    tags: ['Photoshop', 'Digital Signage']
  },
  {
    id: '4',
    title: 'Eco-Brand Identity',
    category: 'Branding',
    image: 'https://picsum.photos/seed/design4/800/800',
    description: 'Full logo suite and brand guidelines for a local sustainability initiative.',
    tags: ['Branding', 'Vector']
  },
  {
    id: '5',
    title: 'Library Annual Report',
    category: 'Layout',
    image: 'https://picsum.photos/seed/design5/800/1000',
    description: '30-page annual report layout focusing on readability and data visualization.',
    tags: ['InDesign', 'Data Viz']
  },
  {
    id: '6',
    title: 'Web Interface Redesign',
    category: 'Digital',
    image: 'https://picsum.photos/seed/design6/1000/800',
    description: 'Concept UI for the catalog search interface aiming for better accessibility.',
    tags: ['UI/UX', 'Figma']
  }
];

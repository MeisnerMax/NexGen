export const siteConfig = {
  name: 'NexGen Consulting',
  legalName: 'Max Meisner',
  description:
    'NexGen Consulting automatisiert Prozesse und liefert digitale Lösungen, die KMU messbar entlasten.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nexgen-consulting.de',
  region: 'Oberfranken, Coburg, Bamberg',
  email: 'meisner@nexgen-consulting.de',
  phone: '+49 15259089486',
  address: {
    street: 'Webergasse 30',
    city: 'Coburg',
    zip: '96450',
    country: 'Deutschland',
  },
  bookingUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? 'https://app.cal.eu/max-meisner-3p3wma',
  googleBusinessProfile: process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL ?? '',
  social: {
    linkedin: 'https://www.linkedin.com/company/nexgen-consulting-meisner/',
    xing: '',
  },
};

export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navLinks: NavLink[] = [
  {
    label: 'Leistungen',
    href: '/leistungen',
    children: [
      { label: 'Prozessautomatisierung', href: '/leistungen/prozessautomatisierung' },
      { label: 'Digitale Tools & Individualsoftware', href: '/leistungen/individualsoftware' },
      { label: 'Website & SEO', href: '/leistungen/webdesign-seo' },
      { label: 'Microsoft 365 Automatisierung', href: '/leistungen/microsoft-365-automatisierung' },
      { label: 'KI-Chatbots', href: '/leistungen/ki-chatbots' },
    ],
  },
  { label: 'Cases', href: '/cases' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontakt', href: '/kontakt' },
];

export const footerLinks = {
  company: [
    { label: 'Leistungen', href: '/leistungen' },
    { label: 'Cases', href: '/cases' },
    { label: 'Blog', href: '/blog' },
    { label: 'Kontakt', href: '/kontakt' },
    { label: 'Digitalisierung Coburg', href: '/digitalisierung-coburg' },
  ],
  legal: [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
    { label: 'Cookies', href: '/cookies' },
  ],
};

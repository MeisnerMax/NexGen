export const siteConfig = {
  name: 'NexGen Consulting',
  /** Rechtlicher Name laut Gewerbeanmeldung (Einzelunternehmen). Marken: NexGen Consulting, NexAsset, NexHotels. */
  legalName: 'Meisner-Ventures',
  owner: 'Max Meisner',
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
  /** Kopfzeile im Ausklappmenü (Standard: Leistungsbereiche). */
  intro?: { eyebrow: string; text: string };
  children?: { label: string; href: string }[];
};

export const navLinks: NavLink[] = [
  {
    label: 'NexAsset',
    href: '/nexasset',
    intro: { eyebrow: 'Eigene Software', text: 'Immobilien, Hotels und Teams in einer Anwendung – ab 99 € im Monat, 14 Tage kostenlos testen.' },
    children: [
      { label: 'Überblick & Pakete', href: '/nexasset' },
      { label: 'Preise', href: '/nexasset/preise' },
      { label: 'Hausverwaltungssoftware', href: '/nexasset/hausverwaltungssoftware' },
      { label: 'Asset-Management-Software', href: '/nexasset/asset-management-software' },
      { label: 'Hotelsoftware', href: '/nexasset/hotelsoftware' },
      { label: '14 Tage kostenlos testen', href: 'https://nexasset.nexgen-consulting.de/registrieren' },
    ],
  },
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

/** Eigene Software NexAsset (Produktseite als Unterordner dieser Domain) – Themenseiten für die Suche verlinken. */
export const nexassetSiteUrl = process.env.NEXT_PUBLIC_NEXASSET_SITE_URL ?? 'https://nexgen-consulting.de/nexasset';

export const footerLinks = {
  software: [
    { label: 'NexAsset – Immobiliensoftware', href: nexassetSiteUrl },
    { label: 'NexAsset Preise', href: `${nexassetSiteUrl}/preise` },
    { label: 'Hausverwaltungssoftware', href: `${nexassetSiteUrl}/hausverwaltungssoftware` },
    { label: 'Asset-Management-Software', href: `${nexassetSiteUrl}/asset-management-software` },
    { label: 'Software für Projektentwicklung', href: `${nexassetSiteUrl}/projektentwicklung-software` },
    { label: 'Hotelsoftware', href: `${nexassetSiteUrl}/hotelsoftware` },
    { label: 'KI-Assistent für Immobilien', href: `${nexassetSiteUrl}/ki-assistent-immobilien` },
  ],
  company: [
    { label: 'NexHotels', href: 'https://hotels.nexgen-consulting.de' },
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

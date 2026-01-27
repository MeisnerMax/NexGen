export type RouteKeywords = {
  primary: string;
  secondary: string[];
};

export type KeywordMap = {
  primaryTopics: string[];
  localModifiers: string[];
  audiences: string[];
  routes: Record<string, RouteKeywords>;
  content: {
    blog: Record<string, string[]>;
    cases: Record<string, string[]>;
  };
};

export const keywordMap: KeywordMap = {
  primaryTopics: [
    'Prozessautomatisierung',
    'Digitale Tools & Software',
    'Website & SEO',
    'Microsoft 365',
    'KI & Chatbots',
  ],
  localModifiers: ['Coburg', 'Oberfranken', 'Bamberg'],
  audiences: ['KMU', 'Mittelstand', 'Handwerk', 'Dienstleister', 'produzierende Unternehmen'],
  routes: {
    '/': {
      primary: 'Prozessautomatisierung',
      secondary: [
        'Digitalisierung KMU',
        'Workflow Automatisierung',
        'Prozessoptimierung',
        'Coburg',
        'Oberfranken',
        'Microsoft 365 Automatisierung',
        'KI Chatbot KMU',
      ],
    },
    '/leistungen': {
      primary: 'Digitale Tools & Software',
      secondary: [
        'Prozessautomatisierung',
        'Microsoft 365 Automatisierung',
        'KI Chatbots',
        'Webdesign SEO',
        'KMU',
        'Coburg',
      ],
    },
    '/leistungen/prozessautomatisierung': {
      primary: 'Prozessautomatisierung',
      secondary: [
        'Workflow Automatisierung',
        'Prozessdigitalisierung',
        'KPI',
        'KMU',
        'Coburg',
        'Oberfranken',
      ],
    },
    '/leistungen/individualsoftware': {
      primary: 'Digitale Tools & Software',
      secondary: [
        'Individualsoftware KMU',
        'Datenhub',
        'Schnittstellen',
        'Prozessdigitalisierung',
        'Coburg',
      ],
    },
    '/leistungen/webdesign-seo': {
      primary: 'Website & SEO',
      secondary: [
        'Webdesign Coburg',
        'SEO Oberfranken',
        'B2B Website',
        'Leadgenerierung',
        'Core Web Vitals',
      ],
    },
    '/leistungen/microsoft-365-automatisierung': {
      primary: 'Microsoft 365',
      secondary: [
        'Power Automate',
        'SharePoint Workflows',
        'Teams Prozesse',
        'Excel Automatisierung',
        'KMU',
      ],
    },
    '/leistungen/ki-chatbots': {
      primary: 'KI & Chatbots',
      secondary: [
        'KI Chatbot KMU',
        'Wissensdatenbank',
        'Interner Support',
        'Datenschutz',
        'Coburg',
      ],
    },
    '/digitalisierung-coburg': {
      primary: 'Digitalisierung Coburg',
      secondary: [
        'Prozessautomatisierung Coburg',
        'KMU Coburg',
        'Oberfranken Digitalisierung',
        'Microsoft 365',
        'Webdesign SEO Coburg',
      ],
    },
    '/blog': {
      primary: 'Digitalisierung Wissen',
      secondary: [
        'Automatisierung KMU',
        'Workflow',
        'SEO',
        'Microsoft 365',
        'KI Chatbots',
      ],
    },
    '/blog/[slug]': {
      primary: 'Digitalisierung Wissen',
      secondary: ['Automatisierung', 'KMU', 'Workflow', 'SEO', 'Microsoft 365'],
    },
    '/cases': {
      primary: 'Case Studies',
      secondary: [
        'Prozessautomatisierung KMU',
        'Digitale Tools',
        'ROI',
        'Kundenprozesse',
        'Coburg',
      ],
    },
    '/cases/[slug]': {
      primary: 'Case Study',
      secondary: ['Prozessautomatisierung', 'Workflow', 'KMU', 'Digitalisierung'],
    },
    '/kontakt': {
      primary: 'Kontakt',
      secondary: ['Prozessanalyse', 'Digitalisierung Beratung', 'Coburg', 'KMU'],
    },
    '/termin': {
      primary: 'Prozessanalyse',
      secondary: ['Automatisierung Beratung', 'KMU', 'Coburg', 'Engpassanalyse'],
    },
    '/leadmagnet': {
      primary: 'Automatisierung Leitfaden',
      secondary: ['KPI', 'Priorisierung', 'KMU', 'Prozessanalyse'],
    },
    '/danke': {
      primary: 'Anfrage bestätigt',
      secondary: ['Kontakt', 'Prozessanalyse', 'KMU'],
    },
    '/impressum': {
      primary: 'Impressum',
      secondary: ['Anbieterkennzeichnung', 'Kontakt', 'Coburg'],
    },
    '/datenschutz': {
      primary: 'Datenschutz',
      secondary: ['DSGVO', 'Tracking', 'Cookies'],
    },
    '/cookies': {
      primary: 'Cookie Hinweise',
      secondary: ['Consent', 'Analytics', 'DSGVO'],
    },
  },
  content: {
    blog: {
      'automatisierung-kmu-roi': [
        'Prozessautomatisierung',
        'ROI',
        'KMU',
        'KPI',
        'Workflow',
      ],
      'digitalisierung-quick-wins-30-tage': [
        'Digitalisierung',
        'Quick Wins',
        'KMU',
        'Priorisierung',
        'Prozessanalyse',
      ],
      'lokale-seo-oberfranken': [
        'Lokale SEO',
        'Oberfranken',
        'Coburg',
        'Webdesign',
        'Sichtbarkeit',
      ],
      'website-anfragen-fehler': [
        'Website',
        'Anfragen',
        'B2B',
        'Positionierung',
        'Leadgenerierung',
      ],
      'workflow-automatisierung-n8n-make': [
        'Workflow Automatisierung',
        'n8n',
        'Make',
        'Schnittstellen',
        'Prozessautomatisierung',
      ],
    },
    cases: {
      'auftragsabwicklung-medienbrueche': [
        'Prozessautomatisierung',
        'Auftragsabwicklung',
        'CRM',
        'Buchhaltung',
        'Dienstleister',
      ],
      'projekttransparenz-servicebetrieb': [
        'Digitale Tools',
        'Projekttransparenz',
        'Servicebetrieb',
        'Workflow',
        'Handwerk',
      ],
      'qualitaetssicherung-pruefpfade': [
        'Qualitätssicherung',
        'Prozessdigitalisierung',
        'Produktion',
        'Prüfpfade',
        'Monitoring',
      ],
    },
  },
};

export type ServiceLink = {
  slug: string;
  label: string;
  keywords: string[];
};

export const serviceLinks: ServiceLink[] = [
  {
    slug: '/leistungen/prozessautomatisierung',
    label: 'Prozessautomatisierung',
    keywords: ['Automatisierung', 'Workflow', 'Prozess', 'KPI', 'ROI'],
  },
  {
    slug: '/leistungen/individualsoftware',
    label: 'Digitale Tools & Individualsoftware',
    keywords: ['Software', 'Tool', 'Portal', 'Datenhub', 'Schnittstellen'],
  },
  {
    slug: '/leistungen/webdesign-seo',
    label: 'Website & SEO',
    keywords: ['SEO', 'Webdesign', 'Website', 'Sichtbarkeit', 'Anfragen'],
  },
  {
    slug: '/leistungen/microsoft-365-automatisierung',
    label: 'Microsoft 365 Automatisierung',
    keywords: ['Microsoft 365', 'Power Automate', 'SharePoint', 'Teams', 'Excel'],
  },
  {
    slug: '/leistungen/ki-chatbots',
    label: 'KI-Chatbots',
    keywords: ['KI', 'Chatbot', 'Copilot', 'Wissensdatenbank', 'Support'],
  },
];

function normalizeKeyword(value: string) {
  return value.toLowerCase();
}

export function matchServiceForKeywords(keywords: string[]) {
  if (!keywords.length) return null;
  const normalized = keywords.map(normalizeKeyword);

  let best: { link: ServiceLink; score: number } | null = null;

  for (const link of serviceLinks) {
    const score = link.keywords.reduce((count, keyword) => {
      const normalizedKeyword = normalizeKeyword(keyword);
      return normalized.some((item) => item.includes(normalizedKeyword)) ? count + 1 : count;
    }, 0);

    if (!best || score > best.score) {
      best = { link, score };
    }
  }

  if (!best || best.score === 0) return null;
  return best.link;
}

export function getRouteKeywords(pathname: string): RouteKeywords | null {
  return keywordMap.routes[pathname] ?? null;
}

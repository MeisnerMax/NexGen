export type ServiceDetail = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  result: string;
  highlights: string[];
  forWhom: string[];
  useCases: string[];
  deliverables: string[];
  faq: { question: string; answer: string }[];
};

export const primaryServices: ServiceDetail[] = [
  {
    slug: 'prozessautomatisierung',
    title: 'Prozessautomatisierung',
    tagline: 'Zeit sparen, Fehler vermeiden, Transparenz gewinnen',
    summary:
      'Wir automatisieren die Prozesskette, die im Alltag am meisten Zeit kostet, damit Teams weniger manuelle Schritte haben und Fehler sinken.',
    result:
      'Weniger manuelle Schritte, klare Statusmeldungen und saubere Übergaben in Ihren Kernprozessen.',
    highlights: [
      'End-to-End Analyse mit Impact-Plan',
      'Automationen mit passenden Tools und Schnittstellen',
      'Monitoring, Alerts und klare Übergaben',
    ],
    forWhom: [
      'Geschäftsführer, Betriebsleiter, kaufmännische Leitung in KMU',
      'Teams mit wiederkehrenden Admin-Aufgaben',
      'Unternehmen mit gewachsenen Excel- und E-Mail-Prozessen',
    ],
    useCases: [
      'Angebot → Auftrag → Rechnung ohne Medienbrüche',
      'Datenübernahme zwischen CRM, ERP und Buchhaltung',
      'Transparente Statusmeldungen für Kundenprojekte',
      'Freigabe- und Prüfprozesse ohne Medienbrüche',
    ],
    deliverables: [
      'Priorisierte Prozesslandkarte',
      'Umgesetzte Workflows inkl. Tests',
      'Dokumentation, Schulung und Übergaben',
      'Betriebs- und Optimierungsplan',
    ],
    faq: [
      {
        question: 'Wie schnell sehen wir Ergebnisse?',
        answer:
          'Erste Automationen liefern meist nach wenigen Wochen Entlastung. Größere Prozessketten bauen wir schrittweise aus, damit der Betrieb stabil bleibt.',
      },
      {
        question: 'Welche Tools nutzt ihr?',
        answer:
          'Wir arbeiten mit einem passenden Mix aus No-Code, Low-Code und individuellen Integrationen. Entscheidend ist, dass es zu Ihren Systemen und Sicherheitsanforderungen passt.',
      },
    ],
  },
  {
    slug: 'individualsoftware',
    title: 'Tools & Software',
    tagline: 'Abläufe bündeln, Entscheidungen beschleunigen',
    summary:
      'Wenn Standardsoftware nicht passt, entwickeln wir schlanke Tools, die Ihren Prozess abbilden und Informationen zentral verfügbar machen.',
    result: 'Ein Werkzeug, das Teams wirklich nutzen, weil es den Alltag vereinfacht.',
    highlights: [
      'Prototypen zur schnellen Validierung',
      'Saubere Datenmodelle und Rollenrechte',
      'Integration in bestehende Systeme',
    ],
    forWhom: [
      'KMU mit individuellen Abläufen',
      'Teams, die Informationen verstreut verwalten',
      'Unternehmen, die auf skalierbare Prozesse wachsen wollen',
    ],
    useCases: [
      'Interne Portale für Projekte und Ressourcen',
      'Schnittstellen zwischen Fachabteilungen',
      'Qualitätssicherung und Prüfprotokolle',
      'Service- und Wartungsmanagement',
    ],
    deliverables: [
      'UX-Konzept mit klickbarem Prototyp',
      'Entwickelte Lösung inkl. Tests',
      'Schnittstellen und Datenmigration',
      'Onboarding und Betriebskonzept',
    ],
    faq: [
      {
        question: 'Wie stellt ihr sicher, dass das Tool angenommen wird?',
        answer:
          'Wir beziehen die späteren Nutzer früh ein, validieren Prototypen und liefern eine Bedienung, die sich an Ihren Alltag anpasst.',
      },
      {
        question: 'Können wir später erweitern?',
        answer:
          'Ja. Wir bauen modular, damit neue Funktionen ohne Komplettumbau ergänzt werden können.',
      },
    ],
  },
  {
    slug: 'webdesign-seo',
    title: 'Website & SEO',
    tagline: 'Websites, die sichtbar sind und Anfragen ausloesen',
    summary:
      'Wir bauen Websites, die Ihre Positionierung klar machen, Vertrauen schaffen und qualifizierte Anfragen liefern.',
    result: 'Klare Botschaft, starke Conversion und lokale Sichtbarkeit in Ihrer Region.',
    highlights: [
      'Positionierung und Copy, die verstanden wird',
      'Performance und Core Web Vitals im Fokus',
      'Lokale SEO für Oberfranken und DACH',
    ],
    forWhom: [
      'KMU, die online besser gefunden werden wollen',
      'Dienstleister mit erklärungsbedürftigen Angeboten',
      'Unternehmen mit wenig Zeit für Marketingsteuerung',
    ],
    useCases: [
      'Neue Website mit klaren CTAs',
      'SEO-Relaunch mit bestehendem Content',
      'Landingpages für konkrete Leistungen',
      'Content-Struktur für mehr Sichtbarkeit',
    ],
    deliverables: [
      'Informationsarchitektur und Designsystem',
      'Implementierte Website inkl. Tracking',
      'SEO-Setup und strukturierte Daten',
      'Content-Templates für spätere Pflege',
    ],
    faq: [
      {
        question: 'Übernehmt ihr Texte?',
        answer:
          'Ja, wir liefern professionelle Starttexte, die Ihr Angebot klar und ohne Marketing-Floskeln erklären.',
      },
      {
        question: 'Wie lange dauert ein Relaunch?',
        answer:
          'Je nach Umfang planen wir mehrere Wochen bis wenige Monate. Wir arbeiten in klaren Etappen, damit Sie jederzeit den Überblick behalten.',
      },
    ],
  },
];

export const focusAreas = [
  {
    title: 'Microsoft 365 Umfeld',
    summary:
      'Wir strukturieren Excel-, Teams- und SharePoint-Prozesse so, dass Informationen sauber fließen und Abläufe nachvollziehbar bleiben.',
    highlights: [
      'Excel- und Teams-Workflows konsolidieren',
      'SharePoint als Prozess- und Datenhub nutzen',
      'Power Automate für Übergaben und Freigaben',
    ],
  },
  {
    title: 'KI-Enablement & Chatbots',
    summary:
      'Wir machen KI im Alltag nutzbar: mit klaren Use Cases, Schulungen und sicheren Chatbots für Teams.',
    highlights: [
      'Use-Case-Workshops und Priorisierung',
      'Schulung zur sicheren Nutzung im Team',
      'Interne Chatbots mit Rollen- und Datenkonzept',
    ],
  },
];

export const extraServices = [
  'Microsoft 365 Umfeld (Excel, Teams, SharePoint)',
  'KI-Enablement & Chatbots',
  'Schulungen und Enablement für Teams',
  'Prozessdokumentation und Standards',
  'Monitoring und laufende Optimierung',
  'Support & Wartung',
];

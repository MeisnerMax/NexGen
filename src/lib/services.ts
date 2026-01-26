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
    tagline: 'Medienbrüche beseitigen, Durchlaufzeiten senken',
    summary:
      'Wenn Excel, E-Mail und mehrere Systeme den Alltag bremsen, automatisieren wir die Prozesskette mit klaren Verantwortlichkeiten und messbaren KPIs.',
    result:
      'Bearbeitungszeit pro Vorgang sinkt messbar, Status sind transparent und Übergaben laufen sauber.',
    highlights: [
      'Engpass-Analyse inkl. KPI-Definition',
      'Automationen zwischen CRM, ERP und Buchhaltung',
      'Monitoring, Alerts und klare Verantwortlichkeiten',
    ],
    forWhom: [
      'Geschäftsführer, Betriebsleiter, kaufmännische Leitung in KMU',
      'Teams mit hoher manueller Dateneingabe und Medienbrüchen',
      'Unternehmen, die verlässliche Status- und Freigabeprozesse brauchen',
    ],
    useCases: [
      'Angebot → Auftrag → Rechnung ohne Doppelerfassung',
      'Datenübernahme zwischen CRM, ERP und Buchhaltung',
      'Statusmeldungen und Übergaben in Kundenprojekten',
      'Freigabe- und Prüfprozesse mit klaren Verantwortlichen',
    ],
    deliverables: [
      'Priorisierte Prozesslandkarte mit Messpunkten',
      'Umgesetzte Workflows inkl. Tests',
      'Dokumentation, Schulung und Übergaben',
      'KPI-Reporting und Optimierungsplan',
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
    tagline: 'Insellösungen ersetzen, Entscheidungen beschleunigen',
    summary:
      'Wenn Standardsoftware nicht passt und Daten verteilt sind, entwickeln wir schlanke Tools, die Prozesse bündeln und Informationen zentral verfügbar machen.',
    result: 'Ein Werkzeug, das Teams nutzen, weil es Entscheidungen beschleunigt und Daten sauber hält.',
    highlights: [
      'Prototypen zur schnellen Validierung im Fachbereich',
      'Saubere Datenmodelle, Rollenrechte und Audit-Logik',
      'Integration in bestehende Systeme',
    ],
    forWhom: [
      'KMU mit individuellen Abläufen und vielen Ausnahmen',
      'Teams, die Informationen in Excel, E-Mail und Tools verteilen',
      'Unternehmen, die skalierbare Prozesse und klare Datenhaltung brauchen',
    ],
    useCases: [
      'Interne Portale für Projekte und Ressourcen',
      'Schnittstellen zwischen Fachabteilungen und Systemen',
      'Qualitätssicherung, Prüfprotokolle und Freigaben',
      'Service- und Wartungsmanagement mit Tickets',
    ],
    deliverables: [
      'UX-Konzept mit klickbarem Prototyp',
      'Produktive Lösung inkl. Tests',
      'Schnittstellen und Datenmigration',
      'Onboarding, Betriebskonzept und Weiterentwicklung',
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
    tagline: 'Gefunden werden, Vertrauen aufbauen, Anfragen planbar machen',
    summary:
      'Wenn Anfragen ausbleiben oder Ihre Website nicht klar positioniert ist, schärfen wir Nutzen, Struktur und Sichtbarkeit.',
    result: 'Klare Botschaft, messbare Anfragen und lokale Sichtbarkeit in Ihrer Region.',
    highlights: [
      'Positionierung und Copy, die sofort verstanden wird',
      'Performance und Core Web Vitals im Fokus',
      'Lokale SEO inkl. Structured Data & Google Business',
    ],
    forWhom: [
      'KMU, die online besser gefunden werden wollen',
      'Dienstleister mit erklärungsbedürftigen Angeboten',
      'Unternehmen, die planbare Anfragen statt Zufall wollen',
    ],
    useCases: [
      'Neue Website mit klaren CTAs und Messpunkten',
      'SEO-Relaunch mit bestehendem Content',
      'Landingpages für konkrete Leistungen',
      'Content-Struktur für lokale Sichtbarkeit',
    ],
    deliverables: [
      'Informationsarchitektur und Designsystem',
      'Implementierte Website inkl. Consent & Tracking',
      'SEO-Setup, Structured Data und lokale Signale',
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
      'Wir strukturieren Excel-, Teams- und SharePoint-Prozesse so, dass Informationen sauber fließen und Abläufe messbar nachvollziehbar bleiben.',
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

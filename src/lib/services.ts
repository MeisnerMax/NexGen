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
      'Wenn Excel, E-Mail und mehrere Systeme den Alltag bremsen, automatisieren wir die Prozesskette mit klaren Verantwortlichkeiten und messbaren KPIs. Fokus liegt auf stabilen Übergaben zwischen Vertrieb, Projekt und Buchhaltung.',
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
      {
        question: 'Wie integriert ihr bestehende Systeme?',
        answer:
          'Wir binden CRM, ERP und Fachanwendungen über vorhandene Schnittstellen oder schlanke Integrationen an, damit Daten ohne doppelte Pflege fließen.',
      },
      {
        question: 'Wie viel Zeit muss mein Team einplanen?',
        answer:
          'Wir strukturieren die Zusammenarbeit in kurzen Workshops und klaren Abnahmen. Der Aufwand bleibt planbar und konzentriert sich auf die Engpassbereiche.',
      },
    ],
  },
  {
    slug: 'individualsoftware',
    title: 'Tools & Software',
    tagline: 'Insellösungen ersetzen, Entscheidungen beschleunigen',
    summary:
      'Wenn Standardsoftware nicht passt und Daten verteilt sind, entwickeln wir schlanke Tools, die Prozesse bündeln und Informationen zentral verfügbar machen. Ziel ist eine klare Struktur, die im Alltag wirklich genutzt wird.',
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
      {
        question: 'Was passiert mit bestehenden Daten?',
        answer:
          'Wir planen die Migration früh, bereinigen Daten und definieren Verantwortlichkeiten, damit die neue Lösung mit sauberer Basis startet.',
      },
      {
        question: 'Wie sieht der Betrieb nach dem Launch aus?',
        answer:
          'Wir dokumentieren Betrieb, Zugriffe und Updates, damit Ihr Team sicher arbeiten kann. Optional übernehmen wir Wartung und Support.',
      },
    ],
  },
  {
    slug: 'webdesign-seo',
    title: 'Website & SEO',
    tagline: 'Gefunden werden, Vertrauen aufbauen, Anfragen planbar machen',
    summary:
      'Wenn Anfragen ausbleiben oder Ihre Website nicht klar positioniert ist, schärfen wir Nutzen, Struktur und Sichtbarkeit. Wir verbinden klares Messaging mit technischer SEO, damit Ihre Inhalte wirklich wirken.',
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
      {
        question: 'Was passiert mit bestehenden Inhalten?',
        answer:
          'Wir prüfen, was bereits gut funktioniert, übernehmen relevante Inhalte und optimieren Struktur, damit nichts verloren geht.',
      },
      {
        question: 'Wie schnell sehen wir SEO-Effekte?',
        answer:
          'Technische Verbesserungen wirken sofort. Sichtbarkeit baut sich danach Schritt für Schritt auf, je nach Wettbewerb und Content.',
      },
    ],
  },
];

export const focusServices: ServiceDetail[] = [
  {
    slug: 'microsoft-365-automatisierung',
    title: 'Microsoft 365 Automatisierung',
    tagline: 'Teams, SharePoint und Power Automate sauber verbinden',
    summary:
      'Wir stabilisieren Microsoft 365 Prozesse, damit Informationen konsistent fließen und Freigaben nachvollziehbar bleiben. Fokus liegt auf klaren Workflows in Teams, SharePoint und Excel.',
    result:
      'Besserer Überblick über Aufgaben, weniger manuelle Übergaben und klare Verantwortlichkeiten.',
    highlights: [
      'Power Automate Workflows für Freigaben und Übergaben',
      'SharePoint als Datenhub mit klarer Struktur',
      'Governance, Rollen und Berechtigungen',
    ],
    forWhom: [
      'Teams, die in Excel, Teams und E-Mail parallel arbeiten',
      'Abteilungen mit vielen Freigaben und Rückfragen',
      'KMU, die Microsoft 365 bereits nutzen, aber ohne klare Prozesse',
    ],
    useCases: [
      'Antrags- und Freigabeprozesse mit Status-Tracking',
      'Dokumentenlenkung und Versionierung in Teams',
      'SharePoint-Formulare für strukturierte Anfragen',
      'Projekt- und Aufgaben-Reporting in einem Überblick',
    ],
    deliverables: [
      'Prozessdesign mit Rollen und Verantwortlichkeiten',
      'Automatisierte Flows inkl. Tests',
      'Dokumentation und Schulung für Teams',
      'Betriebskonzept für nachhaltige Pflege',
    ],
    faq: [
      {
        question: 'Welche Microsoft 365 Lizenzen brauchen wir?',
        answer:
          'Wir arbeiten mit den vorhandenen Lizenzen und prüfen, welche Funktionen sinnvoll nutzbar sind. Erweiterungen empfehlen wir nur, wenn sie wirklich Mehrwert bringen.',
      },
      {
        question: 'Können wir bestehende Excel-Listen weiter nutzen?',
        answer:
          'Ja. Wir integrieren Excel dort, wo es sinnvoll ist, und sorgen für klare Regeln, damit Daten nicht doppelt gepflegt werden müssen.',
      },
      {
        question: 'Wie stellt ihr Sicherheit und Berechtigungen sicher?',
        answer:
          'Wir definieren Rollen, Zugriffsrechte und Datenflüsse gemeinsam mit Ihrem Team, damit Microsoft 365 sicher und nachvollziehbar bleibt.',
      },
      {
        question: 'Können wir schrittweise starten?',
        answer:
          'Ja. Wir starten mit dem größten Engpass und erweitern die Workflows, sobald die ersten Prozesse stabil laufen.',
      },
    ],
  },
  {
    slug: 'ki-chatbots',
    title: 'KI-Chatbots',
    tagline: 'Wissen verfügbar machen, Support entlasten',
    summary:
      'Wir bauen sichere KI-Chatbots, die internes Wissen oder Produktinfos strukturiert verfügbar machen. Datenschutz, klare Quellen und nachvollziehbare Antworten stehen dabei im Vordergrund.',
    result: 'Schnellere Antworten im Team, weniger Rückfragen und klarer Zugriff auf Wissen.',
    highlights: [
      'Use-Case-Workshops und Priorisierung',
      'Datenanbindung an Dokumente und Wissensbasen',
      'Governance für Quellen, Rollen und Monitoring',
    ],
    forWhom: [
      'Teams mit vielen Rückfragen zu Produkten oder Prozessen',
      'Unternehmen, die internes Wissen besser zugänglich machen wollen',
      'KMU, die KI sicher und praxisnah einsetzen möchten',
    ],
    useCases: [
      'Interner Support für Tools und Prozesse',
      'Onboarding neuer Mitarbeitender mit klaren Antworten',
      'Wissensbots für Service und Vertrieb',
      'FAQ-Chatbots für Kundenanfragen',
    ],
    deliverables: [
      'Use-Case-Definition und Dateninventur',
      'Chatbot-Prototyp mit klaren Quellen',
      'Rollout-Plan inkl. Schulung',
      'Monitoring und Optimierung',
    ],
    faq: [
      {
        question: 'Welche Daten nutzt der Chatbot?',
        answer:
          'Wir definieren gemeinsam, welche Dokumente oder Wissensquellen eingebunden werden und stellen sicher, dass nur freigegebene Inhalte genutzt werden.',
      },
      {
        question: 'Wie stellt ihr DSGVO-Konformität sicher?',
        answer:
          'Wir setzen auf klare Datenflüsse, Zugriffsrechte und dokumentierte Einwilligungen. Sensible Daten bleiben geschützt.',
      },
      {
        question: 'Können wir mit einem kleinen Pilot starten?',
        answer:
          'Ja. Wir bauen einen klar abgegrenzten Pilot, prüfen die Qualität der Antworten und skalieren danach.',
      },
      {
        question: 'Wie halten wir den Chatbot aktuell?',
        answer:
          'Wir definieren Verantwortlichkeiten für Content-Updates und liefern ein Monitoring, damit Antworten nachvollziehbar bleiben.',
      },
    ],
  },
];

export const focusAreas = [
  {
    title: 'Microsoft 365 Automatisierung',
    summary:
      'Wir strukturieren Excel-, Teams- und SharePoint-Prozesse so, dass Informationen sauber fließen und Abläufe messbar nachvollziehbar bleiben.',
    highlights: [
      'Excel- und Teams-Workflows konsolidieren',
      'SharePoint als Prozess- und Datenhub nutzen',
      'Power Automate für Übergaben und Freigaben',
    ],
    href: '/leistungen/microsoft-365-automatisierung',
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
    href: '/leistungen/ki-chatbots',
  },
];

export const extraServices = [
  'Schulungen und Enablement für Teams',
  'Prozessdokumentation und Standards',
  'Monitoring und laufende Optimierung',
  'Support & Wartung',
];

export const allServices = [...primaryServices, ...focusServices];

export function getServiceBySlug(slug: string) {
  return allServices.find((service) => service.slug === slug) ?? null;
}

import Head from "next/head";
import Link from "next/link";
import useReveal from "../hooks/useReveal";

const m365Points = [
  "Rollout-Planung, Governance und Sicherheitskonzepte",
  "Power Platform: Automatisierungen, Apps und Dashboards",
  "Schulungskonzepte für Teams, Planner, SharePoint & Co.",
  "Integration externer Systeme und Datenquellen",
  "Managed Adoption & kontinuierliches Enablement"
];

const branchenPoints = [
  "Anforderungs-Workshops und Tool-Evaluierung",
  "Prototyping & MVP-Umsetzung für Fachabteilungen",
  "Schnittstellen- und Datenmodell-Design",
  "Change Management und Team-Coaching",
  "Success-Monitoring mit KPIs und Reporting"
];

export default function Loesungen() {
  useReveal();

  return (
    <>
      <Head>
        <title>Lösungen – NexGen Consulting</title>
        <meta
          name="description"
          content="Microsoft 365 Einführung und branchenspezifische Softwarelösungen von NexGen Consulting. Strategische Beratung, Umsetzung und Enablement aus einer Hand."
        />
        <meta property="og:title" content="Lösungen – NexGen Consulting" />
        <meta
          property="og:description"
          content="Digitale Lösungen für Microsoft 365 und branchenspezifische Anforderungen. NexGen Consulting begleitet von der Strategie bis zum Roll-out."
        />
        <meta property="og:url" content="https://nexgen-consulting.de/loesungen" />
        <meta property="og:type" content="website" />
      </Head>

      <main>
        <section className="py-16 sm:py-20 md:py-24 bg-brand-primary text-white">
          <div className="container max-w-screen-xl px-6 lg:px-8 space-y-6" data-reveal>
            <p className="uppercase tracking-widest text-brand-accent font-semibold">Lösungen & Umsetzung</p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold">
              Digitale Lösungen, die Prozesse vereinfachen und Teams stärken
            </h1>
            <p className="text-lg text-surface-light/90 max-w-3xl">
              Ob Microsoft 365 oder branchenspezifische Software – wir sorgen dafür, dass Technologie Ihre Strategie voranbringt. Vom ersten Workshop bis zur laufenden Optimierung begleiten wir Sie hands-on.
            </p>
          </div>
        </section>

        <section id="m365" className="py-16 sm:py-20 md:py-24 bg-surface-light">
          <div className="container max-w-screen-lg px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,1fr),minmax(0,1fr)] lg:items-center">
            <div data-reveal>
              <h2 className="text-3xl font-heading font-semibold text-brand-primary mb-4">Microsoft 365 Lösungen</h2>
              <p className="text-brand-primary/80 leading-relaxed mb-6">
                Wir helfen Ihnen, Microsoft 365 als Produktivitätsplattform zu etablieren – mit klaren Governance-Regeln, Automatisierung und engem Enablement der Teams.
              </p>
              <Link href="/kontakt" className="btn-primary inline-flex text-base sm:text-lg">
                Jetzt Erstberatung sichern
              </Link>
            </div>
            <div data-reveal className="rounded-brand-2xl bg-white shadow-card ring-1 ring-brand-primary/10 p-8 space-y-4">
              <h3 className="text-xl font-heading font-semibold text-brand-primary">
                Unsere Schwerpunkte
              </h3>
              <ul className="space-y-3 text-brand-primary/80 leading-relaxed">
                {m365Points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-accent" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="branchen" className="py-16 sm:py-20 md:py-24 bg-brand-primary text-white">
          <div className="container max-w-screen-lg px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,1fr),minmax(0,1fr)] lg:items-center">
            <div data-reveal className="rounded-brand-2xl bg-brand-primary/70 ring-1 ring-white/10 p-8 space-y-4 order-last lg:order-first">
              <h3 className="text-xl font-heading font-semibold">Branchenspezifische Lösungen</h3>
              <ul className="space-y-3 text-surface-light/90 leading-relaxed">
                {branchenPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-accent" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal>
              <h2 className="text-3xl font-heading font-semibold mb-4">Branchenspezifische Software</h2>
              <p className="text-surface-light/80 leading-relaxed mb-6">
                Gemeinsam mit Fachbereichen definieren wir Anforderungen, evaluieren Tools, bauen Prototypen und begleiten die Einführung – inklusive Change Management und Schulungsprogramm.
              </p>
              <Link href="/kontakt" className="btn-secondary inline-flex text-base sm:text-lg">
                Projekt anfragen
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

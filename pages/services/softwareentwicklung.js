import Head from "next/head";
import Link from "next/link";
import Chatbot from "../../components/Chatbot";
import useReveal from "../../hooks/useReveal";

const highlights = [
  "Analyse bestehender Systeme und Schnittstellen",
  "Prototyping & MVP-Entwicklung mit schnellen Iterationen",
  "Automatisierung manueller Prozesse (z. B. Workflows, Reporting)",
  "Integration von Drittanbieter-APIs und internen Datenquellen",
  "Testing, Qualitätssicherung und dokumentierte Übergabe",
  "Enablement & Support für Ihr Team nach dem Launch",
];

const stacks = [
  "Web-Apps (React/Next.js, Node.js, .NET, Python)",
  "Mobile Apps (React Native, Swift, Kotlin)",
  "Cloud & Infrastruktur (Azure, AWS, Vercel, Docker)",
  "Datenbanken & Schnittstellen (SQL/NoSQL, GraphQL, REST)",
  "Automatisierung & Workflow-Engines (Power Platform, n8n, Make)",
];

export default function Softwareentwicklung() {
  useReveal();

  return (
    <>
      <Head>
        <title>Softwareentwicklung – NexGen Consulting</title>
        <meta
          name="description"
          content="Individuelle Softwareentwicklung von NexGen Consulting: Von der Prozessanalyse über Prototyping bis zum skalierbaren Roll-out."
        />
        <meta property="og:title" content="Softwareentwicklung – NexGen Consulting" />
        <meta
          property="og:description"
          content="Digitale Lösungen für Ihren Prozess: NexGen Consulting entwickelt und betreibt individuelle Software und Automatisierungen."
        />
        <meta property="og:url" content="https://nexgen-consulting.de/services/softwareentwicklung" />
      </Head>

      <Chatbot />

      <main>
        <section className="py-16 sm:py-20 md:py-24 bg-brand-primary text-white">
          <div className="container max-w-screen-xl px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,1fr),minmax(0,1fr)] lg:items-center" data-reveal>
            <div>
              <p className="uppercase tracking-widest text-brand-accent font-semibold mb-4">Software & Automatisierung</p>
              <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
                Individuelle Software, die Prozesse vereinfacht
              </h1>
              <p className="text-lg text-surface-light/90 leading-relaxed mb-8">
                Von der Idee bis zum Go-Live: Wir entwerfen, entwickeln und betreiben maßgeschneiderte digitale Lösungen, die perfekt zu Ihren Abläufen passen – mit klaren KPIs und enger Zusammenarbeit mit Ihrem Team.
              </p>
              <Link href="/kontakt" className="btn-primary inline-flex text-base sm:text-lg">
                Projekt anfragen
              </Link>
            </div>
            <div className="rounded-brand-2xl bg-brand-primary/70 ring-1 ring-white/10 shadow-card p-8 space-y-4" data-reveal>
              <h2 className="text-xl font-heading font-semibold">Was Sie erwartet</h2>
              <ul className="space-y-3 text-white/80 leading-relaxed">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 md:py-24 bg-surface-light">
          <div className="container max-w-screen-xl px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6" data-reveal>
              <h2 className="text-3xl font-heading font-semibold text-brand-primary">Entwicklung mit klarem Fahrplan</h2>
              <p className="text-brand-primary/80 leading-relaxed">
                Wir starten mit einer gemeinsamen Prozess- und Systemanalyse, validieren Lösungsansätze mit Prototypen und entwickeln anschließend in kurzen Iterationen. Transparente Roadmaps, Reviews und offene Kommunikation sind für uns selbstverständlich.
              </p>
              <p className="text-brand-primary/80 leading-relaxed">
                Unsere Teams übernehmen auf Wunsch den Betrieb inklusive Monitoring, Security und kontinuierlicher Weiterentwicklung – modular und skalierbar.
              </p>
            </div>
            <div className="space-y-6" data-reveal>
              <div className="rounded-brand-xl bg-white shadow-card ring-1 ring-brand-primary/10 p-6">
                <h3 className="text-lg font-heading font-semibold text-brand-primary mb-3">Technologie-Stack & Expertise</h3>
                <ul className="space-y-2 text-brand-primary/75 leading-relaxed">
                  {stacks.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-accent" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-brand-xl bg-brand-primary text-white shadow-card ring-1 ring-white/10 p-6">
                <h3 className="text-lg font-heading font-semibold mb-3">So arbeiten wir</h3>
                <p className="text-white/80 leading-relaxed">
                  Agile Delivery, enge Abstimmung mit Product Ownern und klare Dokumentation – kombiniert mit Enablement ihres Teams, damit Übergaben nahtlos funktionieren.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 md:py-24 bg-brand-primary text-white">
          <div className="container max-w-screen-lg px-6 lg:px-8 text-center space-y-6" data-reveal>
            <h2 className="text-3xl font-heading font-semibold">Bereit für Ihren nächsten Software-Release?</h2>
            <p className="text-surface-light/85 leading-relaxed max-w-2xl mx-auto">
              Egal ob MVP, komplexes Intranet oder integrierte Plattform – wir unterstützen Sie bei Konzeption, Entwicklung und Betrieb. Sichern Sie sich jetzt einen Termin für eine unverbindliche Erstberatung.
            </p>
            <Link href="/kontakt" className="btn-secondary inline-flex text-base sm:text-lg">
              Erstgespräch buchen
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

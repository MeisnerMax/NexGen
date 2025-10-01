import Head from "next/head";
import Link from "next/link";

const offerings = [
  "Digitalstrategie & Roadmapping",
  "Prozessanalyse und Automatisierungspotenziale",
  "Technologie- & Toolauswahl",
  "Fördermittel- & Budgetberatung",
  "Change Management & Schulungskonzepte",
  "Marketing- & Go-to-Market-Unterstützung"
];

const steps = [
  {
    title: "Kennenlernen",
    description: "Kostenloses Erstgespräch, um Ziele, Status quo und Erwartungen zu verstehen."
  },
  {
    title: "Analyse & Konzept",
    description: "Gemeinsam priorisieren wir Maßnahmen, definieren KPIs und erstellen eine praxisnahe Roadmap."
  },
  {
    title: "Umsetzung & Begleitung",
    description: "Wir koordinieren Umsetzungspartner, coachen Ihr Team und stellen nachhaltige Wirkung sicher."
  }
];

export default function Beratung() {
  return (
    <>
      <Head>
        <title>Beratung – NexGen Consulting</title>
        <meta
          name="description"
          content="Strategische Beratung für Digitalisierung, Automatisierung und Markenauftritt. NexGen Consulting begleitet mittelständische Unternehmen von der Idee bis zur Umsetzung."
        />
      </Head>

      <section className="py-16 sm:py-20 md:py-24 bg-brand-primary text-white">
        <div className="container max-w-screen-xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="uppercase tracking-wide text-brand-accent font-semibold mb-4">Beratung & Strategie</p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
              Digitalisierung mit klarer Richtung und messbarem Mehrwert
            </h1>
            <p className="text-lg text-surface-light/90 leading-relaxed mb-10">
              Wir übersetzen Unternehmensziele in digitale Strategien: strukturiert, transparent und nah am Alltag Ihres Teams. Von der ersten Idee bis zur erfolgreichen Einführung begleiten wir Sie als Sparringspartner und Projektmotor.
            </p>
            <Link
              href="/kontakt"
              className="btn-primary text-base sm:text-lg"
            >
              Jetzt kostenlose Erstberatung anfordern
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-brand-primary/80">
        <div className="container max-w-screen-xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-heading font-semibold text-white mb-6">
                Unsere Beratungsleistungen im Überblick
              </h2>
              <p className="text-white leading-relaxed mb-8">
                Jede Zusammenarbeit startet mit einem klaren Blick auf Prozesse, Menschen und Ziele. Daraus entwickeln wir individuelle Handlungsempfehlungen, die schnell Wirkung zeigen und Zukunftssicherheit schaffen.
              </p>
            </div>
            <ul className="bg-brand-primary backdrop-blur rounded-brand-2xl shadow-card ring-1 ring-brand-primary/5 p-8 space-y-4">
              {offerings.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white">
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent font-semibold">
                    •
                  </span>
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-brand-primary text-white">
        <div className="container max-w-screen-xl px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-semibold mb-10">So läuft unsere Zusammenarbeit</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="group rounded-brand-2xl bg-brand-primary/70 ring-1 ring-white/10 p-6 transition duration-300 ease-brand hover:-translate-y-1 hover:bg-brand-primary/60"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent text-white text-lg font-semibold mb-4">
                  {index + 1}
                </span>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-surface-light/80 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-brand-primary/80">
        <div className="container max-w-screen-xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-semibold text-white mb-4">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-white leading-relaxed mb-8 max-w-2xl mx-auto">
            Lassen Sie uns in einem unverbindlichen Erstgespräch Potenziale identifizieren und priorisieren. Gemeinsam schaffen wir die Grundlage für eine digitale Roadmap, die Ihr Team mitnimmt.
          </p>
          <Link href="/kontakt" className="btn-primary inline-flex text-white sm:text-lg">
            Jetzt kostenlose Erstberatung anfordern
          </Link>
        </div>
      </section>
    </>
  );
}

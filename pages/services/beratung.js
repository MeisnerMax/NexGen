import Head from "next/head";
import Link from "next/link";

const offerings = [
  "Digitale Strategie & Fahrplan",
  "Abläufe prüfen und automatisieren",
  "Technologie- & Toolauswahl",
  "Fördermittel- & Budgetberatung",
  "Change & Schulung für Teams",
  "Marketing‑Unterstützung",
];

const steps = [
  {
    title: "Kennenlernen",
    description: "Kostenloses Erstgespräch – Ziele, aktueller Stand und Erwartungen klären.",
  },
  {
    title: "Plan",
    description: "Maßnahmen priorisieren, klare Ziele festlegen und eine einfache Roadmap erstellen.",
  },
  {
    title: "Umsetzung",
    description: "Partner steuern, Team begleiten, Ergebnisse sichern – ohne Fachsprache.",
  },
];

export default function Beratung() {
  return (
    <>
      <Head>
        <title>Beratung - NexGen Consulting</title>
        <meta
          name="description"
          content="Strategische Beratung für Digitalisierung, Automatisierung und Markenauftritt. Verständlich, pragmatisch, mit klaren Schritten."
        />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Digitalberatung in Coburg",
          serviceType: "Digitalberatung",
          areaServed: "Coburg, Germany",
          provider: { "@type": "LocalBusiness", name: "Nexgen Consulting", url: "https://nexgen-consulting.de", telephone: "+49 1525 9089486", address: { "@type": "PostalAddress", addressLocality: "Coburg", addressCountry: "DE" } },
          url: "https://nexgen-consulting.de/digitalberatung-coburg"
        }) }} />
        <link rel="canonical" href="https://nexgen-consulting.de/digitalberatung-coburg" />
      </Head>

      <section className="py-16 sm:py-20 md:py-24 bg-brand-primary text-white">
        <div className="container max-w-screen-xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="uppercase tracking-wide text-brand-accent font-semibold mb-4">Beratung & Strategie</p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
              Digitalisierung – klar und machbar
            </h1>
            <p className="text-lg text-surface-light/90 leading-relaxed mb-10">
              Wir übersetzen Ihre Ziele in einfache Schritte. Ohne Fachchinesisch, eng am Alltag Ihres Teams. Vom ersten Gespräch bis zur Einführung.
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

      <section className="py-16 sm:py-20 md:py-24 bg-brand-primary">
        <div className="container max-w-screen-xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-heading font-semibold text-white mb-6">
                Unsere Leistungen im Überblick
              </h2>
              <p className="text-white leading-relaxed mb-8">
                Jede Zusammenarbeit startet mit einem Blick auf Prozesse, Menschen und Ziele. Daraus entstehen konkrete Empfehlungen, die schnell Wirkung zeigen.
              </p>
            </div>
            <ul className="rounded-brand-2xl border border-white/10 bg-gradient-to-br from-indigo-600/40 via-white/10 to-cyan-400/40 transition-all duration-300 group-hover:from-indigo-500/60 group-hover:to-cyan-400/60 p-8 shadow-xl backdrop-blur-md space-y-4">
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
                className="group rounded-brand-2xl bg-gradient-to-br from-indigo-600/40 via-white/10 to-cyan-400/40 transition-all duration-300 group-hover:from-indigo-500/60 group-hover:to-cyan-400/60 ring-1 ring-white/10 p-6 transition duration-300 ease-brand hover:-translate-y-1 hover:bg-brand-primary/60"
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

      <section className="py-16 sm:py-20 md:py-24 bg-brand-primary">
        <div className="container max-w-screen-xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-semibold text-white mb-4">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-white leading-relaxed mb-8 max-w-2xl mx-auto">
            In einem kurzen Erstgespräch klären wir Potenziale und Prioritäten – und legen die nächsten Schritte fest.
          </p>
          <Link href="/kontakt" className="inline-flex rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400 px-6 py-3 font-semibold text-white shadow-lg transition hover:brightness-110">
            Jetzt kostenlose Erstberatung anfordern
          </Link>
        </div>
      </section>
    </>
  );
}


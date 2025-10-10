import Head from "next/head";
import { useRouter } from "next/router";

const m365Points = [
  "Rollout-Planung, Governance und Sicherheitskonzepte",
  "Power Platform: Automatisierungen, Apps und Dashboards",
  "Schulungskonzepte für Teams, Planner, SharePoint & Co.",
  "Integration externer Systeme und Datenquellen",
  "Managed Adoption & kontinuierliches Enablement",
];

const branchenPoints = [
  "Anforderungs-Workshops und Tool-Evaluierung",
  "Prototyping & MVP-Umsetzung für Fachabteilungen",
  "Schnittstellen- und Datenmodell-Design",
  "Change Management und Team-Coaching",
  "Success-Monitoring mit KPIs und Reporting",
];

export default function Loesungen() {
  const router = useRouter();
  const redirectToContact = (message) => router.push(`/kontakt?message=${encodeURIComponent(message)}`);

  return (
    <>
      <Head>
        <title>Lösungen - NexGen Consulting</title>
        <meta name="description" content="Microsoft 365 Einführung und branchenspezifische Softwarelösungen – Strategie, Umsetzung und Enablement aus einer Hand." />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://nexgen-consulting.de/microsoft365-loesungen-coburg" />
        <link rel="canonical" href="https://nexgen-consulting.de/microsoft365-loesungen-coburg" />
        <meta property="og:title" content="Lösungen - NexGen Consulting" />
        <meta property="og:description" content="Digitale Lösungen für Microsoft 365 und branchenspezifische Anforderungen. Von der Roadmap bis zum Roll‑out." />
        <meta property="og:type" content="website" />
      </Head>

      <main>
        {/* Hero */}
        <header className="relative overflow-hidden bg-brand-primary text-white">
          <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
            <div className="absolute -top-24 -right-16 h-[38rem] w-[38rem] rounded-full bg-indigo-600/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-[34rem] w-[34rem] rounded-full bg-cyan-400/30 blur-3xl" />
          </div>
          <div className="container max-w-screen-xl px-6 lg:px-8 py-20 md:py-28 space-y-3">
            <p className="uppercase tracking-widest text-cyan-300 font-semibold">Lösungen & Umsetzung</p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold">Digitale Lösungen, die Prozesse vereinfachen</h1>
            <p className="text-base md:text-lg text-white/80 max-w-3xl">Microsoft 365, Power Platform und branchenspezifische Software – von der Roadmap bis zum Roll‑out, mit Enablement für Ihr Team.</p>
          </div>
        </header>

        {/* Microsoft 365 */}
        <section id="m365" className="py-16 sm:py-20 md:py-24 bg-brand-primary">
          <div className="container max-w-screen-lg px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,1fr),minmax(0,1fr)] lg:items-center">
            <div>
              <h2 className="text-3xl font-heading font-semibold text-white mb-4">Microsoft 365 Lösungen</h2>
              <p className="text-white leading-relaxed mb-6">Wir helfen Ihnen, Microsoft 365 als Produktivitätsplattform zu etablieren – mit klaren Governance‑Regeln, Automatisierung und engem Enablement der Teams.</p>
              <button onClick={() => redirectToContact('Microsoft 365 Lösungen')} className="inline-flex rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400 px-6 py-3 font-semibold text-white shadow-lg transition hover:brightness-110">Jetzt Erstberatung sichern</button>
            </div>
            <div className="rounded-brand-2xl border border-white/10 bg-gradient-to-br from-indigo-600/40 via-white/10 to-cyan-400/40 transition-all duration-300 group-hover:from-indigo-500/60 group-hover:to-cyan-400/60 p-8 shadow-xl backdrop-blur-md space-y-4">
              <h3 className="text-xl font-heading font-semibold text-white">Unsere Schwerpunkte</h3>
              <ul className="space-y-3 text-white leading-relaxed">
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

        {/* Branchenlösungen */}
        <section id="branchen" className="py-16 sm:py-20 md:py-24 bg-brand-primary text-white">
          <div className="container max-w-screen-lg px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,1fr),minmax(0,1fr)] lg:items-center">
            <div className="rounded-brand-2xl bg-gradient-to-br from-indigo-600/40 via-white/10 to-cyan-400/40 transition-all duration-300 group-hover:from-indigo-500/60 group-hover:to-cyan-400/60 p-8 space-y-4 order-last lg:order-first">
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
            <div>
              <h2 className="text-3xl font-heading font-semibold mb-4">Branchenspezifische Software</h2>
              <p className="text-white/80 leading-relaxed mb-6">Gemeinsam mit Fachbereichen definieren wir Anforderungen, evaluieren Tools, bauen Prototypen und begleiten die Einführung – inklusive Change Management und Schulungsprogramm.</p>
              <button onClick={() => redirectToContact('Branchenspezifische Software')} className="inline-flex rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400 px-6 py-3 font-semibold text-white shadow-lg transition hover:brightness-110">Projekt anfragen</button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-brand-primary text-white">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-heading font-semibold mb-3">Lösungen, die wirken – bereit?</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Kurzes Erstgespräch, klare Roadmap, schneller Roll‑out.</p>
            <a href="/kontakt" className="mt-6 inline-flex rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400 px-6 py-3 font-semibold text-white shadow-lg transition hover:brightness-110">Jetzt Erstgespräch vereinbaren</a>
          </div>
        </section>
      </main>
    </>
  );
}


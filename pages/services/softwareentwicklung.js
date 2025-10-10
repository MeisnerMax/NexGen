import Head from "next/head";
import Link from "next/link";
import Chatbot from "../../components/Chatbot";
import useReveal from "../../hooks/useReveal";
import { useRouter } from "next/router";

const highlights = [
  "Kurzer Blick auf Ihre aktuellen Systeme",
  "Prototyp in wenigen Wochen (MVP)",
  "Abläufe vereinfachen und automatisieren",
  "Schnittstellen zu Ihren Tools (API)",
  "Tests, Übergabe und kurze Doku",
  "Begleitung und Hilfe nach dem Start",
];

const stacks = [
  "Web-Apps (React/Next.js, Node.js, .NET, Python)",
  "Mobile Apps (React Native, Swift, Kotlin)",
  "Cloud (Azure, AWS, Vercel, Docker)",
  "Datenbanken (SQL/NoSQL, GraphQL, REST)",
  "Automatisierung (Power Platform, n8n, Make)",
];

export default function Softwareentwicklung() {
  useReveal();
  const router = useRouter();
  const redirectToContact = (message) => {
    router.push(`/kontakt?message=${encodeURIComponent(message)}`);
  };

  return (
    <>
      <Head>
        <title>Softwareentwicklung - NexGen Consulting</title>
        <meta
          name="description"
          content="Individuelle Software, die Ihren Alltag leichter macht – von der Idee bis zum Start. Klar geplant, verständlich erklärt."
        />
        <meta property="og:title" content="Softwareentwicklung - NexGen Consulting" />
        <meta
          property="og:description"
          content="Digitale Lösungen für Ihre Abläufe – entwickeln, automatisieren, integrieren."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://nexgen-consulting.de/softwareentwicklung-coburg" />
        <link rel="canonical" href="https://nexgen-consulting.de/softwareentwicklung-coburg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Softwareentwicklung in Coburg",
          serviceType: "Softwareentwicklung",
          areaServed: "Coburg, Germany",
          provider: { "@type": "LocalBusiness", name: "Nexgen Consulting", url: "https://nexgen-consulting.de", telephone: "+49 1525 9089486", address: { "@type": "PostalAddress", addressLocality: "Coburg", addressCountry: "DE" } },
          url: "https://nexgen-consulting.de/softwareentwicklung-coburg"
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Nexgen Consulting",
          url: "https://nexgen-consulting.de",
          telephone: "+49 1525 9089486",
          address: { "@type": "PostalAddress", addressLocality: "Coburg", addressCountry: "DE" }
        }) }} />
      </Head>

      <Chatbot />

      <main>
        {/* Hero */}
        <header className="relative overflow-hidden bg-brand-primary text-white">
          <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
            <div className="absolute -top-24 -right-16 h-[38rem] w-[38rem] rounded-full bg-indigo-600/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-[34rem] w-[34rem] rounded-full bg-cyan-400/30 blur-3xl" />
          </div>
          <div className="container max-w-screen-xl px-6 lg:px-8 py-20 md:py-28 grid gap-10 lg:grid-cols-[minmax(0,1fr),minmax(0,1fr)] lg:items-center" data-reveal>
            <div>
              <p className="uppercase tracking-widest text-cyan-300 font-semibold mb-4">Software & Automatisierung</p>
              <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
                Software, die Arbeit abnimmt
              </h1>
              <p className="text-lg text-surface-light/90 leading-relaxed mb-8">
                Wir planen und bauen Lösungen, die zu Ihren Abläufen passen – verständlich, Schritt für Schritt und mit klarem Nutzen.
              </p>
              <button onClick={() => redirectToContact('Softwareentwicklung Projekt')} className="mt-6 inline-flex rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400 px-6 py-3 font-semibold text-white shadow-lg transition hover:brightness-110">Projekt anfragen</button>
            </div>
            <div className="rounded-brand-2xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-md space-y-4" data-reveal>
              <h2 className="text-xl font-heading font-semibold">Was Sie erwartet</h2>
              <ul className="space-y-3 text-white/80 leading-relaxed">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-accent" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </header>

        {/* Tech stack */}
        <section className="py-16 sm:py-20 md:py-24 bg-brand-primary text-white">
          <div className="container max-w-screen-xl px-6 lg:px-8 grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="rounded-brand-2xl border border-white/10 bg-gradient-to-br from-indigo-600/40 via-white/10 to-cyan-400/40 transition-all duration-300 group-hover:from-indigo-500/60 group-hover:to-cyan-400/60 p-8 shadow-xl backdrop-blur-md" data-reveal>
              <h2 className="text-xl font-heading font-semibold">Technologien</h2>
              <ul className="mt-4 space-y-3 text-white/80 leading-relaxed">
                {stacks.map((s) => (
                  <li key={s} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-accent" aria-hidden />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4" data-reveal>
              <h3 className="text-2xl font-heading font-semibold">So arbeiten wir</h3>
              <p className="text-white/80 leading-relaxed">Kurz sprechen, kleines Konzept, schneller Prototyp. Danach entscheiden wir gemeinsam die nächsten Schritte.</p>
              <p className="text-white/80 leading-relaxed">Auf Wunsch übernehmen wir Betrieb und Weiterentwicklung – mit festen Ansprechpartnern.</p>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-8 md:py-12 bg-brand-primary text-white">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-2">Engagement‑Pakete</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Fokussiert starten – vom MVP‑Sprint bis Managed Development.</p>
          </div>
          <div className="container mx-auto px-6 lg:px-8 mt-8 grid gap-6 md:grid-cols-3">
            {[
              { name: 'MVP‑Sprint', msg: 'MVP Sprint', perks: ['2–4 Wochen','Prototyp / MVP','Feedback & Fahrplan'] },
              { name: 'Automation', msg: 'Automation Sprint', perks: ['Use‑Case wählen','Workflow & Integration','Messbare Effekte'] },
              { name: 'Managed Dev', msg: 'Managed Development', perks: ['Team‑Erweiterung','Betrieb & Monitoring','Weiterentwicklung'] },
            ].map((p) => (
              <button key={p.name} onClick={() => redirectToContact(p.msg)} className="group text-left">
                <div className="relative rounded-brand-2xl p-[1px] bg-gradient-to-br from-indigo-600/40 via-white/10 to-cyan-400/40 transition-all duration-300 group-hover:from-indigo-500/60 group-hover:to-cyan-400/60">
                  <div className="rounded-brand-2xl h-full w-full bg-white/5 ring-1 ring-white/10 backdrop-blur-md p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{p.name}</h3>
                                          </div>
                    <ul className="mt-2 space-y-2 text-sm text-white/80">
                      {p.perks.map((perk) => (
                        <li key={perk} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden />
                          <span>{perk}</span>
                        </li>
                      ))}
                    </ul>
                    <span className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400 px-5 py-2.5 font-semibold text-white shadow-lg transition group-hover:brightness-110">Anfragen</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="py-16 sm:py-20 md:py-24 bg-brand-primary text-white">
          <div className="container max-w-screen-lg px-6 lg:px-8 text-center space-y-6" data-reveal>
            <h2 className="text-3xl font-heading font-semibold">Bereit für den nächsten Schritt?</h2>
            <p className="text-surface-light/85 leading-relaxed max-w-2xl mx-auto">
              Ob Prototyp, internes Tool oder Plattform – wir helfen bei Konzept, Entwicklung und Betrieb. Sichern Sie sich jetzt ein unverbindliches Erstgespräch.
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


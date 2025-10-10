import Head from "next/head";
import Link from "next/link";
import Chatbot from "../../components/Chatbot";
import useReveal from "../../hooks/useReveal";
import { useRouter } from "next/router";

const deliverables = [
  "Logo-Set mit klarer Anwendung",
  "Farben- und Schriften-System",
  "Kompakter Brand-Guide (PDF)",
  "Vorlagen für Office & Social Media",
  "Icon-Set und Basiskomponenten",
  "Rebranding-Plan bei Bedarf",
];

export default function Firmenidentitaet() {
  useReveal();
  const router = useRouter();
  const redirectToContact = (message) => {
    router.push(`/kontakt?message=${encodeURIComponent(message)}`);
  };

  return (
    <>
      <Head>
        <title>Firmenidentität & Branding - NexGen Consulting</title>
        <meta
          name="description"
          content="Ein klares Erscheinungsbild für Ihr Unternehmen: Logo, Farben, Vorlagen und ein verständlicher Brand‑Guide – einfach nutzbar für Ihr Team."
        />
        <meta property="og:title" content="Firmenidentität & Branding - NexGen Consulting" />
        <meta
          property="og:description"
          content="Wir entwickeln Branding, das im Alltag funktioniert – mit Vorlagen, die Ihr Team sofort einsetzen kann."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://nexgen-consulting.de/branding-coburg" />
        <link rel="canonical" href="https://nexgen-consulting.de/branding-coburg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Branding & Firmenidentität in Coburg",
              serviceType: "Branding",
              areaServed: "Coburg, Germany",
              provider: {
                "@type": "LocalBusiness",
                name: "Nexgen Consulting",
                url: "https://nexgen-consulting.de",
                telephone: "+49 1525 9089486",
                address: { "@type": "PostalAddress", addressLocality: "Coburg", addressCountry: "DE" },
              },
              url: "https://nexgen-consulting.de/branding-coburg",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Nexgen Consulting",
              url: "https://nexgen-consulting.de",
              telephone: "+49 1525 9089486",
              address: { "@type": "PostalAddress", addressLocality: "Coburg", addressCountry: "DE" },
            }),
          }}
        />
      </Head>

      <Chatbot />

      <main>
        {/* Hero */}
        <header className="relative overflow-hidden bg-brand-primary text-white">
          <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden>
            <div className="absolute -top-24 -right-16 h-[38rem] w-[38rem] rounded-full bg-indigo-600/30 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-[34rem] w-[34rem] rounded-full bg-cyan-400/30 blur-3xl" />
          </div>
          <div className="container max-w-screen-xl px-6 lg:px-8 py-20 md:py-28" data-reveal>
            <p className="uppercase tracking-widest text-cyan-300 font-semibold mb-2">Branding & Corporate Design</p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold">Ein Auftritt, der zu Ihnen passt</h1>
            <p className="mt-3 text-base md:text-lg text-white/80 max-w-3xl">
              Wir entwickeln ein klares, nutzbares Design‑System – vom Logo über Farben bis zu Vorlagen, die Ihren Alltag leichter machen.
            </p>
            <Link href="/kontakt" className="mt-6 inline-flex rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400 px-6 py-3 font-semibold text-white shadow-lg transition hover:brightness-110">
              Kostenloses Erstgespräch
            </Link>
          </div>
        </header>

        {/* Deliverables */}
        <section className="py-16 sm:py-20 md:py-24 bg-brand-primary text-white">
          <div className="container max-w-screen-xl px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,1fr),minmax(0,1fr)] lg:items-start">
            <div className="rounded-brand-2xl border border-white/10 bg-gradient-to-br from-indigo-600/40 via-white/10 to-cyan-400/40 transition-all duration-300 group-hover:from-indigo-500/60 group-hover:to-cyan-400/60 p-8 shadow-xl backdrop-blur-md" data-reveal>
              <h2 className="text-xl font-heading font-semibold">Was Sie bekommen</h2>
              <ul className="mt-4 space-y-3 text-white/80 leading-relaxed">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-accent" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-brand-2xl border border-white/10 bg-white/5 p-0 shadow-xl backdrop-blur-md overflow-hidden" data-reveal>
              <img src="/images/marketing/branding.svg" alt="Branding Illustration" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-8 md:py-12 bg-brand-primary text-white">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-2">Branding‑Pakete</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Vom klaren Start bis zum vollständigen Design‑System – transparent und erweiterbar.</p>
          </div>
          <div className="container mx-auto px-6 lg:px-8 mt-8 grid gap-6 md:grid-cols-3">
            {[
              { name: 'Starter Branding', msg: 'Starter Branding', perks: ['Logo-Set (RGB/CMYK)','Kleiner Styleguide','Farb- & Typo‑Vorschläge'] },
              { name: 'Standard Branding', msg: 'Standard Branding', perks: ['Logo‑Varianten & Regeln','Styleguide (PDF)','Vorlagen für Social & Office'] },
              { name: 'Premium Branding', msg: 'Premium Branding', perks: ['Erweitertes Design‑System','Icon‑Set & Komponenten','Toolkit + kurze Schulung'] },
            ].map((p) => (
              <button key={p.name} onClick={() => redirectToContact(p.msg)} className="group text-left">
                <div className="relative rounded-brand-2xl p-[1px] bg-gradient-to-br from-indigo-600/40 via-white/10 to-cyan-400/40 transition-all duration-300 group-hover:from-indigo-500/60 group-hover:to-cyan-400/60">
                  <div className="rounded-brand-2xl h-full w-full bg-white/5 ring-1 ring-white/10 backdrop-blur-md p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{p.name}</h3>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Empfehlung</span>
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
          <div className="container max-w-screen-xl px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:items-start">
            <div className="space-y-6" data-reveal>
              <h2 className="text-3xl font-heading font-semibold text-white">Vom Workshop bis zum Roll‑out</h2>
              <p className="text-white/80 leading-relaxed">
                Gemeinsam klären wir Werte, Ton und Stil. Daraus entsteht Ihr Brand‑Guide, der Print und Digital abdeckt.
              </p>
              <p className="text-white/80 leading-relaxed">
                Unser Ansatz: verständlich, praxistauglich, mit Vorlagen. So kann Ihr Team sofort loslegen.
              </p>
            </div>
            <div className="" data-reveal>
              <div className="relative rounded-brand-2xl p-[1px] bg-gradient-to-br from-indigo-600/40 via-white/10 to-cyan-400/40">
                <div className="rounded-brand-2xl h-full w-full bg-white/5 ring-1 ring-white/10 p-6">
                  <h3 className="text-3xl font-heading font-semibold text-white mb-2">Beispiele</h3>
                  <p className="text-white/80 leading-relaxed">
                    Logo‑Sets, Schriften, Farben, Vorlagen für Social Media und Präsentationen, kleine Icon‑Bibliotheken.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 md:py-24 bg-brand-primary text-white">
          <div className="container max-w-screen-lg px-6 lg:px-8 text-center space-y-6" data-reveal>
            <h2 className="text-3xl font-heading font-semibold">Bereit für einen klaren Auftritt?</h2>
            <p className="text-white/80 leading-relaxed max-w-2xl mx-auto">
              Kurzes Erstgespräch, klare nächsten Schritte – ohne Fachsprache.
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


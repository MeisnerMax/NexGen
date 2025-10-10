import Head from "next/head";
import Link from "next/link";
import Chatbot from "../../components/Chatbot";
import useReveal from "../../hooks/useReveal";
import { useRouter } from "next/router";

const valuePillars = [
  {
    title: "Branding & Corporate Design",
    description:
      "Logo, Farben und Vorlagen für einen einheitlichen Auftritt – online und offline.",
    bullets: [
      "Logo & Markensysteme",
      "Styleguide & Vorlagen",
      "Schulungen fürs Team",
    ],
    image: "/images/marketing/branding.svg",
    href: "/branding-coburg",
    ctaLabel: "Branding entdecken",
  },
  {
    title: "Social Media",
    description:
      "Plan, Inhalte und Betreuung für Instagram, LinkedIn & Co – verständlich und messbar.",
    bullets: [
      "Redaktionsplan",
      "Kampagnen inkl. Anzeigen",
      "Community-Betreuung",
    ],
    image: "/images/marketing/social.svg",
  },
  {
    title: "Analytics & Performance",
    description:
      "Wir richten die Messung ein und zeigen klar, was wirkt. Berichte ohne Fachchinesisch.",
    bullets: [
      "Tracking & Dashboards",
      "Conversion-Optimierung",
      "Regelmäßige Auswertung",
    ],
    image: "/images/marketing/analytics.svg",
  },
  {
    title: "SEO & Content",
    description:
      "Besser gefunden werden bei Google. Von Technik bis Text – lokal und darüber hinaus.",
    bullets: [
      "Technisches SEO",
      "Texte & Landingpages",
      "Backlinks & PR",
    ],
    image: "/images/marketing/seo.svg",
  },
];

const packages = [
  {
    title: "Audit & Fahrplan",
    description:
      "Kurzer Check Ihres Marketings. Ziele, Budget und ein einfacher Plan für die nächsten Schritte.",
  },
  {
    title: "Kampagnen-Setup",
    description:
      "Wir richten Ihre Kanäle sauber ein – mit Tracking und übersichtlichen Berichten.",
  },
  {
    title: "Marketing als Service",
    description:
      "Wir übernehmen laufend Kampagnen, Inhalte und Auswertung – wie eine externe Marketing‑Abteilung.",
  },
];

export default function MarketingService() {
  useReveal();
  const router = useRouter();
  const redirectToContact = (message) => {
    router.push(`/kontakt?message=${encodeURIComponent(message)}`);
  };

  return (
    <>
      <Head>
        <title>Marketing & SEO - NexGen Consulting</title>
        <meta
          name="description"
          content="Marketing, das versteht und wirkt: Social Media, Analytics, Branding und SEO – verständlich erklärt, sauber umgesetzt, messbar im Ergebnis."
        />
        <meta property="og:title" content="Marketing & SEO - NexGen Consulting" />
        <meta
          property="og:description"
          content="Social Media, Analytics, Branding und SEO aus einer Hand – klar, einfach, wirksam."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://nexgen-consulting.de/online-marketing-coburg" />
        <link rel="canonical" href="https://nexgen-consulting.de/online-marketing-coburg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Online-Marketing in Coburg",
              serviceType: "Online-Marketing",
              areaServed: "Coburg, Germany",
              provider: {
                "@type": "LocalBusiness",
                name: "Nexgen Consulting",
                url: "https://nexgen-consulting.de",
                telephone: "+49 1525 9089486",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Coburg",
                  addressCountry: "DE",
                },
              },
              url: "https://nexgen-consulting.de/online-marketing-coburg",
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
              address: {
                "@type": "PostalAddress",
                addressLocality: "Coburg",
                addressCountry: "DE",
              },
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
          <div className="container max-w-screen-xl px-6 lg:px-8 py-20 md:py-28 space-y-3" data-reveal>
            <p className="uppercase tracking-widest text-cyan-300 font-semibold">Leistung</p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold">Marketing & Sichtbarkeit</h1>
            <p className="mt-2 text-base md:text-lg text-white/80 max-w-3xl">
              Wir sprechen Klartext: Mehr Sichtbarkeit, mehr Anfragen, klare Schritte. Ohne unnötiges Fachvokabular.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/kontakt" className="btn-primary inline-flex text-base sm:text-lg">
                Kostenlose Analyse anfragen
              </Link>
              <Link href="/branding-coburg" className="btn-secondary inline-flex text-base sm:text-lg">
                Branding entdecken
              </Link>
            </div>
          </div>
        </header>

        <section className="py-16 sm:py-20 md:py-24 bg-brand-primary">
          <div className="container max-w-screen-xl px-6 lg:px-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div data-reveal>
              <h2 className="text-3xl font-heading font-semibold text-white mb-6">
                Plan + Umsetzung + Begleitung
              </h2>
              <p className="text-white leading-relaxed mb-6">
                Wir starten mit einem kurzen Marketing-Check, legen Ziele fest und setzen Maßnahmen um – mit einfachen Berichten, die jeder versteht.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {packages.map((pkg) => (
                  <button
                    key={pkg.title}
                    onClick={() => redirectToContact(pkg.title)}
                    className="group text-left"
                    data-reveal
                  >
                    <div className="relative rounded-brand-2xl p-[1px] bg-gradient-to-br from-indigo-600/40 via-white/10 to-cyan-400/40 transition-all duration-300 group-hover:from-indigo-500/60 group-hover:to-cyan-400/60">
                      <div className="rounded-brand-2xl h-full w-full bg-white/5 ring-1 ring-white/10 backdrop-blur-md p-5">
                        <h3 className="text-lg font-heading font-semibold text-white mb-1">{pkg.title}</h3>
                        <p className="text-sm text-white/80 leading-relaxed">{pkg.description}</p>
                        <span className="mt-4 inline-flex rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400 px-4 py-1.5 text-sm font-semibold text-white shadow-md">Anfragen</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div data-reveal className="rounded-brand-2xl bg-brand-primary text-white shadow-card ring-1 ring-white/10 p-8 space-y-4">
              <h3 className="text-xl font-heading font-semibold">Ihre Vorteile</h3>
              <ul className="space-y-3 text-white/85 leading-relaxed">
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-brand-accent" /> Einfacher Plan mit klaren Kosten</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-brand-accent" /> Team aus Strategie, Gestaltung und Daten</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-brand-accent" /> Wir machen Ihr Team fit</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 md:py-24 bg-brand-primary text-white">
          <div className="container max-w-screen-xl px-6 lg:px-8 space-y-10">
            <div className="text-center" data-reveal>
              <h2 className="text-3xl font-heading font-semibold mb-4">Unsere Marketing-Schwerpunkte</h2>
              <p className="text-white/80 leading-relaxed max-w-3xl mx-auto">
                Vier Bereiche, ein Ziel: Ihre Firma sichtbar machen – verständlich, kreativ und messbar.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-4">
              {valuePillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-brand-2xl bg-gradient-to-br from-indigo-600/40 via-white/10 to-cyan-400/40 transition-all duration-300 group-hover:from-indigo-500/60 group-hover:to-cyan-400/60 ring-1 ring-white/10 backdrop-blur-md overflow-hidden flex flex-col transition-transform duration-300 ease-brand hover:-translate-y-1"
                  data-reveal
                >
                  <div className="h-40 overflow-hidden">
                    <img src={pillar.image} alt={pillar.title} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6 flex flex-col gap-4">
                    <div>
                      <h3 className="text-lg font-heading font-semibold">{pillar.title}</h3>
                      <p className="text-white/80 leading-relaxed text-sm mt-2">{pillar.description}</p>
                    </div>
                    <ul className="space-y-2 text-white/70 text-sm leading-relaxed">
                      {pillar.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-2 w-2 rounded-full bg-brand-accent" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={pillar.href ?? "/kontakt"}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-brand-accent hover:text-brand-accent/80"
                    >
                      {pillar.ctaLabel ?? "Gespräch vereinbaren"}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 md:py-24 bg-brand-primary">
          <div className="container max-w-screen-lg px-6 lg:px-8 text-center" data-reveal>
            <h2 className="text-3xl font-heading font-semibold text-white mb-4">Ihre Marke verdient Sichtbarkeit</h2>
            <p className="text-white leading-relaxed mb-8 max-w-2xl mx-auto">
              Wir kombinieren Plan, Umsetzung und Schulung. So wissen Sie jederzeit, was als Nächstes zu tun ist – und was es bringt.
            </p>
            <Link href="/kontakt" className="inline-flex rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400 px-6 py-3 font-semibold text-white shadow-lg transition hover:brightness-110">
              Jetzt Termin sichern
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}


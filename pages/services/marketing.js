import Head from "next/head";
import Link from "next/link";
import Chatbot from "../../components/Chatbot";
import useReveal from "../../hooks/useReveal";

const valuePillars = [
  {
    title: "Branding & Corporate Design",
    description:
      "Logo, Farbwelten, Templates und Guidelines für einen konsistenten Auftritt auf allen Kanälen.",
    bullets: [
      "Logo- und Marken-Systeme",
      "Styleguides & Asset Libraries",
      "Enablement & Trainings",
    ],
    image: "/images/firmenidentitaet.png",
    href: "/branding-coburg",
    ctaLabel: "Branding entdecken",
  },
  {
    title: "Social Media",
    description:
      "Strategie, Content-Produktion und Community-Management für Instagram, LinkedIn & Co – datenbasiert, kreativ und zielgruppengenau.",
    bullets: [
      "Redaktionspläne & Storyboards",
      "Kampagnen-Setups inkl. Ads",
      "Community- & Reputation-Management",
    ],
    image: "/images/Instagram.png",
  },
  {
    title: "Analytics & Performance",
    description:
      "GA4, Looker Studio und Attribution: Wir übersetzen Daten in klare Maßnahmen und automatisieren Reporting-Strecken.",
    bullets: [
      "Event-Tracking & Dashboards",
      "Funnels & Conversion-Optimierung",
      "Performance-Reviews & Roadmaps",
    ],
    image: "/images/analytics.png",
  },
  {
    title: "SEO & Content",
    description:
      "Technische Audits, Keyword-Strategie und skalierbare Content-Produktionen – lokal wie international.",
    bullets: [
      "Onpage & Technical SEO",
      "Content Hubs & Landingpages",
      "Linkbuilding & Digital PR",
    ],
    image: "/images/SEO.png",
  },
];

const packages = [
  {
    title: "Audit & Roadmap",
    description: "Status-Quo-Analyse, Ziele, KPIs, Budget – wir definieren einen klaren Plan in 2–3 Workshops.",
  },
  {
    title: "Campaign Enablement",
    description: "Set-up oder Optimierung Ihrer Performance-Kanäle inkl. Tracking und Dashboards.",
  },
  {
    title: "Marketing as a Service",
    description: "Wir übernehmen kontinuierliche Kampagnen, Content und Reporting als verlängerte Inhouse-Einheit.",
  },
];

export default function MarketingService() {
  useReveal();

  return (
    <>
      <Head>
        <title>Marketing & SEO - NexGen Consulting</title>
        <meta
          name="description"
          content="Digitale Marketing-Strategien von NexGen Consulting: Social Media, Analytics, Branding und SEO - für mehr Sichtbarkeit und messbare Ergebnisse."
        />
        <meta property="og:title" content="Marketing & SEO - NexGen Consulting" />
        <meta
          property="og:description"
          content="Social Media, Analytics, Branding und SEO aus einer Hand: NexGen Consulting entwickelt datengetriebene Maßnahmen mit klaren KPIs."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://nexgen-consulting.de/online-marketing-coburg" />
        <link rel="canonical" href="https://nexgen-consulting.de/online-marketing-coburg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Online-Marketing in Coburg",
          serviceType: "Online-Marketing",
          areaServed: "Coburg, Germany",
          provider: { "@type": "LocalBusiness", name: "Nexgen Consulting", url: "https://nexgen-consulting.de", telephone: "+49 1525 9089486", address: { "@type": "PostalAddress", addressLocality: "Coburg", addressCountry: "DE" } },
          url: "https://nexgen-consulting.de/online-marketing-coburg"
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
        <section className="py-16 sm:py-20 md:py-24 bg-brand-primary text-white">
          <div className="container max-w-screen-xl px-6 lg:px-8 space-y-6" data-reveal>
            <p className="uppercase tracking-widest text-brand-accent font-semibold">Marketing & Sichtbarkeit</p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold">
              Performance-orientiertes Marketing, das Marken sichtbar macht
            </h1>
            <p className="text-lg text-surface-light/90 max-w-3xl">
              Ob SEO, Social Media oder Analytics – wir kombinieren Strategie, Content und Daten zu einem durchgängigen Marketing-Erlebnis. Unser Anspruch: messbare Wirkung, klare Prozesse und enge Zusammenarbeit mit Ihrem Team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/kontakt" className="btn-primary inline-flex text-base sm:text-lg">
                Kostenlose Marketinganalyse anfragen
              </Link>
              <Link href="/branding-coburg" className="btn-secondary inline-flex text-base sm:text-lg">
                Branding entdecken
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 md:py-24 bg-brand-primary">
          <div className="container max-w-screen-xl px-6 lg:px-8 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div data-reveal>
              <h2 className="text-3xl font-heading font-semibold text-white mb-6">
                Strategie + Umsetzung + Enablement
              </h2>
              <p className="text-white leading-relaxed mb-6">
                Wir starten mit einem digitalen Marketing-Audit, definieren Ziele samt KPI-Framework und orchestrieren anschließend Content, Kampagnen und Reporting. Transparente Dashboards und regelmäßige Reviews sorgen für Fokus.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {packages.map((pkg) => (
                  <div key={pkg.title} className="rounded-brand-xl bg-brand-primary shadow-card ring-1 ring-brand-primary/10 p-6" data-reveal>
                    <h3 className="text-lg font-heading font-semibold text-white mb-2">{pkg.title}</h3>
                    <p className="text-sm text-white leading-relaxed">{pkg.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div data-reveal className="rounded-brand-2xl bg-brand-primary text-white shadow-card ring-1 ring-white/10 p-8 space-y-4">
              <h3 className="text-xl font-heading font-semibold">Ihre Vorteile</h3>
              <ul className="space-y-3 text-white/85 leading-relaxed">
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-brand-accent" /> Maßgeschneiderte Maßnahmenpläne mit klaren Kosten und KPIs</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-brand-accent" /> Interdisziplinäres Team aus Strategie, Kreation und Data</li>
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-brand-accent" /> Enablement-Ansatz: Wir befähigen Ihr Team dauerhaft</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 md:py-24 bg-brand-primary text-white">
          <div className="container max-w-screen-xl px-6 lg:px-8 space-y-10">
            <div className="text-center" data-reveal>
              <h2 className="text-3xl font-heading font-semibold mb-4">Unsere Marketing-Schwerpunkte</h2>
              <p className="text-surface-light/85 leading-relaxed max-w-3xl mx-auto">
                Vier Pfeiler, ein Ziel: Ihre Marke zur richtigen Zeit vor die richtigen Menschen zu bringen – datenbasiert, kreativ und performant.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-4">
              {valuePillars.map((pillar) => (
                <article
                  key={pillar.title}
                  className="rounded-brand-2xl bg-brand-primary/70 ring-1 ring-white/10 shadow-card overflow-hidden flex flex-col transition-transform duration-300 ease-brand hover:-translate-y-1"
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
              Wir verbinden Strategie, Kampagnen und Enablement zu einem Marketing, das wirkt. Lassen Sie uns gemeinsam herausfinden, welche Schritte den größten Hebel für Ihr Unternehmen haben.
            </p>
            <Link href="/kontakt" className="btn-primary inline-flex text-base sm:text-lg">
              Jetzt Termin sichern
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

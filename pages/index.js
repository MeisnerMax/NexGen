import Head from "next/head";
import Link from "next/link";
import { useMemo } from "react";
import Hero from "../components/Hero";
import Chatbot from "../components/Chatbot";
import useReveal from "../hooks/useReveal";

const ONLINE_ENTRIES = [
  {
    href: "/services/website",
    title: "Webdesign & Webshop",
    description: "Responsive Websites und überzeugende UX für Ihren Auftritt.",
  },
  
];

const MARKETING_ENTRIES = [
  {
    href: "/services/marketing",
    title: "Social Media",
    description: "Community-Aufbau, Content-Planung und Ads für LinkedIn, Instagram & Co.",
  },
  {
    href: "/services/firmenidentitaet",
    title: "Logo & Corporate Design",
    description: "Zeitlose Gestaltung, Styleguides und Templates für einen konsistenten Markenauftritt.",
  },
];

const SCHULUNG_ENTRIES = [
  {
    href: "/services/schulungen",
    title: "Schulungen M365 & Excel",
    description: "Digitale Zusammenarbeit strukturieren und Prozesse transparent steuern.",
  },
  
];

const SOFTWARE_ENTRIES = [
  {
    href: "/services/loesungen",    title: "Microsoft 365 & Branchensoftware",
    description: "Einführung, Automatisierung & Integration passender Tools",
  },
  
];

const AUTOMATION_ENTRIES = [
  {
    href: "/services/softwareentwicklung",
    title: "Softwareentwicklung",
    description: "Individuelle Anwendungen, die wiederkehrende Aufgaben digitalisieren und beschleunigen.",
  },
  {
    href: "/services/app",
    title: "Appentwicklung",
    description: "Native und hybride Apps mit Fokus auf Usability, Performance und Skalierbarkeit.",
  },
];

export default function Home() {
  useReveal();

  const timelineSteps = useMemo(() => {
    const rawSteps = [
      {
        href: "/services/beratung",
        title: "Beratung (Digitalisierung & Förderungen)",
        description: "Kostenloses Erstgespräch, Potenzialanalyse und Fördermittel-Check.",
        ctaHref: "/beratung",
        ctaLabel: "Mehr über Beratung",
        order: 0,
      },
      ...ONLINE_ENTRIES,
      ...MARKETING_ENTRIES,
      ...SCHULUNG_ENTRIES,
      ...SOFTWARE_ENTRIES,
      ...AUTOMATION_ENTRIES,
    ];

    const grouped = rawSteps.reduce((acc, entry, index) => {
      const key = entry.href ?? entry.title;
      if (!acc.has(key)) {
        acc.set(key, {
          href: entry.href,
          titles: new Set([entry.title]),
          highlights: entry.description ? new Set([entry.description]) : new Set(),
          ctaHref: entry.ctaHref ?? entry.href,
          ctaLabel: entry.ctaLabel ?? (entry.href ? "Mehr erfahren" : undefined),
          order: entry.order ?? index + 1,
        });
      } else {
        const existing = acc.get(key);
        existing.titles.add(entry.title);
        if (entry.description) {
          existing.highlights.add(entry.description);
        }
        acc.set(key, existing);
      }
      return acc;
    }, new Map());

    return Array.from(grouped.values())
      .sort((a, b) => a.order - b.order)
      .map((item) => ({
        href: item.href,
        title: Array.from(item.titles).join(" • "),
        highlights: Array.from(item.highlights),
        ctaHref: item.ctaHref,
        ctaLabel: item.ctaLabel,
      }));
  }, []);

  return (
    <>
      <Head>
        <title>Nexgen Consulting - Digitalisierung & Webdesign</title>
        <meta
          name="description"
          content="Nexgen Consulting unterstützt kleine und mittelständische Unternehmen bei Digitalisierung, Prozessautomatisierung, Webdesign und SEO – alles aus einer Hand."
        />
        <meta
          name="keywords"
          content="Digitalisierung, Prozessautomatisierung, Webdesign, SEO, Softwareentwicklung, Appentwicklung, Microsoft 365, Social Media, Marketing"
        />
        <meta name="author" content="Nexgen Consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nexgen Consulting Digitalisation",
              "url": "https://nexgen-consulting.de",
              "logo": "https://nexgen-consulting.de/logo.png",
              "description": "Ihr Partner für Digitalisierung, Prozessautomatisierung, Webdesign und SEO-Optimierung.",
              "sameAs": [
                "https://www.facebook.com/nexgenconsulting",
                "https://www.linkedin.com/company/nexgenconsulting"
              ]
            })
          }}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nexgen Consulting - Digitalisierung, Webdesign und Automatisierung" />
        <meta property="og:description" content="Nexgen Consulting - Ihr Partner für Digitalisierung, Prozessautomatisierung, Webdesign und SEO-Optimierung für kleine und mittelständische Unternehmen." />
        <meta property="og:image" content="https://nexgen-consulting.de/logo.png" />
        <meta property="og:url" content="https://nexgen-consulting.de" />
        <meta property="og:site_name" content="Nexgen Consulting" />
      </Head>

      <Hero />
      <Chatbot />

      <main>
        <section id="about" className="py-16 sm:py-20 md:py-24 bg-brand-primary text-white">
          <div className="container max-w-screen-xl px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div data-reveal>
                <p className="uppercase tracking-widest text-brand-accent font-semibold mb-4">Digitalisierungspartner aus Coburg</p>
                <h2 className="text-4xl sm:text-5xl font-heading font-bold mb-6">
                  Visionen digital umsetzen – klar, strukturiert, wirkungsvoll
                </h2>
                <p className="text-lg leading-relaxed text-surface-light/90">
                  Nexgen Consulting begleitet Sie von der Idee bis zum skalierbaren Betrieb: Prozessautomatisierung, individuelle Software & Apps, überzeugende Webauftritte und wirkungsvolles Marketing – alles miteinander verzahnt.
                </p>
              </div>
              <div data-reveal className="order-first md:order-none">
                <img src="/images/team.jpg" alt="Unser Team" className="w-full rounded-brand-2xl shadow-overlay ring-1 ring-white/10" />
              </div>
            </div>
          </div>
        </section>

        <section id="timeline" className="py-16 sm:py-20 md:py-24 bg-brand-primary">
          <div className="container max-w-screen-xl px-6 lg:px-8 space-y-12">
            <div className="text-center" data-reveal>
              <p className="uppercase tracking-widest text-brand-accent font-semibold mb-3">Der Nexgen-Prozess</p>
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-surface-light/90 mb-4">
                Von der Beratung bis zur Umsetzung – ein fließender Digitalisierungsfahrplan
              </h2>
              <p className="text-surface-light/90 leading-relaxed max-w-3xl mx-auto">
                Jeder Schritt baut auf dem vorherigen auf. So entsteht ein konsistentes Erlebnis für Ihr Team und Ihre Kundschaft – ohne Medienbrüche, dafür mit klaren KPIs.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-8 bottom-8 w-px bg-brand-primary/20 md:hidden" aria-hidden="true" />
              <div className="hidden md:block absolute top-12 left-0 right-0 mx-8 h-px bg-brand-primary/15" aria-hidden="true" />
              <ol className="relative flex flex-col gap-10 md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-12 items-stretch">
                {timelineSteps.map((step, index) => (
                  <li
                    key={`${step.href ?? "static"}-${index}`}
                    data-reveal
                    className="relative pl-12 md:pl-0 flex" /* <-- make each cell a flex item so children can stretch */
                  >
                    <span
                      className="absolute left-3 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-brand-accent text-white font-semibold shadow-card md:static md:mx-auto md:mb-4"
                    >
                      {index + 1}
                    </span>
                    <div className="rounded-brand-2xl bg-brand-primary shadow-card ring-1 ring-brand-light transition-all duration-300 ease-brand hover:-translate-y-1 focus-within:ring-brand-accent/60 flex flex-col h-full w-full">
                      <div className="p-6 flex flex-col gap-4 flex-1 justify-between">
                        <h3 className="text-xl font-heading font-semibold text-surface-light text-left md:text-center">
                          {step.title}
                        </h3>

                        {step.highlights.length > 1 ? (
                          <ul className="space-y-2 text-surface-light/80 text-sm leading-relaxed">
                            {step.highlights.map((highlight) => (
                              <li key={highlight} className="flex items-start gap-2">
                                <span className="mt-1 h-2 w-2 rounded-full bg-brand-accent" aria-hidden="true" />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-surface-light/80 text-sm leading-relaxed">
                            {step.highlights[0]}
                          </p>
                        )}
                        {step.ctaHref && (
                          <div className="mt-4">
                            <Link
                              href={step.ctaHref}
                              className="inline-flex items-center justify-center gap-2 rounded-brand-xl border border-brand-accent/40 px-3 py-2 text-sm font-semibold text-brand-accent transition-all duration-300 ease-brand hover:bg-brand-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
                            >
                              {step.ctaLabel ?? "Mehr erfahren"}
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 sm:py-20 md:py-24 bg-brand-primary text-white">
          <div className="container max-w-screen-xl px-6 lg:px-8 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div data-reveal>
              <h2 className="text-3xl font-heading font-semibold mb-4">Gemeinsam in die Umsetzung</h2>
              <p className="text-surface-light/80 leading-relaxed mb-6">
                Wir begleiten Unternehmen aus Coburg, Oberfranken und dem gesamten DACH-Raum bei der digitalen Transformation. Lassen Sie uns in einem Gespräch herausfinden, welche Schritte den größten Impact haben.
              </p>
              <Link href="/services/contact" className="btn-primary inline-flex text-base sm:text-lg">
                Zum Kontaktformular
              </Link>
            </div>
            <div data-reveal className="bg-brand-primary/70 ring-1 ring-white/10 rounded-brand-2xl p-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Schnelle Terminvereinbarung</h3>
                <p className="text-surface-light/80">Beantworten Sie ein paar Fragen und wir melden uns mit konkreten Vorschlägen für einen Kick-off.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Workshops & Sparring</h3>
                <p className="text-surface-light/80">Wir moderieren Workshops, priorisieren Maßnahmen und dokumentieren Entscheidungen transparent.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Umsetzung & Erfolgsmessung</h3>
                <p className="text-surface-light/80">Gemeinsam begleiten wir die Realisierung, etablieren KPIs und sorgen für kontinuierliche Optimierung.</p>
              </div>
            </div>
          </div>
        </section>

        

        {/* Optional: Testimonials & Blog weiterhin verfügbar */}
        {/*
        <section id="testimonials" className="py-16 sm:py-20 md:py-24 bg-brand-primary text-white" data-reveal>
          <div className="container max-w-screen-xl px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-3xl font-heading font-semibold">Kundenreferenzen</h2>
            <TestimonialsSlider />
          </div>
        </section>

        <section id="blog" className="py-16 sm:py-20 md:py-24 bg-surface-light" data-reveal>
          <div className="container max-w-screen-xl px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-3xl font-heading font-semibold text-brand-primary">Neueste Blogbeiträge</h2>
            <BlogSlider />
          </div>
        </section>
        */}
      </main>
    </>
  );
}



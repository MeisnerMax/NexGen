import Head from "next/head";
import Link from "next/link";
import { useMemo, useRef, useEffect } from "react";
import Hero from "../components/Hero";
import Chatbot from "../components/Chatbot";
import FAQSection from "../components/FAQSection";
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
    href: "/services/lösungen",    title: "Microsoft 365 & Branchensoftware",
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

const GALLERY_SLIDES = [
  {
    href: "/services/website",
    imageSrc: "/images/Figma_Firseur.png",
    imageAlt: "Websites",
    
  },
  {
    href: "/services/marketing",
    imageSrc: "/images/Figma_Hund.png",
    imageAlt: "Marketing",
    
  },
  {
    href: "/services/app",
    imageSrc: "/images/Figma_Immo.png",
    imageAlt: "Apps",
    
  },
  {
    href: "/services/lösungen",
    imageSrc: "/images/Figma_Tech.png",
    imageAlt: "M365 & Lösungen",
    
  },
];

export default function Home() {
  useReveal();

  const galleryRingRef = useRef(null);

  useEffect(() => {
    const ringElement = galleryRingRef.current;
    if (!ringElement) return;

    const slides = Array.from(ringElement.querySelectorAll("[data-gallery-item]"));
    if (!slides.length) return;

    const totalSlides = slides.length;
    const angleStep = 360 / totalSlides;
    const rotationSpeed = 12; // degrees per second

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = motionQuery.matches;
    let paused = prefersReducedMotion;
    let animationFrameId = null;
    let lastTimestamp = null;
    let currentAngle = 0;

    let horizontalRadius = 0;
    let verticalRadius = 0;

    const computeRadii = () => {
      const bounds = ringElement.getBoundingClientRect();
      horizontalRadius = bounds.width * 0.42;
      verticalRadius = bounds.height * 0.18;
    };

    const applyTransforms = () => {
      slides.forEach((slide, index) => {
        const angleDeg = currentAngle + index * angleStep;
        const angleRad = (angleDeg - 90) * (Math.PI / 180);

        const x = Math.cos(angleRad);
        const y = Math.sin(angleRad);

        const translateX = x * horizontalRadius;
        const translateY = y * verticalRadius;
        const depth = (1 - y) / 2;

        const scale = 0.82 + depth * 0.22;
        const opacity = 0.55 + depth * 0.45;
        const tilt = x * 12;
        const translateZ = depth * 120;

        const isInteracting = slide.matches(":hover") || slide.matches(":focus-visible");

        slide.style.transform = `translate(-50%, -50%) translate3d(${translateX.toFixed(2)}px, ${translateY.toFixed(2)}px, ${translateZ.toFixed(2)}px) rotateY(${tilt.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
        slide.style.zIndex = String(100 + Math.round(depth * 100));
        slide.style.opacity = isInteracting ? "1" : opacity.toFixed(3);
        slide.style.filter = isInteracting
          ? "brightness(1) saturate(1)"
          : `brightness(${(0.85 + depth * 0.2).toFixed(3)}) saturate(${(0.8 + depth * 0.3).toFixed(3)})`;
      });
    };

    computeRadii();
    applyTransforms();

    const step = (timestamp) => {
      if (lastTimestamp === null) {
        lastTimestamp = timestamp;
      }
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!paused && !prefersReducedMotion) {
        currentAngle = (currentAngle + (delta / 1000) * rotationSpeed) % 360;
      }

      applyTransforms();
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    const pause = () => {
      paused = true;
    };

    const resume = () => {
      if (!prefersReducedMotion) {
        paused = false;
      }
    };

    const handleFocusOut = (event) => {
      if (!ringElement.contains(event.relatedTarget)) {
        resume();
      }
    };

    const handleMotionChange = (event) => {
      prefersReducedMotion = event.matches;
      if (prefersReducedMotion) {
        pause();
        currentAngle = 0;
        applyTransforms();
      } else {
        resume();
      }
    };

    const handleResize = () => {
      computeRadii();
      applyTransforms();
    };

    ringElement.addEventListener("pointerenter", pause);
    ringElement.addEventListener("pointerleave", resume);
    ringElement.addEventListener("pointerdown", pause);
    ringElement.addEventListener("pointerup", resume);
    ringElement.addEventListener("focusin", pause);
    ringElement.addEventListener("focusout", handleFocusOut);
    window.addEventListener("resize", handleResize);

    if (typeof motionQuery.addEventListener === "function") {
      motionQuery.addEventListener("change", handleMotionChange);
    } else {
      motionQuery.addListener(handleMotionChange);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      ringElement.removeEventListener("pointerenter", pause);
      ringElement.removeEventListener("pointerleave", resume);
      ringElement.removeEventListener("pointerdown", pause);
      ringElement.removeEventListener("pointerup", resume);
      ringElement.removeEventListener("focusin", pause);
      ringElement.removeEventListener("focusout", handleFocusOut);
      window.removeEventListener("resize", handleResize);

      if (typeof motionQuery.removeEventListener === "function") {
        motionQuery.removeEventListener("change", handleMotionChange);
      } else {
        motionQuery.removeListener(handleMotionChange);
      }

      slides.forEach((slide) => {
        slide.style.removeProperty("transform");
        slide.style.removeProperty("z-index");
        slide.style.removeProperty("opacity");
        slide.style.removeProperty("filter");
      });
    };
  }, []);

  const timelineSteps = useMemo(() => {
    const rawSteps = [
      {
        href: "/services/beratung",
        title: "Beratung (Digitalisierung & Förderungen)",
        description: "Kostenloses Erstgespräch, Potenzialanalyse und Fördermittel-Check.",
        ctaHref: "/services/beratung",
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
          content="Digitalagentur in Coburg - Nexgen-Consulting bietet Digitalisierung, Prozessautomatisierung, Webdesign und App-Entwicklung für KMU."
        />
        <meta
          name="keywords"
          content="Digitalisierung Coburg, Webdesign Coburg, Prozessautomatisierung Oberfranken, App Entwicklung Coburg, IT-Beratung Mittelstand Bayern, Digitalisierungsberatung, Workflow Optimierung, individuelle Softwareentwicklung, Automatisierung von Geschäftsprozessen, Cloud Lösungen, Microsoft 365 Einführung"
        />
        <meta name="author" content="Nexgen Consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.nexgen-consulting.de/#localbusiness",
              "name": "Nexgen-Consulting",
              "alternateName": "Nexgen Consulting Digitalisation",
              "image": "https://nexgen-consulting.de/assets/logo.png",
              "logo": "https://nexgen-consulting.de/logo.png",
              "url": "https://www.nexgen-consulting.de",
              "telephone": "+49 1522 7433448",
              "email": "meisner@nexgen-consulting.de",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Webergasse 30",
                "postalCode": "96450",
                "addressLocality": "Coburg",
                "addressRegion": "Bayern",
                "addressCountry": "DE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "50.2593",
                "longitude": "10.9647"
              },
              "priceRange": "€€",
              "description": "Nexgen-Consulting ist eine Digitalagentur aus Coburg, spezialisiert auf Digitalisierung, Prozessautomatisierung, Webdesign, App- und Softwareentwicklung für kleine und mittelständische Unternehmen.",
              "areaServed": "Germany",
              "keywords": "Digitalisierung Coburg, Webdesign Coburg, Prozessautomatisierung Oberfranken, App Entwicklung Coburg, IT-Beratung Mittelstand Bayern, Digitalisierungsberatung, Workflow Optimierung, individuelle Softwareentwicklung, Automatisierung von Geschäftsprozessen, Cloud Lösungen, Microsoft 365 Einführung",
              "knowsAbout": [
                "Digitalisierung",
                "Prozessautomatisierung",
                "Webdesign",
                "Softwareentwicklung",
                "App-Entwicklung",
                "RPA-Automatisierung"
              ],
              "sameAs": [
                "https://www.linkedin.com/company/nexgen-consulting-de/",
                "https://www.instagram.com/nexgen.consulting/",
                "https://www.facebook.com/nexgen.consulting/",
                "https://g.co/kgs/xxxxx"
              ],
              "founder": {
                "@type": "Person",
                "name": "Max Meisner"
              },
              "foundingDate": "2024",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "availableLanguage": ["de", "en"],
                  "url": "https://www.nexgen-consulting.de/services/contact"
                }
              ]
            })
          }}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nexgen Consulting - Digitalisierung, Webdesign und Automatisierung" />
        <meta property="og:description" content="Digitalagentur in Coburg - Nexgen-Consulting bietet Digitalisierung, Prozessautomatisierung, Webdesign und App-Entwicklung für KMU." />
        <meta property="og:image" content="https://nexgen-consulting.de/logo.png" />
        <meta property="og:url" content="https://nexgen-consulting.de" />
        <meta property="og:site_name" content="Nexgen Consulting" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digitalagentur in Coburg - Nexgen-Consulting" />
        <meta name="twitter:description" content="Digitalagentur in Coburg - Nexgen-Consulting bietet Digitalisierung, Prozessautomatisierung, Webdesign und App-Entwicklung für KMU." />
        <meta name="twitter:image" content="https://nexgen-consulting.de/logo.png" />
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
                  Als Digitalagentur in Coburg begleiten wir Unternehmen in Coburg, Bamberg und der gesamten Region Oberfranken auf ihrem Weg in die digitale Zukunft. Unsere Projekte verbinden Digitalisierung in Coburg mit Webdesign, Prozessautomatisierung und App Entwicklung Coburg, damit regionale KMU sofort spürbare Fortschritte erleben.
                </p>
                <p className="text-lg leading-relaxed text-surface-light/90 mt-6">
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
                Jeder Schritt baut auf dem vorherigen auf und zeigt, wie Digitalisierung von KMU in Oberfranken, Workflow Optimierung und Automatisierung von Geschäftsprozessen zusammenspielen. So entsteht ein konsistentes Erlebnis für Ihr Team und Ihre Kundschaft – ohne Medienbrüche und mit klar messbaren Ergebnissen.
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
        </section>  {/* Ende Timeline */ }

        {/* Galerie: kreisförmiges Bild-Rondell */}
        <section id="gallery" className="py-16 sm:py-20 md:py-24 bg-brand-primary text-white">
          <div className="container max-w-screen-xl px-6 lg:px-8 relative">
            <div className="mx-auto max-w-2xl text-center space-y-4" data-reveal>
              <span className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">Galerie</span>
              <h3 className="text-3xl sm:text-4xl font-heading font-semibold">Online-Präsenz zeigen</h3>
              <p className="text-sm sm:text-base text-white/70">Digitalisierung in Coburg sichtbar gemacht – vom Webdesign für lokale Marken bis zur App Entwicklung für mittelständische Unternehmen in Oberfranken.</p>
            </div>

            <div className="relative mt-14 flex justify-center">
              <div
                ref={galleryRingRef}
                className="gallery-ring"
                aria-label="Service Galerie, kreisförmig animiert"
              >
                <div className="gallery-ring-track">
                  {GALLERY_SLIDES.map((slide) => (
                    <a
                      key={slide.href}
                      href={slide.href}
                      data-gallery-item
                      className="gallery-ring-item group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
                    >
                      <div className="gallery-ring-card">
                        <div className="gallery-ring-media">
                          <img loading="lazy" src={slide.imageSrc} alt={slide.imageAlt} />
                          <div className="gallery-ring-overlay">
                            <span className="gallery-ring-caption">{slide.caption}</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <FAQSection />

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
      </main>
    </>
  );
}



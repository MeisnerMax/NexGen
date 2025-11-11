import Head from "next/head";
import Link from "next/link";
import { useMemo, useRef, useEffect } from "react";
import Hero from "../components/Hero";
import Chatbot from "../components/Chatbot";
import FAQSection from "../components/FAQSection";
import useReveal from "../hooks/useReveal";

const ONLINE_ENTRIES = [
  {
    href: "/webdesign-coburg",
    title: "Webdesign & Webshop",
    description: "Responsive Websites und überzeugende UX für Ihren Auftritt.",
  },
  
];

const MARKETING_ENTRIES = [
  {
    href: "/online-marketing-coburg",
    title: "Social Media",
    description: "Community-Aufbau, Content-Planung und Ads für LinkedIn, Instagram & Co.",
  },
  {
    href: "/branding-coburg",
    title: "Logo & Corporate Design",
    description: "Zeitlose Gestaltung, Styleguides und Templates für einen konsistenten Markenauftritt.",
  },
];

const SCHULUNG_ENTRIES = [
  {
    href: "/schulungen-coburg",
    title: "Schulungen M365 & Excel",
    description: "Digitale Zusammenarbeit strukturieren und Prozesse transparent steuern.",
  },
  
];

const SOFTWARE_ENTRIES = [
  {
    href: "/microsoft365-loesungen-coburg",    title: "Branchensoftware",
    description: "Einführung, Automatisierung & Integration passender Tools",
  },
  
];

const AUTOMATION_ENTRIES = [
  {
    href: "/softwareentwicklung-coburg",
    title: "Software",
    description: "Individuelle Anwendungen, die wiederkehrende Aufgaben digitalisieren und beschleunigen.",
  },
  {
    href: "/appentwicklung-coburg",
    title: "Appentwicklung",
    description: "Native und hybride Apps mit Fokus auf Usability, Performance und Skalierbarkeit.",
  },
];

const GALLERY_SLIDES = [
  {
    href: "/webdesign-coburg",
    imageSrc: "/images/Figma_Firseur.png",
    imageAlt: "Websites",
    
  },
  {
    href: "/online-marketing-coburg",
    imageSrc: "/images/Figma_Hund.png",
    imageAlt: "Marketing",
    
  },
  {
    href: "/appentwicklung-coburg",
    imageSrc: "/images/Figma_Immo.png",
    imageAlt: "Apps",
    
  },
  {
    href: "/microsoft365-loesungen-coburg",
    imageSrc: "/images/Figma_Tech.png",
    imageAlt: "M365 & Lösungen",
    
  },
];

export default function Home() {
  useReveal();

  const galleryRingRef = useRef(null);
  const timelineModernRef = useRef(null);
  const timelineProgressRef = useRef(null);

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

  // Timeline progress indicator
  useEffect(() => {
    const section = timelineModernRef.current;
    const bar = timelineProgressRef.current;
    if (!section || !bar) return;

    let rafId = null;
    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

    const update = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const start = Math.min(vh * 0.9, vh - 1); // start filling after entering viewport
      const total = rect.height + start; // span we consider for progress
      const progressed = clamp(start - rect.top, 0, total);
      const ratio = clamp(progressed / total, 0, 1);
      bar.style.width = `${(ratio * 100).toFixed(2)}%`;
      rafId = null;
    };

    const onScroll = () => {
      if (rafId == null) rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const timelineSteps = useMemo(() => {
    const rawSteps = [
      {
        href: "/digitalberatung-coburg",
        title: "Beratung (Digitalisierung & Förderungen)",
        description: "Kostenloses Erstgespräch, Potenzialanalyse und Fördermittel-Check.",
        ctaHref: "/digitalberatung-coburg",
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
              "image": "https://nexgen-consulting.de/images/logo.png",
              "logo": "https://nexgen-consulting.de/images/logo.png",
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
                  "url": "https://www.nexgen-consulting.de/kontakt"
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
         {/* Galerie: kreisförmiges Bild-Rondell */}
        <section id="gallery" className="py-16 sm:py-20 md:py-24 bg-brand-primary text-white">
          <div className="container max-w-screen-xl px-6 lg:px-8 relative">
            <div className="mx-auto max-w-2xl text-center space-y-4" data-reveal>
              <span className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">Galerie</span>
              <h3 className="text-3xl sm:text-4xl font-heading font-semibold">Online-Präsenz zeigen</h3>
              <p className="text-sm sm:text-base text-white/70">Digitalisierung in Coburg sichtbar gemacht – vom Webdesign für lokale Marken bis zur App Entwicklung für mittelständische Unternehmen in Oberfranken.</p>
            </div>

            <div className="relative mt-24 md:mt-28 lg:mt-32 mb-12 md:mb-16 flex justify-center">
              <div
                ref={galleryRingRef}
                className="gallery-ring"
                aria-label="Service Galerie, kreisförmig animiert"
              >
                <div className="gallery-ring-track">
                  {GALLERY_SLIDES.map((slide) => (
                    <a
                      key={slide.href}
                      href="/webdesign-coburg"
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

        <section id="timeline" className="hidden py-16 sm:py-20 md:py-24 bg-[#091B33]">
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
              <div className="absolute left-4 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-brand-primary/25 to-transparent md:hidden" aria-hidden="true" />
              <div className="hidden md:block absolute top-12 left-0 right-0 mx-8 h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" aria-hidden="true" />
              <ol className="relative flex flex-col gap-10 md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-12 items-stretch">
                {timelineSteps.map((step, index) => (
                  <li
                    key={`${step.href ?? "static"}-${index}`}
                    data-reveal
                    className="relative pl-12 md:pl-0 flex min-w-0" /* ensure children can stretch and not overflow */
                  >
                    <span
                      className="absolute left-3 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-brand-accent text-white font-semibold shadow-card md:static md:mx-auto md:mb-4"
                    >
                      {index + 1}
                    </span>
                    {(() => {
                      const stepHref = step.href || step.ctaHref;
                      const path = (stepHref || '').toLowerCase();
                      const t = (step.title || '').toLowerCase();
                      let iconSvg;
                      if (path.includes('/digitalberatung-coburg') || path.includes('/services/beratung') || t.includes('beratung') || t.includes('analyse')) {
                        iconSvg = (
                          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                            <path d="M12 2a7 7 0 0 0-4 12.9V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.1A7 7 0 0 0 12 2zm-2 18a2 2 0 0 0 4 0h-4z" />
                          </svg>
                        );
                      } else if (path.includes('/webdesign-coburg') || path.includes('/services/website') || t.includes('website') || t.includes('web')) {
                        iconSvg = (
                          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.9 6h-3.2A15.8 15.8 0 0 0 13 4.3 8.04 8.04 0 0 1 18.9 8zM12 4.1c.9.7 2 2.2 2.6 3.9H9.4c.6-1.7 1.7-3.2 2.6-3.9z" />
                          </svg>
                        );
                      } else if (path.includes('/online-marketing-coburg') || path.includes('/services/marketing') || t.includes('marketing')) {
                        iconSvg = (
                          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                            <path d="M3 11a2 2 0 0 0 2 2h2l8 4V5l-8 4H5a2 2 0 0 0-2 2zm8 6v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h6z" />
                          </svg>
                        );
                      } else if (path.includes('/schulungen-coburg') || path.includes('/services/schulungen') || t.includes('schulung') || t.includes('training')) {
                        iconSvg = (
                          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                            <path d="M4 6h16v12H4zM2 5h20v14H2z" />
                          </svg>
                        );
                      } else if (path.includes('/softwareentwicklung-coburg') || path.includes('/services/softwareentwicklung') || t.includes('software') || t.includes('entwicklung')) {
                        iconSvg = (
                          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                            <path d="M9 18 3 12l6-6 1.5 1.5L6 12l4.5 4.5L9 18zm6 0-1.5-1.5L18 12l-4.5-4.5L15 6l6 6-6 6z" />
                          </svg>
                        );
                      } else if (path.includes('/appentwicklung-coburg') || path.includes('/services/app') || t.includes('app')) {
                        iconSvg = (
                          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                            <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm3 18h4v-1h-4v1z" />
                          </svg>
                        );
                      } else if (path.includes('/logo-erstellen-coburg') || path.includes('/services/firmenidentitaet')) {
                        iconSvg = (
                          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                            <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM8 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm6 1h6v2h-6zM14 13h6v2h-6z" />
                          </svg>
                        );
                      } else if (path.includes('/microsoft365-loesungen-coburg') || path.includes('/services/loesungen') || t.includes('lösung') || t.includes('loesung')) {
                        iconSvg = (
                          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                            <path d="M8 2a2 2 0 0 1 2 2v1h2a2 2 0 1 1 0 4h-2v2h2a2 2 0 1 1 0 4h-2v1a2 2 0 0 1-4 0v-1H5a2 2 0 1 1 0-4h1V9H5a2 2 0 1 1 0-4h1V4a2 2 0 0 1 2-2z" />
                          </svg>
                        );
                      } else {
                        iconSvg = (
                          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
                            <path d="M4 4h16v2H4V4zm0 7h10v2H4v-2zm0 7h16v2H4v-2z" />
                          </svg>
                        );
                      }
                      const CardInner = (
                        <div className="relative rounded-brand-2xl p-[1px] bg-gradient-to-r from-brand-accent/0 via-brand-accent/25 to-brand-accent/0 transition-all duration-500 group-hover:from-brand-accent/40 group-hover:via-brand-accent/80 group-hover:to-brand-accent/40 group-hover:shadow-overlay flex-1 w-full h-full">
                          <div className="rounded-brand-2xl bg-brand-primary/85 supports-[backdrop-filter]:bg-brand-primary/70 backdrop-blur-md shadow-card ring-1 ring-white/10 transition-all duration-300 ease-brand group-hover:-translate-y-1 group-hover:ring-brand-accent/50 h-full w-full min-h-[280px]">
                            <div className="p-6 flex flex-col gap-4 flex-1 justify-between text-surface-light/90">
                              <div className="flex flex-col items-center gap-3 text-center">
                                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-brand-accent ring-1 ring-white/10 flex-none">{iconSvg}</span>
                                <h3 className="text-xl font-heading font-semibold text-white">
                                  {step.title}
                                </h3>
                              </div>

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
                            </div>
                          </div>
                        </div>
                      );
                      return stepHref ? (
                        <Link href={stepHref} className="group block focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent flex-1 w-full h-full">
                          {CardInner}
                        </Link>
                      ) : (
                        <div className="group block flex-1 w-full h-full">{CardInner}</div>
                      );
                    })()}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>  {/* Ende Timeline */ }

        {/* Timeline – neues Kachel‑Konzept */}
        <section id="timeline-modern" className="py-16 sm:py-20 md:py-24 bg-[#091B33]">
          <div className="container max-w-screen-xl px-6 lg:px-8 space-y-10">
            <div className="text-center" data-reveal>
              <p className="uppercase tracking-widest text-brand-accent font-semibold mb-3">Der Nexgen‑Fahrplan</p>
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-surface-light/90 mb-3">Klar strukturiert. Schritt für Schritt.</h2>
              <p className="text-surface-light/90 leading-relaxed max-w-3xl mx-auto">Von der ersten Beratung bis zur Umsetzung: Unsere Roadmap macht den Prozess transparent und erlebbar.</p>
            </div>

            <div className="relative" data-reveal>
              {/* Progress bar (sticky within section) */}
              
              <div className="pointer-events-none absolute left-4 top-0 bottom-0 w-px bg-white/10 md:hidden" aria-hidden />
              <ul className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
                {timelineSteps.map((step, index) => {
                  const stepHref = step.href || step.ctaHref;
                  const path = (stepHref || '').toLowerCase();
                  const t = (step.title || '').toLowerCase();
                  let iconSvg;
                  if (path.includes('/digitalisierung-coburg') || path.includes('/services/beratung') || t.includes('beratung') || t.includes('analyse')) {
                    iconSvg = (
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5"><path d="M12 2a7 7 0 0 0-4 12.9V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.1A7 7 0 0 0 12 2zm-2 18a2 2 0 0 0 4 0h-4z" /></svg>
                    );
                  } else if (path.includes('/webdesign-coburg') || path.includes('/services/website') || t.includes('website') || t.includes('web')) {
                    iconSvg = (
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.9 6h-3.2A15.8 15.8 0 0 0 13 4.3 8.04 8.04 0 0 1 18.9 8zM12 4.1c.9.7 2 2.2 2.6 3.9H9.4c.6-1.7 1.7-3.2 2.6-3.9z" /></svg>
                    );
                  } else if (path.includes('/social-media-marketing-coburg') || path.includes('/services/marketing') || t.includes('marketing')) {
                    iconSvg = (
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5"><path d="M3 11a2 2 0 0 0 2 2h2l8 4V5l-8 4H5a2 2 0 0 0-2 2zm8 6v2a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h6z" /></svg>
                    );
                  } else if (path.includes('/schulungen-software-coburg') || path.includes('/services/schulungen') || t.includes('schulung') || t.includes('training')) {
                    iconSvg = (
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5"><path d="M4 6l8-4 8 4-8 4-8-4zm0 6l8 4 8-4M4 18l8 4 8-4" /></svg>
                    );
                  } else if (path.includes('/softwareauswahl-coburg') || t.includes('branchensoftware') || t.includes('microsoft')) {
                    iconSvg = (
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5"><path d="M3 3h8v8H3V3zm0 10h8v8H3v-8zm10-10h8v8h-8V3zm0 10h8v8h-8v-8z" /></svg>
                    );
                  } else if (path.includes('/software-erstellen-coburg') || path.includes('/app-erstellen-coburg') || t.includes('software') || t.includes('app')) {
                    iconSvg = (
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5"><path d="M4 4h16v16H4V4zm4 3h8v2H8V7zm0 4h8v2H8v-2zm0 4h8v2H8v-2z" /></svg>
                    );
                  } else {
                    iconSvg = (
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5"><path d="M12 2l4 7H8l4-7zm0 20l-4-7h8l-4 7z" /></svg>
                    );
                  }

                  const Tile = (
                    <div className="group relative w-full md:min-w-0 md:w-auto">
                      <div className="relative rounded-brand-2xl p-[1px] bg-gradient-to-br from-indigo-600/40 via-white/10 to-cyan-400/40 transition-all duration-300 group-hover:from-indigo-500/60 group-hover:to-cyan-400/60">
                        <div className="rounded-brand-2xl h-full w-full bg-white/5 ring-1 ring-white/10 backdrop-blur-md">
                          <div className="flex items-center justify-between px-4 pt-4">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/90 ring-1 ring-white/10 text-sm font-semibold">{index + 1}</span>
                            <span className="inline-flex items-center justify-center rounded-xl bg-white/5 text-brand-accent ring-1 ring-white/10 h-9 w-9">{iconSvg}</span>
                          </div>
                          <div className="p-4 pb-5 h-[200px] overflow-hidden flex flex-col">
                            <h3 className="text-white text-lg font-heading font-semibold">{step.title}</h3>
                            {step.highlights.length > 1 ? (
                              <ul className="mt-2 space-y-2 text-surface-light/80 text-sm leading-relaxed">
                                {step.highlights.slice(0,3).map((highlight) => (
                                  <li key={highlight} className="flex items-start gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden />
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="mt-2 text-surface-light/80 text-sm leading-relaxed line-clamp-4">{step.highlights[0]}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );

                  return (
                    <li key={`${step.href ?? 'static'}-${index}`} className="md:contents">
                      {stepHref ? (
                        <Link href={stepHref} className="block focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent">
                          {Tile}
                        </Link>
                      ) : (
                        Tile
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

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
              <div data-reveal className="order-last md:order-none">
                <div className="relative mx-auto max-w-[14rem] sm:max-w-xs md:max-w-sm lg:max-w-md">
                  <div
                    className="hidden sm:block absolute sm:-inset-4 md:-inset-6 rounded-3xl bg-gradient-to-br from-brand-accent/15 via-white/5 to-transparent sm:blur-xl md:blur-2xl"
                    aria-hidden="true"
                  />
                  <div className="relative rounded-brand-2xl p-1 sm:p-2 bg-transparent sm:bg-white/5 backdrop-blur-0 sm:backdrop-blur-sm ring-0 sm:ring-1 ring-white/10 shadow-none sm:shadow-card">
                    <div className="rounded-brand-2xl overflow-hidden bg-white/5">
                      <img
                        src="/images/team.jpg"
                        alt="Unser Team"
                        className="w-full h-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div className="hidden sm:block pointer-events-none absolute inset-0 rounded-brand-2xl ring-1 ring-white/10" aria-hidden="true" />
                  </div>
                  
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
              <Link href="/kontakt" className="btn-primary inline-flex text-base sm:text-lg">
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



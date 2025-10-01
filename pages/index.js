import Head from "next/head";
import dynamic from "next/dynamic";\nimport Link from "next/link";
import { useEffect } from "react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import ServiceCategory from "../components/ServiceCategory";
import Chatbot from "../components/Chatbot";

const TestimonialsSlider = dynamic(() => import("../components/TestimonialsSlider"), { ssr: false });
const BlogSlider = dynamic(() => import("../components/BlogSlider"), { ssr: false });

export default function Home() {
  const onlineServices = [
    {
      title: "Webdesign & Branding",
      description: "Entwicklung responsiver Websites und einer starken Markenidentität für Ihren Online-Auftritt.",
      href: "/services/online",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v12H3V3z" />
        </svg>
      ),
    },
    {
      title: "Webshop",
      description: "Entwicklung responsiver Websites und einer starken Markenidentität für Ihren Online-Auftritt.",
      href: "/services/online",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5m12-5l2 5m-6-5v5" />
        </svg>
      ),
    },
  ];

  const automationServices = [
    {
      title: "Softwareentwicklung",
      description: "Wir entwickeln passgenaue Softwarelösungen, die Ihre Unternehmensprozesse nachhaltig digitalisieren und vereinfachen.",
      href: "/services/contact",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      ),
    },
    {
      title: "Appentwicklung",
      description: "Wir konzipieren und entwickeln maßgeschneiderte Business-Apps – plattformübergreifend, funktional und auf Ihre Ziele abgestimmt.",
      href: "/services/app",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      ),
    },
  ];

  const marketingServices = [
    {
      title: "Google Analytics",
      description: "Analysieren Sie das Verhalten Ihrer Kunden und optimieren Sie Ihre Marketingstrategien mit datenbasierten Einblicken.",
      href: "/services/online",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V6m-4 13V10m8 9v-4" />
        </svg>
      ),
    },
    {
      title: "SEO",
      description: "Verbessern Sie die Sichtbarkeit Ihrer Website in Suchmaschinen und erreichen Sie Ihre Zielgruppe effektiver.",
      href: "/services/online",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V6m-4 13V10m8 9v-4" />
        </svg>
      ),
    },
    {
      title: "Social Media",
      description: "Erstellen Sie ansprechende Inhalte und bauen Sie eine starke Präsenz auf Social-Media-Plattformen auf.",
      href: "/services/online",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V6m-4 13V10m8 9v-4" />
        </svg>
      ),
    },
    {
      title: "Logo & Firmenidentität",
      description: "Entwickeln Sie eine einzigartige Markenidentität und ein professionelles Logo, das Ihre Werte widerspiegelt.",
      href: "/services/online",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V6m-4 13V10m8 9v-4" />
        </svg>
      ),
    },
  ];

  const schulungenServices = [
    {
      title: "Teams & Planner",
      description: "Effizienzsteigerung durch automatisierte Geschäftsprozesse und Reduzierung manueller Fehler",
      href: "/services/online",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V6m-4 13V10m8 9v-4" />
        </svg>
      ),
    },
    {
      title: "Excel",
      description: "Maßgeschneiderte Softwarelösungen, die Ihre Prozesse digital optimieren.",
      href: "/services/online",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V6m-4 13V10m8 9v-4" />
        </svg>
      ),
    },
  ];

  const softwareServices = [
    {
      title: "Microsoft 365",
      description: "Nutzen Sie das volle Potenzial von Microsoft 365 – wir unterstützen Sie bei Einrichtung, Automatisierung und effizienter Zusammenarbeit im Team.",
      href: "/beratung",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="CurrentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 012 2v2a2 2 0 01-2-2H7a2 2 0 01-2-2v-2a2 2 0 01-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12V9a3 3 0 00-6 0v3" />
        </svg>
      ),
    },
    {
      title: "Branchenspezifisch",
      description: "Wir beraten Sie zu Software, die exakt auf Ihre Branche und Prozesse abgestimmt ist – für maximale Effizienz und intuitive Bedienung.",
      href: "/beratung",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="CurrentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 012 2v2a2 2 0 01-2-2H7a2 2 0 01-2-2v-2a2 2 0 01-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12V9a3 3 0 00-6 0v3" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(document.querySelectorAll('[data-reveal]'));

    if (mediaQuery.matches) {
      elements.forEach((element) => {
        element.classList.add("opacity-100", "translate-y-0");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((element) => {
      element.classList.add("opacity-0", "translate-y-6", "transition", "duration-700", "ease-brand");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Nexgen Consulting - Digitalisierung & Webdesign</title>
        <meta
          name="description"
          content="Nexgen Consulting unterstützt kleine und mittelständische Unternehmen bei Digitalisierung, Prozessautomatisierung, Webdesign und SEO - alles aus einer Hand."
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
                  Nexgen Consulting bietet maßgeschneiderte Lösungen für kleine und mittelständische Unternehmen – von Prozessautomatisierung über individuelle Software und Apps bis hin zu überzeugenden Web- und Markenauftritten. Wir begleiten Sie von der Idee bis zum skalierbaren Betrieb.
                </p>
              </div>
              <div data-reveal className="order-first md:order-none">
                <img src="/images/team.jpg" alt="Unser Team" className="w-full rounded-brand-2xl shadow-overlay ring-1 ring-white/10" />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 sm:py-20 md:py-24 bg-surface-light">
          <div className="container max-w-screen-xl px-6 lg:px-8 space-y-12">
            <div className="grid gap-8 lg:grid-cols-[1.3fr,1fr] lg:items-center" data-reveal>
              <div>
                <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-brand-primary mb-6">Alles aus einer Hand für Ihre Digitalisierung</h2>
                <p className="text-brand-primary/80 leading-relaxed">
                  Von der Strategie über Design und Marketing bis zur technischen Umsetzung greifen alle Leistungen ineinander. Wir orchestrieren Teams, Tools und Prozesse so, dass Ihr Unternehmen schneller und sicherer Ergebnisse erzielt.
                </p>
              </div>
              <div className="overflow-hidden rounded-brand-2xl ring-1 ring-brand-primary/10 shadow-card" data-reveal>
                <img src="/images/webdesign.jpg" alt="Digitale Services" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="space-y-14 text-white">
              <ServiceCategory title="Website & Shop" link="/services/website">
                {onlineServices.map((service, index) => (
                  <ServiceCard key={index} {...service} href={service.href} />
                ))}
              </ServiceCategory>

              <ServiceCategory title="Marketing" link="/services/marketing">
                {marketingServices.map((service, index) => (
                  <ServiceCard key={index} {...service} href={service.href} />
                ))}
              </ServiceCategory>

              <ServiceCategory title="Schulungen" link="/services/schulungen">
                {schulungenServices.map((service, index) => (
                  <ServiceCard key={index} {...service} href={service.href} />
                ))}
              </ServiceCategory>

              <ServiceCategory title="Software & Automatisierung" link="/services/software">
                {softwareServices.concat(automationServices).map((service, index) => (
                  <ServiceCard key={index} {...service} href={service.href} />
                ))}
              </ServiceCategory>
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

        <section id="contact-cta" className="py-16 sm:py-20 md:py-24 bg-surface-light">
          <div className="container max-w-screen-lg px-6 lg:px-8 text-center" data-reveal>
            <h2 className="text-3xl font-heading font-semibold text-brand-primary mb-4">Bereit für den nächsten Schritt?</h2>
            <p className="text-brand-primary/80 leading-relaxed mb-8">
              Buchen Sie eine kostenlose Erstberatung und erhalten Sie innerhalb weniger Tage eine klare Einschätzung zu Zeitplan, Budget und Machbarkeit.
            </p>
            <Link href="/kontakt" className="btn-primary inline-flex text-base sm:text-lg">
              Jetzt kostenlose Erstberatung anfordern
            </Link>
          </div>
        </section>

        {/* Kundenreferenzen und Blog bleiben optional verfügbar */}
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



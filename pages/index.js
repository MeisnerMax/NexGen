import Head from 'next/head';
import dynamic from 'next/dynamic';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer';
import ServiceCategory from '../components/ServiceCategory';
import Chatbot from "../components/Chatbot";
import { useState } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/next"

// Dynamisch importierte Slider, damit sie nur im Browser laufen
const TestimonialsSlider = dynamic(() => import('../components/TestimonialsSlider'), { ssr: false });
const BlogSlider = dynamic(() => import('../components/BlogSlider'), { ssr: false });

export default function Home() {
  

 
  // Daten für "Online"
  const onlineServices = [
    {
      title: "Webdesign & Branding",
      description: "Entwicklung responsiver Websites und einer starken Markenidentität für Ihren Online-Auftritt.",
      link: "/services/online",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v12H3V3z" />
        </svg>
      ),
    },
    {
      title: "Webshop",
      description: "Entwicklung responsiver Websites und einer starken Markenidentität für Ihren Online-Auftritt.",
      link: "/services/online",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5m12-5l2 5m-6-5v5" />
        </svg>
      ),
    },
    
  ];

  // Daten für "Automatisierung"
  const automationServices = [
    {
      title: "Prozessautomatisierung",
      description: "Reduzieren Sie manuelle Tätigkeiten und steigern Sie Ihre Effizienz durch intelligente Automatisierungslösungen – individuell auf Ihr Unternehmen abgestimmt.",
      link: "/services/automation",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      ),
    },
    {
      title: "Softwareentwicklung",
      description: "Wir entwickeln passgenaue Softwarelösungen, die Ihre Unternehmensprozesse nachhaltig digitalisieren und vereinfachen.",
      link: "/services/automation",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      ),
    },
    {
      title: "Appentwicklung",
      description: "Wir konzipieren und entwickeln maßgeschneiderte Business-Apps – plattformübergreifend, funktional und auf Ihre Ziele abgestimmt.",
      link: "/services/automation",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      ),
    },
  ];

  // Daten für "Marketing"
  const marketingServices = [
    {
      title: "Google Analytics",
      description: "Analysieren Sie das Verhalten Ihrer Kunden und optimieren Sie Ihre Marketingstrategien mit datenbasierten Einblicken.",
      link: "/services/online",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V6m-4 13V10m8 9v-4" />
        </svg>
      ),
    },
    {
      title: "SEO",
      description: "Verbessern Sie die Sichtbarkeit Ihrer Website in Suchmaschinen und erreichen Sie Ihre Zielgruppe effektiver.",
      link: "/services/online",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V6m-4 13V10m8 9v-4" />
        </svg>
      ),
    },
    {
      title: "Social Media",
      description: "Erstellen Sie ansprechende Inhalte und bauen Sie eine starke Präsenz auf Social-Media-Plattformen auf.",
      link: "/services/online",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V6m-4 13V10m8 9v-4" />
        </svg>
      ),
    },
    {
      title: "Logo & Firmenidentität",
      description: "Entwickeln Sie eine einzigartige Markenidentität und ein professionelles Logo, das Ihre Werte widerspiegelt.",
      link: "/services/online",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V6m-4 13V10m8 9v-4" />
        </svg>
      ),
    },
  ];

  // Daten für "Schulungen"
  const schulungenServices = [
    {
      title: "Teams & Planner",
      description: "Effizienzsteigerung durch automatisierte Geschäftsprozesse und Reduzierung manueller Fehler",
      link: "/services/online",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V6m-4 13V10m8 9v-4" />
        </svg>
      ),
    },
    {
      title: "Excel",
      description: "Maßgeschneiderte Softwarelösungen, die Ihre Prozesse digital optimieren.",
      link: "/services/online",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V6m-4 13V10m8 9v-4" />
        </svg>
      ),
    },
  ];

  // Daten für "Software"
  const softwareServices = [
    {
      title: "Microsoft 365",
      description: "Nutzen Sie das volle Potenzial von Microsoft 365 – wir unterstützen Sie bei Einrichtung, Automatisierung und effizienter Zusammenarbeit im Team.",
      link: "/services/automation",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 012 2v2a2 2 0 01-2-2H7a2 2 0 01-2-2v-2a2 2 0 01-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12V9a3 3 0 00-6 0v3" />
        </svg>
      ),
    },
    {
      title: "Branchenspezifisch",
      description: "Wir entwickeln Software, die exakt auf Ihre Branche und Prozesse abgestimmt ist – für maximale Effizienz und intuitive Bedienung.",
      link: "/services/automation",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 012 2v2a2 2 0 01-2-2H7a2 2 0 01-2-2v-2a2 2 0 01-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12V9a3 3 0 00-6 0v3" />
        </svg>
      ),
    },
  ];
  

  return (
    <>
      <Head>
      <title>Nexgen Consulting – Digitalisierung & Webdesign</title>
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
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
          }) }}
        />
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nexgen Consulting – Digitalisierung, Webdesign und Automatisierung" />
        <meta property="og:description" content="Nexgen Consulting – Ihr Partner für Digitalisierung, Prozessautomatisierung, Webdesign und SEO-Optimierung für kleine und mittelständische Unternehmen." />
        <meta property="og:image" content="https://nexgen-consulting.de/logo.png" />
        <meta property="og:url" content="https://nexgen-consulting.de" />
        <meta property="og:site_name" content="Nexgen Consulting" />
      </Head>

      <NavBar />

      {/* Hero-Bereich */}
      <Hero />

      <Chatbot /> {/* Chatbot-Komponente */}

      {/* Über Uns */}
      <section id="about" className="container mx-auto py-24 px-8 mt-16 bg-blue text-white rounded-lg" data-aos="fade-up" data-aos-duration="2000">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-[#E64000] font-bold mb-6">Über Uns</h2>
            <p className="text-xl leading-relaxed">
            Nexgen Consulting bietet maßgeschneiderte Lösungen für die Digitalisierung kleiner und mittelständischer Unternehmen – mit Fokus auf <strong>Coburg</strong>, <strong>Oberfranken</strong> und den gesamten deutschsprachigen Raum. Die Leistungen umfassen <strong>Prozessautomatisierung</strong>, <strong>Software- und App-Entwicklung</strong>, <strong>professionelles Webdesign</strong> sowie wirkungsvolle Online-Marketingstrategien. Jedes Projekt wird individuell und praxisnah umgesetzt – mit Fokus auf Qualität, Nutzerfreundlichkeit und nachhaltigem Mehrwert.
            </p>
          </div>
          <div className="md:w-1/2" data-aos="fade-left" data-aos-duration="2000">
            <img src="/images/team.jpg" alt="Unser Team" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      

        {/* Beschreibung unter "Unsere Services" */}
        <section className="container mx-auto py-12 text-white px-8 text-center  text-blue rounded-lg ">
          <h3 className="text-3xl font-bold text-[#E64000] mb-6">Alles aus einer Hand für Ihre Digitalisierung</h3>
          <p className="text-lg leading-relaxed">
          Ob Website-Erstellung, individuelle Softwarelösungen oder Prozessautomatisierung – bei Nexgen Consulting greifen alle Leistungen ineinander. Die ganzheitliche Herangehensweise ermöglicht eine kosteneffiziente, aufeinander abgestimmte Umsetzung digitaler Projekte – speziell ausgerichtet auf die Anforderungen kleiner und mittlerer Unternehmen. Durch individuelle Beratung und praxisorientierte Lösungen entsteht eine digitale Infrastruktur, die langfristig überzeugt.
          </p>

          {/* Services */}
      <section id="services" className="container mx-auto py-10 px-8 bg-blue text-white">
        <h2 className="text-4xl font-bold mb-12 text-[#E64000] text-center">Unsere Services</h2>
        <p className="text-lg leading-relaxed text-center mb-8">
        Die strukturierte Roadmap zur erfolgreichen Digitalisierung:
        Von der Idee über die Planung bis zur Umsetzung – alles abgestimmt auf moderne Anforderungen und praxisnahe Ergebnisse.
        </p>
      </section>

        {/* Website & Shop */}
        <div className="p-6 bg-blue rounded-lg  ">
          
          <ServiceCategory title="Website & Shop" direction="right">
            <ServiceCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v12H3V3z" />
                </svg>
              }
              title="Webdesign & Branding"
              description="Modernes Webdesign aus Coburg: Wir entwickeln responsive Websites mit Wiedererkennungswert – individuell, benutzerfreundlich und markenstark."              href="/services/website"
            />
            <ServiceCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5m12-5l2 5m-6-5v5" />
                </svg>
              }
              title="Webshop"
              description="Starten Sie Ihren eigenen Online-Shop mit professioneller Umsetzung – von der Produktpräsentation bis zur Zahlungsschnittstelle alles aus einer Hand."              href="/services/website"
            />
          </ServiceCategory>    
        </div>

        {/* Marketing */}
        <div className="p-6 bg-blue rounded-lg ">
          
          <ServiceCategory title="Marketing" direction="left">
            <ServiceCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V6m-4 13V10m8 9v-4" />
                </svg>
              }
              title="Google Analytics"
              description="Nutzen Sie datenbasierte Einblicke zur Optimierung Ihrer Website-Performance und Marketingstrategie mit Google Analytics."
              href="/services/marketing"
            />
            <ServiceCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V6m-4 13V10m8 9v-4" />
                </svg>
              }
              title="SEO"
              description="Steigern Sie Ihre Sichtbarkeit bei Google mit gezielter Suchmaschinenoptimierung – lokal und überregional."
              href="/services/marketing"
            />
            <ServiceCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V6m-4 13V10m8 9v-4" />
                </svg>
              }
              title="Social Media"
              description="Reichweite aufbauen, Kundenbindung stärken: Wir entwickeln individuelle Content-Strategien für Instagram, Facebook & Co."
              href="/services/marketing"
            />
            <ServiceCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V6m-4 13V10m8 9v-4" />
                </svg>
              }
              title="Logo & Firmenidentität"
              description="Ihr Unternehmen verdient ein klares Profil: Wir gestalten Ihr Logo und Ihre visuelle Identität – authentisch und einprägsam."
              href="/services/marketing"

            />
          </ServiceCategory>

          
        </div>
      
      {/* Kontakt-CTA */}
      <section id="contact" className="container mx-auto py-8 px-8 mt-16 bg-blue text-black rounded-lg">
        <h2 className="text-4xl font-bold mb-6 text-center text-[#E64000]">Kontakt</h2>
        <p className="text-xl text-white leading-relaxed mb-8 text-center">
        <strong>Digitalisierungspartner aus Coburg:</strong> Wir begleiten kleine und mittelständische Unternehmen bei Webdesign, SEO und digitalen Prozessen. Vereinbaren Sie jetzt ein persönliches Beratungsgespräch.
        </p>
        <a
          href="/services/contact"
          className="inline-block bg-[#E64000] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Zum Kontaktformular
        </a>
      </section>
      
      {/* Schulungen */}
      <div className="p-24 bg-blue rounded-lg ">
        <ServiceCategory title="Schulungen" direction="right">
            <ServiceCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V6m-4 13V10m8 9v-4" />
              </svg>
            }
            title="Microsoft Teams & Planner"
            description="Optimieren Sie Ihre Teamarbeit mit strukturierten Workflows – wir zeigen, wie Sie Microsoft-Tools effizient nutzen."
            href="/services/contact"

          />
          <ServiceCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V6m-4 13V10m8 9v-4" />
              </svg>
            }
            title="Excel für Unternehmen"
            description="Von Grundlagen bis Automatisierung: Unsere Excel-Schulungen zeigen, wie Sie Zeit sparen und Fehler vermeiden."
            href="/services/contact"  
          />
        </ServiceCategory>
      </div>

      {/* Software */}
      <div className="mb-12 p-24 bg-blue rounded-lg  ">
          <ServiceCategory title="Software" direction="left">
            {softwareServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                href="/services/contact"/>
            ))}
          </ServiceCategory>
        </div>

      {/* Porzessoptimierung */}
      <div className="mb-12 p-24 bg-blue rounded-lg  ">
          
          <ServiceCategory title="Prozessoptimierung"  direction="right">
            {automationServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                href="/services/contact"
              />
            ))}
          </ServiceCategory>

         
        </div>

        </section>

      {/* Kundenreferenzen 
      <section id="testimonials" className="bg-blue py-24 px-8 bg-blue text-white" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-12 text-center">Kundenreferenzen</h2>
        <TestimonialsSlider />
      </section> */}

      {/* Kontakt-CTA */}
      <section id="contact-cta" className="bg-blue py-24 px-8 text-white text-center" data-aos="fade-up">
        <h2 className="text-4xl text-[#E64000] font-bold mb-6">Kontaktieren Sie uns</h2>
        <p className="text-xl mb-8">
          Das passende gefunden? Jeder Service ist auch einzeln verfügbar
        </p>
        <a
          href="/services/contact"
          className="inline-block bg-[#0A1129] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Zum Kontaktformular
        </a>
      </section>

      {/* Blog-Teaser 
      <section id="blog" className="container bg-blue mx-auto py-24 px-8" data-aos="fade-up">
        <h2 className="text-4xl text-white font-bold mb-12 text-center">Neueste Blogbeiträge</h2>
        <BlogSlider />
      </section> */}

      {/* Footer */}
      
    </>
  );
}

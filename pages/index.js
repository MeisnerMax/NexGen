import Head from 'next/head';
import dynamic from 'next/dynamic';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer';
import ServiceCategory from '../components/ServiceCategory';
import Chatbot from "../components/Chatbot";
import { useState } from 'react';

// Dynamisch importierte Slider, damit sie nur im Browser laufen
const TestimonialsSlider = dynamic(() => import('../components/TestimonialsSlider'), { ssr: false });
const BlogSlider = dynamic(() => import('../components/BlogSlider'), { ssr: false });

export default function Home() {
  const [activeServices, setActiveServices] = useState({}); // Dynamischer State für alle Bereiche

  const handleServiceClick = (category, service) => {
    setActiveServices((prev) => ({
      ...prev,
      [category]: prev[category] === service ? null : service, // Toggle für jeden Bereich
    }));
  };

  const additionalContainers = {
    "Webdesign & Branding": [
      {
        title: "Responsive Design",
        description: "Optimierte Darstellung auf allen Endgeräten für eine bessere Nutzererfahrung.",
      },
      {
        title: "SEO-Optimierung",
        description: "Verbesserung der Sichtbarkeit Ihrer Website in Suchmaschinen.",
      },
      {
        title: "Content Management",
        description: "Einfache Verwaltung und Aktualisierung Ihrer Inhalte.",
      },
    ],
    Webshop: [
      {
        title: "Produktkatalog",
        description: "Erstellen Sie einen umfassenden Katalog für Ihre Produkte.",
      },
      {
        title: "Zahlungssysteme",
        description: "Integration sicherer und flexibler Zahlungssysteme.",
      },
      {
        title: "Versandoptionen",
        description: "Anpassbare Versandoptionen für Ihre Kunden.",
      },
    ],
    "Google Analytics": [
      {
        title: "Datenanalyse",
        description: "Erhalten Sie wertvolle Einblicke in das Verhalten Ihrer Kunden.",
      },
      {
        title: "Berichtserstellung",
        description: "Automatisierte Berichte für fundierte Entscheidungen.",
      },
      {
        title: "Conversion-Tracking",
        description: "Verfolgen Sie die Effektivität Ihrer Marketingkampagnen.",
      },
    ],
    SEO: [
      {
        title: "Keyword-Recherche",
        description: "Finden Sie die besten Keywords für Ihre Zielgruppe.",
      },
      {
        title: "On-Page-Optimierung",
        description: "Optimieren Sie Ihre Inhalte für bessere Rankings.",
      },
      {
        title: "Backlink-Strategie",
        description: "Erhöhen Sie Ihre Autorität durch hochwertige Backlinks.",
      },
    ],
    "Social Media": [
      {
        title: "Strategieentwicklung",
        description: "Erstellen Sie eine effektive Social-Media-Strategie.",
      },
      {
        title: "Content-Erstellung",
        description: "Kreative Inhalte, die Ihre Zielgruppe ansprechen.",
      },
      {
        title: "Community-Management",
        description: "Interagieren Sie mit Ihrer Community und bauen Sie Beziehungen auf.",
      },
    ],
    "Logo & Firmenidentität": [
      {
        title: "Logo-Design",
        description: "Entwicklung eines einzigartigen Logos für Ihre Marke.",
      },
      {
        title: "Markenrichtlinien",
        description: "Definieren Sie klare Richtlinien für Ihre Markenidentität.",
      },
      {
        title: "Visuelle Kommunikation",
        description: "Konsistente visuelle Elemente für Ihre Marke.",
      },
    ],
    "Microsoft 365": [
      {
        title: "Effiziente Zusammenarbeit",
        description: "Nutzen Sie Microsoft 365 für eine nahtlose Teamarbeit.",
      },
      {
        title: "Automatisierung",
        description: "Automatisieren Sie wiederkehrende Aufgaben mit Power Automate.",
      },
      {
        title: "Datensicherheit",
        description: "Schützen Sie Ihre Daten mit den Sicherheitsfunktionen von Microsoft 365.",
      },
    ],
    Branchenspezifisch: [
      {
        title: "Individuelle Lösungen",
        description: "Maßgeschneiderte Software für Ihre Branche.",
      },
      {
        title: "Prozessoptimierung",
        description: "Optimieren Sie Ihre Arbeitsabläufe mit branchenspezifischen Tools.",
      },
      {
        title: "Integration",
        description: "Nahtlose Integration in bestehende Systeme.",
      },
    ],
    Prozessautomatisierung: [
      {
        title: "Workflow-Optimierung",
        description: "Automatisieren Sie Ihre Geschäftsprozesse für mehr Effizienz.",
      },
      {
        title: "Zeitersparnis",
        description: "Reduzieren Sie manuelle Aufgaben und sparen Sie Zeit.",
      },
      {
        title: "Fehlerreduktion",
        description: "Minimieren Sie Fehler durch automatisierte Prozesse.",
      },
    ],
    Softwareentwicklung: [
      {
        title: "Individuelle Software",
        description: "Entwicklung maßgeschneiderter Softwarelösungen.",
      },
      {
        title: "Agile Entwicklung",
        description: "Flexibler Entwicklungsprozess für schnelle Ergebnisse.",
      },
      {
        title: "Support & Wartung",
        description: "Langfristige Unterstützung und regelmäßige Updates.",
      },
    ],
    Appentwicklung: [
      {
        title: "Mobile Apps",
        description: "Entwicklung von Apps für iOS und Android.",
      },
      {
        title: "Benutzerfreundlichkeit",
        description: "Intuitive Designs für eine optimale Nutzererfahrung.",
      },
      {
        title: "Integration",
        description: "Nahtlose Integration in bestehende Systeme.",
      },
    ],
    Excel: [
      {
        title: "Einführung in Excel",
        description: "Effizienzsteigerung durch automatisierte Geschäftsprozesse und Reduzierung manueller Fehler.",
      },
      {
        title: "Excel Profi Kurs",
        description: "Maßgeschneiderte Softwarelösungen, die Ihre Prozesse digital optimieren.",
      },
      {
        title: "VBA und mehr",
        description: "Maßgeschneiderte Softwarelösungen, die Ihre Prozesse digital optimieren.",
      },
    ],
    "Teams & Planner": [
      {
        title: "Teams",
        description: "Optimieren Sie die Zusammenarbeit in Ihrem Team mit Microsoft Teams.",
      },
      {
        title: "Planner",
        description: "Organisieren Sie Ihre Projekte effizient mit Microsoft Planner.",
      },
      {
        title: "Outlook",
        description: "Verwalten Sie Ihre E-Mails und Termine effektiv mit Microsoft Outlook.",
      },
    ],
  };

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
      description: "Effizienzsteigerung durch automatisierte Geschäftsprozesse und Reduzierung manueller Fehler.",
      link: "/services/automation",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      ),
    },
    {
      title: "Softwareentwicklung",
      description: "Maßgeschneiderte Softwarelösungen, die Ihre Prozesse digital optimieren.",
      link: "/services/automation",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
        </svg>
      ),
    },
    {
      title: "Appentwicklung",
      description: "Maßgeschneiderte Softwarelösungen, die Ihre Prozesse digital optimieren.",
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
      description: "Effizienzsteigerung durch automatisierte Geschäftsprozesse und Reduzierung manueller Fehler.",
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
      description: "Maßgeschneiderte Softwarelösungen, die Ihre Prozesse digital optimieren.",
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
        <title>Nexgen Consulting – Digitalisierung, Webdesign und Automatisierung</title>
        <meta
          name="description"
          content="Nexgen Consulting – Ihr Partner für Digitalisierung, Prozessautomatisierung, Webdesign und SEO-Optimierung für kleine und mittelständische Unternehmen."
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
              Nexgen Consulting bietet umfassende Komplettlösungen <strong>für die Digitalisierung im Mittelstand</strong> – speziell für kleine und mittelständische Unternehmen in <strong>Coburg</strong>, <strong>Oberfranken</strong> und ganz Deutschland. Von der <strong>Prozessautomatisierung</strong> über <strong>Software- und App-Entwicklung</strong> bis hin zu modernem Webdesign und effektiven Marketingstrategien begleiten wir Sie als zuverlässiger Partner vor Ort. Gemeinsam gestalten wir Ihre digitale Zukunft.
            </p>
          </div>
          <div className="md:w-1/2" data-aos="fade-left" data-aos-duration="2000">
            <img src="/images/team.jpg" alt="Unser Team" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      

        {/* Beschreibung unter "Unsere Services" */}
        <section className="container mx-auto py-12 text-white px-8 text-center  text-blue rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold text-[#E64000] mb-6">Alles aus einer Hand für Ihre Digitalisierung</h3>
          <p className="text-lg leading-relaxed">
            Statt sich zwischen verschiedenen Anbietern für Website-Entwicklung, Software oder Prozessautomatisierung zu entscheiden, bieten wir Ihnen alle Schritte, die Ihr Unternehmen für die Digitalisierung benötigt, aus einer Hand. 
            Mit unserem umfassenden Service decken wir alle Bereiche ab – von der Planung bis zur Umsetzung. 
            Durch unseren ganzheitlichen Ansatz können wir Ihnen nicht nur maßgeschneiderte Lösungen bieten, sondern diese auch kostengünstiger als die Konkurrenz umsetzen - perfekt für Kleinunternehmen.
          </p>

          {/* Services */}
      <section id="services" className="container mx-auto py-24 px-8 bg-blue text-white">
        <h2 className="text-4xl font-bold mb-12 text-[#E64000] text-center">Unsere Services</h2>
        <p className="text-lg leading-relaxed text-center mb-8">
          Ihre Roadmap zum digitalen Erfolg
          Gemeinsam gestalten wir die Zukunft Ihres Unternehmens.
        </p>
      </section>

        {/* Website & Shop */}
        <div className="p-6 bg-blue rounded-lg shadow-lg ">
          
          <ServiceCategory title="Website & Shop" direction="right">
            <ServiceCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18v12H3V3z" />
                </svg>
              }
              title="Webdesign & Branding"
              description="Entwicklung responsiver Websites und einer starken Markenidentität."
              onClick={() => handleServiceClick("Website & Shop", "Webdesign & Branding")}
            />
            <ServiceCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 5m12-5l2 5m-6-5v5" />
                </svg>
              }
              title="Webshop"
              description="Erstellen Sie einen modernen Webshop für Ihr Unternehmen."
              onClick={() => handleServiceClick("Website & Shop", "Webshop")}
            />
          </ServiceCategory>

          {/* Additional Containers */}
          {activeServices["Website & Shop"] && additionalContainers[activeServices["Website & Shop"]] && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {additionalContainers[activeServices["Website & Shop"]].map((container, index) => (
                <div key={index} className="bg-[#E65100] text-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">{container.title}</h3>
                  <p>{container.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Marketing */}
        <div className="p-6 bg-blue rounded-lg shadow-lg ">
          
          <ServiceCategory title="Marketing" direction="left">
            <ServiceCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V6m-4 13V10m8 9v-4" />
                </svg>
              }
              title="Google Analytics"
              description="Analysieren Sie das Verhalten Ihrer Kunden und optimieren Sie Ihre Marketingstrategien mit datenbasierten Einblicken."
              onClick={() => handleServiceClick("Marketing", "Google Analytics")}
            />
            <ServiceCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V6m-4 13V10m8 9v-4" />
                </svg>
              }
              title="SEO"
              description="Verbessern Sie die Sichtbarkeit Ihrer Website in Suchmaschinen und erreichen Sie Ihre Zielgruppe effektiver."
              onClick={() => handleServiceClick("Marketing", "SEO")}
            />
            <ServiceCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V6m-4 13V10m8 9v-4" />
                </svg>
              }
              title="Social Media"
              description="Erstellen Sie ansprechende Inhalte und bauen Sie eine starke Präsenz auf Social-Media-Plattformen auf."
              onClick={() => handleServiceClick("Marketing", "Social Media")}
            />
            <ServiceCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V6m-4 13V10m8 9v-4" />
                </svg>
              }
              title="Logo & Firmenidentität"
              description="Entwickeln Sie eine einzigartige Markenidentität und ein professionelles Logo, das Ihre Werte widerspiegelt."
              onClick={() => handleServiceClick("Marketing", "Logo & Firmenidentität")}
            />
          </ServiceCategory>

          {/* Additional Containers */}
          {activeServices["Marketing"] && additionalContainers[activeServices["Marketing"]] && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {additionalContainers[activeServices["Marketing"]].map((container, index) => (
                <div key={index} className="bg-[#E65100] text-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">{container.title}</h3>
                  <p>{container.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      
      {/* Kontakt-CTA */}
      <section id="contact" className="container mx-auto py-24 px-8 mt-16 bg-blue text-black rounded-lg">
  <h2 className="text-4xl font-bold mb-6 text-center text-[#E64000]">Kontakt</h2>
  <p className="text-xl text-white leading-relaxed mb-8 text-center">
    <strong>Lokal in Coburg verwurzelt:</strong> Wir sind als Coburger Unternehmen direkt vor Ort für Sie da. Ob Digitalisierung, Webdesign oder **SEO in Coburg** – mit persönlicher Beratung begleiten wir Sie auf Ihrem Weg der digitalen Transformation. Treten Sie gern mit uns in Kontakt, um Ihr Projekt zu besprechen.
  </p>
        <a
          href="/services/contact"
          className="inline-block bg-[#E64000] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Zum Kontaktformular
        </a>
      </section>
      
      {/* Schulungen */}
      <div className="p-6 bg-blue rounded-lg shadow-lg ">
        <ServiceCategory title="Schulungen" direction="right">
            <ServiceCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V6m-4 13V10m8 9v-4" />
              </svg>
            }
            title="Teams & Planner"
            description="Effizienzsteigerung durch automatisierte Geschäftsprozesse und Reduzierung manueller Fehler"
            onClick={() => handleServiceClick("Schulungen", "Teams & Planner")}
          />
          <ServiceCard
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19V6m-4 13V10m8 9v-4" />
              </svg>
            }
            title="Excel"
            description="Maßgeschneiderte Softwarelösungen, die Ihre Prozesse digital optimieren."
            onClick={() => handleServiceClick("Schulungen", "Excel")}
          />
        </ServiceCategory>

        {/* Additional Containers */}
        {activeServices["Schulungen"] && additionalContainers[activeServices["Schulungen"]] && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {additionalContainers[activeServices["Schulungen"]].map((container, index) => (
              <div key={index} className="bg-[#E65100] text-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">{container.title}</h3>
                <p>{container.description}</p>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Software */}
      <div className="mb-12 p-6 bg-blue rounded-lg shadow-lg ">
          
          <ServiceCategory title="Software" direction="left">
            {softwareServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                onClick={() => handleServiceClick("Software", service.title)} // Toggle für Unterordner
              />
            ))}
          </ServiceCategory>

          {/* Additional Containers */}
          {activeServices["Software"] && additionalContainers[activeServices["Software"]] && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {additionalContainers[activeServices["Software"]].map((container, index) => (
                <div key={index} className="bg-[#E65100] text-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">{container.title}</h3>
                  <p>{container.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

      {/* Porzessoptimierung */}
      <div className="mb-12 p-6 bg-blue rounded-lg shadow-lg ">
          
          <ServiceCategory title="Prozessoptimierung"  direction="right">
            {automationServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                onClick={() => handleServiceClick("Prozessoptimierung", service.title)} // Toggle für Unterordner
              />
            ))}
          </ServiceCategory>

          {/* Additional Containers */}
          {activeServices["Prozessoptimierung"] && additionalContainers[activeServices["Prozessoptimierung"]] && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {additionalContainers[activeServices["Prozessoptimierung"]].map((container, index) => (
                <div key={index} className="bg-[#E65100] text-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">{container.title}</h3>
                  <p>{container.description}</p>
                </div>
              ))}
            </div>
          )}
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
      <Footer />
    </>
  );
}

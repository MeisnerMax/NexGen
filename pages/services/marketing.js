// pages/services/marketing.js
import Head from 'next/head';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Chatbot from "../../components/Chatbot";

export default function MarketingService() {
  return (
    <>
      <Head>
        <title>Marketing & SEO – Nexgen Consulting</title>
        <meta
          name="description"
          content="Erfolgreiches Online-Marketing, SEO und Social Media Strategien von Nexgen Consulting – für mehr Reichweite und nachhaltige Sichtbarkeit."
        />
        <meta
          name="keywords"
          content="Marketing, SEO, Social Media, Google Analytics, Sichtbarkeit, Content Marketing"
        />
        <meta name="author" content="Nexgen Consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Marketing & SEO – Nexgen Consulting" />
        <meta property="og:description" content="Maßgeschneiderte Marketingstrategien für mehr digitale Sichtbarkeit und Kundenbindung." />
        <meta property="og:url" content="https://nexgen-consulting.de/services/marketing" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://nexgen-consulting.de/logo.png" />
      </Head>

      <NavBar />
      <Chatbot />

      <section className="container mx-auto py-24 px-8 mt-16 bg-blue text-white rounded-lg">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E64000] mb-6">Marketing & Sichtbarkeit</h1>
          <p className="text-xl max-w-3xl mx-auto">
          Ob SEO, Google Analytics oder Social Media: Mit datengetriebenen Strategien steigern wir Ihre Online-Sichtbarkeit, erhöhen Ihre Reichweite und stärken Ihre Kundenbindung – für messbaren Erfolg im digitalen Raum.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-8 py-16 grid md:grid-cols-4 gap-8 text-white">
        <div className="bg-blue-900 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Google Analytics</h3>
          <p>
          Verwandeln Sie Daten in echte Wettbewerbsvorteile: Mit Google Analytics analysieren wir das Verhalten Ihrer Nutzer und zeigen Optimierungspotenziale für Ihre Website auf.
          </p>
          <img
            src="/images/analytics.png"
            alt="Beispiel einer Basis-Website"
            className="w-full h-auto rounded mt-4"
          />
        </div>
       

        <div className="bg-blue-900 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">SEO-Optimierung</h3>
          <p>
          Mehr Sichtbarkeit, mehr Reichweite, mehr Kunden: Wir verbessern Ihr Google-Ranking durch strukturierte Onpage- und Offpage-Optimierung sowie gezielten Content.
          </p>
          <img
            src="/images/SEO.png"
            alt="Beispiel einer Basis-Website"
            className="w-full h-auto rounded mt-4"
          />
        </div>
     

        <div className="bg-blue-900 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Social Media</h3>
          <p>
          Erreichen Sie Ihre Zielgruppe dort, wo sie täglich aktiv ist: Wir entwickeln effektive Social-Media-Strategien, erstellen kreative Inhalte und steigern Ihre Markenbindung.
          </p>
          <img
            src="/images/instagram.png"
            alt="Beispiel einer Basis-Website"
            className="w-full h-auto rounded mt-4"
          />
        </div>

        <div className="bg-blue-900 p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Firmenidentität</h3>
          <p>
          Wir gestalten Logos mit Charakter: Zeitlos, einzigartig und exakt auf Ihre Zielgruppe abgestimmt. Entwickeln Sie mit uns eine starke visuelle Identität für Ihr Unternehmen.
          </p>
          <img
            src="/images/firmenidentität.png"
            alt="Beispiel einer Basis-Website"
            className="w-full h-auto rounded mt-4"
          />
        </div>
      </section>

    


      <section className="container mx-auto px-8 pb-24 text-center">
        <h2 className="text-3xl font-bold text-[#E64000] mb-6">Ihre Marke verdient Sichtbarkeit</h2>
        <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
          Buchen Sie eine unverbindliche Marketinganalyse und lassen Sie sich beraten, wie wir gemeinsam Ihre Onlinepräsenz ausbauen.
        </p>
        <a
          href="/services/contact"
          className="bg-[#E64000] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-white hover:text-[#E64000] transition"
        >
          Jetzt Termin sichern
        </a>
      </section>

      
    </>
  );
}
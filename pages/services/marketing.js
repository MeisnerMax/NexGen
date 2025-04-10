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

      
      <Chatbot />

      <section className="container mx-auto py-24 px-8 mt-16 bg-blue text-white rounded-lg"> <div className="text-center"> <h1 className="text-4xl md:text-5xl font-bold text-[#E64000] mb-6">Marketing & Sichtbarkeit</h1> <p className="text-xl max-w-3xl mx-auto"> Ob SEO, Google Analytics oder Social Media: Mit datengetriebenen Strategien steigern wir Ihre Online-Sichtbarkeit, erhöhen Ihre Reichweite und stärken Ihre Kundenbindung – für messbaren Erfolg im digitalen Raum. </p> </div> </section>

      <section className="container mx-auto px-8 py-16 space-y-8 text-white">

      <div className="flex flex-col md:flex-row items-center bg-gray-900 p-6 rounded-lg shadow-md">
          {/* Bild rechts */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/firmenidentität.png"
              alt="Beispiel einer Basis-Website"
              className="w-3/4 h-auto rounded"
            />
          </div>
          {/* Text links */}
          <div className="md:w-3/4 mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold mb-2">Firmenidentität</h3>
            
            <p>
              Ob Logo, Farbwelt, Typografie, Geschäftsausstattung oder digitale Medien – wir entwickeln ein einheitliches, starkes Designkonzept für Ihr Unternehmen. Unsere Designs sind zeitlos, einzigartig und genau auf Ihre Marke und Zielgruppe abgestimmt.
            </p>
            <p>Unsere Leistungen im Bereich Corporate Design:</p>
            <ul className="list-disc list-inside">
              <li>Logoentwicklung mit Charakter und Wiedererkennungswert</li>
              <li>Farb- und Schriftkonzepte passend zu Ihrer Markenidentität</li>
              <li>Gestaltung von Visitenkarten, Briefpapier & Geschäftsdokumenten</li>
              <li>Social-Media-Vorlagen und digitale Designvorlagen</li>
              <li>Styleguides für einen konsistenten Markenauftritt</li>
              <li>Redesign bestehender Markenauftritte mit moderner Ausrichtung</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-md">
          {/* Text links */}
          <div className="md:w-3/4 mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold mb-2">Social Media</h3>
            <p>
              Social Media Marketing mit Strategie, Kreativität und messbarem Erfolg.
            </p>
            <p>
              Erreichen Sie Ihre Zielgruppe dort, wo sie täglich aktiv ist – auf Instagram, Facebook, LinkedIn & Co. Wir entwickeln individuelle Social-Media-Strategien, die Ihre Marke sichtbar machen, Reichweite gezielt ausbauen und Ihre Community nachhaltig stärken.
            </p>
            <p>
              Wir kümmern uns um alles – von der Idee bis zur Umsetzung: Ob organisches Wachstum oder gezielte Werbekampagnen: Mit kreativen Inhalten, professionellem Community-Management und datenbasierten Maßnahmen bringen wir Ihre Social-Media-Präsenz auf das nächste Level.
            </p>
          </div>
          {/* Bild rechts */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/Instagram.png"
              alt="Beispiel einer Basis-Website"
              className="w-3/4 h-auto rounded"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center bg-gray-900 p-6 rounded-lg shadow-md">
          {/* Bild rechts */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/analytics.png"
              alt="Beispiel einer Basis-Website"
              className="w-3/4 h-auto rounded"
            />
          </div>
          {/* Text links */}
          <div className="md:w-3/4 mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold mb-2">Google Analytics</h3>
            
            <p>
              Verwandeln Sie Besucherzahlen in Erkenntnisse und Entscheidungen. Durch gezielte Webanalyse mit Google Analytics (GA4) und ergänzenden Tools zeigen wir Ihnen, wie Nutzer Ihre Website wirklich verwenden – und wo ungenutzte Potenziale liegen.
            </p>
            <p>
              Unser Ziel: Mehr Conversions, bessere Nutzererfahrung, langfristiger Erfolg. Wir analysieren das Verhalten Ihrer Zielgruppe, identifizieren Schwachstellen im Nutzerfluss und entwickeln datenbasierte Optimierungsvorschläge für Struktur, Inhalte und Marketingmaßnahmen Ihrer Website.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center bg-gray-800 p-6 rounded-lg shadow-md">
          {/* Text links */}
          <div className="md:w-3/4 mb-4 md:mb-0">
            <h3 className="text-2xl font-semibold mb-2">SEO-Optimierung</h3>
            <p>
              Wir bringen Ihre Website bei Google nach vorne – durch eine ganzheitliche Kombination aus technischer Onpage-Optimierung, hochwertigem Content und strategischem Linkaufbau (Offpage-SEO). So werden Sie genau dort gefunden, wo Ihre Zielgruppe nach Ihren Leistungen sucht.
            </p>
          
            <p>
              Unsere Leistungen im Bereich SEO:
            </p>
            <ul className="list-disc list-inside">
              <li>SEO-Audit & Onpage-Optimierung (Pagespeed, Meta-Daten, Struktur, Mobile-Optimierung)</li>
              <li>Keyword-Recherche & Content-Strategie</li>
              <li>Erstellung suchmaschinenoptimierter Texte und Landingpages</li>
              <li>Interne Verlinkung & Usability-Optimierung</li>
              <li>Lokale SEO-Maßnahmen (z. B. Google My Business)</li>
              <li>Offpage-Optimierung & Backlinkaufbau</li>
              <li>Monitoring, Ranking-Tracking & regelmäßige Reportings</li>
            </ul>
          </div>
          {/* Bild rechts */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="/images/SEO.png"
              alt="Beispiel einer Basis-Website"
              className="w-3/4 h-auto rounded"
            />
          </div>
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
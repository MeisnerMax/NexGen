// pages/services/schulungen.js
import Head from 'next/head';
import Chatbot from "../../components/Chatbot";

export default function SchulungenService() {
  return (
    <>
      <Head>
        <title>Digitale Schulungen - Nexgen Consulting</title>
        <meta
          name="description"
          content="Schulungen für Microsoft Teams, Planner und Excel – praxisnah, interaktiv und auf kleine Unternehmen zugeschnitten."
        />
        <meta
          name="keywords"
          content="Microsoft Teams, Excel, Schulung, Workshops, digitale Weiterbildung, Planner, Outlook"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Nexgen Consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Digitale Schulungen - Nexgen Consulting" />
        <meta property="og:description" content="Interaktive Schulungen für Microsoft 365, Excel und mehr – effizient, praktisch und direkt umsetzbar." />
        <meta property="og:url" content="https://nexgen-consulting.de/schulungen-coburg" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://nexgen-consulting.de/logo.png" />
        <link rel="canonical" href="https://nexgen-consulting.de/schulungen-coburg" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Schulungen in Coburg",
          serviceType: "Schulungen",
          areaServed: "Coburg, Germany",
          provider: { "@type": "LocalBusiness", name: "Nexgen Consulting", url: "https://nexgen-consulting.de", telephone: "+49 1525 9089486", address: { "@type": "PostalAddress", addressLocality: "Coburg", addressCountry: "DE" } },
          url: "https://nexgen-consulting.de/schulungen-coburg"
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

      <section className="container mx-auto py-24 px-8 mt-16 bg-blue text-white rounded-lg">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E64000] mb-6">Digitale Schulungen</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Praxisnahe Trainings zu Microsoft 365, Excel und digitalen Tools. Ob Team‑Kommunikation, Organisation oder Daten – wir machen Ihr Team fit.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-8 py-16 grid md:grid-cols-3 gap-8 text-white">
        <div className="bg-brand-primary p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Microsoft Teams & Planner</h3>
          <p>
            Zusammenarbeit digital strukturieren: klare Meetings, gemeinsame Planung und gute Team‑Kommunikation.
          </p>
        </div>

        <div className="bg-brand-primary p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Excel Grund‑ & Aufbaukurse</h3>
          <p>
            Von den Grundlagen bis zur Auswertung mit Pivot und einfachen Automationen – direkt im Alltag nutzbar.
          </p>
        </div>

        <div className="bg-brand-primary p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Outlook & Office‑Organisation</h3>
          <p>
            E‑Mails, Kalender und Aufgaben effizient organisieren und sinnvoll verbinden.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-8 pb-24 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Schulungen, die wirken</h2>
        <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
          Wir holen Ihr Team dort ab, wo es steht – online oder vor Ort in Coburg und Umgebung. Jetzt unverbindlich anfragen!
        </p>
        <a
          href="/kontakt"
          className="bg-[#E64000] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-white hover:text-[#E64000] transition"
        >
          Schulung anfragen
        </a>
      </section>

    </>
  );
}


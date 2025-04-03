// pages/services/schulungen.js
import Head from 'next/head';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Chatbot from "../../components/Chatbot";

export default function SchulungenService() {
  return (
    <>
      <Head>
        <title>Digitale Schulungen – Nexgen Consulting</title>
        <meta
          name="description"
          content="Schulungen für Microsoft Teams, Planner und Excel – praxisnah, interaktiv und speziell auf kleine Unternehmen zugeschnitten."
        />
        <meta
          name="keywords"
          content="Microsoft Teams, Excel, Schulung, Workshops, digitale Weiterbildung, Planner, Outlook"
        />
        <meta name="author" content="Nexgen Consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Digitale Schulungen – Nexgen Consulting" />
        <meta property="og:description" content="Interaktive Schulungen für Microsoft 365, Excel und mehr – effizient, praktisch und direkt umsetzbar." />
        <meta property="og:url" content="https://nexgen-consulting.de/services/schulungen" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://nexgen-consulting.de/logo.png" />
      </Head>

      <NavBar />
      <Chatbot />

      <section className="container mx-auto py-24 px-8 mt-16 bg-blue text-white rounded-lg">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E64000] mb-6">Digitale Schulungen</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Wir bieten praxisnahe Schulungen zu Microsoft 365, Excel und digitalen Tools. Ob Teamkommunikation, Projektorganisation oder Datenverarbeitung – wir machen Ihr Team fit.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-8 py-16 grid md:grid-cols-3 gap-8 text-white">
        <div className="bg-[#E65100] p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Microsoft Teams & Planner</h3>
          <p>
            Strukturieren Sie Ihre Zusammenarbeit digital: effiziente Meetings, gemeinsame Planung und reibungslose Kommunikation im Team.
          </p>
        </div>

        <div className="bg-[#E65100] p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Excel Grund- & Aufbaukurse</h3>
          <p>
            Von den Grundlagen bis zu fortgeschrittener Datenanalyse und Automatisierung mit VBA: praxisnah und sofort anwendbar.
          </p>
        </div>

        <div className="bg-[#E65100] p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Outlook & Office-Organisation</h3>
          <p>
            Lernen Sie, wie Sie Ihre Kommunikation, Kalender und Aufgaben in Microsoft Outlook effizient organisieren und verknüpfen.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-8 pb-24 text-center">
        <h2 className="text-3xl font-bold text-[#E64000] mb-6">Schulungen, die wirken</h2>
        <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
          Wir holen Ihre Mitarbeitenden genau da ab, wo sie stehen – ob online oder vor Ort in Coburg und Umgebung. Jetzt unverbindlich anfragen!
        </p>
        <a
          href="/services/contact"
          className="bg-[#E64000] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-white hover:text-[#E64000] transition"
        >
          Schulung anfragen
        </a>
      </section>

      
    </>
  );
}
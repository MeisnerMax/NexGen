// pages/services/prozess.js
import Head from 'next/head';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Chatbot from "../../components/Chatbot";

export default function ProzessoptimierungService() {
  return (
    <>
      <Head>
        <title>Prozessoptimierung & Automatisierung – Nexgen Consulting</title>
        <meta
          name="description"
          content="Digitale Prozessoptimierung und Automatisierung mit Nexgen Consulting – effizient, fehlerfrei und zukunftssicher."
        />
        <meta
          name="keywords"
          content="Prozessoptimierung, Automatisierung, Workflow, Effizienz, Digitalisierung, Fehlerreduktion"
        />
        <meta name="author" content="Nexgen Consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Prozessoptimierung & Automatisierung – Nexgen Consulting" />
        <meta property="og:description" content="Wir optimieren Ihre Abläufe durch digitale Prozesse und automatisierte Workflows – individuell angepasst auf Ihr Unternehmen." />
        <meta property="og:url" content="https://nexgen-consulting.de/services/prozess" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://nexgen-consulting.de/logo.png" />
      </Head>

      <NavBar />
      <Chatbot />

      <section className="container mx-auto py-24 px-8 mt-16 bg-blue text-white rounded-lg">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E64000] mb-6">Prozessoptimierung & Automatisierung</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Weniger manuelle Arbeit, mehr Zeit fürs Wesentliche: Wir machen Ihre Abläufe digital, effizient und skalierbar. Für Unternehmen, die mit der Zeit gehen.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-8 py-16 grid md:grid-cols-3 gap-8 text-white">
        <div className="bg-[#E65100] p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Workflow-Optimierung</h3>
          <p>
            Wir analysieren bestehende Prozesse, decken Schwachstellen auf und entwickeln digitale Lösungen zur Effizienzsteigerung.
          </p>
        </div>

        <div className="bg-[#E65100] p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Zeitersparnis durch Automatisierung</h3>
          <p>
            Wiederkehrende Aufgaben werden automatisiert: von der Datenverarbeitung über Berichte bis zu E-Mail-Prozessen.
          </p>
        </div>

        <div className="bg-[#E65100] p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Fehlerreduktion</h3>
          <p>
            Digitale Workflows reduzieren menschliche Fehler und sorgen für gleichbleibend hohe Qualität Ihrer Abläufe.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-8 pb-24 text-center">
        <h2 className="text-3xl font-bold text-[#E64000] mb-6">Effizienter. Schneller. Fehlerfrei.</h2>
        <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
          Lassen Sie Ihre Prozesse für sich arbeiten. Wir zeigen Ihnen, wie Sie mit digitalen Tools Zeit und Geld sparen. Jetzt unverbindlich anfragen.
        </p>
        <a
          href="/services/contact"
          className="bg-[#E64000] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-white hover:text-[#E64000] transition"
        >
          Beratung anfordern
        </a>
      </section>

      
    </>
  );
}
// pages/services/software.js
import Head from 'next/head';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Chatbot from "../../components/Chatbot";

export default function SoftwareService() {
  return (
    <>
      <Head>
        <title>Softwarelösungen & Microsoft 365 – Nexgen Consulting</title>
        <meta
          name="description"
          content="Individuelle Softwareentwicklung, Microsoft 365-Integration und branchenspezifische Lösungen von Nexgen Consulting."
        />
        <meta
          name="keywords"
          content="Softwareentwicklung, Microsoft 365, Power Automate, Branchensoftware, digitale Lösungen, Integration"
        />
        <meta name="author" content="Nexgen Consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Softwarelösungen & Microsoft 365 – Nexgen Consulting" />
        <meta property="og:description" content="Digitale Lösungen für Ihren Betrieb: Von Microsoft 365 bis branchenspezifische Tools. Wir machen Ihre Prozesse effizient." />
        <meta property="og:url" content="https://nexgen-consulting.de/services/software" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://nexgen-consulting.de/logo.png" />
      </Head>

      <NavBar />
      <Chatbot />

      <section className="container mx-auto py-24 px-8 mt-16 bg-blue text-white rounded-lg">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E64000] mb-6">Software & Microsoft 365</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Wir entwickeln Software, die Ihre Prozesse versteht: passgenau für Ihre Branche, integriert in bestehende Systeme und zukunftssicher.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-8 py-16 grid md:grid-cols-3 gap-8 text-white">
        <div className="bg-[#E65100] p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Microsoft 365 Integration</h3>
          <p>
            Wir unterstützen Sie bei der Einführung, Automatisierung und sicheren Nutzung von Microsoft 365: Teams, Outlook, SharePoint & Power Automate.
          </p>
        </div>

        <div className="bg-[#E65100] p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Branchenspezifische Lösungen</h3>
          <p>
            Jedes Unternehmen ist anders. Wir entwickeln Software, die genau auf Ihre Anforderungen zugeschnitten ist – von Lagerverwaltung bis CRM.
          </p>
        </div>

        <div className="bg-[#E65100] p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Nahtlose Integration</h3>
          <p>
            Bestehende Systeme behalten, neue Vorteile nutzen: Wir sorgen für eine reibungslose Einbindung Ihrer neuen Software in Ihre Infrastruktur.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-8 pb-24 text-center">
        <h2 className="text-3xl font-bold text-[#E64000] mb-6">Mehr Effizienz durch Software</h2>
        <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
          Nutzen Sie moderne Technologien, um Ihre Abläufe zu optimieren und Ihre Mitarbeitenden zu entlasten. Lassen Sie sich von uns beraten!
        </p>
        <a
          href="/services/contact"
          className="bg-[#E64000] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-white hover:text-[#E64000] transition"
        >
          Jetzt Beratung anfragen
        </a>
      </section>

      
    </>
  );
}

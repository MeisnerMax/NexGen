import Head from 'next/head';
import Chatbot from "../../components/Chatbot";
import { useRouter } from 'next/router';

export default function AppService() {
  const router = useRouter();

  const redirectToContact = (message) => {
    router.push(`/services/contact?message=${encodeURIComponent(message)}`);
  };

  return (
    <>
      <Head>
        <title>App-Entwicklung – Nexgen Consulting</title>
        <meta
          name="description"
          content="Professionelle App-Entwicklung für iOS und Android von Nexgen Consulting – maßgeschneidert für Ihre Anforderungen."
        />
        <meta
          name="keywords"
          content="App-Entwicklung, iOS, Android, Mobile Apps, UX Design, API Integration"
        />
        <meta name="author" content="Nexgen Consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="App-Entwicklung – Nexgen Consulting" />
        <meta property="og:description" content="Individuelle App-Entwicklung für Ihre Anforderungen – modern, skalierbar und benutzerfreundlich." />
        <meta property="og:url" content="https://nexgen-consulting.de/services/app" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://nexgen-consulting.de/logo.png" />
      </Head>

      <Chatbot />

      <section className="container mx-auto py-20 px-8 mt-16 bg-blue text-white rounded-lg">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">App-Entwicklung</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Wir entwickeln mobile Apps für iOS und Android – individuell, benutzerfreundlich und perfekt auf Ihre Anforderungen abgestimmt.
          </p>
        </div>
      </section>

      <section className="container rounded-lg bg-blue mx-auto px-20 py-8 grid md:grid-cols-3 text-white">
        <div className="bg-blue p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">iOS & Android</h3>
          <p>
            Plattformübergreifende Entwicklung für iOS und Android – modern, skalierbar und effizient.
          </p>
        </div>

        <div className="bg-blue p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">API-Integration</h3>
          <p>
            Wir integrieren Ihre App nahtlos mit bestehenden Systemen und APIs für maximale Funktionalität.
          </p>
        </div>

        <div className="bg-blue p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-2">UX/UI Design</h3>
          <p>
            Benutzerfreundliches Design, das Ihre Zielgruppe begeistert – intuitiv und ansprechend.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-4 px-8 mt-16 bg-blue text-white rounded-lg">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            App-Pakete für Ihre Anforderungen
          </h1>
        </div>
      </section>

      <section className="container mx-auto px-8 py-16 grid md:grid-cols-3 gap-8 text-white">
        <div
          onClick={() => redirectToContact('Basis-App')}
          className="bg-[#E64000] text-white p-6 rounded-lg cursor-pointer hover:shadow-xl transition"
        >
          <h3 className="text-2xl font-semibold mb-2">Basis-App</h3>
          <p>Eine einfache App mit grundlegenden Funktionen – ideal für kleine Projekte.</p>
          <h4 className="text-2xl font-semibold mb-2">799 €</h4>
          <p className="text-sm text-white/80 mt-1">oder ab 32 €/Monat (Finanzierung möglich)</p>
          <img
            src="/images/basis-app.png"
            alt="Beispiel einer Basis-App"
            className="w-full h-auto rounded mt-4"
          />
        </div>

        <div
          onClick={() => redirectToContact('Standard-App')}
          className="bg-[#E64000] text-white p-6 rounded-lg cursor-pointer hover:shadow-xl transition"
        >
          <h3 className="text-2xl font-semibold mb-2">Standard-App</h3>
          <p>Erweiterte Funktionen wie Login, Datenbankanbindung und dynamische Inhalte.</p>
          <h4 className="text-2xl font-semibold mb-2">2.999 €</h4>
          <p className="text-sm text-white/80 mt-1">oder ab 120 €/Monat (Finanzierung möglich)</p>
          <img
            src="/images/standard-app.png"
            alt="Beispiel einer Standard-App"
            className="w-full h-auto rounded mt-4"
          />
        </div>

        <div
          onClick={() => redirectToContact('Premium-App')}
          className="bg-[#E64000] text-white p-6 rounded-lg cursor-pointer hover:shadow-xl transition"
        >
          <h3 className="text-2xl font-semibold mb-2">Premium-App</h3>
          <p>Komplexe Apps mit API-Integration, Zahlungsfunktionen GPS und mehr.</p>
          <h4 className="text-2xl font-semibold mb-2">Individuell</h4>
          <p className="text-sm text-white/80 mt-1">(Finanzierung möglich)</p>
          <img
            src="/images/premium-app.png"
            alt="Beispiel einer Premium-App"
            className="w-full h-auto rounded mt-4"
          />
        </div>
      </section>

      <section className="container mx-auto px-8 py-16 pb-24 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Starten Sie jetzt Ihr App-Projekt</h2>
        <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
          Lassen Sie uns gemeinsam Ihre App-Idee verwirklichen – individuell, modern und mit Fokus auf Ihre Zielgruppe.
        </p>
        <a
          href="/services/contact"
          className="bg-[#E64000] text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-white hover:text-[#E64000] transition"
        >
          Jetzt Erstgespräch vereinbaren
        </a>
      </section>
    </>
  );
}
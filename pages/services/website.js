// pages/services/website.js
import Head from 'next/head';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Chatbot from "../../components/Chatbot";
import { useRouter } from 'next/router';


export default function WebsiteService() {
    const router = useRouter(); // hinzufügen

    const redirectToContact = (message) => {
        router.push(`/services/contact?message=${encodeURIComponent(message)}`);
      };

  return (
    <>
      <Head>
        <title>Webdesign & Branding – Nexgen Consulting</title>
        <meta
          name="description"
          content="Professionelles Webdesign und starke Markenidentität von Nexgen Consulting – maßgeschneidert für kleine und mittelständische Unternehmen."
        />
        <meta
          name="keywords"
          content="Webdesign, Branding, Responsive Design, SEO, CMS, Website, Logo, UX Design"
        />
        <meta name="author" content="Nexgen Consulting" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Webdesign & Branding – Nexgen Consulting" />
        <meta property="og:description" content="Professionelles Webdesign und starke Markenidentität für Ihre digitale Sichtbarkeit." />
        <meta property="og:url" content="https://nexgen-consulting.de/services/website" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://nexgen-consulting.de/logo.png" />
      </Head>

      <NavBar />
      <Chatbot />

      <section className="container mx-auto py-20 px-8 mt-16 bg-blue text-white rounded-lg">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#E64000] mb-6">Webdesign & Branding</h1>
          <p className="text-xl max-w-3xl mx-auto">
          Wir entwickeln Websites, die Eindruck hinterlassen – technisch einwandfrei, suchmaschinenoptimiert und perfekt abgestimmt auf Ihre Zielgruppe. Ideal für kleine und mittelständische Unternehmen.
          </p>
        </div>
      </section>

      <section className="container rounded-lg bg-blue mx-auto px-20 py-8 grid md:grid-cols-3  text-white">
        <div className="bg-blue p-6 rounded-lg ">
          <h3 className="text-2xl font-semibold mb-2">Responsive Design</h3>
          <p>
          Ihre Website sieht auf jedem Gerät professionell aus: Smartphone, Tablet oder Desktop. Wir setzen mobile-first Designprinzipien um – benutzerfreundlich und modern.
          </p>
        </div>

        <div className="bg-blue p-6 rounded-lg ">
          <h3 className="text-2xl font-semibold mb-2">SEO-Optimierung</h3>
          <p>
          Mit strukturiertem Quellcode, optimierten Ladezeiten und gezielten Meta-Daten sorgen wir dafür, dass Ihre Website bei Google gefunden wird.
          </p>
        </div>

        <div className="bg-blue p-6 rounded-lg ">
          <h3 className="text-2xl font-semibold mb-2">Content Management</h3>
          <p>
          Ändern Sie Texte, Bilder oder Seiten selbst – ganz ohne Programmierkenntnisse. Wir integrieren ein nutzerfreundliches Content-Management-System (CMS).
          </p>
        </div>
      </section>

      <section className="container mx-auto py-4 px-8 mt-16 bg-blue text-white rounded-lg">
        <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#E64000] mb-6">
          Website-Pakete für jeden Bedarf</h1>
        </div>
      </section>      
      
      <section className="container mx-auto px-8 py-16 grid md:grid-cols-3 gap-8 text-white">
        <div
          onClick={() => redirectToContact('Basis-Website')}
          className="bg-blue-900 text-white p-6 rounded-lg cursor-pointer hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-2">Basis-Website</h3>
          <p>Ihre digitale Visitenkarte: Startseite, Kontaktformular, Impressum & Datenschutz – ideal für Freiberufler und kleine Unternehmen.</p>
          <h4 className="text-2xl font-semibold mb-2">599 €</h4>
          <img
            src="/images/basis-website.png"
            alt="Beispiel einer Basis-Website"
            className="w-full h-auto rounded mt-4"
          />
        </div>

        <div
            onClick={() => redirectToContact('Standard-Website')} 
            className="bg-blue-900 text-white p-6 rounded-lg cursor-pointer hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-2">Standard-Website</h3>
          <p>3–5 Unterseiten, suchmaschinenoptimiert, mit CMS, Bildern und Basis-SEO – perfekt für wachsende Unternehmen mit professionellem Anspruch.</p>
          <h4 className="text-2xl font-semibold mb-2">999 €</h4>
          <img
            src="/images/standard-website.png" // Pfad anpassen!
            alt="Beispiel einer Basis-Website"
            className="w-full h-auto rounded mt-4"
        />
        </div>

        <div 
            onClick={() => redirectToContact('Premium-Website')}
        className="bg-blue-900 text-white p-6 rounded-lg cursor-pointer hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-2">Premium-Website</h3>
          
          <p>Ideal für Unternehmen mit erweiterten Anforderungen: Online-Terminbuchung, Webshop, Wartungsvertrag – individuell erweiterbar.</p>
          <h4 className="text-2xl font-semibold mb-2">1.299 €</h4>
          <img
            src="/images/premium-website.png" // Pfad anpassen!
            alt="Beispiel einer Basis-Website"
            className="w-full h-auto rounded mt-4"
        />
        </div>
      </section>

      <section className="container mx-auto px-8 py-16 pb-24 text-center">
        <h2 className="text-3xl font-bold text-[#E64000] mb-6">Starten Sie jetzt Ihr Webprojekt</h2>
        <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
        Sie möchten eine Website, die Ergebnisse bringt? Lassen Sie sich kostenfrei beraten – wir entwickeln Ihr Webprojekt individuell, modern und mit Fokus auf Ihre Zielgruppe.
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

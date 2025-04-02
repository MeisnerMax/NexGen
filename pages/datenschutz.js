import Head from 'next/head';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';

export default function Datenschutz() {
  return (
    <>
      <Head>
        <title>Datenschutzerklärung - Nexgen Consulting </title>
        <meta name="description" content="Datenschutzerklärung von Nexgen Consulting " />
      </Head>
      <main className="container mx-auto py-16 px-4">
        <h1 className="text-white font-bold mb-6">Datenschutzerklärung</h1>
        
        <section className="mb-8">
          <h2 className="text-white font-semibold mb-2">Verantwortliche Stelle</h2>
          <p className="text-white">
            Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist: <br />
            Max Meisner - Nexgen-Consulting <br />
            Webergasse 30, 96450 Coburg <br />
            maxmeisner3@gmail.com <br />
            +4915227433448 <br />
            (Im Folgenden "wir" oder "uns".)
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-white font-semibold mb-2">1. Datenerfassung beim Besuch der Website</h2>
          <p className="text-white">
            Beim Aufruf unserer Website erfasst unser Webserver automatisch bestimmte technische Daten (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seiten, Browsertyp und Betriebssystem) in Server-Logfiles. Diese Daten werden ausschließlich zur Gewährleistung eines störungsfreien Betriebs und zur Verbesserung der technischen Sicherheit verarbeitet (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-white font-semibold mb-2">2. Verwendung von Cookies</h2>
          <p className="text-white">
            Unsere Website verwendet Cookies, um die Benutzerfreundlichkeit zu verbessern und bestimmte Funktionen zu ermöglichen. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie können Cookies in den Einstellungen Ihres Browsers löschen oder blockieren. Notwendige Cookies, die für den Betrieb der Website unerlässlich sind, können nicht deaktiviert werden.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-white font-semibold mb-2">3. Kontaktformular und Anfragen</h2>
          <p className="text-white">
            Wenn Sie uns über das Kontaktformular oder per E-Mail Anfragen senden, werden Ihre Angaben (z. B. Name, E-Mail-Adresse, Anfrageinhalt) gespeichert, um Ihre Anfrage zu bearbeiten. Diese Daten werden ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (zur Durchführung vorvertraglicher Maßnahmen) oder lit. f DSGVO (berechtigtes Interesse) verarbeitet.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-white font-semibold mb-2">4. Einsatz von Google Analytics</h2>
          <p className="text-white">
            Unsere Website verwendet Google Analytics, einen Webanalysedienst der Google Ireland Limited. Google Analytics verwendet Cookies, um die Nutzung unserer Website zu analysieren. Wir haben den Code so konfiguriert, dass Ihre IP-Adresse anonymisiert wird. Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-white font-semibold mb-2">5. Einsatz des Meta-Pixels (Facebook-Pixel)</h2>
          <p className="text-white">
            Wir verwenden das Meta-Pixel (Facebook-Pixel), um die Wirksamkeit unserer Facebook- und Instagram-Werbeanzeigen zu messen. Diese Daten werden ausschließlich in aggregierter Form verarbeitet und dienen der Optimierung unserer Werbemaßnahmen.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-white font-semibold mb-2">6. Newsletter</h2>
          <p className="text-white">
            Bei Anmeldung zu unserem Newsletter speichern wir Ihre E-Mail-Adresse im Double-Opt-In-Verfahren. Die Verarbeitung erfolgt ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und wird nach Beendigung des Newsletter-Versands gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-white font-semibold mb-2">7. Ihre Rechte als betroffene Person</h2>
          <p className="text-white">
            Als betroffene Person haben Sie Rechte gemäß der DSGVO, darunter das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit, Widerspruch sowie das Recht auf Widerruf Ihrer Einwilligung. Bitte kontaktieren Sie uns, um Ihre Rechte geltend zu machen.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-white font-semibold mb-2">8. Weitergabe von Daten an Dritte und Auftragsverarbeiter</h2>
          <p className="text-white">
            Ihre personenbezogenen Daten werden nur an Dritte weitergegeben, wenn dies zur Durchführung eines Vertrages, aufgrund gesetzlicher Verpflichtungen oder mit Ihrer Einwilligung erfolgt. Unsere Auftragsverarbeiter sind vertraglich verpflichtet, Ihre Daten zu schützen.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-white font-semibold mb-2">9. Datensicherheit</h2>
          <p className="text-white">
            Wir treffen geeignete technische und organisatorische Maßnahmen, um Ihre Daten gegen unbefugten Zugriff, Verlust oder Zerstörung zu schützen. Die Übertragung der Inhalte unserer Website erfolgt verschlüsselt per HTTPS/SSL.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-white font-semibold mb-2">10. Aktualität und Änderung dieser Datenschutzerklärung</h2>
          <p className="text-white">
            Diese Datenschutzerklärung ist aktuell gültig (Stand: [Datum eintragen]). Wir behalten uns vor, die Erklärung bei Bedarf anzupassen. Über wesentliche Änderungen informieren wir Sie auf unserer Website.
          </p>
        </section>
      </main>
    </>
  );
}

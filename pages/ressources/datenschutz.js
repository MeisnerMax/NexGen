// pages/datenschutz.tsx

import Head from "next/head";
import NavBar from "../../components/NavBar";

export default function Datenschutz() {
  return (
    <>
      <Head>
        <title>Datenschutzerklärung – Nexgen Consulting</title>
        <meta
          name="description"
          content="Datenschutzerklärung von Nexgen Consulting – Informationen zur Verarbeitung personenbezogener Daten."
        />
        <meta name="robots" content="noindex" />
      </Head>

      <NavBar />

      <main className="container mx-auto py-12 px-4">
        <h1 className="text-white font-bold text-3xl mb-6">Datenschutzerklärung</h1>

        {/* 1. Datenschutz auf einen Blick */}
        <section className="mb-10">
          <h2 className="text-white font-semibold text-xl mb-3">1. Datenschutz auf einen Blick</h2>
          <p className="text-white mb-3">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
            passiert, wenn Sie diese Website besuchen.
          </p>
          <h3 className="text-white font-semibold mb-2">Wer ist verantwortlich?</h3>
          <p className="text-white">
            Max Meisner – Nexgen Consulting, Webergasse 30, 96450 Coburg, E-Mail: maxmeisner3@gmail.com,
            Telefon: +49&nbsp;1525&nbsp;9089486.
          </p>
          <h3 className="text-white font-semibold mt-4 mb-2">Wie erfassen wir Ihre Daten?</h3>
          <p className="text-white">
            Zum einen dadurch, dass Sie sie uns mitteilen (z. B. über das Kontaktformular oder per E-Mail).
            Zum anderen automatisch beim Besuch der Website (z. B. IP-Adresse, Zeitstempel, Browser, Betriebssystem).
          </p>
          <h3 className="text-white font-semibold mt-4 mb-2">Wofür nutzen wir Ihre Daten?</h3>
          <p className="text-white">
            Zur technischen Bereitstellung und Sicherheit der Website, zur Beantwortung von Anfragen sowie – nur nach
            Ihrer Einwilligung – zu Statistik-/Marketingzwecken (z. B. Google Analytics, Meta-Pixel).
          </p>
          <h3 className="text-white font-semibold mt-4 mb-2">Welche Rechte haben Sie?</h3>
          <p className="text-white">
            Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch (insb. gegen Direktwerbung)
            und Widerruf erteilter Einwilligungen. Zudem besteht ein Beschwerderecht bei der Aufsichtsbehörde
            (siehe unten).
          </p>
        </section>

        {/* 2. Verantwortliche Stelle */}
        <section className="mb-10">
          <h2 className="text-white font-semibold text-xl mb-3">2. Verantwortliche Stelle</h2>
          <p className="text-white">
            Max Meisner (Nexgen Consulting)<br />
            Webergasse 30, 96450 Coburg<br />
            E-Mail: <a href="mailto:maxmeisner3@gmail.com" className="underline">maxmeisner3@gmail.com</a><br />
            Telefon: +49&nbsp;1525&nbsp;9089486
          </p>
          <p className="text-white mt-3">
            Ein Datenschutzbeauftragter ist nicht benannt, da hierfür keine gesetzliche Verpflichtung besteht (wird
            fortlaufend geprüft).
          </p>
        </section>

        {/* 3. Hosting / CDN */}
        <section className="mb-10">
          <h2 className="text-white font-semibold text-xl mb-3">3. Hosting und Content Delivery Network (CDN)</h2>
          <p className="text-white">
            Diese Website wird bei <strong>HOSTER_NAME</strong> gehostet und ggf. über <strong>CDN_NAME</strong> ausgeliefert.
            Personenbezogene Daten, die über die Website anfallen, werden auf den Servern des Hosters/CDN verarbeitet.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer sicheren und effizienten
            Bereitstellung). Mit dem Hoster/CDN besteht ein Vertrag zur Auftragsverarbeitung (Art. 28 DSGVO).
          </p>
        </section>

        {/* 4. Server-Logs */}
        <section className="mb-10">
          <h2 className="text-white font-semibold text-xl mb-3">4. Server-Log-Dateien</h2>
          <p className="text-white">
            Beim Aufruf werden automatisch Server-Logs verarbeitet (IP-Adresse, Datum/Uhrzeit, abgerufene URL, Referrer,
            User-Agent, Statuscode). Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (Betrieb/Sicherheit). Speicherdauer:
            i. d. R. &lt;= 30 Tage, sofern keine sicherheitsrelevante Auswertung erforderlich ist.
          </p>
        </section>

        {/* 5. Cookies & Consent */}
        <section className="mb-10">
          <h2 className="text-white font-semibold text-xl mb-3">5. Cookies und Einwilligungs-Management</h2>
          <p className="text-white">
            Wir verwenden technisch notwendige Cookies (ohne Einwilligung zulässig) und – sofern Sie zustimmen –
            funktionale, Statistik- und Marketing-Cookies. Die Einwilligung erfolgt über unser Consent-Banner
            (Art. 6 Abs. 1 lit. a DSGVO; § 25 TTDSG). Sie können Ihre Auswahl jederzeit über die
            <button className="underline ml-1">
              Cookie-Einstellungen
            </button>{" "}
            ändern (sofern technisch implementiert).
          </p>
        </section>

        {/* 6. Kontaktformular / E-Mail / Telefon */}
        <section className="mb-10">
          <h2 className="text-white font-semibold text-xl mb-3">6. Kontaktformular, E-Mail und Telefon</h2>
          <p className="text-white">
            Daten aus Anfragen (Name, Kontaktdaten, Inhalt) verarbeiten wir zur Bearbeitung und für Anschlussfragen.
            Rechtsgrundlagen: Art. 6 Abs. 1 lit. b DSGVO (vorvertraglich/vertraglich) oder lit. f DSGVO
            (berechtigtes Interesse an effizienter Kommunikation). Speicherdauer: bis Zweckerfüllung, ggf. längere
            gesetzliche Aufbewahrungsfristen.
          </p>
        </section>

        {/* 7. Newsletter (falls genutzt) */}
        <section className="mb-10">
          <h2 className="text-white font-semibold text-xl mb-3">7. Newsletter (falls angeboten)</h2>
          <p className="text-white">
            Anmeldung im Double-Opt-In, Verarbeitung Ihrer E-Mail-Adresse auf Basis Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
            Widerruf jederzeit z. B. über Abmeldelink. Sofern ein Versanddienstleister eingesetzt wird, besteht ein
            Auftragsverarbeitungsvertrag.
          </p>
        </section>

        {/* 8. Webanalyse: Google Analytics */}
        <section className="mb-10">
          <h2 className="text-white font-semibold text-xl mb-3">8. Webanalyse (Google Analytics)</h2>
          <p className="text-white">
            Wir nutzen Google Analytics (Google Ireland Limited) nur nach Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
            IP-Anonymisierung ist aktiviert. Sie können Ihre Einwilligung jederzeit widerrufen (Cookie-Einstellungen).
            Ggf. findet eine Übermittlung in die USA statt (EU-US Data Privacy Framework oder Standardvertragsklauseln).
            Mit Google besteht ein AV-Vertrag.
          </p>
        </section>

        {/* 9. Meta-Pixel */}
        <section className="mb-10">
          <h2 className="text-white font-semibold text-xl mb-3">9. Meta-Pixel (Facebook/Instagram)</h2>
          <p className="text-white">
            Zur Messung von Conversions und zur Optimierung von Werbemaßnahmen setzen wir – nur nach Einwilligung –
            das Meta-Pixel ein (Art. 6 Abs. 1 lit. a DSGVO). Die Daten können Meta-Systemen zugeordnet werden und
            in Drittländer (insb. USA) übertragen werden (EU-US DPF/SCCs). Ein Widerruf ist jederzeit über die
            Cookie-Einstellungen möglich.
          </p>
        </section>

        {/* 10. Google Search Console */}
        <section className="mb-10">
          <h2 className="text-white font-semibold text-xl mb-3">10. Google Search Console</h2>
          <p className="text-white">
            Zur Überwachung der Sichtbarkeit im Google-Index nutzen wir die Google Search Console. Dabei werden uns
            aggregierte Suchdaten bereitgestellt; es erfolgt keine Verarbeitung personenbezogener Tracking-Daten
            von Websitebesuchern durch uns.
          </p>
        </section>

        {/* 11. Schriftarten (Google Fonts / lokal) */}
        <section className="mb-10">
          <h2 className="text-white font-semibold text-xl mb-3">11. Schriftarten</h2>
          <p className="text-white">
            Wir verwenden zur einheitlichen Darstellung Schriftarten.{" "}
            <strong>Variante A (empfohlen):</strong> Die Fonts werden lokal vom eigenen Server bereitgestellt; es
            erfolgt kein Abruf von Drittservern.{" "}
            <strong>Variante B (falls genutzt):</strong> Bei Einbindung über Google Fonts (Google Ireland Limited)
            baut Ihr Browser eine Verbindung zu Google-Servern auf (ggf. USA). Rechtsgrundlage hierfür ist Ihre
            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese über die Cookie-Einstellungen widerrufen.
          </p>
        </section>

        {/* 12. Google Maps (optional) */}
        <section className="mb-10">
          <h2 className="text-white font-semibold text-xl mb-3">12. Google Maps (optional)</h2>
          <p className="text-white">
            Sofern Karten angezeigt werden, nutzen wir Google Maps (Google Ireland Limited) – erst nach Ihrer
            Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Dabei können Ihre IP-Adresse und Nutzungsdaten an Google
            (ggf. USA) übertragen werden (EU-US DPF/SCCs).
          </p>
        </section>

        {/* 13. Weitergabe/Drittländer */}
        <section className="mb-10">
          <h2 className="text-white font-semibold text-xl mb-3">13. Weitergabe von Daten & Übermittlungen in Drittländer</h2>
          <p className="text-white">
            Eine Weitergabe erfolgt nur, wenn dies zur Vertragserfüllung erforderlich ist, eine gesetzliche Pflicht
            besteht, Sie eingewilligt haben oder ein berechtigtes Interesse besteht und Ihre Interessen nicht überwiegen.
            Bei Übermittlungen in Drittländer stellen wir ein angemessenes Schutzniveau sicher (z. B. EU-US DPF,
            Standardvertragsklauseln).
          </p>
        </section>

        {/* 14. Speicherdauer */}
        <section className="mb-10">
          <h2 className="text-white font-semibold text-xl mb-3">14. Speicherdauer</h2>
          <p className="text-white">
            Wir verarbeiten personenbezogene Daten nur solange, wie es für den jeweiligen Zweck erforderlich ist.
            Danach werden die Daten gelöscht oder anonymisiert, sofern keine gesetzlichen Aufbewahrungspflichten
            entgegenstehen (z. B. handels-/steuerrechtlich).
          </p>
        </section>

        {/* 15. Ihre Rechte */}
        <section className="mb-10">
          <h2 className="text-white font-semibold text-xl mb-3">15. Ihre Rechte</h2>
          <ul className="text-white list-disc list-inside">
            <li>Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO),</li>
            <li>Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO),</li>
            <li>Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO).</li>
          </ul>
          <p className="text-white mt-3">
            <strong>Widerspruch nach Art. 21 DSGVO:</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer
            besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten,
            die auf Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, Widerspruch einzulegen; dies gilt auch für ein darauf
            gestütztes Profiling. Werden Daten für Direktwerbung verarbeitet, können Sie dieser Verarbeitung
            jederzeit widersprechen.
          </p>
        </section>

        {/* 16. Beschwerderecht */}
        <section className="mb-10">
          <h2 className="text-white font-semibold text-xl mb-3">16. Beschwerderecht</h2>
          <p className="text-white">
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Für Bayern:
            Bayerisches Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach,{" "}
            <a className="underline" href="https://www.lda.bayern.de">https://www.lda.bayern.de</a>.
          </p>
        </section>

        {/* 17. Datensicherheit */}
        <section className="mb-10">
          <h2 className="text-white font-semibold text-xl mb-3">17. Datensicherheit</h2>
          <p className="text-white">
            Wir setzen TLS/SSL-Verschlüsselung, Zugriffskontrollen, regelmäßige Updates und geeignete technische und
            organisatorische Maßnahmen ein, um Ihre Daten zu schützen.
          </p>
        </section>

        {/* 18. Aktualität */}
        <section className="mb-10">
          <h2 className="text-white font-semibold text-xl mb-3">18. Aktualität und Änderungen</h2>
          <p className="text-white">
            Stand: <strong>09.10.2025</strong>. Wir behalten uns vor, diese Erklärung anzupassen, z. B. bei Einführung
            neuer Dienste oder geänderter Rechtslage.
          </p>
        </section>
      </main>
    </>
  );
}

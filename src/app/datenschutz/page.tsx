import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { PageHero } from '@/components/PageHero';
import { siteConfig } from '@/lib/site';
import JsonLd from '@/seo/JsonLd';
import { buildBreadcrumbList, buildMetadata } from '@/seo/metadata';
import { getRouteKeywords } from '@/seo/keywordMap';

const routeKeywords = getRouteKeywords('/datenschutz');

export const metadata = buildMetadata({
  path: '/datenschutz',
  title: 'Datenschutzerklärung',
  benefit:
    'Transparente Informationen zur Verarbeitung personenbezogener Daten und Einwilligungen.',
  keywords: routeKeywords?.secondary,
});

export default function DatenschutzPage() {
  const breadcrumbSchema = buildBreadcrumbList([
    { label: 'Start', href: '/' },
    { label: 'Datenschutz', href: '/datenschutz' },
  ]);
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Start', href: '/' }, { label: 'Datenschutz' }]}
        eyebrow="Datenschutz"
        title="Ihre Daten. Transparent behandelt."
        description="Alle Informationen zur Verarbeitung personenbezogener Daten, Ihren Rechten und den eingesetzten Diensten."
        signals={[
          { label: 'Stand', value: '09.10.2025' },
          { label: 'Grundsatz', value: 'Datensparsamkeit' },
        ]}
      />
      <Section>
        <Card className="legal-document space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold text-slate-900">Datenschutzerklärung</h2>
            <p className="text-xs text-slate-500">Stand: 09.10.2025</p>
          </div>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">1. Datenschutz auf einen Blick</h2>
            <p className="text-sm text-slate-600">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            </p>
            <h3 className="text-sm font-semibold text-slate-900">Wer ist verantwortlich?</h3>
            <p className="text-sm text-slate-600">
              {siteConfig.legalName} – NexGen Consulting, {siteConfig.address.street},{' '}
              {siteConfig.address.zip} {siteConfig.address.city}, E-Mail: {siteConfig.email},
              Telefon: {siteConfig.phone}.
            </p>
            <h3 className="text-sm font-semibold text-slate-900">Wie erfassen wir Ihre Daten?</h3>
            <p className="text-sm text-slate-600">
              Zum einen dadurch, dass Sie sie uns mitteilen (z. B. über das Kontaktformular oder per
              E-Mail). Zum anderen automatisch beim Besuch der Website (z. B. IP-Adresse,
              Zeitstempel, Browser, Betriebssystem).
            </p>
            <h3 className="text-sm font-semibold text-slate-900">Wofür nutzen wir Ihre Daten?</h3>
            <p className="text-sm text-slate-600">
              Zur technischen Bereitstellung und Sicherheit der Website, zur Beantwortung von
              Anfragen sowie – nur nach Ihrer Einwilligung – zu Statistik- oder Marketingzwecken.
            </p>
            <h3 className="text-sm font-semibold text-slate-900">Welche Rechte haben Sie?</h3>
            <p className="text-sm text-slate-600">
              Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch
              (insb. gegen Direktwerbung) und Widerruf erteilter Einwilligungen. Zudem besteht ein
              Beschwerderecht bei der Aufsichtsbehörde (siehe unten).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">2. Verantwortliche Stelle</h2>
            <p className="text-sm text-slate-600">
              {siteConfig.legalName} (NexGen Consulting)
              <br />
              {siteConfig.address.street}, {siteConfig.address.zip} {siteConfig.address.city}
              <br />
              E-Mail:{' '}
              <a href={`mailto:${siteConfig.email}`} className="underline">
                {siteConfig.email}
              </a>
              <br />
              Telefon: {siteConfig.phone}
            </p>
            <p className="text-sm text-slate-600">
              Ein Datenschutzbeauftragter ist nicht benannt, da hierfür keine gesetzliche
              Verpflichtung besteht (wird fortlaufend geprüft).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              3. Hosting und Content Delivery Network (CDN)
            </h2>
            <p className="text-sm text-slate-600">
              Diese Website wird bei Vercel gehostet und über ein CDN ausgeliefert. Personenbezogene
              Daten, die über die Website anfallen, werden auf den Servern des Hosters verarbeitet.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer
              sicheren und effizienten Bereitstellung). Mit dem Hoster besteht ein Vertrag zur
              Auftragsverarbeitung (Art. 28 DSGVO).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">4. Server-Log-Dateien</h2>
            <p className="text-sm text-slate-600">
              Beim Aufruf werden automatisch Server-Logs verarbeitet (IP-Adresse, Datum/Uhrzeit,
              abgerufene URL, Referrer, User-Agent, Statuscode). Rechtsgrundlage: Art. 6 Abs. 1 lit.
              f DSGVO (Betrieb/Sicherheit). Speicherdauer: i. d. R. ≤ 30 Tage, sofern keine
              sicherheitsrelevante Auswertung erforderlich ist.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              5. Cookies und Einwilligungs-Management
            </h2>
            <p className="text-sm text-slate-600">
              Wir verwenden technisch notwendige Cookies (ohne Einwilligung zulässig) und – sofern
              Sie zustimmen – funktionale, Statistik- und Marketing-Cookies. Die Einwilligung
              erfolgt über unser Consent-Banner (Art. 6 Abs. 1 lit. a DSGVO; § 25 TTDSG). Sie können
              Ihre Auswahl jederzeit über das Cookie-Banner ändern.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              6. Kontaktformular, E-Mail und Telefon
            </h2>
            <p className="text-sm text-slate-600">
              Daten aus Anfragen (Name, Kontaktdaten, Inhalt) verarbeiten wir zur Bearbeitung und
              für Anschlussfragen. Rechtsgrundlagen: Art. 6 Abs. 1 lit. b DSGVO
              (vorvertraglich/vertraglich) oder lit. f DSGVO (berechtigtes Interesse an effizienter
              Kommunikation). Speicherdauer: bis Zweckerfüllung, ggf. längere gesetzliche
              Aufbewahrungsfristen.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">7. Newsletter</h2>
            <p className="text-sm text-slate-600">
              Derzeit bieten wir keinen Newsletter an. Falls dies zukünftig erfolgt, wird die
              Anmeldung im Double-Opt-In umgesetzt. Rechtsgrundlage wäre Ihre Einwilligung (Art. 6
              Abs. 1 lit. a DSGVO). Ein Widerruf ist jederzeit möglich.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              8. Webanalyse (Google Analytics, optional)
            </h2>
            <p className="text-sm text-slate-600">
              Wir nutzen Google Analytics (Google Ireland Limited) nur nach Ihrer Einwilligung (Art.
              6 Abs. 1 lit. a DSGVO). IP-Anonymisierung ist aktiviert. Sie können Ihre Einwilligung
              jederzeit widerrufen. Ggf. findet eine Übermittlung in die USA statt (EU-US Data
              Privacy Framework oder Standardvertragsklauseln). Mit Google besteht ein
              Auftragsverarbeitungsvertrag.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">9. Meta-Pixel</h2>
            <p className="text-sm text-slate-600">
              Derzeit setzen wir kein Meta-Pixel ein. Sollten wir es zukünftig verwenden, erfolgt
              die Nutzung ausschließlich nach Einwilligung über das Cookie-Banner.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              10. Google Search Console (optional)
            </h2>
            <p className="text-sm text-slate-600">
              Zur Überwachung der Sichtbarkeit im Google-Index kann die Google Search Console
              genutzt werden. Dabei werden uns aggregierte Suchdaten bereitgestellt; es erfolgt
              keine Verarbeitung personenbezogener Tracking-Daten von Websitebesuchern durch uns.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">11. Schriftarten</h2>
            <p className="text-sm text-slate-600">
              Wir verwenden zur einheitlichen Darstellung Schriftarten, die lokal vom eigenen Server
              bereitgestellt werden. Es erfolgt kein Abruf von Drittservern.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">12. Google Maps (optional)</h2>
            <p className="text-sm text-slate-600">
              Sofern Karten angezeigt werden, nutzen wir Google Maps (Google Ireland Limited) – erst
              nach Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Dabei können Ihre IP-Adresse und
              Nutzungsdaten an Google (ggf. USA) übertragen werden (EU-US DPF/SCCs).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">
              13. Weitergabe von Daten & Übermittlungen in Drittländer
            </h2>
            <p className="text-sm text-slate-600">
              Eine Weitergabe erfolgt nur, wenn dies zur Vertragserfüllung erforderlich ist, eine
              gesetzliche Pflicht besteht, Sie eingewilligt haben oder ein berechtigtes Interesse
              besteht und Ihre Interessen nicht überwiegen. Bei Übermittlungen in Drittländer
              stellen wir ein angemessenes Schutzniveau sicher (z. B. EU-US DPF,
              Standardvertragsklauseln).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">14. Speicherdauer</h2>
            <p className="text-sm text-slate-600">
              Wir verarbeiten personenbezogene Daten nur solange, wie es für den jeweiligen Zweck
              erforderlich ist. Danach werden die Daten gelöscht oder anonymisiert, sofern keine
              gesetzlichen Aufbewahrungspflichten entgegenstehen (z. B. handels-/steuerrechtlich).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">15. Ihre Rechte</h2>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600">
              <li>Auskunft (Art. 15 DSGVO),</li>
              <li>Berichtigung (Art. 16 DSGVO),</li>
              <li>Löschung (Art. 17 DSGVO),</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO),</li>
              <li>Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO).</li>
            </ul>
            <p className="text-sm text-slate-600">
              <strong>Widerspruch nach Art. 21 DSGVO:</strong> Sie haben das Recht, aus Gründen, die
              sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie
              betreffender personenbezogener Daten, die auf Art. 6 Abs. 1 lit. e oder f DSGVO
              erfolgt, Widerspruch einzulegen; dies gilt auch für ein darauf gestütztes Profiling.
              Werden Daten für Direktwerbung verarbeitet, können Sie dieser Verarbeitung jederzeit
              widersprechen.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">16. Beschwerderecht</h2>
            <p className="text-sm text-slate-600">
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Für
              Bayern: Bayerisches Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522
              Ansbach,{' '}
              <a className="underline" href="https://www.lda.bayern.de">
                https://www.lda.bayern.de
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">17. Datensicherheit</h2>
            <p className="text-sm text-slate-600">
              Wir setzen TLS/SSL-Verschlüsselung, Zugriffskontrollen, regelmäßige Updates und
              geeignete technische und organisatorische Maßnahmen ein, um Ihre Daten zu schützen.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-slate-900">18. Aktualität und Änderungen</h2>
            <p className="text-sm text-slate-600">
              Wir behalten uns vor, diese Erklärung anzupassen, z. B. bei Einführung neuer Dienste
              oder geänderter Rechtslage.
            </p>
          </section>
        </Card>
      </Section>
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}

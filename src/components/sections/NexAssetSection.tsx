import { nexassetSiteUrl } from '@/lib/site';

/** Eigene Software auf der Startseite: viele Besucher landen zuerst hier und suchen NexAsset. Preise wie auf nexgen-consulting.de/nexasset/preise. */
const packages: Array<{ name: string; text: string; price: string }> = [
  { name: 'Grundpaket', text: 'Aufgaben, Stempeluhr, Dienstplan, Chat, Objekte & Mieter, E-Rechnung', price: 'ab 99 €' },
  { name: 'Hausverwaltung', text: 'WEG-, Miet- und SE-Verwaltung, Abrechnungen, Portale', price: 'ab 1,00 € je Einheit' },
  { name: 'Asset Management', text: 'Businessplan, Cashflow, Finanzierung, Investoren, ESG', price: 'ab 249 €' },
  { name: 'Development', text: 'Kosten nach DIN 276, GAEB-Vergabe, Baustelle, Abnahme', price: 'ab 149 € je Projekt' },
  { name: 'Hotel', text: 'Rezeption, Housekeeping, Preise & Prognose – mit Ihrem PMS', price: 'ab 4 € je Zimmer' },
  { name: 'Property & Corporate', text: 'Standorte, Flächen, Mietverträge, Arbeitsplatzbuchung', price: 'ab 349 €' },
];

export default function NexAssetSection() {
  return (
    <section id="nexasset" className="nexasset-band" aria-labelledby="nexasset-title">
      <div className="section-shell">
        <div className="nexasset-band__box">
          <div className="nexasset-band__copy">
            <p className="eyebrow eyebrow--light">Eigene Software · NexAsset</p>
            <h2 id="nexasset-title">Eine Software für Immobilien, Hotels und Teams.</h2>
            <p>
              Neben der Beratung entwickeln wir NexAsset: Grundpaket für den ganzen Betrieb, dazu Pakete nach Bedarf –
              direkt online kaufen oder 14 Tage kostenlos testen. Preise je Monat bei jährlicher Zahlung, ohne
              Umsatzsteuer nach § 19 UStG.
            </p>
            <div className="nexasset-band__actions">
              <a className="nexasset-band__button nexasset-band__button--primary" href={`${nexassetSiteUrl}/preise`}>
                Preise ansehen <span aria-hidden="true">↗</span>
              </a>
              <a className="nexasset-band__button" href="https://nexasset.nexgen-consulting.de/registrieren">
                14 Tage kostenlos testen
              </a>
              <a className="nexasset-band__link" href={nexassetSiteUrl}>
                Mehr über NexAsset <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <ul className="nexasset-band__grid">
            {packages.map((item) => (
              <li key={item.name}>
                <strong>{item.name}</strong>
                <span>{item.text}</span>
                <em>{item.price}</em>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

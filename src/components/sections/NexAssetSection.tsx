import { nexassetSiteUrl } from '@/lib/site';

/** Eigene Software auf der Startseite: viele Besucher landen zuerst hier und suchen NexAsset. Ohne Preise – die stehen nur auf nexgen-consulting.de/nexasset/preise. */
const packages: Array<{ name: string; text: string }> = [
  { name: 'Grundpaket', text: 'Aufgaben, Stempeluhr, Dienstplan, Chat, Objekte & Mieter, E-Rechnung' },
  { name: 'Hausverwaltung', text: 'WEG-, Miet- und SE-Verwaltung, Abrechnungen, Portale' },
  { name: 'Asset Management', text: 'Businessplan, Cashflow, Finanzierung, Investoren, ESG' },
  { name: 'Development', text: 'Kosten nach DIN 276, GAEB-Vergabe, Baustelle, Abnahme' },
  { name: 'Hotel', text: 'Rezeption, Housekeeping, Preise & Prognose – mit Ihrem PMS' },
  { name: 'Property & Corporate', text: 'Standorte, Flächen, Mietverträge, Arbeitsplatzbuchung' },
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
              direkt online bestellen oder 14 Tage kostenlos testen.
            </p>
            <div className="nexasset-band__actions">
              <a className="nexasset-band__button nexasset-band__button--primary" href={nexassetSiteUrl}>
                NexAsset ansehen <span aria-hidden="true">↗</span>
              </a>
              <a className="nexasset-band__button" href="https://nexasset.nexgen-consulting.de/registrieren">
                14 Tage kostenlos testen
              </a>
            </div>
          </div>
          <ul className="nexasset-band__grid">
            {packages.map((item) => (
              <li key={item.name}>
                <strong>{item.name}</strong>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

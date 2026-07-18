import { ButtonLink } from '@/components/Button';
import { Section, SectionHeader } from '@/components/Section';

const transformations = [
  {
    title: 'Von verstreuten Informationen zu einem belastbaren Ablauf',
    description:
      'Informationen liegen heute in Postfächern, Listen und Köpfen. Wir schaffen einen gemeinsamen Prozess mit eindeutigen Status.',
    before: 'Excel · E-Mail · Rückfragen',
    after: 'Zentraler Workflow · Live-Status',
  },
  {
    title: 'Von doppelter Dateneingabe zu sauberen Übergaben',
    description:
      'Daten werden nicht mehrfach übertragen, sondern kontrolliert zwischen den vorhandenen Systemen weitergegeben.',
    before: 'Kopieren · Prüfen · Nacharbeiten',
    after: 'Schnittstellen · Regeln · Alerts',
  },
  {
    title: 'Vom Bauchgefühl zu nachvollziehbaren Entscheidungen',
    description:
      'Bearbeitungszeit, Fehler und Wartephasen werden sichtbar. So investieren Sie dort, wo der Hebel nachweislich am größten ist.',
    before: 'Unklare Ursachen · Verzögerungen',
    after: 'Messpunkte · Prioritäten · Wirkung',
  },
];

export default function ProblemSection() {
  return (
    <Section id="probleme" tone="soft" divider>
      <div className="grid gap-12 lg:grid-cols-[0.78fr,1.22fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeader
            eyebrow="Vom Engpass zum System"
            title="Digitalisierung beginnt nicht mit einem Tool."
            description="Sie beginnt mit der Frage, an welcher Stelle Zeit, Qualität oder Transparenz verloren gehen."
          />
          <ButtonLink href="/termin" variant="secondary" className="mt-8">
            Engpass identifizieren <span aria-hidden="true">↗</span>
          </ButtonLink>
        </div>
        <div className="transformation-grid">
          {transformations.map((item, index) => (
            <article key={item.title} className="transformation-card">
              <div>
                <span className="transformation-card__number">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div
                className="transformation-card__shift"
                aria-label={`Vorher: ${item.before}. Nachher: ${item.after}.`}
              >
                <div>
                  <span>Heute</span>
                  <strong>{item.before}</strong>
                </div>
                <span className="transformation-card__arrow" aria-hidden="true">
                  →
                </span>
                <div>
                  <span>Zielbild</span>
                  <strong>{item.after}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

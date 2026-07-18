import { ButtonLink } from '@/components/Button';
import { Section, SectionHeader } from '@/components/Section';
import { methodSteps } from '@/lib/data';

const outputs = [
  'Prozesslandkarte',
  'Prioritätenmatrix',
  'Zielbild',
  'Funktionsfähiger Sprint',
  'Testprotokoll',
  'Stabiler Betrieb',
  'Optimierungsdaten',
];

export default function MethodSection() {
  return (
    <Section id="methodik" tone="soft" divider>
      <div className="grid gap-10 lg:grid-cols-[1fr,auto] lg:items-end">
        <SectionHeader
          eyebrow="NexGen Fahrplan"
          title="Jeder Schritt liefert ein prüfbares Ergebnis."
          description="Keine monatelange Blackbox: Sie sehen nach jeder Phase, was entschieden, gebaut und gemessen wurde."
        />
        <ButtonLink href="/kontakt" variant="secondary">
          Vorgehen besprechen <span aria-hidden="true">↗</span>
        </ButtonLink>
      </div>
      <div className="method-rail">
        {methodSteps.map((step, index) => (
          <article key={step.title} className="method-step">
            <span className="method-step__number">0{index + 1}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <span className="method-step__output">Ergebnis: {outputs[index]}</span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

import type { Metadata } from 'next';
import { Card } from '@/components/Card';
import { Section, SectionHeader } from '@/components/Section';
import LeadMagnetForm from '@/components/LeadMagnetForm';
import { leadMagnet } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Lead Magnet',
  description: 'Kostenloser Leitfaden mit Priorisierung und KPIs für Automatisierung in KMU.',
};

export default function LeadMagnetPage() {
  return (
    <>
      <Section className="pt-10">
        <div className="grid gap-10 lg:grid-cols-[1.05fr,0.95fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Lead Magnet
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              {leadMagnet.title}
            </h1>
            <p className="mt-4 text-lg text-slate-700">{leadMagnet.description}</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>• Welche Prozesse sich zuerst lohnen</li>
              <li>• Messpunkte, die den Erfolg sichtbar machen</li>
              <li>• Typische Engpässe in Dienstleistung, Handwerk und Fertigung</li>
              <li>• Sofort umsetzbare Fragen für Ihr Team</li>
            </ul>
            <div className="mt-6 rounded-2xl border border-[color:var(--color-accent-soft)] bg-[var(--color-accent-soft)] p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Ideal für</p>
              <p className="mt-2">
                Entscheider in KMU, die manuelle Prozesse reduzieren und klare KPIs definieren
                möchten.
              </p>
            </div>
          </div>
          <Card className="space-y-4">
            <SectionHeader
              eyebrow="PDF"
              title="In 60 Sekunden zum Download"
              description="Nur Ihre E-Mail-Adresse, kein Newsletter-Abo."
            />
            <LeadMagnetForm />
          </Card>
        </div>
      </Section>

      <Section tone="soft" divider>
        <SectionHeader
          eyebrow="So nutzen Sie den Leitfaden"
          title="Von der Liste zur Umsetzung"
          description="Drei Schritte, um den größten Hebel zu finden und intern zu starten."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'Engpass auswählen',
              text: 'Wählen Sie den Prozess mit dem höchsten Aufwand und häufigsten Fehlern.',
            },
            {
              title: 'Priorisieren',
              text: 'Nutzen Sie die Matrix, um Wirkung, Aufwand und Risiko sauber einzuordnen.',
            },
            {
              title: 'Erste Schritte planen',
              text: 'Definieren Sie KPIs und legen Sie Verantwortlichkeiten fest.',
            },
          ].map((item) => (
            <Card key={item.title} className="text-sm text-slate-700">
              <p className="font-semibold text-slate-900">{item.title}</p>
              <p className="mt-2">{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

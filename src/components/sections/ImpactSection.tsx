import { Card } from '@/components/Card';
import { InlineCTA } from '@/components/InlineCTA';
import { Section, SectionHeader } from '@/components/Section';
import { BarChartIcon, CheckIcon, ClockIcon } from '@/components/Icons';

export default function ImpactSection() {
  const industries = [
    {
      label: 'Dienstleistung',
      title: 'Mehr abrechenbare Zeit, weniger Admin',
      icon: BarChartIcon,
      gains: [
        'Angebot → Auftrag → Rechnung ohne Medienbrüche',
        'Rückfragen und Doppelerfassung messbar reduzieren',
        'Status und Verantwortlichkeiten jederzeit sichtbar',
      ],
      metrics: 'Messpunkte: Bearbeitungszeit pro Auftrag, Rechnungsdauer, Rückfragen',
    },
    {
      label: 'Handwerk',
      title: 'Saubere Übergaben, bessere Auslastung',
      icon: ClockIcon,
      gains: [
        'Termine, Material und Teams zentral koordiniert',
        'Weniger Ausfälle durch klare Freigaben',
        'Kundeninfos und Projektstatus in einem Blick',
      ],
      metrics: 'Messpunkte: Termintreue, Nacharbeit, Kapazitätsauslastung',
    },
    {
      label: 'Fertigung',
      title: 'Auditfähige Qualität, kürzere Durchlaufzeit',
      icon: CheckIcon,
      gains: [
        'Digitale Prüfpfade statt Papier und Excel',
        'Fehlerquote und Nacharbeit sichtbar senken',
        'Sichere Dokumentation für Audits',
      ],
      metrics: 'Messpunkte: Prüfzeit pro Vorgang, Fehlerquote, Durchlaufzeit',
    },
  ];

  return (
    <Section id="gewinn" divider>
      <SectionHeader
        eyebrow="Gewinn"
        title="Direkter Gewinn je Branche"
        description="Wählen Sie Ihren Bereich – und sehen Sie sofort, wo die messbare Entlastung entsteht."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {industries.map((industry, index) => {
          const Icon = industry.icon;
          return (
            <Card
              key={industry.label}
              interactive
              className="flex h-full flex-col gap-4 motion-safe:animate-fade-up"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)] shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                    {industry.label}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">{industry.title}</h3>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                {industry.gains.map((gain) => (
                  <li key={gain}>• {gain}</li>
                ))}
              </ul>
              <p className="mt-auto rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 text-xs text-slate-600">
                {industry.metrics}
              </p>
            </Card>
          );
        })}
      </div>
      <InlineCTA label="Gewinnhebel identifizieren" />
    </Section>
  );
}

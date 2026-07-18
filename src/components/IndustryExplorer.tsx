'use client';

import { useState } from 'react';
import { BarChartIcon, CheckIcon, ClockIcon } from '@/components/Icons';
import { cn } from '@/lib/utils';

const industries = [
  {
    id: 'dienstleistung',
    label: 'Dienstleistung',
    title: 'Mehr abrechenbare Zeit. Weniger Administration.',
    description:
      'Wir verbinden Angebot, Auftrag, Projekt und Rechnung zu einem nachvollziehbaren Ablauf.',
    icon: BarChartIcon,
    workflow: ['Anfrage erfassen', 'Angebot freigeben', 'Projekt übergeben', 'Rechnung auslösen'],
    measures: ['Bearbeitungszeit', 'Rückfragen', 'Rechnungsdauer'],
  },
  {
    id: 'handwerk',
    label: 'Handwerk',
    title: 'Saubere Übergaben. Verlässlichere Auslastung.',
    description:
      'Termine, Material, Teams und Kundeninformationen werden zentral koordiniert und sichtbar.',
    icon: ClockIcon,
    workflow: ['Auftrag prüfen', 'Material disponieren', 'Team einplanen', 'Abnahme dokumentieren'],
    measures: ['Termintreue', 'Nacharbeit', 'Kapazitätsauslastung'],
  },
  {
    id: 'fertigung',
    label: 'Fertigung',
    title: 'Digitale Prüfpfade. Belastbare Dokumentation.',
    description:
      'Prüfungen, Freigaben und Abweichungen werden auditfähig und ohne Medienbruch dokumentiert.',
    icon: CheckIcon,
    workflow: ['Prüfauftrag', 'Daten erfassen', 'Abweichung klären', 'Freigabe dokumentieren'],
    measures: ['Prüfzeit', 'Fehlerquote', 'Durchlaufzeit'],
  },
] as const;

export default function IndustryExplorer() {
  const [activeId, setActiveId] = useState<(typeof industries)[number]['id']>('dienstleistung');
  const active = industries.find((industry) => industry.id === activeId) ?? industries[0];
  const Icon = active.icon;

  return (
    <div className="industry-explorer">
      <div className="industry-explorer__tabs" role="tablist" aria-label="Branche auswählen">
        {industries.map((industry) => (
          <button
            key={industry.id}
            type="button"
            role="tab"
            aria-selected={industry.id === activeId}
            aria-controls="industry-panel"
            id={`industry-tab-${industry.id}`}
            onClick={() => setActiveId(industry.id)}
            className={cn('industry-explorer__tab', industry.id === activeId && 'is-active')}
          >
            {industry.label}
          </button>
        ))}
      </div>

      <div
        id="industry-panel"
        role="tabpanel"
        aria-labelledby={`industry-tab-${active.id}`}
        className="industry-explorer__panel"
      >
        <div className="industry-explorer__copy">
          <span className="industry-explorer__icon">
            <Icon className="h-6 w-6" />
          </span>
          <p className="eyebrow">Direkter Gewinn</p>
          <h3>{active.title}</h3>
          <p>{active.description}</p>
          <div className="industry-explorer__measures">
            <span>Messpunkte</span>
            {active.measures.map((measure) => (
              <strong key={measure}>{measure}</strong>
            ))}
          </div>
        </div>
        <ol className="industry-explorer__workflow">
          {active.workflow.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{step}</strong>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

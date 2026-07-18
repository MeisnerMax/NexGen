import type { CSSProperties } from 'react';

const sources = [
  { label: 'Excel', detail: 'Listen' },
  { label: 'E-Mail', detail: 'Freigaben' },
  { label: 'Papier', detail: 'Prüfung' },
];

export default function ProcessCanvas() {
  return (
    <div
      className="process-canvas"
      role="img"
      aria-label="Visualisierung: Excel, E-Mail und Papier werden zu einem transparenten automatisierten Prozess verbunden."
    >
      <div className="process-canvas__topbar">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="process-canvas__dot" />
          <span className="process-canvas__dot" />
          <span className="process-canvas__dot" />
        </div>
        <span className="process-canvas__status">
          <span aria-hidden="true" /> System aktiv
        </span>
      </div>

      <div className="process-canvas__workspace">
        <div className="process-canvas__grid" aria-hidden="true" />
        <div className="process-canvas__sources">
          {sources.map((source, index) => (
            <div
              key={source.label}
              className="process-node process-node--source"
              style={{ '--node-delay': `${index * 0.35}s` } as CSSProperties}
            >
              <span className="process-node__icon" aria-hidden="true">
                {index + 1}
              </span>
              <span>
                <strong>{source.label}</strong>
                <small>{source.detail}</small>
              </span>
            </div>
          ))}
        </div>

        <div className="process-canvas__flow" aria-hidden="true">
          <span className="process-canvas__beam" />
          <span className="process-canvas__pulse" />
        </div>

        <div className="process-node process-node--core">
          <span className="process-node__eyebrow">NexGen Workflow</span>
          <strong>Prüfen · Verbinden · Steuern</strong>
          <div className="process-node__progress" aria-hidden="true">
            <span />
          </div>
          <small>Automatisierung läuft</small>
        </div>

        <div className="process-canvas__flow process-canvas__flow--out" aria-hidden="true">
          <span className="process-canvas__beam" />
          <span className="process-canvas__pulse" />
        </div>

        <div className="process-node process-node--result">
          <span className="process-node__check" aria-hidden="true">
            ✓
          </span>
          <span>
            <strong>Klarer Status</strong>
            <small>Verantwortlich · nachvollziehbar</small>
          </span>
        </div>
      </div>

      <div className="process-canvas__metrics">
        <div>
          <span>Übergaben</span>
          <strong>verbunden</strong>
        </div>
        <div>
          <span>Status</span>
          <strong>transparent</strong>
        </div>
        <div>
          <span>Messung</span>
          <strong>ab Projektstart</strong>
        </div>
      </div>
    </div>
  );
}

import type { ReactNode } from 'react';
import Breadcrumbs, { type BreadcrumbItem } from '@/components/Breadcrumbs';

type Signal = {
  label: string;
  value: string;
};

export function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  description,
  children,
  signals = [],
}: {
  breadcrumbs: BreadcrumbItem[];
  eyebrow: string;
  title: string;
  description: ReactNode;
  children?: ReactNode;
  signals?: Signal[];
}) {
  return (
    <section className="subpage-hero">
      <div className="subpage-hero__grid" aria-hidden="true" />
      <div className="section-shell relative z-10">
        <Breadcrumbs items={breadcrumbs} className="subpage-hero__breadcrumbs" />
        <div className="subpage-hero__layout">
          <div className="subpage-hero__copy">
            <p className="eyebrow eyebrow--light">{eyebrow}</p>
            <h1>{title}</h1>
            <p className="subpage-hero__description">{description}</p>
            {children && <div className="subpage-hero__actions">{children}</div>}
          </div>

          <div className="subpage-hero__signal" aria-hidden="true">
            <div className="subpage-hero__signal-topline">
              <span>Systemstatus</span>
              <span className="subpage-hero__live">Bereit</span>
            </div>
            <div className="subpage-hero__orbit">
              <span className="subpage-hero__orbit-ring" />
              <span className="subpage-hero__orbit-ring subpage-hero__orbit-ring--inner" />
              <span className="subpage-hero__orbit-core">N</span>
              <span className="subpage-hero__orbit-node subpage-hero__orbit-node--one" />
              <span className="subpage-hero__orbit-node subpage-hero__orbit-node--two" />
              <span className="subpage-hero__orbit-node subpage-hero__orbit-node--three" />
            </div>
            <div className="subpage-hero__signals">
              {(signals.length
                ? signals
                : [
                    { label: 'Fokus', value: 'Wirkung' },
                    { label: 'Prinzip', value: 'Klarheit' },
                  ]
              ).map((signal) => (
                <div key={signal.label}>
                  <span>{signal.label}</span>
                  <strong>{signal.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

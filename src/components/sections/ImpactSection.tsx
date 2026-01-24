'use client';

import { type CSSProperties, useEffect, useRef, useState } from 'react';
import { Card } from '@/components/Card';
import { Section, SectionHeader } from '@/components/Section';
import { BarChartIcon, CheckIcon, ClockIcon, EyeIcon, TargetIcon } from '@/components/Icons';

export default function ImpactSection() {
  const chartsRef = useRef<HTMLDivElement | null>(null);
  const [chartsVisible, setChartsVisible] = useState(false);

  useEffect(() => {
    const element = chartsRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setChartsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <Section id="gewinn" divider>
      <SectionHeader
        eyebrow="Gewinn"
        title="Gewinn fürs Unternehmen: mehr Kunden und weniger Aufwand"
        description="Mehr Anfragen, schnellere Abläufe und bessere Entscheidungen. Die Wirkung ist messbar in Umsatz, Zeit und Qualität."
      />
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <Card
          interactive
          className="space-y-4 motion-safe:animate-fade-up"
          style={{ animationDelay: '40ms' }}
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)] shadow-sm">
              <BarChartIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Umsatz
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                Mehr Kunden durch eine bessere Website
              </h3>
              
            </div>
          </div>
         
        </Card>
        <Card
          interactive
          className="space-y-4 motion-safe:animate-fade-up"
          style={{ animationDelay: '90ms' }}
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)] shadow-sm">
              <ClockIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Effizienz
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                Weniger Arbeitszeit durch Automatisierung
              </h3>
              
            </div>
          </div>
          
        </Card>
        <Card
          interactive
          className="space-y-4 motion-safe:animate-fade-up"
          style={{ animationDelay: '140ms' }}
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)] shadow-sm">
              <EyeIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Qualität
              </p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">
                Mehr Transparenz und sichere Entscheidungen
              </h3>
              
            </div>
          </div>
          
        </Card>
      </div>

      <div
        ref={chartsRef}
        data-animate={chartsVisible ? 'true' : 'false'}
        className="mt-10 grid gap-6 lg:grid-cols-2"
      >
        <Card
          interactive
          className="space-y-6 motion-safe:animate-fade-up"
          style={{ animationDelay: '200ms' }}
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)] shadow-sm">
              <TargetIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Nachfrage
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                Anfrage-Pipeline im Blick
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Die Website wird zum Vertriebskanal mit messbarer Wirkung über die Zeit.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200/70 bg-[var(--color-surface)]/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Anfrage-Pipeline (pro Monat)
            </p>
            <div className="mt-4 rounded-2xl bg-white/70 p-5 ring-1 ring-slate-200/70">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span className="font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Besuche
                    </span>
                    <span className="font-semibold text-slate-900">1.240</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200/70">
                    <div
                      className="progress-fill progress-delay-1 h-full rounded-full bg-[var(--color-accent)]/85"
                      style={{ '--progress': '100%' } as CSSProperties}
                    />
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500">+40% Sichtbarkeit</p>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span className="font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Anfragen
                    </span>
                    <span className="font-semibold text-slate-900">180</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200/70">
                    <div
                      className="progress-fill progress-delay-2 h-full rounded-full bg-[var(--color-accent)]/75"
                      style={{ '--progress': '35%' } as CSSProperties}
                    />
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500">+28% Leads</p>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-600">
                    <span className="font-semibold uppercase tracking-[0.2em] text-slate-500">
                      Aufträge
                    </span>
                    <span className="font-semibold text-slate-900">36</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200/70">
                    <div
                      className="progress-fill progress-delay-3 h-full rounded-full bg-[var(--color-accent)]/65"
                      style={{ '--progress': '18%' } as CSSProperties}
                    />
                  </div>
                  <p className="mt-1 text-[11px] text-slate-500">+14% Abschlüsse</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card
          interactive
          className="space-y-6 motion-safe:animate-fade-up"
          style={{ animationDelay: '260ms' }}
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)] shadow-sm">
              <CheckIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                Zeitgewinn
              </p>
              <h3 className="mt-2 text-xl font-semibold text-slate-900">
                Weniger Aufwand pro Vorgang
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Automatisierung reduziert Handgriffe und beschleunigt die Bearbeitung spürbar.
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200/70 bg-[var(--color-surface)]/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Durchlaufzeit nach Automatisierung
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-[auto,1fr] sm:items-center">
              <div className="relative mx-auto h-28 w-28">
                <svg viewBox="0 0 120 120" className="h-full w-full">
                  <circle
                    cx="60"
                    cy="60"
                    r="44"
                    pathLength="100"
                    className="gauge-track"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="44"
                    pathLength="100"
                    className="gauge-progress"
                    strokeWidth="10"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    className="gauge-orbit"
                    strokeWidth="1.4"
                    fill="none"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-lg font-semibold text-slate-900">-60%</p>
                  <p className="text-xs text-slate-600">Zeit</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-slate-600">
                <p className="text-sm font-semibold text-slate-900">
                  Bearbeitungszeit sinkt deutlich
                </p>
                <p className="text-xs text-slate-600">
                  Automatisierte Übergaben reduzieren Wartezeiten und Nacharbeit.
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                    Manuell
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
                    Automatisiert
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}

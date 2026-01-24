'use client';

import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Card } from '@/components/Card';
import { Section, SectionHeader } from '@/components/Section';
import { BarChartIcon, CheckIcon, ClockIcon, EyeIcon, TargetIcon } from '@/components/Icons';

export default function ImpactSection() {
  const chartsRef = useRef<HTMLDivElement | null>(null);
  const [chartsVisible, setChartsVisible] = useState(false);

  useEffect(() => {
    const element = chartsRef.current;
    if (!element) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setChartsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setChartsVisible(Boolean(entry?.isIntersecting));
      },
      { threshold: 0.35, rootMargin: '0px 0px -10% 0px' },
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
        <Card interactive className="space-y-6">
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
          
        </Card>
      </div>
    </Section>
  );
}

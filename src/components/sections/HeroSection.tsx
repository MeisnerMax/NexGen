'use client';

import { ButtonLink } from '@/components/Button';
import { Badge } from '@/components/Badge';
import { Card } from '@/components/Card';
import { trackingEvents } from '@/lib/tracking';
import { trustPoints } from '@/lib/data';
import { useAbVariant } from '@/hooks/useAbVariant';

const heroVariants = {
  a: {
    headline: 'Automatisieren Sie Ihre Kernprozesse – messbar weniger Aufwand.',
    subline:
      'Wir digitalisieren Abläufe in KMU in Coburg & Oberfranken. Ergebnis: messbar weniger manuelle Schritte, klare Übergaben und transparente Status in Vertrieb, Projekt und Buchhaltung.',
    primaryCta: 'Kostenlose Prozessanalyse + Maßnahmenplan',
    secondaryCta: 'Ergebnisse & Cases ansehen',
  },
  b: {
    headline: 'Mehr Output ohne zusätzliche Köpfe.',
    subline:
      'Wir schließen Medienbrüche zwischen Teams und Systemen. Sie gewinnen messbar Zeit, reduzieren Fehler und schaffen klare Verantwortlichkeiten im Tagesgeschäft.',
    primaryCta: 'Engpass-Analyse mit Prioritätenliste',
    secondaryCta: 'Fallbeispiele mit Ergebnissen',
  },
};

export default function HeroSection() {
  const variant = useAbVariant('hero-copy', ['a', 'b']);
  const copy = heroVariants[variant as keyof typeof heroVariants] ?? heroVariants.a;

  return (
    <section className="border-b border-slate-200/100 pb-12 pt-36 md:pb-16">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.15fr,0.85fr]">
        <div>
          <Badge>Kernleistung: Prozessautomatisierung</Badge>
          <h1 className="mt-8 text-4xl font-semibold leading-tight md:text-5xl">
            {copy.headline}
          </h1>
          <p className="mt-10 text-lg text-slate-700">
            {copy.subline}
          </p>
          <div className="mt-24 flex flex-col gap-4 sm:flex-row">
            <ButtonLink
              href="/termin"
              trackingEvent={trackingEvents.ctaBookingClick}
              trackingProps={{ test: 'hero-copy', variant }}
            >
              {copy.primaryCta}
            </ButtonLink>
            <ButtonLink
              href="/cases"
              variant="secondary"
              trackingEvent={trackingEvents.ctaCaseClick}
              trackingProps={{ test: 'hero-copy', variant }}
            >
              {copy.secondaryCta}
            </ButtonLink>
          </div>
        </div>
        <div className="grid gap-6">
          <Card className="space-y-4">
            <p className="text-sm font-semibold text-slate-900">Messbarer Outcome</p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>• Bearbeitungszeit pro Vorgang messbar reduzieren</li>
              <li>• Fehlerquote und Rückfragen im Ablauf senken</li>
              <li>• Status und Verantwortlichkeiten sichtbar machen</li>
            </ul>
            <p className="text-xs text-slate-600">
              Wir definieren KPIs zu Projektstart und messen Wirkung vor/nach der Umsetzung.
            </p>
          </Card>
          <Card className="space-y-3">
            <p className="text-sm font-semibold text-slate-900">Vertrauen & Vorgehen</p>
            <ul className="space-y-2 text-sm text-slate-700">
              {trustPoints.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

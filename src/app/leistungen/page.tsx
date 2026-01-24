import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/Card';
import { Section, SectionHeader } from '@/components/Section';
import { InlineCTA } from '@/components/InlineCTA';
import { extraServices, primaryServices } from '@/lib/services';
import FocusAreasSection from '@/components/sections/FocusAreasSection';

export const metadata: Metadata = {
  title: 'Leistungen',
  description:
    'Kernleistungen und Zusatzangebote von NexGen Consulting – problemorientiert erklärt und auf KMU zugeschnitten.',
};

export default function ServicesPage() {
  const [primaryService, ...secondaryServices] = primaryServices;

  return (
    <>
      <Section className="pt-10">
        <SectionHeader
          eyebrow="Leistungen"
          title="Digitalisierung nach klaren Problemen, nicht nach Buzzwords"
          description="Wir starten mit einer Kernleistung und ergänzen gezielt, sobald die Basis stabil läuft."
        />
        <InlineCTA label="Kostenlose Analyse buchen" />
      </Section>
      <Section>
        <SectionHeader
          eyebrow="Kernleistung"
          title="Prozessautomatisierung als stärkster Hebel"
          description="Wir automatisieren die Prozesskette, die den größten Aufwand erzeugt."
        />
        <div className="mt-10">
          <Card className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                {primaryService.tagline}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                {primaryService.title}
              </h3>
              <p className="mt-3 text-sm text-slate-700">{primaryService.summary}</p>
              <p className="mt-4 text-sm font-semibold text-slate-900">
                {primaryService.result}
              </p>
              <Link
                href={`/leistungen/${primaryService.slug}`}
                className="mt-5 inline-flex text-sm font-semibold text-[var(--color-accent)]"
              >
                Details ansehen →
              </Link>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Enthalten</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {primaryService.highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </Section>
      <Section>
        <SectionHeader
          eyebrow="Ergänzende Leistungen"
          title="Wenn die Basis steht, erweitern wir gezielt"
          description="Zwei Leistungen, die Wachstum unterstützen und neue Anfragen planbar machen."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {secondaryServices.map((service) => (
            <Card key={service.slug} className="flex h-full flex-col gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                  {service.tagline}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-700">{service.summary}</p>
              </div>
              <ul className="mt-auto space-y-2 text-sm text-slate-700">
                {service.highlights.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <Link
                href={`/leistungen/${service.slug}`}
                className="mt-4 text-sm font-semibold text-[var(--color-accent)]"
              >
                Details ansehen →
              </Link>
            </Card>
          ))}
        </div>
      </Section>
      <FocusAreasSection
        eyebrow="Wichtige Themen"
        title="Microsoft 365 und KI als eigene Leistungsbereiche"
        description="Diese Themen behandeln wir als eigene Schwerpunkte, weil sie für viele KMU der nächste große Hebel sind."
      />
      <Section>
        <SectionHeader
          eyebrow="Zusatzleistungen"
          title="Ergänzende Unterstützung, wenn Sie weiter skalieren"
          description="Nach den Kernprojekten unterstützen wir beim Ausbau und der Verankerung neuer Abläufe."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {extraServices.map((service) => (
            <Card key={service} className="text-sm text-slate-600">
              {service}
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

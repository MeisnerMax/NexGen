import Link from 'next/link';
import { Card } from '@/components/Card';
import { ButtonLink } from '@/components/Button';
import { Section, SectionHeader } from '@/components/Section';
import { PageHero } from '@/components/PageHero';
import { extraServices, primaryServices } from '@/lib/services';
import FocusAreasSection from '@/components/sections/FocusAreasSection';
import JsonLd from '@/seo/JsonLd';
import { buildBreadcrumbList, buildMetadata } from '@/seo/metadata';
import { getRouteKeywords } from '@/seo/keywordMap';

const routeKeywords = getRouteKeywords('/leistungen');

export const metadata = buildMetadata({
  path: '/leistungen',
  title: 'Leistungen für KMU: Automatisierung & digitale Lösungen',
  benefit:
    'Kernleistungen von Prozessautomatisierung bis Website & SEO, ergänzt durch Microsoft 365 und KI-Workflows.',
  keywords: routeKeywords?.secondary,
});

export default function ServicesPage() {
  const [primaryService, ...secondaryServices] = primaryServices;
  const breadcrumbSchema = buildBreadcrumbList([
    { label: 'Start', href: '/' },
    { label: 'Leistungen', href: '/leistungen' },
  ]);

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Start', href: '/' }, { label: 'Leistungen' }]}
        eyebrow="Leistungsarchitektur"
        title="Digitale Systeme, die im Alltag wirken."
        description="Wir starten mit dem größten Engpass, bauen eine belastbare Lösung und erweitern erst dann. So entsteht Digitalisierung mit Richtung statt Tool-Sammlung."
        signals={[
          { label: 'Prinzip', value: 'Engpass zuerst' },
          { label: 'Ergebnis', value: 'Skalierbare Abläufe' },
        ]}
      >
        <ButtonLink href="/termin" variant="light">
          Maßnahmenplan sichern <span aria-hidden="true">↗</span>
        </ButtonLink>
        <ButtonLink href="/cases" variant="dark">
          Ergebnisse ansehen
        </ButtonLink>
      </PageHero>
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.72fr,1.28fr] lg:gap-20">
          <SectionHeader
            eyebrow="Kernleistung"
            title="Der größte Hebel zuerst."
            description="Wir automatisieren die Prozesskette, die den größten Aufwand und die meisten Fehler verursacht."
          />
          <div className="dark-cta p-7 md:p-10">
            <div>
              <p className="eyebrow eyebrow--light">{primaryService.tagline}</p>
              <h3 className="mt-4 text-3xl font-semibold md:text-4xl">{primaryService.title}</h3>
              <p className="mt-4 max-w-2xl leading-7">{primaryService.summary}</p>
              <p className="mt-6 text-sm font-semibold text-white">{primaryService.result}</p>
              <ButtonLink
                href={`/leistungen/${primaryService.slug}`}
                variant="light"
                className="relative z-10 mt-7"
              >
                Leistung entdecken <span aria-hidden="true">↗</span>
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
      <Section tone="soft" divider>
        <SectionHeader
          eyebrow="Ergänzende Leistungen"
          title="Wenn der Kern sitzt, erweitern wir gezielt"
          description="Zwei Leistungen, die Prozesse stabilisieren und Anfragen planbar machen."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {secondaryServices.map((service, index) => (
            <Card key={service.slug} interactive className="flex h-full min-h-[29rem] flex-col p-8">
              <div>
                <div className="flex items-center justify-between">
                  <p className="eyebrow">{service.tagline}</p>
                  <span className="font-heading text-sm text-slate-400">0{index + 2}</span>
                </div>
                <h3 className="mt-8 text-3xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-sm leading-7">{service.summary}</p>
              </div>
              <ul className="mt-8 space-y-3 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-muted)]">
                {service.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[var(--color-accent)]">↗</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={`/leistungen/${service.slug}`}
                className="mt-auto pt-8 text-sm font-semibold text-[var(--color-accent)]"
              >
                Leistung entdecken ↗
              </Link>
            </Card>
          ))}
        </div>
      </Section>
      <FocusAreasSection
        eyebrow="Wichtige Themen"
        title="Microsoft 365 und KI als eigene Leistungsbereiche"
        description="Diese Themen behandeln wir als eigene Schwerpunkte, weil sie in vielen KMU spürbare Entlastung bringen."
      />
      <Section tone="muted" divider>
        <SectionHeader
          eyebrow="Zusatzleistungen"
          title="Ergänzende Unterstützung, wenn Sie weiter skalieren"
          description="Nach den Kernprojekten unterstützen wir beim Ausbau und der Verankerung neuer Abläufe."
        />
        <div className="mt-12 editorial-panel overflow-hidden">
          {extraServices.map((service, index) => (
            <div
              key={service}
              className="grid gap-3 border-b border-[var(--color-border)] p-6 last:border-0 md:grid-cols-[5rem,1fr] md:p-8"
            >
              <span className="font-heading text-sm text-[var(--color-accent)]">0{index + 1}</span>
              <p className="font-semibold text-[var(--color-primary)]">{service}</p>
            </div>
          ))}
        </div>
      </Section>
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}

import { Badge } from '@/components/Badge';
import { Card } from '@/components/Card';
import { InlineCTA } from '@/components/InlineCTA';
import { Section, SectionHeader } from '@/components/Section';
import { Accordion } from '@/components/Accordion';
import { ButtonLink } from '@/components/Button';
import { CheckIcon } from '@/components/Icons';
import { PageHero } from '@/components/PageHero';
import RelatedContent from '@/components/RelatedContent';
import { siteConfig } from '@/lib/site';
import type { ServiceDetail } from '@/lib/services';
import JsonLd, { buildFaqSchema } from '@/seo/JsonLd';
import { buildBreadcrumbList } from '@/seo/metadata';
import { getRouteKeywords } from '@/seo/keywordMap';

export default function ServiceDetailView({ service }: { service: ServiceDetail }) {
  const path = `/leistungen/${service.slug}`;
  const routeKeywords = getRouteKeywords(path);
  const relatedKeywords = [service.title, ...(routeKeywords?.secondary ?? [])];
  const breadcrumbs = [
    { label: 'Start', href: '/' },
    { label: 'Leistungen', href: '/leistungen' },
    { label: service.title },
  ];

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.summary,
    url: `${siteConfig.url}${path}`,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: siteConfig.region,
  };

  const breadcrumbJsonLd = buildBreadcrumbList([
    { label: 'Start', href: '/' },
    { label: 'Leistungen', href: '/leistungen' },
    { label: service.title, href: path },
  ]);

  const faqJsonLd = service.faq.length ? buildFaqSchema(service.faq) : null;

  return (
    <>
      <PageHero
        breadcrumbs={breadcrumbs}
        eyebrow="Leistung · NexGen Consulting"
        title={service.title}
        description={service.summary}
        signals={[
          { label: 'Start', value: 'Engpassanalyse' },
          { label: 'Ziel', value: 'Messbare Wirkung' },
        ]}
      >
        <ButtonLink href="/termin" variant="light">
          Projektpotenzial prüfen <span aria-hidden="true">↗</span>
        </ButtonLink>
        <ButtonLink href="/leistungen" variant="dark">
          Alle Leistungen
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:gap-20">
          <div>
            <Badge>Das Ergebnis</Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-tight md:text-5xl">
              Nicht mehr digital arbeiten. Sondern besser.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">{service.result}</p>
          </div>
          <div>
            <p className="eyebrow">Darauf können Sie bauen</p>
            <div className="content-rail mt-5">
              {service.highlights.map((item) => (
                <div key={item} className="content-rail__item">
                  <div>
                    <strong>{item}</strong>
                    <p>
                      Sauber umgesetzt, nachvollziehbar dokumentiert und auf Ihren Alltag
                      ausgerichtet.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="soft" divider>
        <SectionHeader
          eyebrow="Für wen"
          title="Wenn Reibung zum täglichen Kostenfaktor wird."
          description="Diese Leistung passt, wenn Sie Abläufe stabilisieren, Fehler senken und klare Verantwortlichkeiten schaffen wollen."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {service.forWhom.map((item, index) => (
            <Card key={item} interactive className="group min-h-56 p-7">
              <span className="text-xs font-bold tracking-[0.18em] text-[var(--color-accent)]">
                0{index + 1}
              </span>
              <p className="mt-14 text-base font-semibold leading-7 text-[var(--color-primary)]">
                {item}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Einsatzfelder"
          title="Dort entsteht der schnellste Hebel."
          description="Typische Situationen, die wir in KMU strukturiert analysieren und messbar entlasten."
        />
        <div className="mt-12 editorial-panel overflow-hidden">
          {service.useCases.map((item, index) => (
            <div
              key={item}
              className="grid gap-4 border-b border-[var(--color-border)] p-6 last:border-b-0 md:grid-cols-[5rem,1fr,auto] md:items-center md:p-8"
            >
              <span className="font-heading text-2xl text-[var(--color-accent)]">0{index + 1}</span>
              <p className="text-base font-semibold text-[var(--color-primary)]">{item}</p>
              <span className="hidden text-xs font-bold uppercase tracking-[0.16em] text-slate-400 md:block">
                Potenzial
              </span>
            </div>
          ))}
        </div>
        <InlineCTA />
      </Section>

      <Section tone="muted" divider>
        <SectionHeader
          eyebrow="Ergebnisraum"
          title="Was nach dem Projekt wirklich bleibt."
          description="Klare Ergebnisse, dokumentiert, messbar und bereit für den Betrieb."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {service.deliverables.map((item) => (
            <Card key={item} className="flex min-h-36 items-start gap-4 p-6">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                <CheckIcon className="h-5 w-5" />
              </span>
              <p className="pt-2 text-sm font-semibold leading-6 text-[var(--color-primary)]">
                {item}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="FAQ"
          title="Häufige Fragen zu dieser Leistung"
          description="Falls Ihre Frage fehlt: Wir klären sie gern im Erstgespräch."
        />
        <div className="mt-12 max-w-4xl">
          <Accordion items={service.faq} />
        </div>
      </Section>

      <Section tone="soft" divider>
        <SectionHeader
          eyebrow="Related"
          title="Passende Inhalte und Beispiele"
          description="Vertiefende Artikel und Cases, die dieses Thema greifbar machen."
        />
        <RelatedContent keywords={relatedKeywords} />
      </Section>

      <JsonLd data={[serviceJsonLd, breadcrumbJsonLd, ...(faqJsonLd ? [faqJsonLd] : [])]} />
    </>
  );
}

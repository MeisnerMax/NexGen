import Link from 'next/link';
import { Card } from '@/components/Card';
import { ButtonLink } from '@/components/Button';
import { Section, SectionHeader } from '@/components/Section';
import { getAllCases } from '@/lib/content';
import { PageHero } from '@/components/PageHero';
import JsonLd from '@/seo/JsonLd';
import { buildBreadcrumbList, buildMetadata } from '@/seo/metadata';
import { getRouteKeywords } from '@/seo/keywordMap';

const routeKeywords = getRouteKeywords('/cases');

export const metadata = buildMetadata({
  path: '/cases',
  title: 'Case Studies: Prozessautomatisierung in KMU',
  benefit: 'Praxisnahe Beispiele mit klaren Ergebnissen und messbarer Entlastung in KMU.',
  keywords: routeKeywords?.secondary,
});

export default function CasesPage() {
  const cases = getAllCases();
  const breadcrumbSchema = buildBreadcrumbList([
    { label: 'Start', href: '/' },
    { label: 'Cases', href: '/cases' },
  ]);

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Start', href: '/' }, { label: 'Cases' }]}
        eyebrow="Cases · Wirkung im Betrieb"
        title="Ergebnisse, die man im Alltag merkt."
        description="Keine Hochglanz-Versprechen: konkrete Ausgangslagen, nachvollziehbare Umsetzung und Kennzahlen, die den Unterschied sichtbar machen."
        signals={[
          { label: 'Fokus', value: 'Praxisbelege' },
          { label: 'Maßstab', value: 'Messbare Entlastung' },
        ]}
      >
        <ButtonLink href="/termin" variant="light">
          Eigenen Hebel prüfen <span aria-hidden="true">↗</span>
        </ButtonLink>
      </PageHero>
      <Section>
        <SectionHeader
          eyebrow="Ausgewählte Fallbeispiele"
          title="Vom Engpass zum belastbaren System."
          description="Jeder Case folgt derselben Logik: verstehen, priorisieren, sauber umsetzen und Wirkung überprüfen."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {cases.map((caseStudy, index) => (
            <Link
              key={caseStudy.slug}
              href={`/cases/${caseStudy.slug}`}
              className="group block h-full"
            >
              <Card interactive className="flex h-full min-h-[28rem] flex-col p-8">
                <div className="flex items-start justify-between gap-6">
                  <p className="eyebrow">{caseStudy.industry}</p>
                  <span className="font-heading text-sm text-slate-400">0{index + 1}</span>
                </div>
                <h2 className="mt-12 max-w-lg text-3xl font-semibold leading-tight md:text-4xl">
                  {caseStudy.title}
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-7">{caseStudy.summary}</p>
                {caseStudy.metrics.length > 0 && (
                  <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[var(--color-border)] pt-6">
                    {caseStudy.metrics.slice(0, 2).map((metric) => (
                      <div key={metric.label}>
                        <strong className="block font-heading text-xl text-[var(--color-primary)]">
                          {metric.value}
                        </strong>
                        <span className="mt-1 block text-xs text-[var(--color-muted)]">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                <span className="mt-auto pt-8 text-sm font-semibold text-[var(--color-accent)]">
                  Case öffnen ↗
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
      <Section tone="soft" divider>
        <div className="dark-cta grid gap-8 p-8 md:grid-cols-[1fr,auto] md:items-center md:p-12">
          <div>
            <p className="eyebrow eyebrow--light">Ihr nächster Case</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Welcher Engpass bremst Sie?</h2>
            <p className="mt-4 max-w-2xl leading-7">
              Wir prüfen Potenzial, Aufwand und nächsten sinnvollen Schritt gemeinsam.
            </p>
          </div>
          <ButtonLink href="/termin" variant="light" className="relative z-10">
            Prozessanalyse buchen
          </ButtonLink>
        </div>
      </Section>
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}

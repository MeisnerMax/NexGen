import Link from 'next/link';
import { Card } from '@/components/Card';
import { Section, SectionHeader } from '@/components/Section';
import { getAllCases } from '@/lib/content';
import { InlineCTA } from '@/components/InlineCTA';
import Breadcrumbs from '@/components/Breadcrumbs';
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
    <Section className="pt-10">
      <Breadcrumbs items={[{ label: 'Start', href: '/' }, { label: 'Cases' }]} className="mb-6" />
      <SectionHeader
        eyebrow="Fallbeispiele"
        title="Case Studies zur Prozessautomatisierung"
        description="Beispiele mit messbaren Kennzahlen und klaren Ergebnissen aus Projekten."
        as="h1"
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {cases.map((caseStudy) => (
          <Card key={caseStudy.slug} className="flex h-full flex-col">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
              {caseStudy.industry}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">{caseStudy.title}</h3>
            <p className="mt-3 text-sm text-slate-700">{caseStudy.summary}</p>
            {caseStudy.metrics.length > 0 && (
              <div className="mt-4 space-y-2 text-xs text-slate-600">
                {caseStudy.metrics.slice(0, 3).map((metric) => (
                  <div key={metric.label} className="flex items-center justify-between gap-3">
                    <span>{metric.label}</span>
                    <span className="font-semibold text-slate-900">{metric.value}</span>
                  </div>
                ))}
              </div>
            )}
            <Link
              href={`/cases/${caseStudy.slug}`}
              className="mt-4 text-sm font-semibold text-[var(--color-accent)]"
            >
              Details ansehen →
            </Link>
          </Card>
        ))}
      </div>
      <InlineCTA />
      <JsonLd data={breadcrumbSchema} />
    </Section>
  );
}

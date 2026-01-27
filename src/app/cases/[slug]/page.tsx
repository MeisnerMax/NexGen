import { notFound } from 'next/navigation';
import { ButtonLink } from '@/components/Button';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedContent from '@/components/RelatedContent';
import { getCase, getCaseSlugs } from '@/lib/content';
import { trackingEvents } from '@/lib/tracking';
import JsonLd from '@/seo/JsonLd';
import { buildBreadcrumbList, buildMetadata } from '@/seo/metadata';
import { getRouteKeywords, keywordMap, matchServiceForKeywords } from '@/seo/keywordMap';
import { siteConfig } from '@/lib/site';

export function generateStaticParams() {
  return getCaseSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const caseStudy = getCase(params.slug);
  if (!caseStudy) {
    return buildMetadata({ title: 'Case Study', path: '/cases' });
  }
  const routeKeywords = getRouteKeywords('/cases/[slug]');
  const mapped = keywordMap.content.cases[caseStudy.slug] ?? [];
  const keywords = [...mapped, ...(routeKeywords?.secondary ?? [])];
  return {
    ...buildMetadata({
      title: caseStudy.title,
      description: caseStudy.summary,
      path: `/cases/${caseStudy.slug}`,
      type: 'article',
      keywords,
    }),
  };
}

export default function CaseDetailPage({ params }: { params: { slug: string } }) {
  const caseStudy = getCase(params.slug);
  if (!caseStudy) {
    notFound();
  }
  const mapped = keywordMap.content.cases[caseStudy.slug] ?? [];
  const routeKeywords = getRouteKeywords('/cases/[slug]');
  const keywords = [...mapped, ...(routeKeywords?.secondary ?? [])];
  const relatedService = matchServiceForKeywords(keywords);
  const breadcrumbItems = [
    { label: 'Start', href: '/' },
    { label: 'Cases', href: '/cases' },
    { label: caseStudy.title, href: `/cases/${caseStudy.slug}` },
  ];

  const caseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CaseStudy',
    headline: caseStudy.title,
    description: caseStudy.summary,
    about: caseStudy.industry,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    mainEntityOfPage: `${siteConfig.url}/cases/${caseStudy.slug}`,
  };

  return (
    <Section className="pt-10">
      <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
        <div>
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            {caseStudy.industry}
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">{caseStudy.title}</h1>
          <p className="mt-4 text-lg text-slate-700">{caseStudy.summary}</p>
        </div>
        <Card className="space-y-2">
          <p className="text-sm font-semibold text-slate-900">Tech Stack</p>
          <ul className="text-sm text-slate-700">
            {caseStudy.stack.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </Card>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <Card>
          <p className="text-sm font-semibold text-slate-900">Ausgangslage</p>
          <p className="mt-3 text-sm text-slate-700">{caseStudy.situation}</p>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-slate-900">Ziel</p>
          <p className="mt-3 text-sm text-slate-700">{caseStudy.goal}</p>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-slate-900">Umsetzung</p>
          <p className="mt-3 text-sm text-slate-700">{caseStudy.approach}</p>
        </Card>
        <Card>
          <p className="text-sm font-semibold text-slate-900">Ergebnis</p>
          <p className="mt-3 text-sm text-slate-700">{caseStudy.results}</p>
        </Card>
        {caseStudy.metrics.length > 0 && (
          <Card>
            <p className="text-sm font-semibold text-slate-900">Kennzahlen</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              {caseStudy.metrics.map((metric) => (
                <li key={metric.label} className="flex items-center justify-between gap-3">
                  <span>{metric.label}</span>
                  <span className="font-semibold text-slate-900">{metric.value}</span>
                </li>
              ))}
            </ul>
          </Card>
        )}
      </div>

      <div className="mt-12 rounded-3xl bg-slate-900 px-6 py-10 text-white">
        <h2 className="text-2xl font-semibold text-white">Bereit für ähnliche Ergebnisse?</h2>
        <p className="mt-3 text-sm text-slate-200">
          In einem kurzen Gespräch klären wir, welcher Hebel für Sie am stärksten wirkt.
        </p>
        <ButtonLink
          href="/termin"
          trackingEvent={trackingEvents.ctaBookingClick}
          variant="secondary"
          className="mt-6 inline-flex border-white/30 bg-white text-slate-900 hover:bg-slate-100 focus-visible:outline-white"
        >
          Prozessanalyse sichern
        </ButtonLink>
      </div>

      {relatedService && (
        <div className="mt-10 rounded-3xl border border-[color:var(--color-accent-soft)] bg-[var(--color-accent-soft)] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Passende Leistung
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">{relatedService.label}</h2>
          <p className="mt-3 text-sm text-slate-700">
            Wir übertragen die Erkenntnisse aus dem Case auf Ihre Prozesse und definieren klare nächste
            Schritte.
          </p>
          <ButtonLink href={relatedService.slug} className="mt-5">
            Zur Leistung
          </ButtonLink>
        </div>
      )}

      <RelatedContent
        keywords={keywords}
        exclude={[`/cases/${caseStudy.slug}`]}
        title="Weitere Artikel und Cases"
      />

      <JsonLd data={[caseJsonLd, buildBreadcrumbList(breadcrumbItems)]} />
    </Section>
  );
}

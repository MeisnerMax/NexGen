import { notFound } from 'next/navigation';
import { ButtonLink } from '@/components/Button';
import { Card } from '@/components/Card';
import { Section, SectionHeader } from '@/components/Section';
import { PageHero } from '@/components/PageHero';
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
    <>
      <PageHero
        breadcrumbs={breadcrumbItems}
        eyebrow={`${caseStudy.industry} · Case Study`}
        title={caseStudy.title}
        description={caseStudy.summary}
        signals={[
          { label: 'Branche', value: caseStudy.industry },
          { label: 'Systeme', value: `${caseStudy.stack.length} Bausteine` },
        ]}
      >
        <ButtonLink href="/termin" variant="light" trackingEvent={trackingEvents.ctaBookingClick}>
          Ähnliches Potenzial prüfen <span aria-hidden="true">↗</span>
        </ButtonLink>
        <ButtonLink href="/cases" variant="dark">
          Alle Cases
        </ButtonLink>
      </PageHero>

      {caseStudy.metrics.length > 0 && (
        <Section className="pb-0 md:pb-0 lg:pb-0">
          <div className="metric-strip">
            {caseStudy.metrics.slice(0, 3).map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <SectionHeader
          eyebrow="Ausgangslage & Ziel"
          title="Erst Klarheit. Dann Veränderung."
          description="Eine gute Lösung beginnt nicht beim Werkzeug, sondern beim gemeinsamen Verständnis des Engpasses."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Card className="min-h-72 p-8">
            <span className="font-heading text-sm text-[var(--color-accent)]">
              01 · Ausgangslage
            </span>
            <p className="mt-12 text-lg font-semibold leading-8 text-[var(--color-primary)]">
              {caseStudy.situation}
            </p>
          </Card>
          <Card className="min-h-72 p-8">
            <span className="font-heading text-sm text-[var(--color-accent)]">02 · Zielbild</span>
            <p className="mt-12 text-lg font-semibold leading-8 text-[var(--color-primary)]">
              {caseStudy.goal}
            </p>
          </Card>
        </div>
      </Section>

      <Section tone="soft" divider>
        <div className="grid gap-12 lg:grid-cols-[0.75fr,1.25fr] lg:gap-20">
          <SectionHeader eyebrow="Umsetzung" title="Ein System statt einzelner Fixes." />
          <div className="editorial-panel p-7 md:p-10">
            <p className="text-lg leading-8 text-[var(--color-primary)]">{caseStudy.approach}</p>
            <div className="mt-8 border-t border-[var(--color-border)] pt-7">
              <p className="eyebrow">Tech Stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {caseStudy.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-xs font-semibold text-[var(--color-primary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="dark-cta p-8 md:p-12">
          <p className="eyebrow eyebrow--light">Resultat</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold md:text-5xl">
            Was sich nach der Umsetzung verändert hat.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8">{caseStudy.results}</p>
          <ButtonLink
            href="/termin"
            variant="light"
            className="relative z-10 mt-8"
            trackingEvent={trackingEvents.ctaBookingClick}
          >
            Eigenen Hebel besprechen
          </ButtonLink>
        </div>

        {relatedService && (
          <div className="mt-12 grid gap-6 border-t border-[var(--color-border)] pt-10 md:grid-cols-[1fr,auto] md:items-end">
            <div>
              <p className="eyebrow">Passende Leistung</p>
              <h2 className="mt-3 text-3xl font-semibold">{relatedService.label}</h2>
              <p className="mt-3 max-w-2xl leading-7">
                Wir übertragen die Erkenntnisse auf Ihre Prozesse und definieren klare nächste
                Schritte.
              </p>
            </div>
            <ButtonLink href={relatedService.slug} variant="secondary">
              Zur Leistung
            </ButtonLink>
          </div>
        )}

        <RelatedContent
          keywords={keywords}
          exclude={[`/cases/${caseStudy.slug}`]}
          title="Weitere Artikel und Cases"
        />
      </Section>

      <JsonLd data={[caseJsonLd, buildBreadcrumbList(breadcrumbItems)]} />
    </>
  );
}

import Link from 'next/link';
import { Card } from '@/components/Card';
import { Section, SectionHeader } from '@/components/Section';
import { PageHero } from '@/components/PageHero';
import { ButtonLink } from '@/components/Button';
import { getAllBlogPosts } from '@/lib/content';
import { formatDate } from '@/lib/format';
import JsonLd from '@/seo/JsonLd';
import { buildBreadcrumbList, buildMetadata } from '@/seo/metadata';
import { getRouteKeywords } from '@/seo/keywordMap';

const routeKeywords = getRouteKeywords('/blog');

export const metadata = buildMetadata({
  path: '/blog',
  title: 'Blog: Automatisierung & Digitalisierung für KMU',
  benefit:
    'Praxiswissen zu Prozessautomatisierung, digitalen Tools und lokaler Sichtbarkeit – kurz, klar und umsetzbar.',
  keywords: routeKeywords?.secondary,
});

export default function BlogPage() {
  const posts = getAllBlogPosts();
  const breadcrumbSchema = buildBreadcrumbList([
    { label: 'Start', href: '/' },
    { label: 'Blog', href: '/blog' },
  ]);

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Start', href: '/' }, { label: 'Blog' }]}
        eyebrow="NexGen Insights"
        title="Wissen, das nicht im Tab liegen bleibt."
        description="Klare Analysen, praktische Entscheidungshilfen und umsetzbare Impulse für Digitalisierung, Automatisierung und Wachstum im Mittelstand."
        signals={[
          { label: 'Format', value: 'Praxiswissen' },
          { label: 'Ziel', value: 'Bessere Entscheidungen' },
        ]}
      >
        <ButtonLink href="/leadmagnet" variant="light">
          Kostenlosen Leitfaden laden
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow="Alle Beiträge" title="Strategie trifft Umsetzung." />
          <p className="max-w-sm text-sm leading-6">
            Für Entscheider, die digitale Themen schnell einordnen und sinnvoll priorisieren wollen.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {posts.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
              <Card interactive className="flex h-full min-h-[25rem] flex-col p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="eyebrow">Insight {String(index + 1).padStart(2, '0')}</span>
                  <span className="text-xs text-slate-500">{post.readingTime}</span>
                </div>
                <h2 className="mt-12 text-3xl font-semibold leading-tight md:text-4xl">
                  {post.title}
                </h2>
                <p className="mt-5 text-sm leading-7">{post.description}</p>
                <div className="mt-auto flex items-center justify-between border-t border-[var(--color-border)] pt-6 text-xs">
                  <span className="text-slate-500">{formatDate(post.date)}</span>
                  <span className="font-semibold text-[var(--color-accent)]">Artikel lesen ↗</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}

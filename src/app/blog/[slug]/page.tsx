import { notFound } from 'next/navigation';
import { ButtonLink } from '@/components/Button';
import { Markdown } from '@/components/Markdown';
import { Section } from '@/components/Section';
import { PageHero } from '@/components/PageHero';
import RelatedContent from '@/components/RelatedContent';
import { getBlogPost, getBlogSlugs } from '@/lib/content';
import { formatDate } from '@/lib/format';
import { siteConfig } from '@/lib/site';
import JsonLd from '@/seo/JsonLd';
import { buildBreadcrumbList, buildMetadata } from '@/seo/metadata';
import { getRouteKeywords, keywordMap, matchServiceForKeywords } from '@/seo/keywordMap';

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) {
    return buildMetadata({ title: 'Blog', path: '/blog' });
  }
  const routeKeywords = getRouteKeywords('/blog/[slug]');
  const mapped = keywordMap.content.blog[post.slug] ?? [];
  const keywords = [...post.tags, ...mapped, ...(routeKeywords?.secondary ?? [])];

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: 'article',
    keywords,
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) {
    notFound();
  }

  const mapped = keywordMap.content.blog[post.slug] ?? [];
  const routeKeywords = getRouteKeywords('/blog/[slug]');
  const keywords = [...post.tags, ...mapped, ...(routeKeywords?.secondary ?? [])];
  const relatedService = matchServiceForKeywords(keywords);

  const breadcrumbItems = [
    { label: 'Start', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  const blogPosting = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  return (
    <>
      <PageHero
        breadcrumbs={breadcrumbItems}
        eyebrow={`Insight · ${formatDate(post.date)}`}
        title={post.title}
        description={post.description}
        signals={[
          { label: 'Lesezeit', value: post.readingTime },
          { label: 'Themen', value: `${post.tags.length} Schwerpunkte` },
        ]}
      >
        <ButtonLink href="/kontakt" variant="light">
          Thema besprechen <span aria-hidden="true">↗</span>
        </ButtonLink>
        <ButtonLink href="/blog" variant="dark">
          Alle Insights
        </ButtonLink>
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr),17rem] lg:items-start">
          <div className="editorial-panel p-6 md:p-10 lg:p-14">
            <Markdown content={post.content} />
          </div>
          <aside className="lg:sticky lg:top-28">
            <p className="eyebrow">Artikelprofil</p>
            <div className="content-rail mt-4">
              <div className="content-rail__item">
                <div>
                  <strong>{formatDate(post.date)}</strong>
                  <p>Veröffentlicht</p>
                </div>
              </div>
              <div className="content-rail__item">
                <div>
                  <strong>{post.readingTime}</strong>
                  <p>Kompakt lesbar</p>
                </div>
              </div>
              <div className="content-rail__item">
                <div>
                  <strong>{post.tags.join(' · ')}</strong>
                  <p>Themenschwerpunkte</p>
                </div>
              </div>
            </div>
          </aside>
        </div>

        {relatedService && (
          <div className="dark-cta mt-12 grid gap-8 p-8 md:grid-cols-[1fr,auto] md:items-end md:p-12">
            <div>
              <p className="eyebrow eyebrow--light">Passende Leistung</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">{relatedService.label}</h2>
              <p className="mt-4 max-w-2xl leading-7">
                Wir übertragen die Erkenntnisse aus dem Artikel auf Ihre Prozesse und liefern
                konkrete nächste Schritte.
              </p>
            </div>
            <ButtonLink href={relatedService.slug} variant="light" className="relative z-10">
              Zur Leistung
            </ButtonLink>
          </div>
        )}

        <RelatedContent
          keywords={keywords}
          exclude={[`/blog/${post.slug}`]}
          title="Weitere Artikel und Cases"
        />
      </Section>

      <JsonLd data={[blogPosting, buildBreadcrumbList(breadcrumbItems)]} />
    </>
  );
}

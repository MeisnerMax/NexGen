import { notFound } from 'next/navigation';
import { ButtonLink } from '@/components/Button';
import { Markdown } from '@/components/Markdown';
import { Section } from '@/components/Section';
import Breadcrumbs from '@/components/Breadcrumbs';
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
    <Section className="pt-10">
      <div className="max-w-3xl">
        <Breadcrumbs items={breadcrumbItems} className="mb-6" />
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          {formatDate(post.date)} · {post.readingTime}
        </div>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">{post.title}</h1>
        <p className="mt-4 text-lg text-slate-700">{post.description}</p>
      </div>
      <div className="mt-10 rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm">
        <Markdown content={post.content} />
      </div>

      {relatedService && (
        <div className="mt-10 rounded-3xl border border-[color:var(--color-accent-soft)] bg-[var(--color-accent-soft)] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
            Passende Leistung
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900">{relatedService.label}</h2>
          <p className="mt-3 text-sm text-slate-700">
            Wir übertragen die Inhalte aus dem Artikel auf Ihre Prozesse und liefern konkrete nächste
            Schritte.
          </p>
          <ButtonLink href={relatedService.slug} className="mt-5">
            Zur Leistung
          </ButtonLink>
        </div>
      )}

      <RelatedContent
        keywords={keywords}
        exclude={[`/blog/${post.slug}`]}
        title="Weitere Artikel und Cases"
      />

      <JsonLd data={[blogPosting, buildBreadcrumbList(breadcrumbItems)]} />
    </Section>
  );
}

import Link from 'next/link';
import { Card } from '@/components/Card';
import { Section, SectionHeader } from '@/components/Section';
import { getAllBlogPosts } from '@/lib/content';
import { formatDate } from '@/lib/format';
import Breadcrumbs from '@/components/Breadcrumbs';
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
    <Section className="pt-10">
      <Breadcrumbs items={[{ label: 'Start', href: '/' }, { label: 'Blog' }]} className="mb-6" />
      <SectionHeader
        eyebrow="Blog"
        title="Blog zu Automatisierung & Digitalisierung"
        description="Kurze, klare Beiträge für Entscheider in KMU – mit Fokus auf Wirkung und Umsetzbarkeit."
        as="h1"
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Card key={post.slug} className="flex h-full flex-col">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              {formatDate(post.date)} · {post.readingTime}
            </div>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">{post.title}</h3>
            <p className="mt-3 text-sm text-slate-700">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 text-sm font-semibold text-[var(--color-accent)]"
            >
              Artikel lesen →
            </Link>
          </Card>
        ))}
      </div>
      <JsonLd data={breadcrumbSchema} />
    </Section>
  );
}

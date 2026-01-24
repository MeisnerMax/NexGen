import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/Card';
import { Section, SectionHeader } from '@/components/Section';
import { getAllBlogPosts } from '@/lib/content';
import { formatDate } from '@/lib/format';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Praxiswissen zu Automatisierung, Software und lokaler Sichtbarkeit für KMU.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <Section className="pt-10">
      <SectionHeader
        eyebrow="Blog"
        title="Wissen, das sofort in die Praxis führt"
        description="Kurze, klare Beiträge für Entscheider in KMU – mit Fokus auf Wirkung und Umsetzbarkeit."
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
    </Section>
  );
}

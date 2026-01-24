import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Markdown } from '@/components/Markdown';
import { Section } from '@/components/Section';
import { getBlogPost, getBlogSlugs } from '@/lib/content';
import { formatDate } from '@/lib/format';
import { siteConfig } from '@/lib/site';

export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) {
    return { title: 'Blog' };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: `${siteConfig.url}/blog/${post.slug}`,
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) {
    notFound();
  }

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
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
          {formatDate(post.date)} · {post.readingTime}
        </div>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">{post.title}</h1>
        <p className="mt-4 text-lg text-slate-700">{post.description}</p>
      </div>
      <div className="mt-10 rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm">
        <Markdown content={post.content} />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPosting) }}
      />
    </Section>
  );
}

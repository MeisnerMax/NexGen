import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { getAllPostSlugs, getPostBySlug, getRelatedPosts } from '../../lib/posts';
import ShareButtons from '../../components/blog/ShareButtons';
import CategoryPill from '../../components/blog/CategoryPill';
import TagPill from '../../components/blog/TagPill';
import ArticleTOC from '../../components/blog/ArticleTOC';
import CTABox from '../../components/blog/CTABox';
import RelatedPosts from '../../components/blog/RelatedPosts';

const FALLBACK_IMAGE = '/images/blog/default-cover.svg';

function formatDate(value) {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

function buildToc(markdown) {
  const lines = markdown.split(/
/);
  const toc = [];
  lines.forEach((line) => {
    const headingMatch = /^(#{2,3})\s+(.*)/.exec(line.trim());
    if (!headingMatch) return;
    const level = headingMatch[1].length;
    const text = headingMatch[2].replace(/[*_`]/g, '').trim();
    const id = slugify(text);
    toc.push({ id, text, level });
  });
  return toc;
}

function MarkdownComponents() {
  const components = {
    h2: ({ node, children, ...props }) => {
      const text = String(children).replace(/,/g, '');
      const id = slugify(text);
      return (
        <h2 id={id} className="mt-12 text-3xl font-heading font-semibold" {...props}>
          {children}
        </h2>
      );
    },
    h3: ({ node, children, ...props }) => {
      const text = String(children).replace(/,/g, '');
      const id = slugify(text);
      return (
        <h3 id={id} className="mt-8 text-2xl font-heading font-semibold" {...props}>
          {children}
        </h3>
      );
    },
    code({ inline, className, children, ...props }) {
      const language = /language-(\w+)/.exec(className || '')?.[1];
      if (inline) {
        return (
          <code className="rounded bg-brand-primary/80 px-1.5 py-0.5 text-sm text-white" {...props}>
            {children}
          </code>
        );
      }
      return (
        <pre className="relative mt-6 overflow-x-auto rounded-xl bg-brand-primary/90 p-4 text-sm text-white" data-language={language}>
          <code className={className} {...props}>
            {children}
          </code>
        </pre>
      );
    },
    a: ({ children, href, ...props }) => (
      <a
        href={href}
        className="text-brand-accent underline decoration-brand-accent/60 underline-offset-4 transition hover:text-brand-accent/80"
        {...props}
      >
        {children}
      </a>
    ),
    img: ({ src, alt, ...props }) => (
      <img src={src} alt={alt ?? ''} loading="lazy" className="my-6 w-full rounded-xl" {...props} />
    ),
  };
  return components;
}

export default function BlogPost({ post, seo, toc, related }) {
  const siteUrl = 'https://www.nexgen-consulting.de';
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;
  const shareUrl = canonicalUrl;
  const cover = post.meta.cover ?? FALLBACK_IMAGE;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.meta.title,
    description: post.meta.description || post.meta.excerpt,
    articleSection: post.meta.category,
    keywords: post.meta.tags,
    datePublished: post.meta.date,
    dateModified: post.meta.updated ?? post.meta.date,
    author: {
      '@type': 'Person',
      name: post.meta.author ?? 'Nexgen-Consulting',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nexgen-Consulting',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.png`,
      },
    },
    image: post.meta.ogImage ? `${siteUrl}${post.meta.ogImage}` : `${siteUrl}/images/logo.png`,
    mainEntityOfPage: canonicalUrl,
    inLanguage: 'de',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Startseite',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${siteUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.meta.title,
        item: canonicalUrl,
      },
    ],
  };

  const faqSchema = Array.isArray(post.meta.faq) && post.meta.faq.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.meta.faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null;

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.meta.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${siteUrl}${post.meta.ogImage ?? '/images/logo.png'}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.meta.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={`${siteUrl}${post.meta.ogImage ?? '/images/logo.png'}`} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        {faqSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /> : null}
      </Head>

      <main className="bg-brand-primary text-white">
        <article className="py-16 sm:py-20 md:py-24">
          <div className="container max-w-screen-lg px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(0,1fr)_320px]">
              <div className="space-y-10">
                <nav aria-label="breadcrumb" className="text-xs font-medium text-white/60" data-reveal>
                  <ol className="flex flex-wrap items-center gap-2">
                    <li>
                      <Link href="/" className="hover:text-white/90">
                        Startseite
                      </Link>
                    </li>
                    <li>/</li>
                    <li>
                      <Link href="/blog" className="hover:text-white/90">
                        Blog
                      </Link>
                    </li>
                    <li>/</li>
                    <li className="text-white/80">{post.meta.title}</li>
                  </ol>
                </nav>

                <header className="space-y-5" data-reveal>
                  <CategoryPill slug={post.meta.categorySlug} label={post.meta.category} href={`/blog/kategorie/${post.meta.categorySlug}`} />
                  <h1 className="text-4xl font-heading font-semibold text-white">{post.meta.title}</h1>
                  {post.meta.subtitle ? (
                    <p className="text-lg text-white/80">{post.meta.subtitle}</p>
                  ) : null}
                  <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
                    <span>{post.meta.author}</span>
                    {post.meta.date ? <span>{formatDate(post.meta.date)}</span> : null}
                    <span>{post.meta.readingTime} Min Lesezeit</span>
                  </div>
                </header>

                {toc.length ? (
                  <div className="lg:hidden">
                    <ArticleTOC items={toc} variant="inline" />
                  </div>
                ) : null}

                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={cover}
                      alt={post.meta.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 70vw"
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
                  <div className="prose prose-sm sm:prose-base prose-invert max-w-none flex-1" data-reveal>
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                      components={MarkdownComponents()}
                    >
                      {post.content}
                    </ReactMarkdown>
                  </div>
                </div>

                {post.meta.tagSlugs?.length ? (
                  <div className="flex flex-wrap items-center gap-3" data-reveal>
                    {post.meta.tagSlugs.map((tag) => (
                      <TagPill key={tag.slug} slug={tag.slug} label={tag.label} />
                    ))}
                  </div>
                ) : null}

                <ShareButtons url={shareUrl} title={post.meta.title} />
                <CTABox />
                <RelatedPosts posts={related} />
              </div>

              <ArticleTOC items={toc} variant="sidebar" />
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getAllPostSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = getPostBySlug(slug);
  const seoDescription = post.meta.description || post.meta.excerpt || 'Insights zu Digitalisierung, Webentwicklung und Automatisierung aus Coburg.';
  const toc = post.meta.toc ? buildToc(post.content) : [];
  const related = getRelatedPosts(slug, 3);

  return {
    props: {
      post,
      toc,
      related,
      seo: {
        title: `${post.meta.title} | Nexgen-Consulting Blog`,
        description: seoDescription,
      },
    },
  };
}

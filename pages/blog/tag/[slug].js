import Head from 'next/head';
import Link from 'next/link';
import BlogIndex from '../../../components/blog/BlogIndex';
import { getPostsByTagSlug } from '../../../lib/posts';

const PAGE_SIZE = 9;

function formatTagLabel(slug, label) {
  if (label) return label;
  return slug.replace(/-/g, ' ').replace(/\w/g, (char) => char.toUpperCase());
}

export default function BlogTagPage({ tag, posts, pagination }) {
  const siteUrl = 'https://www.nexgen-consulting.de';
  const pageUrl = pagination.currentPage > 1
    ? `${siteUrl}/blog/tag/${tag.slug}?page=${pagination.currentPage}`
    : `${siteUrl}/blog/tag/${tag.slug}`;
  const prevUrl = pagination.hasPrevious ? `${siteUrl}/blog/tag/${tag.slug}?page=${pagination.currentPage - 1}` : null;
  const nextUrl = pagination.hasNext ? `${siteUrl}/blog/tag/${tag.slug}?page=${pagination.currentPage + 1}` : null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Blog Tag ${tag.label}`,
    url: pageUrl,
    about: tag.label,
    hasPart: posts.map((post) => ({
      '@type': 'BlogPosting',
      url: `${siteUrl}/blog/${post.slug}`,
      headline: post.meta.title,
      datePublished: post.meta.date,
      author: post.meta.author,
      description: post.meta.excerpt,
      keywords: post.meta.tags,
    })),
  };

  return (
    <>
      <Head>
        <title>{`Blog Tag ${tag.label} | Nexgen-Consulting`}</title>
        <meta
          name="description"
          content={`Beitraege mit dem Tag ${tag.label} fuer Digitalisierung, Webdesign und Automatisierung in Coburg und Oberfranken.`}
        />
        <meta property="og:title" content={`Tag ${tag.label} - Nexgen-Consulting Blog`} />
        <meta
          property="og:description"
          content={`Strategien, Praxiswissen und Beispiele zu ${tag.label} fuer KMU in Coburg und Bayern.`}
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${siteUrl}/images/logo.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Tag ${tag.label} - Nexgen-Consulting`} />
        <meta name="twitter:description" content={`Alles zu ${tag.label} aus Coburg.`} />
        <meta name="twitter:image" content={`${siteUrl}/images/logo.png`} />
        <link rel="canonical" href={pageUrl} />
        {prevUrl ? <link rel="prev" href={prevUrl} /> : null}
        {nextUrl ? <link rel="next" href={nextUrl} /> : null}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </Head>

      <main className="bg-brand-primary text-white">
        <section className="py-16 sm:py-20 md:py-24">
          <div className="container max-w-screen-xl px-6 lg:px-8 space-y-10">
            <header className="space-y-4" data-reveal>
              <nav aria-label="breadcrumb" className="text-xs font-medium text-white/60">
                <ol className="flex items-center gap-2">
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
                  <li className="text-white/80">{tag.label}</li>
                </ol>
              </nav>
              <span className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                Tag · {tag.label}
              </span>
              <h1 className="text-3xl sm:text-4xl font-heading font-semibold">
                Themen rund um {tag.label}
              </h1>
              <p className="text-sm sm:text-base text-white/80">
                Alle Beitraege, die sich mit {tag.label} in Coburg, Bamberg und dem Mittelstand in Bayern beschaeftigen.
              </p>
            </header>

            <BlogIndex posts={posts} pagination={pagination} basePath={`/blog/tag/${tag.slug}`} />
          </div>
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps({ params, query }) {
  const { slug } = params;
  const pageParam = Array.isArray(query.page) ? query.page[0] : query.page;
  const parsedPage = Number.parseInt(pageParam ?? '1', 10);
  const page = Number.isNaN(parsedPage) ? 1 : parsedPage;
  const { items, pagination } = getPostsByTagSlug(slug, page, PAGE_SIZE);

  if (pagination.total === 0) {
    return {
      notFound: true,
    };
  }

  const label = formatTagLabel(slug, items[0]?.meta.tagSlugs?.find((tag) => tag.slug === slug)?.label);

  return {
    props: {
      tag: {
        slug,
        label,
      },
      posts: items,
      pagination,
    },
  };
}




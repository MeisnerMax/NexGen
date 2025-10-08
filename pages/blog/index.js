import Head from 'next/head';
import Link from 'next/link';
import { getPaginatedPosts } from '../../lib/posts';
import BlogIndex from '../../components/blog/BlogIndex';
import NewsletterTeaser from '../../components/blog/NewsletterTeaser';

const PAGE_SIZE = 9;

export default function BlogOverview({ posts, pagination }) {
  const siteUrl = 'https://www.nexgen-consulting.de';
  const pageUrl = pagination.currentPage > 1 ? `${siteUrl}/blog?page=${pagination.currentPage}` : `${siteUrl}/blog`;
  const prevUrl = pagination.hasPrevious ? `${siteUrl}/blog?page=${pagination.currentPage - 1}` : null;
  const nextUrl = pagination.hasNext ? `${siteUrl}/blog?page=${pagination.currentPage + 1}` : null;

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${siteUrl}/blog#blog`,
    name: 'Nexgen Consulting Blog',
    url: pageUrl,
    description: 'Digitale Strategien, Webdesign und Prozessautomatisierung fuer Unternehmen in Coburg und Oberfranken.',
    inLanguage: 'de-DE',
    publisher: {
      '@type': 'Organization',
      name: 'Nexgen-Consulting',
      url: siteUrl,
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      '@id': `${siteUrl}/blog/${post.slug}#posting`,
      headline: post.meta.title,
      datePublished: post.meta.date,
      author: post.meta.author,
      url: `${siteUrl}/blog/${post.slug}`,
      description: post.meta.excerpt,
      keywords: post.meta.tags,
    })),
  };

  return (
    <>
      <Head>
        <title>Blog - Digitalisierung, Webdesign und Automatisierung in Coburg | Nexgen-Consulting</title>
        <meta
          name="description"
          content="Aktuelle Insights zu Digitalisierung Coburg, Webdesign fuer KMU, Prozessautomatisierung sowie Foerderprogramme und Praxisleitfaeden fuer Unternehmen in Oberfranken."
        />
        <meta property="og:title" content="Nexgen-Consulting Blog" />
        <meta
          property="og:description"
          content="Strategien und Praxiswissen fuer Digitalisierung, Webentwicklung und Automatisierung in Coburg und dem Mittelstand in Bayern."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${siteUrl}/images/logo.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nexgen-Consulting Blog" />
        <meta name="twitter:description" content="Einblicke zu Digitalisierung, Webdesign und Automatisierung in Coburg." />
        <meta name="twitter:image" content={`${siteUrl}/images/logo.png`} />
        <link rel="canonical" href={pageUrl} />
        {prevUrl ? <link rel="prev" href={prevUrl} /> : null}
        {nextUrl ? <link rel="next" href={nextUrl} /> : null}
        <link rel="alternate" type="application/rss+xml" title="Nexgen-Consulting RSS" href={`${siteUrl}/blog/rss.xml`} />
        <link rel="alternate" type="application/feed+json" title="Nexgen-Consulting JSON Feed" href={`${siteUrl}/blog/feed.json`} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      </Head>

      <main className="bg-brand-primary text-white">
        <section className="py-16 sm:py-20 md:py-24">
          <div className="container max-w-screen-xl px-6 lg:px-8 space-y-10">
            <div className="max-w-3xl space-y-4" data-reveal>
              <nav aria-label="breadcrumb" className="text-xs font-medium text-white/60">
                <ol className="flex items-center gap-2">
                  <li>
                    <Link href="/" className="hover:text-white/90">
                      Startseite
                    </Link>
                  </li>
                  <li>/</li>
                  <li className="text-white/80">Blog</li>
                </ol>
              </nav>
              <span className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                Blog Coburg - Digitalisierung - Webdesign
              </span>
              <h1 className="text-3xl sm:text-4xl font-heading font-semibold">
                Fachwissen zu Digitalisierung, Webdesign und Prozessautomatisierung in Coburg
              </h1>
              <p className="text-sm sm:text-base text-white/80">
                Wir teilen Erfahrungen aus Projekten in Coburg, Bamberg und der gesamten Region Oberfranken: von der Website-Erstellung ueber Prozessautomatisierung bis zu Foerderprogrammen fuer KMU in Bayern.
              </p>
            </div>

            <BlogIndex posts={posts} pagination={pagination} basePath="/blog" newsletterSlot={<NewsletterTeaser />} />
          </div>
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const pageParam = Array.isArray(query.page) ? query.page[0] : query.page;
  const parsedPage = Number.parseInt(pageParam ?? '1', 10);
  const page = Number.isNaN(parsedPage) ? 1 : parsedPage;
  const { items, pagination } = getPaginatedPosts(page, PAGE_SIZE);

  if (pagination.total > 0 && items.length === 0) {
    return {
      redirect: {
        destination: `/blog?page=${pagination.totalPages}`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      posts: items,
      pagination,
    },
  };
}

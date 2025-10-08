import Head from 'next/head';
import Link from 'next/link';
import BlogIndex from '../../../components/blog/BlogIndex';
import SidebarWidgets from '../../../components/blog/SidebarWidgets';
import { getCategoryCounts, getTopTags, getLatestPosts } from '../../../lib/posts';
import { getPostsByCategorySlug } from '../../../lib/posts';

const PAGE_SIZE = 9;

function formatLabel(label) {
  if (!label) return 'Digitalisierung';
  return label;
}

export default function BlogCategoryPage({ category, posts, pagination, sidebar }) {
  const siteUrl = 'https://www.nexgen-consulting.de';
  const pageUrl = pagination.currentPage > 1
    ? `${siteUrl}/blog/kategorie/${category.slug}?page=${pagination.currentPage}`
    : `${siteUrl}/blog/kategorie/${category.slug}`;
  const prevUrl = pagination.hasPrevious ? `${siteUrl}/blog/kategorie/${category.slug}?page=${pagination.currentPage - 1}` : null;
  const nextUrl = pagination.hasNext ? `${siteUrl}/blog/kategorie/${category.slug}?page=${pagination.currentPage + 1}` : null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Blog Kategorie ${category.label}`,
    url: pageUrl,
    about: category.label,
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
        <title>{`Blog Kategorie ${category.label} | Nexgen-Consulting`}</title>
        <meta
          name="description"
          content={`Beiträge über ${category.label} aus Coburg: Digitalisierung, Webdesign und Prozessautomatisierung für KMU.`}
        />
        <meta property="og:title" content={`Kategorie ${category.label} - Nexgen-Consulting Blog`} />
        <meta
          property="og:description"
          content={`Insights und Praxiswissen rund um ${category.label} für Unternehmen in Coburg und Oberfranken.`}
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={`${siteUrl}/images/logo.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Kategorie ${category.label} - Nexgen-Consulting`} />
        <meta name="twitter:description" content={`Aktuelle Artikel zu ${category.label} in Coburg.`} />
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
                  <li className="text-white/80">{category.label}</li>
                </ol>
              </nav>
              <span className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                Kategorie - {category.label}
              </span>
              <h1 className="text-3xl sm:text-4xl font-heading font-semibold">
                {category.label} in Coburg und Oberfranken
              </h1>
              <p className="text-sm sm:text-base text-white/80">
                Artikel zu {category.label} für Unternehmen in Coburg, Bamberg und dem Mittelstand in Bayern: Best Practices, Förderprogramme und Umsetzungstipps.
              </p>
            </header>

            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] xl:grid-cols-[minmax(0,1fr)_320px]">
              <div>
                <BlogIndex posts={posts} pagination={pagination} basePath={`/blog/kategorie/${category.slug}`} />
              </div>
              <SidebarWidgets categories={sidebar.categories} tags={sidebar.tags} latest={sidebar.latest} />
            </div>
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
  const { items, pagination } = getPostsByCategorySlug(slug, page, PAGE_SIZE);

  if (pagination.total === 0) {
    return {
      notFound: true,
    };
  }

  const label = formatLabel(items[0]?.meta.category ?? slug);

  return {
    props: {
      category: {
        slug,
        label,
      },
      posts: items,
      pagination,
      sidebar: {
        categories: getCategoryCounts(),
        tags: getTopTags(20),
        latest: getLatestPosts(5),
      },
    },
  };
}

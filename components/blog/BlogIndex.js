import BlogCard from './BlogCard';
import NewsletterTeaser from './NewsletterTeaser';

export default function BlogIndex({ posts = [], pagination, basePath = '/blog', newsletterSlot = <NewsletterTeaser /> }) {
  const cards = [];
  posts.forEach((post, index) => {
    cards.push(<BlogCard key={post.slug} post={post} priority={index === 0} />);
    if (newsletterSlot && index === 5) {
      cards.push(
        <div key="newsletter" className="sm:col-span-2 xl:col-span-3">
          {newsletterSlot}
        </div>
      );
    }
  });

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {cards}
      </div>

      {pagination?.totalPages > 1 ? (
        <nav className="flex items-center justify-center gap-4" aria-label="Blog Pagination">
          <PaginationLink
            href={pagination.hasPrevious ? `${basePath}?page=${pagination.currentPage - 1}` : undefined}
            disabled={!pagination.hasPrevious}
          >
            Zurueck
          </PaginationLink>
          <span className="text-sm text-white/70">
            Seite {pagination.currentPage} von {pagination.totalPages}
          </span>
          <PaginationLink
            href={pagination.hasNext ? `${basePath}?page=${pagination.currentPage + 1}` : undefined}
            disabled={!pagination.hasNext}
          >
            Weiter
          </PaginationLink>
        </nav>
      ) : null}
    </div>
  );
}

function PaginationLink({ href, disabled, children }) {
  const className = disabled
    ? 'inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/30'
    : 'inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary';

  if (!href || disabled) {
    return (
      <span className={className} aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

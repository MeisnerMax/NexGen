import Link from 'next/link';

export default function LatestPosts({ items = [] }) {
  if (!items.length) return null;
  return (
    <section aria-labelledby="blog-latest">
      <h2 id="blog-latest" className="text-base font-semibold text-white">Neueste Beitraege</h2>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map((post) => (
          <li key={post.slug} className="text-white/80">
            <Link
              href={`/blog/${post.slug}`}
              className="transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary rounded"
            >
              {post.meta.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}


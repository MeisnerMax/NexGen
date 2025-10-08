import Link from 'next/link';

export default function TagCloud({ items = [] }) {
  if (!items.length) return null;
  const counts = items.map((t) => t.count);
  const min = Math.min(...counts);
  const max = Math.max(...counts);
  const scale = (count) => {
    if (max === min) return 1;
    const ratio = (count - min) / (max - min);
    return 0.85 + ratio * 0.6; // font-size scale
  };
  return (
    <section aria-labelledby="blog-tags">
      <h2 id="blog-tags" className="text-base font-semibold text-white">Tags</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((tag) => (
          <Link
            key={tag.slug}
            href={`/blog/tag/${tag.slug}`}
            className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-white/80 transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
            style={{ fontSize: `${scale(tag.count)}rem` }}
          >
            {tag.label}
          </Link>
        ))}
      </div>
    </section>
  );
}


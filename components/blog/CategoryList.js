import Link from 'next/link';

export default function CategoryList({ items = [] }) {
  if (!items.length) return null;
  return (
    <section aria-labelledby="blog-categories">
      <h2 id="blog-categories" className="text-base font-semibold text-white">Kategorien</h2>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item.slug} className="flex items-center justify-between text-sm">
            <Link
              href={`/blog/kategorie/${item.slug}`}
              className="text-white/80 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary rounded"
            >
              {item.label}
            </Link>
            <span className="ml-3 rounded bg-white/10 px-2 py-0.5 text-xs text-white/70">{item.count}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}


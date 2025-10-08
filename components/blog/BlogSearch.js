import { useEffect, useMemo, useRef, useState } from 'react';

export default function BlogSearch() {
  const [q, setQ] = useState('');
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const loadFeed = async () => {
    if (loaded) return;
    try {
      const res = await fetch('/blog/feed.json');
      const feed = await res.json();
      setItems(feed.items || []);
      setLoaded(true);
    } catch (e) {
      // ignore
    }
  };

  const results = useMemo(() => {
    if (!q) return [];
    const term = q.toLowerCase();
    return items
      .filter((it) =>
        (it.title && it.title.toLowerCase().includes(term)) ||
        (it.summary && it.summary.toLowerCase().includes(term)) ||
        (Array.isArray(it.tags) && it.tags.some((t) => String(t).toLowerCase().includes(term)))
      )
      .slice(0, 10);
  }, [q, items]);

  function onChange(e) {
    const value = e.target.value;
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setQ(value), 200);
  }

  return (
    <section aria-labelledby="blog-search">
      <h2 id="blog-search" className="text-base font-semibold text-white">Suche</h2>
      <div className="mt-2">
        <input
          type="search"
          placeholder="Begriff eingeben…"
          className="w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm text-white placeholder-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          onFocus={loadFeed}
          onChange={onChange}
          aria-label="Blog durchsuchen"
        />
      </div>
      {q && (
        <ul className="mt-3 space-y-2">
          {results.map((it) => (
            <li key={it.id}>
              <a
                href={it.url}
                className="text-sm text-white/80 underline decoration-white/20 underline-offset-4 transition hover:text-white"
              >
                {it.title}
              </a>
            </li>
          ))}
          {!results.length && (
            <li className="text-sm text-white/60">Keine Treffer</li>
          )}
        </ul>
      )}
    </section>
  );
}


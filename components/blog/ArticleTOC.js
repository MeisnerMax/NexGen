import { useEffect, useState } from 'react';

export default function ArticleTOC({ items = [], title = 'Inhalt' }) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (!items.length) return;
    const headingIds = items.map((item) => item.id).filter(Boolean);
    const elements = headingIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  if (!items.length) return null;

  return (
    <aside className="hidden lg:block lg:w-72 xl:w-80" aria-label="Inhaltsverzeichnis">
      <div className="sticky top-28 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 shadow-xl shadow-black/10">
        <h2 className="text-base font-semibold text-white">{title}</h2>
        <nav className="mt-4 space-y-2 text-xs uppercase tracking-[0.25em]">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`block rounded-md px-3 py-2 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary ${
                activeId === item.id ? 'bg-white/10 text-white' : 'text-white/60 hover:bg-white/10'
              }`}
              style={{ marginLeft: item.level === 3 ? '1.5rem' : 0 }}
            >
              {item.text}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

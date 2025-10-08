import Link from 'next/link';

export default function TagPill({ slug, label }) {
  return (
    <Link
      href={`/blog/tag/${slug}`}
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/70 transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-white/70" />
      {label}
    </Link>
  );
}

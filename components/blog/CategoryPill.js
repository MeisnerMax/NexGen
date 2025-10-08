import Link from 'next/link';
import { getCategoryColor, resolveCategoryStyle } from './constants';

export default function CategoryPill({ slug, label, href, className = '' }) {
  const style = resolveCategoryStyle(slug, label);
  const color = getCategoryColor(slug);
  const Pill = (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/70 ${className}`}
      style={{ boxShadow: `inset 0 0 0 1px ${color}` }}
    >
      <span
        aria-hidden="true"
        className="flex h-2 w-2 rounded-full"
        style={{ backgroundColor: color }}
      />
      {style.label}
    </span>
  );

  if (href) {
    return (
      <Link href={href} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary">
        {Pill}
      </Link>
    );
  }

  return Pill;
}

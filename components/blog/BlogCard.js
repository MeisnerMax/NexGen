import Image from 'next/image';
import Link from 'next/link';
import CategoryPill from './CategoryPill';
import TagPill from './TagPill';
import { getCategoryColor } from './constants';

function formatDate(value) {
  if (!value) return '';
  const d = new Date(String(value).trim().replace(/\s+/g, ' '));
  if (Number.isNaN(d.getTime())) return String(value);
  const day = String(d.getUTCDate()).padStart(2, '0');
  const month = String(d.getUTCMonth() + 1).padStart(2, '0');
  const year = d.getUTCFullYear();
  return `${day}.${month}.${year}`;
}

export default function BlogCard({ post, priority = false }) {
  const { meta } = post;
  const accentColor = getCategoryColor(meta.categorySlug);
  const cover = meta.cover ?? '/images/blog/default-cover.svg';
  const readingTimeLabel = `${meta.readingTime ?? 3} Min`;

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-white/10 bg-white text-brand-primary shadow-xl shadow-black/10 transition duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-2xl"
    >
      <span
        className="absolute inset-x-0 top-0 h-1"
        style={{ backgroundColor: accentColor }}
        aria-hidden="true"
      />
      <Link href={`/blog/${post.slug}`} className="flex flex-1 flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={cover}
            alt={meta.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
            loading={priority ? 'eager' : 'lazy'}
            className="h-full w-full object-cover transition duration-200 motion-safe:group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex flex-1 flex-col gap-4 px-6 py-7">
          <CategoryPill slug={meta.categorySlug} label={meta.category} href={`/blog/kategorie/${meta.categorySlug}`} />
          <h3 className="text-xl font-heading font-semibold text-brand-primary transition group-hover:text-brand-accent">
            {meta.title}
          </h3>
          {meta.excerpt ? (
            <p
              className="text-sm leading-relaxed text-brand-primary/80"
              style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
            >
              {meta.excerpt}
            </p>
          ) : null}
          <div className="mt-auto flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand-primary/60">
            {meta.date ? <span>{formatDate(meta.date)}</span> : null}
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-brand-primary/20" />
            <span>{readingTimeLabel}</span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-brand-primary/20" />
            <span>{meta.author}</span>
          </div>
          {meta.tagSlugs?.length ? (
            <div className="flex flex-wrap gap-2">
              {meta.tagSlugs.slice(0, 3).map((tag) => (
                <TagPill key={tag.slug} slug={tag.slug} label={tag.label} />
              ))}
            </div>
          ) : null}
        </div>
      </Link>
    </article>
  );
}

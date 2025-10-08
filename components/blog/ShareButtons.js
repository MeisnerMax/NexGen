import Link from 'next/link';

const SHARE_NETWORKS = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    buildUrl: (url, title) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  },
  {
    id: 'x',
    label: 'X (Twitter)',
    buildUrl: (url, title) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  },
  {
    id: 'facebook',
    label: 'Facebook',
    buildUrl: (url, title) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title)}`,
  },
  {
    id: 'mail',
    label: 'E-Mail',
    buildUrl: (url, title) => `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`,
  },
];

export default function ShareButtons({ url, title }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {SHARE_NETWORKS.map((network) => (
        <a
          key={network.id}
          href={network.buildUrl(url, title)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/70 transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
        >
          {network.label}
        </a>
      ))}
      <Link
        href={url}
        scroll={false}
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/70 transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
      >
        Permalink
      </Link>
    </div>
  );
}

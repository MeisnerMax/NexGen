import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

const DEFAULT_OG_IMAGE = '/opengraph-image';

export type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  topic?: string;
  service?: string;
  city?: string;
  benefit?: string;
  type?: 'website' | 'article';
  keywords?: string[];
  noIndex?: boolean;
  image?: string;
};

export function absoluteUrl(path = '') {
  if (path.startsWith('http')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}

function buildTitle({ title, topic, service, city }: MetadataInput) {
  if (title) return title;
  const subject = service ?? topic ?? siteConfig.name;
  if (city) return `${subject} in ${city}`;
  if (subject === siteConfig.name) return subject;
  return `${subject} für KMU`;
}

function buildDescription({ description, topic, service, city, benefit }: MetadataInput) {
  if (description) return description;

  const subject = service ?? topic ?? 'Digitalisierung';
  const location = city ? ` in ${city}` : '';
  let base = benefit
    ? `${subject}${location}: ${benefit}`
    : `${subject}${location} für KMU mit klarem Fokus auf messbare Entlastung und stabile Abläufe.`;

  if (base.length < 140) {
    base = `${base} Klarer Scope, schnelle Wirkung und saubere Umsetzung.`;
  }

  if (base.length > 160) {
    const trimmed = base.slice(0, 157).trim();
    base = `${trimmed.replace(/[.,;:]?$/, '')}...`;
  }

  return base;
}

export function buildMetadata(input: MetadataInput): Metadata {
  const title = buildTitle(input);
  const description = buildDescription(input);
  const url = absoluteUrl(input.path ?? '');
  const imageUrl = absoluteUrl(input.image ?? DEFAULT_OG_IMAGE);
  const openGraphType = input.type ?? 'website';
  const brandedTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: brandedTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: 'de_DE',
      type: openGraphType,
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: 'summary_large_image',
      title: brandedTitle,
      description,
      images: [imageUrl],
    },
    keywords: input.keywords,
    robots: input.noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  };
}

export function buildBreadcrumbList(items: { label: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}

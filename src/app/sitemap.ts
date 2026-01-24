import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { getAllBlogPosts, getCaseSlugs } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const staticRoutes = [
    '',
    '/leistungen',
    '/leistungen/prozessautomatisierung',
    '/leistungen/individualsoftware',
    '/leistungen/webdesign-seo',
    '/cases',
    '/blog',
    '/kontakt',
    '/termin',
    '/impressum',
    '/datenschutz',
    '/cookies',
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const blogEntries = getAllBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  const caseEntries = getCaseSlugs().map((slug) => ({
    url: `${baseUrl}/cases/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...blogEntries, ...caseEntries];
}

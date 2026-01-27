import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { getAllBlogPosts, getCaseSlugs, getContentLastModified } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const staticRoutes = [
    '',
    '/leistungen',
    '/leistungen/prozessautomatisierung',
    '/leistungen/individualsoftware',
    '/leistungen/webdesign-seo',
    '/leistungen/microsoft-365-automatisierung',
    '/leistungen/ki-chatbots',
    '/digitalisierung-coburg',
    '/cases',
    '/blog',
    '/kontakt',
    '/leadmagnet',
    '/termin',
    '/danke',
    '/impressum',
    '/datenschutz',
    '/cookies',
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const blogEntries = getAllBlogPosts().map((post) => {
    const lastModified = getContentLastModified('blog', post.slug) ?? post.date;
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(lastModified),
    };
  });

  const caseEntries = getCaseSlugs().map((slug) => {
    const lastModified = getContentLastModified('case', slug) ?? new Date().toISOString();
    return {
      url: `${baseUrl}/cases/${slug}`,
      lastModified: new Date(lastModified),
    };
  });

  return [...staticEntries, ...blogEntries, ...caseEntries];
}

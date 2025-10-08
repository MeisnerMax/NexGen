const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const siteUrl = 'https://www.nexgen-consulting.de';
const postsDirectory = path.join(process.cwd(), 'posts');

function slugify(value) {
  if (!value) return 'aktuell';
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '') || 'aktuell';
}

function getPosts() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, file);
      const { data } = matter.read(fullPath);
      return {
        slug,
        date: data.date ?? null,
        categorySlug: slugify(data.category ?? 'digitalisierung'),
        tags: Array.isArray(data.tags)
          ? data.tags.map((tag) => slugify(tag))
          : data.tags
            ? String(data.tags)
                .split(',')
                .map((tag) => slugify(tag.trim()))
            : [],
      };
    });
}

const posts = getPosts();
const categorySet = new Set(posts.map((post) => post.categorySlug));
const tagSet = new Set();
posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  outDir: 'public',
  additionalPaths: async (config) => {
    const paths = [];

    posts.forEach((post) => {
      paths.push({ loc: `${siteUrl}/blog/${post.slug}`, lastmod: post.date ?? new Date().toISOString() });
    });

    categorySet.forEach((slug) => {
      paths.push({ loc: `${siteUrl}/blog/kategorie/${slug}` });
    });

    tagSet.forEach((slug) => {
      paths.push({ loc: `${siteUrl}/blog/tag/${slug}` });
    });

    paths.push({ loc: `${siteUrl}/blog/rss.xml` });
    paths.push({ loc: `${siteUrl}/blog/feed.json` });

    return paths;
  },
};

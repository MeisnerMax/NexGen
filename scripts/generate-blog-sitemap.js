/* Simple blog sitemap generator */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const siteUrl = 'https://www.nexgen-consulting.de';
const postsDir = path.join(process.cwd(), 'posts');
const outFile = path.join(process.cwd(), 'public', 'sitemap-blog.xml');

function readPosts() {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const full = path.join(postsDir, file);
      const { data } = matter.read(full);
      return { slug, date: data.updated || data.date || new Date().toISOString() };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

function buildXml(urls) {
  const body = urls
    .map(
      (u) =>
        `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>`
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

function main() {
  const posts = readPosts();
  const urls = posts.map((p) => ({ loc: `${siteUrl}/blog/${p.slug}`, lastmod: p.date }));
  const xml = buildXml(urls);
  fs.writeFileSync(outFile, xml, 'utf8');
  // eslint-disable-next-line no-console
  console.log(`Wrote ${urls.length} urls to ${outFile}`);
}

main();


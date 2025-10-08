import { getAllPosts } from '../../lib/posts';

export default function BlogRss() {
  return null;
}

export async function getServerSideProps({ res }) {
  const posts = getAllPosts();
  const siteUrl = 'https://www.nexgen-consulting.de';

  const items = posts
    .map((post) => {
      const url = `${siteUrl}/blog/${post.slug}`;
      return `    <item>
      <title><![CDATA[${post.meta.title}]]></title>
      <link>${url}</link>
      <guid>${url}</guid>
      <description><![CDATA[${post.meta.excerpt}]]></description>
      <pubDate>${post.meta.date ? new Date(post.meta.date).toUTCString() : ''}</pubDate>
    </item>`;
    })
    .join('
');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Nexgen-Consulting Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Digitalisierung, Webdesign und Automatisierung fuer KMU in Coburg.</description>
    <language>de-de</language>
${items}
  </channel>
</rss>`;

  res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  res.write(rss);
  res.end();

  return { props: {} };
}

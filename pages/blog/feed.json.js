import { getAllPosts } from '../../lib/posts';

export default function BlogJsonFeed() {
  return null;
}

export async function getServerSideProps({ res }) {
  const posts = getAllPosts();
  const siteUrl = 'https://www.nexgen-consulting.de';

  const feed = {
    version: 'https://jsonfeed.org/version/1',
    title: 'Nexgen-Consulting Blog',
    home_page_url: `${siteUrl}/blog`,
    feed_url: `${siteUrl}/blog/feed.json`,
    description: 'Digitalisierung, Webdesign und Automatisierung für KMU in Coburg.',
    language: 'de-DE',
    items: posts.map((post) => ({
      id: `${siteUrl}/blog/${post.slug}`,
      url: `${siteUrl}/blog/${post.slug}`,
      title: post.meta.title,
      summary: post.meta.excerpt,
      content_text: post.content,
      date_published: post.meta.date ?? undefined,
      author: {
        name: post.meta.author,
      },
      tags: post.meta.tags,
    })),
  };

  res.setHeader('Content-Type', 'application/feed+json; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  res.write(JSON.stringify(feed));
  res.end();

  return { props: {} };
}


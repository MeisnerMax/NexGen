// pages/blog/[slug].js
import Head from 'next/head';
import { getAllPostSlugs, getPostData } from '../../lib/posts';

export default function BlogPost({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} - Nexgen Consulting Blog</title>
        <meta name="description" content={post.excerpt} />
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "datePublished": post.date,
            "author": { "@type": "Person", "name": post.author },
            "description": post.excerpt
          }) }} 
        />
      </Head>
      <section className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-6">{post.date} – {post.author}</p>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getAllPostSlugs();
  const paths = slugs.map(slug => ({ params: { slug } }));
  return { paths, fallback: 'blocking' };  // 'blocking' ermöglicht neue Posts
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.slug);
  return { props: { post } };
}

import BlogCard from './BlogCard';

export default function RelatedPosts({ posts = [] }) {
  if (!posts.length) return null;
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-heading font-semibold text-white">Weitere Artikel, die passen</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}

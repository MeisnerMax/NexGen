import ArticleTOC from './ArticleTOC';
import CategoryList from './CategoryList';
import TagCloud from './TagCloud';
import LatestPosts from './LatestPosts';
import BlogSearch from './BlogSearch';

export default function SidebarWidgets({ toc = [], categories = [], tags = [], latest = [] }) {
  return (
    <aside className="hidden lg:block lg:w-72 xl:w-80" aria-label="Blog-Navigation und Suche" role="complementary">
      <div className="sticky top-28 space-y-6">
        {toc?.length ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80 shadow-xl shadow-black/10">
            <ArticleTOC items={toc} title="Inhalt" />
          </div>
        ) : null}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80 shadow-xl shadow-black/10">
          <BlogSearch />
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80 shadow-xl shadow-black/10">
          <CategoryList items={categories} />
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80 shadow-xl shadow-black/10">
          <TagCloud items={tags} />
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/80 shadow-xl shadow-black/10">
          <LatestPosts items={latest} />
        </div>
      </div>
    </aside>
  );
}


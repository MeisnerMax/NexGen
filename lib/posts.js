import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

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

function computeReadingTime(content) {
  if (!content) return 1;
  const words = content.split(/\s+/g).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function normaliseTags(raw) {
  if (!raw) return [];
  if (Array.isArray(raw)) {
    return raw.map((tag) => String(tag).trim()).filter(Boolean);
  }
  return String(raw)
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function readPostFile(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const tags = normaliseTags(data.tags);
  const tagSlugs = tags.map((tag) => ({ label: tag, slug: slugify(tag) }));
  const faq = Array.isArray(data.faq) ? data.faq : [];
  const readingTime = data.readingTime ?? computeReadingTime(content);

  return {
    slug,
    meta: {
      slug,
      title: data.title ?? slug,
      subtitle: data.subtitle ?? '',
      description: data.description ?? data.excerpt ?? '',
      excerpt: data.excerpt ?? data.description ?? '',
      author: data.author ?? 'Nexgen-Consulting',
      date: data.date ?? null,
      updated: data.updated ?? null,
      category: data.category ?? 'Digitalisierung',
      categorySlug: slugify(data.category ?? 'Digitalisierung'),
      tags,
      tagSlugs,
      cover: data.cover ?? null,
      ogImage: data.ogImage ?? data.cover ?? null,
      readingTime,
      toc: typeof data.toc === 'boolean' ? data.toc : true,
      faq,
    },
    content,
  };
}

export function getAllPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

export function getAllPosts() {
  return getAllPostSlugs()
    .map((slug) => readPostFile(slug))
    .sort((a, b) => {
      const dateA = a.meta.date ? new Date(a.meta.date).getTime() : 0;
      const dateB = b.meta.date ? new Date(b.meta.date).getTime() : 0;
      return dateB - dateA;
    });
}

export function getPaginatedPosts(page = 1, limit = 6) {
  const allPosts = getAllPosts();
  const total = allPosts.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentPage - 1) * limit;
  const items = allPosts.slice(start, start + limit);

  return {
    items,
    pagination: {
      total,
      totalPages,
      currentPage,
      hasPrevious: currentPage > 1,
      hasNext: currentPage < totalPages,
    },
  };
}

export function getPostBySlug(slug) {
  return readPostFile(slug);
}

export function getPostsByCategorySlug(categorySlug, page = 1, limit = 6) {
  const normalized = slugify(categorySlug);
  const filtered = getAllPosts().filter((post) => post.meta.categorySlug === normalized);
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentPage - 1) * limit;
  const items = filtered.slice(start, start + limit);

  return {
    items,
    pagination: {
      total,
      totalPages,
      currentPage,
      hasPrevious: currentPage > 1,
      hasNext: currentPage < totalPages,
    },
  };
}

export function getPostsByTagSlug(tagSlug, page = 1, limit = 6) {
  const normalized = slugify(tagSlug);
  const filtered = getAllPosts().filter((post) =>
    post.meta.tagSlugs.some((tag) => tag.slug === normalized)
  );
  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / limit));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentPage - 1) * limit;
  const items = filtered.slice(start, start + limit);

  return {
    items,
    pagination: {
      total,
      totalPages,
      currentPage,
      hasPrevious: currentPage > 1,
      hasNext: currentPage < totalPages,
    },
  };
}

export function getAllCategories() {
  return getAllPosts().reduce((acc, post) => {
    if (!acc.some((entry) => entry.slug === post.meta.categorySlug)) {
      acc.push({ slug: post.meta.categorySlug, label: post.meta.category });
    }
    return acc;
  }, []);
}

export function getAllTags() {
  const map = new Map();
  getAllPosts().forEach((post) => {
    post.meta.tagSlugs.forEach((tag) => {
      if (!map.has(tag.slug)) {
        map.set(tag.slug, { slug: tag.slug, label: tag.label });
      }
    });
  });
  return Array.from(map.values());
}

export function getRelatedPosts(slug, count = 3) {
  const posts = getAllPosts();
  const current = posts.find((post) => post.slug === slug);
  if (!current) {
    return posts.slice(0, count);
  }

  const scored = posts
    .filter((post) => post.slug !== slug)
    .map((post) => {
      let score = 0;
      if (post.meta.categorySlug === current.meta.categorySlug) {
        score += 2;
      }
      const sharedTags = post.meta.tagSlugs.filter((tag) =>
        current.meta.tagSlugs.some((currentTag) => currentTag.slug === tag.slug)
      );
      score += sharedTags.length;
      const dateScore = post.meta.date ? new Date(post.meta.date).getTime() : 0;
      return { post, score, dateScore };
    })
    .sort((a, b) => {
      if (b.score === a.score) {
        return b.dateScore - a.dateScore;
      }
      return b.score - a.score;
    });

  return scored.slice(0, count).map((entry) => entry.post);
}

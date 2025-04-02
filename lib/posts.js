// lib/posts.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPosts(limit) {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt || ''
    };
  });
  // Sortiere nach Datum (absteigend)
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return limit ? posts.slice(0, limit) : posts;
}

export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return {
    slug,
    contentHtml,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt || '',
    author: data.author || 'Meisner Team'
  };
}

export function getAllPostSlugs() {
  return fs.readdirSync(postsDirectory).map(fileName => fileName.replace(/\.md$/, ''));
}

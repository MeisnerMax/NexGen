import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getReadingTime } from './format';

const contentRoot = path.join(process.cwd(), 'src', 'content');
const blogDir = path.join(contentRoot, 'blog');
const caseDir = path.join(contentRoot, 'cases');

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
  content: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  summary: string;
  situation: string;
  goal: string;
  approach: string;
  results: string;
  metrics: { label: string; value: string }[];
  stack: string[];
};

function readMarkdownFile(directory: string, slug: string) {
  const extensions = ['.mdx', '.md'];
  for (const ext of extensions) {
    const filePath = path.join(directory, `${slug}${ext}`);
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf-8');
    }
  }
  return null;
}

export function getBlogSlugs() {
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx?$/, ''));
}

export function getAllBlogPosts(): BlogPost[] {
  return getBlogSlugs()
    .map((slug) => getBlogPost(slug))
    .filter((post): post is BlogPost => Boolean(post))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPost(slug: string): BlogPost | null {
  const file = readMarkdownFile(blogDir, slug);
  if (!file) return null;
  const { data, content } = matter(file);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? '',
    date: data.date ?? new Date().toISOString(),
    tags: data.tags ?? [],
    readingTime: getReadingTime(content),
    content,
  };
}

export function getCaseSlugs() {
  if (!fs.existsSync(caseDir)) return [];
  return fs
    .readdirSync(caseDir)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx?$/, ''));
}

export function getAllCases(): CaseStudy[] {
  return getCaseSlugs()
    .map((slug) => getCase(slug))
    .filter((caseStudy): caseStudy is CaseStudy => Boolean(caseStudy));
}

export function getCase(slug: string): CaseStudy | null {
  const file = readMarkdownFile(caseDir, slug);
  if (!file) return null;
  const { data } = matter(file);

  return {
    slug,
    title: data.title ?? slug,
    industry: data.industry ?? 'Branche',
    summary: data.summary ?? '',
    situation: data.situation ?? '',
    goal: data.goal ?? '',
    approach: data.approach ?? '',
    results: data.results ?? '',
    metrics: data.metrics ?? [],
    stack: data.stack ?? [],
  };
}

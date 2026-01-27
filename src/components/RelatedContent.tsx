import Link from 'next/link';
import { Card } from '@/components/Card';
import { getAllBlogPosts, getAllCases } from '@/lib/content';
import { keywordMap } from '@/seo/keywordMap';

export type RelatedContentProps = {
  keywords: string[];
  maxItems?: number;
  title?: string;
  exclude?: string[];
};

type RelatedItem = {
  title: string;
  description: string;
  href: string;
  type: 'Blog' | 'Case Study';
  score: number;
};

function normalize(value: string) {
  return value.toLowerCase();
}

function scoreMatch(target: string[], candidate: string[]) {
  const normalizedTarget = target.map(normalize);
  return candidate.reduce((score, keyword) => {
    const normalizedKeyword = normalize(keyword);
    return normalizedTarget.some((item) => item.includes(normalizedKeyword)) ? score + 1 : score;
  }, 0);
}

export default function RelatedContent({
  keywords,
  maxItems = 4,
  title = 'Passende Inhalte',
  exclude = [],
}: RelatedContentProps) {
  if (!keywords.length) return null;

  const blogMatches = getAllBlogPosts()
    .map((post) => {
      const mapped = keywordMap.content.blog[post.slug] ?? [];
      const candidates = [...post.tags, ...mapped, post.title];
      const score = scoreMatch(keywords, candidates);
      return {
        title: post.title,
        description: post.description,
        href: `/blog/${post.slug}`,
        type: 'Blog' as const,
        score,
      };
    })
    .filter((item) => item.score > 0 && !exclude.includes(item.href))
    .sort((a, b) => b.score - a.score);

  const caseMatches = getAllCases()
    .map((caseStudy) => {
      const mapped = keywordMap.content.cases[caseStudy.slug] ?? [];
      const candidates = [caseStudy.industry, ...caseStudy.stack, ...mapped, caseStudy.title];
      const score = scoreMatch(keywords, candidates);
      return {
        title: caseStudy.title,
        description: caseStudy.summary,
        href: `/cases/${caseStudy.slug}`,
        type: 'Case Study' as const,
        score,
      };
    })
    .filter((item) => item.score > 0 && !exclude.includes(item.href))
    .sort((a, b) => b.score - a.score);

  const selected: RelatedItem[] = [];
  const half = Math.max(1, Math.floor(maxItems / 2));
  selected.push(...blogMatches.slice(0, half));
  selected.push(...caseMatches.slice(0, half));

  const remaining = maxItems - selected.length;
  if (remaining > 0) {
    const combined = [...blogMatches.slice(half), ...caseMatches.slice(half)]
      .sort((a, b) => b.score - a.score)
      .slice(0, remaining);
    selected.push(...combined);
  }

  if (!selected.length) return null;

  return (
    <div className="mt-10">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
        {title}
      </p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {selected.map((item) => (
          <Link key={item.href} href={item.href} className="block h-full">
            <Card className="flex h-full flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                {item.type}
              </p>
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="text-sm text-slate-700">{item.description}</p>
              <span className="mt-auto text-sm font-semibold text-[var(--color-accent)]">
                Mehr lesen →
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

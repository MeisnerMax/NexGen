'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from 'rehype-highlight';
import type { Pluggable } from 'unified';

export function Markdown({ content }: { content: string }) {
  const highlightPlugin = rehypeHighlight as unknown as Pluggable;

  return (
    <article className="prose prose-slate max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, highlightPlugin]}>
        {content}
      </ReactMarkdown>
    </article>
  );
}

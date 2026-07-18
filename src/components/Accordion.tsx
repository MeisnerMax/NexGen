import { cn } from '@/lib/utils';

export type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({ items }: { items: AccordionItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details
          key={item.question}
          className={cn(
            'group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-6 py-5 shadow-[var(--shadow-soft)] transition open:border-[rgba(201,86,11,0.28)]',
          )}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-[var(--color-primary)]">
            {item.question}
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-accent)] transition group-open:rotate-45 group-open:border-[var(--color-accent)]">
              +
            </span>
          </summary>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-muted)]">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}

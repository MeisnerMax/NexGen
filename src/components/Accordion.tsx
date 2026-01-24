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
            'group rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 shadow-sm transition',
          )}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
            {item.question}
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

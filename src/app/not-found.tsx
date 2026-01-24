import Link from 'next/link';
import { Section } from '@/components/Section';

export default function NotFound() {
  return (
    <Section className="pt-10">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-semibold text-slate-900">Seite nicht gefunden</h1>
        <p className="mt-4 text-slate-600">
          Die gesuchte Seite existiert nicht oder wurde verschoben.
        </p>
        <Link href="/" className="mt-6 inline-flex text-sm font-semibold text-[var(--color-accent)]">
          Zur Startseite →
        </Link>
      </div>
    </Section>
  );
}

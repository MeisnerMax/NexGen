import Link from 'next/link';
import { Section } from '@/components/Section';
import { PageHero } from '@/components/PageHero';

export default function NotFound() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Start', href: '/' }, { label: '404' }]}
        eyebrow="Fehler 404"
        title="Hier läuft kein Prozess mehr."
        description="Die gesuchte Seite existiert nicht oder wurde verschoben. Über die Startseite finden Sie schnell zurück zu allen relevanten Inhalten."
        signals={[
          { label: 'Status', value: 'Nicht gefunden' },
          { label: 'Lösung', value: 'Neu orientieren' },
        ]}
      />
      <Section>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900">
            Zurück auf einen funktionierenden Weg.
          </h2>
          <p className="mt-4 text-slate-600">
            Die gesuchte Seite existiert nicht oder wurde verschoben.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex text-sm font-semibold text-[var(--color-accent)]"
          >
            Zur Startseite →
          </Link>
        </div>
      </Section>
    </>
  );
}

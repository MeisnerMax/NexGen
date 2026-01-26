import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/Section';
import SchedulingEmbed from '@/components/SchedulingEmbed';

export const metadata: Metadata = {
  title: 'Prozessanalyse buchen',
  description: 'Buchen Sie eine kostenlose Prozessanalyse mit klaren nächsten Schritten.',
};

export default function BookingPage() {
  return (
    <Section className="pt-10">
      <SectionHeader
        eyebrow="Termin"
        title="Kostenlose Prozessanalyse buchen"
        description="Wählen Sie einen passenden Slot. Wir klären Engpässe und legen konkrete nächste Schritte fest."
      />
      <div className="mt-10">
        <SchedulingEmbed />
      </div>
    </Section>
  );
}

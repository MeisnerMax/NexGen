import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/Section';
import SchedulingEmbed from '@/components/SchedulingEmbed';

export const metadata: Metadata = {
  title: 'Termin buchen',
  description: 'Buchen Sie eine kostenlose Prozessanalyse mit NexGen Consulting.',
};

export default function BookingPage() {
  return (
    <Section className="pt-10">
      <SectionHeader
        eyebrow="Termin"
        title="Kostenlose Prozessanalyse buchen"
        description="Wählen Sie einen passenden Slot. Wir klären Ziele, Engpässe und nächste Schritte."
      />
      <div className="mt-10">
        <SchedulingEmbed />
      </div>
    </Section>
  );
}

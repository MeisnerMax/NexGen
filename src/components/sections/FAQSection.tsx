import { Accordion } from '@/components/Accordion';
import { Section, SectionHeader } from '@/components/Section';
import { homeFaqs } from '@/lib/data';

export default function FAQSection() {
  return (
    <Section id="faq" tone="soft" divider>
      <SectionHeader
        eyebrow="FAQ"
        title="Antworten auf die wichtigsten Fragen"
        description="Klar und ohne Fachjargon. Für alles Weitere sprechen wir persönlich."
      />
      <div className="mt-10 max-w-3xl motion-safe:animate-fade-up">
        <Accordion items={homeFaqs} />
      </div>
    </Section>
  );
}

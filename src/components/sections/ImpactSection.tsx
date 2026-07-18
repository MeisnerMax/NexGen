import IndustryExplorer from '@/components/IndustryExplorer';
import { InlineCTA } from '@/components/InlineCTA';
import { Section, SectionHeader } from '@/components/Section';

export default function ImpactSection() {
  return (
    <Section id="branchen" divider>
      <SectionHeader
        eyebrow="Branchenlogik"
        title="Ein Prinzip. Unterschiedliche operative Realität."
        description="Wählen Sie Ihren Bereich und sehen Sie, welcher Prozesspfad typischerweise den größten Hebel bietet."
      />
      <div className="mt-12">
        <IndustryExplorer />
      </div>
      <InlineCTA label="Eigenen Prozess prüfen lassen" />
    </Section>
  );
}

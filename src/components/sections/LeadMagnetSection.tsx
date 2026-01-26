import { Card } from '@/components/Card';
import { Section, SectionHeader } from '@/components/Section';
import LeadMagnetForm from '@/components/LeadMagnetForm';
import { leadMagnet } from '@/lib/data';

export default function LeadMagnetSection() {
  return (
    <Section id="leadmagnet" tone="soft" divider>
      <SectionHeader
        eyebrow="Lead Magnet"
        title={leadMagnet.title}
        description={leadMagnet.description}
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr,1fr]">
        <Card
          interactive
          className="space-y-4 motion-safe:animate-fade-up"
          style={{ animationDelay: '80ms' }}
        >
          <p className="text-sm font-semibold text-slate-900">Was Sie im PDF erhalten</p>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>• Checkliste mit typischen Automatisierungshebeln in KMU</li>
            <li>• Priorisierungsmatrix nach Wirkung, Aufwand und Risiko</li>
            <li>• KPI-Set für messbare Entlastung im Tagesgeschäft</li>
            <li>• Erste Schritte, die Sie intern sofort anstoßen können</li>
          </ul>
          <p className="text-xs text-slate-600">
            Versand per E-Mail. Nur Ihre E-Mail-Adresse, keine Newsletter-Flut.
          </p>
        </Card>
        <Card className="motion-safe:animate-fade-up" style={{ animationDelay: '140ms' }}>
          <LeadMagnetForm />
        </Card>
      </div>
    </Section>
  );
}

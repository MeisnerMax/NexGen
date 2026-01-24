import { Card } from '@/components/Card';
import { InlineCTA } from '@/components/InlineCTA';
import { Section, SectionHeader } from '@/components/Section';
import {
  CheckIcon,
  LayoutIcon,
  LifeBuoyIcon,
  RocketIcon,
  SearchIcon,
  TargetIcon,
  WrenchIcon,
} from '@/components/Icons';
import { methodSteps } from '@/lib/data';

export default function MethodSection() {
  const stepIcons = [
    SearchIcon,
    TargetIcon,
    LayoutIcon,
    WrenchIcon,
    CheckIcon,
    RocketIcon,
    LifeBuoyIcon,
  ];

  return (
    <Section id="methodik" tone="default" divider>
      <SectionHeader
        eyebrow="Methodik"
        title="Der NexGen Fahrplan in 7 klaren Schritten"
        description="Transparent, strukturiert und so umgesetzt, dass Ihr Tagesgeschäft stabil bleibt."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {methodSteps.map((step, index) => {
          const Icon = stepIcons[index % stepIcons.length];
          return (
            <Card
              key={step.title}
              interactive
              className="space-y-3 motion-safe:animate-fade-up"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[var(--color-accent)] shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Schritt {index + 1}
                </p>
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="text-sm text-slate-700">{step.description}</p>
            </Card>
          );
        })}
      </div>
      <InlineCTA />
    </Section>
  );
}

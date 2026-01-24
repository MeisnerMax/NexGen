import Link from 'next/link';
import { Card } from '@/components/Card';
import { InlineCTA } from '@/components/InlineCTA';
import { Section, SectionHeader } from '@/components/Section';
import { BarChartIcon, EyeIcon, GridIcon, LayoutIcon, SparklesIcon } from '@/components/Icons';
import { focusAreas, primaryServices } from '@/lib/services';

const offerings = [
  {
    label: 'Angebot',
    title: primaryServices[0].title,
    summary: primaryServices[0].tagline,
    href: `/leistungen/${primaryServices[0].slug}`,
    icon: BarChartIcon,
  },
  {
    label: 'Angebot',
    title: primaryServices[1].title,
    summary: primaryServices[1].tagline,
    href: `/leistungen/${primaryServices[1].slug}`,
    icon: LayoutIcon,
  },
  {
    label: 'Angebot',
    title: primaryServices[2].title,
    summary: primaryServices[2].tagline,
    href: `/leistungen/${primaryServices[2].slug}`,
    icon: EyeIcon,
  },
  {
    label: 'Schwerpunkt',
    title: focusAreas[0].title,
    summary: 'Microsoft 365 Prozesse klar strukturieren.',
    href: '/leistungen#schwerpunkte',
    icon: GridIcon,
  },
  {
    label: 'Schwerpunkt',
    title: focusAreas[1].title,
    summary: 'KI-Use-Cases, Chatbots und Schulung im Team.',
    href: '/leistungen#schwerpunkte',
    icon: SparklesIcon,
  },
];

export default function OfferingsOverviewSection() {
  return (
    <Section id="loesungen" tone="soft" divider>
      <span id="schwerpunkte" className="sr-only" />
      <SectionHeader
        eyebrow="Angebote & Schwerpunkte"
        title="Auf einen Blick"
        description="Wählen Sie den Bereich, der den größten Hebel für Ihr Unternehmen hat."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {offerings.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link key={item.title} href={item.href} className="block h-full">
              <Card
                interactive
                className="flex h-full flex-col gap-4 motion-safe:animate-fade-up"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent)] shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-accent)]">
                      {item.label}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-slate-900">{item.title}</h3>
                  </div>
                </div>
                <p className="mt-auto text-sm text-slate-700">{item.summary}</p>
              </Card>
            </Link>
          );
        })}
      </div>
      <InlineCTA />
    </Section>
  );
}

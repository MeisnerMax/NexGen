import type { Metadata } from 'next';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';

export const metadata: Metadata = {
  title: 'Cookies',
};

export default function CookiesPage() {
  return (
    <Section className="pt-10">
      <Card className="space-y-4">
        <h1 className="text-3xl font-semibold text-slate-900">Cookie-Hinweise</h1>
        <p className="text-sm text-slate-600">
          Wir setzen technisch notwendige Cookies, um die Website korrekt bereitzustellen.
          Analyse-Cookies werden erst nach Ihrer Einwilligung aktiviert.
        </p>
        <ul className="text-sm text-slate-600">
          <li>• Notwendig: Speicherung Ihrer Cookie-Auswahl</li>
          <li>• Optional: Analytics, nur nach Einwilligung</li>
        </ul>
      </Card>
    </Section>
  );
}

import { notFound } from 'next/navigation';
import ServiceDetailView from '@/components/ServiceDetailView';
import { getServiceBySlug } from '@/lib/services';
import { buildMetadata } from '@/seo/metadata';
import { getRouteKeywords } from '@/seo/keywordMap';

const slug = 'microsoft-365-automatisierung';
const service = getServiceBySlug(slug);
const routeKeywords = getRouteKeywords(`/leistungen/${slug}`);

export const metadata = buildMetadata({
  path: `/leistungen/${slug}`,
  service: 'Microsoft 365 Automatisierung für KMU',
  city: 'Coburg',
  benefit:
    'Teams, SharePoint und Power Automate in klare Workflows bringen, damit Übergaben, Freigaben und Datenflüsse stabil laufen.',
  keywords: routeKeywords?.secondary,
});

export default function Microsoft365AutomationPage() {
  if (!service) {
    notFound();
  }

  return <ServiceDetailView service={service} />;
}

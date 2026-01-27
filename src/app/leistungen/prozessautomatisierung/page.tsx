import { notFound } from 'next/navigation';
import ServiceDetailView from '@/components/ServiceDetailView';
import { getServiceBySlug } from '@/lib/services';
import { buildMetadata } from '@/seo/metadata';
import { getRouteKeywords } from '@/seo/keywordMap';

const slug = 'prozessautomatisierung';
const service = getServiceBySlug(slug);
const routeKeywords = getRouteKeywords(`/leistungen/${slug}`);

export const metadata = buildMetadata({
  path: `/leistungen/${slug}`,
  service: 'Prozessautomatisierung für KMU',
  city: 'Coburg',
  benefit: 'Workflows automatisieren, Übergaben stabilisieren und klare KPIs für Vertrieb, Projekt und Buchhaltung schaffen.',
  keywords: routeKeywords?.secondary,
});

export default function ProzessautomatisierungPage() {
  if (!service) {
    notFound();
  }

  return <ServiceDetailView service={service} />;
}

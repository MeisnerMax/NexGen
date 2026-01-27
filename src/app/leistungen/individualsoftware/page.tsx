import { notFound } from 'next/navigation';
import ServiceDetailView from '@/components/ServiceDetailView';
import { getServiceBySlug } from '@/lib/services';
import { buildMetadata } from '@/seo/metadata';
import { getRouteKeywords } from '@/seo/keywordMap';

const slug = 'individualsoftware';
const service = getServiceBySlug(slug);
const routeKeywords = getRouteKeywords(`/leistungen/${slug}`);

export const metadata = buildMetadata({
  path: `/leistungen/${slug}`,
  service: 'Digitale Tools & Individualsoftware für KMU',
  city: 'Coburg',
  benefit: 'Individuelle Tools bauen, Daten bündeln und Entscheidungen in Teams schneller machen.',
  keywords: routeKeywords?.secondary,
});

export default function IndividualsoftwarePage() {
  if (!service) {
    notFound();
  }

  return <ServiceDetailView service={service} />;
}

import { notFound } from 'next/navigation';
import ServiceDetailView from '@/components/ServiceDetailView';
import { getServiceBySlug } from '@/lib/services';
import { buildMetadata } from '@/seo/metadata';
import { getRouteKeywords } from '@/seo/keywordMap';

const slug = 'ki-chatbots';
const service = getServiceBySlug(slug);
const routeKeywords = getRouteKeywords(`/leistungen/${slug}`);

export const metadata = buildMetadata({
  path: `/leistungen/${slug}`,
  service: 'KI-Chatbots für KMU',
  city: 'Coburg',
  benefit:
    'Wissen sicher verfügbar machen, Support entlasten und klare Antworten mit nachvollziehbaren Quellen liefern.',
  keywords: routeKeywords?.secondary,
});

export default function KiChatbotsPage() {
  if (!service) {
    notFound();
  }

  return <ServiceDetailView service={service} />;
}

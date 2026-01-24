import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetailView from '@/components/ServiceDetailView';
import { primaryServices } from '@/lib/services';

const service = primaryServices.find((item) => item.slug === 'webdesign-seo');

export const metadata: Metadata = {
  title: service?.title ?? 'Website & SEO',
  description: service?.summary,
};

export default function WebdesignSeoPage() {
  if (!service) {
    notFound();
  }

  return <ServiceDetailView service={service} />;
}

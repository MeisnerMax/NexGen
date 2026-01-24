import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetailView from '@/components/ServiceDetailView';
import { primaryServices } from '@/lib/services';

const service = primaryServices.find((item) => item.slug === 'prozessautomatisierung');

export const metadata: Metadata = {
  title: service?.title ?? 'Prozessautomatisierung',
  description: service?.summary,
};

export default function ProzessautomatisierungPage() {
  if (!service) {
    notFound();
  }

  return <ServiceDetailView service={service} />;
}

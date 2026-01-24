import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetailView from '@/components/ServiceDetailView';
import { primaryServices } from '@/lib/services';

const service = primaryServices.find((item) => item.slug === 'individualsoftware');

export const metadata: Metadata = {
  title: service?.title ?? 'Digitale Tools & Individualsoftware',
  description: service?.summary,
};

export default function IndividualsoftwarePage() {
  if (!service) {
    notFound();
  }

  return <ServiceDetailView service={service} />;
}

import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import ImpactSection from '@/components/sections/ImpactSection';
import OfferingsOverviewSection from '@/components/sections/OfferingsOverviewSection';
import MethodSection from '@/components/sections/MethodSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import LeadMagnetSection from '@/components/sections/LeadMagnetSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';
import AboutSection from '@/components/sections/AboutSection';
import JsonLd, { buildFaqSchema } from '@/seo/JsonLd';
import { buildMetadata } from '@/seo/metadata';
import { getRouteKeywords } from '@/seo/keywordMap';
import { siteConfig } from '@/lib/site';
import { homeFaqs } from '@/lib/data';

const routeKeywords = getRouteKeywords('/');

export const metadata = buildMetadata({
  path: '/',
  title: 'Prozessautomatisierung & Digitalisierung für KMU in Coburg',
  benefit:
    'Messbar weniger manuelle Arbeit, klare Übergaben und stabile Abläufe in Vertrieb, Projekt und Buchhaltung.',
  keywords: routeKeywords?.secondary,
});

export default function HomePage() {
  const sameAs = [
    siteConfig.social.linkedin,
    siteConfig.social.xing,
    siteConfig.googleBusinessProfile,
  ].filter(Boolean);

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    email: siteConfig.email,
    sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'sales',
      areaServed: 'DE',
    },
  };

  const localBusiness: Record<string, unknown> | null =
    siteConfig.address?.street && siteConfig.address?.city
      ? {
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          '@id': `${siteConfig.url}#localbusiness`,
          name: siteConfig.name,
          url: siteConfig.url,
          image: `${siteConfig.url}/images/logo.png`,
          telephone: siteConfig.phone,
          email: siteConfig.email,
          ...(siteConfig.googleBusinessProfile ? { hasMap: siteConfig.googleBusinessProfile } : {}),
          address: {
            '@type': 'PostalAddress',
            streetAddress: siteConfig.address.street,
            addressLocality: siteConfig.address.city,
            postalCode: siteConfig.address.zip,
            addressCountry: siteConfig.address.country,
          },
          areaServed: siteConfig.region,
          parentOrganization: {
            '@id': `${siteConfig.url}#organization`,
          },
          sameAs,
        }
      : null;

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: {
      '@id': `${siteConfig.url}#organization`,
    },
  };

  const faqSchema = buildFaqSchema(homeFaqs);

  const jsonLdData: Array<Record<string, unknown>> = [organization, website, faqSchema];
  if (localBusiness) jsonLdData.splice(1, 0, localBusiness);

  return (
    <>
      <JsonLd data={jsonLdData} />
      <HeroSection />
      <ProblemSection />
      <ImpactSection />
      <OfferingsOverviewSection />
      <MethodSection />
      <SocialProofSection />
      <AboutSection />
      <LeadMagnetSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}

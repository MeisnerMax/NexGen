import { siteConfig } from '@/lib/site';

export default function StructuredData() {
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

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteConfig.url}#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/logo.png`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    ...(siteConfig.googleBusinessProfile
      ? { hasMap: siteConfig.googleBusinessProfile }
      : {}),
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
  };

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}

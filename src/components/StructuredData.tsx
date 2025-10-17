'use client';

export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Recherché Inc',
    legalName: 'Recherché Inc',
    url: 'https://recherche.tech/',
    logo: 'https://monadicdna.com/images/logo.png',
    description: 'Privacy-first genomics and DNA analysis platform',
    foundingDate: '2023',
    sameAs: [
      'https://x.com/monadicdna',
      'https://bsky.app/profile/monadicdna.bsky.social',
      'https://www.linkedin.com/company/monadichealth/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@monadicdna.com',
      contactType: 'Customer Support',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Monadic DNA',
    url: 'https://monadicdna.com',
    description: 'Next generation, award-winning, genomics app built with advanced encryption and blind computation technology. Learn from your DNA while your data remains private, protected, and entirely in your hands.',
    publisher: {
      '@type': 'Organization',
      name: 'Recherché Inc',
    },
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Monadic DNA',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Award-winning genomics app built with advanced encryption and blind computation technology for secure DNA analysis.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '1',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  );
}

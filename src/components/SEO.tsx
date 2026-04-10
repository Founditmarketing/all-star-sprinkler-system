import React from 'react';
import { BUSINESS_INFO } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article';
  schema?: any;
}

export default function SEO({ title, description, canonical, type = 'website', schema }: SEOProps) {
  const fullTitle = `${title} | All Star Sprinkler Systems`;
  const url = typeof window !== 'undefined' ? window.location.href : '';

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": BUSINESS_INFO.name,
    "image": "https://allstarsprinklers.com/wp-content/uploads/2024/06/1.png",
    "@id": url,
    "url": url,
    "telephone": BUSINESS_INFO.phone,
    "address": BUSINESS_INFO.locations.map(loc => ({
      "@type": "PostalAddress",
      "streetAddress": loc.address.split(',')[0],
      "addressLocality": loc.address.split(',')[1].trim(),
      "addressRegion": "LA",
      "postalCode": loc.address.split(',')[2].trim().split(' ')[1],
      "addressCountry": "US"
    })),
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 31.3224,
      "longitude": -92.4101
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      BUSINESS_INFO.facebook
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "124"
    }
  };

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical || url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="https://allstarsprinklers.com/wp-content/uploads/2024/06/1.png" />
      
      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </>
  );
}

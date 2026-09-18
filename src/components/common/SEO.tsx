import React, { useEffect } from 'react';
import { BUSINESS_CONFIG } from '../../config/siteConfig';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  pageType?: 'website' | 'article';
  schemaData?: object;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl = window.location.href,
  pageType = 'website',
  schemaData
}) => {
  const fullTitle = title 
    ? `${title} | ${BUSINESS_CONFIG.businessName}` 
    : `${BUSINESS_CONFIG.businessName} - Your Trusted Medical Store for Genuine Medicines`;

  const metaDesc = description || BUSINESS_CONFIG.tagline;

  useEffect(() => {
    document.title = fullTitle;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metaDesc);
    }

    // LocalBusiness / Pharmacy Schema
    const basePharmacySchema = {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "name": BUSINESS_CONFIG.businessName,
      "alternateName": BUSINESS_CONFIG.shortName,
      "description": metaDesc,
      "url": window.location.origin,
      "telephone": BUSINESS_CONFIG.phone,
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2CJ8+5R4, Bzhar Road Rajunir",
        "addressLocality": "Kovilpatti / Rajunir",
        "addressRegion": "Bihar",
        "postalCode": "803116",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": BUSINESS_CONFIG.coordinates.lat,
        "longitude": BUSINESS_CONFIG.coordinates.lng
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Sunday"],
          "opens": "09:00",
          "closes": "20:00"
        }
      ],
      "paymentAccepted": "Cash, Credit Card, UPI, Google Pay, PhonePe",
      "hasMap": BUSINESS_CONFIG.googleMapsUrl
    };

    const finalSchema = schemaData ? [basePharmacySchema, schemaData] : basePharmacySchema;

    let script = document.getElementById('json-ld-schema') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(finalSchema);
  }, [fullTitle, metaDesc, schemaData]);

  return null;
};

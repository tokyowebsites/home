import { Helmet } from "react-helmet-async";

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Tokyo Websites",
    "image": "https://tokyowebsites.com/images/tokyo-websites-logo.png",
    "url": "https://tokyowebsites.com",
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tachikawa",
      "addressRegion": "Tokyo",
      "addressCountry": "JP"
    },
    "priceRange": "¥¥",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": []
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}



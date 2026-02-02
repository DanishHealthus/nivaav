type WebPageSchemaProps = {
  url: string;
  name: string;
  description: string;
  physicianId: string;
};

export default function WebPageSchema({
  url,
  name,
  description,
  physicianId,
}: WebPageSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://nivaancare.com/#website",
    },
    about: {
      "@type": "Physician",
      "@id": physicianId,
    },
    inLanguage: "en-IN",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

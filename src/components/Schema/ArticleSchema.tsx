type ArticleSchemaProps = {
  type: string;
  url: string;
  title: string;
  description: string;
  image: string;
  publishedDate: string;
};

export default function ArticleSchema({
  type,
  url,
  title,
  description,
  image,
  publishedDate,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: title,
    description: description,
    image: image,
    author: {
      "@type": "Organization",
      name: "Nivaan Care",
      url: "https://nivaancare.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "Nivaan Care",
      logo: {
        "@type": "ImageObject",
        url: "https://nivaancare.com/images/logo.svg",
      },
    },
    datePublished: publishedDate,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

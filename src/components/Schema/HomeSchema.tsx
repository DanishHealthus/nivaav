export default function HomeSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Nivaan Care",
    url: "https://nivaancare.com",
    logo: "https://nivaancare.com/images/logo.svg",
    image: "https://nivaancare.com/images/logo.svg",
    description:
      "Nivaan Care is India’s most advanced pain management clinic, focused on non-surgical pain relief through expert doctors, modern technology, and personalized care.",
    sameAs: [
      "https://www.facebook.com/nivaancare",
      "https://www.instagram.com/nivaancare",
      "https://www.linkedin.com/company/nivaancare",
    ],
    medicalSpecialty: "PainManagement",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    publisher: {
      "@type": "Organization",
      name: "Nivaan Care",
      logo: {
        "@type": "ImageObject",
        url: "https://nivaancare.com/images/logo.svg",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

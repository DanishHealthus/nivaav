type PhysicianSchemaProps = {
  slug: string;
  name: string;
  url: string;
  image: string;
  description: string;
  medicalSpecialty?: string;
};

export default function PhysicianSchema({
  slug,
  name,
  url,
  image,
  description,
  medicalSpecialty = "Pain Management",
}: PhysicianSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": url,
    name,
    url,
    image,
    description,
    medicalSpecialty,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

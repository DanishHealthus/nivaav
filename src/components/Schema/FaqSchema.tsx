import he from "he";
import parse from "html-react-parser";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSchemaProps = {
  faqs: FaqItem[];
};

export default function FaqSchema({ faqs }: FaqSchemaProps) {
  if (!faqs || faqs.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: he.decode(
          faq.answer
            .replace(/<[^>]*>?/gm, "") // strip HTML tags
            .trim()
        ),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

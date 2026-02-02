import ArticleSchema from '@/components/Schema/ArticleSchema';
import BreadcrumbSchema from '@/components/Schema/BreadcrumbSchema';
import FaqSchema from '@/components/Schema/FaqSchema';
import { TreatmentHeroSection } from '@/components/TreatmentHeroSection'
import TreatmentSection from '@/components/Treatments/TreatmentSection';
import TreatmentStatsBar from '@/components/TreatmentStatsBar';
import { getSingleTreatment } from '@/lib/api';
import { redirect } from 'next/navigation';

export async function generateMetadata({ params }: any) {
    const resolvedParams = await params
    const slug = resolvedParams.slug
    const hub = resolvedParams.hub
    const data = await getSingleTreatment(slug)
    return {
        title: data?.seo?.title || "Nivaancare - India & Most Advanced Non-Surgical Pain Treatment Clinics",
        description:
            data?.seo?.meta_desc ||
            "At Nivaan, our integrated approach to treating pain is clinically proven to be 9.3X* more effective than any other pain treatment in the country. We have over 24 advanced non-surgical procedures, with up to 100% insurance coverage.",
        alternates: {
            canonical: `https://nivaancare.com/${hub}/treatment/${data.slug}`,
        },
    }
}
const treatmentpage = async ({ params }: any) => {
    const resolvedParams = await params
    const slug = resolvedParams.slug
    const hub = resolvedParams.hub
    const data = await getSingleTreatment(slug)
    const apiHubSlug = data?.acf?.treatment_types?.slug;
    if (!apiHubSlug || apiHubSlug !== hub) {
         redirect(`/404`);
    }
    const { acf } = data
    return (
        <>
        <ArticleSchema
        type={data.title}
        url={`https://nivaancare.com/${data.slug}`}
        title={data.seo.title}
        description={data.seo?.meta_desc}
        image={data.featured_image?.url}
        publishedDate={data.date}
      />
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            item: "https://nivaancare.com",
          },
          {
            name: data.acf.treatment_types.title,
            item: `https://nivaancare.com/${data.acf.treatment_types.slug}`,
          },
          {
            name: "Condition",
            item: `https://nivaancare.com/${data.acf.treatment_types.slug}/treatment`,
          },
          {
            name: data.title,
            item: `https://nivaancare.com/${data.acf.treatment_types.slug}/treatment/${data.slug}`,
          },
        ]}
      />
      {data.acf?.faqs &&
        <FaqSchema faqs={data.acf?.faqs} />
      }
            <TreatmentHeroSection
                breadcrumbTitle={acf?.treatment_types}
                breadcrumbSub={data?.title}
                title={acf?.banner_title}
                description={acf?.banner_description}
                button={acf?.banner_button_name}
                image={data?.featured_image}
            />
            {acf?.banner_numbers &&
            <TreatmentStatsBar stats={acf?.banner_numbers} />}
            <TreatmentSection data={acf} />
        </>
    )
}

export default treatmentpage
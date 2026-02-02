import LocationOptimizationSection from '@/components/Location/LocationOptimizationSection';
import LocationTargetingSection from '@/components/Location/LocationTargetingSection';
import { LocationHeroSection } from '@/components/LocationHeroSection';
import LocationStatsBar from '@/components/LocationStatsBar';
import ArticleSchema from '@/components/Schema/ArticleSchema';
import BreadcrumbSchema from '@/components/Schema/BreadcrumbSchema';
import FaqSchema from '@/components/Schema/FaqSchema';
import { getLocalOptimization, getLocalTargeting } from '@/lib/api';
import { redirect } from 'next/navigation';

export async function generateMetadata({ params }: any) {
  const resolvedParams = await params
  const hub = resolvedParams.hub
  const slug = resolvedParams.slug
  let data: any = null;
  let type: 'targeting' | 'optimization' | null = null;

  const tarRes = await getLocalTargeting(slug)
  if (tarRes && tarRes.acf) {
    data = tarRes;
    type = "targeting";
  }
  if (!data) {
    const optRes = await getLocalOptimization(slug)
    if (optRes && optRes.acf) {
      data = optRes
      type = "optimization"
    }
  }

  if (!data || !type) return redirect(`/404`);
  return {
    title: data?.seo?.title || "Nivaancare - India & Most Advanced Non-Surgical Pain Treatment Clinics",
    description:
      data?.seo?.meta_desc ||
      "At Nivaan, our integrated approach to treating pain is clinically proven to be 9.3X* more effective than any other pain treatment in the country. We have over 24 advanced non-surgical procedures, with up to 100% insurance coverage.",
    alternates: {
      canonical: `https://nivaancare.com/${hub}/${slug}`,
    },
  }
}
const DynamicLocationPage = async ({ params }: any) => {
  const resolvedParams = await params
  const slug = resolvedParams.slug;
  let data: any = null;
  let type: 'targeting' | 'optimization' | null = null;

  const tarRes = await getLocalTargeting(slug)
  if (tarRes && tarRes.acf) {
    data = tarRes;
    type = "targeting";
  }
  if (!data) {
    const optRes = await getLocalOptimization(slug)
    if (optRes && optRes.acf) {
      data = optRes
      type = "optimization"
    }
  }

  if (!data || !type) return redirect(`/404`);
  const acf = data?.acf;

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
            name: data.locations[0].name,
            item: `https://nivaancare.com/${data.locations[0].slug}`,
          },
          {
            name: data.title,
            item: `https://nivaancare.com/${data.locations[0].slug}/${data.slug}`,
          },
        ]}
      />
      {data.acf?.faqs &&
        <FaqSchema faqs={data.acf?.faqs} />
      }
      {type === 'targeting' && (
        <>
          <LocationHeroSection
            breadcrumbTitle={data?.locations?.[0] || ""}
            breadcrumbSub={data?.title}
            title={acf?.banner_title}
            description={acf?.banner_description}
            button={acf?.banner_button_name}
            button1={acf?.banner_button}
            image={data?.featured_image}
          />
          <LocationStatsBar stats={acf?.banner_numbers} />
          <LocationTargetingSection data={acf} breadcrumbTitle={data?.locations?.[0] || ""} />
        </>
      )}

      {type === 'optimization' && (
        <>
          <LocationHeroSection
            breadcrumbTitle={data?.locations?.[0] || ""}
            breadcrumbSub={data?.title}
            title={acf?.banner_title}
            description={acf?.banner_description}
            button={acf?.banner_button_name}
            button1={acf?.banner_button}
            image={data?.featured_image}
          />
          <LocationStatsBar stats={acf?.banner_numbers} />
          <LocationOptimizationSection data={acf} breadcrumbTitle={data?.locations?.[0] || ""} />
        </>
      )}
    </>
  );
};

export default DynamicLocationPage;

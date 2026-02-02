import HubSection from '@/components/Hub/HubSection';
import { HubHeroSection } from '@/components/HubHeroSection';
import HubStatsBar from '@/components/HubStatsBar';
import LocationGrid from '@/components/locationGrid';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import ArticleSchema from '@/components/Schema/ArticleSchema';
import BreadcrumbSchema from '@/components/Schema/BreadcrumbSchema';
import FaqSchema from '@/components/Schema/FaqSchema';
import { getHub, getLocation } from '@/lib/api';
import { redirect } from 'next/navigation';

export async function generateMetadata({ params }: any) {
  const resolvedParams = await params;
  const slug = resolvedParams.hub;
  let data: any = null;
  let type: 'hub' | 'location' | null = null;

  const hubRes = await getHub(slug)
  if (hubRes && hubRes.acf) {
    data = hubRes;
    type = 'hub';
  }
  if (!data) {
    const locRes = await getLocation(slug)
    if (locRes && locRes.name) {
      data = locRes;
      type = 'location';
    }
  }

  if (!data || !type) return redirect(`/404`);
  return {
    title: data?.seo?.title || "Nivaancare - India & Most Advanced Non-Surgical Pain Treatment Clinics",
    description:
      data?.seo?.meta_desc ||
      "At Nivaan, our integrated approach to treating pain is clinically proven to be 9.3X* more effective than any other pain treatment in the country. We have over 24 advanced non-surgical procedures, with up to 100% insurance coverage.",
    alternates: {
      canonical: `https://nivaancare.com/${slug}`,
    },
  }
}
const DynamicPage = async ({ params }: any) => {
  const resolvedParams = await params;
  const slug = resolvedParams.hub;
  let data: any = null;
  let type: 'hub' | 'location' | null = null;

  const hubRes = await getHub(slug)
  if (hubRes && hubRes.acf) {
    data = hubRes;
    type = 'hub';
  }
  if (!data) {
    const locRes = await getLocation(slug)
    if (locRes && locRes.name) {
      data = locRes;
      type = 'location';
    }
  }

  if (!data || !type) return redirect(`/404`);
  const acf = data?.acf;

  return (
    <>
      <ArticleSchema
        type={data.title ? data.title : data.name ? data.name : "Page"}
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
            name: data.title ? data.title : data.name ? data.name : "Item",
            item: `https://nivaancare.com/${data.slug}`,
          },
        ]}
      />
      {data.acf?.faqs &&
        <FaqSchema faqs={data.acf?.faqs} />}
      {type === 'hub' && (
        <>
          <HubHeroSection
            breadcrumbTitle={data?.title}
            title={acf?.banner_title}
            description={acf?.banner_info}
            button={acf?.banner_button}
            image={data?.featured_image}
          />
          <HubStatsBar stats={acf?.banner_list} />
          <HubSection breadcrumbTitle={data?.title} data={acf} />
        </>
      )}
      {type === 'location' && (
        <>
          <PageBreadcrumb title={data.name} />
          <div className='px-3 md:px-6 lg:px-10 xl:px-14 2xl:px-24 pb-20'>
            <h2 className='text-center lg:text-left text-2xl md:text-3xl xl:text-4xl 2xl:text-4xl font-semibold text-[#284599] lg:pl-2 pb-8'>Pain Treatment in <span className='capitalize'>{slug}</span></h2>
            <LocationGrid posts={data.local_targeting} url="" cat={slug} />
          </div>
          <div className='px-3 md:px-6 lg:px-10 xl:px-14 2xl:px-24 pb-20'>
            <h2 className='text-center lg:text-left text-2xl md:text-3xl xl:text-4xl 2xl:text-4xl font-semibold text-[#284599] lg:pl-2 pb-8'>Best Pain Specialists in <span className='capitalize'>{slug}</span></h2>
            <LocationGrid posts={data.local_optimization} url="" cat={slug} />
          </div>
        </>
      )}
    </>
  );
};

export default DynamicPage;

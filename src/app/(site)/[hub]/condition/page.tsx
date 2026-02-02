import LocationGrid from '@/components/locationGrid';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import BreadcrumbSchema from '@/components/Schema/BreadcrumbSchema';
import { getCondition } from '@/lib/api';

export async function generateMetadata({ params }: any) {
  const resolvedParams = await params
  const hub = resolvedParams.hub
  return {
    title: "Non Surgical Pain Conditions | Safe & Effective Pain Relief",
    description: "Explore non surgical pain conditions treated without surgery. Safe, effective pain management options to reduce pain and improve daily life.",
    alternates: {
      canonical: `https://nivaancare.com/${hub}/condition`,
    },
  }
}
const page = async ({ params }: any) => {
  const resolvedParams = await params
  const hub = resolvedParams.hub
  const data = await getCondition(hub);
  function formatSlug(text: string) {
    return text
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }
  return (
    <>
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            item: "https://nivaancare.com",
          },
          {
            name: formatSlug(hub),
            item: `https://nivaancare.com/${hub}`,
          },
          {
            name: "Condition",
            item: `https://nivaancare.com/${hub}/condition`,
          },
        ]}
      />
      <PageBreadcrumb title={"Condition"} />
      <div className='px-3 md:px-6 lg:px-10 xl:px-14 2xl:px-24 pb-16'>
        <LocationGrid posts={data} url="condition" cat={hub} />
      </div>
    </>
  )
}

export default page
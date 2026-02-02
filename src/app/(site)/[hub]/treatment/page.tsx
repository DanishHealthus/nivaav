import LocationGrid from '@/components/locationGrid';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import BreadcrumbSchema from '@/components/Schema/BreadcrumbSchema';
import { getTreatment } from '@/lib/api';

export async function generateMetadata({ params }: any) {
  const resolvedParams = await params
  const hub = resolvedParams.hub
  return {
    title: "Non Surgical Pain Treatment Options | Pain Relief Without Surgery",
    description: "Discover non surgical pain treatments designed to manage chronic pain without surgery. Safe, advanced options for long-term relief.",
    alternates: {
      canonical: `https://nivaancare.com/${hub}/treatment`,
    },
  }
}
const page = async ({ params }: any) => {
  const resolvedParams = await params
  const hub = resolvedParams.hub
  const data = await getTreatment(hub);
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
            name: "Treatment",
            item: `https://nivaancare.com/${hub}/treatment`,
          },
        ]}
      />
      <PageBreadcrumb title={"Treatment"} />
      <div className='px-3 md:px-6 lg:px-10 xl:px-14 2xl:px-24 pb-16'>
        <LocationGrid posts={data} url="treatment" cat={hub} />
      </div>
    </>
  )
}

export default page

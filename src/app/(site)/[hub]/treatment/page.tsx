import LocationGrid from '@/components/locationGrid';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { getTreatment } from '@/lib/api';

export async function generateMetadata({ params }: any) {
  const resolvedParams = await params
  const hub = resolvedParams.hub
  return {
    title: "Nivaancare - India & Most Advanced Non-Surgical Pain Treatment Clinics",
    description: "At Nivaan, our integrated approach to treating pain is clinically proven to be 9.3X* more effective than any other pain treatment in the country. We have over 24 advanced non-surgical procedures, with up to 100% insurance coverage.",
    alternates: {
      canonical: `https://nivaancare.com/${hub}/treatment`,
    },
  }
}
const page = async ({ params }: any) => {
  const resolvedParams = await params
  const hub = resolvedParams.hub
  const data = await getTreatment(hub);
  return (
    <>
      <PageBreadcrumb title={"Treatment"} />
      <div className='px-3 md:px-6 lg:px-10 xl:px-14 2xl:px-24 pb-16'>
        <LocationGrid posts={data} url="treatment" cat={hub} />
      </div>
    </>
  )
}

export default page

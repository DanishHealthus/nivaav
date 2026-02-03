import { DoctorHeroSection } from '@/components/DoctorHeroSection'
import Doctorsdata from '@/components/Doctorsdata';
import { getDoctors, getDoctorsPage } from '@/lib/api';

export async function generateMetadata() {
  const data = await getDoctorsPage()
  return {
    title: data?.seo?.title || "Nivaancare - India & Most Advanced Non-Surgical Pain Treatment Clinics",
    description:
      data?.seo?.meta_desc ||
      "At Nivaan, our integrated approach to treating pain is clinically proven to be 9.3X* more effective than any other pain treatment in the country. We have over 24 advanced non-surgical procedures, with up to 100% insurance coverage.",
    alternates: {
      canonical: `https://nivaancare.com/${data.slug}`,
    },
  }
}

const doctor = async () => {
  const data = await getDoctorsPage()
  const data1 = await getDoctors()
  return (
    <>
      <DoctorHeroSection
        title={data?.acf?.doctors_page_title}
        description={data?.acf?.doctors_details}
        seo={data?.seo}
        image={data?.acf?.video_file?.url}
      />
      <Doctorsdata experts={data1?.data} />
    </>
  )
}

export default doctor
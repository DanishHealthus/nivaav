import ContactSection from '@/components/ContactSection'
import { PageBreadcrumb } from '@/components/PageBreadcrumb'
import { getContact } from '@/lib/api'

export async function generateMetadata() {
  const data = await getContact()
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

const ContactPage = async () => {
  const data = await getContact()
  return (
    <>
      <PageBreadcrumb title="Contact Nivaan" description={data.acf} />
      <ContactSection data={data} />
    </>
  )
}

export default ContactPage

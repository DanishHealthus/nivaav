import DoctorProfile from "@/components/DoctorProfile";
import PhysicianSchema from "@/components/Schema/PhysicianSchema";
import WebPageSchema from "@/components/Schema/WebPageSchema";
import { getSingleDoctor } from "@/lib/api";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }: any) {
  const paramsSlug = await params
  const slug = paramsSlug.slug
  const data = await getSingleDoctor(slug)
  return {
    title: data?.seo?.title || "Nivaancare - India & Most Advanced Non-Surgical Pain Treatment Clinics",
    description:
      data?.seo?.meta_desc ||
      "At Nivaan, our integrated approach to treating pain is clinically proven to be 9.3X* more effective than any other pain treatment in the country. We have over 24 advanced non-surgical procedures, with up to 100% insurance coverage.",
    alternates: {
      canonical: `https://nivaancare.com/doctors/${data.slug}`,
    },
  }
}
export default async function DoctorPage({ params }: any) {
  const paramsSlug = await params
  const slug = paramsSlug.slug
  const data = await getSingleDoctor(slug)
  if (data.error == "Doctor not found") redirect(`/404`);

  const doctorUrl = `https://nivaancare.com/doctors/${data.slug}`;

  return (
    <>
      <PhysicianSchema
        slug={data.slug}
        name={data.title}
        url={doctorUrl}
        image={data.featured_image?.url || ""}
        description={data.seo?.meta_desc || ""}
        medicalSpecialty="Physiotherapy"
      />
      <WebPageSchema
        url={doctorUrl}
        name={data.title}
        description={data.seo?.meta_desc || ""}
        physicianId={doctorUrl}
      />
      <DoctorProfile data={data} />
    </>
  );
}

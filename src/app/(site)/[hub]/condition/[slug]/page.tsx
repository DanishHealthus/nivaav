import ConditionSection from '@/components/Condition/ConditionSection';
import { ConditionHeroSection } from '@/components/ConditionHeroSection';
import ConditionStatsBar from '@/components/ConditionStatsBar';
import { getSingleCondition } from '@/lib/api';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: any) {
    const resolvedParams = await params
    const slug = resolvedParams.slug
    const hub = resolvedParams.hub
    const data = await getSingleCondition(slug)
    return {
        title: data?.seo?.title || "Nivaancare - India & Most Advanced Non-Surgical Pain Treatment Clinics",
        description:
            data?.seo?.meta_desc ||
            "At Nivaan, our integrated approach to treating pain is clinically proven to be 9.3X* more effective than any other pain treatment in the country. We have over 24 advanced non-surgical procedures, with up to 100% insurance coverage.",
        alternates: {
            canonical: `https://nivaancare.com/${hub}/condition/${data.slug}`,
        },
    }
}
const conditionpage = async ({ params }: any) => {
    const resolvedParams = await params
    const slug = resolvedParams.slug
    const hub = resolvedParams.hub
    const data = await getSingleCondition(slug)
    const apiHubSlug = data?.acf?.condition_type?.[0]?.slug;
    if (!apiHubSlug || apiHubSlug !== hub) {
        notFound();
    }
    const { acf } = data
    return (
        <>
            <ConditionHeroSection
                breadcrumbTitle={acf?.condition_type[0]}
                breadcrumbSub={data?.title}
                title={acf?.banner_title}
                description={acf?.banner_description}
                button={acf?.banner_button_name}
                image={data?.featured_image}
            />
            {!acf?.banner_boxs == false &&
                <ConditionStatsBar stats={acf?.banner_boxs} />}
            <ConditionSection data={acf} />
        </>
    )
}

export default conditionpage
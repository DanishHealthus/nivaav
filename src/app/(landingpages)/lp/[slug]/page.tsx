import { LandingHeroSection } from '@/components/LandingHeroSection'
import LandingFooter from '@/components/LandingPages/LandingFooter'
import LandingHeader from '@/components/LandingPages/LandingHeader'
import NivaanSteps from '@/components/LandingPages/NivaanSteps'
import { getLandingPage } from '@/lib/api'
import "@/app/style/site.css"
import LandingStatsBar from '@/components/LandingPages/LandingStatsBar'
import LandingReviews from '@/components/LandingPages/LandingReviews'
import ExpertsSection from '@/components/ExpertsSection'
import ClinicsAcrossState from '@/components/LandingPages/ClinicsAcrossState'
import ConditionsCovered from '@/components/LandingPages/ConditionsCovered'
import CtaHelpSection from '@/components/LandingPages/CtaHelpSection'
import ChronicPainTable from '@/components/LandingPages/ChronicPainTable'
import LandingFloatingButtonSite from '@/components/LandingPages/LandingFloatingButtonSite'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import OsteoarthritisStages from '@/components/LandingPages/OsteoarthritisStages'

const landingpages = async ({ params }: any) => {
    const paramsData = await params
    const slug = paramsData.slug
    const res = await getLandingPage(slug)
    return (
        <>
            <LandingHeader menu={res.acf.head_menus} location={res.acf.location_name} appointment={res.acf.head_button_name} />
            <LandingHeroSection
                title={res.acf?.banner_title}
                description={res.acf?.banner_designation}
                button={res.acf?.banner_button_name}
                clinic={res?.acf?.locations_lists}
                list={res.acf?.banner_lists}
            />
            <ExpertsSection title={res.acf?.experts_title} description={res.acf?.experts_info} button={res.acf?.experts_button_name} doctordata={res.acf?.select_experts} />
            <LandingReviews title={res.acf.patient_title} data={res.acf.patients_stories} />
            <LandingStatsBar stats={res?.acf?.treats_lists} />
            {res.acf.injury_stage &&
                <OsteoarthritisStages data={res.acf} />
            }
            {res.acf.chronic_table &&
                <ChronicPainTable
                    chronic_table={res.acf.chronic_table}
                    chronic_button_name={res.acf.chronic_button_name}
                    chronic_title={res.acf.chronic_title}
                />}
            <ConditionsCovered
                conditions_title={res.acf.conditions_title}
                conditions_button_name={res.acf.conditions_button_name}
                condition_boxs_list={res.acf.condition_boxs_list}
            />
            <ClinicsAcrossState data={res.acf} />
            <CtaHelpSection
                cta_title={res.acf.cta_title}
                cta_description={res.acf.cta_description}
                cta_button_name={res.acf.cta_button_name}
                cta_after_button_text={res.acf.cta_after_button_text}
                clinic={res?.acf?.locations_lists}
            />
            <ScrollToTopButton />
            <LandingFloatingButtonSite/>
            <LandingFooter />
        </>
    )
}

export default landingpages
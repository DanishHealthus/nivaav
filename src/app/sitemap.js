import { getBlogs, getBlogCategories, getDoctors, getLocation, getLocalTargeting, getLocalOptimization, getHub , getConditionsite , getTreatmentsite } from "@/lib/api"
/** @type {import('next').MetadataRoute.Sitemap} */
export default async function sitemap() {
    const siteUrl = 'https://nivaancare.com';
    const lastMod = new Date().toISOString();

    const staticUrls = [
        // Main Pages
        { url: `${siteUrl}`, priority: 1.0 },
        { url: `${siteUrl}/about-us`, priority: 0.8 },
        { url: `${siteUrl}/doctors`, priority: 0.8 },
        { url: `${siteUrl}/contact`, priority: 0.8 },
        { url: `${siteUrl}/blog`, priority: 0.8 },
        { url: `${siteUrl}/privacy-policy`, priority: 0.8 },
        { url: `${siteUrl}/terms-and-conditions`, priority: 0.8 },
        { url: `${siteUrl}/v1/thanks`, priority: 0.8 },
        // { url: `${siteUrl}/next/back-pain-treatment`, priority: 0.7 },
        // { url: `${siteUrl}/next/acl-injury`, priority: 0.7 },
        // { url: `${siteUrl}/next/chronic-pain-arthroplasty`, priority: 0.7 },
        // { url: `${siteUrl}/next/endoscopic-discectomy`, priority: 0.7 },
        // { url: `${siteUrl}/next/hip-pain`, priority: 0.7 },
        // { url: `${siteUrl}/next/knee-pain-treatment`, priority: 0.7 },
        // { url: `${siteUrl}/next/Kyphoplasty-new`, priority: 0.7 },
        // { url: `${siteUrl}/next/migraine`, priority: 0.7 },
        // { url: `${siteUrl}/next/neck-pain`, priority: 0.7 },
        // { url: `${siteUrl}/next/nerve-block-new`, priority: 0.7 },
        // { url: `${siteUrl}/next/osteoarthritis-treatment`, priority: 0.7 },
        // { url: `${siteUrl}/next/pain-medication`, priority: 0.7 },
        // { url: `${siteUrl}/next/radio-frequency-ablation-new`, priority: 0.7 },
        // { url: `${siteUrl}/next/request-appointment`, priority: 0.8 },
        // { url: `${siteUrl}/next/request-appointment-hi-meta`, priority: 0.8 },
        // { url: `${siteUrl}/next/request-appointment-meta`, priority: 0.8 },
        // { url: `${siteUrl}/next/sciatica-pain-new`, priority: 0.7 },
        // { url: `${siteUrl}/next/shoulder-pain`, priority: 0.7 },
        // { url: `${siteUrl}/v1/back-pain-new`, priority: 0.7 },
    ];

    let categoriesBlogUrls = [];
    const categoriesBlogData = await getBlogCategories();
    if (categoriesBlogData?.length) {
        categoriesBlogUrls = categoriesBlogData.map((item) => ({
            url: `${siteUrl}/blog/${item.slug}`,
            lastModified: lastMod,
            priority: 0.8,
        }));
    }

    let blogUrls = [];
    const blogData = await getBlogs();
    if (blogData?.posts?.length) {
        blogUrls = blogData.posts.map((item) => ({
            url: `${siteUrl}/blog/${item.categories[0].slug}/${item.slug}`,
            lastModified: lastMod,
            priority: 0.8,
        }));
    }
    let doctorsUrls = [];
    const doctorsData = await getDoctors();
    if (doctorsData?.data?.length) {
        doctorsUrls = doctorsData.data.map((item) => ({
            url: `${siteUrl}/doctors/${item.slug}`,
            lastModified: lastMod,
            priority: 0.8,
        }));
    }
    let locationUrls = [];
    const locationData = await getLocation("");
    if (locationData?.length) {
        locationUrls = locationData.map((item) => ({
            url: `${siteUrl}/${item.slug}`,
            lastModified: lastMod,
            priority: 0.8,
        }));
    }
    let localTargetingUrls = [];
    const localTargetingData = await getLocalTargeting("");
    if (localTargetingData?.length) {
        localTargetingUrls = localTargetingData.map((item) => ({
            url: `${siteUrl}/${item.locations[0].slug}/${item.slug}`,
            lastModified: lastMod,
            priority: 0.8,
        }));
    }
    let localOptimizationUrls = [];
    const localOptimizationData = await getLocalOptimization("");
    if (localOptimizationData?.length) {
        localOptimizationUrls = localOptimizationData.map((item) => ({
            url: `${siteUrl}/${item.locations[0].slug}/${item.slug}`,
            lastModified: lastMod,
            priority: 0.8,
        }));
    }
    let hubUrls = [];
    let hubConditionUrls = [];
    let hubTreatmentUrls = [];
    const hubData = await getHub("");
    if (hubData?.length) {
        hubUrls = hubData?.map((item) => ({
            url: `${siteUrl}/${item.slug}`,
            lastModified: lastMod,
            priority: 0.8,
        }));
        hubConditionUrls = hubData?.map((item) => ({
            url: `${siteUrl}/${item.slug}/condition`,
            lastModified: lastMod,
            priority: 0.8,
        }));
        hubTreatmentUrls = hubData?.map((item) => ({
            url: `${siteUrl}/${item.slug}/treatment`,
            lastModified: lastMod,
            priority: 0.8,
        }));
    }
    let conditionUrls = [];
    const conditionData = await getConditionsite();
    if (conditionData?.length) {
        conditionUrls = conditionData.map((item) => ({
            url: `${siteUrl}/${item.condition_type[0].slug}/condition/${item.slug}`,
            lastModified: lastMod,
            priority: 0.8,
        }));
    }
    let treatmentUrls = [];
    const treatmentData = await getTreatmentsite();
    if (treatmentData?.length) {
        treatmentUrls = treatmentData.map((item) => ({
            url: `${siteUrl}/${item.treatment_types[0].slug}/treatment/${item.slug}`,
            lastModified: lastMod,
            priority: 0.8,
        }));
    }
// getTreatmentsite
    return [...staticUrls, ...categoriesBlogUrls, ...blogUrls, ...doctorsUrls, ...locationUrls, ...localTargetingUrls, ...localOptimizationUrls, ...hubUrls, ...hubConditionUrls, ...hubTreatmentUrls, ...conditionUrls, ...treatmentUrls];
}
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

</urlset>

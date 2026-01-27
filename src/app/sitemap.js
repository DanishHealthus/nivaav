import {getBlogs,getBlogCategories} from "@/lib/api"
/** @type {import('next').MetadataRoute.Sitemap} */
export default async function sitemap() {
  const siteUrl = 'https://nivaancare.com';
  const lastMod = new Date().toISOString();

  const staticUrls = [
  // Main Pages
  { url: `${siteUrl}/`, priority: 1.0 },
  { url: `${siteUrl}/about-us`, priority: 0.8 },
  { url: `${siteUrl}/doctors`, priority: 0.8 },
  { url: `${siteUrl}/contact`, priority: 0.8 },   
  { url: `${siteUrl}/blog`, priority: 0.8 },
  { url: `${siteUrl}/privacy-policy`, priority: 0.8 },    
  { url: `${siteUrl}/terms-and-conditions`, priority: 0.8 },    
  { url: `${siteUrl}/v1/thanks`, priority: 0.8 },
  { url: `${siteUrl}/next/back-pain-treatment`, priority: 0.7 },
  { url: `${siteUrl}/next/acl-injury`, priority: 0.7 },
  { url: `${siteUrl}/next/chronic-pain-arthroplasty`, priority: 0.7 },
  { url: `${siteUrl}/next/endoscopic-discectomy`, priority: 0.7 },
  { url: `${siteUrl}/next/hip-pain`, priority: 0.7 },
  { url: `${siteUrl}/next/knee-pain-treatment`, priority: 0.7 },
  { url: `${siteUrl}/next/Kyphoplasty-new`, priority: 0.7 },
  { url: `${siteUrl}/next/migraine`, priority: 0.7 },
  { url: `${siteUrl}/next/neck-pain`, priority: 0.7 },
  { url: `${siteUrl}/next/nerve-block-new`, priority: 0.7 },
  { url: `${siteUrl}/next/osteoarthritis-treatment`, priority: 0.7 },
  { url: `${siteUrl}/next/pain-medication`, priority: 0.7 },
  { url: `${siteUrl}/next/radio-frequency-ablation-new`, priority: 0.7 },
  { url: `${siteUrl}/next/request-appointment`, priority: 0.8 },
  { url: `${siteUrl}/next/request-appointment-hi-meta`, priority: 0.8 },
  { url: `${siteUrl}/next/request-appointment-meta`, priority: 0.8 },
  { url: `${siteUrl}/next/sciatica-pain-new`, priority: 0.7 },
  { url: `${siteUrl}/next/shoulder-pain`, priority: 0.7 },
  { url: `${siteUrl}/v1/back-pain-new`, priority: 0.7 },
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

  return [...staticUrls, ...categoriesBlogUrls, ...blogUrls];
}
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  
</urlset>

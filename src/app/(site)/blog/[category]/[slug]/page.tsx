import Image from "next/image";
import parse from "html-react-parser";
import he from "he";
import { redirect } from "next/navigation";
import TableOfContents from "@/components/TableOfContents";
import CallbackForm from "@/components/CallbackForm";
import Breadcrumb from "@/components/Breadcrumb";
import RequestCallbackModal from "@/components/RequestCallbackModal";
import { getSingleBlog } from "@/lib/api";
import ArticleSchema from "@/components/Schema/ArticleSchema";
import BreadcrumbSchema from "@/components/Schema/BreadcrumbSchema";
import FaqSection from "@/components/Treatments/FaqSection";
import FaqSchema from "@/components/Schema/FaqSchema";

export async function generateMetadata({ params }: any) {
  const paramsSlug = await params
  const slug = paramsSlug.slug
  const category = paramsSlug.category
  const data = await getSingleBlog(slug)
  return {
    title: data?.yoast?.title || "Nivaancare - India & Most Advanced Non-Surgical Pain Treatment Clinics",
    description:
      data?.yoast?.meta_desc ||
      "At Nivaan, our integrated approach to treating pain is clinically proven to be 9.3X* more effective than any other pain treatment in the country. We have over 24 advanced non-surgical procedures, with up to 100% insurance coverage.",
    alternates: {
      canonical: `https://nivaancare.com/blog/${category}/${data.slug}`,
    },
  }
}
export default async function BlogDetailPage({ params }: {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}) {
  const paramsSlug = await params
  const slug = paramsSlug.slug
  const category = paramsSlug.category
  const blog = await getSingleBlog(slug);
  if (blog.error == "Blog not found") redirect(`/404`);
  if (category !== blog.categories[0].slug) {
    redirect(`/404`)
  }
  const decodedContent = parse(he.decode(blog.content));

  return (
    <>
      <ArticleSchema
        type="BlogPosting"
        url={`https://nivaancare.com/blog/${blog.categories?.[0]?.slug}/${blog.slug}`}
        title={blog.yoast.title}
        description={
          blog.yoast?.meta_desc ||
          "Learn how physiotherapy treats chronic pain with advanced techniques and expert care."
        }
        image={blog.featured_image?.url}
        publishedDate={blog.date}
      />
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            item: "https://nivaancare.com/",
          },
          {
            name: "Blog",
            item: "https://nivaancare.com/blog/",
          },
          {
            name: blog.categories?.[0]?.name,
            item: `https://nivaancare.com/blog/${blog.categories?.[0]?.slug}/`,
          },
          {
            name: blog.title,
            item: `https://nivaancare.com/blog/${blog.categories?.[0]?.slug}/${blog.slug}`,
          },
        ]}
      />
      <FaqSchema faqs={blog.acf_faqs?.blog_faqs} />
      <section className="bg-[#F5FBFF]">
        <div className="px-4 lg:px-24 py-10 lg:grid lg:grid-cols-[1fr_360px] gap-10">
          <div className="pt-20">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Blogs", href: "/blog" },
                { label: blog.title },
              ]}
            />
            <div>
              <div className="relative overflow-hidden rounded-3xl">
                <Image
                  src={blog.featured_image?.url}
                  alt={blog.featured_image?.alt || blog.title}
                  width={1200}
                  height={600}
                  className="w-full object-cover"
                  priority
                  unoptimized
                />
              </div>
              <div className="mt-6 pb-6 lg:pb-4 lg:px-10 text-center lg:flex items-center justify-between gap-10 rounded-full bg-[#0F4C92] p-4">
                <div className="text-white font-semibold mb-4 lg:mb-0">
                  Find Relief for Your Pain Area
                </div>
                <div className="flex justify-center">
                  <RequestCallbackModal buttonText='BOOK APPOINTMENT' id="book-appointment" />
                </div>
              </div>
            </div>
            <div className="mt-10 flex items-center gap-3 text-sm text-gray-500">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-blue-800">
                {blog.categories?.[0]?.name}
              </span>
              <span>
                {new Date(blog.date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <h1 className="mt-4 text-3xl font-bold text-[#0F4C92] lg:text-4xl">
              {blog.title}
            </h1>
            <article id="article-content" className="blog-content-section single-doctor-style prose prose-lg mt-6 max-w-none prose-h2:text-[#0F4C92] prose-h3:text-[#0F4C92] text-black">
              {decodedContent}
            </article>
            {blog?.acf_faqs?.blog_faqs.length !== 0 &&
              <FaqSection faqs={blog?.acf_faqs?.blog_faqs} />
            }
          </div>
          <aside className="space-y-8">
            <div className="sticky top-28">
              <div className="rounded-3xl lg:rounded-[40px] bg-white p-3 shadow-sm">
                <h3 className="mb-2 px-3 pb-3 pt-1 border-b border-gray-200 text-lg font-semibold text-[#0F4C92]">
                  Table of Contents
                </h3>
                <TableOfContents content={blog.content} />
              </div>
              <CallbackForm />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

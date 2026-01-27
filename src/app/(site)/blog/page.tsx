import { getBlogs, getBlogCategories } from "@/lib/api";
import BlogCategories from "@/components/BlogCategories";
import BlogGrid from "@/components/BlogGrid";
import BlogEmptyState from "@/components/BlogEmptyState";

export async function generateMetadata() {
  return {
    title: "Nivaancare - India & Most Advanced Non-Surgical Pain Treatment Clinics",
    description: "At Nivaan, our integrated approach to treating pain is clinically proven to be 9.3X* more effective than any other pain treatment in the country. We have over 24 advanced non-surgical procedures, with up to 100% insurance coverage.",
    alternates: {
      canonical: `https://nivaancare.com/blog`,
    },
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();
  const categories = await getBlogCategories();
  const hasBlogs = blogs?.posts && blogs.posts.length > 0;

  return (
    <section className="px-4 lg:px-8 xl:px-12 2xl:px-20 pt-36 pb-20">
      <h1 className="text-3xl font-bold text-blue-900 mb-6">
        Blog Categories
      </h1>
      <BlogCategories categories={categories} />
      <div className="mt-10">
        {hasBlogs ? (
          <BlogGrid posts={blogs.posts} />
        ) : (
          <BlogEmptyState
            title="No Blogs in This Category"
            description="We are working on adding blogs for this category. Meanwhile, explore other categories."
          />
        )}
      </div>
    </section>
  );
}

import BlogListing from "@/components/blog/BlogListing"
import Sidebar from "@/components/blog/Sidebar"
import FeaturedPost from "@/components/blog/FeaturedPost"
import NewsletterSignup from "@/components/blog/NewsletterSignup"
import MobileNavigation from "@/components/blog/MobileNavigation"

export default function BlogPage() {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-col lg:flex-row gap-8 mt-12">
        <div className="lg:w-1/3">
          <div className="hidden lg:block sticky top-12">
            <Sidebar />
          </div>
          <div className="lg:hidden">
            <MobileNavigation />
          </div>
        </div>
        <div className="lg:w-2/3">
          <BlogListing />
        </div>
      </div>
      <NewsletterSignup className="mt-12" />
    </div>
  )
}


import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, MessageCircleIcon, UserIcon } from "lucide-react"
import CommentSection from "@/components/blog/CommentSection"
import RelatedPosts from "@/components/blog/RelatedPosts"
import AuthorBio from "@/components/blog/AuthorBio"
import ShareButtons from "@/components/blog/ShareButtons"
import TableOfContents from "@/components/blog/TableOfContents"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = {
    id: Number.parseInt(params.id),
    title: "How to Choose the Right Property in Dombivli",
    content: `
      <p>Choosing the right property in Dombivli can be a daunting task, but with the right information and guidance, you can make an informed decision that suits your needs and budget.</p>
      
      <h2>Location, Location, Location</h2>
      <p>The first and foremost factor to consider is the location of the property. Dombivli offers various neighborhoods, each with its own charm and amenities. Consider factors such as:</p>
      <ul>
        <li>Proximity to public transportation</li>
        <li>Nearby schools and educational institutions</li>
        <li>Access to healthcare facilities</li>
        <li>Shopping centers and markets</li>
        <li>Parks and recreational areas</li>
      </ul>

      <h2>Budget Considerations</h2>
      <p>Determine your budget early in the process. This will help narrow down your options and prevent disappointment later. Remember to factor in additional costs such as:</p>
      <ul>
        <li>Registration and stamp duty</li>
        <li>Property taxes</li>
        <li>Maintenance fees</li>
        <li>Potential renovation costs</li>
      </ul>

      <h2>Property Type and Size</h2>
      <p>Dombivli offers a variety of property types, from apartments to independent houses. Consider your current and future needs when choosing the type and size of the property. Think about:</p>
      <ul>
        <li>Family size and potential growth</li>
        <li>Work-from-home requirements</li>
        <li>Storage needs</li>
        <li>Parking space</li>
      </ul>

      <h2>Builder Reputation</h2>
      <p>Research the reputation of the builder or developer. Look for:</p>
      <ul>
        <li>Track record of completed projects</li>
        <li>Quality of construction</li>
        <li>Timely delivery of projects</li>
        <li>After-sales service and support</li>
      </ul>

      <h2>Legal Verification</h2>
      <p>Ensure that all legal aspects of the property are in order. This includes:</p>
      <ul>
        <li>Clear property title</li>
        <li>Necessary approvals from local authorities</li>
        <li>No pending legal disputes</li>
      </ul>

      <h2>Future Development Plans</h2>
      <p>Look into the future development plans for the area. This can impact your property's value and your quality of life. Consider:</p>
      <ul>
        <li>Upcoming infrastructure projects</li>
        <li>Planned commercial developments</li>
        <li>Zoning changes</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Choosing the right property in Dombivli requires careful consideration of various factors. By taking the time to research and evaluate your options, you can find a property that not only meets your current needs but also proves to be a valuable investment for the future.</p>

      <p>Remember, the team at S.B.S REALTY is always here to help you navigate the property buying process. Don't hesitate to reach out for expert advice and guidance.</p>
    `,
    image: "/placeholder.svg?height=300&width=600",
    category: "Buying Tips",
    author: "John Doe",
    date: "2025-03-15",
    commentsCount: 5,
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <Badge variant="secondary" className="mb-4">
          {post.category}
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-6">
          <div className="flex items-center mr-4 mb-2">
            <UserIcon className="w-4 h-4 mr-1" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center mr-4 mb-2">
            <CalendarIcon className="w-4 h-4 mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center mb-2">
            <MessageCircleIcon className="w-4 h-4 mr-1" />
            <span>{post.commentsCount} comments</span>
          </div>
        </div>
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={600}
          height={300}
          className="w-full h-auto mb-8 rounded-lg"
        />
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-3/4">
            <div className="prose max-w-none mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />
            <ShareButtons />
            <AuthorBio />
            <CommentSection />
          </div>
          <div className="md:w-1/4">
            <div className="sticky top-4">
              <TableOfContents content={post.content} />
              <RelatedPosts />
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}


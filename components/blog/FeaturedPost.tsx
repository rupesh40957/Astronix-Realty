import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarIcon, MessageCircleIcon, UserIcon } from "lucide-react"

export default function FeaturedPost() {
  const featuredPost = {
    id: 1,
    title: "Top 10 Reasons to Invest in Dombivli Real Estate",
    excerpt:
      "Discover why Dombivli is becoming a hotspot for property investment in 2025. From infrastructure developments to rising property values, we break down the top reasons to consider this booming suburb.",
    image: "/placeholder.svg?height=300&width=600",
    category: "Investment Tips",
    author: "Jane Smith",
    date: "2025-03-20",
    commentsCount: 15,
  }

  return (
    <div className="bg-primary text-primary-foreground rounded-lg overflow-hidden shadow-lg">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <Image
            src={featuredPost.image || "/placeholder.svg"}
            alt={featuredPost.title}
            width={600}
            height={300}
            className="w-full h-48 md:h-full object-cover"
          />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <Badge variant="secondary" className="mb-2">
              {featuredPost.category}
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
            <p className="mb-4 text-sm md:text-base">{featuredPost.excerpt}</p>
          </div>
          <div>
            <div className="flex flex-wrap items-center text-sm mb-4">
              <div className="flex items-center mr-4 mb-2 md:mb-0">
                <UserIcon className="w-4 h-4 mr-1" />
                <span>{featuredPost.author}</span>
              </div>
              <div className="flex items-center mr-4 mb-2 md:mb-0">
                <CalendarIcon className="w-4 h-4 mr-1" />
                <span>{featuredPost.date}</span>
              </div>
              <div className="flex items-center">
                <MessageCircleIcon className="w-4 h-4 mr-1" />
                <span>{featuredPost.commentsCount} comments</span>
              </div>
            </div>
            <Button asChild variant="secondary" className="w-full md:w-auto">
              <Link href={`/blog/${featuredPost.id}`}>Read More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


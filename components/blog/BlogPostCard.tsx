import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarIcon, MessageCircleIcon, UserIcon } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  category: string
  author: string
  date: string
  commentsCount: number
}

interface BlogPostCardProps {
  post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <Image
            src={post.image || "/placeholder.svg?height=200&width=300"}
            alt={post.title}
            width={300}
            height={200}
            className="w-full h-48 md:h-full object-cover"
          />
        </div>
        <div className="md:w-2/3 p-6 flex flex-col justify-between">
          <CardContent className="p-0">
            <Badge variant="secondary" className="mb-2">
              {post.category}
            </Badge>
            <h2 className="text-xl md:text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-muted-foreground mb-4 text-sm md:text-base">{post.excerpt}</p>
            <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-4">
              <div className="flex items-center mr-4 mb-2 md:mb-0">
                <UserIcon className="w-4 h-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center mr-4 mb-2 md:mb-0">
                <CalendarIcon className="w-4 h-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <MessageCircleIcon className="w-4 h-4 mr-1" />
                <span>{post.commentsCount} comments</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-0">
            <Button asChild variant="outline" className="w-full md:w-auto">
              <Link href={`/blogs/${post.id}`}>Read More</Link>
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  )
}


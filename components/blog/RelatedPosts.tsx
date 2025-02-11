import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const relatedPosts = [
  { id: 2, title: "Top 5 Neighborhoods in Dombivli for Families" },
  { id: 3, title: "Understanding Property Taxes in Dombivli" },
  { id: 4, title: "The Future of Real Estate in Dombivli: Trends to Watch" },
]

export default function RelatedPosts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Related Posts</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {relatedPosts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`} className="text-sm hover:underline text-blue-600">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}


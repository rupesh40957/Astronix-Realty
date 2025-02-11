import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Sidebar() {
  const categories = ["Buying Tips", "Real Estate Trends", "Interior Design", "Legal Tips"]
  const recentPosts = [
    { id: 1, title: "Top 10 Tips for Buying Property in Dombivli" },
    { id: 2, title: "Understanding the Financials of Buying a Property" },
    { id: 3, title: "Why You Should Invest in Dombivli's Real Estate Market" },
  ]
  const tags = ["Property", "Investment", "Home Decor", "Legal", "Market Trends", "First-Time Buyers", "Renovation"]

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex">
            <Input placeholder="Search blog posts..." className="rounded-r-none" />
            <Button className="rounded-l-none">Search</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <Link
                  href={`/blogs/category/${category.toLowerCase().replace(" ", "-")}`}
                  className="text-blue-600 hover:underline"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {recentPosts.map((post) => (
              <li key={post.id}>
                <Link href={`/blogs/${post.id}`} className="text-blue-600 hover:underline">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tags</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link key={tag} href={`/blog/tag/${tag.toLowerCase().replace(" ", "-")}`}>
                <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors">
                  {tag}
                </span>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}


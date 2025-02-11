"use client"

import { useState } from "react"
import BlogPostCard from "./BlogPostCard"
import Pagination from "./Pagination"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const samplePosts = [
  {
    id: 1,
    title: "How to Choose the Right Property in Dombivli",
    excerpt:
      "Discover the key factors to consider when selecting your ideal property in Dombivli. From location to amenities, we cover it all.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Buying Tips",
    author: "John Doe",
    date: "2025-03-15",
    commentsCount: 5,
  },
  {
    id: 2,
    title: "Understanding Legal Aspects of Buying Property",
    excerpt:
      "Navigate the complex legal landscape of property buying with our comprehensive guide. Learn about documentation, verification, and more.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Legal Advice",
    author: "Jane Smith",
    date: "2025-03-10",
    commentsCount: 3,
  },
  {
    id: 2,
    title: "Understanding Legal Aspects of Buying Property",
    excerpt:
      "Navigate the complex legal landscape of property buying with our comprehensive guide. Learn about documentation, verification, and more.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Legal Advice",
    author: "Jane Smith",
    date: "2025-03-10",
    commentsCount: 3,
  },
  {
    id: 2,
    title: "Understanding Legal Aspects of Buying Property",
    excerpt:
      "Navigate the complex legal landscape of property buying with our comprehensive guide. Learn about documentation, verification, and more.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Legal Advice",
    author: "Jane Smith",
    date: "2025-03-10",
    commentsCount: 3,
  },
  {
    id: 2,
    title: "Understanding Legal Aspects of Buying Property",
    excerpt:
      "Navigate the complex legal landscape of property buying with our comprehensive guide. Learn about documentation, verification, and more.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Legal Advice",
    author: "Jane Smith",
    date: "2025-03-10",
    commentsCount: 3,
  },
  {
    id: 2,
    title: "Understanding Legal Aspects of Buying Property",
    excerpt:
      "Navigate the complex legal landscape of property buying with our comprehensive guide. Learn about documentation, verification, and more.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Legal Advice",
    author: "Jane Smith",
    date: "2025-03-10",
    commentsCount: 3,
  },
  {
    id: 2,
    title: "Understanding Legal Aspects of Buying Property",
    excerpt:
      "Navigate the complex legal landscape of property buying with our comprehensive guide. Learn about documentation, verification, and more.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Legal Advice",
    author: "Jane Smith",
    date: "2025-03-10",
    commentsCount: 3,
  },
  {
    id: 2,
    title: "Understanding Legal Aspects of Buying Property",
    excerpt:
      "Navigate the complex legal landscape of property buying with our comprehensive guide. Learn about documentation, verification, and more.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Legal Advice",
    author: "Jane Smith",
    date: "2025-03-10",
    commentsCount: 3,
  },
  {
    id: 2,
    title: "Understanding Legal Aspects of Buying Property",
    excerpt:
      "Navigate the complex legal landscape of property buying with our comprehensive guide. Learn about documentation, verification, and more.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Legal Advice",
    author: "Jane Smith",
    date: "2025-03-10",
    commentsCount: 3,
  },
  {
    id: 2,
    title: "Understanding Legal Aspects of Buying Property",
    excerpt:
      "Navigate the complex legal landscape of property buying with our comprehensive guide. Learn about documentation, verification, and more.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Legal Advice",
    author: "Jane Smith",
    date: "2025-03-10",
    commentsCount: 3,
  },
  {
    id: 2,
    title: "Understanding Legal Aspects of Buying Property",
    excerpt:
      "Navigate the complex legal landscape of property buying with our comprehensive guide. Learn about documentation, verification, and more.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Legal Advice",
    author: "Jane Smith",
    date: "2025-03-10",
    commentsCount: 3,
  },

  // Add more sample posts here
]

export default function BlogListing() {
  const [sortBy, setSortBy] = useState("date")
  const [filterCategory, setFilterCategory] = useState("all")

  const sortedAndFilteredPosts = samplePosts
    .filter((post) => filterCategory === "all" || post.category === filterCategory)
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      } else if (sortBy === "comments") {
        return b.commentsCount - a.commentsCount
      }
      return 0
    })

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <Select onValueChange={setFilterCategory} defaultValue="all">
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem  value="all">All Categories</SelectItem>
            <SelectItem value="Buying Tips">Buying Tips</SelectItem>
            <SelectItem value="Legal Advice">Legal Advice</SelectItem>
            {/* Add more categories as needed */}
          </SelectContent>
        </Select>
        <Select onValueChange={setSortBy} defaultValue="date">
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Date</SelectItem>
            <SelectItem value="comments">Comments</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-8">
        {sortedAndFilteredPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
      <Pagination className="mt-8" />
    </div>
  )
}


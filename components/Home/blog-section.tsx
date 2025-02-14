"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Top 5 Things to Check Before Buying an Under-Construction Property",
    image: "/blog-1.jpg",
    excerpt: "Ensure your investment is secure by following these essential checks...",
  },
  {
    id: 2,
    title: "How to Choose the Right Interior Design for Your Home",
    image: "/blog-2.jpg",
    excerpt: "Transform your living space with these expert interior design tips...",
  },
  {
    id: 3,
    title: "The Benefits of Investing in Commercial Real Estate",
    image: "/blog-3.jpg",
    excerpt: "Discover why commercial properties can be a lucrative investment option...",
  },
]

export default function BlogSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Latest from Our Blog
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline flex items-center">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8"
        >
          <Link
            href="/blog"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300 inline-flex items-center"
          >
            Read Our Blog <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


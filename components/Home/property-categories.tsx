"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Building, Construction, Star } from "lucide-react"
import { motion } from "framer-motion"

const categories = [
  { name: "Residential Properties", icon: Home, href: "/properties/residential" },
  { name: "Commercial Properties", icon: Building, href: "/properties/commercial" },
  { name: "Under-Construction Properties", icon: Construction, href: "/properties/under-construction" },
  { name: "Luxury Homes", icon: Star, href: "/properties/luxury" },
]

export function PropertyCategories() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Property Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="bg-primary text-white rounded-full p-6 mb-4">
                <category.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <Button asChild>
                <Link href={category.href}>Explore {category.name}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


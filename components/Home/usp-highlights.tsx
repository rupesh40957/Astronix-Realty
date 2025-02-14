"use client"

import { Home, Shield, Paintbrush, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const highlights = [
  {
    icon: Home,
    title: "Affordable Under-Construction Homes",
    description: "Up to 15% off market prices. Browse homes at unbeatable prices, available for immediate booking!",
  },
  {
    icon: Shield,
    title: "100% Legally Verified Properties",
    description: "Trust in the legality and transparency of every property we offer.",
  },
  {
    icon: Paintbrush,
    title: "Exclusive Interior Design Discounts",
    description: "Get up to 100% off on interior design services with property purchase.",
  },
  {
    icon: TrendingUp,
    title: "High ROI Investment Opportunities",
    description: "Discover properties with excellent potential for appreciation and rental income.",
  },
]

export default function USPHighlights() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <highlight.icon className="w-16 h-16 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


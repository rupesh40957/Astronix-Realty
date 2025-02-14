"use client"

import { Tag } from "lucide-react"
import { motion } from "framer-motion"

const offers = [
  {
    title: "5% Additional Discount",
    description: "Get an additional 5% discount on properties listed in the Kalyan area this month.",
  },
  {
    title: "Free Interior Design Consultation",
    description: "Book a property now and get a free consultation with our expert interior designers.",
  },
  {
    title: "No EMI for 6 Months",
    description: "Buy a ready-to-move property and enjoy no EMI payments for the first 6 months.",
  },
  {
    title: "Exclusive Partner Discounts",
    description: "Get special discounts on home appliances and furniture from our partner brands.",
  },
]

export default function SpecialOffers() {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Special Offers
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white text-primary p-6 rounded-lg shadow-md"
            >
              <Tag className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
              <p>{offer.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


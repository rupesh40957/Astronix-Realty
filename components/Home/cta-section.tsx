"use client"

import { Phone } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function CTASection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 rounded-lg shadow-md"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Looking for the perfect property?</h2>
          <p className="text-xl text-center mb-8">Get in touch today!</p>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.form
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4"
            >
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Input type="tel" placeholder="Phone Number" />
              <Input type="text" placeholder="Interested Property Area" />
              <Textarea placeholder="Your message" />
              <Button type="submit" className="w-full">
                Get More Info
              </Button>
            </motion.form>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col justify-center items-center"
            >
              <Phone className="w-16 h-16 text-blue-600 mb-4" />
              <p className="text-2xl font-bold mb-2">Call Us Now</p>
              <p className="text-xl mb-4">+91 1234567890</p>
              <Button className="bg-green-500 hover:bg-green-600">Book a Free Consultation</Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


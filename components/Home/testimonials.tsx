"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Priya S.",
    role: "Satisfied Homeowner",
    image: "/avatar-1.jpg",
    content:
      "SBS REALTY made my property search incredibly easy. Their team was professional, knowledgeable, and always available to answer my questions. I couldn't be happier with my new home!",
  },
  {
    name: "Rahul M.",
    role: "First-time Buyer",
    image: "/avatar-2.jpg",
    content:
      "As a first-time homebuyer, I was nervous about the process. SBS REALTY guided me through every step, making it smooth and stress-free. Their expertise and patience were invaluable.",
  },
  {
    name: "Anjali P.",
    role: "Property Investor",
    image: "/avatar-3.jpg",
    content:
      "I've worked with many real estate companies, but SBS REALTY stands out. Their market insights and investment advice have helped me build a strong property portfolio. Highly recommended!",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          What Our Clients Say
        </motion.h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="mx-4">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full mb-4"
                      />
                      <p className="text-gray-600 mb-4">{testimonial.content}</p>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                      <div className="flex items-center mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}


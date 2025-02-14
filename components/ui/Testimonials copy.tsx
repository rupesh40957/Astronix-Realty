import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    image: "/placeholder.svg",
    role: "Homeowner",
    quote:
      "SBS Realty made my dream of owning a home in Mumbai a reality. Their team was incredibly supportive throughout the entire process.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Mehta",
    image: "/placeholder.svg",
    role: "Property Investor",
    quote:
      "I've worked with many real estate companies, but SBS Realty stands out for their professionalism and market insights. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Anita Desai",
    image: "/placeholder.svg",
    role: "First-time Buyer",
    quote:
      "As a first-time buyer, I was nervous about the process. SBS Realty guided me every step of the way, making it smooth and stress-free.",
    rating: 4,
  },
]

export function Testimonials() {
  return (
    <section className="bg-theme-2 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-theme-5 mb-8 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-theme-5">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-theme-1">{testimonial.name}</h3>
                    <p className="text-theme-3 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-theme-1 mb-4">"{testimonial.quote}"</p>
                <div className="flex">
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


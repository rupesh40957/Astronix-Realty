import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      text: "S.B.S REALTY helped me find my first home, and I couldn't be happier. The property was legally verified, and the interior design discount was a fantastic bonus!",
      name: "Sarah Johnson",
      location: "Dombivli",
      image: "/sarah-johnson.jpg",
    },
    {
      text: "The team at S.B.S REALTY made my property search incredibly easy. Their customer-centric approach and attention to detail are commendable.",
      name: "Rahul Sharma",
      location: "Kalyan",
      image: "/rahul-sharma.jpg",
    },
    // Add more testimonials here
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mb-4"
                />
                <p className="mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


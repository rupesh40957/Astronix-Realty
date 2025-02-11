import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Percent, Home, Users } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <CheckCircle className="w-16 h-16 text-primary" />,
      title: "100% Legally Verified Properties",
      description:
        "We ensure that every property listed on our platform has clear, legal ownership, providing you with peace of mind and ensuring transparent transactions.",
    },
    {
      icon: <Percent className="w-16 h-16 text-primary" />,
      title: "Exclusive Interior Design Discounts",
      description:
        "When you buy a property from us, you will get exclusive discounts on interior design services, making your dream home a reality at a fraction of the cost.",
    },
    {
      icon: <Home className="w-16 h-16 text-primary" />,
      title: "Affordable Under-Construction Properties",
      description:
        "We offer under-construction properties at discounted prices, allowing you to invest early and benefit from lower market rates.",
    },
    {
      icon: <Users className="w-16 h-16 text-primary" />,
      title: "Customer-Centric Approach",
      description:
        "Your satisfaction is our priority. We guide you every step of the way, whether it's choosing the right property or offering financial assistance through easy EMI options.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                {reason.icon}
                <h3 className="text-2xl font-semibold mt-4 mb-2">{reason.title}</h3>
                <p className="text-lg">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


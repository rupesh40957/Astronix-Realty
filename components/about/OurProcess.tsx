import { Card, CardContent } from "@/components/ui/card"
import { Search, FileCheck, Key, Smile } from "lucide-react"

export default function OurProcess() {
  const steps = [
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "Property Search",
      description: "Browse our wide selection of legally verified properties.",
    },
    {
      icon: <FileCheck className="w-12 h-12 text-primary" />,
      title: "Documentation",
      description: "We handle all the paperwork to ensure a smooth process.",
    },
    {
      icon: <Key className="w-12 h-12 text-primary" />,
      title: "Ownership Transfer",
      description: "Secure and transparent transfer of property ownership.",
    },
    {
      icon: <Smile className="w-12 h-12 text-primary" />,
      title: "Move In",
      description: "Start your new life in your dream home!",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                {step.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{step.title}</h3>
                <p>{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


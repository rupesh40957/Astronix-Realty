import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const featuredProjects = [
  {
    id: 1,
    name: "Skyline Residences",
    location: "Powai, Mumbai",
    image: "/placeholder.svg",
    price: "Starting from ₹2.5 Cr",
    features: ["3 & 4 BHK", "Sea View", "Smart Homes"],
  },
  {
    id: 2,
    name: "Green Valley Villas",
    location: "Lonavala, Maharashtra",
    image: "/placeholder.svg",
    price: "Starting from ₹1.8 Cr",
    features: ["4 BHK Villas", "Private Pool", "Mountain View"],
  },
  {
    id: 3,
    name: "Urban Heights",
    location: "Andheri, Mumbai",
    image: "/placeholder.svg",
    price: "Starting from ₹1.2 Cr",
    features: ["2 & 3 BHK", "Rooftop Garden", "Fitness Center"],
  },
]

export function FeaturedProjects() {
  return (
    <section className="bg-theme-5 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-theme-1 mb-8">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-theme-3 mb-2">{project.location}</p>
                <p className="text-theme-1 font-bold mb-4">{project.price}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, index) => (
                    <Badge key={index} variant="secondary">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <Button className="w-full bg-button text-white hover:bg-button/90">View Project</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


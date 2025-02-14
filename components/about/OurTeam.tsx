import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function OurTeam() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Co-Founder & Real Estate Expert",
      bio: "John ensures that every property we list is legally sound and meets our high standards.",
      image: "/john-doe.jpg",
    },
    {
      name: "Jane Smith",
      role: "Head of Legal",
      bio: "Jane oversees all legal aspects of our property transactions, ensuring complete transparency and compliance.",
      image: "/jane-smith.jpg",
    },
    {
      name: "Mike Johnson",
      role: "Customer Relations Manager",
      bio: "Mike is dedicated to providing exceptional customer service and support throughout your property journey.",
      image: "/mike-johnson.jpg",
    },
    // Add more team members here
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Meet the Team Behind S.B.S REALTY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


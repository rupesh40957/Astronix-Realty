"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function SimilarProperties() {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const properties = [
    {
      id: 1,
      title: "2BHK Apartment in Kalyan East",
      price: "45,00,000",
      location: "Kalyan East",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "3BHK Apartment in Dombivli",
      price: "55,00,000",
      location: "Dombivli West",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "4BHK Apartment in Thane",
      price: "85,00,000",
      location: "Thane West",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "3BHK Apartment in Kalyan",
      price: "65,00,000",
      location: "Kalyan West",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="relative">
      <div className="flex gap-6 overflow-hidden">
        {properties.map((property, index) => (
          <Card
            key={property.id}
            className="min-w-[300px] transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * 316}px)`,
            }}
          >
            <CardContent className="p-0">
              <div className="relative aspect-[4/3]">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{property.title}</h3>
                <p className="text-lg font-bold">₹{property.price}</p>
                <p className="text-sm text-muted-foreground">{property.location}</p>
                <Button asChild className="w-full mt-4">
                  <Link href={`/properties/${property.id}`}>View Details</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2"
        onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
        disabled={currentIndex === 0}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2"
        onClick={() => setCurrentIndex((prev) => Math.min(properties.length - 1, prev + 1))}
        disabled={currentIndex === properties.length - 1}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}


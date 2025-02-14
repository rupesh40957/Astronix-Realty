"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BedDouble, Bath, Maximize, Heart, Grid, List } from "lucide-react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { MobilePropertyFilter } from "@/components/Home/mobile-property-filter"

const properties = [
  {
    id: 1,
    title: "Modern 2BHK Apartment in Dombivli",
    location: "Dombivli East, Mumbai",
    price: 4500000,
    bedrooms: 2,
    bathrooms: 2,
    area: 850,
    image: "/property-1.jpg",
    tag: "For Sale",
    type: "Apartment",
  },
  {
    id: 2,
    title: "Spacious 3BHK Villa in Kalyan",
    location: "Kalyan West, Mumbai",
    price: 7500000,
    bedrooms: 3,
    bathrooms: 3,
    area: 1200,
    image: "/property-2.jpg",
    tag: "New Launch",
    type: "Villa",
  },
  {
    id: 3,
    title: "Cozy 1BHK Apartment in Shilphata",
    location: "Shilphata Road, Thane",
    price: 3000000,
    bedrooms: 1,
    bathrooms: 1,
    area: 550,
    image: "/property-3.jpg",
    tag: "Exclusive",
    type: "Apartment",
  },
  {
    id: 4,
    title: "Luxurious 4BHK Penthouse in Dombivli",
    location: "Dombivli West, Mumbai",
    price: 12000000,
    bedrooms: 4,
    bathrooms: 4,
    area: 2000,
    image: "/property-4.jpg",
    tag: "Luxury",
    type: "Penthouse",
  },
  {
    id: 5,
    title: "Affordable 2BHK Flat in Kalyan",
    location: "Kalyan East, Mumbai",
    price: 3500000,
    bedrooms: 2,
    bathrooms: 2,
    area: 750,
    image: "/property-5.jpg",
    tag: "Best Deal",
    type: "Apartment",
  },
  {
    id: 6,
    title: "3BHK Row House in Ambernath",
    location: "Ambernath, Mumbai",
    price: 5500000,
    bedrooms: 3,
    bathrooms: 3,
    area: 1100,
    image: "/property-6.jpg",
    tag: "New Launch",
    type: "Row House",
  },
]

export default function FeaturedProperties() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]))
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price)
  }

  const carouselRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    let startX = 0
    let isDragging = false

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
      isDragging = true
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return
      const currentX = e.touches[0].clientX
      const diff = startX - currentX
      controls.start({ x: -diff })
    }

    const handleTouchEnd = () => {
      isDragging = false
      controls.start({ x: 0 })
    }

    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener("touchstart", handleTouchStart)
      carousel.addEventListener("touchmove", handleTouchMove)
      carousel.addEventListener("touchend", handleTouchEnd)
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("touchstart", handleTouchStart)
        carousel.removeEventListener("touchmove", handleTouchMove)
        carousel.removeEventListener("touchend", handleTouchEnd)
      }
    }
  }, [controls])

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8 text-center">Featured Properties</h2>
        <MobilePropertyFilter />
        <div className="mb-6 lg:mb-8 flex justify-end">
          <div className="flex gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("grid")}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size="icon"
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <AnimatePresence>
          <motion.div
            className={`grid gap-4 sm:gap-6 ${
              viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
            }`}
            layout
          >
            {properties.map((property) => (
              <motion.div
                key={property.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  className={`overflow-hidden hover:shadow-lg transition-shadow duration-300 ${
                    viewMode === "list" ? "flex flex-col sm:flex-row" : ""
                  }`}
                >
                  <div className={`relative ${viewMode === "list" ? "sm:w-1/3" : ""}`}>
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-2 left-2 bg-primary">{property.tag}</Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={() => toggleFavorite(property.id)}
                    >
                      <Heart
                        className={`h-6 w-6 ${
                          favorites.includes(property.id) ? "fill-red-500 text-red-500" : "text-white"
                        }`}
                      />
                    </Button>
                  </div>
                  <div className={`flex flex-col ${viewMode === "list" ? "sm:w-2/3" : ""}`}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{property.title}</h3>
                          <p className="text-sm text-gray-500">{property.location}</p>
                        </div>
                        <p className="text-primary font-semibold">{formatPrice(property.price)}</p>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600 mb-4">
                        <span className="flex items-center">
                          <BedDouble className="h-4 w-4 mr-1" /> {property.bedrooms}
                        </span>
                        <span className="flex items-center">
                          <Bath className="h-4 w-4 mr-1" /> {property.bathrooms}
                        </span>
                        <span className="flex items-center">
                          <Maximize className="h-4 w-4 mr-1" /> {property.area} sq.ft.
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="bg-gray-50 p-4">
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">View Details</Button>
                    </CardFooter>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}


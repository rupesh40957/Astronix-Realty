import { useState } from "react"
import Image from "next/image"
import { MapPin, Building2, Bed, Bath, Check, Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

interface PropertyCardProps {
  image: string
  title: string
  price: {
    market: number
    discounted: number
  }
  location: string
  size: number
  bedrooms: number
  bathrooms: number
  amenities: string[]
  isVerified: boolean
  isUnderConstruction?: boolean
  completionDate?: string
  viewMode: "horizontal" | "vertical"
}

export function PropertyCard({
  image,
  title,
  price,
  location,
  size,
  bedrooms,
  bathrooms,
  amenities,
  isVerified,
  isUnderConstruction,
  completionDate,
  viewMode,
}: PropertyCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <Card
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg",
          viewMode === "horizontal" ? "flex" : "flex flex-col",
        )}
      >
        <div
          className={cn(
            "relative",
            viewMode === "horizontal" ? "w-1/3" : "w-full h-64",
            "transition-all duration-300 ease-in-out",
          )}
        >
          {!imageLoaded && <Skeleton className="w-full h-full" />}
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            layout="fill"
            objectFit="cover"
            className={cn("transition-all duration-300 ease-in-out", imageLoaded ? "opacity-100" : "opacity-0")}
            onLoad={() => setImageLoaded(true)}
          />
          <Badge className="absolute top-2 left-2 bg-blue-600">New Listing</Badge>
          <Button
            variant="secondary"
            size="icon"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white transition-colors duration-300"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart
              className={cn(
                "h-4 w-4 transition-colors duration-300",
                isWishlisted ? "fill-red-500 text-red-500" : "text-gray-500",
              )}
            />
          </Button>
        </div>
        <CardContent
          className={cn(
            "p-4 space-y-4 transition-all duration-300 ease-in-out",
            viewMode === "horizontal" ? "w-2/3" : "w-full",
          )}
        >
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-bold text-blue-600">
                ₹{price.discounted?.toLocaleString() ?? "Price on request"}
              </span>
              {price.market && price.discounted && price.market > price.discounted && (
                <span className="text-sm text-gray-500 line-through">₹{price.market.toLocaleString()}</span>
              )}
            </div>
            {isVerified && (
              <Badge variant="secondary" className="mt-1 bg-green-100 text-green-800">
                <Check className="w-3 h-3 mr-1" /> Verified
              </Badge>
            )}
          </div>
          <div>
            <p className="text-gray-600 flex items-center">
              <MapPin className="w-4 h-4 mr-1" /> {location}
            </p>
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span className="flex items-center">
                <Building2 className="w-4 h-4 mr-1" />
                {size} sq.ft.
              </span>
              <span className="flex items-center">
                <Bed className="w-4 h-4 mr-1" />
                {bedrooms} BHK
              </span>
              <span className="flex items-center">
                <Bath className="w-4 h-4 mr-1" />
                {bathrooms} Bath
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {amenities.slice(0, 3).map((amenity, index) => (
              <Badge key={index} variant="secondary">
                {amenity}
              </Badge>
            ))}
            {amenities.length > 3 && <Badge variant="secondary">+{amenities.length - 3} more</Badge>}
          </div>
          {isUnderConstruction && (
            <p className="text-sm text-gray-600">
              Under Construction
              {completionDate && <span className="ml-1">Est. Completion: {completionDate}</span>}
            </p>
          )}
          <p className="text-sm text-green-600 font-semibold">Up to 50% off on interior design services</p>
          <Button className="w-full transition-all duration-300 ease-in-out">View Details</Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}


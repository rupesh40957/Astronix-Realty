"use client"

import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MapPin, Search, Building, Loader2, Home, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

declare global {
  interface Window {
    google: typeof google
    initMap: () => void
  }
}

const propertyTypes = [
  { value: "apartment", label: "Apartment" },
  { value: "villa", label: "Villa" },
  { value: "plot", label: "Plot" },
  { value: "commercial", label: "Commercial" },
]

export default function Hero() {
  const [location, setLocation] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [isMapLoading, setIsMapLoading] = useState(true)
  const [showPopularAreas, setShowPopularAreas] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const mapInstanceRef = useRef<google.maps.Map | null>(null)
  const markersRef = useRef<google.maps.Marker[]>([])

  useEffect(() => {
    window.initMap = () => {
      if (!mapRef.current) return

      const mapInstance = new window.google.maps.Map(mapRef.current, {
        center: { lat: 19.2183, lng: 73.0878 },
        zoom: 11,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "off" }],
          },
        ],
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      })

      mapInstanceRef.current = mapInstance

      if (searchInputRef.current) {
        const searchBox = new window.google.maps.places.SearchBox(searchInputRef.current)

        searchBox.addListener("places_changed", () => {
          const places = searchBox.getPlaces()
          if (!places || places.length === 0) return

          markersRef.current.forEach((marker) => marker.setMap(null))
          markersRef.current = []

          const bounds = new window.google.maps.LatLngBounds()

          places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) return

            const marker = new window.google.maps.Marker({
              map: mapInstance,
              title: place.name,
              position: place.geometry.location,
              animation: window.google.maps.Animation.DROP,
            })

            const infoWindow = new window.google.maps.InfoWindow({
              content: `
                <div class="p-2">
                  <h3 class="font-semibold">${place.name}</h3>
                  <p class="text-sm text-gray-600">${place.formatted_address}</p>
                </div>
              `,
            })

            marker.addListener("click", () => {
              infoWindow.open(mapInstance, marker)
            })

            markersRef.current.push(marker)
            bounds.extend(place.geometry.location)
          })

          mapInstance.fitBounds(bounds)
          if (places[0].formatted_address) {
            setLocation(places[0].formatted_address)
          }
        })

        mapInstance.addListener("bounds_changed", () => {
          searchBox.setBounds(mapInstance.getBounds() as google.maps.LatLngBounds)
        })
      }

      setIsMapLoading(false)
    }

    const script = document.createElement("script")
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`
    script.async = true
    script.defer = true
    document.head.appendChild(script)

    return () => {
      if (markersRef.current) {
        markersRef.current.forEach((marker) => marker.setMap(null))
      }
      document.head.removeChild(script)
    }
  }, [])

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!mapInstanceRef.current) return

    setIsSearching(true)

    try {
      const geocoder = new window.google.maps.Geocoder()
      const result = await new Promise<google.maps.GeocoderResult>((resolve, reject) => {
        geocoder.geocode({ address: location }, (results, status) => {
          if (status === "OK" && results && results[0]) {
            resolve(results[0])
          } else {
            reject(status)
          }
        })
      })

      markersRef.current.forEach((marker) => marker.setMap(null))
      markersRef.current = []

      const marker = new window.google.maps.Marker({
        map: mapInstanceRef.current,
        position: result.geometry.location,
        animation: window.google.maps.Animation.DROP,
      })

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div class="p-2">
            <h3 class="font-semibold">${result.formatted_address}</h3>
            <p class="text-sm text-gray-600">Property Type: ${propertyType}</p>
          </div>
        `,
      })

      marker.addListener("click", () => {
        infoWindow.open(mapInstanceRef.current, marker)
      })

      markersRef.current = [marker]
      mapInstanceRef.current.setCenter(result.geometry.location)
      mapInstanceRef.current.setZoom(15)
    } catch (error) {
      console.error("Geocoding error:", error)
    }

    setIsSearching(false)
  }

  return (
    <section className="relative flex flex-col lg:flex-row min-h-[60vh] lg:min-h-[50vh] bg-gradient-to-br from-primary to-secondary overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 flex flex-col justify-center p-4 lg:p-12"
      >
        <Card className="bg-white/10 backdrop-blur-md border-none shadow-lg">
          <CardContent className="p-3 lg:p-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 lg:mb-4 text-quinary leading-tight">
                Find Your <span className="text-quaternary">Dream Home</span>
              </h1>
              <p className="text-sm sm:text-base lg:text-xl mb-4 lg:mb-6 text-quaternary">
                Discover premium properties in Mumbai & Thane
              </p>
              <div className="flex items-center space-x-2 text-sm lg:text-lg mb-4 lg:mb-8 text-tertiary font-light">
                <Badge variant="secondary" className="bg-buttonColor text-white">
                  SEARCH
                </Badge>
                <Badge variant="secondary" className="bg-buttonColor text-white">
                  VIEW
                </Badge>
                <Badge variant="secondary" className="bg-buttonColor text-white">
                  CONNECT
                </Badge>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onSubmit={handleSearch}
              className="space-y-3 lg:space-y-4"
            >
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tertiary" />
                <Input
                  ref={searchInputRef}
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Search for a location..."
                  className="pl-10 py-4 lg:py-6 text-sm lg:text-base bg-quinary text-primary border-tertiary placeholder:text-tertiary hover:bg-quaternary transition-colors"
                />
              </div>

              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger className="w-full pl-10 py-4 lg:py-6 text-sm lg:text-base bg-quinary text-primary border-tertiary placeholder:text-tertiary hover:bg-quaternary transition-colors">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-tertiary" />
                  <SelectValue placeholder="What type of property?" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                type="submit"
                size="lg"
                className="w-full py-4 lg:py-6 text-sm lg:text-base bg-buttonColor hover:bg-buttonColor/90 text-white transition-colors relative overflow-hidden group"
                disabled={isSearching || !location || !propertyType || isMapLoading}
              >
                {isSearching ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <Search className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                    SEARCH NOW
                  </>
                )}
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ scale: 0, opacity: 0 }}
                  whileTap={{ scale: 4, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </Button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-4 lg:mt-8"
            >
              <Button
                variant="link"
                onClick={() => setShowPopularAreas(!showPopularAreas)}
                className="text-tertiary hover:text-quaternary transition-colors text-sm lg:text-base"
              >
                Popular areas{" "}
                <ChevronDown
                  className={`ml-1 h-3 w-3 lg:h-4 lg:w-4 transition-transform ${showPopularAreas ? "rotate-180" : ""}`}
                />
              </Button>
              <AnimatePresence>
                {showPopularAreas && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 space-y-2"
                  >
                    {["Dombivli", "Kalyan", "Thane"].map((area) => (
                      <Button
                        key={area}
                        variant="outline"
                        onClick={() => {
                          setLocation(area)
                          if (searchInputRef.current) {
                            searchInputRef.current.value = area
                            const event = new Event("input", { bubbles: true })
                            searchInputRef.current.dispatchEvent(event)
                          }
                        }}
                        className="mr-2 bg-quinary text-primary hover:bg-quaternary transition-colors text-sm lg:text-base"
                      >
                        <Home className="mr-2 h-3 w-3 lg:h-4 lg:w-4" /> {area}
                      </Button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 relative h-[40vh] lg:h-auto"
      >
        <div className="absolute inset-0 lg:inset-y-12 lg:right-0 lg:left-12 rounded-3xl overflow-hidden shadow-2xl">
          {isMapLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-quaternary/50 z-10">
              <Loader2 className="h-8 w-8 lg:h-12 lg:w-12 animate-spin text-primary" />
            </div>
          )}
          <div ref={mapRef} className="h-full w-full" />
        </div>
      </motion.div>
    </section>
  )
}


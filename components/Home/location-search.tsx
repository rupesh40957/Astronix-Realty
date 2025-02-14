"use client"

import { useState, useMemo, useCallback } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"
import { motion, AnimatePresence } from "framer-motion"
import { Search, MapPin } from "lucide-react"

// Fix Leaflet icon issue
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
})

const properties = [
  { id: 1, name: "Luxury 2BHK in Dombivli East", price: "₹ 45,00,000", lat: 19.2183, lng: 73.0878, address: "123 Main St, Dombivli East, Mumbai" },
  { id: 2, name: "Spacious 3BHK in Kalyan West", price: "₹ 65,00,000", lat: 19.2403, lng: 73.1305, address: "456 Park Ave, Kalyan West, Mumbai" },
  { id: 3, name: "Cozy 1BHK in Dombivli West", price: "₹ 30,00,000", lat: 19.2237, lng: 73.0724, address: "789 Oak Rd, Dombivli West, Mumbai" },
  { id: 4, name: "Modern 4BHK in Thane", price: "₹ 95,00,000", lat: 19.2183, lng: 72.9781, address: "101 Lake View, Thane, Mumbai" },
]

function ChangeMapView({ coords }) {
  const map = useMap()
  map.setView(coords, 14)
  return null
}

export default function LocationSearch() {
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  const handleMarkerClick = useCallback((property) => {
    setSelectedProperty(property)
  }, [])

  const filteredProperties = useMemo(() => {
    return properties.filter(
      (property) =>
        property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        property.address.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm])

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl font-bold mb-8 text-center text-primary">
          Search Properties by Location
        </motion.h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <Card className="lg:w-1/3">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary mb-4">Find Your Property</CardTitle>
              <div className="relative">
                <Input type="text" placeholder="Search by property name or address" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              </div>
            </CardHeader>
            <CardContent className="max-h-[400px] overflow-y-auto">
              <AnimatePresence>
                {filteredProperties.map((property) => (
                  <motion.div key={property.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className={`bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg mb-4 cursor-pointer ${selectedProperty?.id === property.id ? "ring-2 ring-primary" : ""}`} onClick={() => handleMarkerClick(property)}>
                    <h3 className="font-semibold text-lg mb-2">{property.name}</h3>
                    <p className="text-gray-600 mb-2">{property.address}</p>
                    <p className="text-primary font-semibold">{property.price}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </CardContent>
          </Card>
          <div className="lg:w-2/3 flex flex-col gap-4">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="h-[400px] rounded-lg overflow-hidden shadow-xl">
              <MapContainer center={[19.2183, 73.0878]} zoom={11} style={{ height: "100%", width: "100%" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {properties.map((property) => (
                  <Marker key={property.id} position={[property.lat, property.lng]} eventHandlers={{ click: () => handleMarkerClick(property) }}>
                    <Popup>
                      <div>
                        <h3 className="font-semibold">{property.name}</h3>
                        <p>{property.price}</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
                {selectedProperty && <ChangeMapView coords={[selectedProperty.lat, selectedProperty.lng]} />}
              </MapContainer>
            </motion.div>
            <iframe width="100%" height="400" src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Mumbai" allowFullScreen loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function SearchBar() {
  const router = useRouter()
  const [location, setLocation] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [priceRange, setPriceRange] = useState("")
  const [keyword, setKeyword] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/properties?location=${location}&type=${propertyType}&price=${priceRange}&keyword=${keyword}`)
  }

  return (
    <section className="bg-white py-8 shadow-md">
      <div className="container mx-auto px-4">
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dombivli">Dombivli</SelectItem>
              <SelectItem value="kalyan">Kalyan</SelectItem>
              <SelectItem value="shilphata">Shilphata Road</SelectItem>
            </SelectContent>
          </Select>

          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Property type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="residential">Residential</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
              <SelectItem value="under-construction">Under-Construction</SelectItem>
            </SelectContent>
          </Select>

          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Price range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-5000000">Up to 50 Lakh</SelectItem>
              <SelectItem value="5000000-10000000">50 Lakh - 1 Crore</SelectItem>
              <SelectItem value="10000000-20000000">1 Crore - 2 Crore</SelectItem>
              <SelectItem value="20000000+">Above 2 Crore</SelectItem>
            </SelectContent>
          </Select>

          <div className="relative w-full md:w-[200px]">
            <Input
              type="text"
              placeholder="Search by keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>

          <Button type="submit" className="w-full md:w-auto">
            Search Now
          </Button>
        </form>
      </div>
    </section>
  )
}


import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"

export function MobilePropertyFilter() {
  const [priceRange, setPriceRange] = useState([0, 10000000])
  const [propertyType, setPropertyType] = useState("")
  const [bedrooms, setBedrooms] = useState("")

  const handleApplyFilters = () => {
    // Implement filter logic here
    console.log("Filters applied:", { priceRange, propertyType, bedrooms })
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="mb-4 lg:hidden">
          Filter Properties
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[80vh]">
        <SheetHeader>
          <SheetTitle>Filter Properties</SheetTitle>
          <SheetDescription>Adjust the filters to find your perfect property.</SheetDescription>
        </SheetHeader>
        <div className="py-4 space-y-4">
          <div>
            <Label htmlFor="price-range">Price Range (₹)</Label>
            <Slider
              id="price-range"
              min={0}
              max={10000000}
              step={100000}
              value={priceRange}
              onValueChange={setPriceRange}
              className="mt-2"
            />
            <div className="flex justify-between mt-2">
              <span>₹{priceRange[0].toLocaleString()}</span>
              <span>₹{priceRange[1].toLocaleString()}</span>
            </div>
          </div>
          <div>
            <Label htmlFor="property-type">Property Type</Label>
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger id="property-type">
                <SelectValue placeholder="Select property type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="plot">Plot</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="bedrooms">Bedrooms</Label>
            <Select value={bedrooms} onValueChange={setBedrooms}>
              <SelectTrigger id="bedrooms">
                <SelectValue placeholder="Select number of bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4+</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleApplyFilters} className="w-full">
            Apply Filters
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}


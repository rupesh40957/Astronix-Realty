import { useState } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function Filters() {
  const [priceRange, setPriceRange] = useState([0, 10000000])
  const [bedrooms, setBedrooms] = useState<string[]>([])
  const [propertyTypes, setPropertyTypes] = useState<string[]>([])
  const [amenities, setAmenities] = useState<string[]>([])

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <Slider
              min={0}
              max={10000000}
              step={100000}
              value={priceRange}
              onValueChange={setPriceRange}
              className="mt-2"
            />
            <div className="flex justify-between mt-2 text-sm text-gray-600">
              <span>₹{priceRange[0].toLocaleString()}</span>
              <span>₹{priceRange[1].toLocaleString()}</span>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="bedrooms">
          <AccordionTrigger>Bedrooms</AccordionTrigger>
          <AccordionContent>
            {["1 BHK", "2 BHK", "3 BHK", "4 BHK", "4+ BHK"].map((option) => (
              <div key={option} className="flex items-center space-x-2 mb-2">
                <Checkbox
                  id={option}
                  checked={bedrooms.includes(option)}
                  onCheckedChange={(checked) => {
                    if (checked) setBedrooms([...bedrooms, option])
                    else setBedrooms(bedrooms.filter((b) => b !== option))
                  }}
                />
                <Label htmlFor={option}>{option}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="propertyTypes">
          <AccordionTrigger>Property Types</AccordionTrigger>
          <AccordionContent>
            {["Apartment", "Villa", "Penthouse", "Plot"].map((option) => (
              <div key={option} className="flex items-center space-x-2 mb-2">
                <Checkbox
                  id={option}
                  checked={propertyTypes.includes(option)}
                  onCheckedChange={(checked) => {
                    if (checked) setPropertyTypes([...propertyTypes, option])
                    else setPropertyTypes(propertyTypes.filter((t) => t !== option))
                  }}
                />
                <Label htmlFor={option}>{option}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="amenities">
          <AccordionTrigger>Amenities</AccordionTrigger>
          <AccordionContent>
            {["Swimming Pool", "Gym", "Garden", "Parking", "Security"].map((option) => (
              <div key={option} className="flex items-center space-x-2 mb-2">
                <Checkbox
                  id={option}
                  checked={amenities.includes(option)}
                  onCheckedChange={(checked) => {
                    if (checked) setAmenities([...amenities, option])
                    else setAmenities(amenities.filter((a) => a !== option))
                  }}
                />
                <Label htmlFor={option}>{option}</Label>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full mt-4">Apply Filters</Button>
    </div>
  )
}


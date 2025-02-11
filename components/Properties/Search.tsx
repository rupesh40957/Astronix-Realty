import { useState } from "react"
import { SearchIcon } from "lucide-react"

export function Search() {
  const [city, setCity] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [priceRange, setPriceRange] = useState([0, 10000000])

  return (
    <div className="bg-blue-600 text-white p-6">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Find Your Dream Property</h2>
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="City/Locality"
            className="flex-grow p-2 rounded text-gray-800"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <select
            className="p-2 rounded text-gray-800"
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="">Property Type</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="under-construction">Under Construction</option>
          </select>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="10000000"
              step="100000"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
              className="w-24"
            />
            <span>
              ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
            </span>
            <input
              type="range"
              min="0"
              max="10000000"
              step="100000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
              className="w-24"
            />
          </div>
          <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100">
            <SearchIcon className="w-5 h-5 inline-block mr-2" />
            Search
          </button>
        </div>
        <div className="mt-4 flex gap-2">
          <span className="bg-blue-700 px-2 py-1 rounded text-sm">Affordable Homes in Kalyan</span>
          <span className="bg-blue-700 px-2 py-1 rounded text-sm">Under ₹50 Lakhs</span>
        </div>
      </div>
    </div>
  )
}


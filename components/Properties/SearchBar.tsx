import { useState } from "react"
import { useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface SearchBarProps {
  className?: string
}

export function SearchBar({ className = "" }: SearchBarProps) {
  const router = useRouter()
  const [location, setLocation] = useState("")
  const [keyword, setKeyword] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/properties?location=${location}&keyword=${keyword}`)
  }

  return (
    <section className={`py-4 ${className}`}>
      <div className="container mx-auto px-4">
        <form onSubmit={handleSearch} className="flex flex-wrap gap-2 items-center">
          <div className="flex-grow min-w-[200px]">
            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger className="bg-theme-5 text-theme-1">
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-grow min-w-[200px]">
            <Input
              type="text"
              placeholder="Search by keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="bg-theme-5 text-theme-1 placeholder-theme-3"
            />
          </div>
          <Button 
  type="submit" 
  onClick={() => console.log("Button clicked!")}
  className="bg-blue-500 text-white hover:bg-blue-600 active:scale-95 transition-transform px-4 py-2 flex items-center"
  aria-label="Search"
>
  <Search className="w-4 h-4 mr-2" />
  <span className="hidden sm:inline">Search</span>
</Button>


        </form>
      </div>
    </section>
  )
}


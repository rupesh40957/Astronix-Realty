"use client"
import { useState, useEffect, useRef, useMemo } from "react"
import { useVirtualizer } from "@tanstack/react-virtual"
import { SearchBar } from "../../components/Properties/SearchBar"
import { PropertyCard } from "../../components/Properties/PropertyCard"
import { Filters } from "../../components/Properties/Filters"
import { MobileFilters } from "../../components/Properties/MobileFilters"
import { ViewModeToggle } from "../../components/Properties/ViewModeToggle"
import { EMICalculatorToggle } from "../../components/Properties/EMICalculatorToggle"
import { ExclusiveOffer } from "../../components/Properties/ExclusiveOffer"
import { useMediaQuery } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"
import { FeaturedProjects } from "../../components/Properties/FeaturedProjects"
import { Testimonials } from "../../components/Properties/Testimonials"
import { Newsletter } from "../../components/Properties/Newsletter"
import { AIRecommendations } from "../../components/Properties/AIRecommendations"
import { RecentlyViewed } from "../../components/Properties/RecentlyViewed"
import { Button } from "@/components/ui/button"
import { Filter } from "lucide-react"

export default function PropertyListingPage() {
  const [viewMode, setViewMode] = useState<"horizontal" | "vertical">("vertical")
  const [showEMICalculator, setShowEMICalculator] = useState(false)
  const listingsRef = useRef<HTMLDivElement>(null)
  const filtersRef = useRef<HTMLDivElement>(null)
  const searchBarRef = useRef<HTMLDivElement>(null)
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  const [allPropertiesLoaded, setAllPropertiesLoaded] = useState(false)
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(true)
  const [areTogglesVisible, setAreTogglesVisible] = useState(false)
  const [hasReachedListingsEnd, setHasReachedListingsEnd] = useState(false)
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)

  const properties = useMemo(
    () => [
      {
        image: "/placeholder.svg",
        title: "3BHK Apartment in Andheri West",
        price: {
          market: 15000000,
          discounted: 14500000,
        },
        location: "Andheri West, Mumbai",
        size: 1200,
        bedrooms: 3,
        bathrooms: 2,
        amenities: ["Swimming Pool", "Gym", "24/7 Security", "Power Backup"],
        isVerified: true,
      },
      {
        image: "/placeholder.svg",
        title: "2BHK Flat with Sea View in Worli",
        price: {
          market: 25000000,
          discounted: 25000000,
        },
        location: "Worli, Mumbai",
        size: 950,
        bedrooms: 2,
        bathrooms: 2,
        amenities: ["Sea View", "Modular Kitchen", "Valet Parking", "Club House"],
        isVerified: true,
      },
      {
        image: "/placeholder.svg",
        title: "4BHK Penthouse in Bandra",
        price: {
          market: 50000000,
          discounted: 48000000,
        },
        location: "Bandra, Mumbai",
        size: 2500,
        bedrooms: 4,
        bathrooms: 4,
        amenities: ["Terrace Garden", "Private Pool", "Home Automation", "Concierge Service"],
        isVerified: true,
      },
      {
        image: "/placeholder.svg",
        title: "1BHK Budget Apartment in Thane",
        price: {
          market: 5000000,
          discounted: 5000000,
        },
        location: "Thane West, Mumbai",
        size: 550,
        bedrooms: 1,
        bathrooms: 1,
        amenities: ["Fitness Center", "Children's Play Area", "Landscaped Gardens"],
        isVerified: true,
        isUnderConstruction: true,
        completionDate: "Dec 2024",
      },
      {
        image: "/placeholder.svg",
        title: "3BHK Villa in Navi Mumbai",
        price: {
          market: 20000000,
          discounted: 20000000,
        },
        location: "Kharghar, Navi Mumbai",
        size: 1800,
        bedrooms: 3,
        bathrooms: 3,
        amenities: ["Private Garden", "Covered Parking", "Community Center", "24/7 Security"],
        isVerified: true,
      },
      {
        image: "/placeholder.svg",
        title: "2BHK Apartment with Mountain View in Lonavala",
        price: {
          market: 10000000,
          discounted: 9500000,
        },
        location: "Lonavala, Maharashtra",
        size: 1000,
        bedrooms: 2,
        bathrooms: 2,
        amenities: ["Mountain View", "Balcony", "Resort-style Amenities", "Clubhouse"],
        isVerified: true,
      },
      // Add more properties here to test the scrolling functionality
      ...Array(30)
        .fill(0)
        .map((_, index) => ({
          image: "/placeholder.svg",
          title: `Property ${index + 7}`,
          price: {
            market: 10000000 + index * 1000000,
            discounted: 9500000 + index * 950000,
          },
          location: "Various Locations, Mumbai",
          size: 1000 + index * 100,
          bedrooms: 2 + (index % 3),
          bathrooms: 2 + (index % 2),
          amenities: ["Amenity 1", "Amenity 2", "Amenity 3"],
          isVerified: true,
        })),
    ],
    [],
  )

  const items = useMemo(() => {
    return properties.flatMap((property, index) => {
      const items = [{ type: "property" as const, data: property }]
      if ((index + 1) % 5 === 0) {
        items.push({ type: "offer" as const, data: property })
      }
      return items
    })
  }, [properties])

  const rowVirtualizer = useVirtualizer({
    count: Math.ceil(items.length / (viewMode === "vertical" ? 3 : 1)),
    getScrollElement: () => listingsRef.current,
    estimateSize: () => (viewMode === "vertical" ? 400 : 600),
    overscan: 5,
  })

  const renderListings = () => (
    <div
      style={{
        height: `${rowVirtualizer.getTotalSize()}px`,
        width: "100%",
        position: "relative",
      }}
    >
      {rowVirtualizer.getVirtualItems().map((virtualRow) => {
        const startIndex = virtualRow.index * (viewMode === "vertical" ? 3 : 1)
        const rowItems = items.slice(startIndex, startIndex + (viewMode === "vertical" ? 3 : 1))

        if (virtualRow.index === rowVirtualizer.getVirtualItems().length - 1) {
          setTimeout(() => setAllPropertiesLoaded(true), 100)
        }

        return (
          <div
            key={virtualRow.key}
            data-index={virtualRow.index}
            ref={rowVirtualizer.measureElement}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              transform: `translateY(${virtualRow.start}px)`,
            }}
            className={cn(
              "grid gap-4",
              viewMode === "vertical" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1",
            )}
          >
            {rowItems.map((item, itemIndex) => (
              <div key={itemIndex} className={cn(item.type === "offer" ? "col-span-full" : "")}>
                {item.type === "property" && <PropertyCard {...item.data} viewMode={viewMode} />}
                {item.type === "offer" && <ExclusiveOffer property={item.data} />}
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      if (scrollPosition > 100) {
        setIsSearchBarVisible(false)
        setAreTogglesVisible(true)
      } else {
        setIsSearchBarVisible(true)
        setAreTogglesVisible(false)
      }

      // Check if we've reached the end of the listings
      if (scrollPosition + windowHeight >= documentHeight - 200) {
        setHasReachedListingsEnd(true)
      } else {
        setHasReachedListingsEnd(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-theme-5">
      <div
        ref={searchBarRef}
        className={cn(
          "fixed left-0 right-0 z-40 bg-theme-4 shadow-md transition-all duration-300 ease-in-out",
          isSearchBarVisible ? "top-16" : "-top-full",
        )}
      >
        <div className="container mx-auto px-4">
          <SearchBar />
        </div>
      </div>
      <div
        className={cn(
          "fixed left-0 right-0 z-30 bg-theme-5 shadow-md transition-all duration-300 ease-in-out",
          areTogglesVisible && !hasReachedListingsEnd ? "top-16" : "-top-full",
        )}
      >
        <div className="container mx-auto   px-4 py-2 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-theme-1">Property Listings</h2>
          <div className="flex items-center space-x-4">
            <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />
            <EMICalculatorToggle />
            {!isDesktop && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsMobileFiltersOpen(true)}
                className="bg-button text-white hover:bg-button/90"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            )}
          </div>
        </div>
      </div>
      <main className="container mx-auto px-4 pt-48">
        <div className="flex flex-col lg:flex-row gap-8">
          <MobileFilters isOpen={isMobileFiltersOpen} setIsOpen={setIsMobileFiltersOpen} />
          <div className="hidden lg:block lg:w-1/4 lg:sticky lg:top-48 lg:self-start">
            <Filters />
          </div>
          <div className="w-full lg:w-3/4">
            <div ref={listingsRef} className="min-h-[calc(100vh-12rem)]">
              {renderListings()}
            </div>
          </div>
        </div>
        {allPropertiesLoaded && (
          <>
            <div className="mt-12 lg:mt-24">
              <AIRecommendations />
            </div>
            <div className="mt-12 lg:mt-24">
              <RecentlyViewed />
            </div>
            <div className="mt-16 lg:mt-32">
              <FeaturedProjects />
            </div>
            <div className="mt-16 lg:mt-32">
              <Testimonials />
            </div>
            <div className="mt-16 lg:mt-32 mb-16">
              <Newsletter />
            </div>
          </>
        )}
      </main>
    </div>
  )
}


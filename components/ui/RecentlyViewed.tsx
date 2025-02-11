import { PropertyCard } from "./PropertyCard"

export function RecentlyViewed() {
  const recentlyViewedProperties = [
    {
      image: "/placeholder.svg",
      title: "2BHK Apartment in Powai",
      price: 12000000,
      location: "Powai, Mumbai",
      size: 900,
      bedrooms: 2,
      bathrooms: 2,
      amenities: ["Gym", "Covered Parking"],
      isVerified: true,
    },
    // Add more recently viewed properties here
  ]

  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Recently Viewed</h2>
      <div className="flex overflow-x-auto gap-6 pb-4">
        {recentlyViewedProperties.map((property, index) => (
          <div key={index} className="flex-shrink-0 w-80">
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
    </div>
  )
}


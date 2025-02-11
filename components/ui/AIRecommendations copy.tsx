import { PropertyCard } from "./PropertyCard"

export function AIRecommendations() {
  const recommendedProperties = [
    {
      image: "/placeholder.svg",
      title: "3BHK Apartment in Andheri West",
      price: 14500000,
      originalPrice: 15000000,
      location: "Andheri West, Mumbai",
      size: 1200,
      bedrooms: 3,
      bathrooms: 2,
      amenities: ["Swimming Pool", "Gym"],
      isVerified: true,
    },
    // Add more recommended properties here
  ]

  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">AI Recommendations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recommendedProperties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </div>
  )
}


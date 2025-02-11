import { PropertyCard } from "./PropertyCard"

export function FeaturedListings() {
  const featuredProperties = [
    {
      title: "Luxury 4BHK Villa in Juhu",
      price: 50000000,
      location: "Juhu, Mumbai",
      area: 3000,
      bedrooms: 4,
      bathrooms: 4,
      images: ["/placeholder.svg"],
      features: ["Swimming Pool", "Gym", "Garden", "Sea View"],
      isVerified: true,
      isUnderConstruction: false,
    },
    // Add more featured properties here
  ]

  return (
    <div className="my-8 bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Featured Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredProperties.map((property, index) => (
          <PropertyCard key={index} {...property} />
        ))}
      </div>
    </div>
  )
}


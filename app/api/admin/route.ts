import { NextResponse } from "next/server"

const data = {
  hero: {
    title: "Find Your Dream Property",
    subtitle: "Discover the perfect home or investment opportunity with SBS REALTY",
    images: ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg"],
  },
  searchBar: {
    locations: ["Dombivli", "Kalyan", "Shilphata Road"],
    propertyTypes: ["Residential", "Commercial", "Under-Construction"],
    priceRanges: ["0-5000000", "5000000-10000000", "10000000-20000000", "20000000+"],
  },
  usp: [
    {
      title: "Affordable Under-Construction Homes",
      description: "Up to 15% off market prices. Browse homes at unbeatable prices, available for immediate booking!",
      icon: "Home",
    },
    {
      title: "100% Legally Verified Properties",
      description: "Trust in the legality and transparency of every property we offer.",
      icon: "Shield",
    },
    {
      title: "Exclusive Interior Design Discounts",
      description: "Get up to 100% off on interior design services with property purchase.",
      icon: "Paintbrush",
    },
    {
      title: "High ROI Investment Opportunities",
      description: "Discover properties with excellent potential for appreciation and rental income.",
      icon: "TrendingUp",
    },
  ],
  featuredProperties: [
    {
      id: 1,
      title: "Luxury 2BHK in Dombivli East",
      location: "Dombivli East, Mumbai",
      price: 4500000,
      bedrooms: 2,
      bathrooms: 2,
      area: 850,
      image: "/property-1.jpg",
      tag: "For Sale",
      type: "Apartment",
    },
    // Add more properties here
  ],
  propertyCategories: [
    {
      name: "Residential Properties",
      icon: "Home",
      href: "/properties/residential",
    },
    {
      name: "Commercial Properties",
      icon: "Building",
      href: "/properties/commercial",
    },
    {
      name: "Under-Construction Properties",
      icon: "Construction",
      href: "/properties/under-construction",
    },
    {
      name: "Luxury Homes",
      icon: "Star",
      href: "/properties/luxury",
    },
  ],
  virtualTour: {
    title: "Experience Our Properties in 3D",
    description: "Take a virtual tour of our featured properties from the comfort of your home",
    tourUrl: "https://my.matterport.com/show/?m=CsPYpGTozg8",
  },
  testimonials: [
    {
      name: "Priya S.",
      role: "Satisfied Homeowner",
      image: "/avatar-1.jpg",
      content:
        "SBS REALTY made my property search incredibly easy. Their team was professional, knowledgeable, and always available to answer my questions. I couldn't be happier with my new home!",
    },
    // Add more testimonials here
  ],
  locationSearch: {
    title: "Search Properties by Location",
    properties: [
      {
        id: 1,
        name: "Luxury 2BHK in Dombivli East",
        price: "₹ 45,00,000",
        lat: 19.2183,
        lng: 73.0878,
        address: "123 Main St, Dombivli East, Mumbai",
      },
      // Add more properties here
    ],
  },
  specialOffers: [
    {
      title: "5% Additional Discount",
      description: "Get an additional 5% discount on properties listed in the Kalyan area this month.",
    },
    {
      title: "Free Interior Design Consultation",
      description: "Book a property now and get a free consultation with our expert interior designers.",
    },
    {
      title: "No EMI for 6 Months",
      description: "Buy a ready-to-move property and enjoy no EMI payments for the first 6 months.",
    },
    {
      title: "Exclusive Partner Discounts",
      description: "Get special discounts on home appliances and furniture from our partner brands.",
    },
  ],
  blogPosts: [
    {
      id: 1,
      title: "Top 5 Things to Check Before Buying an Under-Construction Property",
      image: "/blog-1.jpg",
      excerpt: "Ensure your investment is secure by following these essential checks...",
    },
    // Add more blog posts here
  ],
  footer: {
    about:
      "SBS REALTY is a leading real estate company providing exceptional property solutions in Mumbai and its surrounding areas.",
    quickLinks: [
      { name: "Properties", href: "/properties" },
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Blog", href: "/blog" },
    ],
    contact: {
      address: "123 Real Estate Street, Mumbai, Maharashtra 400001",
      phone: "+91 1234567890",
      email: "info@sbsrealty.com",
    },
    socialMedia: [
      { name: "Facebook", url: "#" },
      { name: "Twitter", url: "#" },
      { name: "Instagram", url: "#" },
      { name: "LinkedIn", url: "#" },
    ],
  },
}

export async function GET(request: Request) {
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const body = await request.json()

  // In a real application, you would save this data to a database
  console.log("Received data:", body)

  // Update the in-memory data (this is just for demonstration purposes)
  Object.assign(data, body)

  return NextResponse.json({ message: "Data updated successfully" })
}


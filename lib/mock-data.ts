import type { Property, Lead } from "@shared/schema";

const mockProperties: Property[] = [
  {
    id: 1,
    name: "Luxury Villa",
    price: 5000000,
    discountPrice: 4800000,
    location: "Palm Beach, Miami",
    area: 4500,
    bedrooms: 5,
    bathrooms: 4,
    description: "Stunning beachfront villa with modern amenities",
    images: ["https://example.com/villa1.jpg"],
    propertyType: "Villa",
    highlights: [{ title: "Beachfront", description: "Direct beach access" }],
    possessionDate: new Date("2024-12-31"),
    completionPercentage: 100,
    floorsCompleted: 3,
    buildingFeatures: [{ title: "Pool", description: "Infinity pool" }],
    amenities: [{ title: "Gym", description: "Fully equipped gym" }],
    legalDocuments: [{ title: "Title Deed", description: "Clear title" }],
    googleMapsLink: "https://maps.google.com"
  },
  {
    id: 2,
    name: "Urban Apartment",
    price: 750000,
    discountPrice: null,
    location: "Downtown",
    area: 1200,
    bedrooms: 2,
    bathrooms: 2,
    description: "Modern apartment in the heart of the city",
    images: ["https://example.com/apt1.jpg"],
    propertyType: "Apartment",
    highlights: [{ title: "Location", description: "Central location" }],
    possessionDate: new Date("2024-06-30"),
    completionPercentage: 90,
    floorsCompleted: 1,
    buildingFeatures: [{ title: "Security", description: "24/7 security" }],
    amenities: [{ title: "Parking", description: "Underground parking" }],
    legalDocuments: [{ title: "Permits", description: "All permits approved" }],
    googleMapsLink: "https://maps.google.com"
  }
];

const mockLeads: Lead[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    propertyId: 1,
    status: "new",
    notes: "Interested in beachfront properties",
    createdAt: new Date("2024-02-01")
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "098-765-4321",
    propertyId: 2,
    status: "contacted",
    notes: "Looking for downtown apartments",
    createdAt: new Date("2024-02-05")
  }
];

export const mockApi = {
  getProperties: () => Promise.resolve(mockProperties),
  getProperty: (id: number) => Promise.resolve(mockProperties.find(p => p.id === id)),
  getLeads: () => Promise.resolve(mockLeads),
  getStats: () => Promise.resolve({
    totalProperties: mockProperties.length,
    activeLeads: mockLeads.filter(l => l.status !== "closed").length,
    propertiesViewed: 156
  })
};

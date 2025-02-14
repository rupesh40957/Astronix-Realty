"use client";

import { useQuery } from "@tanstack/react-query";
import { PropertyCard } from "@/components/admin/properties/property-card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import type { Property } from "@/shared/schema";

export default function Properties() {
  const router = useRouter();

  const { data: properties = [], isLoading, isError } = useQuery<Property[]>({
    queryKey: ["properties"],
    queryFn: async () => {
      const res = await fetch("/api/properties");
      if (!res.ok) throw new Error("Failed to fetch properties");
      return res.json();
    },
  });

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Properties</h1>
        <Button onClick={() => router.push("/admin/properties/new")}>
          <Plus className="w-4 h-4 mr-2" />
          Add Property
        </Button>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-[300px] bg-gray-200 animate-pulse rounded-lg" />
          ))}
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="text-center py-12">
          <h3 className="text-lg font-semibold text-red-500 mb-2">
            Error fetching properties
          </h3>
          <p className="text-muted-foreground mb-4">
            Please try again later.
          </p>
        </div>
      )}

      {/* No Properties Found */}
      {!isLoading && !isError && properties.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-semibold mb-2">
            No properties found
          </h3>
          <p className="text-muted-foreground mb-4">
            Add your first property to get started
          </p>
          <Button onClick={() => router.push("/admin/properties/new")}>
            Add Property
          </Button>
        </div>
      )}

      {/* Properties List */}
      {!isLoading && !isError && properties.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
}

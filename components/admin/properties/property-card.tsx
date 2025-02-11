import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Property } from "@shared/schema";
import { useLocation } from "wouter";
import { Pencil, Trash2, Eye } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const [_, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("DELETE", `/api/properties/${property.id}`);
      if (!res.ok) throw new Error("Failed to delete property");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/properties"] });
      toast({
        title: "Property deleted successfully",
      });
    },
    onError: () => {
      toast({
        title: "Failed to delete property",
        variant: "destructive",
      });
    },
  });

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg">{property.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-2xl font-bold">₹{property.price.toLocaleString()}</p>
          <p className="text-sm text-muted-foreground">{property.location}</p>
          <p className="text-sm">
            {property.bedrooms} BHK • {property.area} sqft
          </p>
          <div className="flex gap-2 mt-4">
            <Button 
              className="flex-1"
              variant="outline"
              onClick={() => setLocation(`/properties/${property.id}`)}
            >
              <Eye className="w-4 h-4 mr-2" />
              View
            </Button>
            <Button 
              className="flex-1"
              variant="outline"
              onClick={() => setLocation(`/properties/${property.id}/edit`)}
            >
              <Pencil className="w-4 h-4 mr-2" />
              Edit
            </Button>
            <Button 
              className="flex-1"
              variant="outline"
              onClick={() => {
                if (confirm("Are you sure you want to delete this property?")) {
                  deleteMutation.mutate();
                }
              }}
              disabled={deleteMutation.isPending}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useLocation } from "wouter";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { insertPropertySchema, type InsertProperty, type Property } from "@/shared/schema";
import { apiRequest } from "@/lib/queryClient";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Plus, Minus, Pencil } from "lucide-react";
import { IconSelect } from "@/components/ui/icon-select";

// Assuming iconsByCategory is defined elsewhere.
const iconsByCategory = {
  highlights: { Home: "Home", Star: "Star", Check: "Check" },
  features: { Building: "Building", Park: "Park", Pool: "Pool" },
  amenities: { Wifi: "Wifi", Gym: "Gym", Parking: "Parking" },
  documents: { Document: "Document", Key: "Key", Lock: "Lock" },
};

function DynamicFieldArray({
  fields,
  onAdd,
  onRemove,
  onFieldChange,
  includeIcon = false,
  includeDriveLink = false,
  includeStatus = false,
  iconCategory = "highlights",
  disabled = false,
}: {
  fields: Array<{
    icon?: string;
    title: string;
    description: string;
    driveLink?: string;
    status?: string;
  }>;
  onAdd: () => void;
  onRemove: (index: number) => void;
  onFieldChange: (index: number, field: string, value: string) => void;
  includeIcon?: boolean;
  includeDriveLink?: boolean;
  includeStatus?: boolean;
  iconCategory?: "highlights" | "features" | "amenities" | "documents";
  disabled?: boolean;
}) {
  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={index} className="space-y-2">
          <div className="flex gap-4">
            {includeIcon && (
              <IconSelect
                value={field.icon || Object.keys(iconsByCategory[iconCategory])[0]}
                onChange={(value) => onFieldChange(index, "icon", value)}
                category={iconCategory}
                disabled={disabled}
              />
            )}
            <div className="flex-1">
              <Input
                placeholder="Title"
                value={field.title}
                onChange={(e) => onFieldChange(index, "title", e.target.value)}
                disabled={disabled}
              />
            </div>
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => onRemove(index)}
              disabled={disabled}
            >
              <Minus className="h-4 w-4" />
            </Button>
          </div>
          <Input
            placeholder="Description"
            value={field.description}
            onChange={(e) => onFieldChange(index, "description", e.target.value)}
            disabled={disabled}
          />
          {includeDriveLink && (
            <Input
              placeholder="Google Drive Link"
              value={field.driveLink}
              onChange={(e) => onFieldChange(index, "driveLink", e.target.value)}
              disabled={disabled}
            />
          )}
          {includeStatus && (
            <Select
              value={field.status}
              onValueChange={(value) => onFieldChange(index, "status", value)}
              disabled={disabled}
            >
              <SelectTrigger disabled={disabled}>
                <SelectValue placeholder="Verification Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="verified">Verified</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          )}
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        className="w-full"
        onClick={onAdd}
        disabled={disabled}
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Field
      </Button>
    </div>
  );
}

export default function PropertyForm({ mode = "create" }: { mode?: "create" | "edit" | "view" }) {
  const { id } = useParams();
  const [_, setLocation] = useLocation();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const isViewMode = mode === "view";
  const isEditMode = mode === "edit";

  const { data: property, isLoading } = useQuery<Property>({
    queryKey: [`/api/properties/${id}`],
    enabled: !!id,
  });

  const { data: properties } = useQuery<Property[]>({
    queryKey: ["/api/properties"],
  });

  const form = useForm<InsertProperty>({
    resolver: zodResolver(insertPropertySchema),
    defaultValues: property || {
      name: "",
      price: 0,
      discountPrice: null,
      location: "",
      area: 0,
      bedrooms: 1,
      bathrooms: 1,
      description: "",
      images: [],
      propertyType: "apartment",
      offerDetails: [],
      highlights: [],
      possessionDate: new Date(),
      completionPercentage: 0,
      floorsCompleted: 0,
      buildingFeatures: [],
      amenities: [],
      legalDocuments: [],
      googleMapsLink: "",
      similarPropertyIds: [],
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertProperty) => {
      const res = await apiRequest(
        id ? "PATCH" : "POST",
        id ? `/api/properties/${id}` : "/api/properties",
        data
      );
      if (!res.ok) throw new Error("Failed to save property");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/properties"] });
      toast({
        title: `Property ${id ? "updated" : "created"} successfully`,
      });
      setLocation("/properties");
    },
    onError: () => {
      toast({
        title: "Failed to save property",
        variant: "destructive",
      });
    },
  });

  const addField = (fieldName: keyof InsertProperty) => {
    const currentFields = form.getValues(fieldName) as any[];
    const newField = {
      icon: "Home",
      title: "",
      description: "",
      ...(fieldName === "legalDocuments"
        ? {
            driveLink: "",
            status: "pending",
          }
        : {}),
    };
    form.setValue(fieldName, [...currentFields, newField]);
  };

  const removeField = (fieldName: keyof InsertProperty, index: number) => {
    const currentFields = form.getValues(fieldName) as any[];
    form.setValue(fieldName, currentFields.filter((_, i) => i !== index));
  };

  const updateField = (
    fieldName: keyof InsertProperty,
    index: number,
    key: string,
    value: string
  ) => {
    const currentFields = form.getValues(fieldName) as any[];
    const updatedFields = currentFields.map((field, i) =>
      i === index ? { ...field, [key]: value } : field
    );
    form.setValue(fieldName, updatedFields);
  };

  if (id && isLoading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          {isViewMode ? "View Property" : isEditMode ? "Edit Property" : "Add Property"}
        </h1>
        {isViewMode && (
          <Button onClick={() => setLocation(`/properties/${id}/edit`)}>
            <Pencil className="w-4 h-4 mr-2" />
            Edit Property
          </Button>
        )}
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => mutation.mutate(data))}
          className="space-y-6"
        >
          {/* Basic Details */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Details</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Property Name</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={isViewMode} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="propertyType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Property Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled={isViewMode}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="apartment">Apartment</SelectItem>
                          <SelectItem value="house">House</SelectItem>
                          <SelectItem value="villa">Villa</SelectItem>
                          <SelectItem value="penthouse">Penthouse</SelectItem>
                          <SelectItem value="plot">Plot</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
                          disabled={isViewMode}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="discountPrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Discount Price (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
                          disabled={isViewMode}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={isViewMode} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="area"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Area (sqft)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
                          disabled={isViewMode}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bedrooms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bedrooms</FormLabel>
                      <Select
                        onValueChange={(value) => field.onChange(parseInt(value, 10))}
                        defaultValue={field.value.toString()}
                        disabled={isViewMode}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select bedrooms" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bathrooms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bathrooms</FormLabel>
                      <Select
                        onValueChange={(value) => field.onChange(parseInt(value, 10))}
                        defaultValue={field.value.toString()}
                        disabled={isViewMode}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select bathrooms" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[1, 2, 3, 4, 5].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* Images */}
          <Card>
            <CardHeader>
              <CardTitle>Images</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="images"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Instagram Image Links</FormLabel>
                    <FormControl>
                      <div className="space-y-2">
                        {field.value.map((url, index) => (
                          <div key={index} className="flex gap-2">
                            <Input
                              value={url}
                              onChange={(e) => {
                                const newUrls = [...field.value];
                                newUrls[index] = e.target.value;
                                field.onChange(newUrls);
                              }}
                              placeholder="Instagram image URL"
                              disabled={isViewMode}
                            />
                            <Button
                              type="button"
                              variant="outline"
                              size="icon"
                              onClick={() => {
                                field.onChange(field.value.filter((_, i) => i !== index));
                              }}
                              disabled={isViewMode}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                        {!isViewMode && (
                          <Button
                            type="button"
                            variant="outline"
                            className="w-full"
                            onClick={() => {
                              field.onChange([...field.value, ""]);
                            }}
                          >
                            <Plus className="h-4 w-4 mr-2" />
                            Add Image
                          </Button>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Description */}
          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Property Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} className="min-h-[200px]" disabled={isViewMode} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Highlights */}
          <Card>
            <CardHeader>
              <CardTitle>Property Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="highlights"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Highlights</FormLabel>
                    <FormControl>
                      <DynamicFieldArray
                        fields={field.value}
                        onAdd={() => addField("highlights")}
                        onRemove={(index) => removeField("highlights", index)}
                        onFieldChange={(index, key, value) =>
                          updateField("highlights", index, key, value)
                        }
                        includeIcon
                        iconCategory="highlights"
                        disabled={isViewMode}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Construction Status */}
          <Card>
            <CardHeader>
              <CardTitle>Construction Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="possessionDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Possession Date</FormLabel>
                    <FormControl>
                      <Calendar
                        mode="single"
                        selected={new Date(field.value)}
                        onSelect={(date) => field.onChange(date)}
                        className="rounded-md border"
                        disabled={isViewMode}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="completionPercentage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Completion Percentage</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="0"
                        max="100"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
                        disabled={isViewMode}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="floorsCompleted"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Floors Completed</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        min="0"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
                        disabled={isViewMode}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Features & Amenities */}
          <Card>
            <CardHeader>
              <CardTitle>Features & Amenities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="buildingFeatures"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Building Features</FormLabel>
                    <FormControl>
                      <DynamicFieldArray
                        fields={field.value}
                        onAdd={() => addField("buildingFeatures")}
                        onRemove={(index) => removeField("buildingFeatures", index)}
                        onFieldChange={(index, key, value) =>
                          updateField("buildingFeatures", index, key, value)
                        }
                        includeIcon
                        iconCategory="features"
                        disabled={isViewMode}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="amenities"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amenities</FormLabel>
                    <FormControl>
                      <DynamicFieldArray
                        fields={field.value}
                        onAdd={() => addField("amenities")}
                        onRemove={(index) => removeField("amenities", index)}
                        onFieldChange={(index, key, value) =>
                          updateField("amenities", index, key, value)
                        }
                        includeIcon
                        iconCategory="amenities"
                        disabled={isViewMode}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Legal Documents */}
          <Card>
            <CardHeader>
              <CardTitle>Legal Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="legalDocuments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Legal Documents</FormLabel>
                    <FormControl>
                      <DynamicFieldArray
                        fields={field.value}
                        onAdd={() => addField("legalDocuments")}
                        onRemove={(index) => removeField("legalDocuments", index)}
                        onFieldChange={(index, key, value) =>
                          updateField("legalDocuments", index, key, value)
                        }
                        includeIcon
                        includeDriveLink
                        includeStatus
                        iconCategory="documents"
                        disabled={isViewMode}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>

          {/* Location & Similar Properties */}
          <Card>
            <CardHeader>
              <CardTitle>Location & Similar Properties</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="googleMapsLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Google Maps Link</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="https://maps.google.com/..."
                        disabled={isViewMode}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="similarPropertyIds"
                render={({ field }) => {
                  const selectedValues = React.useMemo(() => {
                    return Array.isArray(field.value)
                      ? field.value.map(String)
                      : [];
                  }, [field.value]);

                  return (
                    <FormItem>
                      <FormLabel>Similar Properties</FormLabel>
                      <FormControl>
                        <Select
                          multiple
                          value={selectedValues}
                          onValueChange={(values) => {
                            const valuesArray = Array.isArray(values)
                              ? values
                              : [values];
                            const newVal = valuesArray.map(Number);
                            if (JSON.stringify(newVal) !== JSON.stringify(field.value)) {
                              field.onChange(newVal);
                            }
                          }}
                          disabled={isViewMode}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select similar properties" />
                          </SelectTrigger>
                          <SelectContent>
                            {properties
                              ?.filter((p) => p.id !== parseInt(id as string, 10))
                              .map((property) => (
                                <SelectItem key={property.id} value={String(property.id)}>
                                  {property.name} - ₹{property.price.toLocaleString()}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </CardContent>
          </Card>

          {!isViewMode && (
            <div className="flex justify-end gap-4">
              <Button type="button" variant="outline" onClick={() => setLocation("/properties")}>
                Cancel
              </Button>
              <Button type="submit" disabled={mutation.isPending}>
                {mutation.isPending ? "Saving..." : "Save Property"}
              </Button>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}

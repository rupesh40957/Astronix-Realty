import { pgTable, text, serial, integer, boolean, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  role: text("role", { enum: ["admin", "editor", "viewer"] }).notNull(),
  firebaseId: text("firebase_id").notNull().unique()
});

export const properties = pgTable("properties", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  price: integer("price").notNull(),
  discountPrice: integer("discount_price"),
  location: text("location").notNull(),
  area: integer("area").notNull(),
  bedrooms: integer("bedrooms").notNull(),
  bathrooms: integer("bathrooms").notNull(),
  description: text("description").notNull(),
  images: text("images").array().notNull(),
  propertyType: text("property_type", {
    enum: ["apartment", "house", "villa", "penthouse", "plot"]
  }).notNull(),
  offerDetails: text("offer_details").array(),
  highlights: jsonb("highlights").$type<Array<{
    icon: string;
    title: string;
    description: string;
  }>>().notNull(),
  possessionDate: timestamp("possession_date").notNull(),
  completionPercentage: integer("completion_percentage").notNull(),
  floorsCompleted: integer("floors_completed").notNull(),
  buildingFeatures: jsonb("building_features").$type<Array<{
    icon: string;
    title: string;
    description: string;
  }>>().notNull(),
  amenities: jsonb("amenities").$type<Array<{
    icon: string;
    title: string;
    description: string;
  }>>().notNull(),
  legalDocuments: jsonb("legal_documents").$type<Array<{
    icon: string;
    title: string;
    description: string;
    driveLink: string;
    status: string;
  }>>().notNull(),
  googleMapsLink: text("google_maps_link").notNull(),
  similarPropertyIds: integer("similar_property_ids").array()
});

export const leads = pgTable("leads", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  propertyId: integer("property_id").notNull(),
  status: text("status", { enum: ["new", "contacted", "interested", "closed"] }).notNull(),
  notes: text("notes"),
  createdAt: timestamp("created_at").notNull().defaultNow()
});

export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  category: text("category", {
    enum: ["buying-tips", "real-estate-trends", "interior-design", "legal-tips"]
  }).notNull(),
  description: text("description").notNull(),
  content: jsonb("content").$type<Array<{
    type: "text" | "image";
    content: string;
  }>>().notNull(),
  images: text("images").array().notNull(),
  author: text("author").notNull(),
  publishDate: timestamp("publish_date").notNull(),
  socialLinks: jsonb("social_links").$type<{
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  }>().notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow()
});

export const insertPropertySchema = createInsertSchema(properties).omit({ id: true });
export const insertLeadSchema = createInsertSchema(leads).omit({ id: true, createdAt: true });
export const insertUserSchema = createInsertSchema(users).omit({ id: true });

export const insertBlogSchema = createInsertSchema(blogs).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  slug: true
}).extend({
  title: z.string().min(1, "Title is required").max(200, "Title is too long"),
  description: z.string().min(1, "Description is required").max(500, "Description is too long"),
  content: z.array(z.object({
    type: z.enum(["text", "image"]),
    content: z.string()
  })).min(1, "Content is required"),
  images: z.array(z.string().url("Must be a valid URL")).min(1, "At least one image is required"),
  socialLinks: z.object({
    facebook: z.string().url("Must be a valid URL").optional(),
    twitter: z.string().url("Must be a valid URL").optional(),
    linkedin: z.string().url("Must be a valid URL").optional(),
    instagram: z.string().url("Must be a valid URL").optional()
  })
});

export type InsertProperty = z.infer<typeof insertPropertySchema>;
export type InsertLead = z.infer<typeof insertLeadSchema>;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type InsertBlog = z.infer<typeof insertBlogSchema>;

export type Property = typeof properties.$inferSelect;
export type Lead = typeof leads.$inferSelect;
export type User = typeof users.$inferSelect;
export type Blog = typeof blogs.$inferSelect;
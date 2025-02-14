const mongoose = require("mongoose");

// ---------------------
// Property Schemas
// ---------------------

// Schema for Amenities, Highlights, and similar nested fields
const amenitySchema = new mongoose.Schema(
  {
    titles: { type: String },
    description: { type: String },
  },
  { _id: false }
);

const propertyHighlightSchema = new mongoose.Schema(
  {
    titles: { type: String },
    description: { type: String },
  },
  { _id: false }
);

// Note: Construction status data mein key names thode ambiguous hain.
// Yahan hum dono fields include kar dete hain. Aap apne data ke hisaab se adjust kar sakte ho.
const constructionStatusSchema = new mongoose.Schema(
  {
    positiondate: { type: String }, // Agar available hai
    titles: { type: String }, // Agar positiondate nahi, toh titles ho sakta hai
    description: { type: String },
  },
  { _id: false }
);

const buildingFeatureSchema = new mongoose.Schema(
  {
    titles: { type: String },
    percentage: { type: String },
    months: { type: String },
    floorsDone: { type: String },
  },
  { _id: false }
);

const verifiedDocumentSchema = new mongoose.Schema(
  {
    titles: { type: String },
    description: { type: String },
    googledrivelink: { type: String },
  },
  { _id: false }
);

const legalDetailSchema = new mongoose.Schema(
  {
    titles: { type: String },
    description: { type: String },
    verifiedDocuments: [verifiedDocumentSchema],
  },
  { _id: false }
);

// Main Property Schema
const propertySchema = new mongoose.Schema(
  {
    projectType: { type: String },
    propertyType: { type: String },
    imagelink: [{ type: String }],
    videolink: [{ type: String }],
    propertyname: { type: String },
    price: { type: String },
    discountprice: { type: String },
    location: { type: String },
    areasize: { type: String },
    bedroomnumber: { type: String },
    bathroomnumber: { type: String },
    aminities: [amenitySchema],
    description: { type: String },
    propertyHighlights: [propertyHighlightSchema],
    constructionStatus: [constructionStatusSchema],
    buildingFeatures: [buildingFeatureSchema],
    legalDetails: [legalDetailSchema],
  },
  { timestamps: true }
);

// ---------------------
// Blog Schemas
// ---------------------

const tableOfContentsSchema = new mongoose.Schema(
  {
    id: { type: String },
    title: { type: String },
    link: { type: String },
  },
  { _id: false }
);

const relatedPostSchema = new mongoose.Schema(
  {
    id: { type: String },
    title: { type: String },
    link: { type: String },
    image: { type: String },
  },
  { _id: false }
);

const socialMediaSchema = new mongoose.Schema(
  {
    facebook: { type: String },
    twitter: { type: String },
    linkedin: { type: String },
    instagram: { type: String },
  },
  { _id: false }
);

// Main Blog Schema
const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String },
    excerpt: { type: String },
    content: { type: String },
    category: { type: String },
    tags: [{ type: String }],
    image: { type: String },
    status: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date },
    tableOfContents: [tableOfContentsSchema],
    relatedPosts: [relatedPostSchema],
    socialMedia: socialMediaSchema,
  },
  { timestamps: true }
);

// ---------------------
// Models
// ---------------------

const Property = mongoose.model("Property", propertySchema);
const Blog = mongoose.model("Blog", blogSchema);

module.exports = { Property, Blog };

import React from 'react'
import Hero from "@/components/Home/hero"
import USPHighlights from "@/components/Home/usp-highlights"
import FeaturedProperties from "@/components/Home/featured-properties"
import { PropertyCategories } from "@/components/Home/property-categories"
import Testimonials from "@/components/Home/testimonials"
import LocationSearch from "@/components/Home/location-search"
import SpecialOffers from "@/components/Home/special-offers"
import CTASection from "@/components/Home/cta-section"
import BlogSection from "@/components/Home/blog-section"
import VirtualTourSection from "@/components/Home/virtual-tour-section"
import MortgageCalculator from "@/components/Home/mortgage-calculator"

function page() {
  return (
   <>
   
   <Hero />
        <USPHighlights />
        <FeaturedProperties />
        <PropertyCategories />
        <VirtualTourSection />
        <Testimonials />
        {/* <LocationSearch /> */}
        <MortgageCalculator />
        <SpecialOffers />
        <CTASection />
        <BlogSection />
   </>
  )
}

export default page
"use client";

import { HeroSection } from "@/components/HeroSection"
import { ServicesSection } from "@/components/ServicesSection"
import { FeaturedSection } from "@/components/FeaturedSection"
import { BookingCTA } from "@/components/BookingCTA"
import { TestimonialsSection } from "@/components/TestimonialsSection"

// SEO metadata is handled in layout.tsx for the home page

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <FeaturedSection />
      <BookingCTA />
      <TestimonialsSection />
    </div>
  )
}


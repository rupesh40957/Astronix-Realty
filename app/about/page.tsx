import Header from "@/components/about/Header"
import AboutHero from "@/components/about/AboutHero"
import OurStory from "@/components/about/OurStory"
import WhyChooseUs from "@/components/about/WhyChooseUs"
import OurTeam from "@/components/about/OurTeam"
import Testimonials from "@/components/about/Testimonials"
import OurVision from "@/components/about/OurVision"
import CallToAction from "@/components/about/CallToAction"
import OurAchievements from "@/components/about/OurAchievements"
import OurProcess from "@/components/about/OurProcess"
import FAQ from "@/components/about/FAQ"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <AboutHero />
        <OurStory />
        <OurAchievements />
        <WhyChooseUs />
        <OurProcess />
        <OurTeam />
        <Testimonials />
        <OurVision />
        <FAQ />
        <CallToAction />
      </main>
    </div>
  )
}


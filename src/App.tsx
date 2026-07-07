import { Navbar } from "@/components/sections/Navbar"
import { Hero } from "@/components/sections/Hero"
import { QuickMenu } from "@/components/sections/QuickMenu"
import { About } from "@/components/sections/About"
import { WhyChoose } from "@/components/sections/WhyChoose"
import { Programs } from "@/components/sections/Programs"
import { LearningMethod } from "@/components/sections/LearningMethod"
import { StudentJourney } from "@/components/sections/StudentJourney"
import { Achievements } from "@/components/sections/Achievements"
import { Gallery } from "@/components/sections/Gallery"
import { Testimonials } from "@/components/sections/Testimonials"
import { ScheduleFees } from "@/components/sections/ScheduleFees"
import { Location } from "@/components/sections/Location"
import { FAQ } from "@/components/sections/FAQ"
import { FinalCTA } from "@/components/sections/FinalCTA"
import { Footer } from "@/components/sections/Footer"

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* <Hero /> */}
      <QuickMenu />
      {/* <About /> */}
      <WhyChoose />
      <Programs />
      <LearningMethod />
      <StudentJourney />
      {/* <Achievements /> */}
      <Gallery />
      <Testimonials />
      <ScheduleFees />
      <Location />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App

import { lazy, Suspense } from "react"
import { Navbar } from "@/components/sections/Navbar"
import { Banner } from "@/components/sections/Banner"
import { QuickMenu } from "@/components/sections/QuickMenu"
import { WhyChoose } from "@/components/sections/WhyChoose"
import { Programs } from "@/components/sections/Programs"
import { FloatingNav } from "@/components/sections/FloatingNav"

// Lazy load below-fold sections — only parsed when scrolled into view
const LearningMethod = lazy(() => import("@/components/sections/LearningMethod").then(m => ({ default: m.LearningMethod })))
const StudentJourney = lazy(() => import("@/components/sections/StudentJourney").then(m => ({ default: m.StudentJourney })))
const Teachers = lazy(() => import("@/components/sections/Teachers").then(m => ({ default: m.Teachers })))
const Students = lazy(() => import("@/components/sections/Students").then(m => ({ default: m.Students })))
const Gallery = lazy(() => import("@/components/sections/Gallery").then(m => ({ default: m.Gallery })))
const Testimonials = lazy(() => import("@/components/sections/Testimonials").then(m => ({ default: m.Testimonials })))
const ScheduleFees = lazy(() => import("@/components/sections/ScheduleFees").then(m => ({ default: m.ScheduleFees })))
const Location = lazy(() => import("@/components/sections/Location").then(m => ({ default: m.Location })))
const FAQ = lazy(() => import("@/components/sections/FAQ").then(m => ({ default: m.FAQ })))
const SocialMedia = lazy(() => import("@/components/sections/SocialMedia").then(m => ({ default: m.SocialMedia })))
const FinalCTA = lazy(() => import("@/components/sections/FinalCTA").then(m => ({ default: m.FinalCTA })))
const Footer = lazy(() => import("@/components/sections/Footer").then(m => ({ default: m.Footer })))

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <FloatingNav />
      <Banner />
      <QuickMenu />
      {/* <About /> */}
      <WhyChoose />
      <Programs />
      <Suspense fallback={null}>
        <LearningMethod />
        <StudentJourney />
        <Teachers />
        <Students />
        {/* <Achievements /> */}
        <Gallery />
        <Testimonials />
        <ScheduleFees />
        <Location />
        <FAQ />
        <SocialMedia />
        <FinalCTA />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App

import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import EpicMoments from "@/components/epic-moments"

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <AboutSection />
      <EpicMoments />
    </div>
  )
}


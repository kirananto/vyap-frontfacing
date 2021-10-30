import * as React from "react"
import BenefitsSection from "../HomePage/BenefitsSection"
import FooterSection from "../HomePage/FooterSection"
import HeroLanding from "../HomePage/HeroLanding"
import TestimonalSection from "../HomePage/TestimonalSection"

// markup
const IndexPage = () => {
  return (
    <main className="bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50">
      <div className="w-screen">
        <HeroLanding />
        <BenefitsSection />
        <TestimonalSection />
        <FooterSection />
      </div>
    </main>
  )
}

export default IndexPage

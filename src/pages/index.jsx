import * as React from "react"
import Seo from "../seo"
import BenefitsSection from "../HomePage/BenefitsSection"
import FooterSection from "../HomePage/FooterSection"
import HeroLanding from "../HomePage/HeroLanding"
import Product from "../HomePage/Product"
import TestimonalSection from "../HomePage/TestimonalSection"

// markup
const IndexPage = () => {
  return (
    <main className="bg-gradient-to-r from-indigo-50 via-blue-50 to-purple-50">
      <Seo  title="Vyap | Helping wholesalers reach all their retailers in one place" />
      <div className="w-screen">
        <HeroLanding />
        <BenefitsSection />
         <Product />
        <TestimonalSection />
        <FooterSection />
      </div>
    </main>
  )
}

export default IndexPage

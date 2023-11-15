import React from 'react'
import FirstSection from './FirstSection/page'
import SecondSection from './SecondSection/page'
import Footer from './footer/page'
import Navbar from './Navbar/navbar'

function PricingPage() {
  return (
    <div>
      <Navbar />
      <FirstSection />
      <SecondSection />
      <Footer />
    </div>
  )
}

export default PricingPage
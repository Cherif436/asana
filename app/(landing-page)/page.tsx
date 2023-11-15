import React from 'react'
import Navbar from './Navbar/navbar'
import Logo from './Navbar/_components/logo'
import ActionButtons from './Navbar/_components/button'
import FirstSection from './FirstSection/page'
import SecondSection from './SecondSection/page'
import ThirdSection from './ThirdSection/page'
import FourthSection from './FourthSection/page'
import FifthSection from './FifthSection/page'
import SixthSection from './SixthSection/page'
import SeventhSection from './SeventhSection/page'
import EightSection from './EightSection/page'
import Footer from './Footer/page'

const LandingPage = () => {
  return (
    <div>
      <div>
        <Navbar />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection />
        <EightSection />
        <Footer />
      </div>
    </div>
  )
}

export default LandingPage
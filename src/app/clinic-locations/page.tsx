import ClinicLocations from '@/components/ClinicLocations'
import Footer from '@/sections/Footer/Footer'
import React from 'react'
import { FooterLinksMobile } from '@/app/api/footerDataMob'
import { FooterLinks } from '@/app/api/footerData'
import Navbar from '@/sections/Nav/Navbar'

const page = () => {
  return (
    <div>
        <Navbar />
        <ClinicLocations />
        <Footer phoneNumber="+91-73 5808 1732" FooterLinksMobile={FooterLinksMobile} FooterLinks={FooterLinks} />
    </div>
  )
}

export default page

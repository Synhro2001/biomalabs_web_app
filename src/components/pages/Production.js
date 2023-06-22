import React from 'react'

import AboutUsSection from '../Sections/AboutUsSections/AboutUsSection'
import Footer from '../Footer/Footer';
import Cards from '../Cards/Cards';
import AboutUsProductionSec from '../Sections/AboutUsProductionSections/AboutUsProductionSec';


function Production() {
  return (
    <>
        <AboutUsSection/>
        <AboutUsProductionSec/>
        <Cards/>
        <Footer/>
    </>
  )
}

export default Production
import React from 'react'
import '../../App.css';
import HeaderSection from '../Sections/HeaderSections/HeaderSection';
import Cards from '../Cards/Cards';

import Footer from '../Footer/Footer';

function Home() {
  return (
    <>
      <HeaderSection/> 
      <Cards/>
      <Footer/>
    </>
  )
}

export default Home
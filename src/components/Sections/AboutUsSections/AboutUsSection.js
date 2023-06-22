import React from 'react'

import { Link } from "react-router-dom";

import "./AboutUsSection.scss";


function AboutUsSection() {
  return (
    <>
        <div className='biomalabs__about-us gradient__bg section__padding'>
          <div className="biomalabs__about-us__content">
          <h1 className='gradient__text'>About BiomaLabs</h1>
          <ul className="biomalabs__about-us__nav"> 
            <li>
              <Link
                to='/about-us' 
                className='nav-links'
              >About Us
              </Link>
            </li>
            <li>
              <Link
                to='/mission' 
                className='nav-links'
              >Mission
              </Link>
            </li>
            <li>
              <Link
                to='/production' 
                className='nav-links'
              >
              Production
              </Link>
            </li>
            <li>
              <Link
                to='/quality-standarts' 
                className='nav-links'
              >Quality standarts
              </Link>
            </li>
          </ul>
          <p>BiomaLabs is a European scientific and research 
          pharmaceutical and biotechnology company which cooperates
          with manufacture site in India and specializing in the development 
          and manufacture of products, intended to improve the quality of life. 
          The main activity of the company is the production of pharmacological substances. 
          </p>
          </div>
          <div className="biomalabs__about-us-image">
            <img src='images/header_about-us.jpg' alt='HeaderAboutus' />
          </div>
      </div>
    </>
  )
}

export default AboutUsSection
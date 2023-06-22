import { Button } from '../../Button/Button'
import React from 'react'
import './HeaderSection.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'

function HeaderSection() {
  return (
    <div className='biomalabs__header gradient__bg section__padding'>
      <div className="biomalabs__header-content">
        <h1 className="gradient__text">BiomaLabs- a good health is the most important for all of us! </h1>
        <p>
          BiomaLabs is a scientific and research pharmaceutical
          company specializing in the development and manufacture of products,
          intended to improve the quality of life.
        </p>
        <div className='biomalabs__header-btns'>
          <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            path='/'
          >
          VIEW PRODUCT
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            path='/contacts'

          >
          
            BECOME A PARTNER <FontAwesomeIcon icon={faHandshake}/>
          </Button>
        </div>
      </div>
      <div className="biomalabs__header-image">
        <img src='images/header.jpg' alt='header' />
      </div>
      
    </div>
  );
}


export default HeaderSection;

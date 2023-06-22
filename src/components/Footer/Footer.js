import React from 'react';
import './Footer.scss';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDna, faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube, faTelegram } from '@fortawesome/free-brands-svg-icons'


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Want to be BiomaLabs products Reseller?
        </p>
        <p className='footer-subscription-text'>
            Please write your email to discuss collaboration details
        </p>
        <div className='input-areas'>
        <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            path='/contacts'

          >
            BECOME A PARTNER <FontAwesomeIcon icon={faHandshake}/>
          </Button>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Products</h2>
            <Link to='/'>Injectable</Link>
            <Link to='/'>Oral tablets</Link>
            <Link to='/'>Erectile</Link>
            <Link to='/'>PCT</Link>
            <Link to='/'>Peptides</Link>
            <Link to='/'>HGH</Link>
          </div>
          <div className='footer-link-items'>
            <h2>About us</h2>
            <Link to='/about-us'>About us</Link>
            <Link to='/mission'>Mission</Link>
            <Link to='/production'>Production</Link>
            <Link to='/quality-standarts'>Quality standarts</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Partnership</h2>
            <Link to='/contacts'>Contact</Link>
            <Link to='/contacts'>Instagram</Link>
            <Link to='/contacts'>Facebook</Link>
            <Link to='/contacts'>Telegram</Link>
           
          </div>
          <div className='footer-link-items'>
            <h2>Biomalabs protection</h2>
            <Link to='/product-verification'>Product verification</Link>
            <Link to='/product-verification'>Product protection</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
             BiomaLabs <FontAwesomeIcon icon={faDna} />
            
            </Link>
          </div>
          <small className='website-rights'>BiomaLabs © 2022</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
               <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
               <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Telegram'
            >
               <FontAwesomeIcon icon={faTelegram} />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
               <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
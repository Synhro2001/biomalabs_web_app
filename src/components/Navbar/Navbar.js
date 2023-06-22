import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDna, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../Button/Button';
import './Navbar.scss'


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  useEffect(() => {
    showButton();
  }, []); 

  window.addEventListener('resize', showButton);
 
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
            BiomaLabs <FontAwesomeIcon icon={faDna} onClick={closeMobileMenu} />
          </Link>
          <div className='menu-icon ' onClick={handleClick}>
            <FontAwesomeIcon style={{color: "white"}}  icon={click ? faTimes : faBars}/>
          </div>
          <ul className={click ? 'nav-menu active': 'nav-menu'} id='sideBar' >
            <li className='nav-item'>
              <Link 
                to='/' 
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className='nav-item'>
              <Link 
                to='/product-verification' 
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Produt verification
              </Link>
            </li>
            <li className='nav-item'>
              <Link 
                to='/contacts' 
                className='nav-links' 
                onClick={closeMobileMenu}
              >
                Contacts
              </Link>
            </li>
            <li className='nav-item'>
              <Link 
                to='/about-us' 
                className='nav-links' 
                onClick={closeMobileMenu}
              >
              
                About us
              </Link>
            </li>
          </ul>
          {button && <Button  path='/product-verification' buttonStyle='btn--outline'>Product verification</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
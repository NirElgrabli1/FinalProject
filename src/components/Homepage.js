import React, {useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Button } from './Button';
import './Homepage.css';


function Homepage() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
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
            <Link to='/Homepage' className='navbar-logo' onClick={closeMobileMenu}>
          <i class="fab fa-invision"></i> <i class="fas fa-tshirt"></i>MODEST IN STYLE <i class="fas fa-tshirt"></i>  <i class="fab fa-invision"></i>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/Homepage' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/SoonWillBe'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/Product'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
  
              <li>
                <Link
                  to='/Login'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>
              <Link to= '/Login'
              onClick={closeMobileMenu}>
              Login
              </Link>
              </Button>}
          </div>
        </nav>
      </>
    );
  }
  
export default Homepage

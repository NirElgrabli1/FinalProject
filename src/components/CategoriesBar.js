import React, {useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { Button } from './Button';
import './CategoriesBar.css';


function CategoriesBar() {

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
        <nav className='navbar2'>
          <div className='navbar-container2'>
            <Link to='/' className='navbar-logo2' onClick={closeMobileMenu}>
          <i class="fab fa-invision"></i> <i class="fas fa-tshirt"></i>Categories <i class="fas fa-tshirt"></i>  <i class="fab fa-invision"></i>
            </Link>
            <div className='menu-icon2' onClick={handleClick}>
              <i className={click ? 'fas fa-times2' : 'fas fa-bars2'} />
            </div>
            <ul className={click ? 'nav-menu active2' : 'nav-menu2'}>
              <li className='nav-item2'>
                <Link to='/' 
                className='nav-links2' 
                onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item2'>
                <Link
                  to='/services2'
                  className='nav-links2'
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li >
                <Link
                  to='/products'
                  className='nav-links-mobile3'
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
  
              <li>
                <Link
                  to='/sign-up'
                  className='nav-links-mobile2'
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          </div>
        </nav>
      </>
    );
  }
  
export default CategoriesBar

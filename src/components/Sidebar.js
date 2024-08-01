import React, {useState, useEffect } from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import  styles from './Sidebar.css';
import { IconContext } from 'react-icons';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);
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
      <IconContext.Provider value={{ color: '#0f0a0a' }}>
        <div className='navbars'>
          <Link to='#' className='menu-barss'>
            <FaIcons.FaBars onClick={showSidebar}  />
          </Link>
          <div className='menu-textsa' >
          <Link to='/Homepage' className='navbar-logo5' onClick={closeMobileMenu}>
          <i class="fab fa-invision"></i> <i class="fas fa-tshirt"></i>MODEST IN STYLE <i class="fas fa-tshirt"></i>  <i class="fab fa-invision"></i>
            </Link>
            </div>
          
        </div>
        <nav className={sidebar ? 'nav-menus active' : 'nav-menus'}>
          <ul className='nav-menus-items' onClick={showSidebar}>
            <li className='navbar-toggles'>
              <Link to='#' className='menu-barss'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
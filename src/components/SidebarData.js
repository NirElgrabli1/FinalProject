import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
   {
        title: 'Home',
        path: '/Homepage',
      //  icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
   },
   {
    title: 'All',
    path: '/Product',
    // icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Headdress',
    path: '/Product/Headdress',
    // icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Shirt',
    path: '/Product/Shirt',
   // icon: <IoIcons.IoIosShirt />,
    cName: 'nav-text'
  },
  {
    title: 'Skirt',
    path: '/Product/Skirt',
    // icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Dress',
    path: '/Product/Dress',
    // icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Blazer',
    path: '/Product/Blazer',
    // icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'AboutUs',
    path: '/AboutUs',
  //  icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];
import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Homepage from '../Homepage';
import Chatbox from '../Chatbox';

function Home() {
  function scrollToTop() {
    window.scrollTo(0, 0);
}

  return (
    <>
      <Homepage _active={scrollToTop}/>
      <HeroSection />
      <Cards />  
      <Footer />
      <Chatbox />
    </>
  );
}

export default Home;
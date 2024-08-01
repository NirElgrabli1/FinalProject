import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import CardItem from './CardItem.js';
import { Link } from 'react-router-dom';





function HeroSection() {
  


  return (
    <div className='hero-container'>
      
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>NEW CLOTHES WAITING FOR YOU</h1>
      <p>What are you waiting for?</p>

      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick='loadHtml("template","..\components\pages\AboutUs.html")'
        >
          <a href="/Product">GET STARTED</a>
        </Button>
        
      </div>
    </div>
  );

}

export default HeroSection;
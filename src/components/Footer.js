import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  
  function scrollToTop() {
    window.scrollTo(0, 0);
}

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Club to receive our New Products!
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
            (right now its unavalible but it will be soon)  {/* Will send email to the coustomer with the new items deals that will be up */}
        </p> 
         
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link to='/AboutUs' onClick={scrollToTop}>About Us</Link>
            <h2 to='/'>How it works</h2>
            <h2 to='/'> Testimonials</h2>
            <h2 to='/'>Careers</h2>
            <h2 to='/'>Investors</h2>
            <h2 to='/'>Terms of Service</h2>
          </div>
          <div class='footer-link-items'>
            <h2 to='/'>Contact Us</h2>
            
            <h2 to='/'>Contact</h2>
            <h2 to='/'>Support</h2>
            <h2 to='/'>Destinations</h2>
            <h2 to='/'>Sponsorships</h2>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <h2 to='/'>Submit Video</h2>
            <h2 to='/'>Ambassadors</h2>
            <h2 to='/'>Agency</h2>
            <h2 to='/'>Influencer</h2>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <i class="fab fa-invision"></i> <i class="fas fa-tshirt"></i>MODEST IN STYLE <i class="fas fa-tshirt"></i>  <i class="fab fa-invision"></i>
            </Link>
          </div>
          <small class='website-rights'>Modest in Style © 2020</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/SoonWillBe'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/SoonWillBe'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/SoonWillBe'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/SoonWillBe'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/SoonWillBe'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
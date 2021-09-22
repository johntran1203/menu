
import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
    
      
      <section class='social-media'>
        <div class='social-media-wrap'>
          
          <small class='website-rights'>RICE © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link github'
              to='https://github.com/johntran1203/menu'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </Link>
          
          
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
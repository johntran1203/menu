
import React from 'react';
import '../App.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
          <h2>RICE © 2021</h2>
            <Link
              class='social-icon-link github'
              to='https://github.com/johntran1203/menu'
              target='_blank'
              aria-label='Github' >
              <i class='fab fa-github' />
            </Link>
    </div>
  );
}

export default Footer;
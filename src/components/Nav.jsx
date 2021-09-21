import { Link } from 'react-router-dom';
// import { useState } from 'react';

function Nav() {
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
            <Link to='/' className='navbar-logo'> Home <i className = 'fa-solid fa-receipt' />
            </Link>
            
            <Link to='/new'>order</Link>
            <Link to='/order'>Menu</Link>
            <Link to='/'>Contact</Link>
            </div>
        </nav>
    )
}

export default Nav;
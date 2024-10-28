import React from 'react';
import logo from '../../../img/Logo/Logo.svg'
import { Link } from 'react-router-dom';
const Logo = () => {
    return (
        <Link to="/">
            <img src={logo} alt="Movie's Cove logo" className='logo' />
        </Link>
    );
};

export default Logo;
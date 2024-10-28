import React from 'react';
import logo from '../../img/Logo/Logo.svg'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__line' />
            <div className='footer__content'>
                <p translate="no">© Movie's Cove <span className='footer__span'> `Alpaca_with_coffee enterprise`</span></p>
                <img src={logo} alt="logo" className='footer__logo' />
            </div>
        </footer>
    );
};

export default Footer;
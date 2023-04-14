import React from 'react';
import './footer.css';
import LogoFooter from '@/assets/images/LOGO_footer.svg'



// Footer principal
const Footer = () => {
    return (
        <footer>
            <img src={LogoFooter} className="logo_footer" />
            <span className="copyright">© 2020 Kasa. All rights reserved</span>
        </footer>
    );
};

export default Footer;
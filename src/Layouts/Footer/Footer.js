import React from 'react';
import './footer.css';
import LogoFooter from '@/assets/images/LOGO_footer.svg'



// Footer principal
const Footer = () => {
    return (
        <footer>
            <div className="container_content">
                <img src={LogoFooter} className="logo_footer" />
                <span className="copyright">© 2020 Kasa. All rights reserved</span>
            </div>
        </footer>
    );
};

export default Footer;
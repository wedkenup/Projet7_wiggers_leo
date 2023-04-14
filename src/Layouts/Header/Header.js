import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import Logo from '@/assets/images/LOGO.svg';

// Header principal
const Header = () => {
    return (
        <header>
            <nav className="nav_container">
                <img src={Logo} className="logo" />
                <ul>
                    <li><NavLink to="/home">Accueil</NavLink></li>
                    <li><NavLink to="/about">A Propos</NavLink></li>
                </ul>
            </nav>
        </header >
    );
};

export default Header;
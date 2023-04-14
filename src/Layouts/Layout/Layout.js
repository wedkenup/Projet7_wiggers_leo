import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/Layouts/Header/Header';
import Footer from '@/Layouts/Footer/Footer';

import '@/Layouts/Layout/layout.css';
// 
const Layout = () => {
    return (
        <div className="Layout">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
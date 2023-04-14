import React from 'react';
import './home.css';
import Banner_home from '@/assets/images/banners/banner_home.jpg';
import Banner_top from '@/components/Gallery/banner_top.js';
import Grid_Cards_3x2 from '@/components/Grid/grid_cards_3x2.js';



const Home = () => {
    return (
        <section className="Home">
            <Banner_top image={Banner_home} text="fezf" />
            <Grid_Cards_3x2 />
        </section>
    );
};

export default Home;
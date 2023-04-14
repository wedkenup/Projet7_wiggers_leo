import React from 'react';
import './about.css';
import Banner_about from '@/assets/images/banners/banner_about.jpg';
import Grid_Template_1x4 from '@/components/Grid/grid_template_1x4.js';
import Banner_top from '@/components/Gallery/banner_top.js';

// Page A propos
const About = () => {
    return (
        <section className="About">
            <Banner_top image={Banner_about} />
            <article className="about_description">
                <Grid_Template_1x4 />
            </article>
        </section>
    );
};

export default About;
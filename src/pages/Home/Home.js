import React from 'react';
import './home.css';
import { NavLink } from 'react-router-dom';
import Banner_home from '@/assets/images/banners/banner_home.jpg';
import Banner_top from '@/components/Banners/banner_top.js';
import Cards from '@/components/Cards/card.js';

import LogementService from "@/_services/logement.service.js"

const Home = () => {
    return (
        <section className="Home">
            <Banner_top image={Banner_home} texte="Chez vous, partout et ailleurs" page="banner_home" />
            <ul>
                {
                    LogementService.GetAllinfologement().map((logement) =>
                        <NavLink key={logement.id} to={"/logement/" + logement.id + "/#"}>
                            <Cards key={logement.id} id={logement.id} image={logement.cover} title={logement.title} />
                        </NavLink>
                    )
                }
            </ul>
        </section >
    );
};

export default Home;
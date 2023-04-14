import React from 'react';
import './grid_cards_3x2.css';
import Background_card from '@/assets/images/cards/background_uni.png';

const grid_cards_3x2 = () => {
    return (
        <section className="cards_container_parent">
            <article className="cards_container">
                <div className="card">
                    <img src={Background_card} />
                    <p>Titre de la location</p>
                </div>
                <div className="card">
                    <img src={Background_card} />
                </div>
                <div className="card">
                    <img src={Background_card} />
                </div>
                <div className="card">
                    <img src={Background_card} />
                </div>
                <div className="card">
                    <img src={Background_card} />
                </div>
                <div className="card">
                    <img src={Background_card} />
                </div>
            </article>
        </section>
    );
};

export default grid_cards_3x2;
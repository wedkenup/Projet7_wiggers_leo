import React from 'react';
import './card.css';


function Card({ id, image, title }) {
    return (
        <li className="cards_container" id={id}>
            <img className='cards_img' src={image} alt='logementttt' />
            <div className='cards_overlay'></div>
            <h3>{title}</h3>
        </li>
    );
}

export default Card;
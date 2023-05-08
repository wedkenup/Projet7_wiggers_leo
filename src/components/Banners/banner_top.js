import React from 'react';
import './banner_top.css';

const Banner_top = (props) => {
    return (
        <div className="banner" id={props.page}>
            {<img src={props.image} className="banner_image" />}
            {props.texte ? <h1 className="title_banner">{props.texte}</h1> : ""}
        </div>
    );
};

export default Banner_top;
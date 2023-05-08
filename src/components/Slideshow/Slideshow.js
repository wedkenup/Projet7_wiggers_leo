import React from 'react';
import './slideshow.css';
import { useState } from 'react';

import ArrowRight from "@/assets/images/slideshow/ArrowRight.png";
import ArrowLeft from "@/assets/images/slideshow/ArrowLeft.png";

const Slideshow = ({ slideimg }) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const previousImage = () => { setCurrentIndex((Index) => Index === 0 ? slideimg.length - 1 : Index - 1) }
    const nextImage = () => { setCurrentIndex((Index) => Index + 1 === slideimg.length ? 0 : Index + 1) }


    if (slideimg.length > 1) {
        return (
            <section className="slide_container">
                <img className="arrowLeft" src={ArrowLeft} alt="flèche gauche" onClick={() => previousImage()} />
                <div className="slider" style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}>
                    {slideimg.map((picture, index) => (
                        <div className="slide" key={index} style={{ background: `no-repeat center/cover url(${picture})` }}></div>
                    ))}
                </div>
                <img className="arrowRight" src={ArrowRight} alt="flèche droite" onClick={() => nextImage()} />
                <span className="img_number">{currentIndex + 1} / {slideimg.length}</span>
            </section>
        );
    } else {
        return (
            <section className="slide_container">
                <div className="slider" style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}>
                    {slideimg.map((picture, index) => (
                        <div className="slide" key={index} style={{ background: `no-repeat center/cover url(${picture})` }}></div>
                    ))}
                </div>
            </section>
        );
    }
};

export default Slideshow;
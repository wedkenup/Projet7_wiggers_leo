import React, { useState } from 'react';
import './dropdown.css';

import FlecheHaut from "@/assets/images/dropdown/FlecheHaut.png";
import FlecheBas from "@/assets/images/dropdown/FlecheBas.png";

function Dropdown({ title, description }) {

    const [ValueDrop, setValueDrop] = useState(false);

    const handleDrop = () => {
        setValueDrop(!ValueDrop);
    }

    return (
        <ul className='DropLi'>
            <div className='DropContainer' onClick={handleDrop}>
                <h3>{title}</h3>
                <span>
                    <img src={ValueDrop ? FlecheHaut : FlecheBas} alt='flechedrop' className='DropFleche' />
                </span>
            </div>
            {
                ValueDrop && (
                    <p className='DropDescription'>
                        {description}
                    </p>
                )
            }
        </ul>
    )
};

export default Dropdown;
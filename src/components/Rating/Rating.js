import React from 'react';
import './rating.css';

import Starred from '@/assets/images/rating/StarsRed.png';
import Stargrey from '@/assets/images/rating/StarsGrey.png';

const StarRating = ({ rating }) => {
    return (
        <div className="star-rating">
            {
                [...Array(5)].map((value, index) => {

                    if (index + 1 < rating) {
                        return (
                            <img src={Starred} alt='etoilered' className='star' key={index} />
                        )
                    } else {
                        return (
                            <img src={Stargrey} alt='etoilegrey' className='star' key={index} />
                        )
                    }
                })
            }
        </div>
    );
};
export default StarRating;
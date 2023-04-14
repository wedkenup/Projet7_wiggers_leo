import React from 'react';

const Banner_top = (props) => {

    return (
        <div className="banner">
            <img src={props.image} className="banner_image" />

        </div>
    );
};

export default Banner_top;
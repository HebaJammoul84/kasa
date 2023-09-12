import React from 'react';
import '../styles/Banner.css';
import main from '../assets/main.png';

const Banner = ({ title }) => {
    return (
        <div class="banner-container">

            <div class="banner-img">
                <img class="banner-image" src={main} alt={title} />
            </div>

            <h1 class="banner-title">{title}</h1>

        </div>

    );
};

export default Banner;
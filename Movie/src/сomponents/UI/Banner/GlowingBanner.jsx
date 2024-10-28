import React from 'react';

const GlowingBanner = ({Img, clBanner, clShadow}) => {
    return (
        <>
            <img src={Img} alt="banner" className={`glowingBanner__banner ${clBanner}`}/>
            <img src={Img} alt="banner-shadow" className={`glowingBanner__banner-shadow ${clShadow}`} />
        </>
    );
};

export default GlowingBanner;
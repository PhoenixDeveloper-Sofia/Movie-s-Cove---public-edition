import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import BannerPreviewInfo from './BannerPreviewInfo/BannerPreviewInfo';
import { useNavigate } from 'react-router-dom';

const BannerPreview = ({ id, img, name, type, genres, rating, year, children, notBacklight }) => {
    const navigate = useNavigate();
    const infoAnimation = useAnimation();
    const containerAnimation = useAnimation();

    const showInfo = () => {
        infoAnimation.start({ opacity: 1, transition: { duration: 0.3 } });
        containerAnimation.start({ zIndex: 1, scale: 1.013, transition: { duration: 0.3 } });
    }

    const hidenInfo = () => {
        infoAnimation.start({ opacity: 0, transition: { duration: 0.3 } });
        containerAnimation.start({ zIndex: 0, scale: 1, transition: { duration: 0.3 } });
    }
    return (
        <>
            <motion.div animate={containerAnimation} onClick={() => navigate(`/View/${id}`)} className="bannerPreview" >
                <div className='bannerPreview__container' onMouseLeave={hidenInfo} onMouseEnter={showInfo}>
                    {(img && img != 'null') && <img src={img} alt={`poster ${name}`} className='bannerPreview__poster' />}
                    <BannerPreviewInfo infoAnimation={infoAnimation} type={type} name={name} genres={genres} rating={rating} year={year} />
                </div>
                {!notBacklight &&
                    <motion.div animate={infoAnimation} className='bannerPreview__background' />
                }
                {children}
            </motion.div>
        </>
    );
};

export default BannerPreview;
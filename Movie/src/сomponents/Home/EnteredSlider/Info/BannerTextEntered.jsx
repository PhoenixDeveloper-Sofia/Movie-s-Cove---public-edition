import React, { useContext, useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
import {Visible} from '../../../../utils/context'
import DescriptionBar from '../../../UI/DescriptionBar/DescriptionBar';
import BorderButton from '../../../UI/Button/BorderButton';
import PlayButton from '../../../UI/Button/PlayButton';
import useTestNumbertLineInBlock from '../../../../hooks/useTestNumbertLineInBlock';
import scrollTooltip from '../../../../img/ScrollTooltip.svg';
import scrollTooltip_Animat from '../../../../animate/UI/scrollTooltip';
import ModalTrailerEntered from './ModalTrailerEntered';
import { useNavigate } from 'react-router-dom';

const BannerTextEntered = ({ movie }) => {
    const {setIsVisible} = useContext(Visible);

    const [showScroll, setShowScroll] = useState({ name: false, description: false });

    const movieName = useRef();
    const movieDescription = useRef();

    const navigate = useNavigate();

    useEffect(() => {
        let nameScroll = useTestNumbertLineInBlock(movieName.current)
        let descriptionScroll = useTestNumbertLineInBlock(movieDescription.current)
        setShowScroll({ name: nameScroll, description: descriptionScroll })
    }, [movie])

    return (
        <div className='bannerTextEntered'>

            <ModalTrailerEntered id={movie.id}/>

            <div className="bannerTextEntered__info">
                {showScroll.name === true ?
                    <div className='bannerTextEntered__scroll'>
                        <p ref={movieName} className="bannerTextEntered__title" translate='no'>{movie.name}</p>
                        <motion.img key={movie.name} variants={scrollTooltip_Animat} initial='rest' animate='animate' src={scrollTooltip} alt="Есть прокрутка" className='bannerTextEntered__scrollTooltip' />
                    </div>
                    :
                    <p ref={movieName} className="bannerTextEntered__title" translate='no'>{movie.name}</p>
                }
                <DescriptionBar year={movie.year} timeLength={movie.type === 'tv-series' ? movie.seriesLength : movie.movieLength} type={movie.type} rating={movie.rating.kp} />
                {showScroll.description === true ?
                    <div className='bannerTextEntered__scroll'>
                        <p ref={movieDescription} className="bannerTextEntered__description">
                            {movie.description}
                        </p>
                        <motion.img key={movie.description} variants={scrollTooltip_Animat} initial='rest' animate='animate' src={scrollTooltip} alt="Есть прокрутка" className='bannerTextEntered__scrollTooltip' />
                    </div>
                    :
                    <p ref={movieDescription} className="bannerTextEntered__description">
                        {movie.description}
                    </p>
                }
            </div>

            <div className="bannerTextEntered__button-container">
                <BorderButton onClick={() => setIsVisible(true)}>Трейлер</BorderButton>
                <PlayButton onClick={() => {navigate(`/View/${movie.id}`)}}> Смотреть</PlayButton>
            </div>
        </div>
    );
};

export default BannerTextEntered;
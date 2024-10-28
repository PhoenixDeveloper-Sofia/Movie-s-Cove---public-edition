import React, { useRef, useState } from 'react';
import SwiperEntered from './Swiper/SwiperEntered'
import BannerEntered from './BannerEntered';
import BannerTextEntered from './Info/BannerTextEntered';
import Loader from '../../../pages/Loader';
import { useFetchNowMovieQuery } from '../../../store/endpoints/info/kinopoiskEndpoints';
import { Visible } from '../../../utils/context'
import ErrorRout from '../../../pages/ErrorRout';

const EnteredSlider = () => {
    const { data: movie, isError, isLoading } = useFetchNowMovieQuery({  cacheTime: 30 * 60 * 1000})
    const [isVisible, setIsVisible] = useState(false);
    const [activeMovie, setActiveMovie] = useState()
    const bannerTrailers = useRef()

    const SlideChange = (movie) => {
        if ('videos' in movie && 'trailers' in movie.videos && movie.videos.trailers[0]) {
            bannerTrailers.current = movie.videos.trailers[0].url.split('https://www.youtube.com/embed/')[1]
        }
        else {
            bannerTrailers.current = 'not found'
        }
        setActiveMovie(movie)
    }

    return (
        <section className='enteredSlider'>
            {
                isLoading ?
                    <Loader />
                    :
                    isError ?
                        <ErrorRout/>
                            :
                            <Visible.Provider value={{ isVisible, setIsVisible }}>
                                <SwiperEntered SlideChange={SlideChange} movie={movie.docs} />
                                {activeMovie &&
                                    <>
                                        <BannerTextEntered movie={activeMovie} />
                                        <BannerEntered id={activeMovie.id} bannerTrailers={bannerTrailers.current} bannerImg={activeMovie.poster.url} />
                                    </>
                                }
                            </Visible.Provider>
            }
                        </section>

    );
};

            export default EnteredSlider;
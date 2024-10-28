import React, { memo, useCallback, useContext, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Keyboard, FreeMode } from 'swiper/modules';
import 'swiper/css';
import NavigateSwiperEntered from './NavigateSwiperEntered';
import { Visible } from '../../../../utils/context'

const SwiperEntered = ({ SlideChange, movie }) => {
    const { isVisible } = useContext(Visible);
    useEffect(() => {
        const swiperInstance = sliderRef.current.swiper;

        if (isVisible) {
            swiperInstance.autoplay.stop();
        } else {
            swiperInstance.autoplay.start();
        }
    }, [isVisible]);

    const activeId = useRef(movie[0]);
    const sliderRef = useRef();

    const handleSlideChange = (swiper) => {
        const activeIndex = swiper.realIndex;
        activeId.current = movie[activeIndex];
        SlideChange(activeId.current)
    };

    const NavigateClick = useCallback(
        (type) => {

            const { swiper } = sliderRef.current;
            type === "NEXT" ? swiper.slideNext() : swiper.slidePrev();
        },
        []
    );


    return (
        <div className='swiperEntered'>
            <NavigateSwiperEntered NavigateClick={NavigateClick} />
            <Swiper
                ref={sliderRef}
                slidesPerView='auto'
                breakpoints={{
                    800: {
                        slidesPerView: 5,
                        spaceBetween: 38
                    },
                    1000: {
                        spaceBetween: 38,
                        slidesPerView: 6
                    },
                    1300: {
                        spaceBetween: 38,
                        slidesPerView: 8
                    },
                    1600: {
                        spaceBetween: 38,
                        slidesPerView: 10.5
                    }
                }}
                spaceBetween= {38}
                modules={[Navigation, Autoplay, Keyboard, FreeMode]}
                loop={true}
                centeredSlides
                simulateTouch={false}
                navigation={true}
                autoplay={{delay:35000}}
                keyboard={{
                    enabled: true,
                    onlyInViewport: true,
                }}
                onSlideChange={handleSlideChange}
            >
                {movie.map(item =>
                    <SwiperSlide key={item.id} className={activeId.current.id === item.id ? ' swiperEntered__slide__active' : 'swiperEntered__slide'} style={{ background: `url(${item.poster.previewUrl})` }}></SwiperSlide>
                )}
            </Swiper>
        </div>
    );
};

export default memo(SwiperEntered);
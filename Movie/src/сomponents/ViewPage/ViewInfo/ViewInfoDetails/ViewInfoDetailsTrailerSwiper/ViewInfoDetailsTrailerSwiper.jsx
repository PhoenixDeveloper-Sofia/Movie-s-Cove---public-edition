import React, { useCallback, useEffect, useRef, useState } from 'react';
import NavigateSwiperViewInfoDetailsTrailerSwiper from './NavigateSwiperViewInfoDetailsTrailerSwiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import useExtractTrailerKey from '../../../../../hooks/useExtractTrailerKey';

const ViewInfoDetailsTrailerSwiper = ({ trailer, trailerIsLoding }) => {

    const sliderRef = useRef();
    const [video, setVideo] = useState([])
    useEffect(() => {
        try {
            if (!trailerIsLoding && trailer) {
                let trailerYOUTUBE = trailer.items.filter(item => item.site == 'YOUTUBE')

                if (trailerYOUTUBE[0].url) {
                    let key = []
                    for (let i = 0; i < trailerYOUTUBE.length; i++) {
                        key.push(useExtractTrailerKey(trailerYOUTUBE[i].url))
                    }
                    setVideo(key)
                }
                else {
                    setVideo('not found')
                }

            }
        }
        catch {
            console.log(trailer)
            setVideo('not found')
        }
    }, [trailer, trailerIsLoding])

    const NavigateClick = useCallback(
        (type) => {
            const { swiper } = sliderRef.current;
            type === "NEXT" ? swiper.slideNext() : swiper.slidePrev();
        },
        []
    );
    return (
        <div className='viewInfoDetailsTrailerSwiper'>
            {(!trailerIsLoding  && video.length > 2 || video == 'not found') &&
                < NavigateSwiperViewInfoDetailsTrailerSwiper NavigateClick={NavigateClick} />
            }
            <Swiper
                ref={sliderRef}
                slidesPerView={2}
                spaceBetween={15}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Keyboard, FreeMode, Pagination]}
                navigation={true}
                direction="vertical"
                keyboard={{
                    enabled: true,
                    onlyInViewport: true,
                }}
                className='viewInfoDetailsTrailerSwiper__swiper'
            >
                {(!trailerIsLoding && video !== 'not found' && video.length !== 0) ?
                    <>
                        {video.map((item, index) =>
                            <SwiperSlide key={index} className='viewInfoDetailsTrailerSwiper__slide'>
                                <iframe src={`https://www.youtube-nocookie.com/embed/${item}?controls=1&vq=hd1080&showinfo=0&disablekb=1&modestbranding=0&rel=0&iv_load_policy=3&start=3&playlist=${video}&loop=1&modestbranding=1`} allow="autoplay; fullscreen"></iframe>
                            </SwiperSlide>
                        )}
                        {video.length == 1 && <SwiperSlide key={1} className='viewInfoDetailsTrailerSwiper__slide'></SwiperSlide>}

                    </>
                    :
                    <>
                        <SwiperSlide key={1} className='viewInfoDetailsTrailerSwiper__slide'>тут должны</SwiperSlide>
                        <SwiperSlide key={2} className='viewInfoDetailsTrailerSwiper__slide'>быть трейлеры</SwiperSlide>
                        <SwiperSlide key={3} className='viewInfoDetailsTrailerSwiper__slide'>НО</SwiperSlide>
                        <SwiperSlide key={4} className='viewInfoDetailsTrailerSwiper__slide'>их ещё не сняли</SwiperSlide>
                    </>
                }
            </Swiper>
        </div>
    );
};

export default ViewInfoDetailsTrailerSwiper;
import React, { useEffect, useRef, useState } from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, Keyboard, FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import NavigationSwiperArrovBase from './NavigationSwiper/NavigationSwiperArrovBase';

const SwiperWrapper = ({title, children, between, group}) => {
    const [focus, setFocus] = useState(false)
    const [isVisibleNavigation, setIsVisibleNavigation] = useState({ first: true, last: false })
    const sliderRef = useRef()
    useEffect(() => {
        const { swiper } = sliderRef.current;
        if (swiper.isBeginning && swiper.isEnd) {
            setIsVisibleNavigation({
                first: true,
                last: true
            }
            )
        }
    }, [sliderRef])

    const NavigateClick = (type) => {
            const { swiper } = sliderRef.current;
            type === "NEXT" ? swiper.slideNext() : swiper.slidePrev();
        }

        const handleSlideChange = () => {
            const { swiper } = sliderRef.current;
            if (swiper.isBeginning) {
                setIsVisibleNavigation({
                    first: true,
                    last: false
                }
                );
            }
            else if (swiper.isEnd ) {
                setIsVisibleNavigation({
                    first: false,
                    last: true
                }
                );
            }
            else {
                setIsVisibleNavigation({
                    first: false,
                    last: false
                }
                );
            }
        }
    return (
        <>
            <h2 className='swiperWrapper__title'>{title}</h2>
            <div className='swiperWrapper' onMouseLeave={() => setFocus(false)} onMouseEnter={() => setFocus(true)}>
                <NavigationSwiperArrovBase isVisibleNavigation={isVisibleNavigation} focus={focus} NavigateClick={NavigateClick} />
                <Swiper
                    className='swiperWrapper__swiper'
                    ref={sliderRef}
                    slidesPerView='auto'
                    spaceBetween={between? between : 15}
                    modules={[Navigation, Keyboard, FreeMode, Pagination]}
                    simulateTouch={true}
                    navigation={true}
                    slidesPerGroup={group? group : 3}
                    pagination={{
                        clickable: true,
                    }}
                    keyboard={{
                        enabled: true,
                        onlyInViewport: true,
                    }}
                    onSlideChange={handleSlideChange}
                >
                    {children}
                </Swiper>
            </div>
        </>
    );
};

export default SwiperWrapper;
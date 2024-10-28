import { SwiperSlide } from 'swiper/react';
import SwiperWrapper from './SwiperWrapper';
import one from '../../../img/UI/Swiper/digitalTopSwiper/1.png'
import two from '../../../img/UI/Swiper/digitalTopSwiper/2.png'
import three from '../../../img/UI/Swiper/digitalTopSwiper/3.png'
import four from '../../../img/UI/Swiper/digitalTopSwiper/4.png'
import five from '../../../img/UI/Swiper/digitalTopSwiper/5.png'
import six from '../../../img/UI/Swiper/digitalTopSwiper/6.png'
import seven from '../../../img/UI/Swiper/digitalTopSwiper/7.png'
import eight from '../../../img/UI/Swiper/digitalTopSwiper/8.png'
import nine from '../../../img/UI/Swiper/digitalTopSwiper/9.png'
import ten from '../../../img/UI/Swiper/digitalTopSwiper/10.png'
import { useNavigate } from 'react-router-dom';
import GlowingBanner from '../Banner/GlowingBanner';
import { motion } from "framer-motion";

const DigitalTopSwiper = ({movie, title}) => {
    const numberImg = [one, two, three, four, five, six, seven, eight, nine, ten];
    const navigate = useNavigate();
    return (
        <SwiperWrapper title={title} between={50} group={2}>
            {
                movie.map((item, index) =>
                    index <= 9 &&
                    <SwiperSlide key={item.id} className='digitalTopSwiper__slider' onClick={() => navigate(`/View/${item.id}`)}>
                            <img src={numberImg[index]} alt={`${index} место`} className='digitalTopSwiper__img' />
                            <motion.div className="digitalTopSwiper__bannerPosition" whileHover={{scale:1.03}}>
                                <div className='digitalTopSwiper__banner-box'>
                                    <GlowingBanner Img={(item.poster.previewUrl && item.poster.previewUrl !== null) ? item.poster.previewUrl : item.poster.url} clBanner={'digitalTopSwiper__banner'} clShadow={'digitalTopSwiper__banner-shadow'} />
                                </div>
                            </motion.div>
                    </SwiperSlide>
                )
            }
        </SwiperWrapper>
    );
};

export default DigitalTopSwiper;
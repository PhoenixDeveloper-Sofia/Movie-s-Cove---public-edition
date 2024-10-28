import { SwiperSlide } from 'swiper/react';
import BannerPreview from '../Banner/BannerPreview/BannerPreview';
import SwiperWrapper from './SwiperWrapper';

const MoreContentSwiper = ({ content, title }) => {

    return (
        <SwiperWrapper title={title}>
            {
                content.map(item =>
                    <SwiperSlide key={item.id} className='moreContentSwiper__slider'>
                        <BannerPreview id={item.id} img={(item.poster.previewUrl  && item.poster.previewUrl !== null) ? item.poster.previewUrl : item.poster.url} name={item.name} rating={(item.rating && item.rating.kp) ? item.rating.kp : null} year={item.year}  genres={(item.genres && item.genres != null) && item.genres } type={item.type} notBacklight={true} />
                    </SwiperSlide>
                )
            }
        </SwiperWrapper>

    );
};

export default MoreContentSwiper;
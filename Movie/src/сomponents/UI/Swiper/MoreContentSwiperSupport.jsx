import { SwiperSlide } from 'swiper/react';
import BannerPreview from '../Banner/BannerPreview/BannerPreview';
import SwiperWrapper from './SwiperWrapper';

const MoreContentSwiperSupport = ({ content, title }) => {

    return (
        <SwiperWrapper title={title}>
            {
                content.map(item =>
                    <SwiperSlide key={item.kinopoiskId} className='moreContentSwiper__slider'>
                        <BannerPreview id={item.kinopoiskId} img={(item.posterUrlPreview && item.posterUrlPreview !== null) ? item.posterUrlPreview: item.posterUrl} name={item.nameRu ? item.nameRu : item.nameEn ? item.nameEn : item.nameOriginal} rating={item.ratingKinopoisk ? item.ratingKinopoisk :  0} year={item.year} notBacklight={true}  genres={(item.genres && item.genres != null) && item.genres } type={item.type}/>
                    </SwiperSlide>
                )
            }
        </SwiperWrapper>

    );
};

export default MoreContentSwiperSupport;
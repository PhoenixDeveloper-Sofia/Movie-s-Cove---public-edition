import React from 'react';
import MoreContentSwiper from '../../UI/Swiper/MoreContentSwiper';

const ViewRecommendation = ({content}) => {
    return (
        <section className='viewRecommendation'>
            <MoreContentSwiper title='Вам понравится' content={content}/>
        </section>
    );
};

export default ViewRecommendation;
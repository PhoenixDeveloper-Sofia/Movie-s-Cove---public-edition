import React from 'react';
import NavigationButton from '../../../../UI/Button/NavigationButton';

const NavigateSwiperViewInfoDetailsTrailerSwiper = ({NavigateClick}) => {
    return (
        <div className='navigateSwiperViewInfoDetailsTrailerSwiper'>
            <NavigationButton alt={'Кнопка следующий слайд'} className="navigateSwiperViewInfoDetailsTrailerSwiper__prev" onClick={() => NavigateClick("PREV")} />
            <NavigationButton alt={'Кнопка предыдущий слайд'} className="navigateSwiperViewInfoDetailsTrailerSwiper__next" onClick={() => NavigateClick("NEXT")} />
        </div>
    );
};

export default NavigateSwiperViewInfoDetailsTrailerSwiper;
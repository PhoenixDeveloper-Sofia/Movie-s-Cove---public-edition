import React from 'react';
import NavigationButton from '../../../UI/Button/NavigationButton';

const NavigateSwiperEntered = ({NavigateClick}) => {

    return (
        <div className='swiperEntered-navigate'>
            <NavigationButton alt={'Кнопка следующий слайд'} className="swiperEntered-navigate__prev" onClick={() => NavigateClick("PREV")} />
            <NavigationButton alt={'Кнопка предыдущий слайд'} onClick={() => NavigateClick("NEXT")} />
        </div>
    );
};

export default NavigateSwiperEntered;
import React from 'react';
import ratingLogoKp from '../../../img/UI/Rating/Rating-kp-logo.svg'
import ratingLogoImdb from '../../../img/UI/Rating/Rating-imdb-logo.svg'
import useTimeConvert from '../../../hooks/useTimeConvert';
import Rating from '../Rating/Rating';

const DescriptionBar = ({ year, timeLength, type, rating, children, imdb }) => {
    const time = useTimeConvert(timeLength)
    return (
        <div className='descriptionBar'>
            <div className="descriptionBar__rating-year">
                {imdb ?
                 <Rating logo={ratingLogoImdb} rating={rating} alt="рейтинг" />
                 :
                    <Rating logo={ratingLogoKp} rating={rating} alt="рейтинг" />
                    }

                {(year && year != null) && <li translate='no' className='descriptionBar__year'>{year}</li>}
            </div>
            {timeLength &&
                <div className="descriptionBar__time">
                    {time !== '0 ч  0 мин' ? <p>{time[0]}</p> : ""}
                </div>
            }
            <p className='descriptionBar__type'>{type}</p>
            {children}
        </div>
    );
};

export default DescriptionBar;
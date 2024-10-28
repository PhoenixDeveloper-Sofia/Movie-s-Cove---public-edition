import React from 'react';
import Rating from '../../../UI/Rating/Rating';
import RatingImdb from '../../../../img/UI/Rating/Rating-imdb-logo.svg'
import RatingKp from '../../../../img/UI/Rating/Rating-kp-logo.svg'
import BannerPreviewInfoGenres from '../../../UI/Banner/BannerPreview/BannerPreviewInfo/BannerPreviewInfoGenres';

const ViewInfoDetailsBigBlock = ({ content }) => {
    return (
        <div className='viewInfoDetailsBlock viewInfoDetailsBigBlock '>
            <div>
                <p className='viewInfoDetailsBlock__title'>Рейтинг</p>
                <div className="viewInfoDetailsBlock__item ">
                    <Rating logo={RatingImdb} rating={content.rating.imdb} alt={'imdb'} votes={content.votes.imdb} />
                    <Rating logo={RatingKp} rating={content.rating.kp} alt={'kp'} votes={content.votes.kp} />
                </div>
            </div>
            
            {(content.genres && content.genres != null) &&
                <div>
                    <p className='viewInfoDetailsBlock__title'>Жанры</p>
                    <div className="viewInfoDetailsBigBlock__genres">
                        <BannerPreviewInfoGenres genres={content.genres} />
                    </div>
                </div>
            }
            {(content.countries && content.countries != null) &&
                <div>
                    <p className='viewInfoDetailsBlock__title'>Страна</p>
                    <div className="viewInfoDetailsBlock__item">
                        {content.countries.map(item => (
                            <p key={item.name} className="viewInfoDetailsBigBlock__countries">
                                {item.name}
                            </p>
                        ))}
                    </div>
                </div>
            }
            {content.ageRating != null &&
                <div className="viewInfoDetailsBlock__item">
                    <p className="viewInfoDetailsBlock__title viewInfoDetailsBlock__lastEllement">Возраст</p>
                    <p className=' viewInfoDetailsBlock__number'>{content.ageRating}</p>
                </div>
            }
        </div>
    );
};

export default ViewInfoDetailsBigBlock;
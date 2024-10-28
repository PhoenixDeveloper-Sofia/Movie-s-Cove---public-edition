import React from 'react';
import ViewInfoDetailsTrailerSwiper from './ViewInfoDetailsTrailerSwiper/ViewInfoDetailsTrailerSwiper';
import ViewInfoDetailsBigBlock from './ViewInfoDetailsBigBlock';
import ViewInfoDetailsSmallBlock from './ViewInfoDetailsSmallBlock';

const ViewInfoDetails = ({ trailer, trailerIsLoding, content }) => {
    return (
        <div className='viewInfoDetails'>
            <ViewInfoDetailsTrailerSwiper trailer={trailer} trailerIsLoding={trailerIsLoding} />
            <div className='viewInfoDetails__text'>
                <ViewInfoDetailsBigBlock content={content} />
                <ViewInfoDetailsSmallBlock content={content} />
            </div>
        </div>
    );
};

export default ViewInfoDetails;
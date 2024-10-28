import React from 'react';
import DescriptionBar from '../../../UI/DescriptionBar/DescriptionBar';

const ViewInfoMainContentTitle = ({ content }) => {
    return (
        <div className='viewInfoMainContentTitle'>
            <div className="viewInfoMainContentTitle__text">
                {(content.name && content.name != 'null') && <h1 className="viewInfoMainContentTitle__name" translate='no'>{content.name}</h1>}
                <DescriptionBar year={content.year} timeLength={content.isSeries === true ? content.seriesLength : content.movieLength} type={content.type} rating={content.rating.kp} />
            </div>
            {(content.logo && content.logo.url != null) && 
            <img src={content.logo.url} alt='logo' className='viewInfoMainContentTitle__logo'/>}
        </div>
    );
};

export default ViewInfoMainContentTitle;
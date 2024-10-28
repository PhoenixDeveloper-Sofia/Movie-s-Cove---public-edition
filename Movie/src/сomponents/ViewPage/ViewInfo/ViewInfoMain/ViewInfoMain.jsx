import React from 'react';
import GlowingBanner from '../../../UI/Banner/GlowingBanner';
import ViewInfoMainContentTitle from './ViewInfoMainContentTitle';
import ViewInfoMainContentDescription from './ViewInfoMainContentDescription';

const ViewInfoMain = ({ content }) => {
    return (
        <div className='viewInfoMain'>
            {(content.poster.previewUrl && content.poster.previewUrl != null || content.poster.url && content.poster.url != null) &&
                <div className='viewInfoMain__banner-box'>
                    <GlowingBanner Img={(content.poster.previewUrl && content.poster.previewUrl != null) ? content.poster.previewUrl : content.poster.url} clBanner={'viewInfoMain__banner'} clShadow={'viewInfoMain__banner-shadow'} />
                </div>
            }

            <div className='viewInfoMain__content'>
                <ViewInfoMainContentTitle content={content} />
                {(content.description && content.description !== null) &&
                    <ViewInfoMainContentDescription description={content.description} />
                }
            </div>
        </div>
    );
};

export default ViewInfoMain;
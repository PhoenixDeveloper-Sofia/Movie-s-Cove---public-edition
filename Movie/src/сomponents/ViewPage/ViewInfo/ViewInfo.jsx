import React from 'react';
import ViewInfoBanner from './ViewInfoBanner';
import ViewInfoMain from './ViewInfoMain/ViewInfoMain';
import ViewInfoDetails from './ViewInfoDetails/ViewInfoDetails';

const ViewInfo = ({ trailer, trailerIsLoding, trailerIsError, content, isLoading, isError }) => {

    return (
        <section className='viewInfo'>
            <ViewInfoBanner isLoading={trailerIsLoding} isError={trailerIsError} trailer={trailer} />
            <div className='viewInfo__text'>
                <div >
                    <ViewInfoMain content={content} />
                    <ViewInfoDetails content={content} trailer={trailer} trailerIsLoding={trailerIsLoding} />
                </div>
            </div>
        </section>
    );
};

export default ViewInfo;
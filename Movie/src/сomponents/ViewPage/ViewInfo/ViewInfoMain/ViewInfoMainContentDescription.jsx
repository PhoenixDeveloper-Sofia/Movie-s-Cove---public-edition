import React from 'react';

const ViewInfoMainContentDescription = ({description}) => {
    return (
        <div className='viewInfoMainContentDescription'>
            <p className="viewInfoMainContentDescription__title">Описание</p>
            <p className="viewInfoMainContentDescription__description">{description}</p>
        </div>
    );
};

export default ViewInfoMainContentDescription;
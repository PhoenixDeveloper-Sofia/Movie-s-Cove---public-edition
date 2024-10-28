import React from 'react';

const Rating = ({logo,rating,alt,votes }) => {
    return (
        <div className='rating'>
            <img src={logo} alt={'rating'+ " " +  alt} />
            {(rating && rating != null ||rating != 0 ) ? 
            <p>{Number(rating.toFixed(1))}</p>
            : 
            <p>0</p>
        }
            {(votes && votes != null) && 
            <p className='rating__votes'>({votes})</p>
            }
        </div>
    );
};

export default Rating;
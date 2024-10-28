import React from 'react';
import useTimeConvert from '../../../../hooks/useTimeConvert';

const ViewInfoDetailsSmallBlock = ({ content }) => {
    const time = useTimeConvert(content.isSeries ? content.seriesLength : content.movieLength)
    return (
        <div className='viewInfoDetailsBlock viewInfoDetailsSmallBlock'>
            <div>
                <p className='viewInfoDetailsBlock__title'>Тип</p>
                <p className="viewInfoDetailsBlock__item">
                    {content.type}
                </p>
            </div>
            <div>
                <p className='viewInfoDetailsBlock__title'>Время</p>
                <p className="viewInfoDetailsBlock__item viewInfoDetailsBlock__number">
                    {time !== '0 ч  0 мин' ? time[0] : ""}
                </p>
            </div>

            {(content.networks && content.networks != null) &&
                <div>
                    <p className='viewInfoDetailsBlock__title'>Компания</p>
                    {content.networks.items.map(item =>
                        <p key={item.name} translate='no' className='viewInfoDetailsBlock__item'>
                            {item.name}
                        </p>
                    )
                    }

                </div>
            }

            <div>
                <p className='viewInfoDetailsBlock__title viewInfoDetailsBlock__lastEllement'>Год</p>
                <p className="viewInfoDetailsBlock__item  viewInfoDetailsBlock__number">
                    {content.year}
                </p>
            </div>
        </div>
    );
};

export default ViewInfoDetailsSmallBlock;
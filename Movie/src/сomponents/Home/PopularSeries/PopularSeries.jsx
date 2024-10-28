import React from 'react';
import { useFetchPopularSeriesQuery } from '../../../store/endpoints/info/supportEndpoints';
import MoreContentSwiperSupport from '../../UI/Swiper/MoreContentSwiperSupport';

const PopularSeries = () => {
    const { data: film, isError, isLoading } = useFetchPopularSeriesQuery({ cacheTime: 20 * 60 * 1000 })
    return (
        <>
            {(!isLoading && !isError && film) &&
                <section>
                    <MoreContentSwiperSupport title="Может серию" content={film.items} />
                </section>
            }
        </>
    );
};

export default PopularSeries;
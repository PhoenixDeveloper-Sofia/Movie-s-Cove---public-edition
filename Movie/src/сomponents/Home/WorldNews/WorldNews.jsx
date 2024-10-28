import React from 'react';
import { useFetchWorldNewQuery } from '../../../store/endpoints/info/kinopoiskEndpoints';
import MoreContentSwiper from '../../UI/Swiper/MoreContentSwiper';

const WorldNews = () => {
    const { data: movie, isError, isLoading } = useFetchWorldNewQuery({ cacheTime: 30 * 60 * 1000 })

    return (
        <>
            {(!isLoading && !isError) &&
                <section>
                    <MoreContentSwiper content={movie.docs} title='Мировые новинки' />
                </section>
            }
        </>
    );
};

export default WorldNews;
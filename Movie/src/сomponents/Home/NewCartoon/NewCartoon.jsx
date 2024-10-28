import React, { useEffect } from 'react';
import { useFetchNewCartoonQuery } from '../../../store/endpoints/info/kinopoiskEndpoints';
import MoreContentSwiper from '../../UI/Swiper/MoreContentSwiper';

const NewCartoon = () => {
    const { data: movie, isError, isLoading } = useFetchNewCartoonQuery({ cacheTime: 20 * 60 * 1000 })
    useEffect(() => {
        if (!isLoading && !isError && movie) {
            console.log(movie.docs)
        }

    }, [movie, isLoading])
    return (
        <>
            {(!isLoading && !isError && movie) &&
                <section>
                    <MoreContentSwiper content={movie.docs} title='Новые мультфильмы' />
                </section>
            }
        </>
    );
};

export default NewCartoon;
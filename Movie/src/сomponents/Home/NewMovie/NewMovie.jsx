import React, { useEffect } from 'react';
import { useFetchNewCartoonQuery, useFetchNewMovieQuery } from '../../../store/endpoints/info/kinopoiskEndpoints';
import MoreContentSwiper from '../../UI/Swiper/MoreContentSwiper';

const NewMovie = () => {
    const { data: movie, isError, isLoading } = useFetchNewMovieQuery({ cacheTime: 20 * 60 * 1000 })
    useEffect(() => {
        if (!isLoading && !isError && movie) {
            console.log(movie.docs)
        }

    }, [movie, isLoading])
    return (
        <>
            {(!isLoading && !isError && movie) &&
                <section>
                    <MoreContentSwiper content={movie.docs} title='Новые фильмы' />
                </section>
            }
        </>
    );
};

export default NewMovie;
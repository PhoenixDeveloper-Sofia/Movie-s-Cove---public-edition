import React from 'react';
import { useFetchComicsQuery } from '../../../store/endpoints/info/supportEndpoints';

const ComicsCollections = () => {
    const { data: film, isError, isLoading } = useFetchComicsQuery({ cacheTime: 20 * 60 * 1000 })
    return (
        <>
            {(!isLoading && !isError && film) &&
                <section>
                    <MoreContentSwiperSupport title="Комиксы" content={film.items} />
                </section>
            }
        </>
    );
};

export default ComicsCollections;
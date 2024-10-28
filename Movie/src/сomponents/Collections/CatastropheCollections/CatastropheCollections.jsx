import React from 'react';
import { useFetchCatastropheQuery } from '../../../store/endpoints/info/supportEndpoints';
import MoreContentSwiperSupport from '../../UI/Swiper/MoreContentSwiperSupport';

const CatastropheCollections = () => {
    const { data: film, isError, isLoading } = useFetchCatastropheQuery({ cacheTime: 20 * 60 * 1000 })
    return (
        <>
            {(!isLoading && !isError && film) &&
                <section>
                    <MoreContentSwiperSupport title="Катастрофы и апокалипсисы" content={film.items} />
                </section>
            }
        </>
    );
};

export default CatastropheCollections;
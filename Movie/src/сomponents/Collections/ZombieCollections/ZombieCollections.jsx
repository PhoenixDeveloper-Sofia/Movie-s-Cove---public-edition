import React from 'react';
import { useFetchZombieQuery } from '../../../store/endpoints/info/supportEndpoints';
import MoreContentSwiperSupport from '../../UI/Swiper/MoreContentSwiperSupport';

const ZombieCollections = () => {
    const { data: film, isError, isLoading } = useFetchZombieQuery({ cacheTime: 20 * 60 * 1000 })
    return (
        <>
            {(!isLoading && !isError && film) &&
                <section>
                    <MoreContentSwiperSupport title="Зомби" content={film.items} />
                </section>
            }
        </>
    );
};

export default ZombieCollections;
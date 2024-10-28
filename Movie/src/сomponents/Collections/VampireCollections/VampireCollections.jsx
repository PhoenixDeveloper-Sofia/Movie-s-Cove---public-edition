import React from 'react';
import { useFetchVampireQuery } from '../../../store/endpoints/info/supportEndpoints';
import MoreContentSwiperSupport from '../../UI/Swiper/MoreContentSwiperSupport';

const VampireCollections = () => {
    const { data: film, isError, isLoading } = useFetchVampireQuery({ cacheTime: 20 * 60 * 1000 })
    return (
        <>
            {(!isLoading && !isError && film) &&
                <section>
                    <MoreContentSwiperSupport title="Вампиры" content={film.items} />
                </section>
            }
        </>
    );
};

export default VampireCollections;
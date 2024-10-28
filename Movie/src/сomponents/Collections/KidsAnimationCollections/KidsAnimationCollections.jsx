import React from 'react';
import { useFetchKidsAnimationQuery } from '../../../store/endpoints/info/supportEndpoints';
import MoreContentSwiperSupport from '../../UI/Swiper/MoreContentSwiperSupport';

const KidsAnimationCollections = () => {
    const { data: film, isError, isLoading } = useFetchKidsAnimationQuery({ cacheTime: 20 * 60 * 1000 })
    return (
        <>
            {(!isLoading && !isError && film) &&
                <section>
                    <MoreContentSwiperSupport title="Для детей. (Даже больших)" content={film.items} />
                </section>
            }
        </>
    );
};

export default KidsAnimationCollections;
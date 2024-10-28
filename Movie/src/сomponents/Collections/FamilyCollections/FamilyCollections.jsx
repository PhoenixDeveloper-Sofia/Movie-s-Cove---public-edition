import React from 'react';
import MoreContentSwiperSupport from '../../UI/Swiper/MoreContentSwiperSupport';
import { useFetchFamilyQuery } from '../../../store/endpoints/info/supportEndpoints';

const FamilyCollections = () => {
    const { data: film, isError, isLoading } = useFetchFamilyQuery({ cacheTime: 20 * 60 * 1000 })
    return (
        <>
            {(!isLoading && !isError && film) &&
                <section>
                    <MoreContentSwiperSupport title="Семейный вечер" content={film.items} />
                </section>
            }
        </>
    );
};

export default FamilyCollections;
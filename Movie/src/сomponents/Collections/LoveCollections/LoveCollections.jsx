import React from 'react';
import MoreContentSwiperSupport from '../../UI/Swiper/MoreContentSwiperSupport';
import { useFetchLoveQuery } from '../../../store/endpoints/info/supportEndpoints';

const LoveCollections = () => {
    const { data: film, isError, isLoading } = useFetchLoveQuery({ cacheTime: 20 * 60 * 1000 })
    return (
        <>
            {(!isLoading && !isError && film) &&
                <section>
                    <MoreContentSwiperSupport title="Романтика, да и только " content={film.items} />
                </section>
            }
        </>
    );
};

export default LoveCollections;
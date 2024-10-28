import React, { useContext, useEffect, useState } from 'react';
import ModalUI from '../../../UI/PopUp&Modal/ModalUI';
import { useFetchTrailerQuery } from '../../../../store/endpoints/info/supportEndpoints';
import { Visible } from '../../../../utils/context';
import Loader from '../../../../pages/Loader';
import ErrorRout from '../../../../pages/ErrorRout'
import useExtractTrailerKey from '../../../../hooks/useExtractTrailerKey';

const ModalTrailerEntered = ({ id }) => {

    const { isVisible, setIsVisible } = useContext(Visible);

    const { data: trailer, isError, isLoading } = useFetchTrailerQuery(id,{
        skip: !isVisible,
        cacheTime: 10 * 60 * 1000
    });

    const [video, setVideo] = useState('')

    useEffect(() => {
        try {
            if (!isLoading && trailer) {
                let trailerYOUTUBE = trailer.items.filter(item => item.site == 'YOUTUBE')

                if (trailerYOUTUBE[0].url) {
                    setVideo(useExtractTrailerKey(trailerYOUTUBE[0].url))
                }
                else {
                    setVideo('not found')
                }
            }
        }
        catch {
            setVideo('not found')
        }
    }, [trailer, id])

    return (
        <ModalUI isVisible={isVisible} setIsVisible={setIsVisible} keyModal={id} >
            {isLoading ?
                <div className="modalTrailerEntered">
                    <Loader />
                </div>
                :
                isError || video === 'not found' ?
                    <div className="modalTrailerEntered">
                        <ErrorRout />
                    </div>
                    :
                    <div className="modalTrailerEntered">
                        <iframe src={`https://www.youtube-nocookie.com/embed/${video}?vq=hd1080&showinfo=0&autoplay=1&disablekb=1&modestbranding=0&rel=0&iv_load_policy=3&playlist=${video}&loop=1&modestbranding=1`} allow="autoplay; fullscreen"></iframe>
                    </div>}
        </ModalUI>
    );
};

export default ModalTrailerEntered;
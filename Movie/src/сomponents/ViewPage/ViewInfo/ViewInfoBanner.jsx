import React, { useEffect, useState } from 'react';
import useExtractTrailerKey from '../../../hooks/useExtractTrailerKey';;

const ViewInfoBanner = ({isLoading, isError, trailer}) => {
  
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
    }, [trailer, isLoading])

    return (
        <>
            {(!isLoading && !isError && video != 'not found') &&
                <>
                <div className="viewInfoBanner__position"></div>
                    <div className='viewInfoBanner'>
                        <div className="viewInfoBanner__video">
                            <iframe src={`https://www.youtube-nocookie.com/embed/${video}?vq=hd1080&showinfo=1&mute=1&autoplay=1&controls=0&disablekb=1&modestbranding=0&rel=0&iv_load_policy=3&playlist=${video}&loop=1&start=5&end=40&modestbranding=1`} ></iframe>
                        </div>
                    </div>

                </>
            }
        </>

    );
};

export default ViewInfoBanner;
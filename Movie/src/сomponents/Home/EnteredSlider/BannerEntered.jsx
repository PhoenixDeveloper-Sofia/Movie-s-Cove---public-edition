import React, { useEffect, useRef, useState } from 'react';
import GlowingBanner from '../../UI/Banner/GlowingBanner';

const BannerEntered = ({ bannerTrailers, bannerImg }) => {

    const errorTrailers = useRef('not found')

    const [video, setVideo] = useState('')

    useEffect(() => {
        if (errorTrailers.current == null || bannerTrailers == 'not found') {
            setVideo('not found')
        }
        else {
            setVideo(bannerTrailers)
        }
    }, [bannerTrailers])


    return (
        <div className='bannerEntered'>
            {video === 'not found' ?
                <div className='bannerEntered__banner-box'>
                    <GlowingBanner Img={bannerImg}  clBanner={'bannerEntered__banner'} clShadow={'bannerEntered__banner-shadow'}/>
                </div>
                :
                <div className="bannerEntered__video">
                    <iframe ref={errorTrailers} src={`https://www.youtube-nocookie.com/embed/${video}?vq=hd1080&showinfo=1&mute=1&autoplay=1&controls=0&disablekb=1&modestbranding=0&rel=0&iv_load_policy=3&playlist=${video}&loop=1&start=1&end=40&modestbranding=1`} ></iframe>
                </div>
            }
        </div>
    );
};

export default BannerEntered;
import React, { useEffect, useRef, useState } from 'react';
import { useObserver } from '../../../hooks/useObserver'; 
import BannerPreview from '../Banner/BannerPreview/BannerPreview'; 

const СontentList = ({ film, page, setQuery, pagesCount }) => {

    const lastElement = useRef()
    const [result, setResult] = useState([])

    useEffect(() => {
        if (page == 1) {
            setResult(film)
        }
        else {
            const uniqueData = film.filter(newItem => !result.some(item => item.id === newItem.id));
            setResult(prevData => [...prevData, ...uniqueData]);
        }
    }, [film])

    useObserver(lastElement, page < pagesCount, () => {
        setQuery(prevState => ({
            ...prevState,
            page: page + 1
        }));
    })
    return (
        <section >
            <div className="bannerBox">
                {result.map(item =>
                    <BannerPreview key={item.id} id={item.id} img={item.poster.previewUrl} name={item.name} type={item.type} genres={item.genres} rating={item.rating.kp} year={item.year} />
                )}
            </div>
            { result.length> 0 && <div ref={lastElement}  className='lastElement'/>}
        </section>
    );
};

export default СontentList;
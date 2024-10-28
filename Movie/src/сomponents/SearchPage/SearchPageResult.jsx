import React, { useEffect, useRef, useState } from 'react';
import { useObserver } from '../../hooks/useObserver';
import BannerPreview from '../UI/Banner/BannerPreview/BannerPreview';

const SearchPageResult = ({ film, page, setQuery, pagesCount }) => {

    const lastElement = useRef()

    const [result, setResult] = useState([])

    useEffect(() => {
        if (page == 1) {
            setResult(film)
        }
        else {
            const uniqueData = film.filter(newItem => !result.some(item => item.filmId === newItem.filmId));
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
        <>
            <div className="bannerBox">
                {result.map(item =>
                    <BannerPreview key={item.filmId} id={item.filmId} img={item.posterUrl} name={item.nameRu ? item.nameRu : item.nameEn} type={item.type} genres={item.genres} rating={item.rating} year={item.year} />
                )}
            </div>
            <div ref={lastElement} />
        </>
    );
};

export default SearchPageResult;
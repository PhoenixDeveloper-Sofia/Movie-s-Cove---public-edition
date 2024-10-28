import React, { useEffect, useState } from 'react';
import СontentList from '../сomponents/UI/Сontent/СontentList';
import { TUPEMOVIE } from '../utils/filters';
import FilterMap from '../сomponents/UI/Filter&Sort/FilterMap';
import { useFetchContentFiltersQuery } from '../store/endpoints/info/kinopoiskEndpoints';
import Loader from './Loader';
import ErrorRout from './ErrorRout';

const Movies = () => {
    const [query, setQuery] = useState({
        countries: [],
        genres: [],
        year: [],
        networks: [],
        rating: 'Рейтинг',
        type: [],
        sort: '',
        page: 1
    })

    const [clearFilter, setClearFilter] = useState(false)
    useEffect(() => {
        
        setQuery(prevState => ({
            ...prevState,
            countries: [],
            genres: [],
            year: [],
            networks: [],
            rating: '',
            type: [],
            page: 1
        }))
    }, [clearFilter])


    const { data, isError, isLoading } = useFetchContentFiltersQuery({
        page: query.page,
        sort: query.sort,
        type: query.type,
        isSeries: false,
        year: query.year,
        rating: query.rating,
        genres: query.genres,
        networks: query.networks,
        countrys: query.countries,
        cacheTime: 20 * 60 * 1000,
    });
    return (
        <>
            <FilterMap setClearFilter={setClearFilter} clearFilter={clearFilter} type={TUPEMOVIE} query={query} setQuery={setQuery} />
            {isLoading ?
                <Loader />
                :
                isError ?
                    <ErrorRout />
                    :
                    data.docs ?
                        <СontentList isLoading={isLoading} film={data.docs} page={query.page} setQuery={setQuery} pagesCount={data.pages} />
                        :
                        <></>
           }
        </>
    );
};

export default Movies;
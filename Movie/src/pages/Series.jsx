import React, { useEffect, useState } from 'react';
import СontentList from '../сomponents/UI/Сontent/СontentList';
import { TUPESERIES } from '../utils/filters';
import FilterMap from '../сomponents/UI/Filter&Sort/FilterMap';
import { useFetchContentFiltersQuery } from '../store/endpoints/info/kinopoiskEndpoints';
import Loader from './Loader';
import ErrorRout from './ErrorRout';

const Series = () => {
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
        setQuery({
            countries: [],
            genres: [],
            year: [],
            networks: [],
            rating: '',
            type: [],
            sort: '',
            page: 1
        })
    }, [clearFilter])


    const { data, isError, isLoading } = useFetchContentFiltersQuery({
        page: query.page,
        sort: query.sort,
        type: query.type,
        isSeries: true,
        year: query.year,
        rating: query.rating,
        genres: query.genres,
        networks: query.networks,
        countrys: query.countries,
        cacheTime: 20 * 60 * 1000,
    });
    return (
        <>
             <FilterMap setClearFilter={setClearFilter} clearFilter={clearFilter} type={TUPESERIES} query={query} setQuery={setQuery} />
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

export default Series;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSearchСontentQuery } from '../store/endpoints/info/searchEndpoints'
import SearchPageInput from '../сomponents/SearchPage/SearchPageInput';
import SearchPageResult from '../сomponents/SearchPage/SearchPageResult';
import Loader from './Loader';
import ErrorRout from './ErrorRout';

const SearchPage = () => {
  const { text } = useParams()

  const [query, setQuery] = useState({ textQuery: '', page: 1 })

  useEffect(() => {
    if (text) {
      setQuery({
        textQuery: text,
        page: 1
      });
    }
  }, [text])

  const { data, isError, isLoading } = useSearchСontentQuery({ keyword: query.textQuery, page: query.page });
  
  return (
    <>
      <>
        <SearchPageInput setQuery={setQuery} />
        {
          isLoading ?
            <Loader /> :
            isError ?
              <ErrorRout /> :
              <SearchPageResult  film={data.films} page={query.page} setQuery={setQuery} pagesCount={data.pagesCount} />
        }
      </>
    </>
  );
};

export default SearchPage;
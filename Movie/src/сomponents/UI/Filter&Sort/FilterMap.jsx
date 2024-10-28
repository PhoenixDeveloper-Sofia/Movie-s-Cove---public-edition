import React from 'react';
import FilterList from './Filter/FilterList';
import Sort from './Sort/Sort';

const FilterMap = ({ setClearFilter,clearFilter,type, query, setQuery }) => {

    return (
        <section className='filterMap'>
            <div className='filterMap__fiterButton'>
            <button className='filterMap__clearFilter' onClick={() => setClearFilter(!clearFilter)} >Сбросить фильтры</button>
                <FilterList type={type} query={query} setQuery={setQuery} clearFilter={clearFilter} />
            </div>
            <Sort query={query} setQuery={setQuery} />
        </section>
    );
};

export default FilterMap;
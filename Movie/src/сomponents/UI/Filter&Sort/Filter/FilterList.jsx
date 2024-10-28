import React, { useState } from 'react';
import FilterTitle from './FilterTitle';
import { FILTERS } from '../../../../utils/filters';
import FilterOption from './FilterOption/FilterOption';

const FilterList = ({ type,query,setQuery, clearFilter }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            {isOpen && <div className='filter__closeTriger' onClick={() => { setIsOpen(false) }} />}
            <div className='filterList' onClick={e => e.stopPropagation()}>
                {FILTERS.map(item =>
                    <FilterTitle query={query} key={item.title} isOpen={isOpen} setIsOpen={setIsOpen} title={item.title} />
                )}
                <FilterTitle query={query} key={type.title} isOpen={isOpen} setIsOpen={setIsOpen} title={type.title} />

                <div className='filterList__optionContaner'>
                    {FILTERS.map(item =>
                        <FilterOption clearFilter={clearFilter} title={item.title} key={item.options} isOpen={isOpen} options={item.options}  query={query} setQuery={setQuery} />
                    )}
                    <FilterOption clearFilter={clearFilter} title={type.title} key={type.options} isOpen={isOpen} options={type.options}  query={query} setQuery={setQuery}/>
                </div>

            </div>
        </>
    );
};

export default FilterList;
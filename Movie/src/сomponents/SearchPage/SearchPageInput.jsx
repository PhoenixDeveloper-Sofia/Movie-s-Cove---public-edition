import React, {useRef } from 'react';

const SearchPageInput = ({ setQuery}) => {

    const inputRef = useRef()
    const timer = useRef(null);


    const handleInputChange = () => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = (setTimeout(() => {
            setQuery({
                textQuery: inputRef.current.value,
                page: 1
            });
        }, 400));
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            setQuery({
                textQuery: inputRef.current.value,
                page: 1
            });
        }
    }

    return (
        <div className='searchPageInput'>
            <input
                ref={inputRef}
                type="text"
                onChange={handleInputChange}
                className='searchPageInput__input'
                placeholder='Поиск'
                onKeyDown={handleEnter}
            />
            <div className='searchPageInput__line' />
        </div>
    );
};

export default SearchPageInput;
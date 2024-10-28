import React, { memo, useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const FilterOptionItem = ({ clearFilter, title, value, name, query, setQuery }) => {

    const [isChecked, setIsChecked] = useState(false)

    const updateQuery = (type) => {
        if (isChecked == true) {
            setQuery(prevState => ({
                ...prevState,
                [type]: [...prevState[type], value]
            }));
        }
        else if (isChecked == false && query[type].length !== 0) {
            const updated = query[type].filter(item => item !== value)
            setQuery(prevQuery => {
                return {
                    ...prevQuery,
                    [type]: updated,
                    page:1
                };
            });
        }
    }
    useEffect(() => {
        switch (title) {
            case 'Страны':
                updateQuery('countries')
                break;
            case 'Жанры':
                updateQuery('genres')
                break;
            case 'Год':
                updateQuery('year')
                break;
            case 'Компании':
                updateQuery('networks')
                break;
            case 'Тип':
                updateQuery('type')
                break;
            case 'Рейтинг':
                newRating()
                break;
        }
    }, [isChecked])

    useEffect(() => {
        setIsChecked(false)
    }, [clearFilter])

    const newRating = () => {
        if (query.rating == '' && isChecked == false) return
        if (query.rating == value) {
            setQuery(prevQuery => {
                return {
                    ...prevQuery,
                    rating: '',
                    page:1
                };
            });
        }
        else {
            setQuery(prevQuery => {
                return {
                    ...prevQuery,
                    rating: value,
                    page:1
                };
            });
        }
    }

    return (
        <motion.div whileHover={{ fontSize: '19px' }} className={title == 'Год' ?
            'filterOption__item filterOption__item-year' :
            'filterOption__item'}>
            <input style={{ fontSize: '18px', }} checked={title == 'Рейтинг' ? query.rating == value : isChecked} className='filterOption__checkbox' type="checkbox" value={value} name={name} onChange={() => setIsChecked(!isChecked)} />
            <label translate='no' className={title == 'Рейтинг' ?
                query.rating == value ? 'filterOption__text filterOption__text-active' : 'filterOption__text'
                : isChecked ? 'filterOption__text filterOption__text-active' : 'filterOption__text'}>{name}</label>
        </motion.div>

    );
};

export default memo(FilterOptionItem);
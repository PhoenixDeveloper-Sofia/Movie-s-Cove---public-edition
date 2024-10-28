import React from 'react';

const FilterOpionsRating = ({ title, value, name, query, setQuery }) => {
    return (
        <motion.div whileHover={{ fontSize: '19px' }} className={title == 'Год' ? 'filterOption__item filterOption__item-year' : 'filterOption__item'}>
        <input style={{ fontSize: '18px', }} checked={isChecked} className='filterOption__checkbox' type="radio" value={value} name={name} />
        <label translate='no' className={isChecked ? 'filterOption__text filterOption__text-active' : 'filterOption__text'}>{name}</label>
    </motion.div>
    );
};

export default FilterOpionsRating;
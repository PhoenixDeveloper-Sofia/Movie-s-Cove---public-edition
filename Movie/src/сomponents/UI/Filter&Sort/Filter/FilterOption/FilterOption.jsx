import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import FilterOptionItem from './FilterOptionItem';

const FilterOption = ({clearFilter, options, isOpen, title, query, setQuery }) => {

    const optionAnimation = useAnimation();

    useEffect(() => {
        if (isOpen == title) {
            optionAnimation.start({ opacity: 1, y: 0, display: 'grid', transition: { duration: 0.35 } });
        }
        else {
            optionAnimation.start({
                opacity: 0, y: 10, transition: { duration: 0.3 }, transitionEnd: { display: "none" },
            });
        }
    }, [isOpen])

    return (
        <motion.div key={title}
            animate={optionAnimation}
            className='filterOption'>
            {
                options.map(item =>
                    <FilterOptionItem clearFilter={clearFilter} query={query} setQuery={setQuery} key={item.value} title={title} value={item.value} name={item.name} />
                )
            }
        </motion.div>
    );
};

export default FilterOption;
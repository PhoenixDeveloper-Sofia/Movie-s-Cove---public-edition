import { motion } from 'framer-motion';
import { Fragment, useState } from 'react';
import { SORTING_OPTIONS } from '../../../../utils/sort';

const Sort = ({setQuery, query}) => {
    const [selectedOption, setSelectedOption] = useState(SORTING_OPTIONS[0]);

    const changeSort = (option) => {
        setSelectedOption(option)
        if(query.sort == option) return
        setQuery(
            prevState => ({
                ...prevState,
                sort: option,
                page:1
            })
        )
    }

    return (
        <div className='sort'>
            {SORTING_OPTIONS.map(option =>
                <Fragment key={option}>
                    <motion.button
                        className="sort__option"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => changeSort(option)}
                    >
                        {option}
        
                    </motion.button>
                    {option === selectedOption ?
                        <motion.div
                            animate={{ left: `${SORTING_OPTIONS.indexOf(selectedOption) * 33.33}%` }}
                            className="sort__option-active" layoutId="selectedOption" />
                        : null
                    }
                </Fragment>
            )}

        </div>
    );
};

export default Sort;
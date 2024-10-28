import React, { useEffect, useState } from 'react';
import Arrow from '../../../../img/UI/Button/Arrow.svg'
import { useAnimation, motion } from 'framer-motion';

const FilterTitle = ({ query, title, isOpen, setIsOpen }) => {
    const arrowAnimate = useAnimation()
    const [variantTitle, setVariantTitle] = useState('')
    useEffect(() => {
        if (isOpen == title) {
            arrowAnimate.start({ rotate: '270deg', transition: { duration: 0.3 } })

        }
        else {
            arrowAnimate.start({ rotate: '90deg', transition: { duration: 0.3 } });
        }
    }, [isOpen])

    useEffect(() => {
        switch (title) {
            case 'Страны':
                setVariantTitle(query.countries.length !== 0 ? query.countries.length : '')
                break;
            case 'Жанры':
                setVariantTitle(query.genres.length !== 0 ? query.genres.length : '')
                break;
            case 'Год':
                setVariantTitle(query.year.length !== 0 ? query.year.length : '')
                break;
            case 'Компании':
                setVariantTitle(query.networks.length !== 0 ? query.networks.length : '')
                break;
            case 'Тип':
                setVariantTitle(query.type.length !== 0 ? query.type.length : '')
                break;
            case 'Рейтинг':
                setVariantTitle(query.rating.length !== 0 ? query.rating : '')
                break;
        }
    }, [query])
    return (
        <motion.button className={title == "Страны" ? 'filterTitle filterTitle__first' : title == "Тип" ? 'filterTitle filterTitle__last' : 'filterTitle'} onClick={() => { isOpen == title ? setIsOpen(false) : setIsOpen(title) }}>
                <p className='filterTitle__text'>
                    {variantTitle == '' ? title 
                    : (title=='Рейтинг'&& query.rating != '') ?
                     `${title} : от ${variantTitle}`:title=='Рейтинг'? title 
                     : `${title} : ${variantTitle}`}</p>
            <motion.img key={title} animate={arrowAnimate} src={Arrow} alt={`filter ${title}`} className='filterTitle__img' />
        </motion.button>
    );
};

export default FilterTitle;
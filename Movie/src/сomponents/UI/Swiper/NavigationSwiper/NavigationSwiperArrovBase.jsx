import React, { useEffect } from 'react';
import Arrov from '../../../../img/UI/Swiper/navigationSwiperArrov.svg'
import ArrovLeft from '../../../../img/UI/Swiper/navigationSwiperArrovsLeft.svg'
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { arrovBase__Animate } from '../../../../animate/Swiper/navigationSwiperArrovBase'

const NavigationSwiperArrovBase = ({ isVisibleNavigation, NavigateClick, focus }) => {
    const focusAnimationPrev = useAnimation();
    const focusAnimationNext = useAnimation();
    useEffect(() => {
        if (focus) {
            focusAnimationPrev.start({ opacity: 1, x: 0, transition: { duration: 0.25 } });
            focusAnimationNext.start({ opacity: 1, x: 0, transition: { duration: 0.25 } });
        }
        else {
            focusAnimationPrev.start({ opacity: 0, x: -10, transition: { duration: 0.25 } });
            focusAnimationNext.start({ opacity: 0, x: 10, transition: { duration: 0.25 } });
        }
    }, [focus])

    return (
        <AnimatePresence >
            {!isVisibleNavigation.first &&
                <motion.button key={1} animate={focusAnimationPrev} className='navigationSwiperArrovBase__button-prev' onClick={() => NavigateClick("PREV")}
                    exit={{ opacity: 0 }}
                >
                    <motion.img  key={2} initial='rest'
                        whileHover='animate'
                        variants={arrovBase__Animate}
                        whileTap='tag'
                        src={ArrovLeft} alt="Prev slide"
                        exit='exit' />
                </motion.button>
            }
            {!isVisibleNavigation.last &&
                <motion.button  key={3} animate={focusAnimationNext} className='navigationSwiperArrovBase__button-next ' onClick={() => NavigateClick("NEXT")}
                > <motion.img  key={4} initial='rest'
                    whileHover='animate'
                    variants={arrovBase__Animate}
                    whileTap='tag' src={Arrov} alt="Next slide"
                    exit='exit' /></motion.button>
            }
        </AnimatePresence>
    );
};

export default NavigationSwiperArrovBase;
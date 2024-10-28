import React from 'react';
import { motion } from "framer-motion";
import { errorIconErrorNumber__Animate, errorIconErrorText__Animate, errorIconError__Animate } from '../../animate/Error/error';

const IconError = () => {
    return (
        <motion.div className='iconError'
            variants={errorIconError__Animate}
            initial='rest'
            animate='animate'>
            <p className='iconError__topText'>ИЗВИНИТЕ</p>
            <div className="iconError__notFoundBox">
                <motion.p
                    variants={errorIconErrorText__Animate}
                    animate='animate'>НЕ НАЙДЕНО</motion.p>
                <motion.p className="iconError__notFoundBox-number"
                    variants={errorIconErrorNumber__Animate}
                    animate='animate'>404</motion.p>
            </div>
        </motion.div>
    );
};

export default IconError;
import React from 'react';
import { motion } from "framer-motion";
import { errorSubText_One__Animate, errorSubText_Two__Animate} from '../../animate/Error/error';

const SubTextError = () => {
    return (
        <>
            <motion.p translate='no' 
               variants={errorSubText_One__Animate}
               initial='rest'
               animate = 'animate'
            >Houston !!!!</motion.p>
            <motion.p 
             variants={errorSubText_Two__Animate}
             initial='rest'
             animate = 'animate'>У нас проблемы</motion.p>
        </>
    );
};

export default SubTextError;
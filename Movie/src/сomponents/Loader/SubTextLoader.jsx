import React from 'react';
import {Houston_Animate, transition_text_one_Animate, transition_text_two_Animate} from '../../animate/Loader/subText';
import { motion } from "framer-motion";

const SubTextLoader = () => {
    return (
        <>
             <motion.p translate='no'  {...Houston_Animate} {...transition_text_one_Animate} >Houston !!!!</motion.p>
            <motion.p  {...Houston_Animate} {...transition_text_two_Animate}>У нас загрузка</motion.p>
        </>
    );
};

export default SubTextLoader;
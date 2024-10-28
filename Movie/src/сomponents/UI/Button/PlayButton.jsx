import React from 'react';
import Play from "../../../img/UI/Button/Play.svg"
import { motion } from 'framer-motion';
import { button_Animate } from '../../../animate/UI/Button'

const PlayButton = ({ children, ...props }) => {
    return (
        <motion.button
            variants={button_Animate}
            whileHover="hover"
            {...props} className='playButton'>
            <img src={Play} alt="Play" />
            {children}
        </motion.button>

    );
};

export default PlayButton;
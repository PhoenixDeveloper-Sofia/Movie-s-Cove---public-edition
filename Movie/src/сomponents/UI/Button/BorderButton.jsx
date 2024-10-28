import React from 'react';
import { button_Animate } from '../../../animate/UI/Button'
import { motion } from 'framer-motion';

const BorderButton = ({ children, ...props }) => {
    return (
        <motion.button
            variants={button_Animate}
            whileHover="hover"
            {...props} className="borderButton">
            {children}
        </motion.button>
    );
};

export default BorderButton;

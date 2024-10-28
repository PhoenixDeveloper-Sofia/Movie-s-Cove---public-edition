import React from 'react';
import { motion } from "framer-motion";
import Logo from '../../img/Logo/Loding_logo.svg'
import { text_Animate, logo_Animate } from '../../animate/Loader/iconLoader';

const IconLoader = () => {
    return (
        <div className='loader__box'>
        <motion.p {...text_Animate}>Загрузка</motion.p>
        <motion.img {...logo_Animate} src={Logo} alt="Logo" />
    </div>
    );
};

export default IconLoader;
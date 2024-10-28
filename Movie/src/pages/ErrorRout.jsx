import React from 'react';
import ErrorGif from '../img/ErrorGif.gif';
import { motion, LayoutGroup } from "framer-motion";
import SubTextError from '../сomponents/Error/SubTextError';
import IconError from '../сomponents/Error/IconError';
import {errorImg__Animate} from '../animate/Error/error'


const ErrorRout = () => {
    return (
           <LayoutGroup>
            <section className='error'>
                <div>
                    <div className="error__text">
                        <SubTextError/>
                        <IconError/>
                    </div>
                    <motion.img src={ErrorGif} alt="not found" className='error__img' 
                    variants={errorImg__Animate}
                    initial='rest'
                    animate = 'animate'
                    />
                </div>
            </section>
        </LayoutGroup>
    );
};

export default ErrorRout;
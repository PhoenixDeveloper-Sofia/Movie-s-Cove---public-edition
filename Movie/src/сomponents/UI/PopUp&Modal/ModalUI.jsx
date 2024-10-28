import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Cross from '../../../img/Cross.svg'
import { modal_Animat } from '../../../animate/UI/PopUp&Modal';

const ModalUI = ({ children, isVisible, setIsVisible, keyModal }) => {

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className='modal'
                    onClick={() => setIsVisible(false)}
                    key={keyModal}
                    variants={modal_Animat}
                    initial='background_initial'
                    animate='background_animate'
                    exit='background_exit'
                >
                    <motion.div
                        key={keyModal}
                        variants={modal_Animat}
                        initial=' modal_initial'
                        animate=' modal_animate'
                        exit=' modal_exit'
                        className='modal__content'
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={() => setIsVisible(false)}>
                            <img src={Cross} alt="Кнопка закрыть" className='modal__button-close' />
                        </button>
                        {children}
                    </motion.div>
                </motion.div>
            )
            }
        </AnimatePresence >
    );
};

export default ModalUI;
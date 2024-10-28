import React from 'react';
import { motion, LayoutGroup } from "framer-motion";
import loadingGif from '../img/Loading.gif'
import gif__Animate from '../animate/Loader/gifLoader'
import SubTextLoader from '../сomponents/Loader/SubTextLoader';
import IconLoader from '../сomponents/Loader/IconLoader';

const Loader = () => {
    return (
        <LayoutGroup>
            <section className='loader'>
                <div>
                    <div className="loader__text">
                        <SubTextLoader />
                        <IconLoader />
                    </div>
                    <motion.img {...gif__Animate} src={loadingGif} alt="loader" className='loader__img'/>
                </div>
            </section>
        </LayoutGroup>
    );
};

export default Loader;
import React from 'react';
import Arrow from '../../../img/UI/Button/Arrow.svg'

const NavigationButton = ({ children, alt, className,  ...props }) => {
    return (
        <button {...props} className={`navigationButton ${className}`} >
            <img src={Arrow} alt={alt} />
        </button>
    );
};

export default NavigationButton;
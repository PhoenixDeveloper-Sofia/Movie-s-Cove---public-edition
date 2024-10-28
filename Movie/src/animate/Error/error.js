
export const errorImg__Animate = {
    rest: { y: -120 },
    animate: {
        opacity: [1, 1, 0],
        transitionEnd: {
            display: "none",
        },
        transition: { duration: 1.4, times: [0, 0.95, 1] },
    },
}

export const errorSubText_One__Animate = {
    rest: { opacity: 0, y: 20 },
    animate: {
        opacity: [0, 1],
        y: [20, 0],
        transitionEnd: {
            opacity: 0,
            display: 'none'
        },
        transition: { duration: 0.7, delay: 1.8 }
    },
}

export const errorSubText_Two__Animate = {
    rest: { opacity: 0, y: 20 },
    animate: {
        opacity: [0, 1],
        y: [20, 0],
        transitionEnd: {
            opacity: 0,
            display: 'none'
        },
        transition: { duration: 0.7, delay: 2.7 }
    },
}

export const errorIconError__Animate = {
    rest: { opacity: 0, scale: 0.9 },
    animate: {
        opacity: [0, 1],
        rotate: 0,
        scale: 1,
        transition: { duration: 0.3, delay: 3.7 }
    },
}

export const errorIconErrorText__Animate = {
    animate: {
        opacity: [1, 0, 0, 1],
        x: [0, 18, 18, 0],
        transition: {
            times: [0,0.065,0.935,1],
            duration: 7.9,
            delay: 5.2,
            repeat: Infinity,
            repeatType:'animate',
            repeatDelay: 30
        }
    },
}
export const errorIconErrorNumber__Animate = {
    animate: {
        scale: [1,1,1.8,1.8,1.8,1],
        x:[0,-120,-120,-120,0,0],
        transition: {
            times: [0.1,0.2,0.25,0.85,0.9,1],
            duration: 8,
            delay: 5,
            repeat: Infinity,
            repeatType:'animate',
            repeatDelay: 30
        }
    },
}
export const text_Animate = {
    initial:{ opacity: 0, x: 70 },
    animate : {
        opacity: [0, 1],
        x: [20, 0],

    },
    transition :{
        duration: 0.45,
        delay: 4.6,
        repeat: Infinity,
        repeatType: 'mirror',
        repeatDelay: 6
    }
}

export const logo_Animate = {
    initial:{opacity: 0 },
    animate:{
        opacity: [0, 1],
    },
    transition:{
        duration: 0.4, 
        delay: 4, 
        repeat: Infinity,
         repeatType: 'mirror',
          repeatDelay: 6 }
}

 export const Houston_Animate = {
    initial:{ opacity: 0, y: 20 },
    animate : {
        opacity: [0, 1],
        y: [20, 0],
        transitionEnd: {
            opacity: 0,
            display: 'none'
        },},
} 

export const transition_text_one_Animate = {
    transition:{ duration: 0.7, delay: 2 }
}

export const transition_text_two_Animate = {
    transition:{ duration: 0.7, delay: 2.85 }
}

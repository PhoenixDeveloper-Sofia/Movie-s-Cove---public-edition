const gif__Animate={
    initial:{ opacity: 1 },
    animate:{
        opacity: [1, 1, 0],
        transitionEnd: {
            display: "none",
        },
    },
    transition:{ duration: 1.85, times: [0, 0.98, 1] } ,
}

export default gif__Animate
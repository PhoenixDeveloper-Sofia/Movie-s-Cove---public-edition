import {supportAPI} from '../../querys/info/supportQuery'


const supportEndpoints = supportAPI.injectEndpoints({
    endpoints:(build) =>({
        fetchTrailer: build.query({
            query: (id) => ({
                url:`${id}/videos`,
                headers:{ "X-API-KEY":`${import.meta.env.VITE_REACT_APP_SUPPORT_KEY}`},
            })
        }),
        fetchTopPopularAll: build.query({
            query: (page) => ({
                url:`${import.meta.env.VITE_REACT_APP_SUPPORT_ENDPOINTS_TOP_POPULAR_ALL}${page}`,
                headers:{ "X-API-KEY":`${import.meta.env.VITE_REACT_APP_SUPPORT_KEY}`},
            })
        }),
        fetchPopularSeries: build.query({
            query: () => ({
                url:`${import.meta.env.VITE_REACT_APP_SUPPORT_ENDPOINTS_POPULAR_SERIES}`,
                headers:{ "X-API-KEY":`${import.meta.env.VITE_REACT_APP_SUPPORT_KEY}`},
            })
        }),
        fetchVampire: build.query({
            query: () => ({
                url:`${import.meta.env.VITE_REACT_APP_SUPPORT_ENDPOINTS_VAMPIRE_THEME}`,
                headers:{ "X-API-KEY":`${import.meta.env.VITE_REACT_APP_SUPPORT_KEY}`},
            })
        }),
        fetchComics: build.query({
            query: () => ({
                url:`${import.meta.env.VITE_REACT_APP_SUPPORT_ENDPOINTS_COMICS_THEM}`,
                headers:{ "X-API-KEY":`${import.meta.env.VITE_REACT_APP_SUPPORT_KEY}`},
            })
        }),
        fetchFamily: build.query({
            query: () => ({
                url:`${import.meta.env.VITE_REACT_APP_SUPPORT_ENDPOINTS_FAMILY}`,
                headers:{ "X-API-KEY":`${import.meta.env.VITE_REACT_APP_SUPPORT_KEY}`},
            })
        }),
        fetchLove: build.query({
            query: () => ({
                url:`${import.meta.env.VITE_REACT_APP_SUPPORT_ENDPOINTS_LOVE_THEME}`,
                headers:{ "X-API-KEY":`${import.meta.env.VITE_REACT_APP_SUPPORT_KEY}`},
            })
        }),
        fetchZombie: build.query({
            query: () => ({
                url:`${import.meta.env.VITE_REACT_APP_SUPPORT_ENDPOINTS_ZOMBIE_THEME}`,
                headers:{ "X-API-KEY":`${import.meta.env.VITE_REACT_APP_SUPPORT_KEY}`},
            })
        }),
        fetchCatastrophe: build.query({
            query: () => ({
                url:`${import.meta.env.VITE_REACT_APP_SUPPORT_ENDPOINTS_CATASTROPHE_THEME}`,
                headers:{ "X-API-KEY":`${import.meta.env.VITE_REACT_APP_SUPPORT_KEY}`},
            })
        }),
        fetchKidsAnimation: build.query({
            query: () => ({
                url:`${import.meta.env.VITE_REACT_APP_SUPPORT_ENDPOINTS_KIDS_ANIMATION}`,
                headers:{ "X-API-KEY":`${import.meta.env.VITE_REACT_APP_SUPPORT_KEY}`},
            })
        }),
    })
})

export const { useFetchTrailerQuery, useFetchTopPopularAllQuery, useFetchPopularSeriesQuery, useFetchCatastropheQuery, useFetchComicsQuery, useFetchFamilyQuery, useFetchKidsAnimationQuery, useFetchVampireQuery, useFetchZombieQuery, useFetchLoveQuery } = supportEndpoints
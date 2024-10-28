import useGetDate from '../../../hooks/useGetDate'
import {movieAPI} from '../../querys/info/kinopoiskQuery'

const [startDate, endDate]=  useGetDate()

const movieEndpoints = movieAPI.injectEndpoints({
    endpoints:(build) =>({
        fetchNowMovie: build.query({
            query: () => ({
                url:`${import.meta.env.VITE_REACT_APP_KINOPOISK_ENDPOINTS_NOW_MOVIE_URL}${startDate}-${endDate}`,
                headers:{ "X-API-KEY":`${import.meta.env.VITE_REACT_APP_KINOPOISK_KEY}`},
            })
        }),
        fetchContentById: build.query({
            query: (id) => ({
                url:`${import.meta.env.VITE_REACT_APP_KINOPOISK_ENDPOINTS_CONTENT_BY_ID}${id}`,
                headers:{ "X-API-KEY":`${import.meta.env.VITE_REACT_APP_KINOPOISK_KEY}`},
            })
        }),
        fetchContentFilters: build.query({
            query: ({page, sort, type, isSeries, year, rating, genres, networks, countrys}) => ({
                url:`movie?page=${page}${import.meta.env.VITE_REACT_APP_KINOPOISK_ENDPOINTS_CONTENT_FILTERS}${(sort!="" && sort!= "Стандарт") ? sort=='По рейтингу' ? `&sortField=rating.kp&sortType=-1` :  `&sortField=year&sortType=-1` : '&sortField=year&sortType=-1&sortField=votes.kp&sortType=-1'}${type.length !== 0 ? type.map(typeNumber =>`&typeNumber=${typeNumber}`).join(''):''}${isSeries? `&isSeries=true` : `&isSeries=false`}${year.length !== 0? year.map(year =>`&year=${year}`).join(''):`&year=1874-${new Date().getFullYear()}`}${(rating.length !== 0 && rating !== 'Рейтинг') ? `&rating.kp=${rating}-10` : "&rating.kp=3-10"}${genres.length !== 0 ? genres.map(genre =>`&genres.name=${genre}`).join('') : ''}${networks.length !== 0 ? networks.map(network =>`&networks.items.name=${network}`).join('') : ''}${countrys.length !== 0 ? countrys.map(country =>`&countries.name=${country}`).join('') : ''}`,
                headers:{ "X-API-KEY":`${import.meta.env.VITE_REACT_APP_KINOPOISK_KEY}`},
            })
        }),
        fetchWorldNew: build.query({
            query: () => ({
                url:`${import.meta.env.VITE_REACT_APP_KINOPOISK_ENDPOINTS_WORLD_NEW}&year=${new Date().getFullYear()}`,
                headers:{ "X-API-KEY":`${import.meta.env.VITE_REACT_APP_KINOPOISK_KEY}`},
            })
        }),
        fetchTop10: build.query({
            query: () => ({
                url:`${import.meta.env.VITE_REACT_APP_KINOPOISK_ENDPOINTS_TOP_10}`,
                headers:{ "X-API-KEY":`${import.meta.env.VITE_REACT_APP_KINOPOISK_KEY}`},
            })
        }),
        fetchNewCartoon: build.query({
            query: () => ({
                url:`${import.meta.env.VITE_REACT_APP_KINOPOISK_ENDPOINTS_NEW_CARTOON}&year=${new Date().getFullYear()}`,
                headers:{ "X-API-KEY":`${import.meta.env.VITE_REACT_APP_KINOPOISK_KEY}`},
            })
        }),
        fetchNewMovie: build.query({
            query: () => ({
                url:`${import.meta.env.VITE_REACT_APP_KINOPOISK_ENDPOINTS_NEW_MOVIE}&year=${new Date().getFullYear()}`,
                headers:{ "X-API-KEY":`${import.meta.env.VITE_REACT_APP_KINOPOISK_KEY}`},
            })
        }),
    })
})

export const { useFetchNowMovieQuery, useFetchContentByIdQuery, useFetchContentFiltersQuery, useFetchWorldNewQuery, useFetchTop10Query, useFetchNewCartoonQuery, useFetchNewMovieQuery  } = movieEndpoints
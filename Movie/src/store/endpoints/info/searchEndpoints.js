import { searchAPI } from "../../querys/info/searchQuery"


const searchEndpoints = searchAPI.injectEndpoints({
    endpoints:(build) =>({
        searchСontent: build.query({
            query: ({keyword,page}) => ({
                url:`${import.meta.env.VITE_REACT_APP_SEARCH_URL}${keyword}&page=${page}`,
                headers:{ "X-API-KEY":`${import.meta.env.VITE_REACT_APP_SUPPORT_KEY}`},
            })
        }),
    })
})

export const { useSearchСontentQuery } = searchEndpoints
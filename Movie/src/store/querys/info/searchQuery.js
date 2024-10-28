import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const searchAPI = createApi({
    reducerPath: 'searchAPI',
    baseQuery: fetchBaseQuery ({baseUrl:`${import.meta.env.VITE_REACT_APP_SEARCH_BASE_URL }`}),
      endpoints: () => ({}),
})
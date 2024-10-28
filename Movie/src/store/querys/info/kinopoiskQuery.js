import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const movieAPI = createApi({
    reducerPath: 'movieAPI',
    baseQuery: fetchBaseQuery ({baseUrl:`${import.meta.env.VITE_REACT_APP_KINOPOISK_BASE_URL }`}),
      endpoints: () => ({}),
})
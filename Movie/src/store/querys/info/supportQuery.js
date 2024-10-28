import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const supportAPI = createApi({
    reducerPath: 'supportAPI',
    baseQuery: fetchBaseQuery ({baseUrl:`${import.meta.env.VITE_REACT_APP_SUPPORT_BASE_URL }`}),
      endpoints: () => ({}),
})
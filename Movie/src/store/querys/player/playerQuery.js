import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const playerAPI = createApi({
    reducerPath: 'playerAPI',
    baseQuery: fetchBaseQuery ({baseUrl:`${import.meta.env.VITE_REACT_APP_PLAYER_BASE_URL }`}),
      endpoints: () => ({}),
})
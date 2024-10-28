import {configureStore} from '@reduxjs/toolkit'
import {movieAPI} from './querys/info/kinopoiskQuery'
import { supportAPI } from './querys/info/supportQuery'
import { playerAPI } from './querys/player/playerQuery'
import { searchAPI } from './querys/info/searchQuery'

export const store = configureStore({
    reducer:{
        [movieAPI.reducerPath]: movieAPI.reducer,
        [supportAPI.reducerPath]: supportAPI.reducer,
        [playerAPI.reducerPath]: playerAPI.reducer,
        [searchAPI.reducerPath]: searchAPI.reducer,
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieAPI.middleware, supportAPI.middleware, searchAPI.middleware, playerAPI.middleware),
})

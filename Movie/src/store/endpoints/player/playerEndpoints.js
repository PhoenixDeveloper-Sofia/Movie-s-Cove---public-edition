import {playerAPI} from '../../querys/player/playerQuery'


const playerEndpoints = playerAPI.injectEndpoints({
    endpoints:(build) =>({
        fetchPlayer: build.query({
            query: (id) => ({
                url:`?kinopoisk=${id}`,
            })
        }),
    })
})

export const { useFetchPlayerQuery } = playerEndpoints
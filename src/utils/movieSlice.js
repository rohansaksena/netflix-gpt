import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null
    },
    reducers:{
        addNowPlayingMovies:(state, actions) => {
            state.nowPlayingMovies = actions.payload
        },
        addPopularMovies:(state, actions) => {
            state.popularMovies = actions.payload
        },
        addUpcomingMovies:(state, actions) => {
            state.upcomingMovies = actions.payload
        },
        addTopRatedMovies:(state, actions) => {
            state.topratedMovies = actions.payload
        },
        addTrailerVideos:(state, actions) => {
            state.trailerVideo = actions.payload
        }
    }
})


export const {addNowPlayingMovies, addTrailerVideos, addPopularMovies, addUpcomingMovies, addTopRatedMovies} = movieSlice.actions

export const movieReducer = movieSlice.reducer
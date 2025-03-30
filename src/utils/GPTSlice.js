import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState:{
        gptMovies:null,
        movieResults: null 
    },
    reducers:{
        addGptMovieResults:(state, action) => {
            const{gptMovies, movieResults} = action.payload
            state.gptMovies = gptMovies;
            state.movieResults = movieResults;
        }
    }
})

export const {addGptMovieResults} = gptSlice.actions;
export const gptReducer = gptSlice.reducer;
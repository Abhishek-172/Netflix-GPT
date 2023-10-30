import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieResults: null,
        movieNames: null
    }, //Current state is empty object, but we will add a data in here
    reducers: { //Object that have multiple actions, i.e. a functions 
        toggleGptSearchView: (state, action) => {
            // Toggle Mechanism
            state.showGptSearch = !state.showGptSearch;
        },
        addGPTMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieResults = movieResults;
            state.movieNames = movieNames;
        }
    },
});

export const { toggleGptSearchView, addGPTMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
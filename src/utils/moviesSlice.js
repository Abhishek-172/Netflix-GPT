import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
    }, //Current state is empty object, but we will add a nowPlaying movies data in here
    reducers: { //Object that have multiple actions, i.e. a functions 
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;             
        }
    }
})

export const { addNowPlayingMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
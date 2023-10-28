import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
    }, //Current state is empty object, but we will add a nowPlaying movies data in here
    reducers: { //Object that have multiple actions, i.e. a functions 
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;             
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
})

export const { addNowPlayingMovies, addTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;
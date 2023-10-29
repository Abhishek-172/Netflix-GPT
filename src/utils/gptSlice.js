import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false
    }, //Current state is empty object, but we will add a data in here
    reducers: { //Object that have multiple actions, i.e. a functions 
        toggleGptSearchView: (state, action) => {
            // Toggle Mechanism
            state.showGptSearch = !state.showGptSearch;
        },
    },
});

export const { toggleGptSearchView } = gptSlice.actions;

export default gptSlice.reducer;
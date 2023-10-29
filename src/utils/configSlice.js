import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        lang: "en"
    }, //Current state is empty object, but we will add a data in here
    reducers: { //Object that have multiple actions, i.e. a functions 
        changeLanguage: (state, action) => {
            // Toggle Mechanism
            state.lang = action.payload;
        },
    },
});

export const { changeLanguage } = configSlice.actions;

export default configSlice.reducer;
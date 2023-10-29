import {configureStore} from "@reduxjs/toolkit";
import userSliceReducer from "../utils/userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
	//It will take a reducer
    reducer: {
        user: userSliceReducer,
        movies: moviesReducer,
        gptSearch: gptReducer
    },
});				

export default appStore;
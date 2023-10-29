import {configureStore} from "@reduxjs/toolkit";
import userSliceReducer from "../utils/userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configSliceReducer from "./configSlice";

const appStore = configureStore({
	//It will take a reducer
    reducer: {
        user: userSliceReducer,
        movies: moviesReducer,
        gptSearch: gptReducer,
        config: configSliceReducer
    },
});				

export default appStore;
import {configureStore} from "@reduxjs/toolkit";
import userSliceReducer from "../utils/userSlice";
import moviesReducer from "./moviesSlice";

const appStore = configureStore({
	//It will take a reducer
    reducer: {
        user: userSliceReducer,
        movies: moviesReducer
    },
});				

export default appStore;
import {configureStore} from "@reduxjs/toolkit";
import userSliceReducer from "../utils/userSlice";

const appStore = configureStore({
	//It will take a reducer
    reducer: {
        user: userSliceReducer
    },
});				

export default appStore;
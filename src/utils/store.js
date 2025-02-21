import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import LiveComments from "./LiveComments";

const store = configureStore({
    reducer : {
        app: appSlice,
        search: searchSlice,
        comments: LiveComments,
    }
})

export default store;
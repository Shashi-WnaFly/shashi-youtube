import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: false,
        popularYoutubeVideos: null,
    },
    reducers: {
        isMenuOpen: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        addPopularYoutubeVideo: (state, action) => {
            state.popularYoutubeVideos = action.payload;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
    }
})

export const {isMenuOpen, addPopularYoutubeVideo, closeMenu} = appSlice.actions;
export default appSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: false,
    },
    reducers: {
        isMenuOpen: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        }
    }
})

export const {isMenuOpen} = appSlice.actions;
export default appSlice.reducer;
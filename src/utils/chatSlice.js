import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "comments",
    initialState: {
        messages:[],
    },
    reducers: {
        addMessages : (state, action) => {
            if(state.messages.length >= 25) state.messages.splice(25, 1);
            state.messages.unshift(action.payload);
        }
    }

})

export const {addMessages} = chatSlice.actions;

export default chatSlice.reducer;
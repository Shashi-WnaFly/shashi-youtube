import { createSlice } from "@reduxjs/toolkit";

const LiveComments = createSlice({
    name: "comments",
    initialState: {
        messages:[],
    },
    reducers: {
        addMessages : (state, action) => {
            if(state.messages.length >= 25) state.messages.shift();
            state.messages.push(action.payload);
        }
    }

})

export const {addMessages} = LiveComments.actions;

export default LiveComments.reducer;
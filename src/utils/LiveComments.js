import { createSlice } from "@reduxjs/toolkit";

const LiveComments = createSlice({
    name: "comments",
    initialState: {
        messages:[],
    },
    reducers: {
        addMessages : (state, action) => {
            state.messages.push(action.payload);
        }
    }

})

export const {addMessages} = LiveComments.actions;

export default LiveComments.reducer;
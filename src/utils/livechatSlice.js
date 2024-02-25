import { createSlice } from "@reduxjs/toolkit";

const livechatSlice = createSlice({
    name: "livechat",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.push(action.payload);
        },
        removeMessage: (state, action) => {
            const indexToRemove = action.payload;
            state.messages = [
                ...state.messages.slice(0, indexToRemove),
                ...state.messages.slice(indexToRemove + 1)
            ];
        },
        emptyAll:(state)=>{
            state.messages=[]
        }
    }
});

export default livechatSlice.reducer;
export const { addMessage, removeMessage, emptyAll } = livechatSlice.actions;

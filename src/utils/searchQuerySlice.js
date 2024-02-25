import {createSlice} from "@reduxjs/toolkit";

const searchQuerySlice=createSlice({
      name:"searchQuery",
      initialState:{
        search:"",
        showSuggestion:false,
      },
      reducers:{
        addState: (state,action)=>{
             state.search=action.payload
        },
        removeState:(state)=>{
             state.search="";
        },
        setSuggestion:(state,action)=>{
            state.showSuggestion=action.payload;
        }
      }
})

export default searchQuerySlice.reducer;
export const {addState, removeState,setSuggestion} = searchQuerySlice.actions;
import {createSlice} from "@reduxjs/toolkit";

const videosByKeywordSlice=createSlice({
      name:"videosByKeyword",
      initialState:{
        stateToshowResultedVideos:false,
        data:null},
      reducers:{
        addVideos: (state,action)=>{
            state.data=action.payload
        },
        setStateToshowResultedVideos:(state,action)=>{
            state.stateToshowResultedVideos=action.payload
        }
      }
})

export default videosByKeywordSlice.reducer;
export const {addVideos,setStateToshowResultedVideos} = videosByKeywordSlice.actions;
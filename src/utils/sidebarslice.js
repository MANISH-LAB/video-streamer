import {createSlice} from "@reduxjs/toolkit";

const sidebarSlice=createSlice({
      name:"sidebar",
      initialState:{
        isMenuOpen:false,
      },
      reducers:{
        toggleMenu: (state)=>{
            state.isMenuOpen=!state.isMenuOpen;
        }
      }
})

export default sidebarSlice.reducer;
export const {toggleMenu} = sidebarSlice.actions;
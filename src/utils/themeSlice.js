import {createSlice} from "@reduxjs/toolkit";

const themeSlice=createSlice({
      name:"theme",
      initialState:{
        theme:"light",
      },
      reducers:{
        toggleTheme: (state)=>{
            if(state.theme==="light"){
                state.theme="dark";
                document.documentElement.classList.add("dark");
            }else{
                state.theme="light";
                document.documentElement.classList.remove("dark");
            }
        }
      }
})

export default themeSlice.reducer;
export const {toggleTheme} = themeSlice.actions;
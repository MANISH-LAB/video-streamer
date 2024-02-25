import React from 'react'
import FilterBtn from './FilterBtn'
import {Outlet} from "react-router-dom"

const MainContainer = () => {
   
  
  return (
    <div className='flex-1'>
        <FilterBtn/>
       <Outlet/>
    </div>
  )
}

export default MainContainer
import React from 'react'
import SideBar from './SideBar'
import Header from './Header'
import {Outlet} from "react-router-dom"
const Body = () => {
  return (
    <div>
    <Header/>
    <div className='flex'>
        
        <SideBar/>
        <Outlet/>
    </div>
    </div>
  )
}

export default Body
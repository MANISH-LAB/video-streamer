import React from 'react'
import SideBar from './SideBar'
import Header from './Header'
import {Outlet} from "react-router-dom"
import { useSelector } from 'react-redux'
const Body = () => {
  const isMenuOpen = useSelector((store) => store.sidebar.isMenuOpen);
  return (
    <div>
    <Header/>
    <div className='flex dark:bg-black'>
        
        <SideBar/>
        
        <Outlet/>

    </div>
    </div>
  )
}

export default Body
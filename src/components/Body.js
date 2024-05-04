import React from 'react'
import SideBar from './SideBar'
import Header from './Header'
import {Outlet} from "react-router-dom"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/sidebarslice'
const Body = () => {
  const dispatch=useDispatch();
  const isMenuOpen = useSelector((store) => store.sidebar.isMenuOpen);
 
  // const handleclick=()=>{
  //   if(isMenuOpen){
  //     dispatch(toggleMenu());
  //   }

  // }
  // document.addEventListener('click',handleclick());
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
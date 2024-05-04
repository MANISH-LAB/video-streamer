// Header.js

import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/sidebarslice';
import { useNavigate } from 'react-router-dom';
import SearchVideos from './SearchVideos';
import { setStateToshowResultedVideos } from '../utils/videosByKeywordSlice';
import { removeState } from '../utils/searchQuerySlice';
import {useSelector} from 'react-redux';
import { toggleTheme } from '../utils/themeSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [theme,setTheme]=useState('light');
    const current_theme=useSelector((store)=>store.theme.theme);
    const clickMenu = () => {
        dispatch(toggleMenu());
    };

    const youtubeClickHandler = () => {
        dispatch(setStateToshowResultedVideos(false));
        dispatch(removeState());
        navigate('/');
    };

    const clickhandler=()=>{
        dispatch(toggleTheme());
        if(theme==='light'){
        setTheme("dark");}
        else{
            setTheme("light");
        }
      
    };

    return (
        <div className='grid grid-cols-4 dark:bg-gray-800 dark:text-white p-5  h-[4%] items-center md:items-start'>
            <div className='flex items-center col-span-1'  >
                <img
                    className='w-8 h-8 cursor-pointer dark:hidden'
                    onClick={clickMenu}
                    alt='sidebar icon'
                    src='https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png'
                />
                <img
                    className='w-8 h-8 cursor-pointer hidden dark:block'
                    onClick={clickMenu}
                    alt='sidebar icon'
                    src='../whiteburger.png'
                />
                <img
                    alt='youtube icon'
                    className='w-24 h-16 ml-2 cursor-pointer'
                    onClick={youtubeClickHandler}
                    src='../appicon.png'
                />
            </div>
            <SearchVideos />
            <div className='flex justify-end items-center col-span-1'>
                <div className='w-auto h-auto  bg-white border dark:bg-black dark:text-white border-black p-2 rounded-full cursor-pointer' onClick={clickhandler}
                >{theme}</div>
            </div>
        </div>
    );
};

export default Header;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/sidebarslice';
import { useNavigate } from 'react-router-dom';
import SearchVideos from './SearchVideos';
import { setStateToshowResultedVideos } from '../utils/videosByKeywordSlice';
import { removeState } from '../utils/searchQuerySlice';
import { useSelector } from 'react-redux';
import { toggleTheme } from '../utils/themeSlice';
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';
// Correct import statement

const Header = () => {
  const [searchClickedMobile, setSearchClickedMobile] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [theme, setTheme] = useState('light');
  const current_theme = useSelector((store) => store.theme.theme);

  const clickMenu = () => {
    dispatch(toggleMenu());
  };

  const handleSearchClickMobile = () => {
    if (window.innerWidth <= '640px') {
      setSearchClickedMobile(!searchClickedMobile);
    }
  };

  const youtubeClickHandler = () => {
    dispatch(setStateToshowResultedVideos(false));
    dispatch(removeState());
    navigate('/');
  };

  const clickhandler = () => {
    dispatch(toggleTheme());
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    
        <div className='grid grid-cols-4 dark:bg-gray-800 dark:text-white p-5 h-[4%] items-center md:items-start'>
          <div className='flex items-center col-span-1'>
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
          <div className='flex justify-end items-center col-span-1 group relative'>
            <div
              className='w-auto h-auto bg-white border dark:bg-black dark:text-white border-black p-2 rounded-full cursor-pointer'
              onClick={clickhandler}
            >
              {current_theme === 'dark' ? (
                <CiLight className='bg-yellow-400 font-bold rounded-full p-2  text-4xl' />
              ) : (
                <MdDarkMode className='bg-blue-700 font-bold rounded-full p-2 text-4xl' />
              )}
            </div>
            <div className='opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute top-14 right-0 bg-black text-white p-2 rounded-md'>
              Toggle Theme
            </div>
          </div>
        </div>
      
  );
};

export default Header;

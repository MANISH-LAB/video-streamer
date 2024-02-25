// Header.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/sidebarslice';
import { useNavigate } from 'react-router-dom';
import SearchVideos from './SearchVideos';
import { setStateToshowResultedVideos } from '../utils/videosByKeywordSlice';
import { removeState } from '../utils/searchQuerySlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const clickMenu = () => {
        dispatch(toggleMenu());
    };

    const youtubeClickHandler = () => {
        dispatch(setStateToshowResultedVideos(false));
        dispatch(removeState());
        navigate('/');
        
    };

    

    return (
        <div className='grid grid-cols-3 p-5 m-5 h-[4%] items-start'>
            <div className='flex items-center'>
                <img
                    className='w-8 h-8 cursor-pointer'
                    onClick={clickMenu}
                    alt='sidebar icon'
                    src='https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png'
                />
                <img
                    alt='youtube icon'
                    className='w-24 h-16 ml-2 cursor-pointer'
                    onClick={youtubeClickHandler}
                    src='https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg?w=414'
                />
            </div>
            <SearchVideos />
            <div className='flex justify-end items-center'>
                <img
                    alt='user'
                    src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
                    className='w-8 h-8'
                />
            </div>
        </div>
    );
};

export default Header;

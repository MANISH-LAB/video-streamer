// SideBar.js

import React from 'react';
import { useSelector } from 'react-redux';
import { GoHome } from 'react-icons/go';
import { SiYoutubeshorts } from 'react-icons/si';
import { GoVideo } from 'react-icons/go';
import { TbLivePhoto } from 'react-icons/tb';
import { IoMusicalNote } from 'react-icons/io5';
import { SiYoutubegaming } from 'react-icons/si';
import { GoTrophy } from 'react-icons/go';
import { MdMovie } from 'react-icons/md';
import {useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import { setStateToshowResultedVideos } from '../utils/videosByKeywordSlice';
import { removeState } from '../utils/searchQuerySlice';
const SideBar = () => {
    const isMenuOpen = useSelector((store) => store.sidebar.isMenuOpen);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const homeClickHandler=()=>{
      dispatch(setStateToshowResultedVideos(false));
      dispatch(removeState());
      navigate("/")
    }
    if (!isMenuOpen) return null;

    return (
        <div className='p-8 w-39% border border-black text-black bg-white h-[80%]'>
            <div className='shadow-md border border-t-4 border-gray-700 border-x-0 '>
                <ul className='py-2 cursor-pointer'>
                  
                        
                        <li className='hover:bg-gray-700 hover:font-semibold hover:text-white py-2 pl-4 flex w-40'
                        onClick={homeClickHandler}
                        >
                            <GoHome className='mt-1 mr-1' /> Home{' '}
                        </li>
                    
                    <li className='hover:bg-gray-700 hover:font-semibold hover:text-white py-2 pl-4 flex w-40'>
                        {' '}
                        <SiYoutubeshorts className='mt-1 mr-1' />
                        Shorts
                    </li>
                    <li className='hover:bg-gray-700 hover:font-semibold hover:text-white py-2 pl-4 flex w-40'>
                        {' '}
                        <GoVideo className='mt-1 mr-1' />
                        Videos
                    </li>
                    <li className='hover:bg-gray-700 hover:font-semibold hover:text-white py-2 pl-4 flex w-40'>
                        {' '}
                        <TbLivePhoto className='mt-1 mr-1' />
                        Live
                    </li>
                </ul>
            </div>
            <div className='shadow-md border border-t-4 border-gray-700 border-x-0'>
                <h4 className='font-bold'>Subscriptions</h4>
                <ul className='py-2 cursor-pointer'>
                    <li className='hover:bg-gray-700 hover:font-semibold hover:text-white py-2 pl-4 flex w-40'>
                        {' '}
                        <IoMusicalNote className='mt-1 mr-1' />
                        Music
                    </li>
                    <li className='hover:bg-gray-700 hover:font-semibold hover:text-white py-2 pl-4 flex w-40'>
                        {' '}
                        <GoTrophy className='mt-1 mr-1' />
                        Sports
                    </li>
                    <li className='hover:bg-gray-700 hover:font-semibold hover:text-white py-2 pl-4 flex w-40'>
                        {' '}
                        <SiYoutubegaming className='mt-1 mr-1' />
                        Gaming
                    </li>
                    <li className='hover:bg-gray-700 hover:font-semibold hover:text-white py-2 pl-4 flex w-40'>
                        {' '}
                        <MdMovie className='mt-1 mr-1' />
                        Movies
                    </li>
                </ul>
            </div>
            <div className='shadow-md border border-y-4 border-gray-700 border-x-0'>
                <h4 className='font-bold'>Watch</h4>
                <ul className='py-2 cursor-pointer'>
                    <li className='hover:bg-gray-700 hover:font-semibold hover:text-white py-2 pl-4 flex w-40'>
                        {' '}
                        <IoMusicalNote className='mt-1 mr-1' />
                        Music
                    </li>
                    <li className='hover:bg-gray-700 hover:font-semibold hover:text-white py-2 pl-4 flex w-40'>
                        {' '}
                        <GoTrophy className='mt-1 mr-1' />
                        Sports
                    </li>
                    <li className='hover:bg-gray-700 hover:font-semibold hover:text-white py-2 pl-4 flex w-40'>
                        {' '}
                        <SiYoutubegaming className='mt-1 mr-1' />
                        Gaming
                    </li>
                    <li className='hover:bg-gray-700 hover:font-semibold hover:text-white py-2 pl-4 flex w-40'>
                        {' '}
                        <MdMovie className='mt-1 mr-1' />
                        Movies
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;

import React, { useState, useEffect } from 'react';
import Suggestion from './Suggestion';
import { SEARCH_SUGGESTION, GET_VIDEOS_BY_KEYWORD } from '../utils/constants';
import { addVideos, setStateToshowResultedVideos } from '../utils/videosByKeywordSlice';
import { useDispatch, useSelector } from 'react-redux';
import { addState, setSuggestion } from '../utils/searchQuerySlice';
import { useNavigate } from 'react-router-dom';

const SearchVideos = () => {
    const [showSuggestions, setShowSuggestions] = useState([]);
    const dispatch = useDispatch();
    const state = useSelector((store) => store.searchQuery.search);
    const showSuggestion = useSelector((store) => store.searchQuery.showSuggestion);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (showSuggestion) {
                fetchSearchData();
            }
        }, 200);

        return () => {
            clearTimeout(timer);
        };
    }, [state, showSuggestion]);

    const fetchSearchData = async () => {
        const data = await fetch(SEARCH_SUGGESTION + state);
        const json = await data.json();
        setShowSuggestions(json[1]);
    };

    const clickHandler = async () => {
        const data = await fetch(GET_VIDEOS_BY_KEYWORD + state);
        const json = await data.json();
        dispatch(addVideos(json.items));
        dispatch(setStateToshowResultedVideos(true));
        dispatch(setSuggestion(false));
        navigate('/');
    };

    const handleInputFocus = () => {
        dispatch(setSuggestion(true));
    };

    const handleInputBlur = () => {
        setTimeout(() => {
            dispatch(setSuggestion(false));
        }, 300); // Increased timeout duration
    };

    return (
        <div className='md:col-span-2 col-span-4'>
            <div className='w-full flex items-center '>
                <button className='rounded-l-full bg-gray-100 dark:bg-gray-800 dark:text-white p-2 border dark:border-white sm:p-4 px-2'>Search:</button>
                <input
                    className='w-screen md:w-2/2 col-span-2 bg-gray-100 dark:bg-gray-800 border dark:border-white hover:border-blue-800 dark:text-white select-none outline-none p-2 sm:p-4'
                    type='text'
                    value={state}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    onChange={(e) => dispatch(addState(e.target.value))}
                />
                <button className='  rounded-r-full border md:border-white md:rounded-l-none bg-gray-200 p-2 md:p-4  md:ml-0' onClick={clickHandler}>
                    🔍
                </button>
            </div>
            {showSuggestion && (
                <div className=' md:fixed md:col-span-2 md:mr-40 md:w-[40%] md:ml-20 md:w-2/2 h-screen md:overflow-hidden overflow-y-scroll md:h-auto bg-white rounded-lg'>
                    <Suggestion data={showSuggestions} />
                </div>
            )}
        </div>
    );
};

export default SearchVideos;

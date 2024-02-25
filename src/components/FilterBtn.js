import React, { useState } from 'react';
import { GET_VIDEOS_BY_KEYWORD } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addVideos } from '../utils/videosByKeywordSlice';
import { setStateToshowResultedVideos } from '../utils/videosByKeywordSlice';
import { setSuggestion } from '../utils/searchQuerySlice';

const btns = [
    "Trending", "Gaming", "Live", "News", "Dance", "Soccer", "Cricket", "Music",
    "Sprituality", "PodCasts", "Krishna"
];

const FilterBtn = () => {
    const dispatch = useDispatch();
    const [activeButton, setActiveButton] = useState('');

    const clickHandler = async (e) => {
        const content = e.target.textContent;
        const data = await fetch(GET_VIDEOS_BY_KEYWORD + content);
        const json = await data.json();
        dispatch(addVideos(json.items));
        dispatch(setStateToshowResultedVideos(true));
        dispatch(setSuggestion(false));  // Close suggestion box on button click
        setActiveButton(content);
    };

    return (
        <div>
            <ul className='flex flex-wrap px-2'>
                {btns.map((e) => {
                    const isActive = activeButton === e;
                    return (
                        <li
                            key={e}
                            className={`rounded-lg p-2 m-2 cursor-pointer ${
                                isActive ? 'bg-slate-600 text-white' : 'bg-gray-300 hover:bg-slate-600 hover:text-white'
                            }`}
                            onClick={clickHandler}
                        >
                            {e}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default FilterBtn;

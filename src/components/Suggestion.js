import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addState } from '../utils/searchQuerySlice';

const Suggestion = ({ data }) => {
    const dispatch = useDispatch();

    const clickHandler = (e) => {
        const content = e.target.textContent;
        dispatch(addState(content));
    };

    return (
        <div className='m-2 p-2 col-span-2 suggestion-container dark:bg-gray-800 dark:text-white'>
            {data.map((e, i) => {
                return (
                    <p
                        key={i}
                        className='hover:bg-gray-700 px-2 cursor-pointer hover:text-white p-2 sm:p-4'
                        onClick={clickHandler}
                    >
                        {e}
                    </p>
                );
            })}
        </div>
    );
};

export default Suggestion;

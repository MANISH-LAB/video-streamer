import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Comment from './Comment';
import LiveChat from './LiveChat';
import NestedCommentList from './NestedCommentList';

const Video = () => {
    const [searchParams] = useSearchParams();
    const vid = searchParams.get('v');

    return (
        <div className='px-5 py-2 mx-5 my-2 flex-1 overflow-hidden'>
            <div className='w-[90%] sm:w-screen h-[350px] rounded-lg md:h-[400px] lg:h-[500px] xl:h-[600px] flex flex-col sm:flex-row'>
                <iframe
                    width='65%'
                    height='100%'
                    className='px-4 sm:w-70% rounded-lg'
                    src={'https://www.youtube.com/embed/' + vid + '?si=sCxTMsMET4U4lQc4'}
                    title='YouTube video player'
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowfullscreen
                ></iframe>
                <LiveChat />
            </div>
            <div>
                <NestedCommentList />
            </div>
        </div>
    );
};

export default Video;

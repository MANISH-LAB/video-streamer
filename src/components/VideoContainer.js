import React, { useEffect, useState } from 'react';
import VideoCard from './VideoCard';
import { VIDEO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const VideoContainer = () => {
    const store = useSelector((store) => store.videosByKeyword);
    
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        const vid = await fetch(VIDEO_URL);
        const json = await vid.json();
        // Only set the videos state if it's not initialized
        if (videos.length === 0) {
            setVideos(json);
        }
    };

    if (videos.length !== 0) {
        return (
            <div className='flex flex-wrap dark:bg-black dark:text-white justify-center'>
                {store.stateToshowResultedVideos
                    ? store.data.map((e) => (
                          <Link to={'/watch?v=' + e.id.videoId} key={e.id.videoId}>
                              <VideoCard video={e} />
                          </Link>
                      ))
                    : videos.items.map((e) => (
                          <Link to={'/watch?v=' + e.id} key={e.id}>
                              <VideoCard video={e} />
                          </Link>
                      ))}
            </div>
        );
    }

    return null; // Return null if videos are still being fetched
};

export default VideoContainer;

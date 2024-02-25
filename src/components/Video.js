import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Comment from './Comment';
import LiveChat from './LiveChat';
import NestedCommentList from './NestedCommentList';
const Video = () => {
    const [searchParams] =useSearchParams();
    const vid=searchParams.get("v");
  return (
    <div className='px-5 py-2 mx-5 my-2 flex-1'>
      <div className='w-screen h-[600px] flex'>
        <iframe width="70%"  className='px-4 'src={"https://www.youtube.com/embed/"+vid+"?si=sCxTMsMET4U4lQc4"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <LiveChat/>
       </div>
       <div></div>
       
    <div >
      <NestedCommentList/>
      {/* <Comment id={vid}/> */}
    </div>
    </div>
    
  )
}

export default Video
import React from 'react'

const VideoCard = ({video}) => {
    const { snippet , statistics} =video;
   const {channelTitle, thumbnails,title}=snippet;
  //  const {viewCount} = statistics;
  return (
    <div className='p-2 m-2  shadow-md h-[22rem]' >
     <div><img alt="thumbnail"src={thumbnails.medium.url}></img></div>
     <div className='w-[320px] dark:bg-black'>
        <h4 className='font-bold w-20% text-gray-500 dark:text-white '>{title.length >68 ? title.substring(0,68)+"...": title}</h4>
        <div>
            <p className='text-[#6c757d] font-semibold'>{channelTitle}</p>
            {/* <p className='text-[#6c757d] font-semibold'>{viewCount} views</p> */}
        </div>
     </div>
    </div>
  )
}

export default VideoCard
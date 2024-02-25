import React from 'react'

const CommentCard = ({info}) => {
  return (
    <div className='flex  shadow-md p-2 m-2'>
        <h6>{info.authorDisplayName}: </h6>
        <h4 className='px-2'>{info.textDisplay}</h4>
    </div>
  )
}

export default CommentCard
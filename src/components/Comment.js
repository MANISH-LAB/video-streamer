import React from 'react'
import {useEffect , useState} from "react";
import { COMMENT_URL } from '../utils/constants';
import CommentCard from './CommentCard';
const Comment = ({id}) => {
    console.log(COMMENT_URL+id);
    const [comments,setComments]=useState([])
    useEffect(()=>{
       fetchComments();
    },[]);
    
    const fetchComments=async ()=>{
       const commentdata= await fetch(COMMENT_URL+id);
       const json=await commentdata.json();
       setComments(json);
       console.log("comments str",comments)
    }
    
    if(comments.lenght===0) return null;
  return (
    <div className='p-3 -mt-6'>
        <h4>Comment box</h4>
     {comments.items && comments.items.map((e)=><CommentCard  key = {e.id} info={e.snippet.topLevelComment.snippet}/>)}
    </div>
  )
}

export default Comment
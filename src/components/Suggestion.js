import React, {useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux";
import { addState, setSuggestion } from '../utils/searchQuerySlice';
const Suggestion = ({data}) => {
  console.log(data)
  
  const dispatch=useDispatch();
  const clickHandler=(e)=>{
    const content =e.target.textContent;

        dispatch(addState(content))
      
  }
  
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//         if (!event.target.closest('.suggestion-container')) {
//             // Clicked outside the main div
//             dispatch(setSuggestion(false));
//         }
//     };

//     document.addEventListener('click', handleClickOutside);

//     return () => {
//         document.removeEventListener('click', handleClickOutside);
//     };
// }, [dispatch]);
  return (
    <div className='m-2 p-2 suggestion-container'>
        {data.map((e,i)=>
        
        { return  <p className='hover:bg-gray-700 px-2 cursor-pointer hover:text-white p-2' onClick={clickHandler} >{e}</p>
})
        
      }
    </div>
  )
}

export default Suggestion
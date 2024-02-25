import React, { useState, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage ,removeMessage, emptyAll} from '../utils/livechatSlice';
import { generateRandomName, generateRandomMessage } from '../utils/Helper';

const LiveChat = () => {
    const [livemessage, setLivemessage] = useState('');
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.livechat.messages);
  

    useEffect(() => {
        const i = setInterval(() => {
            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: generateRandomMessage(),
                })
            );
        }, 1500);
      if(chatMessages.length>200){
        dispatch(removeMessage(0));
      }
        return () => {clearInterval(i);
        }
    }, [chatMessages, dispatch]);

    return (
        <div className='relative h-screen flex flex-col w-[25%]'>
            <span>Live Chat</span>
            <div className='ml-2 p-2 border border-slate-300 h-[408px] w-full bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
                
                <ul>
                    {chatMessages.map((e,index) => (
                        <ChatMessage key={index} name={e.name} message={e.message} />
                    ))}
                </ul>
                
            </div>

            <form
                className='flex-shrink-0 p-4 bg-gray-200 flex items-center'
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(addMessage({ name: 'Manish Kalyan', message: livemessage }));
                    setLivemessage('');
                }}
            >
                <input
                    type='text'
                    className='flex-grow border px-2 py-1 mr-2'
                    placeholder='Type your message...'
                    value={livemessage}
                    onChange={(e) => setLivemessage(e.target.value)}
                />
                <button className='bg-blue-500 text-white px-4 py-2 rounded' type='submit'>
                    Send
                </button>
            </form>
        </div>
    );
};

export default LiveChat;

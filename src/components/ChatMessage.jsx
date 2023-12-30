import React, { useEffect, useRef } from 'react'
import { ChatContext } from '../context/ChatContext'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const ChatMessage = ({message}) => {
  const ref=useRef()
  const {chatUser}=useContext(ChatContext)
  const {CurrentUser,setCurrentUser}=useContext(AuthContext);
  
  // console.log("crrUser",CurrentUser.uid)
  // console.log(chatUser.user.uid)
  useEffect(()=>{
    ref.current?.scrollIntoView({behavior:"smooth"});
  },[message])
  return (
    <div className={chatUser.user.uid==CurrentUser.uid?"flex justify-start":" flex justify-end"}>
        <div className='bg-blue-500 font-semibold text-white my-2 w-fit p-3 text-right rounded-md ml-auto mr-3'>
            <span>{message.message}</span>
        </div>
    </div>
  )
}

export default ChatMessage
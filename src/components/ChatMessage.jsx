import React, { useEffect, useRef } from 'react'

const ChatMessage = ({message}) => {
  const ref=useRef()
  useEffect(()=>{
    ref.current?.scrollIntoView({behavior:"smooth"});
  },[message])
  return (
    <div>
        <div className='bg-blue-500 my-2 w-fit p-3 text-right rounded-md ml-auto mr-3'>
            <img />
            <span>{message.message}</span>
        </div>
        <div>
            <p></p>
            <img />
        </div>
    </div>
  )
}

export default ChatMessage
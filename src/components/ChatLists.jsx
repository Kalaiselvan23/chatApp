import React from 'react'
import Chats from "./Chats.jsx"
import { BiSearch } from 'react-icons/bi'
import { useState } from 'react'
const ChatLists = () => {
    const [search,setSearch]=useState("")
    const handleSubmit=()=>{
        console.log(search)
        setSearch("")
    }
  return (
    <div className='col-start-2 p-4 bg-[#EBF4FB]'>
        <div className=' flex items-center border-[2px] rounded-2xl border-black'>
            <input className='border-none outline-none h-10 p-2  w-full mr-4 rounded-2xl' value={search} onChange={(e)=>setSearch(e.target.value)} onKeyDown={(e)=>e.key==="Enter"?handleSubmit():null}
             placeholder='Search User here' />
            <BiSearch className='text-2xl mr-3'/>
        </div>
        <div className='mt-3'>
        <Chats/>
        <Chats/>
        <Chats/>
        <Chats/>
        <Chats/>
        </div>
       
    </div>
  )
}

export default ChatLists
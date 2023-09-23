import React from 'react'
import Sidebar from '../components/Sidebar'
import Messages from '../components/Messages'
import ChatLists from '../components/ChatLists'
import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'

const Home = () => {
  const {chatUser, setchatUser}=useContext(ChatContext)
  return (
    <div className='grid grid-cols-home'>
    <Sidebar/>
    <ChatLists/>
    <Messages />
    </div>
  )
}

export default Home
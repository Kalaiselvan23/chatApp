import React from 'react'
import Sidebar from '../components/Sidebar'
import Messages from '../components/Messages'
import ChatLists from '../components/ChatLists'
const Home = () => {
  return (
    <div className='grid grid-cols-home'>
    <Sidebar/>
    <ChatLists/>
    <Messages/>
    </div>
  )
}

export default Home
import React, { useContext } from 'react'
import {AiOutlineMessage} from "react-icons/ai"
import {FiPhoneCall, FiSettings} from "react-icons/fi"
import {BiBell, BiLogOut} from "react-icons/bi"
import {MdAccountCircle} from "react-icons/md"
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
const Sidebar = () => {
  const {CurrentUser}=useContext(AuthContext)
  return (
    <div className="bg-[#181F2E] h-[100vh] w-16 pt-4 relative">
    <div className="rounded-full profile-pic mb-8">
    <img src={CurrentUser.photoURL}
      className='rounded-full'
    />
    </div>
    <ul className='flex flex-col menu h-72 justify-around items-center text-2xl text-white'>
    <li>
      <AiOutlineMessage/>
    </li>
    <li>
   <FiPhoneCall/>
    </li>
    <li>
    <MdAccountCircle/>
    </li>
    <li>
    <BiBell/>
    </li>
    </ul>
    <ul className='flex flex-col w-full h-24 items-center justify-evenly text-2xl text-white bg-[#202A3F] absolute bottom-0' >
      <li>
        <FiSettings/>
      </li>
      <button onClick={()=>signOut(auth)}>
       <BiLogOut/> 
      </button>
    </ul>
    </div>
  )
}

export default Sidebar

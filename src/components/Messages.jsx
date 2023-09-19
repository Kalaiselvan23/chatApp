import React from 'react'
import { BiPhoneCall, BiVideo } from 'react-icons/bi'


const Messages = () => {
  return (
    <div className='flex h-16 justify-between p-3 bg-white'>
        <div>
            <p className='text-lg font-medium'>Kalaiselvan</p>
            <span>Active</span>
        </div>
        <ul className='w-28 text-[#435F73] font-thin text-3xl flex items-center justify-between'>
        <li className='bg-[#F0F4F8] p-2 rounded-full '>
        <BiVideo/>
        </li>
        <li className='bg-[#F0F4F8] rounded-full p-2'>
        <BiPhoneCall/>
        </li>
          
        </ul>
        
    </div>
  )
}

export default Messages
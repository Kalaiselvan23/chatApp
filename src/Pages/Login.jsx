import React from 'react'
import { MdAccountBox, MdManageAccounts, MdVisibility,MdVisibilityOff } from 'react-icons/md'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [hide,setHide]=useState(false);
    const [Error, setError] = useState(false)
    const [inputData,setInputData]=useState({
        username:"",
        password:"",
    })

    const handleLogin=async(e)=>{
        e.preventDefault()
        const user=await signInWithEmailAndPassword(auth,inputData.username,inputData.password)
       
  };

  return (
    <div className='h-[100vh] w-full flex justify-center items-center'>
        <form onSubmit={(e)=>handleLogin(e)} className='flex flex-col p-5 h-72 w-[25rem] login-form border-2 border-black rounded-lg'>
        <h1 className='text-2xl font-semibold text-center'>Login</h1>
        <div className="input-div">
            <input type="text" placeholder= 'Username' onChange={(e)=>setInputData((prev)=>{
                prev.username=e.target.value
                return {...prev}
            })} />
            <MdAccountBox className="text-3xl mx-4"/>
        </div>
        <div className='input-div'>
            <input type={hide?'password':"text"} placeholder='Password' onChange={(e)=>setInputData((prev)=>{
                prev.password=e.target.value
                return {...prev}
            })}/>
                   <div onClick={()=>setHide((prev)=>!prev)} >
            {!hide?<MdVisibility className='text-3xl mx-4' />:<MdVisibilityOff className='text-3xl mx-4'/>}
            </div>
        </div>
        
        <button className="bg-blue-500 h-10 rounded-md text-white my-auto" type='submit'>Submit</button>
        <span className='text-center'>Not a user?<NavLink to={"/register"}>Register here</NavLink></span>
        </form>
    </div>
  )
}

export default Login
import React, { useState } from 'react'

const Login = () => {
    const [email,setEmail]=useState("")
    const[password,setPassword]=useState("")

  const submitHandler =(e)=>{
   e.preventDefault()
   console.log("hello i m submitted form")
   console.log("i m emial",email)
   console.log("i m your password", password)
   setEmail("")
   setPassword("")
    }
 

  return (
    <div className='flex h-screen w-screen  items-center justify-center bg-black'>
       <div className='border-2 border-emerald-500 p-20'>
        <form onSubmit={(e)=>submitHandler(e)} className='flex flex-col  items-center justify-center' action="">
            <input className='border-2 text-white border-emerald-500 rounded-full text-xl px-6 py-2 mb-2 outline-none bg-transparent' type="email" placeholder='enter email' required
            value={email}
            onChange={(e)=>setEmail(e.target.value) } />
            <input className='border-2 text-white border-emerald-500 rounded-full text-xl px-6 py-2 mb-2 outline-none bg-transparent' type="password" placeholder='enter password' required 
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
            />
            <button type='submit' className='mt-2 text-white text-lg border-none outline-none bg-emerald-400 py-2 px-8 rounded-full hover:bg-emerald-500 '>Log in </button>
        </form>

       </div>
    </div>
  )
}

export default Login

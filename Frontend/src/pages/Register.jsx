import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'


const Register = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()

        axios.post('http://localhost:3000',{name,email,Password})
        .then(res=>{
            alert("created")
        })
        .catch(err=>console.log(err))
        
    }
  return (
    <>

<div className='flex items-center justify-between px-0 
    md:px-[200px] py-4 '>
      <h1 className='text-2xl font-extrabold'>
        <Link to="/">Devspace</Link></h1>
        <div className='flex items-center justify-center 
      space-x-2 md:space-x-4'>
        <h3><Link to={'/Login'}>Login</Link></h3>
      </div>
</div>
    
    <div className="w-full flex justify-center items-center h-[80vh] ">
           <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
             <h1 className="text-xl font-bold text-left">Log in to your account</h1>
             <input onChange={(e)=>setName(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="text" placeholder="Enter your Name" />

             <input onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="text" placeholder="Enter your email" />
             <input onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-2 border-2 border-black outline-0" type="password" placeholder="Enter your password" />
             <button onClick={handleSubmit} className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black ">Log in</button>
             {/* {error && <h3 className="text-red-500 text-sm ">Something went wrong</h3>} */}
             <div className="flex justify-center items-center space-x-3">
              <p>Have an account?</p>
              <p className="text-gray-500 hover:text-black"><Link to="/login">Login</Link></p>
             </div>
           </div>
        </div>
        <Footer/>
        </>
  )
}

export default Register
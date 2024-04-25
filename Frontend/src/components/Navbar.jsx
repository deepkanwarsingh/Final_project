import { BsSearch } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import {Link} from 'react-router-dom';
import Menu from "./Menu";
import React, { useState,useContext } from 'react'
import { UserContext } from "../context/userContext";



const Navbar = () => {
  const {user}=useContext(UserContext);
  const [prompt,setPrompt]=useState()
  console.log(prompt)
  const [menu,setMenu]=useState(false)

  const showMenu=()=>{
    setMenu(!menu)

  }
  return (
    <div className='flex items-center justify-between px-0 
    md:px-[200px] py-4 '>
      <h1 className='text-2xl font-extrabold'>
        <Link to="/">Devspace</Link></h1>
      <div className="flex justify-content-center items-center space-x-0">
      <p className="cursor-pointer"><BsSearch /></p>
      <input onChange={(e)=>setPrompt(e.target.value)} className="outline-none px-3" placeholder="Search Devspace" type="text" />
      </div>
      
      <div className=' hidden md:flex items-center justify-center 
      space-x-2 md:space-x-4'>
        {user? <h3><Link to={"./Create"}>create</Link></h3>:<h3><Link to={"./Register"}>Register</Link></h3>}
        {user? <h3><Link to={"./Profile"}>Profile</Link></h3>:<h3><Link to={'./Login'}>Login</Link></h3>}
      </div>

      <div onClick={showMenu} className="md:hidden text-lg">
      <p className="cursor-pointer relative"><FaBars/></p>
        {menu && <Menu/>}
      </div>
    </div>

  )
}

export default Navbar
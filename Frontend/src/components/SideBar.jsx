import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { MdCurrencyBitcoin } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaRocketchat } from "react-icons/fa";


const SideBar = () => {
  return (
<div>
    <div className='  w-[80%]  '>

    <div className="h-40px border-2 bg-gray-200 text-align-center py-2  text-black text-2xl text-center" >
              <h1>Dev Space</h1>  
        </div>

        <div className="flex items-center h-40px border-2 bg-gray-200 p-4 hover:bg-gray-300">
          <MdCurrencyBitcoin className="mr-2" /> 
          <Link to="/Crypto" className="text-center">
               <h3 className="m-0">Dev Crypto</h3>
               </Link>
       </div>


       <div className="flex items-center h-40px border-2 bg-gray-200 p-4 hover:bg-gray-300">
    <IoNewspaperOutline className="mr-2" /> 
    <Link to="/News" className="text-center">
        <h3 className="m-0">Dev News</h3> 
    </Link>
</div>

<div className="flex items-center h-40px border-2 bg-gray-200 p-4 hover:bg-gray-300">
    <FaRocketchat  className="mr-2" /> 
    <Link to="/Chat" className="text-center">
        <h3 className="m-0">Dev Chat</h3> 
    </Link>
</div>






        
  
    </div>
</div>
  )
}

export default SideBar
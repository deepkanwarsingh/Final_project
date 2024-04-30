import React from 'react'
import { Link } from 'react-router-dom'
import Crypto from '../pages/Crypto'

const SideBar = () => {
  return (
<div>
    <div className='fixed top-20 right-10 w-[25%]  border-2 p-2'>

        <div className="h-40px border-2 bg-gray-200 text-align-center p-2 m-2 hover:bg-gray-300" >
             <Link to="/Crypto" ><h3>crypto</h3>  </Link>
        </div>

        <div className="h-40px border-2 bg-gray-200 text-align-center p-2 m-2 hover:bg-gray-300" >
             hi
        </div>

        <div className="h-40px border-2 bg-gray-200 text-align-center p-2 m-2 hover:bg-gray-300" >
             hi
        </div>



  
    </div>
</div>
  )
}

export default SideBar
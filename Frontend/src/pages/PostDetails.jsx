import React from 'react'
import Navbar from '../components/Navbar'

const PostDetails = () => {
  return (
    <div>
        <Navbar/>
        <div className='px-8  md:px-[200px] mt-8'>
            <div className='flex justify-between items-center'>
                <h1 className='bold 2xl black'>10 ways to use AI</h1>
            </div>
            <p>@Deepkanwar singh</p>
            <div className='flex space-x-2'>
                <p>5/4/24</p>
                <p>6:00</p>
            </div>
           
            <img src="https://plus.unsplash.com/premium_photo-1664353833878-e1c82a79ad3d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias labore numquam, cumque accusamus illo repudiandae vero velit explicabo nisi perspiciatis, amet, natus consectetur quis quia. Minima, exercitationem iste! Facere.</p>

        </div>
    </div>
  )
}

export default PostDetails
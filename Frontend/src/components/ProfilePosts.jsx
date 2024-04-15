import React from 'react'

const ProfilePosts = () => {
  return (
    <div>
            <div className="w-full flex mt-8 space-x-4">
 
 {/* <div className="w-[15%] h-[200px] flex justify-center items-center">
     {/* left  wala */}
          {/* <img className='object-full w-200px h-200px' src="https://plus.unsplash.com/premium_photo-1664353833878-e1c82a79ad3d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> */}

     {/* </div> */} 

     
         {/* right wala */}
        
         <div className="flex flex-col w-[55%]">
         <img className=' w-200px h-200px' src="https://images.pexels.com/photos/20726113/pexels-photo-20726113/free-photo-of-a-view-of-the-city-of-siena-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

           <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
             10 ways of using AI
             </h1>
         
             <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
         <p>@Deepkanwar singh</p>
        
     
         <div className='flex space-x-2'>
             <p>5/4/24</p>
             <p >6:00</p>
         </div>
         </div>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis mollitia aliquam non alias repellendus animi praesentium tenetur ab iure, consectetur at doloribus magnam voluptatum. Neque dolorem facilis velit ipsa laudantium?</p>
     </div>

     
            
         </div>
    </div>
  )
}

export default ProfilePosts
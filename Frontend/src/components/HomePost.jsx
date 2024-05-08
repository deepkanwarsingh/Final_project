import React from 'react'
import ProfilePosts from './ProfilePosts'
import {IF} from "../url"




function HomePost({post}){
  // console.log(post);
  return (

       <div>
            <div className="w-full flex mt-8 space-x-4">
 
          <div className="w-[15%] h-[200px] flex justify-center items-center ">
            
      {/* left  wala */}
     </div> 
     
         {/* right wala */}
        
         <div className="flex flex-col w-[50%] p-5 border-t-[2px]">
         <img className=' w-200px h-200px' src={post.photo} alt="" />

           <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
         
             {post?.title}
             </h1>
         
             <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
         <p>@{post.username}</p>
        
     
         <div className='flex space-x-2'>
             <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
             <p >{new Date(post.updatedAt).toString().slice(16,24)}</p>
         </div>
         </div>
         <p>
          {post.desc.slice(0,120)+"... Read more"}

          </p>
     </div>
     
            
         </div>
    </div>


    // <div>
    
    // <div className='flexbox  space-x-4 w-[100%]'>
      

    //   {/* <ProfilePosts/> */}
    
      


    //   </div>
      
     
      
    // </div>

           
            
       
    
  )
}

export default HomePost
import React from 'react'
import ProfilePosts from './ProfilePosts'
import {IF} from "../url"
import SideBar from './SideBar'
import Footer from './Footer'




function HomePost({post}){
   console.log(post.photo);
  return (
        
       <div>
             {/* <div className="w-full flex mt-8 space-x-4"> 
 
             <div className="w-[15%] h-[200px] flex justify-center items-center "> 
              
            
              

     </div>   */}
     
          {/* right wala */}
        
         <div className="flex flex-col p-5 pb-[5px]  border-l-[2px] border-r-[2px]">

         {/* <img className=' w-[300px] h-[300px] ' src={post.photo} alt="" /> */}

         {post.photo ? (
  <img className='    p-2' src={IF+post.photo} alt="" />
) : (
  <p>

  </p>
)}


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
         <div>
         <p >
          {post.desc.slice(0,140)+"... Read more"}

          </p>
          </div>
     </div>
     
     
            
         </div>
         
    //  </div>
 

    // <div>
    
   

           
            
       
    
  )
}

export default HomePost
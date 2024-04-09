import React from 'react'
import Navbar from '../components/Navbar'
import HomePost from '../components/HomePost'
import ProfilePosts from '../components/ProfilePosts'

const Profile = () => {
  return (
    <div>
        <Navbar />
        <div className="min-h-[80vh] px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start items-start">
        <div className="flex flex-col md:w-[70%] w-full mt-8 md:mt-0">
          <h1 className="text-xl font-bold mb-4">Your posts:</h1>
         
            <ProfilePosts />
            <ProfilePosts />
            <ProfilePosts />
            <ProfilePosts />
        
        </div>

        <div className="md:sticky md:top-12  flex justify-start md:justify-end items-start md:w-[30%] w-full md:items-end ">
        <div className=" flex flex-col space-y-4 items-start">
        <h1 className="text-xl font-bold mb-4">Profile</h1>
        <input  className="outline-none px-4 py-2 text-gray-500" placeholder="Your username" type="text"/>
          <input   className="outline-none px-4 py-2 text-gray-500" placeholder="Your email" type="text"/>
          
        </div>
        </div>
        </div>

      
        </div>

        
    
  )
}

export default Profile




{/* <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-30 h-60  mx-auto" src="https://plus.unsplash.com/premium_photo-1664353833878-e1c82a79ad3d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width="384" height="512"/>
  <div className="pt-6 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Dolor delectus tenetur iure a laudantium eaque amet illum 
        perspiciatis doloribus consequuntur nam temporibus placeat, 
        id provident consectetur in praesentium ipsam. Quos?
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}
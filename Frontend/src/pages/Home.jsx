import React, { useEffect, useState } from 'react'
import HomePost from '../components/HomePost'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'

const Home = () => {

  const[posts,setPosts]=useState([]);

  const fetchPost=async()=>{
    try {
      const res = await axios.get("api/posts/")
       console.log(res.data)
      setPosts(res.data);
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(()=>{
    fetchPost()
  })
  return (
    <>
    <Navbar/>
    <div className='px-8 px-[200px]'>
      {
        posts.map((post)=>(
          <HomePost 
          key={post._id} post={post}
          />
          
        ))
      }
     
    </div>
    <Footer/>
    </>
  )
}

export default Home
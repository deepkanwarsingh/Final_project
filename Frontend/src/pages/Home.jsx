import React, { useEffect, useState } from 'react'
import HomePost from '../components/HomePost'
import Footer from '../components/Footer'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/userContext'
import Navbar from '../components/Navbar'
import Loader from '../components/Loader'


const Home = () => {

  const[posts,setPosts]=useState([]);
  const[loader,setLoader]=useState(true)
  const[noResult,setNoResuslt]=useState(false)
  const {user}=useContext(UserContext)
  
  const fetchPost=async()=>{
    setLoader(true)
    
    try {
      const res = await axios.get("/api/posts/")
      
       console.log(res.data)
      setPosts(res.data);

        if(res.data.length==0){
          setNoResuslt(true)
        }
        else{
          setNoResuslt(false)
        }
        setLoader(false)

    } catch (err) {
      console.log(err)
    }
  }
  useEffect(()=>{
    fetchPost()
  },[])
  
  return (
    
    
    <>
    <Navbar/>
    {Loader?
    <div className="h-[40vh] flex justify-center items-center">
      <Loader/>
      </div>:!noResult?
        posts.map((Post)=>(
          <>
           <Link to={user?`/posts/post/${posts._id}`:"/login"}>
          <HomePost key={posts._id} post={posts}/>
          </Link>
          </>
           
        )):<h3 className="text-center font-bold mt-16">No posts available</h3>
         } 
         {/* <HomePost/> */}
    <Footer/>
    </>
    
    
  )
}

export default Home
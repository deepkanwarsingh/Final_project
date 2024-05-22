import { Link, useLocation } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/userContext"
import axios from "axios"
import { URL } from "../url"
import Loader from "../components/Loader"
import HomePost from "../components/HomePost"


const MyBlogs = () => {
    const {search}=useLocation()
  // console.log(search)
  const [posts,setPosts]=useState([])
  const [noResults,setNoResults]=useState(false)
  const [loader,setLoader]=useState(false)
  const {user}=useContext(UserContext)
  console.log(user)

  const fetchPosts=async()=>{
    setLoader(true)
    try{
      const res=await axios.get("/api/posts/user/"+user.id)
       
      setPosts(res.data)
      if(res.data.length===0){
        setNoResults(true)
      }
      else{
        setNoResults(false)
      }
      setLoader(false)
      
    }
    catch(err){
      console.log(err)
      setLoader(true)
    }
  }

  useEffect(()=>{
    fetchPosts()

  },[search])

  return (
    <div>
        <Navbar/>
        
        <div className="px-8 md:px-[200px] min-h-[80vh] w-[80%]">
        {loader?<div className="h-[40vh] flex justify-center items-center"><Loader/></div>:!noResults?
        posts.map((post)=>(
          <>
          <Link to={user ? `/posts/post/${post._id}` : "/login"} >
          <HomePost key={post.id} post={post}/>
          </Link>
          </>
          
        )):<h3 className="text-center font-bold mt-16">No posts available</h3>}
        </div>
        <Footer/>
    </div>
  )
}

export default MyBlogs
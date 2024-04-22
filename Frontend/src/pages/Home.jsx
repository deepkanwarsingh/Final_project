import React, { useEffect } from 'react'
import HomePost from '../components/HomePost'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import axios from 'axios'
const Home = () => {

  const fetchPost=async()=>{
    try {
      const res = await axios.get(URL+"api/posts/")
      console.log(res.data)
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
      <HomePost/>
    </div>
    <Footer/>
    </>
  )
}

export default Home
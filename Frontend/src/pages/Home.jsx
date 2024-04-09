import React from 'react'
import HomePost from '../components/HomePost'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Home = () => {
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
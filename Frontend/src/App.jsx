import { useState } from 'react'
import Login from './pages/Login'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePost from './components/HomePost'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import PostDetails from './pages/PostDetails'
import Createposts from './pages/Createposts'
import Profile from './pages/Profile'
import ProfilePosts from './components/ProfilePosts'
import { UserContextProvider } from './context/userContext'
import Crypto from './pages/Crypto'
import News from './pages/News'
import StockMarketPage from './pages/Stock'
import Myblogs from './pages/Myblogs'
import Weather from './pages/Weather'
import EditPost from './pages/Editposts'
import ChatPage from './pages/Chat'



function App() {
  const [count, setCount] = useState(0)

  return (
    
 <UserContextProvider>
  <Routes>
  <Route path='/' element ={<Home/>}/>
  <Route path='/login' element ={<Login/>}/>
  <Route path='/Register' element ={<Register/>}/>
  <Route path='/Posts/post/:id' element={<PostDetails/>} />
  <Route path='/Create' element={<Createposts/>}/>
  <Route path='/Profile/:id' element={<Profile/>}/>
  <Route path='/ProfilePosts' element = {<ProfilePosts/>}/>
  <Route path='/Crypto' element ={<Crypto/>}/>
  <Route path='/News' element = {<News/>}/>
  <Route path='/Stock' element = {<StockMarketPage/>}/>
  <Route exact path="/myblogs/:id" element={<Myblogs/>}/>
  <Route path='/Weather' element = {<Weather/>}/>
  <Route path='/Edit/:id' element = {<EditPost/>}/>
  <Route path='/Chat/' element = {<ChatPage/>}/>



  
  </Routes>
  </UserContextProvider>

    
  )
}

export default App
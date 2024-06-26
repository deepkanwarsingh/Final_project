import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { URL } from '../url'

// var validator = require("email-validator");

function validateEmail(email) {
  
  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  return emailRegex.test(email);
}


const Register = () => {
  const [username, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [emailError, setEmailError] = useState("") 
  const navigate = useNavigate()

  const handleRegister = async () => {
    setError(false)
    setEmailError("") 
    try {
      const res = await axios.post("api/auth/register", { username, email, password })
      setUserName(res.data.username)
      setEmail(res.data.email)
      setPassword(res.data.password)
      navigate("/login")
    } catch (err) {
      setError(true)
      console.log(err.message)
    }
  }



  const handleEmailChange = (e) => {
    const value = e.target.value
    setEmail(value)
    if (!validateEmail(value)) {
      setEmailError("Please enter a valid email address")
    } else {
      setEmailError("") 
    }
  }

  return (
    <>
      <div className='flex items-center justify-between px-0 md:px-[200px] py-4 '>
        <h1 className='text-2xl font-extrabold'>
          <Link to="/">Devspace</Link>
        </h1>
        <div className='flex items-center justify-center space-x-2 md:space-x-4'>
          <h3><Link to={'/Login'}>Login</Link></h3>
        </div>
      </div>

      <div className="w-full flex justify-center items-center h-[80vh] ">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left">Log in to your account</h1>
          <input
            onChange={(e) => { setUserName(e.target.value) }}
            className="w-full px-4 py-2 border-2 border-black outline-0"
            type="text"
            placeholder="Enter your Name"
          />

          <input
            onChange={handleEmailChange}
            className={`w-full px-4 py-2 border-2 ${emailError ? "border-red-500" : "border-black"} outline-0`}
            type="text"
            placeholder="Enter your email"
          />
          {emailError && <p className="text-red-500 text-xs">{emailError}</p>} {/* Display email validation error */}

          <input
            onChange={(e) => { setPassword(e.target.value) }}
            className="w-full px-4 py-2 border-2 border-black outline-0"
            type="password"
            placeholder="Enter your password"
          />
          <button
            onClick={handleRegister}
            className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black "
          >
            Log in
          </button>
          {error && <h3 className="text-red-500 text-sm">Something went wrong</h3>}
          <div className="flex justify-center items-center space-x-3">
            <p>Have an account?</p>
            <p className="text-gray-500 hover:text-black"><Link to="/login">Login</Link></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Register

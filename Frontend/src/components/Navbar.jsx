import { BsSearch } from "react-icons/bs";
import {Link} from 'react-router-dom'
const Navbar = () => {
  const user =true;
  return (
    <div className='flex items-center justify-between px-0 
    md:px-[200px] py-4 '>
      <h1 className='text-2xl font-extrabold'>
        <Link to="/">Devspace</Link></h1>
      <div className="flex justify-content-center items-center space-x-0">
      <p><BsSearch /></p>
      <input  className="outline-none px-3" placeholder="Search Devspace" type="text" />
      </div>
      
      <div className='flex items-center justify-center 
      space-x-2 md:space-x-4'>
        {user? <h3><Link to={"./Create"}>create</Link></h3>:<h3><Link to={"./Register"}>Register</Link></h3>}
        {user? <h3><Link to={"./Profile"}>Profile</Link></h3>:<h3><Link to={'./Login'}>Login</Link></h3>}
      </div>
    </div>

  )
}

export default Navbar
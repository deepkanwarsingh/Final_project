import React from 'react'

const Createposts = () => {
  return (
    <div>
        
        <div className='px-6 md:px-[200px] mt-8'>
        <h1 className='font-bold md:text-2xl text-xl '>Create a post</h1>
        <form className='w-full flex flex-col space-y-4 md:space-y-8 mt-4'>
          <input  type="text" placeholder='Enter post title' className='px-4 py-2 outline-none'/>
          <input  type="file"  className='px-4'/>
          <div className='flex flex-col'>
            <div className='flex items-center space-x-4 md:space-x-8'>
                <input  className='px-4 py-2 outline-none' placeholder='Enter post category' type="text"/>
                <div className='bg-black text-white px-4 py-2 font-semibold cursor-pointer'>Add</div>
            </div>

            {/* categories */}
            <div className='flex px-4 mt-3'>
            
                <div  className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md'>
                <p></p>
                <p  className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'></p>
            </div>
            
            
            
            </div>
          </div>
          <textarea  rows={15} cols={30} className='px-4 py-2 outline-none' placeholder='Enter post description'/>
          <button  className='bg-black w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg'>Create</button>
        </form>

        </div>
       
    </div>
  )
}

export default Createposts
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between my-4 items-center w-full absolute z-[100]'>
      <h1 className='text-red-800 text-4xl sm:text-2xl font-bold cursor-pointer ml-6'>WATCH <span className='text-white'>NEXT</span></h1>
      <div>
        <button className='pr-4'>Sign In</button>
        <button className='bg-red-600 px-6 py-2 mr-4 rounded-md text-white currser-pointer'>Sign Up</button>
      </div>
      
    </div>
  )
}

export default Navbar
import React from 'react'
import Search from '../screens/Search'

const Topbar = () => {
  return (
    <div className="h-20 flex flex-row justify-start items-center">
        {/* <marquee direction="RIGHT">
        <p className='flex-1 bg-transparent border-none placeholder-gray-500 outline-none text-base text-white ps-4'>
         ON EST LA </p>
         </marquee> */}
         <Search/>
    </div>
  )
}

export default Topbar
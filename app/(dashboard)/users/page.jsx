import React from 'react'
import FetchUsers from './components/users'
import TotalUsers from './components/totalUsers'

export default function Users() {
  return (
    <div className='min-h-screen flex flex-col '>
      <div className='flex h-[30vh] w-full bg-slate-300 mt-20 rounded-lg border-4 border-black'>
      <div className='flex flex-col items-center h-full w-80 border-r-2 border-[gray] rounded-md'>
        <TotalUsers />
      </div>
      </div>
      <div className='border-2 border-slate-400 min-h-[60vh]'>
        <div className='flex pt-2 pb-2'>
          <h2 className='flex justify-center w-60'>Email</h2>
          <h2 className='flex justify-center w-96'>Id</h2>
          <h2 className='flex justify-center w-48'>Name</h2>
        </div>
       <FetchUsers />
      </div>
    </div>
  )
}

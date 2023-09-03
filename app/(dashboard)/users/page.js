import React from 'react'
import FetchUsers from '../components/users'

export default function Users() {
  return (
    <div className='min-h-screen flex flex-col '>
      <div className='flex h-[30vh] w-full bg-slate-300 mt-20 rounded-lg border-4 border-black'>
      <div className='flex flex-col items-center h-full w-80 border-r-2 border-[gray] rounded-md'>
        <h2 className='ml-12 mt-10 text-[25px] font-bold'>Total de usuarios registrados:</h2>
        <h2 className='text-[40px] mt-3'>9000</h2>
      </div>
      </div>
      <div className='border-2 border-slate-400 min-h-[60vh]'>
        <div className='flex pt-2 pb-2'>
          <h2 className='flex justify-center w-60'>Email</h2>
          <h2 className='flex justify-center w-96'>Id</h2>
          <h2 className='flex justify-center w-48'>Name</h2>
        </div>
        <FetchUsers/>
      </div>
    </div>
  )
}

import React from 'react'
import AllComments from './components/allComments'

export default function Comments() {
  return (
    <div className='min-h-screen flex flex-col min-w-full'>
      <div className='flex w-full h-52 border-4 rounded border-slate-400'>
      </div>
      <div className='flex justify-center min-w-full min-h-[60vh] border-4 rounded border-slate-400'>
        <AllComments/>
      </div>
    </div>
  )
}

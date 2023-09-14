import React from 'react'
import AllComments from './components/allComments'

export default function Comments() {
  return (
    <div className='min-h-screen flex flex-col min-w-full'>
      <div className='flex justify-center min-w-full min-h-full border-4 rounded'>
        <AllComments/>
      </div>
    </div>
  )
}

'use client'
import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function AllComments() {
  const [commentState, setCommentState] = useState([])

  const handleClickComment = async (statusComment, id, index) => {
    const statusChanged = [...commentState].map((comment, i) =>  ({...comment, show: i === index ? !comment.show : comment.show}))
    setCommentState(statusChanged)
      await axios.patch('http://localhost:3000/api/comments', {statusComment, id})
  }
  useEffect(()=> {
    (async () => {
      const { data } = await axios.get("http://localhost:3000/api/comments")
      setCommentState(data)
    })()
  },[])
  return (
    <div className='flex'>
      <div className='flex flex-col w-screen items-center mt-12'>
        {commentState?.map((comment, index) => 
        <div key={index} className='flex flex-col w-4/5 font-figtree relative min-h-[230px] text-[#29154D] bg-[#DECFFA] border-2 border-[#29154D] rounded-md mt-8 mb-6'>
          <div className='flex ml-4'>
            <h4 className='mt-4 font-semibold'>Rating: {comment.rating}</h4>
            {}
            </div>
              <p className='ml-4 mt-1 pt-1 font-medium'>{comment.comment}</p>
            <div className='w-full flex justify-center'>
            <Image src={comment.user.user_image} alt={comment.user.name} className='rounded-full w-[auto] h-[auto] border-2 absolute bottom-[-40px]' width={75} height={80}/>
            <p className='absolute right-4 text-black text-sm'>-{comment.user.name} {comment.user.last_name}</p>
            {comment.show === false ? <button className='flex absolute bottom-5 right-5 bg-green-500 rounded-md p-1' onClick={() => handleClickComment(!comment.show, comment.id, index)}>Show</button> : <button className='flex absolute bottom-5 right-5 bg-red-500 rounded-md p-1' onClick={() => handleClickComment(!comment.show, comment.id, index)}>NoShow</button>}
          </div>
        </div>
          )}    
      </div>
    </div>
  )
}

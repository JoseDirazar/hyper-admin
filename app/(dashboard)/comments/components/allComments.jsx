"use client";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function AllComments() {
  const [commentState, setCommentState] = useState([]);

  const handleClickComment = async (statusComment, id, index) => {
    const statusChanged = [...commentState].map((comment, i) => ({
      ...comment,
      show: i === index ? !comment.show : comment.show,
    }));
    setCommentState(statusChanged);
    await axios.patch(process.env.NEXT_PUBLIC_URL + "/api/comments", {
      statusComment,
      id,
    });
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        process.env.NEXT_PUBLIC_URL + "/api/comments"
      );
      setCommentState(data);
    })();
  }, []);

  return (
    <div className="min-h-screen flex flex-col min-w-full">
  <div className="flex  min-w-full min-h-full rounded">
    <div className="flex flex-wrap items-start justify-start gap-4 p-3">
      {commentState?.map((comment, index) => (
        <div
          key={index}
          className="bg-white border border-gray-300 rounded-lg overflow-hidden shadow-lg h-auto"
        >
          <div className="p-4">
            <h4 className="text-xl font-semibold text-gray-800">
              Rating: {comment.rating}
            </h4>
            <p className="mt-2 text-gray-600">{comment.comment}</p>
          </div>
          <div className="flex items-center justify-between border-b p-4 border-t border-gray-300">
            <div className="flex items-center">
              <Image
                priority
                src={comment.user.user_image}
                alt={`${comment.user.name} ${comment.user.last_name}`}
                className="w-10 h-10 rounded-full mr-2 object-cover " 
                width={10}
                height={10}
              />
              <p className="text-gray-800">
                {comment.user.name} {comment.user.last_name}
              </p>
            </div>
            <button
              className={`px-3 py-1 rounded ${
                comment.show
                  ? 'bg-red-500 text-white'
                  : 'bg-green-500 text-white'
              }`}
              onClick={() => handleClickComment(!comment.show, comment.id, index)}
            >
              {comment.show ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
}

"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from 'react-hot-toast'
import Image from "next/image";

export default function FetchUsers({data}) {
  const [users, setUsers] = useState([...data]);

  async function handleBann(hyperEventUserId, status, index) {
    try {
      const newUsersState = [...users].map((user, i) =>  ({...user, active: i === index ? !user.active : user.active}))
      setUsers(newUsersState)
      console.log(users)
      await axios.patch(process.env.NEXT_PUBLIC_URL + "/api/users", {
        hyperEventUserId,
        status
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {users?.map((user, index) => (
        <div
          key={index}
          className="flex bg-purpleNav items-center justify-between pt-2 pb-2 border-t-2 border-slate-500 px-10"
        >
          <Image className="w-[4rem] h-[4rem] rounded-full" alt={user.name} src={user.user_image} width={150} height={150}/>
          <div className="flex justify-center w-48">
            {user.name} {user.last_name}
          </div>
          <div className="flex justify-center w-60">{user.email}</div>
          {user.active ? (
            /* bann = false */ <button
              onClick={() => {handleBann(user.id, false, index); toast.error('User banned.')}}
              className="h-10 cursor-pointer ml-10 bg-red-500 rounded-[4px] pl-1 pr-1"
            >
              Bann
            </button>
          ) : (
            /* bann = true */ <button onClick={() => {handleBann(user.id, true, index), toast.success('User unbanned.')}} className="h-10 cursor-pointer ml-10 bg-blue-500 rounded-[4px] pl-1 pr-1">
              Unbann
            </button>
          )}
        </div>
      ))}
    </>
  );
}

"use client";
import axios from "axios";
import { useEffect, useState } from "react";

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
          className="flex items-center pt-2 pb-2 border-t-2 border-slate-500"
        >
          <div className="flex justify-center w-60">{user.email}</div>
          <div className="flex justify-center w-96">{user.id}</div>
          <div className="flex justify-center w-48">
            {user.name} {user.last_name}
          </div>
          {user.active ? (
            /* bann = false */ <button
              onClick={() => handleBann(user.id, false, index)}
              className="h-10 cursor-pointer ml-10 bg-red-500 rounded-[4px] pl-1 pr-1"
            >
              Bann
            </button>
          ) : (
            /* bann = true */ <button onClick={() => handleBann(user.id, true, index)} className="h-10 cursor-pointer ml-10 bg-blue-500 rounded-[4px] pl-1 pr-1">
              Unbann
            </button>
          )}
        </div>
      ))}
    </>
  );
}

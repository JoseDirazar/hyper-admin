"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function FetchUsers() {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:3000/api/users");

      setUsers([...data]);
    })();
  }, []);

  async function handleBann(hyperEventUserId, status) {
    try {
      console.log(hyperEventUserId);
      await axios.patch("http://localhost:3000/api/users", {
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
          {!user.admin ? (
            /* bann = false */ <button
              onClick={() => handleBann(user.id, false)}
              className="h-10 cursor-pointer ml-10 bg-red-500 rounded-[4px] pl-1 pr-1"
            >
              Bann
            </button>
          ) : (
            /* bann = true */ <button onClick={() => handleBann(user.id, true)} className="h-10 cursor-pointer ml-10 bg-blue-500 rounded-[4px] pl-1 pr-1">
              Unbann
            </button>
          )}
        </div>
      ))}
    </>
  );
}

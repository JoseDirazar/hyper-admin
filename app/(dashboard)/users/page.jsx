"use client";
import React, { useEffect, useState } from "react";
import TotalUsers from "./components/totalUsers";
import axios from "axios";
import Image from "next/image";
import { toast } from "react-hot-toast";
export default function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          process.env.NEXT_PUBLIC_URL + "/api/users"
        );
        setData([...data]);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const totalActiveUsers = [...data].filter(
    (user) => user.active === true
  ).length;

  const totalBannedUsers = [...data].filter(
    (user) => user.active === false
  ).length;

  async function handleBann(hyperEventUserId, status, index) {
    try {
      const newUsersState = [...data].map((user, i) => ({
        ...user,
        active: i === index ? !user.active : user.active,
      }));
      setData(newUsersState);
      await axios.patch(process.env.NEXT_PUBLIC_URL + "/api/users", {
        hyperEventUserId,
        status,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex h-[10vh] w-[85%] mx-auto bg-purpleNav mt-20 rounded-lg border-4 border-[#925FF0] mb-14">
        <div className="flex flex-col items-center justify-center h-full w-80 border-r-2 border-[#925FF0] rounded-md">
          <TotalUsers data={data} />
        </div>
        <div className="flex justify-evenly w-full items-center">
          <div className="text-xl">Active Users: {totalActiveUsers}</div>
          <div className="text-xl">Banned Users: {totalBannedUsers}</div>
        </div>
      </div>
      <div className="border-2 border-slate-400 min-h-[60vh] w-[85%] mx-auto mb-20 bg-purpleNav">
        <div className="flex pt-2 pb-2 justify-evenly my-2">
          <h2 className="flex justify-center w-48 ml-20">Full Name</h2>
          <h2 className="flex justify-center w-48 mr-40">Email</h2>
        </div>
        <>
          {data?.map((user, index) => (
            <div
              key={index}
              className="flex bg-purpleNav items-center justify-between pt-2 pb-2 border-t-2 border-slate-500 px-10"
            >
              <Image
                className="w-[2.5rem] h-[2.5rem] rounded-full object-cover"
                alt={user.name}
                src={user.user_image}
                width={110}
                height={110}
              />
              <div className="flex justify-center w-48">
                {user.name} {user.last_name}
              </div>
              <div className="flex justify-center w-60">{user.email}</div>
              <div className="">
              {user.active ? (
                <button
                  onClick={() => {
                    handleBann(user.id, false, index);
                    toast.error(
                      `User ${user.name} ${user.last_name} is now banned.`
                    );
                  }}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold  py-2 px-4 rounded ml-2"
                >
                  Banear
                </button>
              ) : (
                <button
                  onClick={() => {
                    handleBann(user.id, true, index);
                    toast.success(
                      `User ${user.name} ${user.last_name} is now active.`
                    );
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold  py-2 px-4 rounded ml-2"
                >
                  Desbanear
                </button>
              )}
              </div>
            </div>
          ))}
        </>
      </div>
    </div>
  );
}

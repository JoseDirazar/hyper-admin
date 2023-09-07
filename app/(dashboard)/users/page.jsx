import React from "react";
import FetchUsers from "./components/users";
import TotalUsers from "./components/totalUsers";
import axios from "axios";
export default async function Users() {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_URL + "/api/users");

  const totalActiveUsers = [...data].filter(
    (user) => user.active === true
  ).length;
  const totalBannedUsers = [...data].filter(
    (user) => user.active === false
  ).length;
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex h-[30vh] w-[80%] mx-auto bg-purpleNav mt-20 rounded-lg border-4 border-[#925FF0] mb-14">
        <div className="flex flex-col items-center h-full w-80 border-r-2 border-[gray] rounded-md">
          {/* Estilo adicional para el componente TotalUsers */}
          <TotalUsers
            data={data}
            style={{ backgroundColor: "lightblue", padding: "20px" }}
          />
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
        <FetchUsers data={data} />
      </div>
    </div>
  );
}

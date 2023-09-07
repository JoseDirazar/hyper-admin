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
  <div className="flex h-[30vh] w-[80%] mx-auto bg-purple-400 mt-20 rounded-lg shadow-lg mb-14">
    <div className="flex flex-col items-center h-full w-1/4 bg-purple-300 rounded-l-lg p-4">
      {/* Estilo adicional para el componente TotalUsers */}
      <TotalUsers
        data={data}
        style={{ backgroundColor: "lightblue", padding: "20px" }}
      />
    </div>
    <div className="flex justify-evenly w-3/4 items-center p-4">
      <div className="text-xl">Active Users: {totalActiveUsers}</div>
      <div className="text-xl">Banned Users: {totalBannedUsers}</div>
    </div>
  </div>
  <div className="border-2 border-gray-400 min-h-[60vh] w-[85%] mx-auto mb-20 bg-purple-400 rounded-lg shadow-lg">
    <div className="flex pt-4 pb-2 justify-between my-2">
      <h2 className="flex justify-center w-1/2 text-lg font-semibold">Full Name</h2>
      <h2 className="flex justify-center w-1/2 text-lg font-semibold">Email</h2>
    </div>
    <FetchUsers data={data} />
  </div>
</div>
  );
}

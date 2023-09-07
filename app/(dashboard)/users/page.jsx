import React from "react";
import FetchUsers from "./components/users";
import TotalUsers from "./components/totalUsers";
import axios from "axios";
export default async function Users() {
  const { data } = await axios.get(process.env.NEXT_PUBLIC_URL + "/api/users");
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex h-[30vh] w-[80%] mx-auto bg-slate-300 mt-20 rounded-lg border-4 border-black mb-14">
        <div className="flex flex-col items-center h-full w-80 border-r-2 border-[gray] rounded-md">
          {/* Estilo adicional para el componente TotalUsers */}
          <TotalUsers
            data={data}
            style={{ backgroundColor: "lightblue", padding: "20px" }}
          />
        </div>
      </div>
      <div className="border-2 border-slate-400 min-h-[60vh] w-[85%] mx-auto mb-20">
        <div className="flex pt-2 pb-2 justify-around mr-48">
          <h2 className="flex justify-center w-60">Email</h2>
          <h2 className="flex justify-center w-96">Id</h2>
          <h2 className="flex justify-center w-48">Name</h2>
        </div>
        <FetchUsers data={data} />
      </div>
    </div>
  );
}

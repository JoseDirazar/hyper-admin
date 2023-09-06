import React from "react";
import TotalSales from "./components/totalSaleslist";
import axios from "axios";
import { getGraphRevenue } from "./components/actions/get-graph-revenue";
import BarChar from "./components/barChar";

export default async function Sales() {
  
  const graphRevenue = await getGraphRevenue();

  return (
    <>
      <BarChar data={graphRevenue} />
      <div className="items-center min-h-screen flex flex-col w-full">
        <div className="border-2 border-slate-400 w-11/12 min-h-[90vh] my-10">
          <div className="flex justify-center pt-2 pb-2">
            <div className="w-1/2 text-center">ID</div>
            <div className="w-1/2 text-center">Amount</div>
          </div>
          <TotalSales />
        </div>
      </div>
    </>
  );
}

import React from "react";
import TotalSales from "./components/totalSaleslist";
import getSales from './components/actions/getSales'
import { getGraphRevenue } from "./components/actions/get-graph-revenue";
import BarChar from "./components/barChar";

export default async function Sales() {
  const [sales, total] = await getSales()
  const graphRevenue = await getGraphRevenue();

  return (
    <>
      <BarChar data={graphRevenue} />
      <div className="items-center min-h-screen flex flex-col w-full">
        <div className="border-2 border-slate-400  w-[85%] min-h-[90vh] my-10">
          <TotalSales sales={sales} total={total}/>
        </div>
      </div>
    </>
  );
}

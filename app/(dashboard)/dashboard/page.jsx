import React from "react";
import TotalSales from "./components/totalSaleslist";
import axios from "axios";

export default async function Dashboard() {
  const {data} = await axios.get("http://localhost:3000/api/sales");

  return (
    <div>
      {data?.map((paymentRow) => (
        <div key={paymentRow.id}>
          <p>{paymentRow.id}</p>
          <p>{paymentRow.sales}</p>
        </div>
      ))}
    </div>
  );
}

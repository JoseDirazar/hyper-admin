import axios from "axios";

export default async function TotalSales() {
  const sales = await axios.get("http://localhost:3000/api/sales");

  const total = sales.data.reduce((acc, curr) => acc + curr.sales, 0)

  return (
    <div className="flex flex-col">
      {sales.data?.map((paymentRow, index) => (
        <div
          key={index}
          className="flex justify-center text-center pt-2 pb-2 border-t-2 border-slate-500"
        >
          <p className="w-1/2 mx-5">{paymentRow.id}</p>
          <p className="w-1/2 mx- "> {paymentRow.createdAt} </p>
          <p className="w-1/2 mx-5">${paymentRow.sales}</p>
        </div>
      ))}
        <div className='flex flex-col items-end '>
        Total: ${total}
        </div>
    </div>
  );
}

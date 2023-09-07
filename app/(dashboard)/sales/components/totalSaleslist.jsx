import axios from "axios";

export default async function TotalSales() {
  const sales = await axios.get(process.env.NEXT_PUBLIC_URL + "/api/sales");

  const total = sales.data.reduce((acc, curr) => acc + curr.sales.amount, 0).toFixed(2);

  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-4">
      <table className="w-full text-center">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Email</th>
            <th className="p-2">Fecha</th>
            <th className="p-2">Monto</th>
          </tr>
        </thead>
        <tbody>
          {sales?.data.map((paymentRow, index) => (
            <tr key={index} className={index % 2 === 0 ? " bg-purple-200 " : "bg-gray-50"}>
              <td className="p-2">{paymentRow.sales.email}</td>
              <td className="p-2">{paymentRow.createdAt}</td>
              <td className="p-2">${paymentRow.sales.amount}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-gray-200">
            <td className="p-2 font-bold" colSpan="2">Total:</td>
            <td className="p-2">${total}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

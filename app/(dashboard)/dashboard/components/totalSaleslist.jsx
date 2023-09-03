import axios from "axios";

export default async function TotalSales() {
  const sales = await axios.get('http://localhost:3000/api/sales')
    console.log("SALES_ERROR",sales)  
    

  return (
    <>
    <main>
    {sales.data?.map((paymentRow) => (
      <div key={paymentRow.id}>
        <p>{paymentRow.id}</p>
        <p>{paymentRow.sales}</p>
      </div>
    ))}
    </main>
    </>
      
  );
}

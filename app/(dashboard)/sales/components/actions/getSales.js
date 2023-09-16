import axios from "axios";
const getSales = async () => {

    const sales = await axios.get(process.env.NEXT_PUBLIC_URL + "/api/sales");

    const total = sales.data.reduce((acc, curr) => acc + curr.sales.amount, 0).toFixed(2);
    return [sales, total];
}
 
export default getSales;
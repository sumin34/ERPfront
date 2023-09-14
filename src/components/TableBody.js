import TableColumn from "../elements/TableColumn";
import { useEffect, useState } from "react";
import axios from "axios";

function TableBody(props) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setOrders(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  console.log(orders);

  return (
    <tbody className="list" id="table-orders-body">
      {loading && <div> loading... </div>}

      {orders.map((order) => (
        <TableColumn key={order.id} content={order.title}></TableColumn>
      ))}
    </tbody>
  );
}

export default TableBody;

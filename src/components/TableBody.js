import TableColumn from "../elements/TableColumn";

function TableBody({ orders, loading }) {
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

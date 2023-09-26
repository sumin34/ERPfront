import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableFooter,
  TablePagination,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Test() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        //"https://jsonplace  holder.typicode.com/posts"
        "http://127.0.0.1:8080/orders"
      );
      setOrders(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer class="card mb-3" component={Paper}>
      <div class="card-header">
        <div class="row flex-between-center">
          <div class="col-4 col-sm-auto d-flex align-items-center pe-0">
            <h5 class="fs-0 mb-0 text-nowrap py-2 py-xl-0">Orders</h5>
          </div>
        </div>
      </div>
      <div class="card-body p-0">
        <div class="table-responsive scrollbar">
          <Table
            size="small"
            class="table table-sm table-striped fs--1 mb-0 overflow-hidden"
          >
            <TableHead class="bg-200">
              <TableRow>
                <TableCell
                  class="text-900 sort pe-1 align-middle white-space-nowrap"
                  data-sort="userId"
                >
                  날짜
                </TableCell>
                <TableCell
                  class="text-900 sort pe-1 align-middle white-space-nowrap"
                  data-sort="userId"
                >
                  거래처
                </TableCell>
                <TableCell
                  class="text-900 sort pe-1 align-middle white-space-nowrap"
                  data-sort="userId"
                >
                  상품명
                </TableCell>
                <TableCell
                  class="text-900 sort pe-1 align-middle white-space-nowrap"
                  data-sort="userId"
                >
                  수량
                </TableCell>
                <TableCell
                  class="text-900 sort pe-1 align-middle white-space-nowrap"
                  data-sort="userId"
                >
                  발주 상태
                </TableCell>
                <TableCell
                  class="text-900 sort pe-1 align-middle white-space-nowrap"
                  data-sort="userId"
                >
                  종합
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody class="list">
              {orders
                .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
                .map(({ date, s_name, i_name, quantity, state, price }, i) => (
                  <TableRow key={i + 1}>
                    <TableCell class="order py-2 align-middle white-space-nowrap">
                      {date}
                    </TableCell>
                    <TableCell class="order py-2 align-middle white-space-nowrap">
                      {s_name}
                    </TableCell>
                    <TableCell class="order py-2 align-middle white-space-nowrap">
                      {i_name}
                    </TableCell>
                    <TableCell class="order py-2 align-middle white-space-nowrap">
                      {quantity}
                    </TableCell>
                    <TableCell class="order py-2 align-middle white-space-nowrap">
                      {state}
                    </TableCell>
                    <TableCell class="order py-2 align-middle white-space-nowrap">
                      {price}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  count={orders.length}
                  page={page}
                  rowsPerPage={rowsPerPage}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </TableContainer>
  );
}

export default Test;

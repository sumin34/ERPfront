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

function ProductQuantity() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [product, setProduct] = useState([]);
  const [totalElements, setTotalElements] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://3.35.21.109/api/items?" +
          "page=" +
          (page + 1) +
          "&size=" +
          rowsPerPage
      );
      setProduct(response.data.content);
      setTotalElements(response.data.totalElements);
    };
    fetchData();
  }, [page, rowsPerPage]);

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
            <h5 class="fs-0 mb-0 text-nowrap py-2 py-xl-0">재고 현황</h5>
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
                  상품명
                </TableCell>
                <TableCell
                  class="text-900 sort pe-1 align-middle white-space-nowrap"
                  data-sort="userId"
                >
                  수량
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody class="list">
              {product.map(({ item_Name, quantity }, i) => (
                <TableRow key={i + 1}>
                  <TableCell class="order py-2 align-middle white-space-nowrap">
                    {item_Name}
                  </TableCell>
                  <TableCell class="order py-2 align-middle white-space-nowrap">
                    {quantity}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <TableFooter>
        <TableRow>
          <TablePagination
            count={totalElements}
            page={page}
            rowsPerPage={rowsPerPage}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </TableRow>
      </TableFooter>
    </TableContainer>
  );
}

export default ProductQuantity;

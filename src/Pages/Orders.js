import React from "react";
import OrderListHeader from "../components/OrderListHeader";
import TableHead from "../components/TableHead";
import TableBody from "../components/TableBody";
import OrderListFooter from "../components/OrderListFooter";

function Orders() {
  return (
    <div class="content">
      <div
        class="card mb-3"
        id="ordersTable"
        data-list='{"valueNames":["order","date","address","status","amount"],"page":10,"pagination":true}'
      >
        <OrderListHeader />
        <div class="card-body p-0">
          <div class="table-responsive scrollbar">
            <table class="table table-sm table-striped fs--1 mb-0 overflow-hidden">
              <TableHead />
              <TableBody />
            </table>
          </div>
        </div>
        <OrderListFooter />
      </div>
    </div>
  );
}

export default Orders;

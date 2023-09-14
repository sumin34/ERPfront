function TableHead() {
  return (
    <thead class="bg-200">
      <tr>
        <th>
          <div class="form-check fs-0 mb-0 d-flex align-items-center">
            <input
              class="form-check-input"
              id="checkbox-bulk-customers-select"
              type="checkbox"
              data-bulk-select='{"body":"table-orders-body","actions":"orders-bulk-actions","replacedElement":"orders-actions"}'
            />
          </div>
        </th>
        <th
          class="text-900 sort pe-1 align-middle white-space-nowrap"
          data-sort="order"
        >
          날짜
        </th>
        <th
          class="text-900 sort pe-1 align-middle white-space-nowrap pe-7"
          data-sort="date"
        >
          거래처
        </th>
        <th
          class="text-900 sort pe-1 align-middle white-space-nowrap"
          data-sort="address"
          style={{ minWidth: "12.5rem" }}
        >
          상품명
        </th>
        <th
          class="text-900 sort pe-1 align-middle white-space-nowrap text-center"
          data-sort="status"
        >
          발주 상태
        </th>
        <th
          class="text-900 sort pe-1 align-middle white-space-nowrap text-end"
          data-sort="amount"
        >
          종합
        </th>
        <th class="no-sort"></th>
      </tr>
    </thead>
  );
}

export default TableHead;

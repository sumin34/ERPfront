function TabnleColumn(props) {
  return (
    <tr class="btn-reveal-trigger">
      <td class="align-middle" style={{ width: "28px" }}>
        <div class="form-check fs-0 mb-0 d-flex align-items-center">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkbox-0"
            data-bulk-select-row="data-bulk-select-row"
          />
        </div>
      </td>
      <td class="order py-2 align-middle white-space-nowrap">
        <a href="../../../app/e-commerce/orders/order-details.html">
          {" "}
          <strong>#181</strong>
        </a>{" "}
        by <strong>Ricky Antony</strong>
        <br />
        <a href="mailto:ricky@example.com">ricky@example.com</a>
      </td>
      <td class="date py-2 align-middle">20/04/2019</td>
      <td class="address py-2 align-middle white-space-nowrap">
        {props.content}
        <p class="mb-0 text-500">Via Flat Rate</p>
      </td>
      <td class="status py-2 align-middle text-center fs-0 white-space-nowrap">
        <span class="badge badge rounded-pill d-block badge-subtle-success">
          Completed
          <span class="ms-1 fas fa-check" data-fa-transform="shrink-2"></span>
        </span>
      </td>
      <td class="amount py-2 align-middle text-end fs-0 fw-medium">$99</td>
      <td class="py-2 align-middle white-space-nowrap text-end">
        <div class="dropdown font-sans-serif position-static">
          <button
            class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal"
            type="button"
            id="order-dropdown-0"
            data-bs-toggle="dropdown"
            data-boundary="viewport"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="fas fa-ellipsis-h fs--1"></span>
          </button>
          <div
            class="dropdown-menu dropdown-menu-end border py-0"
            aria-labelledby="order-dropdown-0"
          >
            <div class="py-2">
              <a class="dropdown-item" href="#!">
                Completed
              </a>
              <a class="dropdown-item" href="#!">
                Processing
              </a>
              <a class="dropdown-item" href="#!">
                On Hold
              </a>
              <a class="dropdown-item" href="#!">
                Pending
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item text-danger" href="#!">
                Delete
              </a>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default TabnleColumn;

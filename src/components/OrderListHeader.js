function OrderListHeader() {
  return (
    <div class="card-header">
      <div class="row flex-between-center">
        <div class="col-4 col-sm-auto d-flex align-items-center pe-0">
          <h5 class="fs-0 mb-0 text-nowrap py-2 py-xl-0">Orders</h5>
        </div>
        <div class="col-8 col-sm-auto ms-auto text-end ps-0">
          <div class="d-none" id="orders-bulk-actions">
            <div class="d-flex">
              <select
                class="form-select form-select-sm"
                aria-label="Bulk actions"
              >
                <option selected="">Bulk actions</option>
                <option value="Refund">Refund</option>
                <option value="Delete">Delete</option>
                <option value="Archive">Archive</option>
              </select>
              <button class="btn btn-falcon-default btn-sm ms-2" type="button">
                Apply
              </button>
            </div>
          </div>
          <div id="orders-actions">
            <button class="btn btn-falcon-default btn-sm" type="button">
              <span
                class="fas fa-plus"
                data-fa-transform="shrink-3 down-2"
              ></span>
              <span class="d-none d-sm-inline-block ms-1">New</span>
            </button>
            <button class="btn btn-falcon-default btn-sm mx-2" type="button">
              <span
                class="fas fa-filter"
                data-fa-transform="shrink-3 down-2"
              ></span>
              <span class="d-none d-sm-inline-block ms-1">Filter</span>
            </button>
            <button class="btn btn-falcon-default btn-sm" type="button">
              <span
                class="fas fa-external-link-alt"
                data-fa-transform="shrink-3 down-2"
              ></span>
              <span class="d-none d-sm-inline-block ms-1">Export</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderListHeader;

import React from "react";

function Graph() {
  return (
    <div class="col-lg-6 mb-3">
      <div class="card h-lg-100">
        <div class="card-header">
          <div class="row flex-between-center">
            <div class="col-auto">
              <h6 class="mb-0">Total Sales</h6>
            </div>
            <div class="col-auto d-flex">
              <select class="form-select form-select-sm select-month me-2">
                <option value="0">January</option>
                <option value="1">February</option>
                <option value="2">March</option>
                <option value="3">April</option>
                <option value="4">May</option>
                <option value="5">Jun</option>
                <option value="6">July</option>
                <option value="7">August</option>
                <option value="8">September</option>
                <option value="9">October</option>
                <option value="10">November</option>
                <option value="11">December</option>
              </select>
              <div class="dropdown font-sans-serif btn-reveal-trigger">
                <button
                  class="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
                  type="button"
                  id="dropdown-total-sales"
                  data-bs-toggle="dropdown"
                  data-boundary="viewport"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span class="fas fa-ellipsis-h fs--2"></span>
                </button>
                <div
                  class="dropdown-menu dropdown-menu-end border py-2"
                  aria-labelledby="dropdown-total-sales"
                >
                  <a class="dropdown-item" href="#!">
                    View
                  </a>
                  <a class="dropdown-item" href="#!">
                    Export
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item text-danger" href="#!">
                    Remove
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body h-100 pe-0">
          <div
            class="echart-line-total-sales h-100"
            data-echart-responsive="true"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Graph;

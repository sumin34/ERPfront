import React from "react";
import GraphDropbar from "./GraphDropbar";

function Graph() {
  return (
    <>
    <div class="col-lg-6 mb-3">
      <div class="card h-lg-100">
        <div class="card-header">
          <div class="row flex-between-center">
            <div class="col-auto">
              <h6 class="mb-0">Total Sales</h6>
            </div>
            <div class="col-auto d-flex">
              <GraphDropbar></GraphDropbar>
                  <span class="fas fa-ellipsis-h fs--2"></span>
                
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
    </>
  );
}

export default Graph;

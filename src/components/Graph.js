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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Graph;

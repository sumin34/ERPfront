import React from "react";

function Card3() {
  return (
    <div class="col-md-6 col-xxl-3" >
      <div class="card h-md-100 ecommerce-card-min-width">
        <div class="card-header pb-0">
          <h6 class="mb-0 mt-2 d-flex align-items-center">상위 품목</h6>
        </div>
        <div class="card-body d-flex flex-column justify-content-end">
          <div class="row">
            <div class="col">
              <p class="font-sans-serif lh-1 mb-1 fs-4">$47K</p>
              <span class="badge badge-subtle-success rounded-pill fs--2">
                +3.5%
              </span>
            </div>
            <div class="col-auto ps-0">
              <div class="echart-bar-weekly-sales h-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card3;

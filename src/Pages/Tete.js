import React from "react";
import Circlegraph from "../components/Circlegraph";
import Card1 from "../components/Card1";

function Tete() {
  const height = "80px";

  return (
    <>
      <div class="col-md-6 col-xxl-3">
        <div class="card h-md-100 ecommerce-card-min-width">
          <div class="card-header pb-0">
            <h6 class="mb-0 mt-2 d-flex align-items-center">판매량</h6>
          </div>
          <div class="card-body-graph d-flex flex-column justify-content-end">
            <div class="row">
              <div class="col">
                <p class="font-sans-serif lh-1 mb-1 fs-4">$47K</p>
                <span class="badge badge-subtle-success rounded-pill fs--2">
                  +3.5%
                </span>
              </div>
              <div class="col-auto ps-0">


                <div style={{ width: "200px" }}>
                  <Circlegraph
                    height={height}
                  ></Circlegraph>
                </div>

                
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  );
}

export default Tete;
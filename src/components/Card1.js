import React, { useState } from "react";
import Circlegraph from "./Circlegraph";
function Card1(props) {
  const {title_info, show_info,selectedGraph}=props;

  const height = "80px";

  const renderSelectedGraph = () => {
    if(selectedGraph ==='default'){
      return <p>reslkjla;shfh</p>;
    }else if (selectedGraph === 'circle') {
      return <Circlegraph height={height} />;
    // } else if (selectedGraph === 'halfcircle') {
    //   return <Halfcirclegraph height={height} />;
    // } else if (selectedGraph === 'line') {
    //   return <Linegraph height={height} />;
     }
  }

  return (
    <div class="col-md-6 col-xxl-3">
      <div class="card h-md-100 ecommerce-card-min-width">
        <div class="card-header pb-0">
          <h6 class="mb-0 mt-2 d-flex align-items-center">{title_info}</h6>
        </div>
        <div class="card-body d-flex flex-column justify-content-end">
          <div class="row">
            <div class="col">
              <p class="font-sans-serif lh-1 mb-1 fs-4">{show_info}</p>
              <span class="badge badge-subtle-success rounded-pill fs--2">
                +3.5%
              </span>
            </div>
            <div class="col-auto ps-0">
              <div style={{ width: "200px" }}>
                  {renderSelectedGraph()}
              </div>

              
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Card1;

import React from "react";
import GraphDropbar from "./GraphDropbar";


function Detailgraph() {
    return (
        <div class="card">
            <div class="card-header">
                <div class="row flex-between-center g-0">
                    <div class="col-auto">
                        <h6 class="mb-0">Total Sales</h6>
                    </div>
                    <div class="col-auto">
                        <div class="dropdown font-sans-serif btn-reveal-trigger">
                        <GraphDropbar></GraphDropbar>
                            <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="dropdown-total-sales-ecomm"><a class="dropdown-item" href="#!">View</a><a class="dropdown-item" href="#!">Export</a>
                                <div class="dropdown-divider"></div><a class="dropdown-item text-danger" href="#!">Remove</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body pe-xxl-0">
                <div class="echart-line-total-sales-ecommerce" data-echart-responsive="true" data-options='{"optionOne":"ecommerceLastMonth","optionTwo":"ecommercePrevYear"}'></div>
            </div>
        </div>
    );
}

export default Detailgraph;
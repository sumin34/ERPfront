import React from "react";


function Detailtop() {

    return (
        <div class="col-12" >
            <div class="card bg-transparent-50 overflow-hidden">
                <div class="card-header position-relative">
                    <div class="bg-holder d-none d-md-block bg-card z-index-1"
                        style={{
                            backgroundImage: 'url(../assets/img/illustrations/ecommerce-bg.png)',
                            backgroundSize: '230px',
                            backgroundPosition: 'right bottom',
                            zIndex: '-1',
                        }}
                    ></div>
                    <div class="position-relative z-index-2">
                        <div>
                            <h3 class="text-primary mb-1">Good Afternoon, Jonathan!</h3>
                            <p>Here’s what happening with your store today </p>
                        </div>
                        <div class="d-flex py-3">
                            <div class="pe-3">
                                <p class="text-600 fs--1 fw-medium">Today's visit </p>
                                <h4 class="text-800 mb-0">14,209</h4>
                            </div>
                            <div class="ps-3">
                                <p class="text-600 fs--1">Today’s total sales </p>
                                <h4 class="text-800 mb-0">$21,349.29 </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Detailtop;
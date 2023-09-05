import React from "react";
import "../App.css";
function TotalCard(){
    const imageStyle={
        
    };

    return (
        <>
    <input></input>
    <div className="col-12">
        <div className="card bg-transparent-50 overflow-hidden">
            <div className="card-header position-relative">
                <div className="bg-holder d-none d-md-block bg-card z-index-1" style={imageStyle} >

                <p>test</p>
                <div className="position-relative z-index-2">
                    <div>
                        <h3 className="text-primary mb-1">Good Afternoon, Jonathan!</h3>
                        <p>Here’s what happening with your store today </p>
                    </div>
                    <div className="d-flex py-3">
                        <div className="pe-3">
                            <p className="text-600 fs--1 fw-medium">Today's visit</p>
                            <h4 className="text-800 mb-0">15,203</h4>
                        </div>
                    </div>
                </div>
                </div>
            </div>

        </div>
    </div>
    </>
    );
}

export default TotalCard;
import React from "react";

function GraphChart(){

    return(
        <>
        <p>happening</p>
        <div className="card-body h-100 pe-0">
            <div className="echart-line-total-sales h-100" data-echart-responsive="true"
             style={{
                position: 'absolute',
                left: '0px',
                top: '0px',
                width: '488px',
                height: '295px',
                userSelect: 'none',
                WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
                padding: '0px',
                margin: '0px',
                borderWidth: '0px'
              }}
             _echarts_instance_="ec_1694155008947">
                <div className="charclass">
                    <canvas className="chartstyle" data-zr-dom-id="zr_0" width="526" height="283" >
                     </canvas>
                </div>
                <div className="charclass">
                </div>    
             </div>
        </div>
        </>
    );
}

export default GraphChart;
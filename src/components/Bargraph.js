import React, { useRef, useEffect, useState } from "react";
import GraphDropbar from "./GraphDropbar";
import Chart from "react-apexcharts";

function Bargraph() {


  // 데이터 배열 정의
  var dates = [];


  for (var i = 0; i < dataSeries.length; i++) {
    var innerArr = [ dataSeries[i].value];
    
    dates.push(innerArr);
  }

  console.log(dates);
  
    const [series,setSeries] = useState([
      
    ]);

    // 데이터 및 옵션 설정
    const [options,setOptions] = useState({
      chart: {
        height: 350,
        type: 'line',
        
        toolbar: {
          show: false
        }
      },
      colors: ['#4374D9','#81D4FA', '#FEB019', '#546E7A', '#E91E63', '#FF9800'], //데이터 표기 색
      dataLabels: {
        enabled: false,
      },
      stroke: {
          curve:'straight',
          width:1.5
      },
      
      title: {
        text: '제품별 판매량',
        align: 'left'
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          opacity: 0.5
        },
      },
      markers: {
        size: 4,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        scolors:'#e7e7e7'
      },
      yaxis: {
        title: {
        },
        min: 5, //최소 최대 설정
        max: 400
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
      },
    });


  return (
    <div className="col-lg-6 mb-3">
      <div className="card h-lg-100">
        <div className="card-header">
          <div className="row flex-between-center">
            <div className="col-auto">
              <h6 className="mb-0">Total Sales</h6>
            </div>
            <div className="col-auto d-flex">
              <GraphDropbar />
            </div>
          </div>
        </div>
        <div>
          <Chart
            options={options}
            series={series}
            
          ></Chart>
        </div>

      </div>
    </div>
    
  );
}

export default Bargraph;

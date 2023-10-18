import React, { useRef, useEffect, useState } from "react";
import GraphDropbar from "./GraphDropbar";
import Chart from "react-apexcharts";

function Graph() {


  // 데이터 배열 정의
  var dates = [];

  var dataSeries = [
    {
      date: "2014-01-01",
      value: 200
    },
    {
      date: "2014-01-02",
      value: 103
    },
    {
      date: "2014-01-03",
      value: 304
    },
    {
      date: "2014-01-04",
      value: 107
    },
    {
      date: "2014-01-05",
      value: 339
    },
    {
      date: "2014-01-06",
      value: 115
    },
    {
      date: "2014-01-07",
      value: 144
    },
    
    
    // 나머지 데이터 포인트들 추가
  ];

  for (var i = 0; i < dataSeries.length; i++) {
    var innerArr = [ dataSeries[i].value];
    
    dates.push(innerArr);
  }

  console.log(dates);
  
    const [series,setSeries] = useState([
      {
        name: "게임 1 판매량asdf",
        data: [28, 29, 33, 36, 32, 32, 33]
      },
      {
        name: "게임 2 판매량asdfsf",
        data: dates
      },
      {
        name:"게임 3 판매량asdf",
        data : [0, 100, 150, 50, 80, 200, 190]
      },
      {
        name:"게임 4 판매량asdfasdf",
        data : [300,300,300,200,200,200,100]
      }
    ]);

    // 데이터 및 옵션 설정
    const [options,setOptions] = useState({
      chart: {
        height: '100px',
        width : '100px',
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
          width:3
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
        size: 6,
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
    <div className="card">
        <div className="card-header">
          <div className="row flex-between-center g-0">
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
    
  );
}

export default Graph;

import React, { useRef, useEffect } from "react";
import GraphDropbar from "./GraphDropbar";
import Chart from "react-apexcharts";

function Graph() {
  const chartRef = useRef(null);

  // 데이터 배열 정의
  var ts2 = 1484418600000;
  var dates = [];
  var spikes = [5, -5, 3, -3, 8, -8];


  var dataSeries = [
    {
      date: "2014-01-01",
      value: 20000000
    },
    {
      date: "2014-01-02",
      value: 10379978
    },
    {
      date: "2014-01-03",
      value: 30493749
    },
    {
      date: "2014-01-04",
      value: 10785250
    },
    {
      date: "2014-01-05",
      value: 33901904
    },
    {
      date: "2014-01-06",
      value: 11576838
    },
    {
      date: "2014-01-07",
      value: 14413854
    },
    {
      date: "2014-01-08",
      value: 15177211
    },
    {
      date: "2014-01-09",
      value: 16622100
    },
    {
      date: "2014-01-10",
      value: 17381072
    },
    {
      date: "2014-01-11",
      value: 18802310
    },
    {
      date: "2014-01-12",
      value: 15531790
    },
    {
      date: "2014-01-13",
      value: 15748881
    },
    {
      date: "2014-01-14",
      value: 18706437
    },
    {
      date: "2014-01-15",
      value: 19752685
    },
    {
      date: "2014-01-16",
      value: 21016418
    },
    {
      date: "2014-01-17",
      value: 25622924
    },
    {
      date: "2014-01-18",
      value: 25337480
    },
    {
      date: "2014-01-19",
      value: 22258882
    },
    {
      date: "2014-01-20",
      value: 23829538
    },
    {
      date: "2014-01-21",
      value: 24245689
    },
    {
      date: "2014-01-22",
      value: 26429711
    },
    {
      date: "2014-01-23",
      value: 26259017
    },
    {
      date: "2014-01-24",
      value: 25396183
    },
    {
      date: "2014-01-25",
      value: 23107346
    },
    
    // 나머지 데이터 포인트들 추가
  ];

  for (var i = 0; i < dataSeries.length; i++) {
    ts2 = ts2 + 86400000;
    var innerArr = [ts2, dataSeries[i].value];
    dates.push(innerArr);
  }
  


  useEffect(() => {
    // 데이터 및 옵션 설정
    var options = {
      
      chart: {
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: 'zoom',
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      title: {
        text: 'Stock Price Movement',
        align: 'left',
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0);
          },
        },
        title: {
          text: 'value',
        },
      },
      xaxis: {
        type: 'datetime',
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0);
          },
        },
      },
    };


    options.series = [{
      name: 'Price',
      data: dates,
    }];

    var chart = new Chart(chartRef.current, options);
    chart.render();
  }, []);

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
        <h1>asdlkfhlhslkfhsl;h</h1>
        <div id="chart" ref={chartRef}></div>
      </div>
    </div>
    
  );
}

export default Graph;

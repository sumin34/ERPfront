import React, { useEffect, useState } from "react";
import CardBody from "../components/CardBody";
import Graph from "../components/Graph";
import GraphDropbar from "../components/GraphDropbar";
import axios from "axios";

function Main() {
  const [salesRanking, setSalesRanking] = useState([]);
  const [previousSales, setPreviousSales] = useState(0);
  const [expectedSales, setExpectedSales] = useState(0);
  const [dataCircle, setDataCircle] = useState([
    {
      "id": "",
      "label": "",
      "value": 0,
      "color": ""
    },
    {
      "id": "",
      "label": "",
      "value": 0,
      "color": ""
    },
    {
      "id": "",
      "label": "",
      "value": 0,
      "color": ""
    },
    {
      "id": "",
      "label": "",
      "value": 0,
      "color": ""
    },
    {
      "id": "",
      "label": "",
      "value": 0,
      "color": ""
    }
  ]);



  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://3.39.191.105:8080/");
      setExpectedSales(response.data.expectedSales);
      const fetchedSalesRanking = response.data.salesRanking.map(item => item.item_Name);
      setSalesRanking(fetchedSalesRanking);
      setPreviousSales(response.data.previousSales);

      console.log(fetchedSalesRanking);
      if (fetchedSalesRanking.length >= 5) {
        const newDataCircle = [
          {
            "id": fetchedSalesRanking[0],
            "label": fetchedSalesRanking[0],
            "value": 100,
            "color": "hsl(269, 70%, 50%)"
          },
          {
            "id": fetchedSalesRanking[1],
            "label": fetchedSalesRanking[1],
            "value": 60,
            "color": "hsl(2, 70%, 50%)"
          },
          {
            "id": fetchedSalesRanking[2],
            "label": fetchedSalesRanking[2],
            "value": 40,
            "color": "hsl(120, 70%, 50%)"
          },
          {
            "id": fetchedSalesRanking[3],
            "label":fetchedSalesRanking[3],
            "value": 30,
            "color": "hsl(120, 70%, 50%)"
          },
          {
            "id": fetchedSalesRanking[4],
            "label": fetchedSalesRanking[4],
            "value": 20,
            "color": "hsl(120, 70%, 50%)"
          }
        ];
        console.log("newDateCircle : ", newDataCircle);

        setDataCircle(newDataCircle);
        console.log("dateCircle : ", dataCircle);
      }
    };
    fetchData();

  }, []);


  const data = [
    {
      "id": "germany",
      "data": [
        {
          "x": "plane",
          "y": 294
        },
        {
          "x": "helicopter",
          "y": 126
        },
        {
          "x": "boat",
          "y": 59
        },
        {
          "x": "train",
          "y": 98
        },
        {
          "x": "subway",
          "y": 173
        },
        {
          "x": "bus",
          "y": 173
        },
        {
          "x": "car",
          "y": 86
        },
        {
          "x": "moto",
          "y": 153
        },
        {
          "x": "bicycle",
          "y": 88
        }
      ]
    },
    {
      "id": "norway",
      "data": [
        {
          "x": "plane",
          "y": 90
        },
        {
          "x": "helicopter",
          "y": 174
        },
        {
          "x": "boat",
          "y": 136
        },
        {
          "x": "train",
          "y": 271
        },
        {
          "x": "subway",
          "y": 211
        },
        {
          "x": "bus",
          "y": 196
        },
        {
          "x": "car",
          "y": 240
        },
        {
          "x": "moto",
          "y": 269
        },
        {
          "x": "bicycle",
          "y": 13
        }
      ]
    }
  ];

  console.log("******************main.js datacircle = ", dataCircle);
  console.log("#################main.js expectedSa;es = ", expectedSales);
  console.log("@@@@@@@@@main.js salesRanking[0] = ", salesRanking[0]);


  const height = "400px";

  const legend = "일별 판매량";
  return (
    
    <>
      <div className="content">
        <CardBody
          className="row g-3 mb-3"
          expectedSales={expectedSales}
          // salesRanking={dataCircle}
          previousSales={previousSales}
        />
        <div class="card" >
          <div class="card-header">
            <div class="row flex-between-center">
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
          <Graph
            data={data}
            height={height}
            legend={legend}
          />
        </div>

      </div>


    </>
  );
}

export default Main;

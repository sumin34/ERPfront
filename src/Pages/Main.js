import React from "react";
import CardBody from "../components/CardBody";
import Graph from "../components/Graph";
import Circlegraph from "../components/Circlegraph";
import GraphDropbar from "../components/GraphDropbar";

function Main() {
  const data = [
    {
      "id": "japan",
      "color": "hsl(218, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 110
        },
        {
          "x": "helicopter",
          "y": 174
        },
        {
          "x": "boat",
          "y": 231
        },
        {
          "x": "train",
          "y": 226
        },
        {
          "x": "subway",
          "y": 263
        },
        {
          "x": "bus",
          "y": 20
        },
        {
          "x": "car",
          "y": 241
        },
        {
          "x": "moto",
          "y": 15
        },
        {
          "x": "bicycle",
          "y": 4
        },
        {
          "x": "horse",
          "y": 222
        },
        {
          "x": "skateboard",
          "y": 114
        },
        {
          "x": "others",
          "y": 65
        }
      ]
    },
    
    {
      "id": "germany",
      "color": "hsl(297, 70%, 50%)",
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
        },
        {
          "x": "horse",
          "y": 136
        },
        {
          "x": "skateboard",
          "y": 219
        },
        {
          "x": "others",
          "y": 176
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(224, 70%, 50%)",
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
        },
        {
          "x": "horse",
          "y": 68
        },
        {
          "x": "skateboard",
          "y": 11
        },
        {
          "x": "others",
          "y": 11
        }
      ]
    }
  ];

  const height="400px";

  return (
    <>
    <div class="content">
      <CardBody className="row g-3 mb-3"/>
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
<Circlegraph 
      data={data}
      height={height}
      />
</div>
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
<Graph/>
</div>
    </div>


</>
  );
}

export default Main;

import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { setSelectedOption } from '../redux/store';
import TotalCard from '../components/TotalCard';
import GraphDropbar from '../components/GraphDropbar';
import GraphChart from '../components/GraphChart';
import Detailtop from '../components/Detailtop';
import CardBody from '../components/CardBody';
import Detailcard from '../components/Detailcard';
import Cardcontent from '../elements/Cardcontent';
import Detailgraph from '../components/Detailgraph';
import Circlegraph from '../components/Circlegraph';
import Graph from '../components/Graph';
import { useEffect } from 'react';
import axios from 'axios';


function Detail() {
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       "http://3.35.21.109/api/detail" 
  //         // +"page=" +
  //         // (page + 1) +
  //         // "&size=" +
  //         // rowsPerPage
  //     );
  //   };
  //   fetchData();
  // }, []);
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
    }
  ];

  const height="400px";

  const legend="일별 판매량";
  return (
    <>
      <div class="container" data-layout="container">
        <div className='row g-3 mb-3'>
          <div class="col-xxl-6 col-xl-12">
            <div className='row g-3'>
              <Detailtop />
              <div className='col-lg-12' style={{ position: 'relative', zIndex: 1 }}>
                <div className='row g-3'>
                  <div className='col-md-6'>
                    <Detailcard cardName="Weekly Sales"
                    rate="주간 판매량">
                    </Detailcard>
                  </div>
                  <div className='col-md-6'>
                    <Detailcard 
                    cardName="Product Share"
                    rate="상품 점유율"></Detailcard>
                  </div>
                  <div className='col-md-6'>
                    <Detailcard cardName="Market Share"
                    rate="시장 점유율"></Detailcard>
                  </div>
                  <div className='col-md-6'>
                    <Detailcard cardName="Total Order"
                    rate="전체 판매량"></Detailcard>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-6 col-xl-12">
            <div class="card py-3 mb-3">
              <div class="card-body py-3">
                <div class="row g-0">
                  <Cardcontent className={"border-200 border-bottom border-end pb-4"}></Cardcontent>
                  <Cardcontent className={"border-200 border-md-200 border-end border-bottom border-md-end pb-4 ps-3"}></Cardcontent>
                  <Cardcontent className={"border-200 border-bottom border-md-end-0 pb-4 pt-4 pt-md-0 ps-md-3"}></Cardcontent>
                  <Cardcontent className={"border-200 border-md-200 border-end border-md-bottom-0 border-md-end pt-4 pb-md-0 ps-3 ps-md-0"}></Cardcontent>
                  <Cardcontent className={"border-200 border-md-bottom-0 border-end pt-4 pb-md-0 ps-md-3"}></Cardcontent>
                  <Cardcontent className={"pb-0 pt-4 ps-3"}></Cardcontent>
                </div>
              </div>
            </div>
          </div>
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

export default Detail;
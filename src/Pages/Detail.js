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


function Detail() {

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
        <Detailgraph></Detailgraph>
        <GraphDropbar></GraphDropbar>
        <GraphChart></GraphChart>
      </div>
    </>
  );
}

export default Detail;
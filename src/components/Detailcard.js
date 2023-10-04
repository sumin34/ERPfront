import { func } from "prop-types";
import Detail from "../Pages/Detail";
import DashCardInfo from "../elements/DashCardInfo";

function Detailcard(props) {
    const {cardName,rate} = props;
    return (
        <div class="card product-share-doughnut-width">
            <div class="card-header pb-0">
                <h6 class="mb-0 mt-2 d-flex align-items-center">{cardName}</h6>
            </div>
            <div class="card-body d-flex flex-column justify-content-end">
                <DashCardInfo rate={rate}></DashCardInfo>
            </div>
        </div>
    );
}

export default Detailcard;
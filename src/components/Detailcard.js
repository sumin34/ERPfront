import { func } from "prop-types";
import Detail from "../Pages/Detail";

function Detailcard() {

    return (
        <div class="card product-share-doughnut-width">
            <div class="card-header pb-0">
                <h6 class="mb-0 mt-2 d-flex align-items-center">Product Share</h6>
            </div>
            <div class="card-body d-flex flex-column justify-content-end">
                <div class="row align-items-end">
                    <div class="col">
                        <p class="font-sans-serif lh-1 mb-1 fs-2">34.6%</p><span class="badge badge-soft-success rounded-pill"><span class="fas fa-caret-up me-1"></span>3.5%</span>
                    </div>
                    <div class="col-auto ps-0"><canvas class="my-n5" id="marketShareDoughnut" width="112" height="112"></canvas>
                        <p class="mb-0 text-center fs--2 mt-4 text-500">Target: <span class="text-800">55%</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detailcard;
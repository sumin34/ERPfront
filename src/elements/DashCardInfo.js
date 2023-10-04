
function DashCardInfo(props){
    const {rate} = props;
    return(
        <div class="row align-items-end">
                    <div class="col">
                        <p class="font-sans-serif lh-1 mb-1 fs-2">{rate}</p><span class="badge badge-soft-success rounded-pill"><span class="fas fa-caret-up me-1"></span>3.5%</span>
                    </div>
                    <div class="col-auto ps-0"><canvas class="my-n5" id="marketShareDoughnut" width="112" height="112"></canvas>
                        <p class="mb-0 text-center fs--2 mt-4 text-500">Target: <span class="text-800">55%</span></p>
                    </div>
                </div>
    );
}

export default DashCardInfo;
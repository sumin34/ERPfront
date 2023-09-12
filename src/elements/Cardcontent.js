import { func } from "prop-types";

function Cardcontent({className}) {
    const classes = `col-6 col-md-4 ${className}`;

    return (
        <div class={classes}>
            <h6 class="pb-1 text-700">Refunds </h6>
            <p class="font-sans-serif lh-1 mb-1 fs-2">$145.65 </p>
            <div class="d-flex align-items-center">
                <h6 class="fs--1 text-500 mb-0">13,675 </h6>
                <h6 class="fs--2 ps-3 mb-0 text-success"><span class="me-1 fas fa-caret-up"></span>21.8%</h6>
            </div>
        </div>
    );
}

export default Cardcontent;
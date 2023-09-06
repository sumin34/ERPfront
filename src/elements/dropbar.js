import "../App.css";

function dropbar(){
    return(
        <>
        <select className="form-select form-select-sm select-month me-2">
            <option value="0">January</option>
            <option value="0">February</option>
            <option value="0">March</option>
            <option value="0">April</option>
            <option value="0">May</option>
            <option value="0">Jun</option>
            <option value="0">July</option>
            <option value="0">August</option>
            <option value="0">September</option>
            <option value="0">October</option>
            <option value="0">November</option>
            <option value="0">December</option>
        </select>

        <div className="dropdown font-sans-serif btn-reveal-trigger">

            <button className="btn btn-link text-600 btn-sm dropdown-toggle dropdown-caret-none btn-reveal"
            type="button" id="dropdown-total-sales" data-bs-toggle="dropdown" data-boundary="viewport" aria-haspopup="true" aria-expanded="false">
            </button>

            <svg className="svg-inline--fa fa-ellipsis-h fa-w-16 fs--2" aria-hidden="true"
            focusable="false" data-prefix="fas" data-icon="ellipsis-h" role="img" 
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg></svg>
            
        </div>
        </>
    );
}
export default dropbar;
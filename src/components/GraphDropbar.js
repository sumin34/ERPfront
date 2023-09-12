import { useDispatch, useSelector } from "react-redux";
import "../App.css";
import { setSelectedOption } from "../redux/store";
import GraphChart from "./GraphChart";

function GraphDropbar() {
  const selectedOption = useSelector((state) => state.selectedOption);
  const dispatch = useDispatch();

  // 선택한 옵션에 따라 그래프를 렌더링하는 함수
  const renderGraph = () => {
    switch (selectedOption) {
      case "shop":
        return <div>Shop Graph Here</div>;
      case "date":
        return <div>Date Graph Here</div>;
      case "product":
        return <div>Product Graph Here</div>;
      default:
        return <div>Shop Graph Here</div>;
    }
  };

  return (
    <div>
      <select
        className="form-select form-select-sm select-month me-2"
        value={selectedOption}
        onChange={(e) => dispatch(setSelectedOption(e.target.value))}
      >
        <option value="shop">Shop</option>
        <option value="date">Date</option>
        <option value="product">Product</option>
      </select>

      {renderGraph()}
    </div>
  );
}

export default GraphDropbar;

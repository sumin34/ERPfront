import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { setSelectedOption } from '../redux/store';
import TotalCard from '../components/TotalCard';
import GraphDropbar from '../components/GraphDropbar';
import GraphChart from '../components/GraphChart';

function Detail() {
  
  return (
    <>
    <GraphDropbar></GraphDropbar>
    <GraphChart></GraphChart>
    </>
  );
}

export default Detail;
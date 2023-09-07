import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { setSelectedOption } from '../redux/store';
import TotalCard from '../components/TotalCard';
import GraphDropbar from '../components/GraphDropbar';

function Detail() {
  
  return (
    <GraphDropbar></GraphDropbar>
  );
}

export default Detail;
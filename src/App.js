import logo from './logo.svg';
import './App.css';
import TotalCard from './components/TotalCard';
import { Route, Routes } from 'react-router-dom';
import Detail from './Pages/Detail';

function App() {
  return (
    <Routes>
      <Route path="/detail" element={<Detail/>}/>
    </Routes>
  );
}

export default App;

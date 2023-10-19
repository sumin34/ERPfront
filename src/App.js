import "./App.css";
import { Route, Routes } from "react-router-dom";
import Detail from "./Pages/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./Pages/Main";
import Orders from "./Pages/Orders";
import Tete from "./Pages/Tete";
import ProductQuantity from "./Pages/ProductQuantity";

function App() {
  return (
    <main class="main">
      <div class="container" data-layout="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/productquantity" element={<ProductQuantity />} />
          <Route path="/tete" element={<Tete />} />
        </Routes>
        <Footer />
      </div>
    </main>
  );
}

export default App;

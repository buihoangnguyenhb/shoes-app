import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Shoes from "./Page/Shoes";
import Cart from "./Page/Cart";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "./Contexts/CartContext";

function App() {
  const [shoes, setShoes] = useState([]);
  const [myCart, addToCart] = useState([{}]);
  const [toTal, setTotal] = useState(0);
  useEffect(() => {
    async function getData() {
      const res = await axios.get("/v1/shoes");
      return res;
    }
    getData().then((res) => {
      setShoes(res.data);
    });
    getData().catch((err) => console.log(err));
    // console.log("cai db gi vay");
  }, []);
  return (
    <CartContext.Provider value={{ myCart, addToCart, toTal, setTotal }}>
      <Router>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shoes" element={<Shoes allShoes={shoes} />} />
            <Route path="/checkout" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartContext.Provider>
  );
}

export default App;

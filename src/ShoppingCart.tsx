import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/index.css";
import List from "./pages/List";
import Cart from "./pages/Cart";
import OrderList from "./pages/OrderList";

function ShoppingCart() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<OrderList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ShoppingCart;

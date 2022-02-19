import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/index.css";
import Header from "./components/Header";
import ProductList from "./pages/ProductList";
import CartList from "./pages/CartList";
import OrderList from "./pages/OrderList";

function ShoppingCart() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/order" element={<OrderList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ShoppingCart;

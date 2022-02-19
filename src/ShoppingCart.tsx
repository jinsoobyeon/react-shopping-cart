import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./css/index.css";
import { getProducts } from "./modules/Products";
import Header from "./components/Header";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import OrderList from "./pages/OrderList";

function ShoppingCart() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<OrderList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default ShoppingCart;

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";
import { Product } from "../types/dto";
import Header from "../components/Header";
import cart from "../assets/svgs/cart.svg";

function ProductList() {
  const products = useSelector(
    (state: RootState) => state.products.productsList
  );

  return (
    <React.Fragment>
      <Header />
      <section className="product-container">
        {products.map((product: Product) => (
          <div key={product.id}>
            <img
              className="w-280 h280"
              src={product.imageUrl}
              alt={`${product.name}`}
            />
            <div className="flex justify-between w-280 p-5">
              <div className="product-info">
                <span className="product-info__name">{product.name}</span>
                <span className="product-info__price">
                  {product.price.toLocaleString()}원
                </span>
              </div>
              <img src={cart} alt="장바구니" />
            </div>
          </div>
        ))}
      </section>
    </React.Fragment>
  );
}

export default ProductList;

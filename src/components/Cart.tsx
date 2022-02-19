import React from "react";
import { GetCartResponse } from "../types/dto";
import trash from "../assets/svgs/trash.svg";

function Cart({ product }: GetCartResponse) {
  return (
    <React.Fragment>
      <div className="cart-container">
        <div className="flex gap-15 mt-10">
          <input
            className="checkbox"
            name="checkbox"
            type="checkbox"
            defaultChecked
          />
          <img
            className="w-144 h-144"
            src={product.imageUrl}
            loading="lazy"
            alt={`${product.name}`}
          />
          <span className="cart-name">{product.name}</span>
        </div>
        <div className="flex-col-center justify-end gap-15">
          <img className="cart-trash-svg" src={trash} alt="삭제" />
          <div className="number-input-container">
            <input type="number" className="number-input" value="1" />
            <div>
              <button className="number-input-button">▲</button>
              <button className="number-input-button">▼</button>
            </div>
          </div>
          <span className="cart-price">{product.price.toLocaleString()}원</span>
        </div>
      </div>
      <hr className="divide-line-thin mt-10" />
    </React.Fragment>
  );
}

export default Cart;

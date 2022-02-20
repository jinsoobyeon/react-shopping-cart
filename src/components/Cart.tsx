import React from "react";
import { useDispatch } from "react-redux";
import {
  getCarts,
  deleteCart,
  increment,
  decrement,
  check,
} from "../modules/Carts";
import { GetCartResponse } from "../types/dto";
import trash from "../assets/svgs/trash.svg";

function Cart({ id, count, product, checked }: GetCartResponse) {
  const dispatch = useDispatch();

  const increase = () => {
    dispatch(increment({ id, count }));
  };

  const decrease = () => {
    dispatch(decrement({ id, count }));
  };

  const handleChecked = () => {
    dispatch(check({ id, checked }));
  };

  const deleteClicked = () => {
    if (window.confirm("해당 상품을 삭제하시겠습니까?")) {
      dispatch(deleteCart(id));
      dispatch(getCarts());
    }
  };

  return (
    <React.Fragment>
      <div className="cart-container" data-testid="cart">
        <div className="flex gap-15 mt-10">
          <input
            className="checkbox"
            name="checkbox"
            type="checkbox"
            checked={checked}
            onChange={handleChecked}
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
          <img
            className="cart-trash-svg"
            src={trash}
            alt="삭제"
            onClick={deleteClicked}
          />
          <div className="number-input-container">
            <input
              type="number"
              className="number-input"
              value={count}
              disabled
            />
            <div>
              <button className="number-input-button" onClick={increase}>
                ▲
              </button>
              <button className="number-input-button" onClick={decrease}>
                ▼
              </button>
            </div>
          </div>
          <span className="cart-price">
            {(product.price * count).toLocaleString()}원
          </span>
        </div>
      </div>
      <hr className="divide-line-thin mt-10" />
    </React.Fragment>
  );
}

export default Cart;

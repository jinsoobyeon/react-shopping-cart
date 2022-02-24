import React from "react";
import { GetOrderDetailHook } from "../types/dto";

function OrderDetail({ name, imageUrl, quantity }: GetOrderDetailHook) {
  return (
    <React.Fragment>
      <div className="order-container" data-testid="orderDetail">
        <div className="flex gap-15 mt-10">
          <img
            className="w-144 h-144"
            src={imageUrl}
            alt={name}
            loading="lazy"
          />
          <div className="flex-col gap-15">
            <span className="order-name">{name}</span>
            <span>{`수량: ${quantity}`}</span>
          </div>
        </div>
      </div>
      <hr className="divide-line-thin mt-10" />
    </React.Fragment>
  );
}

export default OrderDetail;

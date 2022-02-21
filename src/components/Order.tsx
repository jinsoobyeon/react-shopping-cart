import { GetOrderResponse } from "../types/dto";

function OrderList({ id, orderDetails, index }: GetOrderResponse) {
  return (
    <div className="order-list" data-testId="order">
      <div className="order-list__header">
        <span>{`주문번호: ${++index}`}</span>
        <span>상세보기 &gt;</span>
      </div>
      {orderDetails.map((orderDetail) => (
        <div className="order-list-item" key={orderDetail.id}>
          <div className="flex gap-15 mt-10">
            <img
              className="w-144 h-144"
              src={orderDetail.imageUrl}
              alt={orderDetail.name}
              loading="lazy"
            />
            <div className="flex-col gap-15">
              <span className="order-name">{orderDetail.name}</span>
              <span className="order-info">{`${orderDetail.price.toLocaleString()}원 / 수량: ${
                orderDetail.quantity
              }개`}</span>
            </div>
          </div>
          <button className="primary-button-small flex-center self-start">
            장바구니
          </button>
        </div>
      ))}
    </div>
  );
}
export default OrderList;

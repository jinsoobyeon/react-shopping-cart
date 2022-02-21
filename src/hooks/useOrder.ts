import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules/Store";
import { getOrders } from "../modules/Orders";

function useOrder() {
  const dispatch = useDispatch();

  const [totalOrderPrice, setTotalOrderPrice] = useState(0);

  const orders = useSelector((state: RootState) => state.orders.ordersList);

  const orderDetails = orders
    .map((order) => {
      return order.orderDetails;
    })
    .reduce((previous, current) => {
      return [...previous, ...current];
    }, []);

  const handleOrderTotal = useCallback(() => {
    setTotalOrderPrice(
      orderDetails
        .map((orderDetail) => {
          return orderDetail.price * orderDetail.quantity;
        })
        .reduce((previous, current) => previous + current, 0)
    );
  }, [orderDetails]);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);

  useEffect(() => {
    handleOrderTotal();
  }, [handleOrderTotal]);

  return { orders, orderDetails, totalOrderPrice };
}
export default useOrder;

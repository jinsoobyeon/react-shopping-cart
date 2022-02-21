import useOrder from "../hooks/useOrder";
import Order from "../components/Order";

function OrderList() {
  const { orders } = useOrder();
  return (
    <section className="order-section">
      <header className="flex-col-center mt-20">
        <h2 className="order-section__title">주문 목록</h2>
        <hr className="divide-line mt-20" />
      </header>
      {orders.map((order, index) => (
        <Order
          key={order.id}
          id={order.id}
          orderDetails={order.orderDetails}
          index={index}
        />
      ))}
    </section>
  );
}

export default OrderList;

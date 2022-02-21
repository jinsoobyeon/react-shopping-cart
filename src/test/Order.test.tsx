import { render, screen } from "@testing-library/react";
import OrderDetail from "../components/OrderDetail";
import Order from "../components/Order";

describe("Order", () => {
  it("OrderDetail Component", () => {
    const orderDetail = {
      id: 1,
      name: "[리뉴얼]젓가락(종이)-정성을 담아",
      price: 21800,
      imageUrl:
        "https://cdn-mart.baemin.com/sellergoods/main/5297837f-5ecd-4945-be2f-4a75854cd06e.jpg",
      quantity: 5,
    };

    render(
      <OrderDetail
        id={orderDetail.id}
        name={orderDetail.name}
        price={orderDetail.price}
        imageUrl={orderDetail.imageUrl}
        quantity={orderDetail.quantity}
      />
    );

    const orderDetailElement = screen.getByTestId("orderDetail");
    expect(orderDetailElement).not.toBeNull();
  });

  it("Order Component", () => {
    const order = {
      id: 1,
      orderDetails: [
        {
          id: 1,
          name: "[리뉴얼]젓가락(종이)-정성을 담아",
          price: 21800,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/5297837f-5ecd-4945-be2f-4a75854cd06e.jpg",
          quantity: 5,
        },
        {
          id: 2,
          name: "젓가락(종이)-웬만해선 이 맛을 막을 수 없다",
          price: 21800,
          imageUrl:
            "https://cdn-mart.baemin.com/sellergoods/main/1b6e926b-52a3-4a92-8db5-fddaccdb2583.jpg",
          quantity: 3,
        },
      ],
    };

    render(<Order id={order.id} orderDetails={order.orderDetails} index={1} />);

    const orderElement = screen.getByTestId("order");
    expect(orderElement).not.toBeNull();
  });
});

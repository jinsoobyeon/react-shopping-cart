import { render, screen } from "@testing-library/react";
import OrderDetail from "../components/OrderDetail";

describe("Order", () => {
  it("OrderDetail State", () => {
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
});

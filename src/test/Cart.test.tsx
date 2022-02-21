import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../modules/Store";
import Cart from "../components/Cart";

describe("Cart", () => {
  it("Cart Component", () => {
    const cart = {
      id: 1,
      product: {
        id: 1,
        name: "[리뉴얼]젓가락(종이)-정성을 담아",
        price: 21800,
        imageUrl:
          "https://cdn-mart.baemin.com/sellergoods/main/5297837f-5ecd-4945-be2f-4a75854cd06e.jpg",
      },
      quantity: 1,
      checked: true,
    };

    render(
      <Provider store={store}>
        <Cart
          id={cart.id}
          product={cart.product}
          quantity={cart.quantity}
          checked={cart.checked}
        />
      </Provider>
    );

    const cartElement = screen.getByTestId("cart");
    expect(cartElement).not.toBeNull();
  });
});

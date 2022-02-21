import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../modules/Store";
import Product from "../components/Product";

describe("Product", () => {
  it("Product Component", () => {
    const product = {
      id: 1,
      name: "냉면용기(대)",
      price: 83700,
      imageUrl: "https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg",
    };

    render(
      <BrowserRouter>
        <Provider store={store}>
          <Product
            id={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        </Provider>
      </BrowserRouter>
    );

    const productElement = screen.getByTestId("product");
    expect(productElement).not.toBeNull();
  });
});

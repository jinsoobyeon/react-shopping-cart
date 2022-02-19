import React, { useEffect } from "react";
import useProduct from "../hooks/useProduct";
import Product from "../components/Product";
import { GetProdutResponse } from "../types/dto";
import Pagination from "../components/Pagination";

function ProductList() {
  const { limit, page, setPage, products, handleLimit } = useProduct();

  const offset = (page - 1) * limit;

  useEffect(() => {
    handleLimit();
    window.addEventListener("resize", handleLimit);
  }, [handleLimit]);

  return (
    <React.Fragment>
      <section className="product-container">
        {products
          .slice(offset, offset + limit)
          .map((product: GetProdutResponse) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
      </section>
      <Pagination total={products.length} limit={limit} setPage={setPage} />
    </React.Fragment>
  );
}

export default ProductList;

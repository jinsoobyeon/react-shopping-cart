import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../modules/Store";

function useProduct() {
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);

  const products = useSelector(
    (state: RootState) => state.products.productsList
  );

  const handleLimit = () => {
    window.innerWidth >= 1440 && setLimit(8);
    window.innerWidth < 1440 && setLimit(6);
  };

  return { limit, page, setPage, products, handleLimit };
}

export default useProduct;

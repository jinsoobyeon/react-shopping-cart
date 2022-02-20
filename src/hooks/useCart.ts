import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules/Store";
import { getCarts, totalCheck } from "../modules/Carts";

function useCart() {
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalChecked, setTotalChecked] = useState(true);

  const carts = useSelector((state: RootState) => state.carts.cartsList);

  const handleTotalChecked = () => {
    setTotalChecked(!totalChecked);
  };

  const handleTotalPrice = useCallback(() => {
    setTotalPrice(
      carts
        .map((cart) => {
          if (cart.checked) {
            return cart.product.price * cart.count;
          }
          return 0;
        })
        .reduce((previous, current) => previous + current, 0)
    );
  }, [carts]);

  useEffect(() => {
    dispatch(getCarts());
  }, [dispatch]);

  useEffect(() => {
    handleTotalPrice();
  }, [handleTotalPrice]);

  useEffect(() => {
    dispatch(totalCheck(totalChecked));
  }, [dispatch, totalChecked]);

  return { carts, totalPrice, totalChecked, handleTotalChecked };
}

export default useCart;

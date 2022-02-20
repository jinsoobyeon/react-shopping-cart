import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules/Store";
import { getCarts, deleteCart, totalCheck } from "../modules/Carts";

function useCart() {
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalChecked, setTotalChecked] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  const carts = useSelector((state: RootState) => state.carts.cartsList);

  const handleTotalChecked = () => {
    setTotalChecked(!totalChecked);
  };

  const handleTotal = useCallback(() => {
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

    setTotalCount(
      carts
        .map((cart) => {
          if (cart.checked) {
            return cart.count;
          }
          return 0;
        })
        .reduce((previous, current) => previous + current, 0)
    );
  }, [carts]);

  const deleteChecked = () => {
    if (window.confirm("선택한 상품을 삭제하시겠습니까?")) {
      carts.forEach((cart) => {
        cart.checked && dispatch(deleteCart(cart.id));
      });
      dispatch(getCarts());
    }
  };

  useEffect(() => {
    dispatch(getCarts());
  }, [dispatch]);

  useEffect(() => {
    handleTotal();
  }, [handleTotal]);

  useEffect(() => {
    dispatch(totalCheck(totalChecked));
  }, [dispatch, totalChecked]);

  return {
    carts,
    totalPrice,
    totalChecked,
    totalCount,
    handleTotalChecked,
    deleteChecked,
  };
}

export default useCart;

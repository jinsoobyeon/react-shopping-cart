import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../modules/Store";
import { getCarts } from "../modules/Carts";

function useCart() {
  const dispatch = useDispatch();

  const carts = useSelector((state: RootState) => state.carts.cartsList);

  useEffect(() => {
    dispatch(getCarts());
  }, [dispatch]);

  return { carts };
}

export default useCart;

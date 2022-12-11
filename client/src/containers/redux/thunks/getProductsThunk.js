import { getProducts, setLoading } from "../slices/products";
import { productsList } from "./list";

export const getProductsThunk = () => {
  return async (dispatch, getState) => {
    await dispatch(setLoading(true));
    setTimeout(async () => {
      await dispatch(getProducts(productsList));
      await dispatch(setLoading(false));
    }, 2000);
  };
};

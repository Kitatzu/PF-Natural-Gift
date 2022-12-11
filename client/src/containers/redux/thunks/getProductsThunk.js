import { getProducts, setLoading } from "../slices/products";
import { productsList } from "./list";

export const getProductsThunk = () => {
  return async (dispatch, getState) => {
    dispatch(setLoading(true));
    dispatch(getProducts(productsList));
    dispatch(setLoading(false));
  };
};

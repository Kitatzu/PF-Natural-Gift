import { setProducts, startLoadingProducts } from "../Slices/setProducts";
import axios from "axios";

export const getProducts = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingProducts());
    // Petición http
    const { data } = await axios.get(
      "https://naturalgift.up.railway.app/products"
    );
    dispatch(setProducts({ products: data, page: page }));
  };
};

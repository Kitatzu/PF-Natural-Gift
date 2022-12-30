import {
  setProducts,
  setDetails,
  startLoadingProducts,
} from "../Slices/setProducts";
import axios from "axios";

export const getProducts = (page = 0) => {
  return async (dispatch, getState) => {
    try {
      dispatch(startLoadingProducts());
      // Petición http
      const { data } = await axios.get(
        "https://naturalgift.up.railway.app/products"
      );
      dispatch(setProducts({ products: data, page: page }));
    } catch (error) {
      console.log("Something went wrong");
    }
  };
};

export const getDetails = (productId) => {
  return async (dispatch) => {
    dispatch(startLoadingProducts());
    // Petición http
    const { data } = await axios.get(
      "https://naturalgift.up.railway.app/products/" + productId
    );
    dispatch(setDetails({ productDetail: data }));
  };
};

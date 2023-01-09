import {
  setProducts,
  setDetails,
  startLoadingProducts,
} from "../Slices/setProducts";
import { setStatus } from "../Slices/setProducts";
import axios from "axios";
import Global from "../../Global";
import { setIsLoading } from "../Slices";
export const getProducts = (page = 0) => {
  return async (dispatch, getState) => {
    try {
      dispatch(startLoadingProducts());
      // Petición http
      const { data } = await axios.get(Global.ApiUrl + "/products");
      data.length > 0
        ? dispatch(setProducts({ products: data, page: page }))
        : dispatch(setStatus({ status: "error", msg: "No hay productos!" }));
    } catch (error) {
      console.log("Something went wrong");
      dispatch(setStatus({ status: "error", msg: "No hay productos!" }));
    }
  };
};

export const getDetails = (productId) => {
  return async (dispatch) => {
    dispatch(startLoadingProducts());
    // Petición http
    const { data } = await axios.get(Global.ApiUrl + "/products/" + productId);
    dispatch(setDetails({ productDetail: data }));
  };
};

import axios from "axios";

import Global from "../../Global";
import {
  getProducts,
  setProducts,
  setStatus,
  startLoadingProducts,
} from "../Slices";
export const filterProducts = (value) => {
  return async (dispatch) => {
    dispatch(startLoadingProducts());
    if (value !== "") {
      axios
        .get(Global.ApiUrl + "/filter/" + value)
        .then((response) => {
          const { dataSearch, status } = response.data;
          //console.log(dataSearch);
          dispatch(setProducts({ products: dataSearch, status }));
        })
        .catch((response) => {
          //console.log(response);
          const { status, msg } = response.response.data;
          dispatch(setStatus({ status, msg }));
        });
    } else {
      dispatch(getProducts());
    }
  };
};

import axios from "axios";
import Global from "../../Global";
import Swal from "sweetalert2";
import {
  setProductsCart,
  setTotalPrice,
  startLoadingCart,
} from "../Slices/Cart";

const userId = JSON.parse(localStorage.getItem("token"))
  ? JSON.parse(localStorage.getItem("token")).userId
  : null;
export const getCart = () => {
  return async (dispatch) => {
    dispatch(startLoadingCart());
    return axios
      .get(Global.ApiUrl + "/cart/" + userId)
      .then((response) => {
        console.log(response);
        dispatch(
          setProductsCart({
            status: response.data.status,
            products: response.data.cart.products,
          })
        );
        dispatch(setTotalPrice(response.data.cart.totalPrice));
      })
      .catch((e) => {
        Swal.fire({
          icon: "error",
          text: "No existen datos!",
          timer: 2000,
        });
        console.log(e);
      });
  };
};
export const setCart = (form) => {
  return async (dispatch) => {
    dispatch(startLoadingCart());
    return axios
      .post(Global.ApiUrl + "/cart/" + form.productId, {
        quantity: form.quantity,
        userId,
      })
      .then((response) => {
        Swal.fire({
          icon: "success",
          text: response.data.msg,
        });
      })
      .catch((e) => {
        Swal.fire({
          icon: "success",
          text: "Error al agregar producto!",
        });
        console.log(e);
      });
  };
};

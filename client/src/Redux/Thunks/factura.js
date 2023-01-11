import Global from "../../Global";
import axios from "axios";
import Swal from "sweetalert2";

import { getProducts } from "../Slices";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const stockProucts = (products) => {
  return async (dispatch) => {
    if (products.length > 0) {
      try {
        products.map(
          async (p) =>
            await axios
              .put(Global.ApiUrl + "/products/" + p.productId, {
                stock: p.stock,
              })
              .then((response) => {
                console.log(response.data);
              })
              .catch((response) => {
                console.log(response);
                return false;
              })
        );
        dispatch(getProducts());
      } catch (e) {
        console.log(e);
      }
    } else Toast.fire({ icon: "Error!", title: "No existen productos!" });
  };
};

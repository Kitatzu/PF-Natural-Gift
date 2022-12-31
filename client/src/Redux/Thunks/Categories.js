import Global from "../../Global";
import axios from "axios";
import { setCategories, startLoadingCategories } from "../Slices";
import Swal from "sweetalert2";
export const getCategories = () => {
  return async (dispatch) => {
    dispatch(startLoadingCategories());
    await axios
      .get(Global.ApiUrl + "/categories")
      .then((response) => {
        console.log(response);
        const { status, categories } = response.data;
        dispatch(setCategories({ status, categories }));
      })
      .catch((e) => {
        console.log(e);
        Swal.fire({
          title: "Categorias",
          text: "No hay categorias!",
          timer: 2000,
        });
      });
  };
};

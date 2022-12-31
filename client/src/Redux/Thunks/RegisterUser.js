import axios from "axios";
import Swal from "sweetalert2";
import Global from "../../Global";
import { setIsLoading, setIsLog, setUserName } from "../Slices";

export const RegisterUser = (form) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    return await axios
      .post(Global.ApiUrl + "/register", form)
      .then((data) => {
        dispatch(setIsLoading(false));
        const userData = {
          userName: form.userName,
          token: data.data.newToken,
        };
        localStorage.setItem("token", JSON.stringify(userData));
        Swal.fire({
          icon: "success",
          title: "Register OK!",
          text: "Usuario registrado correctamente!",
          confirmButtonText: "Continuar!",
        }).then(async (response) => {
          await dispatch(setUserName(form.userName));
          await dispatch(setIsLog(data.data.newToken));
        });
      })
      .catch((response) => {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Error no se registro el usuario!",
        });
        dispatch(setIsLoading(false));
        console.log(response);
      });
  };
};

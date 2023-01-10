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
        //console.log(data);
        dispatch(setIsLoading(false));
        const userData = {
          userId: data.data.id,
          userName: form.email,
          name: data.data.firstName,
          lastName: data.data.lastName,
          token: data.data.newToken,
        };
        localStorage.setItem("token", JSON.stringify(userData));
        Swal.fire({
          icon: "success",
          title: "Register OK!",
          text: "Usuario registrado correctamente!",
          confirmButtonText: "Continuar!",
        }).then(async (response) => {
          await dispatch(setUserName(userData.userName));
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

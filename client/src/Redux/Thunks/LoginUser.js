import axios from "axios";
import Swal from "sweetalert2";
import { setIsLog, setUserName } from "../Slices";
export const loginUser = (form) => {
  return async (dispatch) =>
    await axios
      .post("http://localhost:3001/login", form)
      .then((data) => {
        const userData = {
          userName: form.email,
          token: data.data.newToken,
        };
        localStorage.setItem("token", JSON.stringify(userData));

        Swal.fire({
          icon: "success",
          title: "Login Ok!",
          text: "Usuario Logeado correctamente!",
        }).then(async (response) => {
          await dispatch(setUserName(form.email));
          await dispatch(setIsLog(data.data.newToken));
        });
      })
      .catch((response) => {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Error no se Logeo el usuario!",
        });
        console.log(response);
      });
};

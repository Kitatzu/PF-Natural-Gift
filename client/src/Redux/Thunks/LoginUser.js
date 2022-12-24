import axios from "axios";
import Swal from "sweetalert2";

export const loginUser = (form) => {
  return async () =>
    await axios
      .post("http://localhost:3001/login", form)
      .then((data) => {
        console.log(data);

        Swal.fire({
          icon: "success",
          title: "Login Ok!",
          text: "Usuario Logeado correctamente!",
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

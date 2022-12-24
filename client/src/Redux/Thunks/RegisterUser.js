import axios from "axios";
import Swal from "sweetalert2";

export const RegisterUser = (form) => {
  return async () =>
    await axios
      .post("http://localhost:3001/register", form)
      .then((data) => {
        const UserInfo = {
          user: form.userName,
          email: form.email,
          token: data.data.newToken,
        };

        Swal.fire({
          icon: "success",
          title: "Register OK!",
          text: "Usuario registrado correctamente!",
        });
      })
      .catch((response) => {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Error no se registro el usuario!",
        });
        console.log(response);
      });
};

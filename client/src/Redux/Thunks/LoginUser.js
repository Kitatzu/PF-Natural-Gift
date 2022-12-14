import axios from "axios";
import Swal from "sweetalert2";
import Global from "../../Global";
import { setIsLoading, setIsLog, setUserName } from "../Slices";
export const loginUser = (origin, form, Token) => {
  return async (dispatch) => {
    if (origin === "local") {
      await dispatch(setIsLoading(true));
      await axios
        .post(Global.ApiUrl + "/login", form)
        .then((data) => {
          console.log(data);
          const userData = {
            userId: data.data.id,
            userName: form.email,
            name: data.data.firstName,
            lastName: data.data.lastName,
            avatar: form.avatar,
            token: data.data.newToken,
            rol: data.data.roles[0].roleName,
          };
          localStorage.setItem("token", JSON.stringify(userData));
          dispatch(setIsLoading(false));
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
          dispatch(setIsLoading(false));
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "Error usuario o contraseña invalidos",
          });
          //console.log(response);
        });
    } else if (origin === "google") {
      await dispatch(setIsLoading(true));
      await axios
        .get(Global.ApiUrl + "/users?email=" + form.email)
        .then((data) => {
          //console.log(data);
          const userData = {
            userId: data.data.id,
            userName: form.email,
            name: data.data.firstName,
            lastName: data.data.lastName,
            avatar: form.avatar,
            rol: data.data.roles[0].roleName,
            token: Token,
          };
          localStorage.setItem("token", JSON.stringify(userData));
          dispatch(setIsLoading(false));
          Swal.fire({
            icon: "success",
            title: "Login Ok!",
            text: "Usuario Logeado correctamente!",
          }).then(async (response) => {
            await dispatch(setUserName(form.email));
            await dispatch(setIsLog(Token));
          });
        })
        .catch(async (response) => {
          dispatch(setIsLoading(true));
          return await axios

            .post(Global.ApiUrl + "/register", form)
            .then((data) => {
              dispatch(setIsLoading(false));
              const userData = {
                userId: data.data.id,
                userName: form.email,
                name: data.data.firstName,
                lastName: data.data.lastName,
                avatar: form.avatar,
                rol: data.data.roles[0].roleName,
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
              //console.log(response);
            });
        });
    }
  };
};

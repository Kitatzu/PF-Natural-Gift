import axios from "axios";

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
        alert("Usuario registrado correctamente!");
        console.log(UserInfo);
      })
      .catch((response) => {
        console.log(JSON.parse(response));
      });
};

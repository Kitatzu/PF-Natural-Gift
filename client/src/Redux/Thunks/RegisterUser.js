import axios from "axios";

export const RegisterUser = async (form) => {
  await axios
    .post("http://localhost:3001/users/registerUser", form)
    .then(({ data }) => {
      console.log(data);
    })
    .catch(({ response }) => {
      console.log(response);
    });
};

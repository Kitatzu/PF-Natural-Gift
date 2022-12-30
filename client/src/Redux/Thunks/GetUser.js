import axios from "axios";
import Swal from "sweetalert2";
import { setData } from "../Slices";
export const GetUser = (email, origin) => {
  return async (dispatch) => {
    return await axios
      .get("http://localhost:3001/users?" + email)
      .then((response) => {
        const { firstName, lastName, email, userName } = response.data[0];
        console.log(response.data);
        dispatch(setData({ firstName, lastName, email, userName }));
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Internal server error",
        });
      });
  };
};

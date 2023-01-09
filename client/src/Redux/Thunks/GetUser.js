import axios from "axios";
import Global from "../../Global";
import Swal from "sweetalert2";
import { setData, setIsLoading } from "../Slices/user";
export const GetUser = (email, origin) => {
  console.log(origin);
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    return await axios
      .get(Global.ApiUrl + "/users?email=" + email)
      .then((response) => {
        const { firstName, lastName, email, userName } = response.data[0];
        console.log(response.data);
        dispatch(setIsLoading(false));
        dispatch(setData({ firstName, lastName, email, userName }));
      })
      .catch((err) => {
        console.log(err);
        dispatch(setIsLoading(false));
        Swal.fire({
          icon: "error",
          title: "Internal server error",
        });
      });
  };
};

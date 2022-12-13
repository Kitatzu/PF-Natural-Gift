import { getProducts, setLoading } from "../slices/products";
import axios from "axios";
import { setError } from "../slices/Errors";
const HOST_API = "http://localhost";
const PORT_API = 3001;
export const getProductsThunk = () => {
  return async (dispatch, getState) => {
    await dispatch(setLoading(true));
    await axios
      .get(`${HOST_API}:${PORT_API}/products`)
      .then(async (response) => {
        response.data.length !== 0
          ? dispatch(getProducts(response.data))
          : dispatch(
              setError({
                error: true,
                type: 400,
                msg: "No data found...",
              }),
              dispatch(setLoading(false))
            );
      })
      .catch((error) => {
        dispatch(
          setError({
            error: true,
            type: 500,
            msg: error,
          })
        );
        dispatch(setLoading(false));
      })
      .then(async () => await dispatch(setLoading(false)));
  };
};

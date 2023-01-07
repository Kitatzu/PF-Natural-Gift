import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Thunks/index";

function Prods() {
    useEffect(() => {
        dispatch(getProducts());
      }, []);
  return (
    <div>Prods</div>
  )
}

export default Prods
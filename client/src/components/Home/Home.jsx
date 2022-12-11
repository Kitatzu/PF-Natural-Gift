import "./Home.css";
import { useEffect, React } from "react";
import { useDispatch } from "react-redux";
import { getProductsThunk } from "../../containers/redux/thunks";
import Filter from "../Filters/Filters";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  return (
    <div className="Home">
      <Filter />
      <div className="Home-content">
        <h1 className="Home-title">Products</h1>
      </div>
    </div>
  );
};

export default Home;

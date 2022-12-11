import "./Home.css";
import { React } from "react";

import Filter from "../Filters/Filters";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div className="Home">
      <Filter />
      <div className="Home-content">
        <h2 className="Home-title">Categories: all</h2>
        <Products />
      </div>
    </div>
  );
};

export default Home;

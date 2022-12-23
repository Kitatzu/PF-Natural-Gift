import React from "react";
import Banner from "./Banner/Banner.jsx"
import InfoSection from "./InfoSection/InfoSection.jsx";
import ProductsHome from "./ProductsHome/ProductsHome.jsx";
import Waves from "../Waves/Waves";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <Banner/>
      <InfoSection/>
      <ProductsHome/>
      <Waves/>
    </div>
  )
};
export default Home;

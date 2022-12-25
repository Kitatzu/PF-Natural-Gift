import React from "react";
import Banner from "./Banner/Banner.jsx";
import InfoSection from "./InfoSection/InfoSection.jsx";
import ProductsHome from "./ProductsHome/ProductsHome.jsx";
import Waves from "../Waves/Waves";
import "./Home.scss";
import NavBar from "../NavBar/NavBar.jsx";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Home = () => {
  const isLog = useSelector((store) => store.user.isLog);
  return (
    <div className="Home">
      {!isLog && <Redirect to="/login" />}
      <NavBar />
      <Banner />
      <InfoSection />
      <ProductsHome />
      <Waves />
    </div>
  );
};
export default Home;

import React from "react";
import Banner from "./Banner/Banner.jsx";
import InfoSection from "./InfoSection/InfoSection.jsx";
import ProductsHome from "./ProductsHome/ProductsHome.jsx";
import Waves from "../Waves/Waves";
import "./Home.scss";
import NavBar from "../NavBar/NavBar.jsx";
import { useSelector } from "react-redux";
import AppBar from "../AppBar/AppBar.jsx";

const Home = () => {
  const mode = useSelector((store) => store.theme.mode);
  const Theme = useSelector((store) => store.theme);
  return (
    <div className="Home" style={{ background: Theme[mode].primary }}>
      {/* {!isLog && <Redirect to="/login" />}  */}
      <NavBar />
      <Banner />
      <InfoSection />
      <ProductsHome />
      <AppBar />
      <Waves />
    </div>
  );
};
export default Home;

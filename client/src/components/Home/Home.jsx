import React from "react";
import Banner from "./Banner/Banner.jsx";
import InfoSection from "./InfoSection/InfoSection.jsx";
import "./Home.scss";
import NavBar from "../NavBar/NavBar.jsx";

const Home = () => {
  return (
    <div className="Home">
      <NavBar />
      <Banner />
      <InfoSection />
    </div>
  );
};
export default Home;

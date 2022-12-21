import React from "react";
import Banner from "./Banner/Banner.jsx"
import InfoSection from "./InfoSection/InfoSection.jsx";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <Banner/>
      <InfoSection/>
    </div>
  )
};
export default Home;

import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import Principles from "../Principles/Principles";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="home-bg">
      <HomeBanner></HomeBanner>
      <Services></Services>
      <Principles></Principles>
    </div>
  );
};

export default Home;

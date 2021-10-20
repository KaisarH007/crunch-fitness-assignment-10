import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import Principles from "../Principles/Principles";
import Services from "../Services/Services";
import Training from "../Training/Training";

const Home = () => {
  return (
    <div className="home-bg">
      <HomeBanner></HomeBanner>
      <Services></Services>
      <Principles></Principles>
      <Training></Training>
    </div>
  );
};

export default Home;

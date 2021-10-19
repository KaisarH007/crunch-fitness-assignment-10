import React from "react";
import HomeBanner from "../HomeBanner/HomeBanner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="home-bg">
      <HomeBanner></HomeBanner>
      <Services></Services>
    </div>
  );
};

export default Home;

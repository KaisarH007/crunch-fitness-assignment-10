import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner-1 (2).jpg";
import banner2 from "../../../images/banner-2 (2).jpg";
import banner3 from "../../../images/banner-3 (2).jpg";

const HomeBanner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            style={{ height: "60vh" }}
            src={banner1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>Let's Crunch Agin</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "60vh" }}
            src={banner2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h1>Our Gym is Your Gym</h1>
            <p>
              Kick your feet up! With a gym designed around you, we think you’ll
              love it here.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "60vh" }}
            src={banner3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>Energy is for Everyone</h1>
            <p>Believe in the power of a motivating group fitness community.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HomeBanner;

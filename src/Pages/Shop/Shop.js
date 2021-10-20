import React from "react";
import "./Shop.css";
import product1 from "../../images/product/product-1.png";
import product2 from "../../images/product/product-2.png";
import product3 from "../../images/product/product-3.png";
import product4 from "../../images/product/product-4.png";
import { Button } from "react-bootstrap";
const Shop = () => {
  return (
    <div className="home-bg text-white">
      <div className="shop-banner text-center  d-flex align-items-center justify-content-center text-white ">
        <div>
          <h1 className="title-styel">Welcome to Crunch Shop</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6  d-flex align-items-center justify-content-center">
            <div>
              <h2>Gym Product-1</h2>
              <h4 className="text-warning">Price $75</h4>
              <p>
                Rimply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the when an unknown printer took a galley scrambled.
                Rimply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the when an unknown printer took a galley scrambled.
                Rimply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the when an unknown printer took a galley scrambled.
                Rimply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the when an unknown printer took a galley scrambled.
              </p>
              <Button className="fw-bold" variant="warning">
                Buy Now
              </Button>
            </div>
          </div>

          <div className="col-md-6">
            <img style={{ width: "100%" }} src={product1} alt="" />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <img style={{ width: "100%" }} src={product2} alt="" />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div>
              <h2>Gym Product-2</h2>
              <h4 className="text-warning">Price $70</h4>
              <p>
                Rimply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the when an unknown printer took a galley scrambled.
                Rimply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the when an unknown printer took a galley scrambled.
                Rimply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the when an unknown printer took a galley scrambled.
                Rimply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the when an unknown printer took a galley scrambled.
              </p>
              <Button className="fw-bold" variant="warning">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
        <hr />
        <div className="row ">
          <div className="col-md-6  d-flex align-items-center justify-content-center">
            <div>
              <h2>Gym Product-3</h2>
              <h4 className="text-warning">Price $85</h4>
              <p>
                Rimply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the when an unknown printer took a galley scrambled.
                Rimply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the when an unknown printer took a galley scrambled.
                Rimply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the when an unknown printer took a galley scrambled.
                Rimply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the when an unknown printer took a galley scrambled.
              </p>
              <Button className="fw-bold" variant="warning">
                Buy Now
              </Button>
            </div>
          </div>

          <div className="col-md-6">
            <img style={{ width: "100%" }} src={product3} alt="" />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <img style={{ width: "100%" }} src={product4} alt="" />
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div>
              <h2>Gym Product-4</h2>
              <h4 className="text-warning">Price $80</h4>
              <p>
                Rimply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the when an unknown printer took a galley scrambled.
                Rimply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the when an unknown printer took a galley scrambled.
                Rimply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the when an unknown printer took a galley scrambled.
                Rimply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever
                since the when an unknown printer took a galley scrambled.
              </p>
              <Button className="fw-bold" variant="warning">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

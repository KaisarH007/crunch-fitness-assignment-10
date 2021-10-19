import React from "react";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="home-bg text-white">
      <div className="shop-banner text-center  d-flex align-items-center justify-content-center text-white ">
        <div>
          <h1 className="title-styel">Welcome to shop</h1>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row my-4">
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
            </div>
          </div>

          <div className="col-md-6 my-4">
            <img
              style={{ width: "100%" }}
              src="https://radiustheme.com/demo/wordpress/gymedge/wp-content/uploads/2017/01/product_08.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="row p-4 mt-4">
          <div className="col-md-6">
            <img
              style={{ width: "100%" }}
              src="https://radiustheme.com/demo/wordpress/gymedge/wp-content/uploads/2017/01/product_09-300x300@2x.jpg"
              alt=""
            />
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
            </div>
          </div>
        </div>
        <div className="row mt-4">
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
            </div>
          </div>

          <div className="col-md-6 my-4">
            <img
              style={{ width: "100%" }}
              src="https://5.imimg.com/data5/SI/QI/MY-53869928/optimum-nutrition-gold-100-25-casein-cookies-n-cream-power-500x500.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;

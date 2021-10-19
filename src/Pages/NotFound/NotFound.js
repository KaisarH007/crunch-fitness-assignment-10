import Button from "@restart/ui/esm/Button";
import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import photo from "../../images/404-photo-removebg-preview.png";
const NotFound = () => {
  return (
    <div className="home-bg py-5 text-white d-flex align-items-center justify-content-center">
      <div>
        <img src={photo} alt="" /> <br />
      </div>
    </div>
  );
};

export default NotFound;

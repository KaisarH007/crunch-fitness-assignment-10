import React from "react";
import { Button } from "react-bootstrap";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../images/logo.png";
const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
const mailIcon = <FontAwesomeIcon icon={faMailBulk} />;

const Footer = () => {
  return (
    <div className="footer-bg text-white">
      <div className="container">
        <div className="row p-4">
          <div className="col-md-4">
            <h3>
              {" "}
              <img style={{ width: "100px" }} src={logo} alt="" /> Crunch
              Fitness
            </h3>
            <p className="text-muted">
              Great lesson ideas and lesson plans for ESL teachers! Educators
              can customize lesson plans to best.
            </p>
            <small>{phoneIcon} +9714 3453033</small> <br />
            <small>{mailIcon} crunh_fitness@gmail.com</small> <br />
          </div>
          <div className="col-md-2 text-center">
            <h5>Company</h5>
            <div className="text-muted">
              <p>About</p>
              <p>Coursesy</p>
              <p>Events</p>
              <p>Instructor</p>
              <p>Career</p>
              <p>Become a Teacher</p>
            </div>
          </div>
          <div className="col-md-2 text-center">
            <h5>Platform</h5>
            <div className="text-muted">
              <p>Browse Library</p>
              <p>Library</p>
              <p>Partners</p>
              <p>News & Blogs</p>
              <p>FAQs</p>
              <p>Tutorials</p>
            </div>
          </div>
          <div className="col-md-4">
            <h4 className="text-center">Subscrib</h4>
            <input
              className="p-2 rounded m-2"
              type="text"
              placeholder="Enter your email"
            />

            <Button className="p-2">Submit</Button>
            <p>
              <small className="text-muted">
                Get the latest news and updates right at your inbox.
              </small>
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="text-center text-muted p-2">
        <p>&copy; 2021 Crunch Fitness. All rights reserved</p>
      </div>
    </div>
  );
};
export default Footer;

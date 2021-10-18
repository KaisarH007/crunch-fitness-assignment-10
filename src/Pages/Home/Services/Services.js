import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("servicesData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="home-bg p-4">
      <div className="container  ">
        <h2 className="text-center text-white mb-4">Our Services</h2>
        <Row xs={1} md={2} className="g-4">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Services;

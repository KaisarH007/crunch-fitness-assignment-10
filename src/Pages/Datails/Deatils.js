import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Details.css";

const Deatils = () => {
  const { serviceID } = useParams();
  const [serviceDetails, setServiceDetails] = useState([]);
  const [singleService, setSingleService] = useState({});

  useEffect(() => {
    fetch("/serviceDetails.json")
      .then((response) => response.json())
      .then((data) => setServiceDetails(data));
  }, []);

  useEffect(() => {
    const foundServive = serviceDetails.find(
      (service) => service.id === serviceID
    );
    setSingleService(foundServive);
  }, [serviceDetails]);

  return (
    <div className="home-bg py-5 text-white">
      <div className="detail-container container ">
        <div className="row">
          <div className="col-md-6">
            <img style={{ width: "100%" }} src={singleService?.photo} alt="" />
          </div>
          <div className="col-md-6">
            <h1>{singleService?.title}</h1>
            <p>{singleService?.description}</p>
            <h5>Monthly price: ${singleService?.priceM}</h5>
            <h5>Yearly price: ${singleService?.priceY}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deatils;

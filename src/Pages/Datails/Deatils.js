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
    <div className="detail-container container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img className="img-fluid" src={singleService?.photo} alt="" />
        </div>
        <div className="col-md-6">
          <h3>{singleService?.title}</h3>
          <p>{singleService?.description}</p>
          <h4>Monthly price $ {singleService?.priceM}</h4>
          <h4>Yearly price $ {singleService?.priceY}</h4>
        </div>
      </div>
    </div>
  );
};

export default Deatils;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Deatils = () => {
  const { serviceID } = useParams();
  const [serviceDetails, setServiceDetails] = useState([]);
  const [singleService, setSingleService] = useState({});

  useEffect(() => {
    fetch("serviceDetails.json")
      .then((response) => response.json())
      .then((data) => setServiceDetails(data));
  }, []);

  useEffect(() => {
    const foundServive = serviceDetails.find(
      (service) => service.id === serviceID
    );
    console.log(foundServive);
  }, [serviceDetails]);

  return (
    <div>
      <h1>This is Details Page {serviceID}</h1>
    </div>
  );
};

export default Deatils;

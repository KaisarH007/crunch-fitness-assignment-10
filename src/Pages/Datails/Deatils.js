import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router";

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
    <div className="home-bg">
      <Card>
        <Card.Img variant="top" src={singleService?.photo} />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Deatils;

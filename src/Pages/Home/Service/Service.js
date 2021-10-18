import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { id, title, description, photo } = service;

  return (
    <div>
      <Col>
        <Card className="card-hover">
          <Card.Img variant="top" style={{ height: "250px" }} src={photo} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Link to={`/details/${id}`}>
              <Button variant="dark">Click for Details</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;

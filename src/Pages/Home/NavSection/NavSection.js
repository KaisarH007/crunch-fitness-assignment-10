import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavSection = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="#home">Hamid Gym</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              about
            </Nav.Link>
            <Nav.Link as={Link} to="/shop">
              Shop
            </Nav.Link>

            <Nav.Link as={Link} to="/login">
              login
            </Nav.Link>

            <Button variant="light">Log Out</Button>

            <Navbar.Text>
              Signed in as: <a href="#login">kh</a>
            </Navbar.Text>
          </Navbar.Collapse>
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavSection;

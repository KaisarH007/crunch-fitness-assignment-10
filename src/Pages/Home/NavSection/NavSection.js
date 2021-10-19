import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import logo from "../../../images/logo.png";

const NavSection = () => {
  const { user, handleLogOut } = useAuth();

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
          <Navbar.Brand className="d-flex" href="#home">
            <img style={{ width: "100px" }} src={logo} alt="" />{" "}
            <h4 className="fw-bold mt-2"> Crunch Fitness</h4>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end fs-5 fw-bold">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/shop">
              Shop
            </Nav.Link>

            {!user.email ? (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            ) : (
              <Button className="m-2" variant="light" onClick={handleLogOut}>
                Log Out
              </Button>
            )}

            <Navbar.Text>
              Signed in as: <a href="#login">{user.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavSection;

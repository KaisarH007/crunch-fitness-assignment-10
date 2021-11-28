import React from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
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
            <img style={{ width: "80px", height: "40px" }} src={logo} alt="" />{" "}
            <h4 className="fw-bold "> Crunch Fitness</h4>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end fs-5 fw-bold ">
            <Nav.Link className="text-white" as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link className="text-white" as={Link} to="/shop">
              Shop
            </Nav.Link>

            {!user.displayName ? (
              <Nav.Link className="text-white" as={Link} to="/login">
                Login
              </Nav.Link>
            ) : (
              <Button className="m-2" variant="danger" onClick={handleLogOut}>
                Log Out
              </Button>
            )}

            <Navbar.Text>
              <span className="text-white mx-2">{user.displayName}</span>
              <Image
                style={{ width: "40px" }}
                src={user?.photoURL}
                roundedCircle
              />
            </Navbar.Text>
          </Navbar.Collapse>
          <Nav className="me-auto"></Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavSection;

import React from "react";
import { Button } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import loginLogo from "../../images/login-logo.png";

const Login = () => {
  const { user, handleGoogleLogIn } = useAuth();
  return (
    <div className="home-bg text-white  d-flex align-items-center justify-content-center py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 text-center">
            <h1>Please Login or Register</h1>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Name"
            /> <br /> <br />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email"
            /> <br /> <br />
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
            />{" "}
            <br /> <br />
            <h4>---- or ----</h4>
            <Button
              className="px-4 fw-bold"
              onClick={handleGoogleLogIn}
              variant="success"
            >
              Google Sign In
            </Button>
          </div>
          <div className="col-md-6">
            <img style={{ width: "100%" }} src={loginLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
